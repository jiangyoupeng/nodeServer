// 每次有一个socket 连接成功 就会有形成一个user connection
import * as ws from "ws"
export class UserConnection {
    // 用户uid
    private _uid: number = null

    public wsSocket: ws = null

    // 触发连接成功时
    onConnectSuccess() {}

    onConnectFailed() {}
}
