"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var PbMessageCreate_1 = require("../Metaprogramming-ts/src/netInfoCreate/PbMessageCreate");
var protoDirPath = path.resolve(__dirname, "../proto");
var msgDirPath = path.resolve(__dirname, "../ts/jypFrame/netMsg");
var srcDirPath = path.resolve(__dirname, "../src/jypFrame/netMsg");
console.log(" protoDirPath " + protoDirPath + " msgDirPath " + msgDirPath);
PbMessageCreate_1.createServerPbMessage(protoDirPath, msgDirPath, function () {
    var oldPaths = [path.join(msgDirPath, "pb.js")];
    var movePbPaths = [path.join(srcDirPath, "pb.js")];
    for (var index = 0; index < oldPaths.length; index++) {
        console.log("remove " + oldPaths[index] + " to " + movePbPaths[index]);
        fs.renameSync(oldPaths[index], movePbPaths[index]);
    }
});
//# sourceMappingURL=createServerMsg.js.map