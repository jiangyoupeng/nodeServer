"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
// import ws from 'ws';
var ws = require("ws");
var http = require("http");
var NetMsgRef_1 = require("./jypFrame/netMsg/NetMsgRef");
var UserConnection_1 = require("./game/UserConnection");
var pb_1 = require("./jypFrame/netMsg/pb");
var NetPbClassRef_1 = require("./jypFrame/netMsg/NetPbClassRef");
//指定開啟的 port
var PORT = 3000;
//創建 express 的物件，並綁定及監聽 3000 port ，且設定開啟後在 console 中提示
var server = http.createServer().listen(PORT, function () { return console.log("Listening on " + PORT); });
//將 express 交給 SocketServer 開啟 WebSocket 的服務
var wss = new ws.Server({ server: server });
var connectUserMap = new Map();
function connectSuccess(wsSocket, msg, params) {
    console.log(params);
    var cachConnectId = connectId++;
    var user = new UserConnection_1.UserConnection();
    user.wsSocket = wsSocket;
    connectUserMap.set(cachConnectId, user);
    //連結時執行此 console 提示
    console.log("cachConnectId connected");
    //當 WebSocket 的連線關閉時執行
    wsSocket.on("close", function () {
        console.log("Close connected cachConnectId:" + cachConnectId);
        connectUserMap.delete(cachConnectId);
    });
    wsSocket.on("error", function () {
        console.log("error connected cachConnectId:" + cachConnectId);
        connectUserMap.delete(cachConnectId);
    });
    wsSocket.on("message", function (event) {
        console.log("cachConnectId " + cachConnectId);
        console.log("event.data " + event);
        var streamReq = pb_1.pb.streamReq.decode(event);
        console.log("streamReq.msgName " + streamReq.msgName);
        var classObj = NetPbClassRef_1.NetPbClassRef[streamReq.msgName];
        if (classObj) {
            var reqObj = classObj.decode(event);
            NetMsgRef_1.NetMsgRef[streamReq.msgName + "Handle"](reqObj);
        }
        else {
            console.error("messsage data is not Identify data " + streamReq.msgName);
        }
    });
}
var connectId = 0;
//當 WebSocket 從外部連結時執行
wss.on("connection", function (wsSocket, msg) {
    console.log(msg.url);
    try {
        // 解析url 获取参数 如果有问题
        var dataStr = msg.url.slice(msg.url.indexOf("/?") + 2);
        var params = new Map();
        if (dataStr && dataStr !== "") {
            dataStr = decodeURI(dataStr);
            var dataArr = dataStr.split("&");
            for (var index = 0; index < dataArr.length; index++) {
                var element = dataArr[index];
                var keyValue = element.split("=");
                params.set(keyValue[0], keyValue[1]);
            }
        }
        connectSuccess(wsSocket, msg, params);
    }
    catch (error) {
        console.error("connect error url: " + msg.url + " error: " + error);
        wsSocket.terminate();
    }
});
//# sourceMappingURL=server.js.map