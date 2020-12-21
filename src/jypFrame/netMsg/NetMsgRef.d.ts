import { GetChannelReqHandle } from './GetChannelReq';
import { DecorateSkin2ReqHandle } from './DecorateSkin2Req';
import { BuySkin2ReqHandle } from './BuySkin2Req';
import { GetSkinSetting2ReqHandle } from './GetSkinSetting2Req';
import { DiamondGetReqHandle } from './DiamondGetReq';
import { GetAllSkin2ReqHandle } from './GetAllSkin2Req';
import { SixModeMoveReqHandle } from './SixModeMoveReq';
import { SixModeDiceNumReqHandle } from './SixModeDiceNumReq';
import { MatchSixModeReqHandle } from './MatchSixModeReq';
import { GhostSettingReqHandle } from './GhostSettingReq';
import { GhostMoveReqHandle } from './GhostMoveReq';
import { GhostDiceNumReqHandle } from './GhostDiceNumReq';
import { MatchGhostExitRoomReqHandle } from './MatchGhostExitRoomReq';
import { MatchGhostStageChangeReqHandle } from './MatchGhostStageChangeReq';
import { MatchGhostEnterRoomReqHandle } from './MatchGhostEnterRoomReq';
import { MatchGhostReqHandle } from './MatchGhostReq';
import { Match2v2ExitRoomReqHandle } from './Match2v2ExitRoomReq';
import { Match2v2StageChangeReqHandle } from './Match2v2StageChangeReq';
import { Match2v2EnterRoomReqHandle } from './Match2v2EnterRoomReq';
import { Match2v2ReqHandle } from './Match2v2Req';
import { SelectRewardReqHandle } from './SelectRewardReq';
import { SevenDayInfoReqHandle } from './SevenDayInfoReq';
import { TaskBoxReceiveReqHandle } from './TaskBoxReceiveReq';
import { TaskBoxReqHandle } from './TaskBoxReq';
import { GetGlobalExchangeReqHandle } from './GetGlobalExchangeReq';
import { AiGetListReqHandle } from './AiGetListReq';
import { RaceBuyTicketReqHandle } from './RaceBuyTicketReq';
import { RaceShareRebornReqHandle } from './RaceShareRebornReq';
import { RaceGetFreeTicketReqHandle } from './RaceGetFreeTicketReq';
import { RaceShareAwaidTicketReqHandle } from './RaceShareAwaidTicketReq';
import { RaceMatchReqHandle } from './RaceMatchReq';
import { RaceStartAndMatchReqHandle } from './RaceStartAndMatchReq';
import { RaceGetReqHandle } from './RaceGetReq';
import { ExchangeAppCoinReqHandle } from './ExchangeAppCoinReq';
import { GetAppCoinReqHandle } from './GetAppCoinReq';
import { PushMsgReqHandle } from './PushMsgReq';
import { GetSceneVideoReqHandle } from './GetSceneVideoReq';
import { GetVedioAwardReqHandle } from './GetVedioAwardReq';
import { GetCoinWhenNoMoneyReqHandle } from './GetCoinWhenNoMoneyReq';
import { RedPointSetReqHandle } from './RedPointSetReq';
import { RedPointGetReqHandle } from './RedPointGetReq';
import { PlaySceneAnimation1ReqHandle } from './PlaySceneAnimation1Req';
import { DecorateSkin1ReqHandle } from './DecorateSkin1Req';
import { BuySkin1ReqHandle } from './BuySkin1Req';
import { GetSkinSetting1ReqHandle } from './GetSkinSetting1Req';
import { GetAllSkin1ReqHandle } from './GetAllSkin1Req';
import { ZhuangPanLevel1UpTipReqHandle } from './ZhuangPanLevel1UpTipReq';
import { ZhuangPanLevel1ReqHandle } from './ZhuangPanLevel1Req';
import { ZhuangPanLevel1MessageReqHandle } from './ZhuangPanLevel1MessageReq';
import { TaskReward1ReqHandle } from './TaskReward1Req';
import { TaskInfo1ReqHandle } from './TaskInfo1Req';
import { EnterYuYinFanReqHandle } from './EnterYuYinFanReq';
import { TaskRewardReqHandle } from './TaskRewardReq';
import { TaskInfoReqHandle } from './TaskInfoReq';
import { AddCoinReqHandle } from './AddCoinReq';
import { AddCrystalCoinReqHandle } from './AddCrystalCoinReq';
import { WinOrLoseRightNowReqHandle } from './WinOrLoseRightNowReq';
import { SecUnvarnishedReqHandle } from './SecUnvarnishedReq';
import { CheckIfNeedAiInvoiteReqHandle } from './CheckIfNeedAiInvoiteReq';
import { ZhuangPanLevelUpTipReqHandle } from './ZhuangPanLevelUpTipReq';
import { ZhuangPanLevelReqHandle } from './ZhuangPanLevelReq';
import { ReJoinRoomReqHandle } from './ReJoinRoomReq';
import { MsgItemSendReqHandle } from './MsgItemSendReq';
import { StateChangeReqHandle } from './StateChangeReq';
import { WordBroadCastReqHandle } from './WordBroadCastReq';
import { CancelAutoStatusReqHandle } from './CancelAutoStatusReq';
import { QueryAutoStatusReqHandle } from './QueryAutoStatusReq';
import { PlayWithAiReqHandle } from './PlayWithAiReq';
import { AiUidGetReqHandle } from './AiUidGetReq';
import { ShareAwardReqHandle } from './ShareAwardReq';
import { ShareMessageReqHandle } from './ShareMessageReq';
import { ZhuanPanReqHandle } from './ZhuanPanReq';
import { CheckZhuanPanReqHandle } from './CheckZhuanPanReq';
import { GetAllUserMessageReqHandle } from './GetAllUserMessageReq';
import { SignReqHandle } from './SignReq';
import { NewRoomReqHandle } from './NewRoomReq';
import { CancelMatchReqHandle } from './CancelMatchReq';
import { MatchReqHandle } from './MatchReq';
import { PlayExitReqHandle } from './PlayExitReq';
import { MoveReqHandle } from './MoveReq';
import { DiceNumReqHandle } from './DiceNumReq';
import { ForceExitReqHandle } from './ForceExitReq';
import { GiveUpReqHandle } from './GiveUpReq';
import { HeartReqHandle } from './HeartReq';
import { UnvarnishedReqHandle } from './UnvarnishedReq';
import { ReadyReqHandle } from './ReadyReq';
import { LoadProgressReqHandle } from './LoadProgressReq';
export declare class NetMsgRef {
    static readonly LoadProgressReqHandle: typeof LoadProgressReqHandle;
    static readonly ReadyReqHandle: typeof ReadyReqHandle;
    static readonly UnvarnishedReqHandle: typeof UnvarnishedReqHandle;
    static readonly HeartReqHandle: typeof HeartReqHandle;
    static readonly GiveUpReqHandle: typeof GiveUpReqHandle;
    static readonly ForceExitReqHandle: typeof ForceExitReqHandle;
    static readonly DiceNumReqHandle: typeof DiceNumReqHandle;
    static readonly MoveReqHandle: typeof MoveReqHandle;
    static readonly PlayExitReqHandle: typeof PlayExitReqHandle;
    static readonly MatchReqHandle: typeof MatchReqHandle;
    static readonly CancelMatchReqHandle: typeof CancelMatchReqHandle;
    static readonly NewRoomReqHandle: typeof NewRoomReqHandle;
    static readonly SignReqHandle: typeof SignReqHandle;
    static readonly GetAllUserMessageReqHandle: typeof GetAllUserMessageReqHandle;
    static readonly CheckZhuanPanReqHandle: typeof CheckZhuanPanReqHandle;
    static readonly ZhuanPanReqHandle: typeof ZhuanPanReqHandle;
    static readonly ShareMessageReqHandle: typeof ShareMessageReqHandle;
    static readonly ShareAwardReqHandle: typeof ShareAwardReqHandle;
    static readonly AiUidGetReqHandle: typeof AiUidGetReqHandle;
    static readonly PlayWithAiReqHandle: typeof PlayWithAiReqHandle;
    static readonly QueryAutoStatusReqHandle: typeof QueryAutoStatusReqHandle;
    static readonly CancelAutoStatusReqHandle: typeof CancelAutoStatusReqHandle;
    static readonly WordBroadCastReqHandle: typeof WordBroadCastReqHandle;
    static readonly StateChangeReqHandle: typeof StateChangeReqHandle;
    static readonly MsgItemSendReqHandle: typeof MsgItemSendReqHandle;
    static readonly ReJoinRoomReqHandle: typeof ReJoinRoomReqHandle;
    static readonly ZhuangPanLevelReqHandle: typeof ZhuangPanLevelReqHandle;
    static readonly ZhuangPanLevelUpTipReqHandle: typeof ZhuangPanLevelUpTipReqHandle;
    static readonly CheckIfNeedAiInvoiteReqHandle: typeof CheckIfNeedAiInvoiteReqHandle;
    static readonly SecUnvarnishedReqHandle: typeof SecUnvarnishedReqHandle;
    static readonly WinOrLoseRightNowReqHandle: typeof WinOrLoseRightNowReqHandle;
    static readonly AddCrystalCoinReqHandle: typeof AddCrystalCoinReqHandle;
    static readonly AddCoinReqHandle: typeof AddCoinReqHandle;
    static readonly TaskInfoReqHandle: typeof TaskInfoReqHandle;
    static readonly TaskRewardReqHandle: typeof TaskRewardReqHandle;
    static readonly EnterYuYinFanReqHandle: typeof EnterYuYinFanReqHandle;
    static readonly TaskInfo1ReqHandle: typeof TaskInfo1ReqHandle;
    static readonly TaskReward1ReqHandle: typeof TaskReward1ReqHandle;
    static readonly ZhuangPanLevel1MessageReqHandle: typeof ZhuangPanLevel1MessageReqHandle;
    static readonly ZhuangPanLevel1ReqHandle: typeof ZhuangPanLevel1ReqHandle;
    static readonly ZhuangPanLevel1UpTipReqHandle: typeof ZhuangPanLevel1UpTipReqHandle;
    static readonly GetAllSkin1ReqHandle: typeof GetAllSkin1ReqHandle;
    static readonly GetSkinSetting1ReqHandle: typeof GetSkinSetting1ReqHandle;
    static readonly BuySkin1ReqHandle: typeof BuySkin1ReqHandle;
    static readonly DecorateSkin1ReqHandle: typeof DecorateSkin1ReqHandle;
    static readonly PlaySceneAnimation1ReqHandle: typeof PlaySceneAnimation1ReqHandle;
    static readonly RedPointGetReqHandle: typeof RedPointGetReqHandle;
    static readonly RedPointSetReqHandle: typeof RedPointSetReqHandle;
    static readonly GetCoinWhenNoMoneyReqHandle: typeof GetCoinWhenNoMoneyReqHandle;
    static readonly GetVedioAwardReqHandle: typeof GetVedioAwardReqHandle;
    static readonly GetSceneVideoReqHandle: typeof GetSceneVideoReqHandle;
    static readonly PushMsgReqHandle: typeof PushMsgReqHandle;
    static readonly GetAppCoinReqHandle: typeof GetAppCoinReqHandle;
    static readonly ExchangeAppCoinReqHandle: typeof ExchangeAppCoinReqHandle;
    static readonly RaceGetReqHandle: typeof RaceGetReqHandle;
    static readonly RaceStartAndMatchReqHandle: typeof RaceStartAndMatchReqHandle;
    static readonly RaceMatchReqHandle: typeof RaceMatchReqHandle;
    static readonly RaceShareAwaidTicketReqHandle: typeof RaceShareAwaidTicketReqHandle;
    static readonly RaceGetFreeTicketReqHandle: typeof RaceGetFreeTicketReqHandle;
    static readonly RaceShareRebornReqHandle: typeof RaceShareRebornReqHandle;
    static readonly RaceBuyTicketReqHandle: typeof RaceBuyTicketReqHandle;
    static readonly AiGetListReqHandle: typeof AiGetListReqHandle;
    static readonly GetGlobalExchangeReqHandle: typeof GetGlobalExchangeReqHandle;
    static readonly TaskBoxReqHandle: typeof TaskBoxReqHandle;
    static readonly TaskBoxReceiveReqHandle: typeof TaskBoxReceiveReqHandle;
    static readonly SevenDayInfoReqHandle: typeof SevenDayInfoReqHandle;
    static readonly SelectRewardReqHandle: typeof SelectRewardReqHandle;
    static readonly Match2v2ReqHandle: typeof Match2v2ReqHandle;
    static readonly Match2v2EnterRoomReqHandle: typeof Match2v2EnterRoomReqHandle;
    static readonly Match2v2StageChangeReqHandle: typeof Match2v2StageChangeReqHandle;
    static readonly Match2v2ExitRoomReqHandle: typeof Match2v2ExitRoomReqHandle;
    static readonly MatchGhostReqHandle: typeof MatchGhostReqHandle;
    static readonly MatchGhostEnterRoomReqHandle: typeof MatchGhostEnterRoomReqHandle;
    static readonly MatchGhostStageChangeReqHandle: typeof MatchGhostStageChangeReqHandle;
    static readonly MatchGhostExitRoomReqHandle: typeof MatchGhostExitRoomReqHandle;
    static readonly GhostDiceNumReqHandle: typeof GhostDiceNumReqHandle;
    static readonly GhostMoveReqHandle: typeof GhostMoveReqHandle;
    static readonly GhostSettingReqHandle: typeof GhostSettingReqHandle;
    static readonly MatchSixModeReqHandle: typeof MatchSixModeReqHandle;
    static readonly SixModeDiceNumReqHandle: typeof SixModeDiceNumReqHandle;
    static readonly SixModeMoveReqHandle: typeof SixModeMoveReqHandle;
    static readonly GetAllSkin2ReqHandle: typeof GetAllSkin2ReqHandle;
    static readonly DiamondGetReqHandle: typeof DiamondGetReqHandle;
    static readonly GetSkinSetting2ReqHandle: typeof GetSkinSetting2ReqHandle;
    static readonly BuySkin2ReqHandle: typeof BuySkin2ReqHandle;
    static readonly DecorateSkin2ReqHandle: typeof DecorateSkin2ReqHandle;
    static readonly GetChannelReqHandle: typeof GetChannelReqHandle;
}