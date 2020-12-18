// import express from 'express';
// import ws from 'ws';
import * as ws from 'ws';
import * as https  from 'https';

//指定開啟的 port
const PORT = 3000

//創建 express 的物件，並綁定及監聽 3000 port ，且設定開啟後在 console 中提示
const server = https.createServer()
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new ws.Server({ server })

//當 WebSocket 從外部連結時執行
wss.on('connection', wsSocket => {
    //連結時執行此 console 提示
    console.log('Client connected')
    //當 WebSocket 的連線關閉時執行
    wsSocket.on('close', () => {
        console.log('Close connected')
    })
    
    wsSocket.on('message', (event) => {
        console.log("event.data " + event)
        setTimeout(() => {
            wsSocket.send("321")
        }, 1000)
    })
})