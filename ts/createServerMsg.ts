import * as fs from "fs"
import * as path from "path"
import { createServerPbMessage } from "../Metaprogramming-ts/src/netInfoCreate/PbMessageCreate"
let protoDirPath = path.resolve(__dirname, "../proto")
let msgDirPath = path.resolve(__dirname, "../ts/jypFrame/netMsg")
let srcDirPath = path.resolve(__dirname, "../src/jypFrame/netMsg")
console.log(" protoDirPath " + protoDirPath + " msgDirPath " + msgDirPath)
createServerPbMessage(protoDirPath, msgDirPath, () => {
    let oldPaths = [path.join(msgDirPath, "pb.js")]
    let movePbPaths = [path.join(srcDirPath, "pb.js")]

    for (let index = 0; index < oldPaths.length; index++) {
        console.log("remove " + oldPaths[index] + " to " + movePbPaths[index])
        fs.renameSync(oldPaths[index], movePbPaths[index])
    }
})
