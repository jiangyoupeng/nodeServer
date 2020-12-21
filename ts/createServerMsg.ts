
import * as path  from 'path';
import { createServerPbMessage } from '../Metaprogramming-ts/src/netInfoCreate/PbMessageCreate';
let protoDirPath = path.resolve(__dirname, '../proto')
let msgDirPath = path.resolve(__dirname, '../ts/jypFrame/netMsg')
console.log(' protoDirPath '+ protoDirPath + ' msgDirPath ' + msgDirPath)
createServerPbMessage(protoDirPath, msgDirPath)