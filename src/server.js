"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
// import ws from 'ws';
var ws = require("ws");
var https = require("https");
//指定開啟的 port
var PORT = 3000;
//創建 express 的物件，並綁定及監聽 3000 port ，且設定開啟後在 console 中提示
var server = https.createServer()
    .listen(PORT, function () { return console.log("Listening on " + PORT); });
//將 express 交給 SocketServer 開啟 WebSocket 的服務
var wss = new ws.Server({ server: server });
//當 WebSocket 從外部連結時執行
wss.on('connection', function (wsSocket) {
    //連結時執行此 console 提示
    console.log('Client connected');
    //當 WebSocket 的連線關閉時執行
    wsSocket.on('close', function () {
        console.log('Close connected');
    });
    wsSocket.on('message', function (event) {
        console.log("event.data " + event);
        setTimeout(function () {
            wsSocket.send("321");
        }, 1000);
    });
});
//# sourceMappingURL=server.js.map