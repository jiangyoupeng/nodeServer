// import express from 'express';
// import ws from 'ws';
import * as ws from "ws"
import * as http from "http"
import { NetMsgRef } from "./jypFrame/netMsg/NetMsgRef"
import { UserConnection } from "./game/UserConnection"
import { pb } from "./jypFrame/netMsg/pb"
import { NetPbClassRef } from "./jypFrame/netMsg/NetPbClassRef"
import { create } from "domain"

//指定開啟的 port
const PORT = 3000

//創建 express 的物件，並綁定及監聽 3000 port ，且設定開啟後在 console 中提示
const server = http.createServer().listen(PORT, () => console.log(`Listening on ${PORT}`))
//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new ws.Server({ server })

let connectUserMap: Map<number, UserConnection> = new Map()

function connectSuccess(wsSocket: ws, msg: http.IncomingMessage, params: Map<string, any>) {
    console.log(params)

    let cachConnectId = connectId++
    let user = new UserConnection()
    user.wsSocket = wsSocket
    connectUserMap.set(cachConnectId, user)

    //連結時執行此 console 提示
    console.log("cachConnectId connected")

    //當 WebSocket 的連線關閉時執行
    wsSocket.on("close", () => {
        console.log("Close connected cachConnectId:" + cachConnectId)
        connectUserMap.delete(cachConnectId)
    })

    wsSocket.on("error", () => {
        console.log("error connected cachConnectId:" + cachConnectId)
        connectUserMap.delete(cachConnectId)
    })

    wsSocket.on("message", (event) => {
        console.log("cachConnectId " + cachConnectId)
        console.log("event.data " + event)

        let streamReq = pb.streamReq.decode(<Uint8Array>event)
        console.log("streamReq.msgName " + streamReq.msgName)
        let classObj = NetPbClassRef[streamReq.msgName]
        if (classObj) {
            let reqObj = classObj.decode(event)
            NetMsgRef[streamReq.msgName + "Handle"](reqObj)
        } else {
            console.error("messsage data is not Identify data " + streamReq.msgName)
        }
    })
    
}

let connectId = 0
//當 WebSocket 從外部連結時執行
wss.on("connection", (wsSocket: ws, msg: http.IncomingMessage) => {
    console.log(msg.url)
    try {
        // 解析url 获取参数 如果有问题
        let dataStr = msg.url.slice(msg.url.indexOf("/?") + 2)
        let params: Map<string, any> = new Map()
        if (dataStr && dataStr !== "") {
            dataStr = decodeURI(dataStr)
            let dataArr = dataStr.split("&")
            for (let index = 0; index < dataArr.length; index++) {
                const element = dataArr[index]
                const keyValue = element.split("=")
                params.set(keyValue[0], keyValue[1])
            }
        }
        connectSuccess(wsSocket, msg, params)
    } catch (error) {
        console.error("connect error url: " + msg.url + " error: " + error)
        wsSocket.terminate()
    }
})
