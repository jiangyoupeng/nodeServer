"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConnection = void 0;
var UserConnection = /** @class */ (function () {
    function UserConnection() {
        // 用户uid
        this._uid = null;
        this.wsSocket = null;
    }
    // 触发连接成功时
    UserConnection.prototype.onConnectSuccess = function () { };
    UserConnection.prototype.onConnectFailed = function () { };
    return UserConnection;
}());
exports.UserConnection = UserConnection;
//# sourceMappingURL=UserConnection.js.map