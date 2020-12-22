import * as ws from "ws";
export declare class UserConnection {
    private _uid;
    wsSocket: ws;
    onConnectSuccess(): void;
    onConnectFailed(): void;
}
