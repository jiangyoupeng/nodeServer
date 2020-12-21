"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var PbMessageCreate_1 = require("../Metaprogramming-ts/src/netInfoCreate/PbMessageCreate");
var protoDirPath = path.resolve(__dirname, '../proto');
var msgDirPath = path.resolve(__dirname, '../ts/jypFrame/netMsg');
console.log(' protoDirPath ' + protoDirPath + ' msgDirPath ' + msgDirPath);
PbMessageCreate_1.createServerPbMessage(protoDirPath, msgDirPath);
//# sourceMappingURL=createServerMsg.js.map