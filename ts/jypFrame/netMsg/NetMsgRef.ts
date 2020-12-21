import {GetChannelReqHandle} from './GetChannelReq'
import {DecorateSkin2ReqHandle} from './DecorateSkin2Req'
import {BuySkin2ReqHandle} from './BuySkin2Req'
import {GetSkinSetting2ReqHandle} from './GetSkinSetting2Req'
import {DiamondGetReqHandle} from './DiamondGetReq'
import {GetAllSkin2ReqHandle} from './GetAllSkin2Req'
import {SixModeMoveReqHandle} from './SixModeMoveReq'
import {SixModeDiceNumReqHandle} from './SixModeDiceNumReq'
import {MatchSixModeReqHandle} from './MatchSixModeReq'
import {GhostSettingReqHandle} from './GhostSettingReq'
import {GhostMoveReqHandle} from './GhostMoveReq'
import {GhostDiceNumReqHandle} from './GhostDiceNumReq'
import {MatchGhostExitRoomReqHandle} from './MatchGhostExitRoomReq'
import {MatchGhostStageChangeReqHandle} from './MatchGhostStageChangeReq'
import {MatchGhostEnterRoomReqHandle} from './MatchGhostEnterRoomReq'
import {MatchGhostReqHandle} from './MatchGhostReq'
import {Match2v2ExitRoomReqHandle} from './Match2v2ExitRoomReq'
import {Match2v2StageChangeReqHandle} from './Match2v2StageChangeReq'
import {Match2v2EnterRoomReqHandle} from './Match2v2EnterRoomReq'
import {Match2v2ReqHandle} from './Match2v2Req'
import {SelectRewardReqHandle} from './SelectRewardReq'
import {SevenDayInfoReqHandle} from './SevenDayInfoReq'
import {TaskBoxReceiveReqHandle} from './TaskBoxReceiveReq'
import {TaskBoxReqHandle} from './TaskBoxReq'
import {GetGlobalExchangeReqHandle} from './GetGlobalExchangeReq'
import {AiGetListReqHandle} from './AiGetListReq'
import {RaceBuyTicketReqHandle} from './RaceBuyTicketReq'
import {RaceShareRebornReqHandle} from './RaceShareRebornReq'
import {RaceGetFreeTicketReqHandle} from './RaceGetFreeTicketReq'
import {RaceShareAwaidTicketReqHandle} from './RaceShareAwaidTicketReq'
import {RaceMatchReqHandle} from './RaceMatchReq'
import {RaceStartAndMatchReqHandle} from './RaceStartAndMatchReq'
import {RaceGetReqHandle} from './RaceGetReq'
import {ExchangeAppCoinReqHandle} from './ExchangeAppCoinReq'
import {GetAppCoinReqHandle} from './GetAppCoinReq'
import {PushMsgReqHandle} from './PushMsgReq'
import {GetSceneVideoReqHandle} from './GetSceneVideoReq'
import {GetVedioAwardReqHandle} from './GetVedioAwardReq'
import {GetCoinWhenNoMoneyReqHandle} from './GetCoinWhenNoMoneyReq'
import {RedPointSetReqHandle} from './RedPointSetReq'
import {RedPointGetReqHandle} from './RedPointGetReq'
import {PlaySceneAnimation1ReqHandle} from './PlaySceneAnimation1Req'
import {DecorateSkin1ReqHandle} from './DecorateSkin1Req'
import {BuySkin1ReqHandle} from './BuySkin1Req'
import {GetSkinSetting1ReqHandle} from './GetSkinSetting1Req'
import {GetAllSkin1ReqHandle} from './GetAllSkin1Req'
import {ZhuangPanLevel1UpTipReqHandle} from './ZhuangPanLevel1UpTipReq'
import {ZhuangPanLevel1ReqHandle} from './ZhuangPanLevel1Req'
import {ZhuangPanLevel1MessageReqHandle} from './ZhuangPanLevel1MessageReq'
import {TaskReward1ReqHandle} from './TaskReward1Req'
import {TaskInfo1ReqHandle} from './TaskInfo1Req'
import {EnterYuYinFanReqHandle} from './EnterYuYinFanReq'
import {TaskRewardReqHandle} from './TaskRewardReq'
import {TaskInfoReqHandle} from './TaskInfoReq'
import {AddCoinReqHandle} from './AddCoinReq'
import {AddCrystalCoinReqHandle} from './AddCrystalCoinReq'
import {WinOrLoseRightNowReqHandle} from './WinOrLoseRightNowReq'
import {SecUnvarnishedReqHandle} from './SecUnvarnishedReq'
import {CheckIfNeedAiInvoiteReqHandle} from './CheckIfNeedAiInvoiteReq'
import {ZhuangPanLevelUpTipReqHandle} from './ZhuangPanLevelUpTipReq'
import {ZhuangPanLevelReqHandle} from './ZhuangPanLevelReq'
import {ReJoinRoomReqHandle} from './ReJoinRoomReq'
import {MsgItemSendReqHandle} from './MsgItemSendReq'
import {StateChangeReqHandle} from './StateChangeReq'
import {WordBroadCastReqHandle} from './WordBroadCastReq'
import {CancelAutoStatusReqHandle} from './CancelAutoStatusReq'
import {QueryAutoStatusReqHandle} from './QueryAutoStatusReq'
import {PlayWithAiReqHandle} from './PlayWithAiReq'
import {AiUidGetReqHandle} from './AiUidGetReq'
import {ShareAwardReqHandle} from './ShareAwardReq'
import {ShareMessageReqHandle} from './ShareMessageReq'
import {ZhuanPanReqHandle} from './ZhuanPanReq'
import {CheckZhuanPanReqHandle} from './CheckZhuanPanReq'
import {GetAllUserMessageReqHandle} from './GetAllUserMessageReq'
import {SignReqHandle} from './SignReq'
import {NewRoomReqHandle} from './NewRoomReq'
import {CancelMatchReqHandle} from './CancelMatchReq'
import {MatchReqHandle} from './MatchReq'
import {PlayExitReqHandle} from './PlayExitReq'
import {MoveReqHandle} from './MoveReq'
import {DiceNumReqHandle} from './DiceNumReq'
import {ForceExitReqHandle} from './ForceExitReq'
import {GiveUpReqHandle} from './GiveUpReq'
import {HeartReqHandle} from './HeartReq'
import {UnvarnishedReqHandle} from './UnvarnishedReq'
import {ReadyReqHandle} from './ReadyReq'
import {LoadProgressReqHandle} from './LoadProgressReq'
export class NetMsgRef {
    static readonly LoadProgressReqHandle = LoadProgressReqHandle
    static readonly ReadyReqHandle = ReadyReqHandle
    static readonly UnvarnishedReqHandle = UnvarnishedReqHandle
    static readonly HeartReqHandle = HeartReqHandle
    static readonly GiveUpReqHandle = GiveUpReqHandle
    static readonly ForceExitReqHandle = ForceExitReqHandle
    static readonly DiceNumReqHandle = DiceNumReqHandle
    static readonly MoveReqHandle = MoveReqHandle
    static readonly PlayExitReqHandle = PlayExitReqHandle
    static readonly MatchReqHandle = MatchReqHandle
    static readonly CancelMatchReqHandle = CancelMatchReqHandle
    static readonly NewRoomReqHandle = NewRoomReqHandle
    static readonly SignReqHandle = SignReqHandle
    static readonly GetAllUserMessageReqHandle = GetAllUserMessageReqHandle
    static readonly CheckZhuanPanReqHandle = CheckZhuanPanReqHandle
    static readonly ZhuanPanReqHandle = ZhuanPanReqHandle
    static readonly ShareMessageReqHandle = ShareMessageReqHandle
    static readonly ShareAwardReqHandle = ShareAwardReqHandle
    static readonly AiUidGetReqHandle = AiUidGetReqHandle
    static readonly PlayWithAiReqHandle = PlayWithAiReqHandle
    static readonly QueryAutoStatusReqHandle = QueryAutoStatusReqHandle
    static readonly CancelAutoStatusReqHandle = CancelAutoStatusReqHandle
    static readonly WordBroadCastReqHandle = WordBroadCastReqHandle
    static readonly StateChangeReqHandle = StateChangeReqHandle
    static readonly MsgItemSendReqHandle = MsgItemSendReqHandle
    static readonly ReJoinRoomReqHandle = ReJoinRoomReqHandle
    static readonly ZhuangPanLevelReqHandle = ZhuangPanLevelReqHandle
    static readonly ZhuangPanLevelUpTipReqHandle = ZhuangPanLevelUpTipReqHandle
    static readonly CheckIfNeedAiInvoiteReqHandle = CheckIfNeedAiInvoiteReqHandle
    static readonly SecUnvarnishedReqHandle = SecUnvarnishedReqHandle
    static readonly WinOrLoseRightNowReqHandle = WinOrLoseRightNowReqHandle
    static readonly AddCrystalCoinReqHandle = AddCrystalCoinReqHandle
    static readonly AddCoinReqHandle = AddCoinReqHandle
    static readonly TaskInfoReqHandle = TaskInfoReqHandle
    static readonly TaskRewardReqHandle = TaskRewardReqHandle
    static readonly EnterYuYinFanReqHandle = EnterYuYinFanReqHandle
    static readonly TaskInfo1ReqHandle = TaskInfo1ReqHandle
    static readonly TaskReward1ReqHandle = TaskReward1ReqHandle
    static readonly ZhuangPanLevel1MessageReqHandle = ZhuangPanLevel1MessageReqHandle
    static readonly ZhuangPanLevel1ReqHandle = ZhuangPanLevel1ReqHandle
    static readonly ZhuangPanLevel1UpTipReqHandle = ZhuangPanLevel1UpTipReqHandle
    static readonly GetAllSkin1ReqHandle = GetAllSkin1ReqHandle
    static readonly GetSkinSetting1ReqHandle = GetSkinSetting1ReqHandle
    static readonly BuySkin1ReqHandle = BuySkin1ReqHandle
    static readonly DecorateSkin1ReqHandle = DecorateSkin1ReqHandle
    static readonly PlaySceneAnimation1ReqHandle = PlaySceneAnimation1ReqHandle
    static readonly RedPointGetReqHandle = RedPointGetReqHandle
    static readonly RedPointSetReqHandle = RedPointSetReqHandle
    static readonly GetCoinWhenNoMoneyReqHandle = GetCoinWhenNoMoneyReqHandle
    static readonly GetVedioAwardReqHandle = GetVedioAwardReqHandle
    static readonly GetSceneVideoReqHandle = GetSceneVideoReqHandle
    static readonly PushMsgReqHandle = PushMsgReqHandle
    static readonly GetAppCoinReqHandle = GetAppCoinReqHandle
    static readonly ExchangeAppCoinReqHandle = ExchangeAppCoinReqHandle
    static readonly RaceGetReqHandle = RaceGetReqHandle
    static readonly RaceStartAndMatchReqHandle = RaceStartAndMatchReqHandle
    static readonly RaceMatchReqHandle = RaceMatchReqHandle
    static readonly RaceShareAwaidTicketReqHandle = RaceShareAwaidTicketReqHandle
    static readonly RaceGetFreeTicketReqHandle = RaceGetFreeTicketReqHandle
    static readonly RaceShareRebornReqHandle = RaceShareRebornReqHandle
    static readonly RaceBuyTicketReqHandle = RaceBuyTicketReqHandle
    static readonly AiGetListReqHandle = AiGetListReqHandle
    static readonly GetGlobalExchangeReqHandle = GetGlobalExchangeReqHandle
    static readonly TaskBoxReqHandle = TaskBoxReqHandle
    static readonly TaskBoxReceiveReqHandle = TaskBoxReceiveReqHandle
    static readonly SevenDayInfoReqHandle = SevenDayInfoReqHandle
    static readonly SelectRewardReqHandle = SelectRewardReqHandle
    static readonly Match2v2ReqHandle = Match2v2ReqHandle
    static readonly Match2v2EnterRoomReqHandle = Match2v2EnterRoomReqHandle
    static readonly Match2v2StageChangeReqHandle = Match2v2StageChangeReqHandle
    static readonly Match2v2ExitRoomReqHandle = Match2v2ExitRoomReqHandle
    static readonly MatchGhostReqHandle = MatchGhostReqHandle
    static readonly MatchGhostEnterRoomReqHandle = MatchGhostEnterRoomReqHandle
    static readonly MatchGhostStageChangeReqHandle = MatchGhostStageChangeReqHandle
    static readonly MatchGhostExitRoomReqHandle = MatchGhostExitRoomReqHandle
    static readonly GhostDiceNumReqHandle = GhostDiceNumReqHandle
    static readonly GhostMoveReqHandle = GhostMoveReqHandle
    static readonly GhostSettingReqHandle = GhostSettingReqHandle
    static readonly MatchSixModeReqHandle = MatchSixModeReqHandle
    static readonly SixModeDiceNumReqHandle = SixModeDiceNumReqHandle
    static readonly SixModeMoveReqHandle = SixModeMoveReqHandle
    static readonly GetAllSkin2ReqHandle = GetAllSkin2ReqHandle
    static readonly DiamondGetReqHandle = DiamondGetReqHandle
    static readonly GetSkinSetting2ReqHandle = GetSkinSetting2ReqHandle
    static readonly BuySkin2ReqHandle = BuySkin2ReqHandle
    static readonly DecorateSkin2ReqHandle = DecorateSkin2ReqHandle
    static readonly GetChannelReqHandle = GetChannelReqHandle
}