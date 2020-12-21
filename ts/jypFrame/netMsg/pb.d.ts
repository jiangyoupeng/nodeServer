import * as $protobuf from "protobufjs";
/** Namespace pb. */
export namespace pb {

    /** Properties of a LoginRes. */
    interface ILoginRes {

        /** LoginRes code */
        code?: (number|null);

        /** LoginRes msg */
        msg?: (string|null);

        /** LoginRes postData */
        postData?: (pb.IPostData|null);

        /** LoginRes coin */
        coin?: (number|null);

        /** LoginRes gameMode */
        gameMode?: (number|null);

        /** LoginRes serverTime */
        serverTime?: (number|null);

        /** LoginRes skinId */
        skinId?: (number|null);

        /** LoginRes task */
        task?: (pb.IModuleTask|null);

        /** LoginRes levelMessage */
        levelMessage?: (pb.ILevelMessage|null);

        /** LoginRes resultCount */
        resultCount?: (number|null);

        /** LoginRes successCount */
        successCount?: (number|null);

        /** LoginRes failCount */
        failCount?: (number|null);

        /** LoginRes sceneId */
        sceneId?: (number|null);

        /** LoginRes playedSceneAnimation */
        playedSceneAnimation?: (number|null);

        /** LoginRes minGhostLevel */
        minGhostLevel?: (number|null);
    }

    /** Represents a LoginRes. */
    class LoginRes implements ILoginRes {

        /**
         * Constructs a new LoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILoginRes);

        /** LoginRes code. */
        public code: number;

        /** LoginRes msg. */
        public msg: string;

        /** LoginRes postData. */
        public postData?: (pb.IPostData|null);

        /** LoginRes coin. */
        public coin: number;

        /** LoginRes gameMode. */
        public gameMode: number;

        /** LoginRes serverTime. */
        public serverTime: number;

        /** LoginRes skinId. */
        public skinId: number;

        /** LoginRes task. */
        public task?: (pb.IModuleTask|null);

        /** LoginRes levelMessage. */
        public levelMessage?: (pb.ILevelMessage|null);

        /** LoginRes resultCount. */
        public resultCount: number;

        /** LoginRes successCount. */
        public successCount: number;

        /** LoginRes failCount. */
        public failCount: number;

        /** LoginRes sceneId. */
        public sceneId: number;

        /** LoginRes playedSceneAnimation. */
        public playedSceneAnimation: number;

        /** LoginRes minGhostLevel. */
        public minGhostLevel: number;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRes instance
         */
        public static create(properties?: pb.ILoginRes): pb.LoginRes;

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link pb.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LoginRes;
    }

    /** Properties of a LevelMessage. */
    interface ILevelMessage {

        /** LevelMessage level */
        level?: (number|null);

        /** LevelMessage exp */
        exp?: (number|null);

        /** LevelMessage maxExp */
        maxExp?: (number|null);
    }

    /** Represents a LevelMessage. */
    class LevelMessage implements ILevelMessage {

        /**
         * Constructs a new LevelMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILevelMessage);

        /** LevelMessage level. */
        public level: number;

        /** LevelMessage exp. */
        public exp: number;

        /** LevelMessage maxExp. */
        public maxExp: number;

        /**
         * Creates a new LevelMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LevelMessage instance
         */
        public static create(properties?: pb.ILevelMessage): pb.LevelMessage;

        /**
         * Encodes the specified LevelMessage message. Does not implicitly {@link pb.LevelMessage.verify|verify} messages.
         * @param message LevelMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILevelMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LevelMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LevelMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LevelMessage;
    }

    /** Properties of a PostData. */
    interface IPostData {

        /** PostData channel */
        channel?: (string|null);

        /** PostData gameid */
        gameid?: (string|null);

        /** PostData roomid */
        roomid?: (string|null);

        /** PostData player */
        player?: (pb.IPlayer|null);
    }

    /** Represents a PostData. */
    class PostData implements IPostData {

        /**
         * Constructs a new PostData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPostData);

        /** PostData channel. */
        public channel: string;

        /** PostData gameid. */
        public gameid: string;

        /** PostData roomid. */
        public roomid: string;

        /** PostData player. */
        public player?: (pb.IPlayer|null);

        /**
         * Creates a new PostData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PostData instance
         */
        public static create(properties?: pb.IPostData): pb.PostData;

        /**
         * Encodes the specified PostData message. Does not implicitly {@link pb.PostData.verify|verify} messages.
         * @param message PostData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPostData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PostData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PostData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PostData;
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player uid */
        uid?: (string|null);

        /** Player name */
        name?: (string|null);

        /** Player avatarurl */
        avatarurl?: (string|null);

        /** Player teamid */
        teamid?: (string|null);

        /** Player opt */
        opt?: (string|null);

        /** Player sex */
        sex?: (number|null);

        /** Player ready */
        ready?: (boolean|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayer);

        /** Player uid. */
        public uid: string;

        /** Player name. */
        public name: string;

        /** Player avatarurl. */
        public avatarurl: string;

        /** Player teamid. */
        public teamid: string;

        /** Player opt. */
        public opt: string;

        /** Player sex. */
        public sex: number;

        /** Player ready. */
        public ready: boolean;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: pb.IPlayer): pb.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link pb.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Player;
    }

    /** Properties of a UserLoginRes. */
    interface IUserLoginRes {

        /** UserLoginRes code */
        code?: (number|null);

        /** UserLoginRes msg */
        msg?: (string|null);

        /** UserLoginRes data */
        data?: (pb.IPlayer[]|null);
    }

    /** Represents a UserLoginRes. */
    class UserLoginRes implements IUserLoginRes {

        /**
         * Constructs a new UserLoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUserLoginRes);

        /** UserLoginRes code. */
        public code: number;

        /** UserLoginRes msg. */
        public msg: string;

        /** UserLoginRes data. */
        public data: pb.IPlayer[];

        /**
         * Creates a new UserLoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLoginRes instance
         */
        public static create(properties?: pb.IUserLoginRes): pb.UserLoginRes;

        /**
         * Encodes the specified UserLoginRes message. Does not implicitly {@link pb.UserLoginRes.verify|verify} messages.
         * @param message UserLoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUserLoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UserLoginRes;
    }

    /** Properties of a LoadProgressReq. */
    interface ILoadProgressReq {

        /** LoadProgressReq progress */
        progress?: (number|null);
    }

    /** Represents a LoadProgressReq. */
    class LoadProgressReq implements ILoadProgressReq {

        /**
         * Constructs a new LoadProgressReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILoadProgressReq);

        /** LoadProgressReq progress. */
        public progress: number;

        /**
         * Creates a new LoadProgressReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoadProgressReq instance
         */
        public static create(properties?: pb.ILoadProgressReq): pb.LoadProgressReq;

        /**
         * Encodes the specified LoadProgressReq message. Does not implicitly {@link pb.LoadProgressReq.verify|verify} messages.
         * @param message LoadProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILoadProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoadProgressReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoadProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LoadProgressReq;
    }

    /** Properties of a LoadProgressRes. */
    interface ILoadProgressRes {

        /** LoadProgressRes code */
        code?: (number|null);

        /** LoadProgressRes msg */
        msg?: (string|null);

        /** LoadProgressRes data */
        data?: (pb.ILoadProgressResData[]|null);
    }

    /** Represents a LoadProgressRes. */
    class LoadProgressRes implements ILoadProgressRes {

        /**
         * Constructs a new LoadProgressRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILoadProgressRes);

        /** LoadProgressRes code. */
        public code: number;

        /** LoadProgressRes msg. */
        public msg: string;

        /** LoadProgressRes data. */
        public data: pb.ILoadProgressResData[];

        /**
         * Creates a new LoadProgressRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoadProgressRes instance
         */
        public static create(properties?: pb.ILoadProgressRes): pb.LoadProgressRes;

        /**
         * Encodes the specified LoadProgressRes message. Does not implicitly {@link pb.LoadProgressRes.verify|verify} messages.
         * @param message LoadProgressRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILoadProgressRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoadProgressRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoadProgressRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LoadProgressRes;
    }

    /** Properties of a LoadProgressResData. */
    interface ILoadProgressResData {

        /** LoadProgressResData uid */
        uid?: (string|null);

        /** LoadProgressResData progress */
        progress?: (number|null);
    }

    /** Represents a LoadProgressResData. */
    class LoadProgressResData implements ILoadProgressResData {

        /**
         * Constructs a new LoadProgressResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILoadProgressResData);

        /** LoadProgressResData uid. */
        public uid: string;

        /** LoadProgressResData progress. */
        public progress: number;

        /**
         * Creates a new LoadProgressResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoadProgressResData instance
         */
        public static create(properties?: pb.ILoadProgressResData): pb.LoadProgressResData;

        /**
         * Encodes the specified LoadProgressResData message. Does not implicitly {@link pb.LoadProgressResData.verify|verify} messages.
         * @param message LoadProgressResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILoadProgressResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoadProgressResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoadProgressResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LoadProgressResData;
    }

    /** Properties of a ReadyReq. */
    interface IReadyReq {

        /** ReadyReq ready */
        ready?: (boolean|null);
    }

    /** Represents a ReadyReq. */
    class ReadyReq implements IReadyReq {

        /**
         * Constructs a new ReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReadyReq);

        /** ReadyReq ready. */
        public ready: boolean;

        /**
         * Creates a new ReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyReq instance
         */
        public static create(properties?: pb.IReadyReq): pb.ReadyReq;

        /**
         * Encodes the specified ReadyReq message. Does not implicitly {@link pb.ReadyReq.verify|verify} messages.
         * @param message ReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReadyReq;
    }

    /** Properties of a ReadyRes. */
    interface IReadyRes {

        /** ReadyRes code */
        code?: (number|null);

        /** ReadyRes msg */
        msg?: (string|null);

        /** ReadyRes data */
        data?: (pb.IReadyResData|null);
    }

    /** Represents a ReadyRes. */
    class ReadyRes implements IReadyRes {

        /**
         * Constructs a new ReadyRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReadyRes);

        /** ReadyRes code. */
        public code: number;

        /** ReadyRes msg. */
        public msg: string;

        /** ReadyRes data. */
        public data?: (pb.IReadyResData|null);

        /**
         * Creates a new ReadyRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyRes instance
         */
        public static create(properties?: pb.IReadyRes): pb.ReadyRes;

        /**
         * Encodes the specified ReadyRes message. Does not implicitly {@link pb.ReadyRes.verify|verify} messages.
         * @param message ReadyRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReadyRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReadyRes;
    }

    /** Properties of a ReadyResData. */
    interface IReadyResData {

        /** ReadyResData uids */
        uids?: (string[]|null);
    }

    /** Represents a ReadyResData. */
    class ReadyResData implements IReadyResData {

        /**
         * Constructs a new ReadyResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReadyResData);

        /** ReadyResData uids. */
        public uids: string[];

        /**
         * Creates a new ReadyResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyResData instance
         */
        public static create(properties?: pb.IReadyResData): pb.ReadyResData;

        /**
         * Encodes the specified ReadyResData message. Does not implicitly {@link pb.ReadyResData.verify|verify} messages.
         * @param message ReadyResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReadyResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReadyResData;
    }

    /** Properties of an UnvarnishedReq. */
    interface IUnvarnishedReq {

        /** UnvarnishedReq data */
        data?: (Uint8Array|null);
    }

    /** Represents an UnvarnishedReq. */
    class UnvarnishedReq implements IUnvarnishedReq {

        /**
         * Constructs a new UnvarnishedReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUnvarnishedReq);

        /** UnvarnishedReq data. */
        public data: Uint8Array;

        /**
         * Creates a new UnvarnishedReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnvarnishedReq instance
         */
        public static create(properties?: pb.IUnvarnishedReq): pb.UnvarnishedReq;

        /**
         * Encodes the specified UnvarnishedReq message. Does not implicitly {@link pb.UnvarnishedReq.verify|verify} messages.
         * @param message UnvarnishedReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUnvarnishedReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnvarnishedReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnvarnishedReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UnvarnishedReq;
    }

    /** Properties of an UnvarnishedRes. */
    interface IUnvarnishedRes {

        /** UnvarnishedRes code */
        code?: (number|null);

        /** UnvarnishedRes msg */
        msg?: (string|null);

        /** UnvarnishedRes data */
        data?: (Uint8Array|null);
    }

    /** Represents an UnvarnishedRes. */
    class UnvarnishedRes implements IUnvarnishedRes {

        /**
         * Constructs a new UnvarnishedRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUnvarnishedRes);

        /** UnvarnishedRes code. */
        public code: number;

        /** UnvarnishedRes msg. */
        public msg: string;

        /** UnvarnishedRes data. */
        public data: Uint8Array;

        /**
         * Creates a new UnvarnishedRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnvarnishedRes instance
         */
        public static create(properties?: pb.IUnvarnishedRes): pb.UnvarnishedRes;

        /**
         * Encodes the specified UnvarnishedRes message. Does not implicitly {@link pb.UnvarnishedRes.verify|verify} messages.
         * @param message UnvarnishedRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUnvarnishedRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnvarnishedRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnvarnishedRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UnvarnishedRes;
    }

    /** Properties of a HeartReq. */
    interface IHeartReq {

        /** HeartReq reqTimestamp */
        reqTimestamp?: (number|null);
    }

    /** Represents a HeartReq. */
    class HeartReq implements IHeartReq {

        /**
         * Constructs a new HeartReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IHeartReq);

        /** HeartReq reqTimestamp. */
        public reqTimestamp: number;

        /**
         * Creates a new HeartReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartReq instance
         */
        public static create(properties?: pb.IHeartReq): pb.HeartReq;

        /**
         * Encodes the specified HeartReq message. Does not implicitly {@link pb.HeartReq.verify|verify} messages.
         * @param message HeartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IHeartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.HeartReq;
    }

    /** Properties of a HeartRes. */
    interface IHeartRes {

        /** HeartRes timestamp */
        timestamp?: (number|null);

        /** HeartRes reqTimestamp */
        reqTimestamp?: (number|null);
    }

    /** Represents a HeartRes. */
    class HeartRes implements IHeartRes {

        /**
         * Constructs a new HeartRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IHeartRes);

        /** HeartRes timestamp. */
        public timestamp: number;

        /** HeartRes reqTimestamp. */
        public reqTimestamp: number;

        /**
         * Creates a new HeartRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartRes instance
         */
        public static create(properties?: pb.IHeartRes): pb.HeartRes;

        /**
         * Encodes the specified HeartRes message. Does not implicitly {@link pb.HeartRes.verify|verify} messages.
         * @param message HeartRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IHeartRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.HeartRes;
    }

    /** Properties of a GiveUpReq. */
    interface IGiveUpReq {
    }

    /** Represents a GiveUpReq. */
    class GiveUpReq implements IGiveUpReq {

        /**
         * Constructs a new GiveUpReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGiveUpReq);

        /**
         * Creates a new GiveUpReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GiveUpReq instance
         */
        public static create(properties?: pb.IGiveUpReq): pb.GiveUpReq;

        /**
         * Encodes the specified GiveUpReq message. Does not implicitly {@link pb.GiveUpReq.verify|verify} messages.
         * @param message GiveUpReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGiveUpReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiveUpReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiveUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GiveUpReq;
    }

    /** Properties of a GiveUpRes. */
    interface IGiveUpRes {

        /** GiveUpRes code */
        code?: (number|null);

        /** GiveUpRes msg */
        msg?: (string|null);

        /** GiveUpRes data */
        data?: (pb.IGiveUpResData|null);
    }

    /** Represents a GiveUpRes. */
    class GiveUpRes implements IGiveUpRes {

        /**
         * Constructs a new GiveUpRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGiveUpRes);

        /** GiveUpRes code. */
        public code: number;

        /** GiveUpRes msg. */
        public msg: string;

        /** GiveUpRes data. */
        public data?: (pb.IGiveUpResData|null);

        /**
         * Creates a new GiveUpRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GiveUpRes instance
         */
        public static create(properties?: pb.IGiveUpRes): pb.GiveUpRes;

        /**
         * Encodes the specified GiveUpRes message. Does not implicitly {@link pb.GiveUpRes.verify|verify} messages.
         * @param message GiveUpRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGiveUpRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiveUpRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiveUpRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GiveUpRes;
    }

    /** Properties of a ForceExitReq. */
    interface IForceExitReq {
    }

    /** Represents a ForceExitReq. */
    class ForceExitReq implements IForceExitReq {

        /**
         * Constructs a new ForceExitReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IForceExitReq);

        /**
         * Creates a new ForceExitReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForceExitReq instance
         */
        public static create(properties?: pb.IForceExitReq): pb.ForceExitReq;

        /**
         * Encodes the specified ForceExitReq message. Does not implicitly {@link pb.ForceExitReq.verify|verify} messages.
         * @param message ForceExitReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IForceExitReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForceExitReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForceExitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ForceExitReq;
    }

    /** Properties of a ForceExitRes. */
    interface IForceExitRes {

        /** ForceExitRes code */
        code?: (number|null);

        /** ForceExitRes msg */
        msg?: (string|null);

        /** ForceExitRes data */
        data?: (pb.IGiveUpResData|null);
    }

    /** Represents a ForceExitRes. */
    class ForceExitRes implements IForceExitRes {

        /**
         * Constructs a new ForceExitRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IForceExitRes);

        /** ForceExitRes code. */
        public code: number;

        /** ForceExitRes msg. */
        public msg: string;

        /** ForceExitRes data. */
        public data?: (pb.IGiveUpResData|null);

        /**
         * Creates a new ForceExitRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForceExitRes instance
         */
        public static create(properties?: pb.IForceExitRes): pb.ForceExitRes;

        /**
         * Encodes the specified ForceExitRes message. Does not implicitly {@link pb.ForceExitRes.verify|verify} messages.
         * @param message ForceExitRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IForceExitRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForceExitRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForceExitRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ForceExitRes;
    }

    /** Properties of a GiveUpResData. */
    interface IGiveUpResData {

        /** GiveUpResData uid */
        uid?: (string|null);

        /** GiveUpResData uids */
        uids?: (pb.IGiveUpUserMessage[]|null);

        /** GiveUpResData grade */
        grade?: (number|null);

        /** GiveUpResData gameType */
        gameType?: (number|null);

        /** GiveUpResData leftCoin */
        leftCoin?: (number|null);

        /** GiveUpResData userData */
        userData?: (pb.IUserData|null);
    }

    /** Represents a GiveUpResData. */
    class GiveUpResData implements IGiveUpResData {

        /**
         * Constructs a new GiveUpResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGiveUpResData);

        /** GiveUpResData uid. */
        public uid: string;

        /** GiveUpResData uids. */
        public uids: pb.IGiveUpUserMessage[];

        /** GiveUpResData grade. */
        public grade: number;

        /** GiveUpResData gameType. */
        public gameType: number;

        /** GiveUpResData leftCoin. */
        public leftCoin: number;

        /** GiveUpResData userData. */
        public userData?: (pb.IUserData|null);

        /**
         * Creates a new GiveUpResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GiveUpResData instance
         */
        public static create(properties?: pb.IGiveUpResData): pb.GiveUpResData;

        /**
         * Encodes the specified GiveUpResData message. Does not implicitly {@link pb.GiveUpResData.verify|verify} messages.
         * @param message GiveUpResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGiveUpResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiveUpResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiveUpResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GiveUpResData;
    }

    /** Properties of a GiveUpUserMessage. */
    interface IGiveUpUserMessage {

        /** GiveUpUserMessage uid */
        uid?: (string|null);

        /** GiveUpUserMessage color */
        color?: (number|null);

        /** GiveUpUserMessage skinId */
        skinId?: (number|null);

        /** GiveUpUserMessage escape */
        escape?: (boolean|null);
    }

    /** Represents a GiveUpUserMessage. */
    class GiveUpUserMessage implements IGiveUpUserMessage {

        /**
         * Constructs a new GiveUpUserMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGiveUpUserMessage);

        /** GiveUpUserMessage uid. */
        public uid: string;

        /** GiveUpUserMessage color. */
        public color: number;

        /** GiveUpUserMessage skinId. */
        public skinId: number;

        /** GiveUpUserMessage escape. */
        public escape: boolean;

        /**
         * Creates a new GiveUpUserMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GiveUpUserMessage instance
         */
        public static create(properties?: pb.IGiveUpUserMessage): pb.GiveUpUserMessage;

        /**
         * Encodes the specified GiveUpUserMessage message. Does not implicitly {@link pb.GiveUpUserMessage.verify|verify} messages.
         * @param message GiveUpUserMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGiveUpUserMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiveUpUserMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiveUpUserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GiveUpUserMessage;
    }

    /** Properties of a ModuleTask. */
    interface IModuleTask {

        /** ModuleTask taskList */
        taskList?: (pb.ITaskData[]|null);
    }

    /** Represents a ModuleTask. */
    class ModuleTask implements IModuleTask {

        /**
         * Constructs a new ModuleTask.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IModuleTask);

        /** ModuleTask taskList. */
        public taskList: pb.ITaskData[];

        /**
         * Creates a new ModuleTask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModuleTask instance
         */
        public static create(properties?: pb.IModuleTask): pb.ModuleTask;

        /**
         * Encodes the specified ModuleTask message. Does not implicitly {@link pb.ModuleTask.verify|verify} messages.
         * @param message ModuleTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IModuleTask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModuleTask message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModuleTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ModuleTask;
    }

    /** Properties of a TaskData. */
    interface ITaskData {

        /** TaskData id */
        id?: (number|null);

        /** TaskData type */
        type?: (number|null);

        /** TaskData goalValue */
        goalValue?: (number|null);

        /** TaskData curValue */
        curValue?: (number|null);

        /** TaskData getRewarded */
        getRewarded?: (boolean|null);

        /** TaskData refreshType */
        refreshType?: (number|null);

        /** TaskData itemList */
        itemList?: (pb.IRewardItem[]|null);

        /** TaskData iconId */
        iconId?: (number|null);

        /** TaskData describeId */
        describeId?: (number|null);

        /** TaskData refreshTime */
        refreshTime?: (number|null);

        /** TaskData order */
        order?: (number|null);

        /** TaskData boxPoint */
        boxPoint?: (number|null);
    }

    /** Represents a TaskData. */
    class TaskData implements ITaskData {

        /**
         * Constructs a new TaskData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskData);

        /** TaskData id. */
        public id: number;

        /** TaskData type. */
        public type: number;

        /** TaskData goalValue. */
        public goalValue: number;

        /** TaskData curValue. */
        public curValue: number;

        /** TaskData getRewarded. */
        public getRewarded: boolean;

        /** TaskData refreshType. */
        public refreshType: number;

        /** TaskData itemList. */
        public itemList: pb.IRewardItem[];

        /** TaskData iconId. */
        public iconId: number;

        /** TaskData describeId. */
        public describeId: number;

        /** TaskData refreshTime. */
        public refreshTime: number;

        /** TaskData order. */
        public order: number;

        /** TaskData boxPoint. */
        public boxPoint: number;

        /**
         * Creates a new TaskData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskData instance
         */
        public static create(properties?: pb.ITaskData): pb.TaskData;

        /**
         * Encodes the specified TaskData message. Does not implicitly {@link pb.TaskData.verify|verify} messages.
         * @param message TaskData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskData;
    }

    /** Properties of a RewardItem. */
    interface IRewardItem {

        /** RewardItem itemId */
        itemId?: (number|null);

        /** RewardItem itemNum */
        itemNum?: (number|null);
    }

    /** Represents a RewardItem. */
    class RewardItem implements IRewardItem {

        /**
         * Constructs a new RewardItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRewardItem);

        /** RewardItem itemId. */
        public itemId: number;

        /** RewardItem itemNum. */
        public itemNum: number;

        /**
         * Creates a new RewardItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RewardItem instance
         */
        public static create(properties?: pb.IRewardItem): pb.RewardItem;

        /**
         * Encodes the specified RewardItem message. Does not implicitly {@link pb.RewardItem.verify|verify} messages.
         * @param message RewardItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRewardItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RewardItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RewardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RewardItem;
    }

    /** Properties of a UserData. */
    interface IUserData {

        /** UserData uid */
        uid?: (string|null);

        /** UserData coin */
        coin?: (number|null);

        /** UserData leftSecond */
        leftSecond?: (number|null);

        /** UserData skinId */
        skinId?: (number|null);

        /** UserData online */
        online?: (boolean|null);

        /** UserData level */
        level?: (number|null);

        /** UserData decorated */
        decorated?: (pb.ISkins1Msg[]|null);

        /** UserData winCount */
        winCount?: (number|null);

        /** UserData eatCount */
        eatCount?: (number|null);

        /** UserData round */
        round?: (number|null);

        /** UserData bufferTime */
        bufferTime?: (number|null);

        /** UserData color */
        color?: (number|null);
    }

    /** Represents a UserData. */
    class UserData implements IUserData {

        /**
         * Constructs a new UserData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUserData);

        /** UserData uid. */
        public uid: string;

        /** UserData coin. */
        public coin: number;

        /** UserData leftSecond. */
        public leftSecond: number;

        /** UserData skinId. */
        public skinId: number;

        /** UserData online. */
        public online: boolean;

        /** UserData level. */
        public level: number;

        /** UserData decorated. */
        public decorated: pb.ISkins1Msg[];

        /** UserData winCount. */
        public winCount: number;

        /** UserData eatCount. */
        public eatCount: number;

        /** UserData round. */
        public round: number;

        /** UserData bufferTime. */
        public bufferTime: number;

        /** UserData color. */
        public color: number;

        /**
         * Creates a new UserData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserData instance
         */
        public static create(properties?: pb.IUserData): pb.UserData;

        /**
         * Encodes the specified UserData message. Does not implicitly {@link pb.UserData.verify|verify} messages.
         * @param message UserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UserData;
    }

    /** Properties of a Skins1Msg. */
    interface ISkins1Msg {

        /** Skins1Msg type */
        type?: (number|null);

        /** Skins1Msg ids */
        ids?: (number[]|null);
    }

    /** Represents a Skins1Msg. */
    class Skins1Msg implements ISkins1Msg {

        /**
         * Constructs a new Skins1Msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISkins1Msg);

        /** Skins1Msg type. */
        public type: number;

        /** Skins1Msg ids. */
        public ids: number[];

        /**
         * Creates a new Skins1Msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Skins1Msg instance
         */
        public static create(properties?: pb.ISkins1Msg): pb.Skins1Msg;

        /**
         * Encodes the specified Skins1Msg message. Does not implicitly {@link pb.Skins1Msg.verify|verify} messages.
         * @param message Skins1Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISkins1Msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Skins1Msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Skins1Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Skins1Msg;
    }

    /** Properties of a UserSkin1Message. */
    interface IUserSkin1Message {

        /** UserSkin1Message crystalCoin */
        crystalCoin?: (number|null);

        /** UserSkin1Message decorated */
        decorated?: (pb.ISkins1Msg[]|null);

        /** UserSkin1Message owners */
        owners?: (pb.ISkins1Msg[]|null);
    }

    /** Represents a UserSkin1Message. */
    class UserSkin1Message implements IUserSkin1Message {

        /**
         * Constructs a new UserSkin1Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUserSkin1Message);

        /** UserSkin1Message crystalCoin. */
        public crystalCoin: number;

        /** UserSkin1Message decorated. */
        public decorated: pb.ISkins1Msg[];

        /** UserSkin1Message owners. */
        public owners: pb.ISkins1Msg[];

        /**
         * Creates a new UserSkin1Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSkin1Message instance
         */
        public static create(properties?: pb.IUserSkin1Message): pb.UserSkin1Message;

        /**
         * Encodes the specified UserSkin1Message message. Does not implicitly {@link pb.UserSkin1Message.verify|verify} messages.
         * @param message UserSkin1Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUserSkin1Message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSkin1Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSkin1Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UserSkin1Message;
    }

    /** Properties of a ReadyGoRes. */
    interface IReadyGoRes {

        /** ReadyGoRes code */
        code?: (number|null);

        /** ReadyGoRes msg */
        msg?: (string|null);

        /** ReadyGoRes data */
        data?: (pb.IReadyGoResData|null);
    }

    /** Represents a ReadyGoRes. */
    class ReadyGoRes implements IReadyGoRes {

        /**
         * Constructs a new ReadyGoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReadyGoRes);

        /** ReadyGoRes code. */
        public code: number;

        /** ReadyGoRes msg. */
        public msg: string;

        /** ReadyGoRes data. */
        public data?: (pb.IReadyGoResData|null);

        /**
         * Creates a new ReadyGoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyGoRes instance
         */
        public static create(properties?: pb.IReadyGoRes): pb.ReadyGoRes;

        /**
         * Encodes the specified ReadyGoRes message. Does not implicitly {@link pb.ReadyGoRes.verify|verify} messages.
         * @param message ReadyGoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReadyGoRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyGoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyGoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReadyGoRes;
    }

    /** Properties of a ReadyGoResData. */
    interface IReadyGoResData {

        /** ReadyGoResData first_uid */
        first_uid?: (string|null);

        /** ReadyGoResData ai_config */
        ai_config?: (string|null);

        /** ReadyGoResData flyer */
        flyer?: (pb.IFlyer[]|null);

        /** ReadyGoResData chessboard */
        chessboard?: (pb.IChessBoard|null);

        /** ReadyGoResData start_time */
        start_time?: (number|null);

        /** ReadyGoResData players */
        players?: (pb.IPlayer[]|null);

        /** ReadyGoResData roundEndTime */
        roundEndTime?: (number|null);

        /** ReadyGoResData userDatas */
        userDatas?: (pb.IUserData[]|null);

        /** ReadyGoResData loseCoin */
        loseCoin?: (number|null);

        /** ReadyGoResData winCoin */
        winCoin?: (number|null);

        /** ReadyGoResData gameMode */
        gameMode?: (number|null);
    }

    /** Represents a ReadyGoResData. */
    class ReadyGoResData implements IReadyGoResData {

        /**
         * Constructs a new ReadyGoResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReadyGoResData);

        /** ReadyGoResData first_uid. */
        public first_uid: string;

        /** ReadyGoResData ai_config. */
        public ai_config: string;

        /** ReadyGoResData flyer. */
        public flyer: pb.IFlyer[];

        /** ReadyGoResData chessboard. */
        public chessboard?: (pb.IChessBoard|null);

        /** ReadyGoResData start_time. */
        public start_time: number;

        /** ReadyGoResData players. */
        public players: pb.IPlayer[];

        /** ReadyGoResData roundEndTime. */
        public roundEndTime: number;

        /** ReadyGoResData userDatas. */
        public userDatas: pb.IUserData[];

        /** ReadyGoResData loseCoin. */
        public loseCoin: number;

        /** ReadyGoResData winCoin. */
        public winCoin: number;

        /** ReadyGoResData gameMode. */
        public gameMode: number;

        /**
         * Creates a new ReadyGoResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyGoResData instance
         */
        public static create(properties?: pb.IReadyGoResData): pb.ReadyGoResData;

        /**
         * Encodes the specified ReadyGoResData message. Does not implicitly {@link pb.ReadyGoResData.verify|verify} messages.
         * @param message ReadyGoResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReadyGoResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyGoResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyGoResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReadyGoResData;
    }

    /** Properties of a Flyer. */
    interface IFlyer {

        /** Flyer uid */
        uid?: (string|null);

        /** Flyer color */
        color?: (number|null);

        /** Flyer plane_num */
        plane_num?: (number|null);

        /** Flyer path */
        path?: (pb.IPosition[]|null);

        /** Flyer safe_positions */
        safe_positions?: (pb.IPosition[]|null);

        /** Flyer guide_player */
        guide_player?: (number|null);
    }

    /** Represents a Flyer. */
    class Flyer implements IFlyer {

        /**
         * Constructs a new Flyer.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFlyer);

        /** Flyer uid. */
        public uid: string;

        /** Flyer color. */
        public color: number;

        /** Flyer plane_num. */
        public plane_num: number;

        /** Flyer path. */
        public path: pb.IPosition[];

        /** Flyer safe_positions. */
        public safe_positions: pb.IPosition[];

        /** Flyer guide_player. */
        public guide_player: number;

        /**
         * Creates a new Flyer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Flyer instance
         */
        public static create(properties?: pb.IFlyer): pb.Flyer;

        /**
         * Encodes the specified Flyer message. Does not implicitly {@link pb.Flyer.verify|verify} messages.
         * @param message Flyer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFlyer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Flyer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Flyer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Flyer;
    }

    /** Properties of a ChessBoard. */
    interface IChessBoard {

        /** ChessBoard airport_planes */
        airport_planes?: (pb.IAirPortPlane[]|null);

        /** ChessBoard plane */
        plane?: (pb.IPlane[]|null);
    }

    /** Represents a ChessBoard. */
    class ChessBoard implements IChessBoard {

        /**
         * Constructs a new ChessBoard.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChessBoard);

        /** ChessBoard airport_planes. */
        public airport_planes: pb.IAirPortPlane[];

        /** ChessBoard plane. */
        public plane: pb.IPlane[];

        /**
         * Creates a new ChessBoard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChessBoard instance
         */
        public static create(properties?: pb.IChessBoard): pb.ChessBoard;

        /**
         * Encodes the specified ChessBoard message. Does not implicitly {@link pb.ChessBoard.verify|verify} messages.
         * @param message ChessBoard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChessBoard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChessBoard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChessBoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChessBoard;
    }

    /** Properties of an AirPortPlane. */
    interface IAirPortPlane {

        /** AirPortPlane color */
        color?: (number|null);

        /** AirPortPlane plane */
        plane?: (number|null);

        /** AirPortPlane pos */
        pos?: (number|null);
    }

    /** Represents an AirPortPlane. */
    class AirPortPlane implements IAirPortPlane {

        /**
         * Constructs a new AirPortPlane.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAirPortPlane);

        /** AirPortPlane color. */
        public color: number;

        /** AirPortPlane plane. */
        public plane: number;

        /** AirPortPlane pos. */
        public pos: number;

        /**
         * Creates a new AirPortPlane instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AirPortPlane instance
         */
        public static create(properties?: pb.IAirPortPlane): pb.AirPortPlane;

        /**
         * Encodes the specified AirPortPlane message. Does not implicitly {@link pb.AirPortPlane.verify|verify} messages.
         * @param message AirPortPlane message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAirPortPlane, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AirPortPlane message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AirPortPlane
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AirPortPlane;
    }

    /** Properties of a Plane. */
    interface IPlane {

        /** Plane x */
        x?: (number|null);

        /** Plane y */
        y?: (number|null);

        /** Plane color */
        color?: (number|null);

        /** Plane plane */
        plane?: (number|null);
    }

    /** Represents a Plane. */
    class Plane implements IPlane {

        /**
         * Constructs a new Plane.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlane);

        /** Plane x. */
        public x: number;

        /** Plane y. */
        public y: number;

        /** Plane color. */
        public color: number;

        /** Plane plane. */
        public plane: number;

        /**
         * Creates a new Plane instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Plane instance
         */
        public static create(properties?: pb.IPlane): pb.Plane;

        /**
         * Encodes the specified Plane message. Does not implicitly {@link pb.Plane.verify|verify} messages.
         * @param message Plane message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlane, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Plane message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Plane
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Plane;
    }

    /** Properties of a RaceGameOverMessage. */
    interface IRaceGameOverMessage {

        /** RaceGameOverMessage winUid */
        winUid?: (string|null);

        /** RaceGameOverMessage users */
        users?: (pb.IRaceUserMessage[]|null);

        /** RaceGameOverMessage baseAwardCount */
        baseAwardCount?: (number|null);

        /** RaceGameOverMessage raceAward */
        raceAward?: (pb.IRaceAwardMessage|null);

        /** RaceGameOverMessage ticketCoin */
        ticketCoin?: (number|null);

        /** RaceGameOverMessage extraCoin */
        extraCoin?: (number|null);
    }

    /** Represents a RaceGameOverMessage. */
    class RaceGameOverMessage implements IRaceGameOverMessage {

        /**
         * Constructs a new RaceGameOverMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceGameOverMessage);

        /** RaceGameOverMessage winUid. */
        public winUid: string;

        /** RaceGameOverMessage users. */
        public users: pb.IRaceUserMessage[];

        /** RaceGameOverMessage baseAwardCount. */
        public baseAwardCount: number;

        /** RaceGameOverMessage raceAward. */
        public raceAward?: (pb.IRaceAwardMessage|null);

        /** RaceGameOverMessage ticketCoin. */
        public ticketCoin: number;

        /** RaceGameOverMessage extraCoin. */
        public extraCoin: number;

        /**
         * Creates a new RaceGameOverMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceGameOverMessage instance
         */
        public static create(properties?: pb.IRaceGameOverMessage): pb.RaceGameOverMessage;

        /**
         * Encodes the specified RaceGameOverMessage message. Does not implicitly {@link pb.RaceGameOverMessage.verify|verify} messages.
         * @param message RaceGameOverMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceGameOverMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceGameOverMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceGameOverMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceGameOverMessage;
    }

    /** Properties of a RaceUserMessage. */
    interface IRaceUserMessage {

        /** RaceUserMessage uid */
        uid?: (string|null);

        /** RaceUserMessage winCount */
        winCount?: (number|null);

        /** RaceUserMessage bestWinCount */
        bestWinCount?: (number|null);

        /** RaceUserMessage shareCount */
        shareCount?: (number|null);

        /** RaceUserMessage shareId */
        shareId?: (string|null);

        /** RaceUserMessage rebornCount */
        rebornCount?: (number|null);

        /** RaceUserMessage rebornId */
        rebornId?: (string|null);

        /** RaceUserMessage leftFreeTicket */
        leftFreeTicket?: (number|null);

        /** RaceUserMessage leftBuyTicket */
        leftBuyTicket?: (number|null);

        /** RaceUserMessage dayLeftRebornCount */
        dayLeftRebornCount?: (number|null);
    }

    /** Represents a RaceUserMessage. */
    class RaceUserMessage implements IRaceUserMessage {

        /**
         * Constructs a new RaceUserMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceUserMessage);

        /** RaceUserMessage uid. */
        public uid: string;

        /** RaceUserMessage winCount. */
        public winCount: number;

        /** RaceUserMessage bestWinCount. */
        public bestWinCount: number;

        /** RaceUserMessage shareCount. */
        public shareCount: number;

        /** RaceUserMessage shareId. */
        public shareId: string;

        /** RaceUserMessage rebornCount. */
        public rebornCount: number;

        /** RaceUserMessage rebornId. */
        public rebornId: string;

        /** RaceUserMessage leftFreeTicket. */
        public leftFreeTicket: number;

        /** RaceUserMessage leftBuyTicket. */
        public leftBuyTicket: number;

        /** RaceUserMessage dayLeftRebornCount. */
        public dayLeftRebornCount: number;

        /**
         * Creates a new RaceUserMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceUserMessage instance
         */
        public static create(properties?: pb.IRaceUserMessage): pb.RaceUserMessage;

        /**
         * Encodes the specified RaceUserMessage message. Does not implicitly {@link pb.RaceUserMessage.verify|verify} messages.
         * @param message RaceUserMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceUserMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceUserMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceUserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceUserMessage;
    }

    /** Properties of a SixModeGameOverMessage. */
    interface ISixModeGameOverMessage {

        /** SixModeGameOverMessage rank */
        rank?: (number[]|null);

        /** SixModeGameOverMessage coinChange */
        coinChange?: (number[]|null);
    }

    /** Represents a SixModeGameOverMessage. */
    class SixModeGameOverMessage implements ISixModeGameOverMessage {

        /**
         * Constructs a new SixModeGameOverMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeGameOverMessage);

        /** SixModeGameOverMessage rank. */
        public rank: number[];

        /** SixModeGameOverMessage coinChange. */
        public coinChange: number[];

        /**
         * Creates a new SixModeGameOverMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeGameOverMessage instance
         */
        public static create(properties?: pb.ISixModeGameOverMessage): pb.SixModeGameOverMessage;

        /**
         * Encodes the specified SixModeGameOverMessage message. Does not implicitly {@link pb.SixModeGameOverMessage.verify|verify} messages.
         * @param message SixModeGameOverMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeGameOverMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeGameOverMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeGameOverMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeGameOverMessage;
    }

    /** Properties of a GhostModeGameOverMessage. */
    interface IGhostModeGameOverMessage {

        /** GhostModeGameOverMessage winArwards */
        winArwards?: (pb.IRewardItem[]|null);

        /** GhostModeGameOverMessage lostArwards */
        lostArwards?: (pb.IRewardItem[]|null);

        /** GhostModeGameOverMessage winners */
        winners?: (string[]|null);

        /** GhostModeGameOverMessage ghostScore */
        ghostScore?: (number|null);

        /** GhostModeGameOverMessage userScore */
        userScore?: (number|null);
    }

    /** Represents a GhostModeGameOverMessage. */
    class GhostModeGameOverMessage implements IGhostModeGameOverMessage {

        /**
         * Constructs a new GhostModeGameOverMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostModeGameOverMessage);

        /** GhostModeGameOverMessage winArwards. */
        public winArwards: pb.IRewardItem[];

        /** GhostModeGameOverMessage lostArwards. */
        public lostArwards: pb.IRewardItem[];

        /** GhostModeGameOverMessage winners. */
        public winners: string[];

        /** GhostModeGameOverMessage ghostScore. */
        public ghostScore: number;

        /** GhostModeGameOverMessage userScore. */
        public userScore: number;

        /**
         * Creates a new GhostModeGameOverMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostModeGameOverMessage instance
         */
        public static create(properties?: pb.IGhostModeGameOverMessage): pb.GhostModeGameOverMessage;

        /**
         * Encodes the specified GhostModeGameOverMessage message. Does not implicitly {@link pb.GhostModeGameOverMessage.verify|verify} messages.
         * @param message GhostModeGameOverMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostModeGameOverMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostModeGameOverMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostModeGameOverMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostModeGameOverMessage;
    }

    /** Properties of a GameOverRes. */
    interface IGameOverRes {

        /** GameOverRes code */
        code?: (number|null);

        /** GameOverRes msg */
        msg?: (string|null);

        /** GameOverRes data */
        data?: (pb.IGameOverResData|null);
    }

    /** Represents a GameOverRes. */
    class GameOverRes implements IGameOverRes {

        /**
         * Constructs a new GameOverRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameOverRes);

        /** GameOverRes code. */
        public code: number;

        /** GameOverRes msg. */
        public msg: string;

        /** GameOverRes data. */
        public data?: (pb.IGameOverResData|null);

        /**
         * Creates a new GameOverRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameOverRes instance
         */
        public static create(properties?: pb.IGameOverRes): pb.GameOverRes;

        /**
         * Encodes the specified GameOverRes message. Does not implicitly {@link pb.GameOverRes.verify|verify} messages.
         * @param message GameOverRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameOverRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameOverRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameOverRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameOverRes;
    }

    /** Properties of a GameOverResData. */
    interface IGameOverResData {

        /** GameOverResData reason */
        reason?: (string|null);

        /** GameOverResData winUid */
        winUid?: (string|null);

        /** GameOverResData winTeamid */
        winTeamid?: (string|null);

        /** GameOverResData result */
        result?: (pb.IGameResult|null);

        /** GameOverResData grade */
        grade?: (number|null);

        /** GameOverResData gameType */
        gameType?: (number|null);

        /** GameOverResData userMessages */
        userMessages?: (pb.IUserLevelMessage[]|null);

        /** GameOverResData userData */
        userData?: (pb.IUserData[]|null);

        /** GameOverResData needQueryAiInvite */
        needQueryAiInvite?: (boolean|null);

        /** GameOverResData winnerMuti */
        winnerMuti?: (number|null);

        /** GameOverResData videoId */
        videoId?: (string|null);

        /** GameOverResData message */
        message?: (pb.IRaceGameOverMessage|null);

        /** GameOverResData gameMode */
        gameMode?: (number|null);

        /** GameOverResData sixmodeMessage */
        sixmodeMessage?: (pb.ISixModeGameOverMessage|null);

        /** GameOverResData ghostModeMessage */
        ghostModeMessage?: (pb.IGhostModeGameOverMessage|null);
    }

    /** Represents a GameOverResData. */
    class GameOverResData implements IGameOverResData {

        /**
         * Constructs a new GameOverResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameOverResData);

        /** GameOverResData reason. */
        public reason: string;

        /** GameOverResData winUid. */
        public winUid: string;

        /** GameOverResData winTeamid. */
        public winTeamid: string;

        /** GameOverResData result. */
        public result?: (pb.IGameResult|null);

        /** GameOverResData grade. */
        public grade: number;

        /** GameOverResData gameType. */
        public gameType: number;

        /** GameOverResData userMessages. */
        public userMessages: pb.IUserLevelMessage[];

        /** GameOverResData userData. */
        public userData: pb.IUserData[];

        /** GameOverResData needQueryAiInvite. */
        public needQueryAiInvite: boolean;

        /** GameOverResData winnerMuti. */
        public winnerMuti: number;

        /** GameOverResData videoId. */
        public videoId: string;

        /** GameOverResData message. */
        public message?: (pb.IRaceGameOverMessage|null);

        /** GameOverResData gameMode. */
        public gameMode: number;

        /** GameOverResData sixmodeMessage. */
        public sixmodeMessage?: (pb.ISixModeGameOverMessage|null);

        /** GameOverResData ghostModeMessage. */
        public ghostModeMessage?: (pb.IGhostModeGameOverMessage|null);

        /**
         * Creates a new GameOverResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameOverResData instance
         */
        public static create(properties?: pb.IGameOverResData): pb.GameOverResData;

        /**
         * Encodes the specified GameOverResData message. Does not implicitly {@link pb.GameOverResData.verify|verify} messages.
         * @param message GameOverResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameOverResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameOverResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameOverResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameOverResData;
    }

    /** Properties of a UserLevelMessage. */
    interface IUserLevelMessage {

        /** UserLevelMessage uid */
        uid?: (string|null);

        /** UserLevelMessage pre */
        pre?: (pb.ILevelMessage|null);

        /** UserLevelMessage cur */
        cur?: (pb.ILevelMessage|null);
    }

    /** Represents a UserLevelMessage. */
    class UserLevelMessage implements IUserLevelMessage {

        /**
         * Constructs a new UserLevelMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUserLevelMessage);

        /** UserLevelMessage uid. */
        public uid: string;

        /** UserLevelMessage pre. */
        public pre?: (pb.ILevelMessage|null);

        /** UserLevelMessage cur. */
        public cur?: (pb.ILevelMessage|null);

        /**
         * Creates a new UserLevelMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLevelMessage instance
         */
        public static create(properties?: pb.IUserLevelMessage): pb.UserLevelMessage;

        /**
         * Encodes the specified UserLevelMessage message. Does not implicitly {@link pb.UserLevelMessage.verify|verify} messages.
         * @param message UserLevelMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUserLevelMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLevelMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLevelMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UserLevelMessage;
    }

    /** Properties of a GameResult. */
    interface IGameResult {

        /** GameResult timestamp */
        timestamp?: (number|null);

        /** GameResult nonstr */
        nonstr?: (string|null);

        /** GameResult sign */
        sign?: (string|null);

        /** GameResult gametype */
        gametype?: (string|null);

        /** GameResult result */
        result?: (pb.IGameResultDetail|null);
    }

    /** Represents a GameResult. */
    class GameResult implements IGameResult {

        /**
         * Constructs a new GameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameResult);

        /** GameResult timestamp. */
        public timestamp: number;

        /** GameResult nonstr. */
        public nonstr: string;

        /** GameResult sign. */
        public sign: string;

        /** GameResult gametype. */
        public gametype: string;

        /** GameResult result. */
        public result?: (pb.IGameResultDetail|null);

        /**
         * Creates a new GameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResult instance
         */
        public static create(properties?: pb.IGameResult): pb.GameResult;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link pb.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameResult;
    }

    /** Properties of a GameResultDetail. */
    interface IGameResultDetail {

        /** GameResultDetail gameid */
        gameid?: (string|null);

        /** GameResultDetail roomid */
        roomid?: (string|null);

        /** GameResultDetail channelid */
        channelid?: (string|null);

        /** GameResultDetail resulttype */
        resulttype?: (string|null);

        /** GameResultDetail users */
        users?: (string[]|null);

        /** GameResultDetail winners */
        winners?: (string[]|null);

        /** GameResultDetail jifen */
        jifen?: (string[]|null);

        /** GameResultDetail subgamemode */
        subgamemode?: (number|null);

        /** GameResultDetail juci */
        juci?: (number|null);

        /** GameResultDetail hallId */
        hallId?: (string[]|null);
    }

    /** Represents a GameResultDetail. */
    class GameResultDetail implements IGameResultDetail {

        /**
         * Constructs a new GameResultDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameResultDetail);

        /** GameResultDetail gameid. */
        public gameid: string;

        /** GameResultDetail roomid. */
        public roomid: string;

        /** GameResultDetail channelid. */
        public channelid: string;

        /** GameResultDetail resulttype. */
        public resulttype: string;

        /** GameResultDetail users. */
        public users: string[];

        /** GameResultDetail winners. */
        public winners: string[];

        /** GameResultDetail jifen. */
        public jifen: string[];

        /** GameResultDetail subgamemode. */
        public subgamemode: number;

        /** GameResultDetail juci. */
        public juci: number;

        /** GameResultDetail hallId. */
        public hallId: string[];

        /**
         * Creates a new GameResultDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResultDetail instance
         */
        public static create(properties?: pb.IGameResultDetail): pb.GameResultDetail;

        /**
         * Encodes the specified GameResultDetail message. Does not implicitly {@link pb.GameResultDetail.verify|verify} messages.
         * @param message GameResultDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameResultDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResultDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResultDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameResultDetail;
    }

    /** Properties of a TeamsDetail. */
    interface ITeamsDetail {

        /** TeamsDetail teamid */
        teamid?: (string|null);

        /** TeamsDetail uids */
        uids?: (string[]|null);
    }

    /** Represents a TeamsDetail. */
    class TeamsDetail implements ITeamsDetail {

        /**
         * Constructs a new TeamsDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITeamsDetail);

        /** TeamsDetail teamid. */
        public teamid: string;

        /** TeamsDetail uids. */
        public uids: string[];

        /**
         * Creates a new TeamsDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamsDetail instance
         */
        public static create(properties?: pb.ITeamsDetail): pb.TeamsDetail;

        /**
         * Encodes the specified TeamsDetail message. Does not implicitly {@link pb.TeamsDetail.verify|verify} messages.
         * @param message TeamsDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITeamsDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamsDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamsDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TeamsDetail;
    }

    /** Properties of a ReLoginRes. */
    interface IReLoginRes {

        /** ReLoginRes code */
        code?: (number|null);

        /** ReLoginRes msg */
        msg?: (string|null);

        /** ReLoginRes data */
        data?: (pb.IReLoginResData|null);
    }

    /** Represents a ReLoginRes. */
    class ReLoginRes implements IReLoginRes {

        /**
         * Constructs a new ReLoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReLoginRes);

        /** ReLoginRes code. */
        public code: number;

        /** ReLoginRes msg. */
        public msg: string;

        /** ReLoginRes data. */
        public data?: (pb.IReLoginResData|null);

        /**
         * Creates a new ReLoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReLoginRes instance
         */
        public static create(properties?: pb.IReLoginRes): pb.ReLoginRes;

        /**
         * Encodes the specified ReLoginRes message. Does not implicitly {@link pb.ReLoginRes.verify|verify} messages.
         * @param message ReLoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReLoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReLoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReLoginRes;
    }

    /** Properties of a ReLoginResData. */
    interface IReLoginResData {

        /** ReLoginResData stage */
        stage?: (string|null);

        /** ReLoginResData curuid */
        curuid?: (string|null);

        /** ReLoginResData dicenum */
        dicenum?: (number|null);

        /** ReLoginResData ai_config */
        ai_config?: (string|null);

        /** ReLoginResData flyer */
        flyer?: (pb.IFlyer[]|null);

        /** ReLoginResData chessboard */
        chessboard?: (pb.IChessBoard|null);

        /** ReLoginResData roundEndTime */
        roundEndTime?: (number|null);

        /** ReLoginResData dicetype */
        dicetype?: (pb.DiceNumResType|null);

        /** ReLoginResData players */
        players?: (pb.IPlayer[]|null);

        /** ReLoginResData coin */
        coin?: (number|null);

        /** ReLoginResData gameMode */
        gameMode?: (number|null);

        /** ReLoginResData leftSecond */
        leftSecond?: (number|null);

        /** ReLoginResData userDatas */
        userDatas?: (pb.IUserData[]|null);

        /** ReLoginResData loseCoin */
        loseCoin?: (number|null);

        /** ReLoginResData winCoin */
        winCoin?: (number|null);
    }

    /** Represents a ReLoginResData. */
    class ReLoginResData implements IReLoginResData {

        /**
         * Constructs a new ReLoginResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReLoginResData);

        /** ReLoginResData stage. */
        public stage: string;

        /** ReLoginResData curuid. */
        public curuid: string;

        /** ReLoginResData dicenum. */
        public dicenum: number;

        /** ReLoginResData ai_config. */
        public ai_config: string;

        /** ReLoginResData flyer. */
        public flyer: pb.IFlyer[];

        /** ReLoginResData chessboard. */
        public chessboard?: (pb.IChessBoard|null);

        /** ReLoginResData roundEndTime. */
        public roundEndTime: number;

        /** ReLoginResData dicetype. */
        public dicetype: pb.DiceNumResType;

        /** ReLoginResData players. */
        public players: pb.IPlayer[];

        /** ReLoginResData coin. */
        public coin: number;

        /** ReLoginResData gameMode. */
        public gameMode: number;

        /** ReLoginResData leftSecond. */
        public leftSecond: number;

        /** ReLoginResData userDatas. */
        public userDatas: pb.IUserData[];

        /** ReLoginResData loseCoin. */
        public loseCoin: number;

        /** ReLoginResData winCoin. */
        public winCoin: number;

        /**
         * Creates a new ReLoginResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReLoginResData instance
         */
        public static create(properties?: pb.IReLoginResData): pb.ReLoginResData;

        /**
         * Encodes the specified ReLoginResData message. Does not implicitly {@link pb.ReLoginResData.verify|verify} messages.
         * @param message ReLoginResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReLoginResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReLoginResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReLoginResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReLoginResData;
    }

    /** Properties of a DiceNumReq. */
    interface IDiceNumReq {

        /** DiceNumReq num */
        num?: (number|null);
    }

    /** Represents a DiceNumReq. */
    class DiceNumReq implements IDiceNumReq {

        /**
         * Constructs a new DiceNumReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDiceNumReq);

        /** DiceNumReq num. */
        public num: number;

        /**
         * Creates a new DiceNumReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiceNumReq instance
         */
        public static create(properties?: pb.IDiceNumReq): pb.DiceNumReq;

        /**
         * Encodes the specified DiceNumReq message. Does not implicitly {@link pb.DiceNumReq.verify|verify} messages.
         * @param message DiceNumReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDiceNumReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiceNumReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiceNumReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DiceNumReq;
    }

    /** Properties of a DiceNumRes. */
    interface IDiceNumRes {

        /** DiceNumRes code */
        code?: (number|null);

        /** DiceNumRes msg */
        msg?: (string|null);

        /** DiceNumRes data */
        data?: (pb.IDiceNumData|null);
    }

    /** Represents a DiceNumRes. */
    class DiceNumRes implements IDiceNumRes {

        /**
         * Constructs a new DiceNumRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDiceNumRes);

        /** DiceNumRes code. */
        public code: number;

        /** DiceNumRes msg. */
        public msg: string;

        /** DiceNumRes data. */
        public data?: (pb.IDiceNumData|null);

        /**
         * Creates a new DiceNumRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiceNumRes instance
         */
        public static create(properties?: pb.IDiceNumRes): pb.DiceNumRes;

        /**
         * Encodes the specified DiceNumRes message. Does not implicitly {@link pb.DiceNumRes.verify|verify} messages.
         * @param message DiceNumRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDiceNumRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiceNumRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiceNumRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DiceNumRes;
    }

    /** Properties of a DiceNumData. */
    interface IDiceNumData {

        /** DiceNumData num */
        num?: (number|null);

        /** DiceNumData roundEndTime */
        roundEndTime?: (number|null);

        /** DiceNumData type */
        type?: (pb.DiceNumResType|null);
    }

    /** Represents a DiceNumData. */
    class DiceNumData implements IDiceNumData {

        /**
         * Constructs a new DiceNumData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDiceNumData);

        /** DiceNumData num. */
        public num: number;

        /** DiceNumData roundEndTime. */
        public roundEndTime: number;

        /** DiceNumData type. */
        public type: pb.DiceNumResType;

        /**
         * Creates a new DiceNumData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiceNumData instance
         */
        public static create(properties?: pb.IDiceNumData): pb.DiceNumData;

        /**
         * Encodes the specified DiceNumData message. Does not implicitly {@link pb.DiceNumData.verify|verify} messages.
         * @param message DiceNumData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDiceNumData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiceNumData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiceNumData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DiceNumData;
    }

    /** DiceNumResType enum. */
    enum DiceNumResType {
        COMMON = 0,
        FAIL666 = 1
    }

    /** Properties of a MoveReq. */
    interface IMoveReq {

        /** MoveReq color */
        color?: (number|null);

        /** MoveReq plane */
        plane?: (number|null);

        /** MoveReq type */
        type?: (pb.MoveType|null);

        /** MoveReq diceNum */
        diceNum?: (number|null);
    }

    /** Represents a MoveReq. */
    class MoveReq implements IMoveReq {

        /**
         * Constructs a new MoveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMoveReq);

        /** MoveReq color. */
        public color: number;

        /** MoveReq plane. */
        public plane: number;

        /** MoveReq type. */
        public type: pb.MoveType;

        /** MoveReq diceNum. */
        public diceNum: number;

        /**
         * Creates a new MoveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveReq instance
         */
        public static create(properties?: pb.IMoveReq): pb.MoveReq;

        /**
         * Encodes the specified MoveReq message. Does not implicitly {@link pb.MoveReq.verify|verify} messages.
         * @param message MoveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMoveReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MoveReq;
    }

    /** MoveType enum. */
    enum MoveType {
        NORMAL = 0,
        TAKEOFF = 1,
        NOMOVE = 2
    }

    /** Properties of a CrashPlane. */
    interface ICrashPlane {

        /** CrashPlane color */
        color?: (number|null);

        /** CrashPlane plane */
        plane?: (number|null);

        /** CrashPlane x */
        x?: (number|null);

        /** CrashPlane y */
        y?: (number|null);

        /** CrashPlane pos */
        pos?: (number|null);
    }

    /** Represents a CrashPlane. */
    class CrashPlane implements ICrashPlane {

        /**
         * Constructs a new CrashPlane.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICrashPlane);

        /** CrashPlane color. */
        public color: number;

        /** CrashPlane plane. */
        public plane: number;

        /** CrashPlane x. */
        public x: number;

        /** CrashPlane y. */
        public y: number;

        /** CrashPlane pos. */
        public pos: number;

        /**
         * Creates a new CrashPlane instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CrashPlane instance
         */
        public static create(properties?: pb.ICrashPlane): pb.CrashPlane;

        /**
         * Encodes the specified CrashPlane message. Does not implicitly {@link pb.CrashPlane.verify|verify} messages.
         * @param message CrashPlane message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICrashPlane, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CrashPlane message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CrashPlane
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CrashPlane;
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position x */
        x?: (number|null);

        /** Position y */
        y?: (number|null);
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPosition);

        /** Position x. */
        public x: number;

        /** Position y. */
        public y: number;

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: pb.IPosition): pb.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link pb.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Position;
    }

    /** Properties of a MoveRes. */
    interface IMoveRes {

        /** MoveRes code */
        code?: (number|null);

        /** MoveRes msg */
        msg?: (string|null);

        /** MoveRes data */
        data?: (pb.IMoveResData|null);
    }

    /** Represents a MoveRes. */
    class MoveRes implements IMoveRes {

        /**
         * Constructs a new MoveRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMoveRes);

        /** MoveRes code. */
        public code: number;

        /** MoveRes msg. */
        public msg: string;

        /** MoveRes data. */
        public data?: (pb.IMoveResData|null);

        /**
         * Creates a new MoveRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveRes instance
         */
        public static create(properties?: pb.IMoveRes): pb.MoveRes;

        /**
         * Encodes the specified MoveRes message. Does not implicitly {@link pb.MoveRes.verify|verify} messages.
         * @param message MoveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMoveRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoveRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MoveRes;
    }

    /** Properties of a MoveResData. */
    interface IMoveResData {

        /** MoveResData uid */
        uid?: (string|null);

        /** MoveResData plane */
        plane?: (pb.IPlane|null);

        /** MoveResData airport_plane */
        airport_plane?: (pb.IAirPortPlane|null);

        /** MoveResData type */
        type?: (pb.MoveType|null);

        /** MoveResData crashPlanes */
        crashPlanes?: (pb.ICrashPlane[]|null);

        /** MoveResData next_uid */
        next_uid?: (string|null);

        /** MoveResData roundEndTime */
        roundEndTime?: (number|null);

        /** MoveResData diceNum */
        diceNum?: (number|null);

        /** MoveResData extendRoundOn2v2 */
        extendRoundOn2v2?: (boolean|null);
    }

    /** Represents a MoveResData. */
    class MoveResData implements IMoveResData {

        /**
         * Constructs a new MoveResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMoveResData);

        /** MoveResData uid. */
        public uid: string;

        /** MoveResData plane. */
        public plane?: (pb.IPlane|null);

        /** MoveResData airport_plane. */
        public airport_plane?: (pb.IAirPortPlane|null);

        /** MoveResData type. */
        public type: pb.MoveType;

        /** MoveResData crashPlanes. */
        public crashPlanes: pb.ICrashPlane[];

        /** MoveResData next_uid. */
        public next_uid: string;

        /** MoveResData roundEndTime. */
        public roundEndTime: number;

        /** MoveResData diceNum. */
        public diceNum: number;

        /** MoveResData extendRoundOn2v2. */
        public extendRoundOn2v2: boolean;

        /**
         * Creates a new MoveResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveResData instance
         */
        public static create(properties?: pb.IMoveResData): pb.MoveResData;

        /**
         * Encodes the specified MoveResData message. Does not implicitly {@link pb.MoveResData.verify|verify} messages.
         * @param message MoveResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMoveResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoveResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MoveResData;
    }

    /** Properties of a PlayExitReq. */
    interface IPlayExitReq {
    }

    /** Represents a PlayExitReq. */
    class PlayExitReq implements IPlayExitReq {

        /**
         * Constructs a new PlayExitReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayExitReq);

        /**
         * Creates a new PlayExitReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayExitReq instance
         */
        public static create(properties?: pb.IPlayExitReq): pb.PlayExitReq;

        /**
         * Encodes the specified PlayExitReq message. Does not implicitly {@link pb.PlayExitReq.verify|verify} messages.
         * @param message PlayExitReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayExitReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayExitReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayExitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlayExitReq;
    }

    /** Properties of a PlayExitRes. */
    interface IPlayExitRes {

        /** PlayExitRes code */
        code?: (number|null);

        /** PlayExitRes msg */
        msg?: (string|null);

        /** PlayExitRes uid */
        uid?: (string|null);
    }

    /** Represents a PlayExitRes. */
    class PlayExitRes implements IPlayExitRes {

        /**
         * Constructs a new PlayExitRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayExitRes);

        /** PlayExitRes code. */
        public code: number;

        /** PlayExitRes msg. */
        public msg: string;

        /** PlayExitRes uid. */
        public uid: string;

        /**
         * Creates a new PlayExitRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayExitRes instance
         */
        public static create(properties?: pb.IPlayExitRes): pb.PlayExitRes;

        /**
         * Encodes the specified PlayExitRes message. Does not implicitly {@link pb.PlayExitRes.verify|verify} messages.
         * @param message PlayExitRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayExitRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayExitRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayExitRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlayExitRes;
    }

    /** Properties of a PlayReEnterRes. */
    interface IPlayReEnterRes {

        /** PlayReEnterRes code */
        code?: (number|null);

        /** PlayReEnterRes msg */
        msg?: (string|null);

        /** PlayReEnterRes uid */
        uid?: (string|null);
    }

    /** Represents a PlayReEnterRes. */
    class PlayReEnterRes implements IPlayReEnterRes {

        /**
         * Constructs a new PlayReEnterRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayReEnterRes);

        /** PlayReEnterRes code. */
        public code: number;

        /** PlayReEnterRes msg. */
        public msg: string;

        /** PlayReEnterRes uid. */
        public uid: string;

        /**
         * Creates a new PlayReEnterRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayReEnterRes instance
         */
        public static create(properties?: pb.IPlayReEnterRes): pb.PlayReEnterRes;

        /**
         * Encodes the specified PlayReEnterRes message. Does not implicitly {@link pb.PlayReEnterRes.verify|verify} messages.
         * @param message PlayReEnterRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayReEnterRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayReEnterRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayReEnterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlayReEnterRes;
    }

    /** Properties of a MatchReq. */
    interface IMatchReq {

        /** MatchReq grade */
        grade?: (number|null);

        /** MatchReq gameType */
        gameType?: (number|null);

        /** MatchReq sn */
        sn?: (string|null);
    }

    /** Represents a MatchReq. */
    class MatchReq implements IMatchReq {

        /**
         * Constructs a new MatchReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchReq);

        /** MatchReq grade. */
        public grade: number;

        /** MatchReq gameType. */
        public gameType: number;

        /** MatchReq sn. */
        public sn: string;

        /**
         * Creates a new MatchReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchReq instance
         */
        public static create(properties?: pb.IMatchReq): pb.MatchReq;

        /**
         * Encodes the specified MatchReq message. Does not implicitly {@link pb.MatchReq.verify|verify} messages.
         * @param message MatchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchReq;
    }

    /** Properties of a MatchRes. */
    interface IMatchRes {

        /** MatchRes code */
        code?: (number|null);

        /** MatchRes roomId */
        roomId?: (string|null);

        /** MatchRes timestamp */
        timestamp?: (number|null);

        /** MatchRes opt */
        opt?: (string|null);

        /** MatchRes sign */
        sign?: (string|null);

        /** MatchRes problemUid */
        problemUid?: (string|null);

        /** MatchRes gameType */
        gameType?: (number|null);

        /** MatchRes sn */
        sn?: (string|null);
    }

    /** Represents a MatchRes. */
    class MatchRes implements IMatchRes {

        /**
         * Constructs a new MatchRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchRes);

        /** MatchRes code. */
        public code: number;

        /** MatchRes roomId. */
        public roomId: string;

        /** MatchRes timestamp. */
        public timestamp: number;

        /** MatchRes opt. */
        public opt: string;

        /** MatchRes sign. */
        public sign: string;

        /** MatchRes problemUid. */
        public problemUid: string;

        /** MatchRes gameType. */
        public gameType: number;

        /** MatchRes sn. */
        public sn: string;

        /**
         * Creates a new MatchRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchRes instance
         */
        public static create(properties?: pb.IMatchRes): pb.MatchRes;

        /**
         * Encodes the specified MatchRes message. Does not implicitly {@link pb.MatchRes.verify|verify} messages.
         * @param message MatchRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchRes;
    }

    /** Properties of a CancelMatchReq. */
    interface ICancelMatchReq {

        /** CancelMatchReq sn */
        sn?: (string|null);
    }

    /** Represents a CancelMatchReq. */
    class CancelMatchReq implements ICancelMatchReq {

        /**
         * Constructs a new CancelMatchReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICancelMatchReq);

        /** CancelMatchReq sn. */
        public sn: string;

        /**
         * Creates a new CancelMatchReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelMatchReq instance
         */
        public static create(properties?: pb.ICancelMatchReq): pb.CancelMatchReq;

        /**
         * Encodes the specified CancelMatchReq message. Does not implicitly {@link pb.CancelMatchReq.verify|verify} messages.
         * @param message CancelMatchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICancelMatchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelMatchReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelMatchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CancelMatchReq;
    }

    /** Properties of a CancelMatchRes. */
    interface ICancelMatchRes {

        /** CancelMatchRes code */
        code?: (number|null);
    }

    /** Represents a CancelMatchRes. */
    class CancelMatchRes implements ICancelMatchRes {

        /**
         * Constructs a new CancelMatchRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICancelMatchRes);

        /** CancelMatchRes code. */
        public code: number;

        /**
         * Creates a new CancelMatchRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelMatchRes instance
         */
        public static create(properties?: pb.ICancelMatchRes): pb.CancelMatchRes;

        /**
         * Encodes the specified CancelMatchRes message. Does not implicitly {@link pb.CancelMatchRes.verify|verify} messages.
         * @param message CancelMatchRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICancelMatchRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelMatchRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelMatchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CancelMatchRes;
    }

    /** Properties of a ReJoinRes. */
    interface IReJoinRes {

        /** ReJoinRes roomId */
        roomId?: (string|null);

        /** ReJoinRes timestamp */
        timestamp?: (number|null);

        /** ReJoinRes opt */
        opt?: (string|null);

        /** ReJoinRes sign */
        sign?: (string|null);

        /** ReJoinRes canNotJoin */
        canNotJoin?: (boolean|null);

        /** ReJoinRes sn */
        sn?: (string|null);
    }

    /** Represents a ReJoinRes. */
    class ReJoinRes implements IReJoinRes {

        /**
         * Constructs a new ReJoinRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReJoinRes);

        /** ReJoinRes roomId. */
        public roomId: string;

        /** ReJoinRes timestamp. */
        public timestamp: number;

        /** ReJoinRes opt. */
        public opt: string;

        /** ReJoinRes sign. */
        public sign: string;

        /** ReJoinRes canNotJoin. */
        public canNotJoin: boolean;

        /** ReJoinRes sn. */
        public sn: string;

        /**
         * Creates a new ReJoinRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReJoinRes instance
         */
        public static create(properties?: pb.IReJoinRes): pb.ReJoinRes;

        /**
         * Encodes the specified ReJoinRes message. Does not implicitly {@link pb.ReJoinRes.verify|verify} messages.
         * @param message ReJoinRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReJoinRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReJoinRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReJoinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReJoinRes;
    }

    /** Properties of a NewRoomReq. */
    interface INewRoomReq {
    }

    /** Represents a NewRoomReq. */
    class NewRoomReq implements INewRoomReq {

        /**
         * Constructs a new NewRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INewRoomReq);

        /**
         * Creates a new NewRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewRoomReq instance
         */
        public static create(properties?: pb.INewRoomReq): pb.NewRoomReq;

        /**
         * Encodes the specified NewRoomReq message. Does not implicitly {@link pb.NewRoomReq.verify|verify} messages.
         * @param message NewRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INewRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.NewRoomReq;
    }

    /** Properties of a NewRoomRes. */
    interface INewRoomRes {

        /** NewRoomRes roomId */
        roomId?: (string|null);

        /** NewRoomRes timestamp */
        timestamp?: (number|null);

        /** NewRoomRes opt */
        opt?: (string|null);

        /** NewRoomRes sign */
        sign?: (string|null);
    }

    /** Represents a NewRoomRes. */
    class NewRoomRes implements INewRoomRes {

        /**
         * Constructs a new NewRoomRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INewRoomRes);

        /** NewRoomRes roomId. */
        public roomId: string;

        /** NewRoomRes timestamp. */
        public timestamp: number;

        /** NewRoomRes opt. */
        public opt: string;

        /** NewRoomRes sign. */
        public sign: string;

        /**
         * Creates a new NewRoomRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewRoomRes instance
         */
        public static create(properties?: pb.INewRoomRes): pb.NewRoomRes;

        /**
         * Encodes the specified NewRoomRes message. Does not implicitly {@link pb.NewRoomRes.verify|verify} messages.
         * @param message NewRoomRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INewRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewRoomRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.NewRoomRes;
    }

    /** Properties of a SignReq. */
    interface ISignReq {
    }

    /** Represents a SignReq. */
    class SignReq implements ISignReq {

        /**
         * Constructs a new SignReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISignReq);

        /**
         * Creates a new SignReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignReq instance
         */
        public static create(properties?: pb.ISignReq): pb.SignReq;

        /**
         * Encodes the specified SignReq message. Does not implicitly {@link pb.SignReq.verify|verify} messages.
         * @param message SignReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISignReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SignReq;
    }

    /** Properties of a SignRes. */
    interface ISignRes {

        /** SignRes coin */
        coin?: (number|null);

        /** SignRes leftSecond */
        leftSecond?: (number|null);

        /** SignRes code */
        code?: (number|null);
    }

    /** Represents a SignRes. */
    class SignRes implements ISignRes {

        /**
         * Constructs a new SignRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISignRes);

        /** SignRes coin. */
        public coin: number;

        /** SignRes leftSecond. */
        public leftSecond: number;

        /** SignRes code. */
        public code: number;

        /**
         * Creates a new SignRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignRes instance
         */
        public static create(properties?: pb.ISignRes): pb.SignRes;

        /**
         * Encodes the specified SignRes message. Does not implicitly {@link pb.SignRes.verify|verify} messages.
         * @param message SignRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISignRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SignRes;
    }

    /** Properties of a GetAllUserMessageReq. */
    interface IGetAllUserMessageReq {
    }

    /** Represents a GetAllUserMessageReq. */
    class GetAllUserMessageReq implements IGetAllUserMessageReq {

        /**
         * Constructs a new GetAllUserMessageReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetAllUserMessageReq);

        /**
         * Creates a new GetAllUserMessageReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllUserMessageReq instance
         */
        public static create(properties?: pb.IGetAllUserMessageReq): pb.GetAllUserMessageReq;

        /**
         * Encodes the specified GetAllUserMessageReq message. Does not implicitly {@link pb.GetAllUserMessageReq.verify|verify} messages.
         * @param message GetAllUserMessageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetAllUserMessageReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllUserMessageReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllUserMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetAllUserMessageReq;
    }

    /** Properties of a GetAllUserMessageRes. */
    interface IGetAllUserMessageRes {

        /** GetAllUserMessageRes userDatas */
        userDatas?: (pb.IUserData[]|null);

        /** GetAllUserMessageRes loseCoin */
        loseCoin?: (number|null);

        /** GetAllUserMessageRes winCoin */
        winCoin?: (number|null);

        /** GetAllUserMessageRes code */
        code?: (number|null);
    }

    /** Represents a GetAllUserMessageRes. */
    class GetAllUserMessageRes implements IGetAllUserMessageRes {

        /**
         * Constructs a new GetAllUserMessageRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetAllUserMessageRes);

        /** GetAllUserMessageRes userDatas. */
        public userDatas: pb.IUserData[];

        /** GetAllUserMessageRes loseCoin. */
        public loseCoin: number;

        /** GetAllUserMessageRes winCoin. */
        public winCoin: number;

        /** GetAllUserMessageRes code. */
        public code: number;

        /**
         * Creates a new GetAllUserMessageRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllUserMessageRes instance
         */
        public static create(properties?: pb.IGetAllUserMessageRes): pb.GetAllUserMessageRes;

        /**
         * Encodes the specified GetAllUserMessageRes message. Does not implicitly {@link pb.GetAllUserMessageRes.verify|verify} messages.
         * @param message GetAllUserMessageRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetAllUserMessageRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllUserMessageRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllUserMessageRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetAllUserMessageRes;
    }

    /** Properties of a CheckZhuanPanReq. */
    interface ICheckZhuanPanReq {
    }

    /** Represents a CheckZhuanPanReq. */
    class CheckZhuanPanReq implements ICheckZhuanPanReq {

        /**
         * Constructs a new CheckZhuanPanReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICheckZhuanPanReq);

        /**
         * Creates a new CheckZhuanPanReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckZhuanPanReq instance
         */
        public static create(properties?: pb.ICheckZhuanPanReq): pb.CheckZhuanPanReq;

        /**
         * Encodes the specified CheckZhuanPanReq message. Does not implicitly {@link pb.CheckZhuanPanReq.verify|verify} messages.
         * @param message CheckZhuanPanReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICheckZhuanPanReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckZhuanPanReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckZhuanPanReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CheckZhuanPanReq;
    }

    /** Properties of a CheckZhuanPanRes. */
    interface ICheckZhuanPanRes {

        /** CheckZhuanPanRes code */
        code?: (number|null);

        /** CheckZhuanPanRes zhuanPanTime */
        zhuanPanTime?: (number|null);

        /** CheckZhuanPanRes serverTime */
        serverTime?: (number|null);

        /** CheckZhuanPanRes zhuanPans */
        zhuanPans?: (pb.IZhuanpanEntityPB[]|null);
    }

    /** Represents a CheckZhuanPanRes. */
    class CheckZhuanPanRes implements ICheckZhuanPanRes {

        /**
         * Constructs a new CheckZhuanPanRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICheckZhuanPanRes);

        /** CheckZhuanPanRes code. */
        public code: number;

        /** CheckZhuanPanRes zhuanPanTime. */
        public zhuanPanTime: number;

        /** CheckZhuanPanRes serverTime. */
        public serverTime: number;

        /** CheckZhuanPanRes zhuanPans. */
        public zhuanPans: pb.IZhuanpanEntityPB[];

        /**
         * Creates a new CheckZhuanPanRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckZhuanPanRes instance
         */
        public static create(properties?: pb.ICheckZhuanPanRes): pb.CheckZhuanPanRes;

        /**
         * Encodes the specified CheckZhuanPanRes message. Does not implicitly {@link pb.CheckZhuanPanRes.verify|verify} messages.
         * @param message CheckZhuanPanRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICheckZhuanPanRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckZhuanPanRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckZhuanPanRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CheckZhuanPanRes;
    }

    /** Properties of a ZhuanpanEntityPB. */
    interface IZhuanpanEntityPB {

        /** ZhuanpanEntityPB id */
        id?: (number|null);

        /** ZhuanpanEntityPB money */
        money?: (number|null);
    }

    /** Represents a ZhuanpanEntityPB. */
    class ZhuanpanEntityPB implements IZhuanpanEntityPB {

        /**
         * Constructs a new ZhuanpanEntityPB.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuanpanEntityPB);

        /** ZhuanpanEntityPB id. */
        public id: number;

        /** ZhuanpanEntityPB money. */
        public money: number;

        /**
         * Creates a new ZhuanpanEntityPB instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuanpanEntityPB instance
         */
        public static create(properties?: pb.IZhuanpanEntityPB): pb.ZhuanpanEntityPB;

        /**
         * Encodes the specified ZhuanpanEntityPB message. Does not implicitly {@link pb.ZhuanpanEntityPB.verify|verify} messages.
         * @param message ZhuanpanEntityPB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuanpanEntityPB, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuanpanEntityPB message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuanpanEntityPB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuanpanEntityPB;
    }

    /** Properties of a ZhuanPanReq. */
    interface IZhuanPanReq {
    }

    /** Represents a ZhuanPanReq. */
    class ZhuanPanReq implements IZhuanPanReq {

        /**
         * Constructs a new ZhuanPanReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuanPanReq);

        /**
         * Creates a new ZhuanPanReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuanPanReq instance
         */
        public static create(properties?: pb.IZhuanPanReq): pb.ZhuanPanReq;

        /**
         * Encodes the specified ZhuanPanReq message. Does not implicitly {@link pb.ZhuanPanReq.verify|verify} messages.
         * @param message ZhuanPanReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuanPanReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuanPanReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuanPanReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuanPanReq;
    }

    /** Properties of a ZhuanPanRes. */
    interface IZhuanPanRes {

        /** ZhuanPanRes code */
        code?: (number|null);

        /** ZhuanPanRes zhuanPanTime */
        zhuanPanTime?: (number|null);

        /** ZhuanPanRes zhuanpanPB */
        zhuanpanPB?: (pb.IZhuanpanEntityPB|null);

        /** ZhuanPanRes totalMoney */
        totalMoney?: (number|null);
    }

    /** Represents a ZhuanPanRes. */
    class ZhuanPanRes implements IZhuanPanRes {

        /**
         * Constructs a new ZhuanPanRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuanPanRes);

        /** ZhuanPanRes code. */
        public code: number;

        /** ZhuanPanRes zhuanPanTime. */
        public zhuanPanTime: number;

        /** ZhuanPanRes zhuanpanPB. */
        public zhuanpanPB?: (pb.IZhuanpanEntityPB|null);

        /** ZhuanPanRes totalMoney. */
        public totalMoney: number;

        /**
         * Creates a new ZhuanPanRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuanPanRes instance
         */
        public static create(properties?: pb.IZhuanPanRes): pb.ZhuanPanRes;

        /**
         * Encodes the specified ZhuanPanRes message. Does not implicitly {@link pb.ZhuanPanRes.verify|verify} messages.
         * @param message ZhuanPanRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuanPanRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuanPanRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuanPanRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuanPanRes;
    }

    /** Properties of a ShareMessageReq. */
    interface IShareMessageReq {
    }

    /** Represents a ShareMessageReq. */
    class ShareMessageReq implements IShareMessageReq {

        /**
         * Constructs a new ShareMessageReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IShareMessageReq);

        /**
         * Creates a new ShareMessageReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShareMessageReq instance
         */
        public static create(properties?: pb.IShareMessageReq): pb.ShareMessageReq;

        /**
         * Encodes the specified ShareMessageReq message. Does not implicitly {@link pb.ShareMessageReq.verify|verify} messages.
         * @param message ShareMessageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IShareMessageReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShareMessageReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShareMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ShareMessageReq;
    }

    /** Properties of a ShareMessageRes. */
    interface IShareMessageRes {

        /** ShareMessageRes leftCount */
        leftCount?: (number|null);

        /** ShareMessageRes nextRefreshTime */
        nextRefreshTime?: (number|null);

        /** ShareMessageRes shareCoin */
        shareCoin?: (number|null);
    }

    /** Represents a ShareMessageRes. */
    class ShareMessageRes implements IShareMessageRes {

        /**
         * Constructs a new ShareMessageRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IShareMessageRes);

        /** ShareMessageRes leftCount. */
        public leftCount: number;

        /** ShareMessageRes nextRefreshTime. */
        public nextRefreshTime: number;

        /** ShareMessageRes shareCoin. */
        public shareCoin: number;

        /**
         * Creates a new ShareMessageRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShareMessageRes instance
         */
        public static create(properties?: pb.IShareMessageRes): pb.ShareMessageRes;

        /**
         * Encodes the specified ShareMessageRes message. Does not implicitly {@link pb.ShareMessageRes.verify|verify} messages.
         * @param message ShareMessageRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IShareMessageRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShareMessageRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShareMessageRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ShareMessageRes;
    }

    /** Properties of a ShareAwardReq. */
    interface IShareAwardReq {

        /** ShareAwardReq sn */
        sn?: (string|null);
    }

    /** Represents a ShareAwardReq. */
    class ShareAwardReq implements IShareAwardReq {

        /**
         * Constructs a new ShareAwardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IShareAwardReq);

        /** ShareAwardReq sn. */
        public sn: string;

        /**
         * Creates a new ShareAwardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShareAwardReq instance
         */
        public static create(properties?: pb.IShareAwardReq): pb.ShareAwardReq;

        /**
         * Encodes the specified ShareAwardReq message. Does not implicitly {@link pb.ShareAwardReq.verify|verify} messages.
         * @param message ShareAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IShareAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShareAwardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShareAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ShareAwardReq;
    }

    /** Properties of a ShareAwardRes. */
    interface IShareAwardRes {

        /** ShareAwardRes leftCount */
        leftCount?: (number|null);

        /** ShareAwardRes coin */
        coin?: (number|null);

        /** ShareAwardRes sn */
        sn?: (string|null);

        /** ShareAwardRes code */
        code?: (number|null);
    }

    /** Represents a ShareAwardRes. */
    class ShareAwardRes implements IShareAwardRes {

        /**
         * Constructs a new ShareAwardRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IShareAwardRes);

        /** ShareAwardRes leftCount. */
        public leftCount: number;

        /** ShareAwardRes coin. */
        public coin: number;

        /** ShareAwardRes sn. */
        public sn: string;

        /** ShareAwardRes code. */
        public code: number;

        /**
         * Creates a new ShareAwardRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShareAwardRes instance
         */
        public static create(properties?: pb.IShareAwardRes): pb.ShareAwardRes;

        /**
         * Encodes the specified ShareAwardRes message. Does not implicitly {@link pb.ShareAwardRes.verify|verify} messages.
         * @param message ShareAwardRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IShareAwardRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShareAwardRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShareAwardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ShareAwardRes;
    }

    /** Properties of a PlayerStatus. */
    interface IPlayerStatus {

        /** PlayerStatus uid */
        uid?: (string|null);

        /** PlayerStatus status */
        status?: (number|null);
    }

    /** Represents a PlayerStatus. */
    class PlayerStatus implements IPlayerStatus {

        /**
         * Constructs a new PlayerStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayerStatus);

        /** PlayerStatus uid. */
        public uid: string;

        /** PlayerStatus status. */
        public status: number;

        /**
         * Creates a new PlayerStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerStatus instance
         */
        public static create(properties?: pb.IPlayerStatus): pb.PlayerStatus;

        /**
         * Encodes the specified PlayerStatus message. Does not implicitly {@link pb.PlayerStatus.verify|verify} messages.
         * @param message PlayerStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlayerStatus;
    }

    /** Properties of a PlayerStatusRes. */
    interface IPlayerStatusRes {

        /** PlayerStatusRes playerStatus */
        playerStatus?: (pb.IPlayerStatus[]|null);

        /** PlayerStatusRes masterUid */
        masterUid?: (string|null);
    }

    /** Represents a PlayerStatusRes. */
    class PlayerStatusRes implements IPlayerStatusRes {

        /**
         * Constructs a new PlayerStatusRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayerStatusRes);

        /** PlayerStatusRes playerStatus. */
        public playerStatus: pb.IPlayerStatus[];

        /** PlayerStatusRes masterUid. */
        public masterUid: string;

        /**
         * Creates a new PlayerStatusRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerStatusRes instance
         */
        public static create(properties?: pb.IPlayerStatusRes): pb.PlayerStatusRes;

        /**
         * Encodes the specified PlayerStatusRes message. Does not implicitly {@link pb.PlayerStatusRes.verify|verify} messages.
         * @param message PlayerStatusRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayerStatusRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerStatusRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerStatusRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlayerStatusRes;
    }

    /** Properties of an AiUidGetReq. */
    interface IAiUidGetReq {
    }

    /** Represents an AiUidGetReq. */
    class AiUidGetReq implements IAiUidGetReq {

        /**
         * Constructs a new AiUidGetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAiUidGetReq);

        /**
         * Creates a new AiUidGetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AiUidGetReq instance
         */
        public static create(properties?: pb.IAiUidGetReq): pb.AiUidGetReq;

        /**
         * Encodes the specified AiUidGetReq message. Does not implicitly {@link pb.AiUidGetReq.verify|verify} messages.
         * @param message AiUidGetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAiUidGetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AiUidGetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AiUidGetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AiUidGetReq;
    }

    /** Properties of an AiUidGetRes. */
    interface IAiUidGetRes {

        /** AiUidGetRes uid */
        uid?: (string|null);

        /** AiUidGetRes code */
        code?: (number|null);
    }

    /** Represents an AiUidGetRes. */
    class AiUidGetRes implements IAiUidGetRes {

        /**
         * Constructs a new AiUidGetRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAiUidGetRes);

        /** AiUidGetRes uid. */
        public uid: string;

        /** AiUidGetRes code. */
        public code: number;

        /**
         * Creates a new AiUidGetRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AiUidGetRes instance
         */
        public static create(properties?: pb.IAiUidGetRes): pb.AiUidGetRes;

        /**
         * Encodes the specified AiUidGetRes message. Does not implicitly {@link pb.AiUidGetRes.verify|verify} messages.
         * @param message AiUidGetRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAiUidGetRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AiUidGetRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AiUidGetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AiUidGetRes;
    }

    /** Properties of a PlayWithAiReq. */
    interface IPlayWithAiReq {

        /** PlayWithAiReq uid */
        uid?: (string|null);
    }

    /** Represents a PlayWithAiReq. */
    class PlayWithAiReq implements IPlayWithAiReq {

        /**
         * Constructs a new PlayWithAiReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayWithAiReq);

        /** PlayWithAiReq uid. */
        public uid: string;

        /**
         * Creates a new PlayWithAiReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayWithAiReq instance
         */
        public static create(properties?: pb.IPlayWithAiReq): pb.PlayWithAiReq;

        /**
         * Encodes the specified PlayWithAiReq message. Does not implicitly {@link pb.PlayWithAiReq.verify|verify} messages.
         * @param message PlayWithAiReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayWithAiReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayWithAiReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayWithAiReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlayWithAiReq;
    }

    /** Properties of a PlayWithAiRes. */
    interface IPlayWithAiRes {

        /** PlayWithAiRes uid */
        uid?: (string|null);

        /** PlayWithAiRes roomId */
        roomId?: (string|null);

        /** PlayWithAiRes timestamp */
        timestamp?: (number|null);

        /** PlayWithAiRes opt */
        opt?: (string|null);

        /** PlayWithAiRes sign */
        sign?: (string|null);

        /** PlayWithAiRes code */
        code?: (number|null);
    }

    /** Represents a PlayWithAiRes. */
    class PlayWithAiRes implements IPlayWithAiRes {

        /**
         * Constructs a new PlayWithAiRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayWithAiRes);

        /** PlayWithAiRes uid. */
        public uid: string;

        /** PlayWithAiRes roomId. */
        public roomId: string;

        /** PlayWithAiRes timestamp. */
        public timestamp: number;

        /** PlayWithAiRes opt. */
        public opt: string;

        /** PlayWithAiRes sign. */
        public sign: string;

        /** PlayWithAiRes code. */
        public code: number;

        /**
         * Creates a new PlayWithAiRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayWithAiRes instance
         */
        public static create(properties?: pb.IPlayWithAiRes): pb.PlayWithAiRes;

        /**
         * Encodes the specified PlayWithAiRes message. Does not implicitly {@link pb.PlayWithAiRes.verify|verify} messages.
         * @param message PlayWithAiRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayWithAiRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayWithAiRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayWithAiRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlayWithAiRes;
    }

    /** Properties of a QueryAutoStatusReq. */
    interface IQueryAutoStatusReq {
    }

    /** Represents a QueryAutoStatusReq. */
    class QueryAutoStatusReq implements IQueryAutoStatusReq {

        /**
         * Constructs a new QueryAutoStatusReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IQueryAutoStatusReq);

        /**
         * Creates a new QueryAutoStatusReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryAutoStatusReq instance
         */
        public static create(properties?: pb.IQueryAutoStatusReq): pb.QueryAutoStatusReq;

        /**
         * Encodes the specified QueryAutoStatusReq message. Does not implicitly {@link pb.QueryAutoStatusReq.verify|verify} messages.
         * @param message QueryAutoStatusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IQueryAutoStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryAutoStatusReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryAutoStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.QueryAutoStatusReq;
    }

    /** Properties of a QueryAutoStatusRes. */
    interface IQueryAutoStatusRes {

        /** QueryAutoStatusRes auto */
        auto?: (boolean|null);

        /** QueryAutoStatusRes count */
        count?: (number|null);

        /** QueryAutoStatusRes existedSecond */
        existedSecond?: (number|null);
    }

    /** Represents a QueryAutoStatusRes. */
    class QueryAutoStatusRes implements IQueryAutoStatusRes {

        /**
         * Constructs a new QueryAutoStatusRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IQueryAutoStatusRes);

        /** QueryAutoStatusRes auto. */
        public auto: boolean;

        /** QueryAutoStatusRes count. */
        public count: number;

        /** QueryAutoStatusRes existedSecond. */
        public existedSecond: number;

        /**
         * Creates a new QueryAutoStatusRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryAutoStatusRes instance
         */
        public static create(properties?: pb.IQueryAutoStatusRes): pb.QueryAutoStatusRes;

        /**
         * Encodes the specified QueryAutoStatusRes message. Does not implicitly {@link pb.QueryAutoStatusRes.verify|verify} messages.
         * @param message QueryAutoStatusRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IQueryAutoStatusRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryAutoStatusRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryAutoStatusRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.QueryAutoStatusRes;
    }

    /** Properties of a CancelAutoStatusReq. */
    interface ICancelAutoStatusReq {
    }

    /** Represents a CancelAutoStatusReq. */
    class CancelAutoStatusReq implements ICancelAutoStatusReq {

        /**
         * Constructs a new CancelAutoStatusReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICancelAutoStatusReq);

        /**
         * Creates a new CancelAutoStatusReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelAutoStatusReq instance
         */
        public static create(properties?: pb.ICancelAutoStatusReq): pb.CancelAutoStatusReq;

        /**
         * Encodes the specified CancelAutoStatusReq message. Does not implicitly {@link pb.CancelAutoStatusReq.verify|verify} messages.
         * @param message CancelAutoStatusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICancelAutoStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelAutoStatusReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelAutoStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CancelAutoStatusReq;
    }

    /** Properties of a CancelAutoStatusRes. */
    interface ICancelAutoStatusRes {

        /** CancelAutoStatusRes code */
        code?: (number|null);
    }

    /** Represents a CancelAutoStatusRes. */
    class CancelAutoStatusRes implements ICancelAutoStatusRes {

        /**
         * Constructs a new CancelAutoStatusRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICancelAutoStatusRes);

        /** CancelAutoStatusRes code. */
        public code: number;

        /**
         * Creates a new CancelAutoStatusRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelAutoStatusRes instance
         */
        public static create(properties?: pb.ICancelAutoStatusRes): pb.CancelAutoStatusRes;

        /**
         * Encodes the specified CancelAutoStatusRes message. Does not implicitly {@link pb.CancelAutoStatusRes.verify|verify} messages.
         * @param message CancelAutoStatusRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICancelAutoStatusRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelAutoStatusRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelAutoStatusRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CancelAutoStatusRes;
    }

    /** Properties of a WordBroadCastReq. */
    interface IWordBroadCastReq {

        /** WordBroadCastReq msg */
        msg?: (string|null);
    }

    /** Represents a WordBroadCastReq. */
    class WordBroadCastReq implements IWordBroadCastReq {

        /**
         * Constructs a new WordBroadCastReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IWordBroadCastReq);

        /** WordBroadCastReq msg. */
        public msg: string;

        /**
         * Creates a new WordBroadCastReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WordBroadCastReq instance
         */
        public static create(properties?: pb.IWordBroadCastReq): pb.WordBroadCastReq;

        /**
         * Encodes the specified WordBroadCastReq message. Does not implicitly {@link pb.WordBroadCastReq.verify|verify} messages.
         * @param message WordBroadCastReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IWordBroadCastReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WordBroadCastReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WordBroadCastReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.WordBroadCastReq;
    }

    /** Properties of a StateChangeReq. */
    interface IStateChangeReq {

        /** StateChangeReq status */
        status?: (number|null);
    }

    /** Represents a StateChangeReq. */
    class StateChangeReq implements IStateChangeReq {

        /**
         * Constructs a new StateChangeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IStateChangeReq);

        /** StateChangeReq status. */
        public status: number;

        /**
         * Creates a new StateChangeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateChangeReq instance
         */
        public static create(properties?: pb.IStateChangeReq): pb.StateChangeReq;

        /**
         * Encodes the specified StateChangeReq message. Does not implicitly {@link pb.StateChangeReq.verify|verify} messages.
         * @param message StateChangeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IStateChangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateChangeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.StateChangeReq;
    }

    /** Properties of a StateChangeRes. */
    interface IStateChangeRes {

        /** StateChangeRes uid */
        uid?: (string|null);

        /** StateChangeRes status */
        status?: (number|null);

        /** StateChangeRes newMaster */
        newMaster?: (string|null);
    }

    /** Represents a StateChangeRes. */
    class StateChangeRes implements IStateChangeRes {

        /**
         * Constructs a new StateChangeRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IStateChangeRes);

        /** StateChangeRes uid. */
        public uid: string;

        /** StateChangeRes status. */
        public status: number;

        /** StateChangeRes newMaster. */
        public newMaster: string;

        /**
         * Creates a new StateChangeRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateChangeRes instance
         */
        public static create(properties?: pb.IStateChangeRes): pb.StateChangeRes;

        /**
         * Encodes the specified StateChangeRes message. Does not implicitly {@link pb.StateChangeRes.verify|verify} messages.
         * @param message StateChangeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IStateChangeRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateChangeRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateChangeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.StateChangeRes;
    }

    /** Properties of a WordBroadCastRes. */
    interface IWordBroadCastRes {

        /** WordBroadCastRes msg */
        msg?: (string|null);

        /** WordBroadCastRes uid */
        uid?: (string|null);
    }

    /** Represents a WordBroadCastRes. */
    class WordBroadCastRes implements IWordBroadCastRes {

        /**
         * Constructs a new WordBroadCastRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IWordBroadCastRes);

        /** WordBroadCastRes msg. */
        public msg: string;

        /** WordBroadCastRes uid. */
        public uid: string;

        /**
         * Creates a new WordBroadCastRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WordBroadCastRes instance
         */
        public static create(properties?: pb.IWordBroadCastRes): pb.WordBroadCastRes;

        /**
         * Encodes the specified WordBroadCastRes message. Does not implicitly {@link pb.WordBroadCastRes.verify|verify} messages.
         * @param message WordBroadCastRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IWordBroadCastRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WordBroadCastRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WordBroadCastRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.WordBroadCastRes;
    }

    /** Properties of a MsgItemSendReq. */
    interface IMsgItemSendReq {

        /** MsgItemSendReq itemId */
        itemId?: (number|null);

        /** MsgItemSendReq toUid */
        toUid?: (string|null);
    }

    /** Represents a MsgItemSendReq. */
    class MsgItemSendReq implements IMsgItemSendReq {

        /**
         * Constructs a new MsgItemSendReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMsgItemSendReq);

        /** MsgItemSendReq itemId. */
        public itemId: number;

        /** MsgItemSendReq toUid. */
        public toUid: string;

        /**
         * Creates a new MsgItemSendReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgItemSendReq instance
         */
        public static create(properties?: pb.IMsgItemSendReq): pb.MsgItemSendReq;

        /**
         * Encodes the specified MsgItemSendReq message. Does not implicitly {@link pb.MsgItemSendReq.verify|verify} messages.
         * @param message MsgItemSendReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMsgItemSendReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgItemSendReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgItemSendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MsgItemSendReq;
    }

    /** Properties of a MsgItemSendRes. */
    interface IMsgItemSendRes {

        /** MsgItemSendRes itemId */
        itemId?: (number|null);

        /** MsgItemSendRes toUid */
        toUid?: (string|null);

        /** MsgItemSendRes fromUid */
        fromUid?: (string|null);

        /** MsgItemSendRes coin */
        coin?: (number|null);

        /** MsgItemSendRes code */
        code?: (number|null);
    }

    /** Represents a MsgItemSendRes. */
    class MsgItemSendRes implements IMsgItemSendRes {

        /**
         * Constructs a new MsgItemSendRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMsgItemSendRes);

        /** MsgItemSendRes itemId. */
        public itemId: number;

        /** MsgItemSendRes toUid. */
        public toUid: string;

        /** MsgItemSendRes fromUid. */
        public fromUid: string;

        /** MsgItemSendRes coin. */
        public coin: number;

        /** MsgItemSendRes code. */
        public code: number;

        /**
         * Creates a new MsgItemSendRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgItemSendRes instance
         */
        public static create(properties?: pb.IMsgItemSendRes): pb.MsgItemSendRes;

        /**
         * Encodes the specified MsgItemSendRes message. Does not implicitly {@link pb.MsgItemSendRes.verify|verify} messages.
         * @param message MsgItemSendRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMsgItemSendRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgItemSendRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgItemSendRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MsgItemSendRes;
    }

    /** Properties of a ZhuanpanLevelMessage. */
    interface IZhuanpanLevelMessage {

        /** ZhuanpanLevelMessage id */
        id?: (number|null);

        /** ZhuanpanLevelMessage money */
        money?: (number|null);

        /** ZhuanpanLevelMessage preMoney */
        preMoney?: (number|null);

        /** ZhuanpanLevelMessage updateCount */
        updateCount?: (number|null);
    }

    /** Represents a ZhuanpanLevelMessage. */
    class ZhuanpanLevelMessage implements IZhuanpanLevelMessage {

        /**
         * Constructs a new ZhuanpanLevelMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuanpanLevelMessage);

        /** ZhuanpanLevelMessage id. */
        public id: number;

        /** ZhuanpanLevelMessage money. */
        public money: number;

        /** ZhuanpanLevelMessage preMoney. */
        public preMoney: number;

        /** ZhuanpanLevelMessage updateCount. */
        public updateCount: number;

        /**
         * Creates a new ZhuanpanLevelMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuanpanLevelMessage instance
         */
        public static create(properties?: pb.IZhuanpanLevelMessage): pb.ZhuanpanLevelMessage;

        /**
         * Encodes the specified ZhuanpanLevelMessage message. Does not implicitly {@link pb.ZhuanpanLevelMessage.verify|verify} messages.
         * @param message ZhuanpanLevelMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuanpanLevelMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuanpanLevelMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuanpanLevelMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuanpanLevelMessage;
    }

    /** Properties of a ReJoinRoomReq. */
    interface IReJoinRoomReq {

        /** ReJoinRoomReq roomId */
        roomId?: (string|null);
    }

    /** Represents a ReJoinRoomReq. */
    class ReJoinRoomReq implements IReJoinRoomReq {

        /**
         * Constructs a new ReJoinRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReJoinRoomReq);

        /** ReJoinRoomReq roomId. */
        public roomId: string;

        /**
         * Creates a new ReJoinRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReJoinRoomReq instance
         */
        public static create(properties?: pb.IReJoinRoomReq): pb.ReJoinRoomReq;

        /**
         * Encodes the specified ReJoinRoomReq message. Does not implicitly {@link pb.ReJoinRoomReq.verify|verify} messages.
         * @param message ReJoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReJoinRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReJoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReJoinRoomReq;
    }

    /** Properties of a ReJoinRoomRes. */
    interface IReJoinRoomRes {

        /** ReJoinRoomRes roomId */
        roomId?: (string|null);

        /** ReJoinRoomRes timestamp */
        timestamp?: (number|null);

        /** ReJoinRoomRes opt */
        opt?: (string|null);

        /** ReJoinRoomRes sign */
        sign?: (string|null);

        /** ReJoinRoomRes code */
        code?: (number|null);

        /** ReJoinRoomRes sn */
        sn?: (string|null);
    }

    /** Represents a ReJoinRoomRes. */
    class ReJoinRoomRes implements IReJoinRoomRes {

        /**
         * Constructs a new ReJoinRoomRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IReJoinRoomRes);

        /** ReJoinRoomRes roomId. */
        public roomId: string;

        /** ReJoinRoomRes timestamp. */
        public timestamp: number;

        /** ReJoinRoomRes opt. */
        public opt: string;

        /** ReJoinRoomRes sign. */
        public sign: string;

        /** ReJoinRoomRes code. */
        public code: number;

        /** ReJoinRoomRes sn. */
        public sn: string;

        /**
         * Creates a new ReJoinRoomRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReJoinRoomRes instance
         */
        public static create(properties?: pb.IReJoinRoomRes): pb.ReJoinRoomRes;

        /**
         * Encodes the specified ReJoinRoomRes message. Does not implicitly {@link pb.ReJoinRoomRes.verify|verify} messages.
         * @param message ReJoinRoomRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IReJoinRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReJoinRoomRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReJoinRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ReJoinRoomRes;
    }

    /** Properties of a ZhuangPanLevelReq. */
    interface IZhuangPanLevelReq {

        /** ZhuangPanLevelReq userCoin */
        userCoin?: (boolean|null);
    }

    /** Represents a ZhuangPanLevelReq. */
    class ZhuangPanLevelReq implements IZhuangPanLevelReq {

        /**
         * Constructs a new ZhuangPanLevelReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuangPanLevelReq);

        /** ZhuangPanLevelReq userCoin. */
        public userCoin: boolean;

        /**
         * Creates a new ZhuangPanLevelReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuangPanLevelReq instance
         */
        public static create(properties?: pb.IZhuangPanLevelReq): pb.ZhuangPanLevelReq;

        /**
         * Encodes the specified ZhuangPanLevelReq message. Does not implicitly {@link pb.ZhuangPanLevelReq.verify|verify} messages.
         * @param message ZhuangPanLevelReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuangPanLevelReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuangPanLevelReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuangPanLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuangPanLevelReq;
    }

    /** Properties of a ZhuangPanLevelRes. */
    interface IZhuangPanLevelRes {

        /** ZhuangPanLevelRes userCoin */
        userCoin?: (boolean|null);

        /** ZhuangPanLevelRes zhuanPan */
        zhuanPan?: (pb.IZhuanpanLevelMessage|null);

        /** ZhuangPanLevelRes leftPoint */
        leftPoint?: (number|null);

        /** ZhuangPanLevelRes leftCoin */
        leftCoin?: (number|null);

        /** ZhuangPanLevelRes currentTimes */
        currentTimes?: (number|null);

        /** ZhuangPanLevelRes nextTimes */
        nextTimes?: (number|null);

        /** ZhuangPanLevelRes code */
        code?: (number|null);
    }

    /** Represents a ZhuangPanLevelRes. */
    class ZhuangPanLevelRes implements IZhuangPanLevelRes {

        /**
         * Constructs a new ZhuangPanLevelRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuangPanLevelRes);

        /** ZhuangPanLevelRes userCoin. */
        public userCoin: boolean;

        /** ZhuangPanLevelRes zhuanPan. */
        public zhuanPan?: (pb.IZhuanpanLevelMessage|null);

        /** ZhuangPanLevelRes leftPoint. */
        public leftPoint: number;

        /** ZhuangPanLevelRes leftCoin. */
        public leftCoin: number;

        /** ZhuangPanLevelRes currentTimes. */
        public currentTimes: number;

        /** ZhuangPanLevelRes nextTimes. */
        public nextTimes: number;

        /** ZhuangPanLevelRes code. */
        public code: number;

        /**
         * Creates a new ZhuangPanLevelRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuangPanLevelRes instance
         */
        public static create(properties?: pb.IZhuangPanLevelRes): pb.ZhuangPanLevelRes;

        /**
         * Encodes the specified ZhuangPanLevelRes message. Does not implicitly {@link pb.ZhuangPanLevelRes.verify|verify} messages.
         * @param message ZhuangPanLevelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuangPanLevelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuangPanLevelRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuangPanLevelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuangPanLevelRes;
    }

    /** Properties of a ZhuangPanLevelUpTipReq. */
    interface IZhuangPanLevelUpTipReq {
    }

    /** Represents a ZhuangPanLevelUpTipReq. */
    class ZhuangPanLevelUpTipReq implements IZhuangPanLevelUpTipReq {

        /**
         * Constructs a new ZhuangPanLevelUpTipReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuangPanLevelUpTipReq);

        /**
         * Creates a new ZhuangPanLevelUpTipReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuangPanLevelUpTipReq instance
         */
        public static create(properties?: pb.IZhuangPanLevelUpTipReq): pb.ZhuangPanLevelUpTipReq;

        /**
         * Encodes the specified ZhuangPanLevelUpTipReq message. Does not implicitly {@link pb.ZhuangPanLevelUpTipReq.verify|verify} messages.
         * @param message ZhuangPanLevelUpTipReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuangPanLevelUpTipReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuangPanLevelUpTipReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuangPanLevelUpTipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuangPanLevelUpTipReq;
    }

    /** Properties of a ZhuangPanLevelUpTipRes. */
    interface IZhuangPanLevelUpTipRes {

        /** ZhuangPanLevelUpTipRes code */
        code?: (number|null);
    }

    /** Represents a ZhuangPanLevelUpTipRes. */
    class ZhuangPanLevelUpTipRes implements IZhuangPanLevelUpTipRes {

        /**
         * Constructs a new ZhuangPanLevelUpTipRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuangPanLevelUpTipRes);

        /** ZhuangPanLevelUpTipRes code. */
        public code: number;

        /**
         * Creates a new ZhuangPanLevelUpTipRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuangPanLevelUpTipRes instance
         */
        public static create(properties?: pb.IZhuangPanLevelUpTipRes): pb.ZhuangPanLevelUpTipRes;

        /**
         * Encodes the specified ZhuangPanLevelUpTipRes message. Does not implicitly {@link pb.ZhuangPanLevelUpTipRes.verify|verify} messages.
         * @param message ZhuangPanLevelUpTipRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuangPanLevelUpTipRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuangPanLevelUpTipRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuangPanLevelUpTipRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuangPanLevelUpTipRes;
    }

    /** Properties of a CheckIfNeedAiInvoiteReq. */
    interface ICheckIfNeedAiInvoiteReq {

        /** CheckIfNeedAiInvoiteReq opponentUid */
        opponentUid?: (string|null);
    }

    /** Represents a CheckIfNeedAiInvoiteReq. */
    class CheckIfNeedAiInvoiteReq implements ICheckIfNeedAiInvoiteReq {

        /**
         * Constructs a new CheckIfNeedAiInvoiteReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICheckIfNeedAiInvoiteReq);

        /** CheckIfNeedAiInvoiteReq opponentUid. */
        public opponentUid: string;

        /**
         * Creates a new CheckIfNeedAiInvoiteReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckIfNeedAiInvoiteReq instance
         */
        public static create(properties?: pb.ICheckIfNeedAiInvoiteReq): pb.CheckIfNeedAiInvoiteReq;

        /**
         * Encodes the specified CheckIfNeedAiInvoiteReq message. Does not implicitly {@link pb.CheckIfNeedAiInvoiteReq.verify|verify} messages.
         * @param message CheckIfNeedAiInvoiteReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICheckIfNeedAiInvoiteReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckIfNeedAiInvoiteReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckIfNeedAiInvoiteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CheckIfNeedAiInvoiteReq;
    }

    /** Properties of a CheckIfNeedAiInvoiteRes. */
    interface ICheckIfNeedAiInvoiteRes {

        /** CheckIfNeedAiInvoiteRes opponentUid */
        opponentUid?: (string|null);

        /** CheckIfNeedAiInvoiteRes needInvited */
        needInvited?: (boolean|null);
    }

    /** Represents a CheckIfNeedAiInvoiteRes. */
    class CheckIfNeedAiInvoiteRes implements ICheckIfNeedAiInvoiteRes {

        /**
         * Constructs a new CheckIfNeedAiInvoiteRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICheckIfNeedAiInvoiteRes);

        /** CheckIfNeedAiInvoiteRes opponentUid. */
        public opponentUid: string;

        /** CheckIfNeedAiInvoiteRes needInvited. */
        public needInvited: boolean;

        /**
         * Creates a new CheckIfNeedAiInvoiteRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckIfNeedAiInvoiteRes instance
         */
        public static create(properties?: pb.ICheckIfNeedAiInvoiteRes): pb.CheckIfNeedAiInvoiteRes;

        /**
         * Encodes the specified CheckIfNeedAiInvoiteRes message. Does not implicitly {@link pb.CheckIfNeedAiInvoiteRes.verify|verify} messages.
         * @param message CheckIfNeedAiInvoiteRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICheckIfNeedAiInvoiteRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckIfNeedAiInvoiteRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckIfNeedAiInvoiteRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.CheckIfNeedAiInvoiteRes;
    }

    /** Properties of a SecUnvarnishedReq. */
    interface ISecUnvarnishedReq {

        /** SecUnvarnishedReq data */
        data?: (Uint8Array|null);
    }

    /** Represents a SecUnvarnishedReq. */
    class SecUnvarnishedReq implements ISecUnvarnishedReq {

        /**
         * Constructs a new SecUnvarnishedReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISecUnvarnishedReq);

        /** SecUnvarnishedReq data. */
        public data: Uint8Array;

        /**
         * Creates a new SecUnvarnishedReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecUnvarnishedReq instance
         */
        public static create(properties?: pb.ISecUnvarnishedReq): pb.SecUnvarnishedReq;

        /**
         * Encodes the specified SecUnvarnishedReq message. Does not implicitly {@link pb.SecUnvarnishedReq.verify|verify} messages.
         * @param message SecUnvarnishedReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISecUnvarnishedReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecUnvarnishedReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecUnvarnishedReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SecUnvarnishedReq;
    }

    /** Properties of a SecUnvarnishedRes. */
    interface ISecUnvarnishedRes {

        /** SecUnvarnishedRes code */
        code?: (number|null);

        /** SecUnvarnishedRes msg */
        msg?: (string|null);

        /** SecUnvarnishedRes data */
        data?: (Uint8Array|null);
    }

    /** Represents a SecUnvarnishedRes. */
    class SecUnvarnishedRes implements ISecUnvarnishedRes {

        /**
         * Constructs a new SecUnvarnishedRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISecUnvarnishedRes);

        /** SecUnvarnishedRes code. */
        public code: number;

        /** SecUnvarnishedRes msg. */
        public msg: string;

        /** SecUnvarnishedRes data. */
        public data: Uint8Array;

        /**
         * Creates a new SecUnvarnishedRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecUnvarnishedRes instance
         */
        public static create(properties?: pb.ISecUnvarnishedRes): pb.SecUnvarnishedRes;

        /**
         * Encodes the specified SecUnvarnishedRes message. Does not implicitly {@link pb.SecUnvarnishedRes.verify|verify} messages.
         * @param message SecUnvarnishedRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISecUnvarnishedRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecUnvarnishedRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecUnvarnishedRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SecUnvarnishedRes;
    }

    /** Properties of a WinOrLoseRightNowReq. */
    interface IWinOrLoseRightNowReq {

        /** WinOrLoseRightNowReq win */
        win?: (boolean|null);
    }

    /** Represents a WinOrLoseRightNowReq. */
    class WinOrLoseRightNowReq implements IWinOrLoseRightNowReq {

        /**
         * Constructs a new WinOrLoseRightNowReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IWinOrLoseRightNowReq);

        /** WinOrLoseRightNowReq win. */
        public win: boolean;

        /**
         * Creates a new WinOrLoseRightNowReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WinOrLoseRightNowReq instance
         */
        public static create(properties?: pb.IWinOrLoseRightNowReq): pb.WinOrLoseRightNowReq;

        /**
         * Encodes the specified WinOrLoseRightNowReq message. Does not implicitly {@link pb.WinOrLoseRightNowReq.verify|verify} messages.
         * @param message WinOrLoseRightNowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IWinOrLoseRightNowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WinOrLoseRightNowReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WinOrLoseRightNowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.WinOrLoseRightNowReq;
    }

    /** Properties of an AddCrystalCoinReq. */
    interface IAddCrystalCoinReq {

        /** AddCrystalCoinReq crystalNum */
        crystalNum?: (number|null);
    }

    /** Represents an AddCrystalCoinReq. */
    class AddCrystalCoinReq implements IAddCrystalCoinReq {

        /**
         * Constructs a new AddCrystalCoinReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAddCrystalCoinReq);

        /** AddCrystalCoinReq crystalNum. */
        public crystalNum: number;

        /**
         * Creates a new AddCrystalCoinReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddCrystalCoinReq instance
         */
        public static create(properties?: pb.IAddCrystalCoinReq): pb.AddCrystalCoinReq;

        /**
         * Encodes the specified AddCrystalCoinReq message. Does not implicitly {@link pb.AddCrystalCoinReq.verify|verify} messages.
         * @param message AddCrystalCoinReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAddCrystalCoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddCrystalCoinReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddCrystalCoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AddCrystalCoinReq;
    }

    /** Properties of an AddCrystalCoinRes. */
    interface IAddCrystalCoinRes {

        /** AddCrystalCoinRes crystalCoin */
        crystalCoin?: (number|null);
    }

    /** Represents an AddCrystalCoinRes. */
    class AddCrystalCoinRes implements IAddCrystalCoinRes {

        /**
         * Constructs a new AddCrystalCoinRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAddCrystalCoinRes);

        /** AddCrystalCoinRes crystalCoin. */
        public crystalCoin: number;

        /**
         * Creates a new AddCrystalCoinRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddCrystalCoinRes instance
         */
        public static create(properties?: pb.IAddCrystalCoinRes): pb.AddCrystalCoinRes;

        /**
         * Encodes the specified AddCrystalCoinRes message. Does not implicitly {@link pb.AddCrystalCoinRes.verify|verify} messages.
         * @param message AddCrystalCoinRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAddCrystalCoinRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddCrystalCoinRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddCrystalCoinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AddCrystalCoinRes;
    }

    /** Properties of an AddCoinReq. */
    interface IAddCoinReq {

        /** AddCoinReq crystalNum */
        crystalNum?: (number|null);
    }

    /** Represents an AddCoinReq. */
    class AddCoinReq implements IAddCoinReq {

        /**
         * Constructs a new AddCoinReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAddCoinReq);

        /** AddCoinReq crystalNum. */
        public crystalNum: number;

        /**
         * Creates a new AddCoinReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddCoinReq instance
         */
        public static create(properties?: pb.IAddCoinReq): pb.AddCoinReq;

        /**
         * Encodes the specified AddCoinReq message. Does not implicitly {@link pb.AddCoinReq.verify|verify} messages.
         * @param message AddCoinReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAddCoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddCoinReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddCoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AddCoinReq;
    }

    /** Properties of an AddCoinRes. */
    interface IAddCoinRes {

        /** AddCoinRes crystalCoin */
        crystalCoin?: (number|null);
    }

    /** Represents an AddCoinRes. */
    class AddCoinRes implements IAddCoinRes {

        /**
         * Constructs a new AddCoinRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAddCoinRes);

        /** AddCoinRes crystalCoin. */
        public crystalCoin: number;

        /**
         * Creates a new AddCoinRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddCoinRes instance
         */
        public static create(properties?: pb.IAddCoinRes): pb.AddCoinRes;

        /**
         * Encodes the specified AddCoinRes message. Does not implicitly {@link pb.AddCoinRes.verify|verify} messages.
         * @param message AddCoinRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAddCoinRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddCoinRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddCoinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AddCoinRes;
    }

    /** Properties of a TaskInfoReq. */
    interface ITaskInfoReq {
    }

    /** Represents a TaskInfoReq. */
    class TaskInfoReq implements ITaskInfoReq {

        /**
         * Constructs a new TaskInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskInfoReq);

        /**
         * Creates a new TaskInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskInfoReq instance
         */
        public static create(properties?: pb.ITaskInfoReq): pb.TaskInfoReq;

        /**
         * Encodes the specified TaskInfoReq message. Does not implicitly {@link pb.TaskInfoReq.verify|verify} messages.
         * @param message TaskInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskInfoReq;
    }

    /** Properties of a TaskInfoRes. */
    interface ITaskInfoRes {

        /** TaskInfoRes task */
        task?: (pb.IModuleTask|null);
    }

    /** Represents a TaskInfoRes. */
    class TaskInfoRes implements ITaskInfoRes {

        /**
         * Constructs a new TaskInfoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskInfoRes);

        /** TaskInfoRes task. */
        public task?: (pb.IModuleTask|null);

        /**
         * Creates a new TaskInfoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskInfoRes instance
         */
        public static create(properties?: pb.ITaskInfoRes): pb.TaskInfoRes;

        /**
         * Encodes the specified TaskInfoRes message. Does not implicitly {@link pb.TaskInfoRes.verify|verify} messages.
         * @param message TaskInfoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskInfoRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskInfoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskInfoRes;
    }

    /** Properties of a TaskRewardReq. */
    interface ITaskRewardReq {

        /** TaskRewardReq taskId */
        taskId?: (number|null);
    }

    /** Represents a TaskRewardReq. */
    class TaskRewardReq implements ITaskRewardReq {

        /**
         * Constructs a new TaskRewardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskRewardReq);

        /** TaskRewardReq taskId. */
        public taskId: number;

        /**
         * Creates a new TaskRewardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskRewardReq instance
         */
        public static create(properties?: pb.ITaskRewardReq): pb.TaskRewardReq;

        /**
         * Encodes the specified TaskRewardReq message. Does not implicitly {@link pb.TaskRewardReq.verify|verify} messages.
         * @param message TaskRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskRewardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskRewardReq;
    }

    /** Properties of a TaskRewardRes. */
    interface ITaskRewardRes {

        /** TaskRewardRes code */
        code?: (number|null);

        /** TaskRewardRes msg */
        msg?: (string|null);

        /** TaskRewardRes taskId */
        taskId?: (number|null);

        /** TaskRewardRes itemList */
        itemList?: (pb.IRewardItem[]|null);
    }

    /** Represents a TaskRewardRes. */
    class TaskRewardRes implements ITaskRewardRes {

        /**
         * Constructs a new TaskRewardRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskRewardRes);

        /** TaskRewardRes code. */
        public code: number;

        /** TaskRewardRes msg. */
        public msg: string;

        /** TaskRewardRes taskId. */
        public taskId: number;

        /** TaskRewardRes itemList. */
        public itemList: pb.IRewardItem[];

        /**
         * Creates a new TaskRewardRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskRewardRes instance
         */
        public static create(properties?: pb.ITaskRewardRes): pb.TaskRewardRes;

        /**
         * Encodes the specified TaskRewardRes message. Does not implicitly {@link pb.TaskRewardRes.verify|verify} messages.
         * @param message TaskRewardRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskRewardRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskRewardRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskRewardRes;
    }

    /** Properties of an EnterYuYinFanReq. */
    interface IEnterYuYinFanReq {
    }

    /** Represents an EnterYuYinFanReq. */
    class EnterYuYinFanReq implements IEnterYuYinFanReq {

        /**
         * Constructs a new EnterYuYinFanReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IEnterYuYinFanReq);

        /**
         * Creates a new EnterYuYinFanReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterYuYinFanReq instance
         */
        public static create(properties?: pb.IEnterYuYinFanReq): pb.EnterYuYinFanReq;

        /**
         * Encodes the specified EnterYuYinFanReq message. Does not implicitly {@link pb.EnterYuYinFanReq.verify|verify} messages.
         * @param message EnterYuYinFanReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IEnterYuYinFanReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterYuYinFanReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterYuYinFanReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.EnterYuYinFanReq;
    }

    /** Properties of an EnterYuYinFanRes. */
    interface IEnterYuYinFanRes {
    }

    /** Represents an EnterYuYinFanRes. */
    class EnterYuYinFanRes implements IEnterYuYinFanRes {

        /**
         * Constructs a new EnterYuYinFanRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IEnterYuYinFanRes);

        /**
         * Creates a new EnterYuYinFanRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterYuYinFanRes instance
         */
        public static create(properties?: pb.IEnterYuYinFanRes): pb.EnterYuYinFanRes;

        /**
         * Encodes the specified EnterYuYinFanRes message. Does not implicitly {@link pb.EnterYuYinFanRes.verify|verify} messages.
         * @param message EnterYuYinFanRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IEnterYuYinFanRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterYuYinFanRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterYuYinFanRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.EnterYuYinFanRes;
    }

    /** Properties of a TaskInfo1Req. */
    interface ITaskInfo1Req {
    }

    /** Represents a TaskInfo1Req. */
    class TaskInfo1Req implements ITaskInfo1Req {

        /**
         * Constructs a new TaskInfo1Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskInfo1Req);

        /**
         * Creates a new TaskInfo1Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskInfo1Req instance
         */
        public static create(properties?: pb.ITaskInfo1Req): pb.TaskInfo1Req;

        /**
         * Encodes the specified TaskInfo1Req message. Does not implicitly {@link pb.TaskInfo1Req.verify|verify} messages.
         * @param message TaskInfo1Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskInfo1Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskInfo1Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskInfo1Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskInfo1Req;
    }

    /** Properties of a TaskInfo1Res. */
    interface ITaskInfo1Res {

        /** TaskInfo1Res task */
        task?: (pb.IModuleTask|null);

        /** TaskInfo1Res curPoint */
        curPoint?: (number|null);
    }

    /** Represents a TaskInfo1Res. */
    class TaskInfo1Res implements ITaskInfo1Res {

        /**
         * Constructs a new TaskInfo1Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskInfo1Res);

        /** TaskInfo1Res task. */
        public task?: (pb.IModuleTask|null);

        /** TaskInfo1Res curPoint. */
        public curPoint: number;

        /**
         * Creates a new TaskInfo1Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskInfo1Res instance
         */
        public static create(properties?: pb.ITaskInfo1Res): pb.TaskInfo1Res;

        /**
         * Encodes the specified TaskInfo1Res message. Does not implicitly {@link pb.TaskInfo1Res.verify|verify} messages.
         * @param message TaskInfo1Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskInfo1Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskInfo1Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskInfo1Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskInfo1Res;
    }

    /** Properties of a TaskReward1Req. */
    interface ITaskReward1Req {

        /** TaskReward1Req taskId */
        taskId?: (number|null);
    }

    /** Represents a TaskReward1Req. */
    class TaskReward1Req implements ITaskReward1Req {

        /**
         * Constructs a new TaskReward1Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskReward1Req);

        /** TaskReward1Req taskId. */
        public taskId: number;

        /**
         * Creates a new TaskReward1Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskReward1Req instance
         */
        public static create(properties?: pb.ITaskReward1Req): pb.TaskReward1Req;

        /**
         * Encodes the specified TaskReward1Req message. Does not implicitly {@link pb.TaskReward1Req.verify|verify} messages.
         * @param message TaskReward1Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskReward1Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskReward1Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskReward1Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskReward1Req;
    }

    /** Properties of a TaskReward1Res. */
    interface ITaskReward1Res {

        /** TaskReward1Res code */
        code?: (number|null);

        /** TaskReward1Res msg */
        msg?: (string|null);

        /** TaskReward1Res taskId */
        taskId?: (number|null);

        /** TaskReward1Res itemList */
        itemList?: (pb.IRewardItem[]|null);
    }

    /** Represents a TaskReward1Res. */
    class TaskReward1Res implements ITaskReward1Res {

        /**
         * Constructs a new TaskReward1Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskReward1Res);

        /** TaskReward1Res code. */
        public code: number;

        /** TaskReward1Res msg. */
        public msg: string;

        /** TaskReward1Res taskId. */
        public taskId: number;

        /** TaskReward1Res itemList. */
        public itemList: pb.IRewardItem[];

        /**
         * Creates a new TaskReward1Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskReward1Res instance
         */
        public static create(properties?: pb.ITaskReward1Res): pb.TaskReward1Res;

        /**
         * Encodes the specified TaskReward1Res message. Does not implicitly {@link pb.TaskReward1Res.verify|verify} messages.
         * @param message TaskReward1Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskReward1Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskReward1Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskReward1Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskReward1Res;
    }

    /** Properties of a ZhuanpanLevel1Message. */
    interface IZhuanpanLevel1Message {

        /** ZhuanpanLevel1Message id */
        id?: (number|null);

        /** ZhuanpanLevel1Message money */
        money?: (number|null);

        /** ZhuanpanLevel1Message preMoney */
        preMoney?: (number|null);

        /** ZhuanpanLevel1Message updateCount */
        updateCount?: (number|null);

        /** ZhuanpanLevel1Message type */
        type?: (number|null);
    }

    /** Represents a ZhuanpanLevel1Message. */
    class ZhuanpanLevel1Message implements IZhuanpanLevel1Message {

        /**
         * Constructs a new ZhuanpanLevel1Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuanpanLevel1Message);

        /** ZhuanpanLevel1Message id. */
        public id: number;

        /** ZhuanpanLevel1Message money. */
        public money: number;

        /** ZhuanpanLevel1Message preMoney. */
        public preMoney: number;

        /** ZhuanpanLevel1Message updateCount. */
        public updateCount: number;

        /** ZhuanpanLevel1Message type. */
        public type: number;

        /**
         * Creates a new ZhuanpanLevel1Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuanpanLevel1Message instance
         */
        public static create(properties?: pb.IZhuanpanLevel1Message): pb.ZhuanpanLevel1Message;

        /**
         * Encodes the specified ZhuanpanLevel1Message message. Does not implicitly {@link pb.ZhuanpanLevel1Message.verify|verify} messages.
         * @param message ZhuanpanLevel1Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuanpanLevel1Message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuanpanLevel1Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuanpanLevel1Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuanpanLevel1Message;
    }

    /** Properties of a ZhuangPanLevel1MessageReq. */
    interface IZhuangPanLevel1MessageReq {
    }

    /** Represents a ZhuangPanLevel1MessageReq. */
    class ZhuangPanLevel1MessageReq implements IZhuangPanLevel1MessageReq {

        /**
         * Constructs a new ZhuangPanLevel1MessageReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuangPanLevel1MessageReq);

        /**
         * Creates a new ZhuangPanLevel1MessageReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuangPanLevel1MessageReq instance
         */
        public static create(properties?: pb.IZhuangPanLevel1MessageReq): pb.ZhuangPanLevel1MessageReq;

        /**
         * Encodes the specified ZhuangPanLevel1MessageReq message. Does not implicitly {@link pb.ZhuangPanLevel1MessageReq.verify|verify} messages.
         * @param message ZhuangPanLevel1MessageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuangPanLevel1MessageReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuangPanLevel1MessageReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuangPanLevel1MessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuangPanLevel1MessageReq;
    }

    /** Properties of a ZhuangPanLevel1MessageRes. */
    interface IZhuangPanLevel1MessageRes {

        /** ZhuangPanLevel1MessageRes point */
        point?: (number|null);

        /** ZhuangPanLevel1MessageRes zhuanPanTime */
        zhuanPanTime?: (number|null);

        /** ZhuangPanLevel1MessageRes serverTime */
        serverTime?: (number|null);

        /** ZhuangPanLevel1MessageRes zhuanPans */
        zhuanPans?: (pb.IZhuanpanLevel1Message[]|null);

        /** ZhuangPanLevel1MessageRes emptyCoin */
        emptyCoin?: (number|null);

        /** ZhuangPanLevel1MessageRes watchLevelUp */
        watchLevelUp?: (boolean|null);

        /** ZhuangPanLevel1MessageRes maxPoint */
        maxPoint?: (number|null);

        /** ZhuangPanLevel1MessageRes currentTimes */
        currentTimes?: (number|null);
    }

    /** Represents a ZhuangPanLevel1MessageRes. */
    class ZhuangPanLevel1MessageRes implements IZhuangPanLevel1MessageRes {

        /**
         * Constructs a new ZhuangPanLevel1MessageRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuangPanLevel1MessageRes);

        /** ZhuangPanLevel1MessageRes point. */
        public point: number;

        /** ZhuangPanLevel1MessageRes zhuanPanTime. */
        public zhuanPanTime: number;

        /** ZhuangPanLevel1MessageRes serverTime. */
        public serverTime: number;

        /** ZhuangPanLevel1MessageRes zhuanPans. */
        public zhuanPans: pb.IZhuanpanLevel1Message[];

        /** ZhuangPanLevel1MessageRes emptyCoin. */
        public emptyCoin: number;

        /** ZhuangPanLevel1MessageRes watchLevelUp. */
        public watchLevelUp: boolean;

        /** ZhuangPanLevel1MessageRes maxPoint. */
        public maxPoint: number;

        /** ZhuangPanLevel1MessageRes currentTimes. */
        public currentTimes: number;

        /**
         * Creates a new ZhuangPanLevel1MessageRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuangPanLevel1MessageRes instance
         */
        public static create(properties?: pb.IZhuangPanLevel1MessageRes): pb.ZhuangPanLevel1MessageRes;

        /**
         * Encodes the specified ZhuangPanLevel1MessageRes message. Does not implicitly {@link pb.ZhuangPanLevel1MessageRes.verify|verify} messages.
         * @param message ZhuangPanLevel1MessageRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuangPanLevel1MessageRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuangPanLevel1MessageRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuangPanLevel1MessageRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuangPanLevel1MessageRes;
    }

    /** Properties of a ZhuangPanLevel1Req. */
    interface IZhuangPanLevel1Req {

        /** ZhuangPanLevel1Req userCoin */
        userCoin?: (boolean|null);
    }

    /** Represents a ZhuangPanLevel1Req. */
    class ZhuangPanLevel1Req implements IZhuangPanLevel1Req {

        /**
         * Constructs a new ZhuangPanLevel1Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuangPanLevel1Req);

        /** ZhuangPanLevel1Req userCoin. */
        public userCoin: boolean;

        /**
         * Creates a new ZhuangPanLevel1Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuangPanLevel1Req instance
         */
        public static create(properties?: pb.IZhuangPanLevel1Req): pb.ZhuangPanLevel1Req;

        /**
         * Encodes the specified ZhuangPanLevel1Req message. Does not implicitly {@link pb.ZhuangPanLevel1Req.verify|verify} messages.
         * @param message ZhuangPanLevel1Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuangPanLevel1Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuangPanLevel1Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuangPanLevel1Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuangPanLevel1Req;
    }

    /** Properties of a ZhuangPanLevel1Res. */
    interface IZhuangPanLevel1Res {

        /** ZhuangPanLevel1Res userCoin */
        userCoin?: (boolean|null);

        /** ZhuangPanLevel1Res zhuanPan */
        zhuanPan?: (pb.IZhuanpanLevel1Message|null);

        /** ZhuangPanLevel1Res leftPoint */
        leftPoint?: (number|null);

        /** ZhuangPanLevel1Res leftCoin */
        leftCoin?: (number|null);

        /** ZhuangPanLevel1Res currentTimes */
        currentTimes?: (number|null);

        /** ZhuangPanLevel1Res nextTimes */
        nextTimes?: (number|null);

        /** ZhuangPanLevel1Res leftCrystalCoin */
        leftCrystalCoin?: (number|null);

        /** ZhuangPanLevel1Res videoMuti */
        videoMuti?: (number|null);

        /** ZhuangPanLevel1Res videoId */
        videoId?: (string|null);

        /** ZhuangPanLevel1Res code */
        code?: (number|null);
    }

    /** Represents a ZhuangPanLevel1Res. */
    class ZhuangPanLevel1Res implements IZhuangPanLevel1Res {

        /**
         * Constructs a new ZhuangPanLevel1Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuangPanLevel1Res);

        /** ZhuangPanLevel1Res userCoin. */
        public userCoin: boolean;

        /** ZhuangPanLevel1Res zhuanPan. */
        public zhuanPan?: (pb.IZhuanpanLevel1Message|null);

        /** ZhuangPanLevel1Res leftPoint. */
        public leftPoint: number;

        /** ZhuangPanLevel1Res leftCoin. */
        public leftCoin: number;

        /** ZhuangPanLevel1Res currentTimes. */
        public currentTimes: number;

        /** ZhuangPanLevel1Res nextTimes. */
        public nextTimes: number;

        /** ZhuangPanLevel1Res leftCrystalCoin. */
        public leftCrystalCoin: number;

        /** ZhuangPanLevel1Res videoMuti. */
        public videoMuti: number;

        /** ZhuangPanLevel1Res videoId. */
        public videoId: string;

        /** ZhuangPanLevel1Res code. */
        public code: number;

        /**
         * Creates a new ZhuangPanLevel1Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuangPanLevel1Res instance
         */
        public static create(properties?: pb.IZhuangPanLevel1Res): pb.ZhuangPanLevel1Res;

        /**
         * Encodes the specified ZhuangPanLevel1Res message. Does not implicitly {@link pb.ZhuangPanLevel1Res.verify|verify} messages.
         * @param message ZhuangPanLevel1Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuangPanLevel1Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuangPanLevel1Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuangPanLevel1Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuangPanLevel1Res;
    }

    /** Properties of a ZhuangPanLevel1UpTipReq. */
    interface IZhuangPanLevel1UpTipReq {
    }

    /** Represents a ZhuangPanLevel1UpTipReq. */
    class ZhuangPanLevel1UpTipReq implements IZhuangPanLevel1UpTipReq {

        /**
         * Constructs a new ZhuangPanLevel1UpTipReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuangPanLevel1UpTipReq);

        /**
         * Creates a new ZhuangPanLevel1UpTipReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuangPanLevel1UpTipReq instance
         */
        public static create(properties?: pb.IZhuangPanLevel1UpTipReq): pb.ZhuangPanLevel1UpTipReq;

        /**
         * Encodes the specified ZhuangPanLevel1UpTipReq message. Does not implicitly {@link pb.ZhuangPanLevel1UpTipReq.verify|verify} messages.
         * @param message ZhuangPanLevel1UpTipReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuangPanLevel1UpTipReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuangPanLevel1UpTipReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuangPanLevel1UpTipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuangPanLevel1UpTipReq;
    }

    /** Properties of a ZhuangPanLevel1UpTipRes. */
    interface IZhuangPanLevel1UpTipRes {

        /** ZhuangPanLevel1UpTipRes code */
        code?: (number|null);
    }

    /** Represents a ZhuangPanLevel1UpTipRes. */
    class ZhuangPanLevel1UpTipRes implements IZhuangPanLevel1UpTipRes {

        /**
         * Constructs a new ZhuangPanLevel1UpTipRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IZhuangPanLevel1UpTipRes);

        /** ZhuangPanLevel1UpTipRes code. */
        public code: number;

        /**
         * Creates a new ZhuangPanLevel1UpTipRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhuangPanLevel1UpTipRes instance
         */
        public static create(properties?: pb.IZhuangPanLevel1UpTipRes): pb.ZhuangPanLevel1UpTipRes;

        /**
         * Encodes the specified ZhuangPanLevel1UpTipRes message. Does not implicitly {@link pb.ZhuangPanLevel1UpTipRes.verify|verify} messages.
         * @param message ZhuangPanLevel1UpTipRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IZhuangPanLevel1UpTipRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhuangPanLevel1UpTipRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhuangPanLevel1UpTipRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ZhuangPanLevel1UpTipRes;
    }

    /** Properties of a GetAllSkin1Req. */
    interface IGetAllSkin1Req {
    }

    /** Represents a GetAllSkin1Req. */
    class GetAllSkin1Req implements IGetAllSkin1Req {

        /**
         * Constructs a new GetAllSkin1Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetAllSkin1Req);

        /**
         * Creates a new GetAllSkin1Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllSkin1Req instance
         */
        public static create(properties?: pb.IGetAllSkin1Req): pb.GetAllSkin1Req;

        /**
         * Encodes the specified GetAllSkin1Req message. Does not implicitly {@link pb.GetAllSkin1Req.verify|verify} messages.
         * @param message GetAllSkin1Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetAllSkin1Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllSkin1Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllSkin1Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetAllSkin1Req;
    }

    /** Properties of a GetAllSkin1Res. */
    interface IGetAllSkin1Res {

        /** GetAllSkin1Res skin */
        skin?: (pb.IUserSkin1Message|null);

        /** GetAllSkin1Res uid */
        uid?: (string|null);

        /** GetAllSkin1Res code */
        code?: (number|null);
    }

    /** Represents a GetAllSkin1Res. */
    class GetAllSkin1Res implements IGetAllSkin1Res {

        /**
         * Constructs a new GetAllSkin1Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetAllSkin1Res);

        /** GetAllSkin1Res skin. */
        public skin?: (pb.IUserSkin1Message|null);

        /** GetAllSkin1Res uid. */
        public uid: string;

        /** GetAllSkin1Res code. */
        public code: number;

        /**
         * Creates a new GetAllSkin1Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllSkin1Res instance
         */
        public static create(properties?: pb.IGetAllSkin1Res): pb.GetAllSkin1Res;

        /**
         * Encodes the specified GetAllSkin1Res message. Does not implicitly {@link pb.GetAllSkin1Res.verify|verify} messages.
         * @param message GetAllSkin1Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetAllSkin1Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllSkin1Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllSkin1Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetAllSkin1Res;
    }

    /** Properties of a SkinSetting1Msg. */
    interface ISkinSetting1Msg {

        /** SkinSetting1Msg type */
        type?: (number|null);

        /** SkinSetting1Msg id */
        id?: (number|null);

        /** SkinSetting1Msg defSkin */
        defSkin?: (number|null);

        /** SkinSetting1Msg minLevel */
        minLevel?: (number|null);

        /** SkinSetting1Msg minScene */
        minScene?: (number|null);

        /** SkinSetting1Msg skinCoin */
        skinCoin?: (number|null);

        /** SkinSetting1Msg order */
        order?: (number|null);

        /** SkinSetting1Msg quality */
        quality?: (number|null);
    }

    /** Represents a SkinSetting1Msg. */
    class SkinSetting1Msg implements ISkinSetting1Msg {

        /**
         * Constructs a new SkinSetting1Msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISkinSetting1Msg);

        /** SkinSetting1Msg type. */
        public type: number;

        /** SkinSetting1Msg id. */
        public id: number;

        /** SkinSetting1Msg defSkin. */
        public defSkin: number;

        /** SkinSetting1Msg minLevel. */
        public minLevel: number;

        /** SkinSetting1Msg minScene. */
        public minScene: number;

        /** SkinSetting1Msg skinCoin. */
        public skinCoin: number;

        /** SkinSetting1Msg order. */
        public order: number;

        /** SkinSetting1Msg quality. */
        public quality: number;

        /**
         * Creates a new SkinSetting1Msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkinSetting1Msg instance
         */
        public static create(properties?: pb.ISkinSetting1Msg): pb.SkinSetting1Msg;

        /**
         * Encodes the specified SkinSetting1Msg message. Does not implicitly {@link pb.SkinSetting1Msg.verify|verify} messages.
         * @param message SkinSetting1Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISkinSetting1Msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SkinSetting1Msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkinSetting1Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SkinSetting1Msg;
    }

    /** Properties of a GetSkinSetting1Req. */
    interface IGetSkinSetting1Req {
    }

    /** Represents a GetSkinSetting1Req. */
    class GetSkinSetting1Req implements IGetSkinSetting1Req {

        /**
         * Constructs a new GetSkinSetting1Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetSkinSetting1Req);

        /**
         * Creates a new GetSkinSetting1Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSkinSetting1Req instance
         */
        public static create(properties?: pb.IGetSkinSetting1Req): pb.GetSkinSetting1Req;

        /**
         * Encodes the specified GetSkinSetting1Req message. Does not implicitly {@link pb.GetSkinSetting1Req.verify|verify} messages.
         * @param message GetSkinSetting1Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetSkinSetting1Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSkinSetting1Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSkinSetting1Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetSkinSetting1Req;
    }

    /** Properties of a GetSkinSetting1Res. */
    interface IGetSkinSetting1Res {

        /** GetSkinSetting1Res skins */
        skins?: (pb.ISkinSetting1Msg[]|null);
    }

    /** Represents a GetSkinSetting1Res. */
    class GetSkinSetting1Res implements IGetSkinSetting1Res {

        /**
         * Constructs a new GetSkinSetting1Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetSkinSetting1Res);

        /** GetSkinSetting1Res skins. */
        public skins: pb.ISkinSetting1Msg[];

        /**
         * Creates a new GetSkinSetting1Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSkinSetting1Res instance
         */
        public static create(properties?: pb.IGetSkinSetting1Res): pb.GetSkinSetting1Res;

        /**
         * Encodes the specified GetSkinSetting1Res message. Does not implicitly {@link pb.GetSkinSetting1Res.verify|verify} messages.
         * @param message GetSkinSetting1Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetSkinSetting1Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSkinSetting1Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSkinSetting1Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetSkinSetting1Res;
    }

    /** Properties of a BuySkin1Req. */
    interface IBuySkin1Req {

        /** BuySkin1Req type */
        type?: (number|null);

        /** BuySkin1Req id */
        id?: (number|null);
    }

    /** Represents a BuySkin1Req. */
    class BuySkin1Req implements IBuySkin1Req {

        /**
         * Constructs a new BuySkin1Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBuySkin1Req);

        /** BuySkin1Req type. */
        public type: number;

        /** BuySkin1Req id. */
        public id: number;

        /**
         * Creates a new BuySkin1Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuySkin1Req instance
         */
        public static create(properties?: pb.IBuySkin1Req): pb.BuySkin1Req;

        /**
         * Encodes the specified BuySkin1Req message. Does not implicitly {@link pb.BuySkin1Req.verify|verify} messages.
         * @param message BuySkin1Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBuySkin1Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuySkin1Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuySkin1Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.BuySkin1Req;
    }

    /** Properties of a BuySkin1Res. */
    interface IBuySkin1Res {

        /** BuySkin1Res type */
        type?: (number|null);

        /** BuySkin1Res id */
        id?: (number|null);

        /** BuySkin1Res crystalCoin */
        crystalCoin?: (number|null);

        /** BuySkin1Res code */
        code?: (number|null);
    }

    /** Represents a BuySkin1Res. */
    class BuySkin1Res implements IBuySkin1Res {

        /**
         * Constructs a new BuySkin1Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBuySkin1Res);

        /** BuySkin1Res type. */
        public type: number;

        /** BuySkin1Res id. */
        public id: number;

        /** BuySkin1Res crystalCoin. */
        public crystalCoin: number;

        /** BuySkin1Res code. */
        public code: number;

        /**
         * Creates a new BuySkin1Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuySkin1Res instance
         */
        public static create(properties?: pb.IBuySkin1Res): pb.BuySkin1Res;

        /**
         * Encodes the specified BuySkin1Res message. Does not implicitly {@link pb.BuySkin1Res.verify|verify} messages.
         * @param message BuySkin1Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBuySkin1Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuySkin1Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuySkin1Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.BuySkin1Res;
    }

    /** Properties of a DecorateSkin1Req. */
    interface IDecorateSkin1Req {

        /** DecorateSkin1Req type */
        type?: (number|null);

        /** DecorateSkin1Req id */
        id?: (number|null);
    }

    /** Represents a DecorateSkin1Req. */
    class DecorateSkin1Req implements IDecorateSkin1Req {

        /**
         * Constructs a new DecorateSkin1Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDecorateSkin1Req);

        /** DecorateSkin1Req type. */
        public type: number;

        /** DecorateSkin1Req id. */
        public id: number;

        /**
         * Creates a new DecorateSkin1Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecorateSkin1Req instance
         */
        public static create(properties?: pb.IDecorateSkin1Req): pb.DecorateSkin1Req;

        /**
         * Encodes the specified DecorateSkin1Req message. Does not implicitly {@link pb.DecorateSkin1Req.verify|verify} messages.
         * @param message DecorateSkin1Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDecorateSkin1Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DecorateSkin1Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DecorateSkin1Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DecorateSkin1Req;
    }

    /** Properties of a DecorateSkin1Res. */
    interface IDecorateSkin1Res {

        /** DecorateSkin1Res type */
        type?: (number|null);

        /** DecorateSkin1Res id */
        id?: (number|null);

        /** DecorateSkin1Res code */
        code?: (number|null);
    }

    /** Represents a DecorateSkin1Res. */
    class DecorateSkin1Res implements IDecorateSkin1Res {

        /**
         * Constructs a new DecorateSkin1Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDecorateSkin1Res);

        /** DecorateSkin1Res type. */
        public type: number;

        /** DecorateSkin1Res id. */
        public id: number;

        /** DecorateSkin1Res code. */
        public code: number;

        /**
         * Creates a new DecorateSkin1Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecorateSkin1Res instance
         */
        public static create(properties?: pb.IDecorateSkin1Res): pb.DecorateSkin1Res;

        /**
         * Encodes the specified DecorateSkin1Res message. Does not implicitly {@link pb.DecorateSkin1Res.verify|verify} messages.
         * @param message DecorateSkin1Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDecorateSkin1Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DecorateSkin1Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DecorateSkin1Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DecorateSkin1Res;
    }

    /** Properties of a SceneChange1Res. */
    interface ISceneChange1Res {

        /** SceneChange1Res sceneId */
        sceneId?: (number|null);
    }

    /** Represents a SceneChange1Res. */
    class SceneChange1Res implements ISceneChange1Res {

        /**
         * Constructs a new SceneChange1Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISceneChange1Res);

        /** SceneChange1Res sceneId. */
        public sceneId: number;

        /**
         * Creates a new SceneChange1Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SceneChange1Res instance
         */
        public static create(properties?: pb.ISceneChange1Res): pb.SceneChange1Res;

        /**
         * Encodes the specified SceneChange1Res message. Does not implicitly {@link pb.SceneChange1Res.verify|verify} messages.
         * @param message SceneChange1Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISceneChange1Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SceneChange1Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SceneChange1Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SceneChange1Res;
    }

    /** Properties of a PlaySceneAnimation1Req. */
    interface IPlaySceneAnimation1Req {
    }

    /** Represents a PlaySceneAnimation1Req. */
    class PlaySceneAnimation1Req implements IPlaySceneAnimation1Req {

        /**
         * Constructs a new PlaySceneAnimation1Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlaySceneAnimation1Req);

        /**
         * Creates a new PlaySceneAnimation1Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlaySceneAnimation1Req instance
         */
        public static create(properties?: pb.IPlaySceneAnimation1Req): pb.PlaySceneAnimation1Req;

        /**
         * Encodes the specified PlaySceneAnimation1Req message. Does not implicitly {@link pb.PlaySceneAnimation1Req.verify|verify} messages.
         * @param message PlaySceneAnimation1Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlaySceneAnimation1Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlaySceneAnimation1Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlaySceneAnimation1Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlaySceneAnimation1Req;
    }

    /** Properties of a PlaySceneAnimation1Res. */
    interface IPlaySceneAnimation1Res {

        /** PlaySceneAnimation1Res code */
        code?: (number|null);
    }

    /** Represents a PlaySceneAnimation1Res. */
    class PlaySceneAnimation1Res implements IPlaySceneAnimation1Res {

        /**
         * Constructs a new PlaySceneAnimation1Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlaySceneAnimation1Res);

        /** PlaySceneAnimation1Res code. */
        public code: number;

        /**
         * Creates a new PlaySceneAnimation1Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlaySceneAnimation1Res instance
         */
        public static create(properties?: pb.IPlaySceneAnimation1Res): pb.PlaySceneAnimation1Res;

        /**
         * Encodes the specified PlaySceneAnimation1Res message. Does not implicitly {@link pb.PlaySceneAnimation1Res.verify|verify} messages.
         * @param message PlaySceneAnimation1Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlaySceneAnimation1Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlaySceneAnimation1Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlaySceneAnimation1Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlaySceneAnimation1Res;
    }

    /** RedPointType enum. */
    enum RedPointType {
        SKINLEVELUP = 0
    }

    /** Properties of a RedPoint. */
    interface IRedPoint {

        /** RedPoint type */
        type?: (pb.RedPointType|null);

        /** RedPoint value */
        value?: (boolean|null);
    }

    /** Represents a RedPoint. */
    class RedPoint implements IRedPoint {

        /**
         * Constructs a new RedPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRedPoint);

        /** RedPoint type. */
        public type: pb.RedPointType;

        /** RedPoint value. */
        public value: boolean;

        /**
         * Creates a new RedPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPoint instance
         */
        public static create(properties?: pb.IRedPoint): pb.RedPoint;

        /**
         * Encodes the specified RedPoint message. Does not implicitly {@link pb.RedPoint.verify|verify} messages.
         * @param message RedPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRedPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RedPoint;
    }

    /** Properties of a RedPointGetReq. */
    interface IRedPointGetReq {
    }

    /** Represents a RedPointGetReq. */
    class RedPointGetReq implements IRedPointGetReq {

        /**
         * Constructs a new RedPointGetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRedPointGetReq);

        /**
         * Creates a new RedPointGetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPointGetReq instance
         */
        public static create(properties?: pb.IRedPointGetReq): pb.RedPointGetReq;

        /**
         * Encodes the specified RedPointGetReq message. Does not implicitly {@link pb.RedPointGetReq.verify|verify} messages.
         * @param message RedPointGetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRedPointGetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPointGetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPointGetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RedPointGetReq;
    }

    /** Properties of a RedPointGetRes. */
    interface IRedPointGetRes {

        /** RedPointGetRes redPoints */
        redPoints?: (pb.IRedPoint[]|null);

        /** RedPointGetRes code */
        code?: (number|null);
    }

    /** Represents a RedPointGetRes. */
    class RedPointGetRes implements IRedPointGetRes {

        /**
         * Constructs a new RedPointGetRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRedPointGetRes);

        /** RedPointGetRes redPoints. */
        public redPoints: pb.IRedPoint[];

        /** RedPointGetRes code. */
        public code: number;

        /**
         * Creates a new RedPointGetRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPointGetRes instance
         */
        public static create(properties?: pb.IRedPointGetRes): pb.RedPointGetRes;

        /**
         * Encodes the specified RedPointGetRes message. Does not implicitly {@link pb.RedPointGetRes.verify|verify} messages.
         * @param message RedPointGetRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRedPointGetRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPointGetRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPointGetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RedPointGetRes;
    }

    /** Properties of a RedPointSetReq. */
    interface IRedPointSetReq {

        /** RedPointSetReq types */
        types?: (pb.RedPointType[]|null);
    }

    /** Represents a RedPointSetReq. */
    class RedPointSetReq implements IRedPointSetReq {

        /**
         * Constructs a new RedPointSetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRedPointSetReq);

        /** RedPointSetReq types. */
        public types: pb.RedPointType[];

        /**
         * Creates a new RedPointSetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPointSetReq instance
         */
        public static create(properties?: pb.IRedPointSetReq): pb.RedPointSetReq;

        /**
         * Encodes the specified RedPointSetReq message. Does not implicitly {@link pb.RedPointSetReq.verify|verify} messages.
         * @param message RedPointSetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRedPointSetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPointSetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPointSetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RedPointSetReq;
    }

    /** Properties of a RedPointSetRes. */
    interface IRedPointSetRes {

        /** RedPointSetRes types */
        types?: (pb.RedPointType[]|null);

        /** RedPointSetRes code */
        code?: (number|null);
    }

    /** Represents a RedPointSetRes. */
    class RedPointSetRes implements IRedPointSetRes {

        /**
         * Constructs a new RedPointSetRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRedPointSetRes);

        /** RedPointSetRes types. */
        public types: pb.RedPointType[];

        /** RedPointSetRes code. */
        public code: number;

        /**
         * Creates a new RedPointSetRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPointSetRes instance
         */
        public static create(properties?: pb.IRedPointSetRes): pb.RedPointSetRes;

        /**
         * Encodes the specified RedPointSetRes message. Does not implicitly {@link pb.RedPointSetRes.verify|verify} messages.
         * @param message RedPointSetRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRedPointSetRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPointSetRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPointSetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RedPointSetRes;
    }

    /** Properties of a GetCoinWhenNoMoneyReq. */
    interface IGetCoinWhenNoMoneyReq {
    }

    /** Represents a GetCoinWhenNoMoneyReq. */
    class GetCoinWhenNoMoneyReq implements IGetCoinWhenNoMoneyReq {

        /**
         * Constructs a new GetCoinWhenNoMoneyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetCoinWhenNoMoneyReq);

        /**
         * Creates a new GetCoinWhenNoMoneyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCoinWhenNoMoneyReq instance
         */
        public static create(properties?: pb.IGetCoinWhenNoMoneyReq): pb.GetCoinWhenNoMoneyReq;

        /**
         * Encodes the specified GetCoinWhenNoMoneyReq message. Does not implicitly {@link pb.GetCoinWhenNoMoneyReq.verify|verify} messages.
         * @param message GetCoinWhenNoMoneyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetCoinWhenNoMoneyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCoinWhenNoMoneyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCoinWhenNoMoneyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetCoinWhenNoMoneyReq;
    }

    /** Properties of a GetCoinWhenNoMoneyRes. */
    interface IGetCoinWhenNoMoneyRes {

        /** GetCoinWhenNoMoneyRes coin */
        coin?: (number|null);

        /** GetCoinWhenNoMoneyRes code */
        code?: (number|null);
    }

    /** Represents a GetCoinWhenNoMoneyRes. */
    class GetCoinWhenNoMoneyRes implements IGetCoinWhenNoMoneyRes {

        /**
         * Constructs a new GetCoinWhenNoMoneyRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetCoinWhenNoMoneyRes);

        /** GetCoinWhenNoMoneyRes coin. */
        public coin: number;

        /** GetCoinWhenNoMoneyRes code. */
        public code: number;

        /**
         * Creates a new GetCoinWhenNoMoneyRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCoinWhenNoMoneyRes instance
         */
        public static create(properties?: pb.IGetCoinWhenNoMoneyRes): pb.GetCoinWhenNoMoneyRes;

        /**
         * Encodes the specified GetCoinWhenNoMoneyRes message. Does not implicitly {@link pb.GetCoinWhenNoMoneyRes.verify|verify} messages.
         * @param message GetCoinWhenNoMoneyRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetCoinWhenNoMoneyRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCoinWhenNoMoneyRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCoinWhenNoMoneyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetCoinWhenNoMoneyRes;
    }

    /** Properties of a GetVedioAwardReq. */
    interface IGetVedioAwardReq {

        /** GetVedioAwardReq videoId */
        videoId?: (string|null);

        /** GetVedioAwardReq watch */
        watch?: (boolean|null);
    }

    /** Represents a GetVedioAwardReq. */
    class GetVedioAwardReq implements IGetVedioAwardReq {

        /**
         * Constructs a new GetVedioAwardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetVedioAwardReq);

        /** GetVedioAwardReq videoId. */
        public videoId: string;

        /** GetVedioAwardReq watch. */
        public watch: boolean;

        /**
         * Creates a new GetVedioAwardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVedioAwardReq instance
         */
        public static create(properties?: pb.IGetVedioAwardReq): pb.GetVedioAwardReq;

        /**
         * Encodes the specified GetVedioAwardReq message. Does not implicitly {@link pb.GetVedioAwardReq.verify|verify} messages.
         * @param message GetVedioAwardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetVedioAwardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVedioAwardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVedioAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetVedioAwardReq;
    }

    /** Properties of a GetVedioAwardRes. */
    interface IGetVedioAwardRes {

        /** GetVedioAwardRes videoId */
        videoId?: (string|null);

        /** GetVedioAwardRes watch */
        watch?: (boolean|null);

        /** GetVedioAwardRes award */
        award?: (pb.IRewardItem[]|null);

        /** GetVedioAwardRes cur */
        cur?: (pb.IRewardItem[]|null);

        /** GetVedioAwardRes code */
        code?: (number|null);
    }

    /** Represents a GetVedioAwardRes. */
    class GetVedioAwardRes implements IGetVedioAwardRes {

        /**
         * Constructs a new GetVedioAwardRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetVedioAwardRes);

        /** GetVedioAwardRes videoId. */
        public videoId: string;

        /** GetVedioAwardRes watch. */
        public watch: boolean;

        /** GetVedioAwardRes award. */
        public award: pb.IRewardItem[];

        /** GetVedioAwardRes cur. */
        public cur: pb.IRewardItem[];

        /** GetVedioAwardRes code. */
        public code: number;

        /**
         * Creates a new GetVedioAwardRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVedioAwardRes instance
         */
        public static create(properties?: pb.IGetVedioAwardRes): pb.GetVedioAwardRes;

        /**
         * Encodes the specified GetVedioAwardRes message. Does not implicitly {@link pb.GetVedioAwardRes.verify|verify} messages.
         * @param message GetVedioAwardRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetVedioAwardRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVedioAwardRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVedioAwardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetVedioAwardRes;
    }

    /** Properties of a GetSceneVideoReq. */
    interface IGetSceneVideoReq {
    }

    /** Represents a GetSceneVideoReq. */
    class GetSceneVideoReq implements IGetSceneVideoReq {

        /**
         * Constructs a new GetSceneVideoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetSceneVideoReq);

        /**
         * Creates a new GetSceneVideoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSceneVideoReq instance
         */
        public static create(properties?: pb.IGetSceneVideoReq): pb.GetSceneVideoReq;

        /**
         * Encodes the specified GetSceneVideoReq message. Does not implicitly {@link pb.GetSceneVideoReq.verify|verify} messages.
         * @param message GetSceneVideoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetSceneVideoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSceneVideoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSceneVideoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetSceneVideoReq;
    }

    /** Properties of a GetSceneVideoRes. */
    interface IGetSceneVideoRes {

        /** GetSceneVideoRes videoId */
        videoId?: (string|null);

        /** GetSceneVideoRes num */
        num?: (number|null);

        /** GetSceneVideoRes code */
        code?: (number|null);
    }

    /** Represents a GetSceneVideoRes. */
    class GetSceneVideoRes implements IGetSceneVideoRes {

        /**
         * Constructs a new GetSceneVideoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetSceneVideoRes);

        /** GetSceneVideoRes videoId. */
        public videoId: string;

        /** GetSceneVideoRes num. */
        public num: number;

        /** GetSceneVideoRes code. */
        public code: number;

        /**
         * Creates a new GetSceneVideoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSceneVideoRes instance
         */
        public static create(properties?: pb.IGetSceneVideoRes): pb.GetSceneVideoRes;

        /**
         * Encodes the specified GetSceneVideoRes message. Does not implicitly {@link pb.GetSceneVideoRes.verify|verify} messages.
         * @param message GetSceneVideoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetSceneVideoRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSceneVideoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSceneVideoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetSceneVideoRes;
    }

    /** Properties of a PushMsgReq. */
    interface IPushMsgReq {
    }

    /** Represents a PushMsgReq. */
    class PushMsgReq implements IPushMsgReq {

        /**
         * Constructs a new PushMsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPushMsgReq);

        /**
         * Creates a new PushMsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushMsgReq instance
         */
        public static create(properties?: pb.IPushMsgReq): pb.PushMsgReq;

        /**
         * Encodes the specified PushMsgReq message. Does not implicitly {@link pb.PushMsgReq.verify|verify} messages.
         * @param message PushMsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPushMsgReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushMsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushMsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PushMsgReq;
    }

    /** Properties of a PushMsgRes. */
    interface IPushMsgRes {
    }

    /** Represents a PushMsgRes. */
    class PushMsgRes implements IPushMsgRes {

        /**
         * Constructs a new PushMsgRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPushMsgRes);

        /**
         * Creates a new PushMsgRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushMsgRes instance
         */
        public static create(properties?: pb.IPushMsgRes): pb.PushMsgRes;

        /**
         * Encodes the specified PushMsgRes message. Does not implicitly {@link pb.PushMsgRes.verify|verify} messages.
         * @param message PushMsgRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPushMsgRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushMsgRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PushMsgRes;
    }

    /** Properties of a GetAppCoinReq. */
    interface IGetAppCoinReq {
    }

    /** Represents a GetAppCoinReq. */
    class GetAppCoinReq implements IGetAppCoinReq {

        /**
         * Constructs a new GetAppCoinReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetAppCoinReq);

        /**
         * Creates a new GetAppCoinReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAppCoinReq instance
         */
        public static create(properties?: pb.IGetAppCoinReq): pb.GetAppCoinReq;

        /**
         * Encodes the specified GetAppCoinReq message. Does not implicitly {@link pb.GetAppCoinReq.verify|verify} messages.
         * @param message GetAppCoinReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetAppCoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAppCoinReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAppCoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetAppCoinReq;
    }

    /** Properties of a GetAppCoinRes. */
    interface IGetAppCoinRes {

        /** GetAppCoinRes appCoin */
        appCoin?: (number|null);

        /** GetAppCoinRes maxExchangeCount */
        maxExchangeCount?: (number|null);

        /** GetAppCoinRes rate */
        rate?: (number|null);

        /** GetAppCoinRes levelExternCoin */
        levelExternCoin?: (number|null);

        /** GetAppCoinRes baseCoin */
        baseCoin?: (number|null);

        /** GetAppCoinRes code */
        code?: (number|null);
    }

    /** Represents a GetAppCoinRes. */
    class GetAppCoinRes implements IGetAppCoinRes {

        /**
         * Constructs a new GetAppCoinRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetAppCoinRes);

        /** GetAppCoinRes appCoin. */
        public appCoin: number;

        /** GetAppCoinRes maxExchangeCount. */
        public maxExchangeCount: number;

        /** GetAppCoinRes rate. */
        public rate: number;

        /** GetAppCoinRes levelExternCoin. */
        public levelExternCoin: number;

        /** GetAppCoinRes baseCoin. */
        public baseCoin: number;

        /** GetAppCoinRes code. */
        public code: number;

        /**
         * Creates a new GetAppCoinRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAppCoinRes instance
         */
        public static create(properties?: pb.IGetAppCoinRes): pb.GetAppCoinRes;

        /**
         * Encodes the specified GetAppCoinRes message. Does not implicitly {@link pb.GetAppCoinRes.verify|verify} messages.
         * @param message GetAppCoinRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetAppCoinRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAppCoinRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAppCoinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetAppCoinRes;
    }

    /** Properties of an ExchangeAppCoinReq. */
    interface IExchangeAppCoinReq {

        /** ExchangeAppCoinReq num */
        num?: (number|null);
    }

    /** Represents an ExchangeAppCoinReq. */
    class ExchangeAppCoinReq implements IExchangeAppCoinReq {

        /**
         * Constructs a new ExchangeAppCoinReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IExchangeAppCoinReq);

        /** ExchangeAppCoinReq num. */
        public num: number;

        /**
         * Creates a new ExchangeAppCoinReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeAppCoinReq instance
         */
        public static create(properties?: pb.IExchangeAppCoinReq): pb.ExchangeAppCoinReq;

        /**
         * Encodes the specified ExchangeAppCoinReq message. Does not implicitly {@link pb.ExchangeAppCoinReq.verify|verify} messages.
         * @param message ExchangeAppCoinReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IExchangeAppCoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeAppCoinReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeAppCoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ExchangeAppCoinReq;
    }

    /** Properties of an ExchangeAppCoinRes. */
    interface IExchangeAppCoinRes {

        /** ExchangeAppCoinRes num */
        num?: (number|null);

        /** ExchangeAppCoinRes newCoin */
        newCoin?: (number|null);

        /** ExchangeAppCoinRes addCoin */
        addCoin?: (number|null);

        /** ExchangeAppCoinRes code */
        code?: (number|null);
    }

    /** Represents an ExchangeAppCoinRes. */
    class ExchangeAppCoinRes implements IExchangeAppCoinRes {

        /**
         * Constructs a new ExchangeAppCoinRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IExchangeAppCoinRes);

        /** ExchangeAppCoinRes num. */
        public num: number;

        /** ExchangeAppCoinRes newCoin. */
        public newCoin: number;

        /** ExchangeAppCoinRes addCoin. */
        public addCoin: number;

        /** ExchangeAppCoinRes code. */
        public code: number;

        /**
         * Creates a new ExchangeAppCoinRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeAppCoinRes instance
         */
        public static create(properties?: pb.IExchangeAppCoinRes): pb.ExchangeAppCoinRes;

        /**
         * Encodes the specified ExchangeAppCoinRes message. Does not implicitly {@link pb.ExchangeAppCoinRes.verify|verify} messages.
         * @param message ExchangeAppCoinRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IExchangeAppCoinRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeAppCoinRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeAppCoinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ExchangeAppCoinRes;
    }

    /** Properties of a RaceGetReq. */
    interface IRaceGetReq {
    }

    /** Represents a RaceGetReq. */
    class RaceGetReq implements IRaceGetReq {

        /**
         * Constructs a new RaceGetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceGetReq);

        /**
         * Creates a new RaceGetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceGetReq instance
         */
        public static create(properties?: pb.IRaceGetReq): pb.RaceGetReq;

        /**
         * Encodes the specified RaceGetReq message. Does not implicitly {@link pb.RaceGetReq.verify|verify} messages.
         * @param message RaceGetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceGetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceGetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceGetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceGetReq;
    }

    /** Properties of a RaceGetRes. */
    interface IRaceGetRes {

        /** RaceGetRes leftFreeTicket */
        leftFreeTicket?: (number|null);

        /** RaceGetRes ticketRefreshTime */
        ticketRefreshTime?: (number|null);

        /** RaceGetRes leftBuyTicket */
        leftBuyTicket?: (number|null);

        /** RaceGetRes rateStatus */
        rateStatus?: (number|null);

        /** RaceGetRes winCount */
        winCount?: (number|null);

        /** RaceGetRes bestWinCount */
        bestWinCount?: (number|null);

        /** RaceGetRes leftShareCount */
        leftShareCount?: (number|null);

        /** RaceGetRes shareId */
        shareId?: (string|null);

        /** RaceGetRes ticketCoin */
        ticketCoin?: (number|null);

        /** RaceGetRes code */
        code?: (number|null);

        /** RaceGetRes playRaceFlag */
        playRaceFlag?: (boolean|null);

        /** RaceGetRes hagoCoin */
        hagoCoin?: (number|null);
    }

    /** Represents a RaceGetRes. */
    class RaceGetRes implements IRaceGetRes {

        /**
         * Constructs a new RaceGetRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceGetRes);

        /** RaceGetRes leftFreeTicket. */
        public leftFreeTicket: number;

        /** RaceGetRes ticketRefreshTime. */
        public ticketRefreshTime: number;

        /** RaceGetRes leftBuyTicket. */
        public leftBuyTicket: number;

        /** RaceGetRes rateStatus. */
        public rateStatus: number;

        /** RaceGetRes winCount. */
        public winCount: number;

        /** RaceGetRes bestWinCount. */
        public bestWinCount: number;

        /** RaceGetRes leftShareCount. */
        public leftShareCount: number;

        /** RaceGetRes shareId. */
        public shareId: string;

        /** RaceGetRes ticketCoin. */
        public ticketCoin: number;

        /** RaceGetRes code. */
        public code: number;

        /** RaceGetRes playRaceFlag. */
        public playRaceFlag: boolean;

        /** RaceGetRes hagoCoin. */
        public hagoCoin: number;

        /**
         * Creates a new RaceGetRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceGetRes instance
         */
        public static create(properties?: pb.IRaceGetRes): pb.RaceGetRes;

        /**
         * Encodes the specified RaceGetRes message. Does not implicitly {@link pb.RaceGetRes.verify|verify} messages.
         * @param message RaceGetRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceGetRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceGetRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceGetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceGetRes;
    }

    /** Properties of a RaceAwardMessage. */
    interface IRaceAwardMessage {

        /** RaceAwardMessage winCount */
        winCount?: (number|null);

        /** RaceAwardMessage items */
        items?: (pb.IRewardItem|null);
    }

    /** Represents a RaceAwardMessage. */
    class RaceAwardMessage implements IRaceAwardMessage {

        /**
         * Constructs a new RaceAwardMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceAwardMessage);

        /** RaceAwardMessage winCount. */
        public winCount: number;

        /** RaceAwardMessage items. */
        public items?: (pb.IRewardItem|null);

        /**
         * Creates a new RaceAwardMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceAwardMessage instance
         */
        public static create(properties?: pb.IRaceAwardMessage): pb.RaceAwardMessage;

        /**
         * Encodes the specified RaceAwardMessage message. Does not implicitly {@link pb.RaceAwardMessage.verify|verify} messages.
         * @param message RaceAwardMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceAwardMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceAwardMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceAwardMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceAwardMessage;
    }

    /** Properties of a RaceStartAndMatchReq. */
    interface IRaceStartAndMatchReq {
    }

    /** Represents a RaceStartAndMatchReq. */
    class RaceStartAndMatchReq implements IRaceStartAndMatchReq {

        /**
         * Constructs a new RaceStartAndMatchReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceStartAndMatchReq);

        /**
         * Creates a new RaceStartAndMatchReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceStartAndMatchReq instance
         */
        public static create(properties?: pb.IRaceStartAndMatchReq): pb.RaceStartAndMatchReq;

        /**
         * Encodes the specified RaceStartAndMatchReq message. Does not implicitly {@link pb.RaceStartAndMatchReq.verify|verify} messages.
         * @param message RaceStartAndMatchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceStartAndMatchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceStartAndMatchReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceStartAndMatchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceStartAndMatchReq;
    }

    /** Properties of a RaceStartAndMatchRes. */
    interface IRaceStartAndMatchRes {

        /** RaceStartAndMatchRes leftTicket */
        leftTicket?: (number|null);

        /** RaceStartAndMatchRes code */
        code?: (number|null);
    }

    /** Represents a RaceStartAndMatchRes. */
    class RaceStartAndMatchRes implements IRaceStartAndMatchRes {

        /**
         * Constructs a new RaceStartAndMatchRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceStartAndMatchRes);

        /** RaceStartAndMatchRes leftTicket. */
        public leftTicket: number;

        /** RaceStartAndMatchRes code. */
        public code: number;

        /**
         * Creates a new RaceStartAndMatchRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceStartAndMatchRes instance
         */
        public static create(properties?: pb.IRaceStartAndMatchRes): pb.RaceStartAndMatchRes;

        /**
         * Encodes the specified RaceStartAndMatchRes message. Does not implicitly {@link pb.RaceStartAndMatchRes.verify|verify} messages.
         * @param message RaceStartAndMatchRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceStartAndMatchRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceStartAndMatchRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceStartAndMatchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceStartAndMatchRes;
    }

    /** Properties of a RaceMatchReq. */
    interface IRaceMatchReq {
    }

    /** Represents a RaceMatchReq. */
    class RaceMatchReq implements IRaceMatchReq {

        /**
         * Constructs a new RaceMatchReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceMatchReq);

        /**
         * Creates a new RaceMatchReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceMatchReq instance
         */
        public static create(properties?: pb.IRaceMatchReq): pb.RaceMatchReq;

        /**
         * Encodes the specified RaceMatchReq message. Does not implicitly {@link pb.RaceMatchReq.verify|verify} messages.
         * @param message RaceMatchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceMatchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceMatchReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceMatchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceMatchReq;
    }

    /** Properties of a RaceMatchRes. */
    interface IRaceMatchRes {

        /** RaceMatchRes code */
        code?: (number|null);
    }

    /** Represents a RaceMatchRes. */
    class RaceMatchRes implements IRaceMatchRes {

        /**
         * Constructs a new RaceMatchRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceMatchRes);

        /** RaceMatchRes code. */
        public code: number;

        /**
         * Creates a new RaceMatchRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceMatchRes instance
         */
        public static create(properties?: pb.IRaceMatchRes): pb.RaceMatchRes;

        /**
         * Encodes the specified RaceMatchRes message. Does not implicitly {@link pb.RaceMatchRes.verify|verify} messages.
         * @param message RaceMatchRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceMatchRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceMatchRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceMatchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceMatchRes;
    }

    /** Properties of a RaceMatchSuccessRes. */
    interface IRaceMatchSuccessRes {

        /** RaceMatchSuccessRes code */
        code?: (number|null);

        /** RaceMatchSuccessRes roomId */
        roomId?: (string|null);

        /** RaceMatchSuccessRes timestamp */
        timestamp?: (number|null);

        /** RaceMatchSuccessRes opt */
        opt?: (string|null);

        /** RaceMatchSuccessRes sign */
        sign?: (string|null);

        /** RaceMatchSuccessRes problemUid */
        problemUid?: (string|null);

        /** RaceMatchSuccessRes gameType */
        gameType?: (number|null);

        /** RaceMatchSuccessRes otherWinCount */
        otherWinCount?: (number|null);

        /** RaceMatchSuccessRes sn */
        sn?: (string|null);
    }

    /** Represents a RaceMatchSuccessRes. */
    class RaceMatchSuccessRes implements IRaceMatchSuccessRes {

        /**
         * Constructs a new RaceMatchSuccessRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceMatchSuccessRes);

        /** RaceMatchSuccessRes code. */
        public code: number;

        /** RaceMatchSuccessRes roomId. */
        public roomId: string;

        /** RaceMatchSuccessRes timestamp. */
        public timestamp: number;

        /** RaceMatchSuccessRes opt. */
        public opt: string;

        /** RaceMatchSuccessRes sign. */
        public sign: string;

        /** RaceMatchSuccessRes problemUid. */
        public problemUid: string;

        /** RaceMatchSuccessRes gameType. */
        public gameType: number;

        /** RaceMatchSuccessRes otherWinCount. */
        public otherWinCount: number;

        /** RaceMatchSuccessRes sn. */
        public sn: string;

        /**
         * Creates a new RaceMatchSuccessRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceMatchSuccessRes instance
         */
        public static create(properties?: pb.IRaceMatchSuccessRes): pb.RaceMatchSuccessRes;

        /**
         * Encodes the specified RaceMatchSuccessRes message. Does not implicitly {@link pb.RaceMatchSuccessRes.verify|verify} messages.
         * @param message RaceMatchSuccessRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceMatchSuccessRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceMatchSuccessRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceMatchSuccessRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceMatchSuccessRes;
    }

    /** Properties of a RaceShareAwaidTicketReq. */
    interface IRaceShareAwaidTicketReq {

        /** RaceShareAwaidTicketReq shareId */
        shareId?: (string|null);
    }

    /** Represents a RaceShareAwaidTicketReq. */
    class RaceShareAwaidTicketReq implements IRaceShareAwaidTicketReq {

        /**
         * Constructs a new RaceShareAwaidTicketReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceShareAwaidTicketReq);

        /** RaceShareAwaidTicketReq shareId. */
        public shareId: string;

        /**
         * Creates a new RaceShareAwaidTicketReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceShareAwaidTicketReq instance
         */
        public static create(properties?: pb.IRaceShareAwaidTicketReq): pb.RaceShareAwaidTicketReq;

        /**
         * Encodes the specified RaceShareAwaidTicketReq message. Does not implicitly {@link pb.RaceShareAwaidTicketReq.verify|verify} messages.
         * @param message RaceShareAwaidTicketReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceShareAwaidTicketReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceShareAwaidTicketReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceShareAwaidTicketReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceShareAwaidTicketReq;
    }

    /** Properties of a RaceShareAwaidTicketRes. */
    interface IRaceShareAwaidTicketRes {

        /** RaceShareAwaidTicketRes leftFreeTicket */
        leftFreeTicket?: (number|null);

        /** RaceShareAwaidTicketRes ticketRefreshTime */
        ticketRefreshTime?: (number|null);

        /** RaceShareAwaidTicketRes leftBuyTicket */
        leftBuyTicket?: (number|null);

        /** RaceShareAwaidTicketRes rateStatus */
        rateStatus?: (number|null);

        /** RaceShareAwaidTicketRes winCount */
        winCount?: (number|null);

        /** RaceShareAwaidTicketRes bestWinCount */
        bestWinCount?: (number|null);

        /** RaceShareAwaidTicketRes leftShareCount */
        leftShareCount?: (number|null);

        /** RaceShareAwaidTicketRes newShareId */
        newShareId?: (string|null);

        /** RaceShareAwaidTicketRes shareId */
        shareId?: (string|null);

        /** RaceShareAwaidTicketRes code */
        code?: (number|null);
    }

    /** Represents a RaceShareAwaidTicketRes. */
    class RaceShareAwaidTicketRes implements IRaceShareAwaidTicketRes {

        /**
         * Constructs a new RaceShareAwaidTicketRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceShareAwaidTicketRes);

        /** RaceShareAwaidTicketRes leftFreeTicket. */
        public leftFreeTicket: number;

        /** RaceShareAwaidTicketRes ticketRefreshTime. */
        public ticketRefreshTime: number;

        /** RaceShareAwaidTicketRes leftBuyTicket. */
        public leftBuyTicket: number;

        /** RaceShareAwaidTicketRes rateStatus. */
        public rateStatus: number;

        /** RaceShareAwaidTicketRes winCount. */
        public winCount: number;

        /** RaceShareAwaidTicketRes bestWinCount. */
        public bestWinCount: number;

        /** RaceShareAwaidTicketRes leftShareCount. */
        public leftShareCount: number;

        /** RaceShareAwaidTicketRes newShareId. */
        public newShareId: string;

        /** RaceShareAwaidTicketRes shareId. */
        public shareId: string;

        /** RaceShareAwaidTicketRes code. */
        public code: number;

        /**
         * Creates a new RaceShareAwaidTicketRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceShareAwaidTicketRes instance
         */
        public static create(properties?: pb.IRaceShareAwaidTicketRes): pb.RaceShareAwaidTicketRes;

        /**
         * Encodes the specified RaceShareAwaidTicketRes message. Does not implicitly {@link pb.RaceShareAwaidTicketRes.verify|verify} messages.
         * @param message RaceShareAwaidTicketRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceShareAwaidTicketRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceShareAwaidTicketRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceShareAwaidTicketRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceShareAwaidTicketRes;
    }

    /** Properties of a RaceGetFreeTicketReq. */
    interface IRaceGetFreeTicketReq {
    }

    /** Represents a RaceGetFreeTicketReq. */
    class RaceGetFreeTicketReq implements IRaceGetFreeTicketReq {

        /**
         * Constructs a new RaceGetFreeTicketReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceGetFreeTicketReq);

        /**
         * Creates a new RaceGetFreeTicketReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceGetFreeTicketReq instance
         */
        public static create(properties?: pb.IRaceGetFreeTicketReq): pb.RaceGetFreeTicketReq;

        /**
         * Encodes the specified RaceGetFreeTicketReq message. Does not implicitly {@link pb.RaceGetFreeTicketReq.verify|verify} messages.
         * @param message RaceGetFreeTicketReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceGetFreeTicketReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceGetFreeTicketReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceGetFreeTicketReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceGetFreeTicketReq;
    }

    /** Properties of a RaceGetFreeTicketRes. */
    interface IRaceGetFreeTicketRes {

        /** RaceGetFreeTicketRes leftFreeTicket */
        leftFreeTicket?: (number|null);

        /** RaceGetFreeTicketRes ticketRefreshTime */
        ticketRefreshTime?: (number|null);

        /** RaceGetFreeTicketRes code */
        code?: (number|null);
    }

    /** Represents a RaceGetFreeTicketRes. */
    class RaceGetFreeTicketRes implements IRaceGetFreeTicketRes {

        /**
         * Constructs a new RaceGetFreeTicketRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceGetFreeTicketRes);

        /** RaceGetFreeTicketRes leftFreeTicket. */
        public leftFreeTicket: number;

        /** RaceGetFreeTicketRes ticketRefreshTime. */
        public ticketRefreshTime: number;

        /** RaceGetFreeTicketRes code. */
        public code: number;

        /**
         * Creates a new RaceGetFreeTicketRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceGetFreeTicketRes instance
         */
        public static create(properties?: pb.IRaceGetFreeTicketRes): pb.RaceGetFreeTicketRes;

        /**
         * Encodes the specified RaceGetFreeTicketRes message. Does not implicitly {@link pb.RaceGetFreeTicketRes.verify|verify} messages.
         * @param message RaceGetFreeTicketRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceGetFreeTicketRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceGetFreeTicketRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceGetFreeTicketRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceGetFreeTicketRes;
    }

    /** Properties of a RaceShareRebornReq. */
    interface IRaceShareRebornReq {

        /** RaceShareRebornReq shareId */
        shareId?: (string|null);
    }

    /** Represents a RaceShareRebornReq. */
    class RaceShareRebornReq implements IRaceShareRebornReq {

        /**
         * Constructs a new RaceShareRebornReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceShareRebornReq);

        /** RaceShareRebornReq shareId. */
        public shareId: string;

        /**
         * Creates a new RaceShareRebornReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceShareRebornReq instance
         */
        public static create(properties?: pb.IRaceShareRebornReq): pb.RaceShareRebornReq;

        /**
         * Encodes the specified RaceShareRebornReq message. Does not implicitly {@link pb.RaceShareRebornReq.verify|verify} messages.
         * @param message RaceShareRebornReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceShareRebornReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceShareRebornReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceShareRebornReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceShareRebornReq;
    }

    /** Properties of a RaceShareRebornRes. */
    interface IRaceShareRebornRes {

        /** RaceShareRebornRes shareId */
        shareId?: (string|null);

        /** RaceShareRebornRes code */
        code?: (number|null);
    }

    /** Represents a RaceShareRebornRes. */
    class RaceShareRebornRes implements IRaceShareRebornRes {

        /**
         * Constructs a new RaceShareRebornRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceShareRebornRes);

        /** RaceShareRebornRes shareId. */
        public shareId: string;

        /** RaceShareRebornRes code. */
        public code: number;

        /**
         * Creates a new RaceShareRebornRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceShareRebornRes instance
         */
        public static create(properties?: pb.IRaceShareRebornRes): pb.RaceShareRebornRes;

        /**
         * Encodes the specified RaceShareRebornRes message. Does not implicitly {@link pb.RaceShareRebornRes.verify|verify} messages.
         * @param message RaceShareRebornRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceShareRebornRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceShareRebornRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceShareRebornRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceShareRebornRes;
    }

    /** Properties of a RaceBuyTicketReq. */
    interface IRaceBuyTicketReq {

        /** RaceBuyTicketReq num */
        num?: (number|null);
    }

    /** Represents a RaceBuyTicketReq. */
    class RaceBuyTicketReq implements IRaceBuyTicketReq {

        /**
         * Constructs a new RaceBuyTicketReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceBuyTicketReq);

        /** RaceBuyTicketReq num. */
        public num: number;

        /**
         * Creates a new RaceBuyTicketReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceBuyTicketReq instance
         */
        public static create(properties?: pb.IRaceBuyTicketReq): pb.RaceBuyTicketReq;

        /**
         * Encodes the specified RaceBuyTicketReq message. Does not implicitly {@link pb.RaceBuyTicketReq.verify|verify} messages.
         * @param message RaceBuyTicketReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceBuyTicketReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceBuyTicketReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceBuyTicketReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceBuyTicketReq;
    }

    /** Properties of a RaceBuyTicketRes. */
    interface IRaceBuyTicketRes {

        /** RaceBuyTicketRes num */
        num?: (number|null);

        /** RaceBuyTicketRes ticketNum */
        ticketNum?: (number|null);

        /** RaceBuyTicketRes code */
        code?: (number|null);
    }

    /** Represents a RaceBuyTicketRes. */
    class RaceBuyTicketRes implements IRaceBuyTicketRes {

        /**
         * Constructs a new RaceBuyTicketRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRaceBuyTicketRes);

        /** RaceBuyTicketRes num. */
        public num: number;

        /** RaceBuyTicketRes ticketNum. */
        public ticketNum: number;

        /** RaceBuyTicketRes code. */
        public code: number;

        /**
         * Creates a new RaceBuyTicketRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceBuyTicketRes instance
         */
        public static create(properties?: pb.IRaceBuyTicketRes): pb.RaceBuyTicketRes;

        /**
         * Encodes the specified RaceBuyTicketRes message. Does not implicitly {@link pb.RaceBuyTicketRes.verify|verify} messages.
         * @param message RaceBuyTicketRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRaceBuyTicketRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RaceBuyTicketRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceBuyTicketRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RaceBuyTicketRes;
    }

    /** Properties of an AiGetListReq. */
    interface IAiGetListReq {
    }

    /** Represents an AiGetListReq. */
    class AiGetListReq implements IAiGetListReq {

        /**
         * Constructs a new AiGetListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAiGetListReq);

        /**
         * Creates a new AiGetListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AiGetListReq instance
         */
        public static create(properties?: pb.IAiGetListReq): pb.AiGetListReq;

        /**
         * Encodes the specified AiGetListReq message. Does not implicitly {@link pb.AiGetListReq.verify|verify} messages.
         * @param message AiGetListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAiGetListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AiGetListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AiGetListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AiGetListReq;
    }

    /** Properties of an AiGetListRes. */
    interface IAiGetListRes {

        /** AiGetListRes max */
        max?: (number|null);

        /** AiGetListRes min */
        min?: (number|null);
    }

    /** Represents an AiGetListRes. */
    class AiGetListRes implements IAiGetListRes {

        /**
         * Constructs a new AiGetListRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAiGetListRes);

        /** AiGetListRes max. */
        public max: number;

        /** AiGetListRes min. */
        public min: number;

        /**
         * Creates a new AiGetListRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AiGetListRes instance
         */
        public static create(properties?: pb.IAiGetListRes): pb.AiGetListRes;

        /**
         * Encodes the specified AiGetListRes message. Does not implicitly {@link pb.AiGetListRes.verify|verify} messages.
         * @param message AiGetListRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAiGetListRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AiGetListRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AiGetListRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AiGetListRes;
    }

    /** Properties of a GetGlobalExchangeReq. */
    interface IGetGlobalExchangeReq {

        /** GetGlobalExchangeReq limit */
        limit?: (number|null);

        /** GetGlobalExchangeReq offset */
        offset?: (number|null);

        /** GetGlobalExchangeReq is_ludo_challenge_open */
        is_ludo_challenge_open?: (boolean|null);

        /** GetGlobalExchangeReq x_lang */
        x_lang?: (string|null);
    }

    /** Represents a GetGlobalExchangeReq. */
    class GetGlobalExchangeReq implements IGetGlobalExchangeReq {

        /**
         * Constructs a new GetGlobalExchangeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetGlobalExchangeReq);

        /** GetGlobalExchangeReq limit. */
        public limit: number;

        /** GetGlobalExchangeReq offset. */
        public offset: number;

        /** GetGlobalExchangeReq is_ludo_challenge_open. */
        public is_ludo_challenge_open: boolean;

        /** GetGlobalExchangeReq x_lang. */
        public x_lang: string;

        /**
         * Creates a new GetGlobalExchangeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGlobalExchangeReq instance
         */
        public static create(properties?: pb.IGetGlobalExchangeReq): pb.GetGlobalExchangeReq;

        /**
         * Encodes the specified GetGlobalExchangeReq message. Does not implicitly {@link pb.GetGlobalExchangeReq.verify|verify} messages.
         * @param message GetGlobalExchangeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetGlobalExchangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGlobalExchangeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGlobalExchangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetGlobalExchangeReq;
    }

    /** Properties of a GetGlobalExchangeRes. */
    interface IGetGlobalExchangeRes {

        /** GetGlobalExchangeRes resCode */
        resCode?: (number|null);

        /** GetGlobalExchangeRes reMsg */
        reMsg?: (string|null);

        /** GetGlobalExchangeRes exchangeLogPB */
        exchangeLogPB?: (pb.IExchangeLogPB[]|null);
    }

    /** Represents a GetGlobalExchangeRes. */
    class GetGlobalExchangeRes implements IGetGlobalExchangeRes {

        /**
         * Constructs a new GetGlobalExchangeRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetGlobalExchangeRes);

        /** GetGlobalExchangeRes resCode. */
        public resCode: number;

        /** GetGlobalExchangeRes reMsg. */
        public reMsg: string;

        /** GetGlobalExchangeRes exchangeLogPB. */
        public exchangeLogPB: pb.IExchangeLogPB[];

        /**
         * Creates a new GetGlobalExchangeRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGlobalExchangeRes instance
         */
        public static create(properties?: pb.IGetGlobalExchangeRes): pb.GetGlobalExchangeRes;

        /**
         * Encodes the specified GetGlobalExchangeRes message. Does not implicitly {@link pb.GetGlobalExchangeRes.verify|verify} messages.
         * @param message GetGlobalExchangeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetGlobalExchangeRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGlobalExchangeRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGlobalExchangeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetGlobalExchangeRes;
    }

    /** Properties of an ExchangeLogPB. */
    interface IExchangeLogPB {

        /** ExchangeLogPB nick */
        nick?: (string|null);

        /** ExchangeLogPB head_url */
        head_url?: (string|null);

        /** ExchangeLogPB cnt */
        cnt?: (number|null);

        /** ExchangeLogPB item_id */
        item_id?: (number|null);

        /** ExchangeLogPB type */
        type?: (number|null);

        /** ExchangeLogPB name */
        name?: (string|null);

        /** ExchangeLogPB mall_type */
        mall_type?: (number|null);

        /** ExchangeLogPB txt */
        txt?: (string|null);
    }

    /** Represents an ExchangeLogPB. */
    class ExchangeLogPB implements IExchangeLogPB {

        /**
         * Constructs a new ExchangeLogPB.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IExchangeLogPB);

        /** ExchangeLogPB nick. */
        public nick: string;

        /** ExchangeLogPB head_url. */
        public head_url: string;

        /** ExchangeLogPB cnt. */
        public cnt: number;

        /** ExchangeLogPB item_id. */
        public item_id: number;

        /** ExchangeLogPB type. */
        public type: number;

        /** ExchangeLogPB name. */
        public name: string;

        /** ExchangeLogPB mall_type. */
        public mall_type: number;

        /** ExchangeLogPB txt. */
        public txt: string;

        /**
         * Creates a new ExchangeLogPB instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeLogPB instance
         */
        public static create(properties?: pb.IExchangeLogPB): pb.ExchangeLogPB;

        /**
         * Encodes the specified ExchangeLogPB message. Does not implicitly {@link pb.ExchangeLogPB.verify|verify} messages.
         * @param message ExchangeLogPB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IExchangeLogPB, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeLogPB message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeLogPB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ExchangeLogPB;
    }

    /** Properties of a TaskBoxReq. */
    interface ITaskBoxReq {
    }

    /** Represents a TaskBoxReq. */
    class TaskBoxReq implements ITaskBoxReq {

        /**
         * Constructs a new TaskBoxReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskBoxReq);

        /**
         * Creates a new TaskBoxReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskBoxReq instance
         */
        public static create(properties?: pb.ITaskBoxReq): pb.TaskBoxReq;

        /**
         * Encodes the specified TaskBoxReq message. Does not implicitly {@link pb.TaskBoxReq.verify|verify} messages.
         * @param message TaskBoxReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskBoxReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskBoxReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskBoxReq;
    }

    /** Properties of a TaskBoxRes. */
    interface ITaskBoxRes {

        /** TaskBoxRes curPoint */
        curPoint?: (number|null);

        /** TaskBoxRes recBoxes */
        recBoxes?: (number[]|null);

        /** TaskBoxRes boxes */
        boxes?: (pb.ITaskBox[]|null);
    }

    /** Represents a TaskBoxRes. */
    class TaskBoxRes implements ITaskBoxRes {

        /**
         * Constructs a new TaskBoxRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskBoxRes);

        /** TaskBoxRes curPoint. */
        public curPoint: number;

        /** TaskBoxRes recBoxes. */
        public recBoxes: number[];

        /** TaskBoxRes boxes. */
        public boxes: pb.ITaskBox[];

        /**
         * Creates a new TaskBoxRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskBoxRes instance
         */
        public static create(properties?: pb.ITaskBoxRes): pb.TaskBoxRes;

        /**
         * Encodes the specified TaskBoxRes message. Does not implicitly {@link pb.TaskBoxRes.verify|verify} messages.
         * @param message TaskBoxRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskBoxRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskBoxRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskBoxRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskBoxRes;
    }

    /** Properties of a TaskBox. */
    interface ITaskBox {

        /** TaskBox box */
        box?: (number|null);

        /** TaskBox item */
        item?: (pb.IRewardItem[]|null);

        /** TaskBox point */
        point?: (number|null);
    }

    /** Represents a TaskBox. */
    class TaskBox implements ITaskBox {

        /**
         * Constructs a new TaskBox.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskBox);

        /** TaskBox box. */
        public box: number;

        /** TaskBox item. */
        public item: pb.IRewardItem[];

        /** TaskBox point. */
        public point: number;

        /**
         * Creates a new TaskBox instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskBox instance
         */
        public static create(properties?: pb.ITaskBox): pb.TaskBox;

        /**
         * Encodes the specified TaskBox message. Does not implicitly {@link pb.TaskBox.verify|verify} messages.
         * @param message TaskBox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskBox message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskBox;
    }

    /** Properties of a TaskBoxReceiveReq. */
    interface ITaskBoxReceiveReq {

        /** TaskBoxReceiveReq box */
        box?: (number|null);
    }

    /** Represents a TaskBoxReceiveReq. */
    class TaskBoxReceiveReq implements ITaskBoxReceiveReq {

        /**
         * Constructs a new TaskBoxReceiveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskBoxReceiveReq);

        /** TaskBoxReceiveReq box. */
        public box: number;

        /**
         * Creates a new TaskBoxReceiveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskBoxReceiveReq instance
         */
        public static create(properties?: pb.ITaskBoxReceiveReq): pb.TaskBoxReceiveReq;

        /**
         * Encodes the specified TaskBoxReceiveReq message. Does not implicitly {@link pb.TaskBoxReceiveReq.verify|verify} messages.
         * @param message TaskBoxReceiveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskBoxReceiveReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskBoxReceiveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskBoxReceiveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskBoxReceiveReq;
    }

    /** Properties of a TaskBoxReceiveRes. */
    interface ITaskBoxReceiveRes {

        /** TaskBoxReceiveRes box */
        box?: (number|null);

        /** TaskBoxReceiveRes item */
        item?: (pb.IRewardItem[]|null);

        /** TaskBoxReceiveRes code */
        code?: (number|null);
    }

    /** Represents a TaskBoxReceiveRes. */
    class TaskBoxReceiveRes implements ITaskBoxReceiveRes {

        /**
         * Constructs a new TaskBoxReceiveRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITaskBoxReceiveRes);

        /** TaskBoxReceiveRes box. */
        public box: number;

        /** TaskBoxReceiveRes item. */
        public item: pb.IRewardItem[];

        /** TaskBoxReceiveRes code. */
        public code: number;

        /**
         * Creates a new TaskBoxReceiveRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskBoxReceiveRes instance
         */
        public static create(properties?: pb.ITaskBoxReceiveRes): pb.TaskBoxReceiveRes;

        /**
         * Encodes the specified TaskBoxReceiveRes message. Does not implicitly {@link pb.TaskBoxReceiveRes.verify|verify} messages.
         * @param message TaskBoxReceiveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITaskBoxReceiveRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskBoxReceiveRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskBoxReceiveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TaskBoxReceiveRes;
    }

    /** Properties of a SevenDayConfig. */
    interface ISevenDayConfig {

        /** SevenDayConfig id */
        id?: (number|null);

        /** SevenDayConfig reward */
        reward?: (pb.INewReward|null);
    }

    /** Represents a SevenDayConfig. */
    class SevenDayConfig implements ISevenDayConfig {

        /**
         * Constructs a new SevenDayConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISevenDayConfig);

        /** SevenDayConfig id. */
        public id: number;

        /** SevenDayConfig reward. */
        public reward?: (pb.INewReward|null);

        /**
         * Creates a new SevenDayConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SevenDayConfig instance
         */
        public static create(properties?: pb.ISevenDayConfig): pb.SevenDayConfig;

        /**
         * Encodes the specified SevenDayConfig message. Does not implicitly {@link pb.SevenDayConfig.verify|verify} messages.
         * @param message SevenDayConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISevenDayConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SevenDayConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SevenDayConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SevenDayConfig;
    }

    /** Properties of a NewReward. */
    interface INewReward {

        /** NewReward itemId */
        itemId?: (number|null);

        /**
         * 0 货币
         * 1 皮肤
         */
        type?: (number|null);

        /**
         * int ITEM_TYPE_COIN = 0; //金币数值
         * int ITEM_TYPE_CRYSTAL = 1;//皮肤币数值
         * int ITEM_TYPE_HAGO_COIN = 2;//hago金币
         * int ITEM_TYPE_DIAMOND = 3;//钻石数值
         * int ITEM_TYPE_GHOST_TICKET = 4;//鬼节模式钥匙
         *
         * int SKIN_TYPE_RICE = 1; // 骰子类型皮肤
         * int SKIN_TYPE_CHESS = 0; // 棋子类型皮肤
         * int SKIN_TYPE_HUAWEN = 2; // 花纹类型皮肤
         */
        itemType?: (number|null);

        /** NewReward itemNum */
        itemNum?: (number|null);
    }

    /** Represents a NewReward. */
    class NewReward implements INewReward {

        /**
         * Constructs a new NewReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.INewReward);

        /** NewReward itemId. */
        public itemId: number;

        /**
         * 0 货币
         * 1 皮肤
         */
        public type: number;

        /**
         * int ITEM_TYPE_COIN = 0; //金币数值
         * int ITEM_TYPE_CRYSTAL = 1;//皮肤币数值
         * int ITEM_TYPE_HAGO_COIN = 2;//hago金币
         * int ITEM_TYPE_DIAMOND = 3;//钻石数值
         * int ITEM_TYPE_GHOST_TICKET = 4;//鬼节模式钥匙
         *
         * int SKIN_TYPE_RICE = 1; // 骰子类型皮肤
         * int SKIN_TYPE_CHESS = 0; // 棋子类型皮肤
         * int SKIN_TYPE_HUAWEN = 2; // 花纹类型皮肤
         */
        public itemType: number;

        /** NewReward itemNum. */
        public itemNum: number;

        /**
         * Creates a new NewReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewReward instance
         */
        public static create(properties?: pb.INewReward): pb.NewReward;

        /**
         * Encodes the specified NewReward message. Does not implicitly {@link pb.NewReward.verify|verify} messages.
         * @param message NewReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.INewReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.NewReward;
    }

    /** Properties of a SevenDayInfo. */
    interface ISevenDayInfo {

        /** SevenDayInfo sevenDayInfo */
        sevenDayInfo?: (pb.ISevenDayConfig|null);

        /** SevenDayInfo reward */
        reward?: (boolean|null);
    }

    /** Represents a SevenDayInfo. */
    class SevenDayInfo implements ISevenDayInfo {

        /**
         * Constructs a new SevenDayInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISevenDayInfo);

        /** SevenDayInfo sevenDayInfo. */
        public sevenDayInfo?: (pb.ISevenDayConfig|null);

        /** SevenDayInfo reward. */
        public reward: boolean;

        /**
         * Creates a new SevenDayInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SevenDayInfo instance
         */
        public static create(properties?: pb.ISevenDayInfo): pb.SevenDayInfo;

        /**
         * Encodes the specified SevenDayInfo message. Does not implicitly {@link pb.SevenDayInfo.verify|verify} messages.
         * @param message SevenDayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISevenDayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SevenDayInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SevenDayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SevenDayInfo;
    }

    /** Properties of a SevenDayInfoReq. */
    interface ISevenDayInfoReq {
    }

    /** Represents a SevenDayInfoReq. */
    class SevenDayInfoReq implements ISevenDayInfoReq {

        /**
         * Constructs a new SevenDayInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISevenDayInfoReq);

        /**
         * Creates a new SevenDayInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SevenDayInfoReq instance
         */
        public static create(properties?: pb.ISevenDayInfoReq): pb.SevenDayInfoReq;

        /**
         * Encodes the specified SevenDayInfoReq message. Does not implicitly {@link pb.SevenDayInfoReq.verify|verify} messages.
         * @param message SevenDayInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISevenDayInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SevenDayInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SevenDayInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SevenDayInfoReq;
    }

    /** Properties of a SevenDayInfoRes. */
    interface ISevenDayInfoRes {

        /** SevenDayInfoRes info */
        info?: (pb.ISevenDayInfo[]|null);

        /** SevenDayInfoRes freshTime */
        freshTime?: (number|null);

        /** SevenDayInfoRes lastDay */
        lastDay?: (number|null);
    }

    /** Represents a SevenDayInfoRes. */
    class SevenDayInfoRes implements ISevenDayInfoRes {

        /**
         * Constructs a new SevenDayInfoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISevenDayInfoRes);

        /** SevenDayInfoRes info. */
        public info: pb.ISevenDayInfo[];

        /** SevenDayInfoRes freshTime. */
        public freshTime: number;

        /** SevenDayInfoRes lastDay. */
        public lastDay: number;

        /**
         * Creates a new SevenDayInfoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SevenDayInfoRes instance
         */
        public static create(properties?: pb.ISevenDayInfoRes): pb.SevenDayInfoRes;

        /**
         * Encodes the specified SevenDayInfoRes message. Does not implicitly {@link pb.SevenDayInfoRes.verify|verify} messages.
         * @param message SevenDayInfoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISevenDayInfoRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SevenDayInfoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SevenDayInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SevenDayInfoRes;
    }

    /** Properties of a SelectRewardReq. */
    interface ISelectRewardReq {

        /** SelectRewardReq id */
        id?: (number|null);
    }

    /** Represents a SelectRewardReq. */
    class SelectRewardReq implements ISelectRewardReq {

        /**
         * Constructs a new SelectRewardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISelectRewardReq);

        /** SelectRewardReq id. */
        public id: number;

        /**
         * Creates a new SelectRewardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SelectRewardReq instance
         */
        public static create(properties?: pb.ISelectRewardReq): pb.SelectRewardReq;

        /**
         * Encodes the specified SelectRewardReq message. Does not implicitly {@link pb.SelectRewardReq.verify|verify} messages.
         * @param message SelectRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISelectRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SelectRewardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SelectRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SelectRewardReq;
    }

    /** Properties of a SelectRewardRes. */
    interface ISelectRewardRes {

        /** SelectRewardRes id */
        id?: (number|null);

        /** SelectRewardRes code */
        code?: (number|null);

        /** SelectRewardRes reward */
        reward?: (pb.INewReward|null);

        /** SelectRewardRes change */
        change?: (boolean|null);
    }

    /** Represents a SelectRewardRes. */
    class SelectRewardRes implements ISelectRewardRes {

        /**
         * Constructs a new SelectRewardRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISelectRewardRes);

        /** SelectRewardRes id. */
        public id: number;

        /** SelectRewardRes code. */
        public code: number;

        /** SelectRewardRes reward. */
        public reward?: (pb.INewReward|null);

        /** SelectRewardRes change. */
        public change: boolean;

        /**
         * Creates a new SelectRewardRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SelectRewardRes instance
         */
        public static create(properties?: pb.ISelectRewardRes): pb.SelectRewardRes;

        /**
         * Encodes the specified SelectRewardRes message. Does not implicitly {@link pb.SelectRewardRes.verify|verify} messages.
         * @param message SelectRewardRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISelectRewardRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SelectRewardRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SelectRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SelectRewardRes;
    }

    /** Properties of a Match2v2Req. */
    interface IMatch2v2Req {

        /** Match2v2Req grade */
        grade?: (number|null);
    }

    /** Represents a Match2v2Req. */
    class Match2v2Req implements IMatch2v2Req {

        /**
         * Constructs a new Match2v2Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatch2v2Req);

        /** Match2v2Req grade. */
        public grade: number;

        /**
         * Creates a new Match2v2Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match2v2Req instance
         */
        public static create(properties?: pb.IMatch2v2Req): pb.Match2v2Req;

        /**
         * Encodes the specified Match2v2Req message. Does not implicitly {@link pb.Match2v2Req.verify|verify} messages.
         * @param message Match2v2Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatch2v2Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match2v2Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match2v2Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Match2v2Req;
    }

    /** Properties of a Match2v2Res. */
    interface IMatch2v2Res {

        /** Match2v2Res grade */
        grade?: (number|null);

        /** Match2v2Res code */
        code?: (number|null);
    }

    /** Represents a Match2v2Res. */
    class Match2v2Res implements IMatch2v2Res {

        /**
         * Constructs a new Match2v2Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatch2v2Res);

        /** Match2v2Res grade. */
        public grade: number;

        /** Match2v2Res code. */
        public code: number;

        /**
         * Creates a new Match2v2Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match2v2Res instance
         */
        public static create(properties?: pb.IMatch2v2Res): pb.Match2v2Res;

        /**
         * Encodes the specified Match2v2Res message. Does not implicitly {@link pb.Match2v2Res.verify|verify} messages.
         * @param message Match2v2Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatch2v2Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match2v2Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match2v2Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Match2v2Res;
    }

    /** Properties of a Match2v2SuccessRes. */
    interface IMatch2v2SuccessRes {

        /** Match2v2SuccessRes code */
        code?: (number|null);

        /** Match2v2SuccessRes roomId */
        roomId?: (string|null);

        /** Match2v2SuccessRes timestamp */
        timestamp?: (number|null);

        /** Match2v2SuccessRes opt */
        opt?: (string|null);

        /** Match2v2SuccessRes sign */
        sign?: (string|null);

        /** Match2v2SuccessRes grade */
        grade?: (number|null);

        /** Match2v2SuccessRes team1 */
        team1?: (string[]|null);

        /** Match2v2SuccessRes team2 */
        team2?: (string[]|null);

        /** Match2v2SuccessRes sn */
        sn?: (string|null);
    }

    /** Represents a Match2v2SuccessRes. */
    class Match2v2SuccessRes implements IMatch2v2SuccessRes {

        /**
         * Constructs a new Match2v2SuccessRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatch2v2SuccessRes);

        /** Match2v2SuccessRes code. */
        public code: number;

        /** Match2v2SuccessRes roomId. */
        public roomId: string;

        /** Match2v2SuccessRes timestamp. */
        public timestamp: number;

        /** Match2v2SuccessRes opt. */
        public opt: string;

        /** Match2v2SuccessRes sign. */
        public sign: string;

        /** Match2v2SuccessRes grade. */
        public grade: number;

        /** Match2v2SuccessRes team1. */
        public team1: string[];

        /** Match2v2SuccessRes team2. */
        public team2: string[];

        /** Match2v2SuccessRes sn. */
        public sn: string;

        /**
         * Creates a new Match2v2SuccessRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match2v2SuccessRes instance
         */
        public static create(properties?: pb.IMatch2v2SuccessRes): pb.Match2v2SuccessRes;

        /**
         * Encodes the specified Match2v2SuccessRes message. Does not implicitly {@link pb.Match2v2SuccessRes.verify|verify} messages.
         * @param message Match2v2SuccessRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatch2v2SuccessRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match2v2SuccessRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match2v2SuccessRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Match2v2SuccessRes;
    }

    /** Properties of a Match2v2EnterRoomReq. */
    interface IMatch2v2EnterRoomReq {

        /** Match2v2EnterRoomReq roomId */
        roomId?: (string|null);
    }

    /** Represents a Match2v2EnterRoomReq. */
    class Match2v2EnterRoomReq implements IMatch2v2EnterRoomReq {

        /**
         * Constructs a new Match2v2EnterRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatch2v2EnterRoomReq);

        /** Match2v2EnterRoomReq roomId. */
        public roomId: string;

        /**
         * Creates a new Match2v2EnterRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match2v2EnterRoomReq instance
         */
        public static create(properties?: pb.IMatch2v2EnterRoomReq): pb.Match2v2EnterRoomReq;

        /**
         * Encodes the specified Match2v2EnterRoomReq message. Does not implicitly {@link pb.Match2v2EnterRoomReq.verify|verify} messages.
         * @param message Match2v2EnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatch2v2EnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match2v2EnterRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match2v2EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Match2v2EnterRoomReq;
    }

    /** Properties of a Match2v2EnterRoomRes. */
    interface IMatch2v2EnterRoomRes {

        /** Match2v2EnterRoomRes roomId */
        roomId?: (string|null);

        /** Match2v2EnterRoomRes timestamp */
        timestamp?: (number|null);

        /** Match2v2EnterRoomRes opt */
        opt?: (string|null);

        /** Match2v2EnterRoomRes sign */
        sign?: (string|null);

        /** Match2v2EnterRoomRes code */
        code?: (number|null);
    }

    /** Represents a Match2v2EnterRoomRes. */
    class Match2v2EnterRoomRes implements IMatch2v2EnterRoomRes {

        /**
         * Constructs a new Match2v2EnterRoomRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatch2v2EnterRoomRes);

        /** Match2v2EnterRoomRes roomId. */
        public roomId: string;

        /** Match2v2EnterRoomRes timestamp. */
        public timestamp: number;

        /** Match2v2EnterRoomRes opt. */
        public opt: string;

        /** Match2v2EnterRoomRes sign. */
        public sign: string;

        /** Match2v2EnterRoomRes code. */
        public code: number;

        /**
         * Creates a new Match2v2EnterRoomRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match2v2EnterRoomRes instance
         */
        public static create(properties?: pb.IMatch2v2EnterRoomRes): pb.Match2v2EnterRoomRes;

        /**
         * Encodes the specified Match2v2EnterRoomRes message. Does not implicitly {@link pb.Match2v2EnterRoomRes.verify|verify} messages.
         * @param message Match2v2EnterRoomRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatch2v2EnterRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match2v2EnterRoomRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match2v2EnterRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Match2v2EnterRoomRes;
    }

    /** Properties of a Match2v2StageChangeReq. */
    interface IMatch2v2StageChangeReq {

        /** Match2v2StageChangeReq state */
        state?: (number|null);
    }

    /** Represents a Match2v2StageChangeReq. */
    class Match2v2StageChangeReq implements IMatch2v2StageChangeReq {

        /**
         * Constructs a new Match2v2StageChangeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatch2v2StageChangeReq);

        /** Match2v2StageChangeReq state. */
        public state: number;

        /**
         * Creates a new Match2v2StageChangeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match2v2StageChangeReq instance
         */
        public static create(properties?: pb.IMatch2v2StageChangeReq): pb.Match2v2StageChangeReq;

        /**
         * Encodes the specified Match2v2StageChangeReq message. Does not implicitly {@link pb.Match2v2StageChangeReq.verify|verify} messages.
         * @param message Match2v2StageChangeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatch2v2StageChangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match2v2StageChangeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match2v2StageChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Match2v2StageChangeReq;
    }

    /** Properties of a Match2v2UserState. */
    interface IMatch2v2UserState {

        /** Match2v2UserState uid */
        uid?: (string|null);

        /** Match2v2UserState state */
        state?: (number|null);

        /** Match2v2UserState coin */
        coin?: (number|null);
    }

    /** Represents a Match2v2UserState. */
    class Match2v2UserState implements IMatch2v2UserState {

        /**
         * Constructs a new Match2v2UserState.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatch2v2UserState);

        /** Match2v2UserState uid. */
        public uid: string;

        /** Match2v2UserState state. */
        public state: number;

        /** Match2v2UserState coin. */
        public coin: number;

        /**
         * Creates a new Match2v2UserState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match2v2UserState instance
         */
        public static create(properties?: pb.IMatch2v2UserState): pb.Match2v2UserState;

        /**
         * Encodes the specified Match2v2UserState message. Does not implicitly {@link pb.Match2v2UserState.verify|verify} messages.
         * @param message Match2v2UserState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatch2v2UserState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match2v2UserState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match2v2UserState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Match2v2UserState;
    }

    /** Properties of a Match2v2StageChangeRes. */
    interface IMatch2v2StageChangeRes {

        /** Match2v2StageChangeRes users */
        users?: (pb.IMatch2v2UserState[]|null);

        /** Match2v2StageChangeRes code */
        code?: (number|null);
    }

    /** Represents a Match2v2StageChangeRes. */
    class Match2v2StageChangeRes implements IMatch2v2StageChangeRes {

        /**
         * Constructs a new Match2v2StageChangeRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatch2v2StageChangeRes);

        /** Match2v2StageChangeRes users. */
        public users: pb.IMatch2v2UserState[];

        /** Match2v2StageChangeRes code. */
        public code: number;

        /**
         * Creates a new Match2v2StageChangeRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match2v2StageChangeRes instance
         */
        public static create(properties?: pb.IMatch2v2StageChangeRes): pb.Match2v2StageChangeRes;

        /**
         * Encodes the specified Match2v2StageChangeRes message. Does not implicitly {@link pb.Match2v2StageChangeRes.verify|verify} messages.
         * @param message Match2v2StageChangeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatch2v2StageChangeRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match2v2StageChangeRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match2v2StageChangeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Match2v2StageChangeRes;
    }

    /** Properties of a Match2v2ExitRoomReq. */
    interface IMatch2v2ExitRoomReq {
    }

    /** Represents a Match2v2ExitRoomReq. */
    class Match2v2ExitRoomReq implements IMatch2v2ExitRoomReq {

        /**
         * Constructs a new Match2v2ExitRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatch2v2ExitRoomReq);

        /**
         * Creates a new Match2v2ExitRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match2v2ExitRoomReq instance
         */
        public static create(properties?: pb.IMatch2v2ExitRoomReq): pb.Match2v2ExitRoomReq;

        /**
         * Encodes the specified Match2v2ExitRoomReq message. Does not implicitly {@link pb.Match2v2ExitRoomReq.verify|verify} messages.
         * @param message Match2v2ExitRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatch2v2ExitRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match2v2ExitRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match2v2ExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Match2v2ExitRoomReq;
    }

    /** Properties of a Match2v2ExitRoomRes. */
    interface IMatch2v2ExitRoomRes {

        /** Match2v2ExitRoomRes roomId */
        roomId?: (string|null);

        /** Match2v2ExitRoomRes timestamp */
        timestamp?: (number|null);

        /** Match2v2ExitRoomRes opt */
        opt?: (string|null);

        /** Match2v2ExitRoomRes sign */
        sign?: (string|null);

        /** Match2v2ExitRoomRes code */
        code?: (number|null);
    }

    /** Represents a Match2v2ExitRoomRes. */
    class Match2v2ExitRoomRes implements IMatch2v2ExitRoomRes {

        /**
         * Constructs a new Match2v2ExitRoomRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatch2v2ExitRoomRes);

        /** Match2v2ExitRoomRes roomId. */
        public roomId: string;

        /** Match2v2ExitRoomRes timestamp. */
        public timestamp: number;

        /** Match2v2ExitRoomRes opt. */
        public opt: string;

        /** Match2v2ExitRoomRes sign. */
        public sign: string;

        /** Match2v2ExitRoomRes code. */
        public code: number;

        /**
         * Creates a new Match2v2ExitRoomRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match2v2ExitRoomRes instance
         */
        public static create(properties?: pb.IMatch2v2ExitRoomRes): pb.Match2v2ExitRoomRes;

        /**
         * Encodes the specified Match2v2ExitRoomRes message. Does not implicitly {@link pb.Match2v2ExitRoomRes.verify|verify} messages.
         * @param message Match2v2ExitRoomRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatch2v2ExitRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Match2v2ExitRoomRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match2v2ExitRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Match2v2ExitRoomRes;
    }

    /** Properties of a MatchGhostReq. */
    interface IMatchGhostReq {

        /** MatchGhostReq grade */
        grade?: (number|null);
    }

    /** Represents a MatchGhostReq. */
    class MatchGhostReq implements IMatchGhostReq {

        /**
         * Constructs a new MatchGhostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchGhostReq);

        /** MatchGhostReq grade. */
        public grade: number;

        /**
         * Creates a new MatchGhostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGhostReq instance
         */
        public static create(properties?: pb.IMatchGhostReq): pb.MatchGhostReq;

        /**
         * Encodes the specified MatchGhostReq message. Does not implicitly {@link pb.MatchGhostReq.verify|verify} messages.
         * @param message MatchGhostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchGhostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchGhostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGhostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchGhostReq;
    }

    /** Properties of a MatchGhostRes. */
    interface IMatchGhostRes {

        /** MatchGhostRes grade */
        grade?: (number|null);

        /** MatchGhostRes code */
        code?: (number|null);
    }

    /** Represents a MatchGhostRes. */
    class MatchGhostRes implements IMatchGhostRes {

        /**
         * Constructs a new MatchGhostRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchGhostRes);

        /** MatchGhostRes grade. */
        public grade: number;

        /** MatchGhostRes code. */
        public code: number;

        /**
         * Creates a new MatchGhostRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGhostRes instance
         */
        public static create(properties?: pb.IMatchGhostRes): pb.MatchGhostRes;

        /**
         * Encodes the specified MatchGhostRes message. Does not implicitly {@link pb.MatchGhostRes.verify|verify} messages.
         * @param message MatchGhostRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchGhostRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchGhostRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGhostRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchGhostRes;
    }

    /** Properties of a MatchGhostSuccessRes. */
    interface IMatchGhostSuccessRes {

        /** MatchGhostSuccessRes code */
        code?: (number|null);

        /** MatchGhostSuccessRes roomId */
        roomId?: (string|null);

        /** MatchGhostSuccessRes timestamp */
        timestamp?: (number|null);

        /** MatchGhostSuccessRes opt */
        opt?: (string|null);

        /** MatchGhostSuccessRes sign */
        sign?: (string|null);

        /** MatchGhostSuccessRes grade */
        grade?: (number|null);

        /** MatchGhostSuccessRes team1 */
        team1?: (string[]|null);

        /** MatchGhostSuccessRes team2 */
        team2?: (string[]|null);

        /** MatchGhostSuccessRes sn */
        sn?: (string|null);
    }

    /** Represents a MatchGhostSuccessRes. */
    class MatchGhostSuccessRes implements IMatchGhostSuccessRes {

        /**
         * Constructs a new MatchGhostSuccessRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchGhostSuccessRes);

        /** MatchGhostSuccessRes code. */
        public code: number;

        /** MatchGhostSuccessRes roomId. */
        public roomId: string;

        /** MatchGhostSuccessRes timestamp. */
        public timestamp: number;

        /** MatchGhostSuccessRes opt. */
        public opt: string;

        /** MatchGhostSuccessRes sign. */
        public sign: string;

        /** MatchGhostSuccessRes grade. */
        public grade: number;

        /** MatchGhostSuccessRes team1. */
        public team1: string[];

        /** MatchGhostSuccessRes team2. */
        public team2: string[];

        /** MatchGhostSuccessRes sn. */
        public sn: string;

        /**
         * Creates a new MatchGhostSuccessRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGhostSuccessRes instance
         */
        public static create(properties?: pb.IMatchGhostSuccessRes): pb.MatchGhostSuccessRes;

        /**
         * Encodes the specified MatchGhostSuccessRes message. Does not implicitly {@link pb.MatchGhostSuccessRes.verify|verify} messages.
         * @param message MatchGhostSuccessRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchGhostSuccessRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchGhostSuccessRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGhostSuccessRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchGhostSuccessRes;
    }

    /** Properties of a MatchGhostEnterRoomReq. */
    interface IMatchGhostEnterRoomReq {

        /** MatchGhostEnterRoomReq roomId */
        roomId?: (string|null);
    }

    /** Represents a MatchGhostEnterRoomReq. */
    class MatchGhostEnterRoomReq implements IMatchGhostEnterRoomReq {

        /**
         * Constructs a new MatchGhostEnterRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchGhostEnterRoomReq);

        /** MatchGhostEnterRoomReq roomId. */
        public roomId: string;

        /**
         * Creates a new MatchGhostEnterRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGhostEnterRoomReq instance
         */
        public static create(properties?: pb.IMatchGhostEnterRoomReq): pb.MatchGhostEnterRoomReq;

        /**
         * Encodes the specified MatchGhostEnterRoomReq message. Does not implicitly {@link pb.MatchGhostEnterRoomReq.verify|verify} messages.
         * @param message MatchGhostEnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchGhostEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchGhostEnterRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGhostEnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchGhostEnterRoomReq;
    }

    /** Properties of a MatchGhostEnterRoomRes. */
    interface IMatchGhostEnterRoomRes {

        /** MatchGhostEnterRoomRes roomId */
        roomId?: (string|null);

        /** MatchGhostEnterRoomRes timestamp */
        timestamp?: (number|null);

        /** MatchGhostEnterRoomRes opt */
        opt?: (string|null);

        /** MatchGhostEnterRoomRes sign */
        sign?: (string|null);

        /** MatchGhostEnterRoomRes code */
        code?: (number|null);
    }

    /** Represents a MatchGhostEnterRoomRes. */
    class MatchGhostEnterRoomRes implements IMatchGhostEnterRoomRes {

        /**
         * Constructs a new MatchGhostEnterRoomRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchGhostEnterRoomRes);

        /** MatchGhostEnterRoomRes roomId. */
        public roomId: string;

        /** MatchGhostEnterRoomRes timestamp. */
        public timestamp: number;

        /** MatchGhostEnterRoomRes opt. */
        public opt: string;

        /** MatchGhostEnterRoomRes sign. */
        public sign: string;

        /** MatchGhostEnterRoomRes code. */
        public code: number;

        /**
         * Creates a new MatchGhostEnterRoomRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGhostEnterRoomRes instance
         */
        public static create(properties?: pb.IMatchGhostEnterRoomRes): pb.MatchGhostEnterRoomRes;

        /**
         * Encodes the specified MatchGhostEnterRoomRes message. Does not implicitly {@link pb.MatchGhostEnterRoomRes.verify|verify} messages.
         * @param message MatchGhostEnterRoomRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchGhostEnterRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchGhostEnterRoomRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGhostEnterRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchGhostEnterRoomRes;
    }

    /** Properties of a MatchGhostStageChangeReq. */
    interface IMatchGhostStageChangeReq {

        /** MatchGhostStageChangeReq state */
        state?: (number|null);
    }

    /** Represents a MatchGhostStageChangeReq. */
    class MatchGhostStageChangeReq implements IMatchGhostStageChangeReq {

        /**
         * Constructs a new MatchGhostStageChangeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchGhostStageChangeReq);

        /** MatchGhostStageChangeReq state. */
        public state: number;

        /**
         * Creates a new MatchGhostStageChangeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGhostStageChangeReq instance
         */
        public static create(properties?: pb.IMatchGhostStageChangeReq): pb.MatchGhostStageChangeReq;

        /**
         * Encodes the specified MatchGhostStageChangeReq message. Does not implicitly {@link pb.MatchGhostStageChangeReq.verify|verify} messages.
         * @param message MatchGhostStageChangeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchGhostStageChangeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchGhostStageChangeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGhostStageChangeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchGhostStageChangeReq;
    }

    /** Properties of a MatchGhostUserState. */
    interface IMatchGhostUserState {

        /** MatchGhostUserState uid */
        uid?: (string|null);

        /** MatchGhostUserState state */
        state?: (number|null);

        /** MatchGhostUserState coin */
        coin?: (number|null);

        /** MatchGhostUserState ticket */
        ticket?: (number|null);

        /** MatchGhostUserState freeTicket */
        freeTicket?: (number|null);
    }

    /** Represents a MatchGhostUserState. */
    class MatchGhostUserState implements IMatchGhostUserState {

        /**
         * Constructs a new MatchGhostUserState.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchGhostUserState);

        /** MatchGhostUserState uid. */
        public uid: string;

        /** MatchGhostUserState state. */
        public state: number;

        /** MatchGhostUserState coin. */
        public coin: number;

        /** MatchGhostUserState ticket. */
        public ticket: number;

        /** MatchGhostUserState freeTicket. */
        public freeTicket: number;

        /**
         * Creates a new MatchGhostUserState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGhostUserState instance
         */
        public static create(properties?: pb.IMatchGhostUserState): pb.MatchGhostUserState;

        /**
         * Encodes the specified MatchGhostUserState message. Does not implicitly {@link pb.MatchGhostUserState.verify|verify} messages.
         * @param message MatchGhostUserState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchGhostUserState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchGhostUserState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGhostUserState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchGhostUserState;
    }

    /** Properties of a MatchGhostStageChangeRes. */
    interface IMatchGhostStageChangeRes {

        /** MatchGhostStageChangeRes users */
        users?: (pb.IMatchGhostUserState[]|null);

        /** MatchGhostStageChangeRes code */
        code?: (number|null);
    }

    /** Represents a MatchGhostStageChangeRes. */
    class MatchGhostStageChangeRes implements IMatchGhostStageChangeRes {

        /**
         * Constructs a new MatchGhostStageChangeRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchGhostStageChangeRes);

        /** MatchGhostStageChangeRes users. */
        public users: pb.IMatchGhostUserState[];

        /** MatchGhostStageChangeRes code. */
        public code: number;

        /**
         * Creates a new MatchGhostStageChangeRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGhostStageChangeRes instance
         */
        public static create(properties?: pb.IMatchGhostStageChangeRes): pb.MatchGhostStageChangeRes;

        /**
         * Encodes the specified MatchGhostStageChangeRes message. Does not implicitly {@link pb.MatchGhostStageChangeRes.verify|verify} messages.
         * @param message MatchGhostStageChangeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchGhostStageChangeRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchGhostStageChangeRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGhostStageChangeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchGhostStageChangeRes;
    }

    /** Properties of a MatchGhostExitRoomReq. */
    interface IMatchGhostExitRoomReq {
    }

    /** Represents a MatchGhostExitRoomReq. */
    class MatchGhostExitRoomReq implements IMatchGhostExitRoomReq {

        /**
         * Constructs a new MatchGhostExitRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchGhostExitRoomReq);

        /**
         * Creates a new MatchGhostExitRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGhostExitRoomReq instance
         */
        public static create(properties?: pb.IMatchGhostExitRoomReq): pb.MatchGhostExitRoomReq;

        /**
         * Encodes the specified MatchGhostExitRoomReq message. Does not implicitly {@link pb.MatchGhostExitRoomReq.verify|verify} messages.
         * @param message MatchGhostExitRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchGhostExitRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchGhostExitRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGhostExitRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchGhostExitRoomReq;
    }

    /** Properties of a MatchGhostExitRoomRes. */
    interface IMatchGhostExitRoomRes {

        /** MatchGhostExitRoomRes roomId */
        roomId?: (string|null);

        /** MatchGhostExitRoomRes timestamp */
        timestamp?: (number|null);

        /** MatchGhostExitRoomRes opt */
        opt?: (string|null);

        /** MatchGhostExitRoomRes sign */
        sign?: (string|null);

        /** MatchGhostExitRoomRes code */
        code?: (number|null);
    }

    /** Represents a MatchGhostExitRoomRes. */
    class MatchGhostExitRoomRes implements IMatchGhostExitRoomRes {

        /**
         * Constructs a new MatchGhostExitRoomRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchGhostExitRoomRes);

        /** MatchGhostExitRoomRes roomId. */
        public roomId: string;

        /** MatchGhostExitRoomRes timestamp. */
        public timestamp: number;

        /** MatchGhostExitRoomRes opt. */
        public opt: string;

        /** MatchGhostExitRoomRes sign. */
        public sign: string;

        /** MatchGhostExitRoomRes code. */
        public code: number;

        /**
         * Creates a new MatchGhostExitRoomRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchGhostExitRoomRes instance
         */
        public static create(properties?: pb.IMatchGhostExitRoomRes): pb.MatchGhostExitRoomRes;

        /**
         * Encodes the specified MatchGhostExitRoomRes message. Does not implicitly {@link pb.MatchGhostExitRoomRes.verify|verify} messages.
         * @param message MatchGhostExitRoomRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchGhostExitRoomRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchGhostExitRoomRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchGhostExitRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchGhostExitRoomRes;
    }

    /** Properties of a GhostReadyGoRes. */
    interface IGhostReadyGoRes {

        /** GhostReadyGoRes code */
        code?: (number|null);

        /** GhostReadyGoRes msg */
        msg?: (string|null);

        /** GhostReadyGoRes data */
        data?: (pb.IGhostReadyGoResData|null);
    }

    /** Represents a GhostReadyGoRes. */
    class GhostReadyGoRes implements IGhostReadyGoRes {

        /**
         * Constructs a new GhostReadyGoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostReadyGoRes);

        /** GhostReadyGoRes code. */
        public code: number;

        /** GhostReadyGoRes msg. */
        public msg: string;

        /** GhostReadyGoRes data. */
        public data?: (pb.IGhostReadyGoResData|null);

        /**
         * Creates a new GhostReadyGoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostReadyGoRes instance
         */
        public static create(properties?: pb.IGhostReadyGoRes): pb.GhostReadyGoRes;

        /**
         * Encodes the specified GhostReadyGoRes message. Does not implicitly {@link pb.GhostReadyGoRes.verify|verify} messages.
         * @param message GhostReadyGoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostReadyGoRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostReadyGoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostReadyGoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostReadyGoRes;
    }

    /** Properties of a GhostReadyGoResData. */
    interface IGhostReadyGoResData {

        /** GhostReadyGoResData first_uid */
        first_uid?: (string|null);

        /** GhostReadyGoResData chessboard */
        chessboard?: (pb.IGhostChessBoard|null);

        /** GhostReadyGoResData start_time */
        start_time?: (number|null);

        /** GhostReadyGoResData roundEndTime */
        roundEndTime?: (number|null);

        /** GhostReadyGoResData userDatas */
        userDatas?: (pb.IUserData[]|null);

        /** GhostReadyGoResData loseCoin */
        loseCoin?: (number|null);

        /** GhostReadyGoResData winCoin */
        winCoin?: (number|null);

        /** GhostReadyGoResData gameMode */
        gameMode?: (number|null);

        /** GhostReadyGoResData aiMode */
        aiMode?: (number|null);

        /** GhostReadyGoResData point */
        point?: (number|null);

        /** GhostReadyGoResData deadPoint */
        deadPoint?: (number|null);

        /** GhostReadyGoResData deadCount */
        deadCount?: (number|null);

        /** GhostReadyGoResData deadModeLeftRound */
        deadModeLeftRound?: (number|null);

        /** GhostReadyGoResData deadModeMaxRound */
        deadModeMaxRound?: (number|null);

        /** GhostReadyGoResData info */
        info?: (pb.IGhostGameInfo|null);
    }

    /** Represents a GhostReadyGoResData. */
    class GhostReadyGoResData implements IGhostReadyGoResData {

        /**
         * Constructs a new GhostReadyGoResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostReadyGoResData);

        /** GhostReadyGoResData first_uid. */
        public first_uid: string;

        /** GhostReadyGoResData chessboard. */
        public chessboard?: (pb.IGhostChessBoard|null);

        /** GhostReadyGoResData start_time. */
        public start_time: number;

        /** GhostReadyGoResData roundEndTime. */
        public roundEndTime: number;

        /** GhostReadyGoResData userDatas. */
        public userDatas: pb.IUserData[];

        /** GhostReadyGoResData loseCoin. */
        public loseCoin: number;

        /** GhostReadyGoResData winCoin. */
        public winCoin: number;

        /** GhostReadyGoResData gameMode. */
        public gameMode: number;

        /** GhostReadyGoResData aiMode. */
        public aiMode: number;

        /** GhostReadyGoResData point. */
        public point: number;

        /** GhostReadyGoResData deadPoint. */
        public deadPoint: number;

        /** GhostReadyGoResData deadCount. */
        public deadCount: number;

        /** GhostReadyGoResData deadModeLeftRound. */
        public deadModeLeftRound: number;

        /** GhostReadyGoResData deadModeMaxRound. */
        public deadModeMaxRound: number;

        /** GhostReadyGoResData info. */
        public info?: (pb.IGhostGameInfo|null);

        /**
         * Creates a new GhostReadyGoResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostReadyGoResData instance
         */
        public static create(properties?: pb.IGhostReadyGoResData): pb.GhostReadyGoResData;

        /**
         * Encodes the specified GhostReadyGoResData message. Does not implicitly {@link pb.GhostReadyGoResData.verify|verify} messages.
         * @param message GhostReadyGoResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostReadyGoResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostReadyGoResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostReadyGoResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostReadyGoResData;
    }

    /** Properties of a GhostReLoginRes. */
    interface IGhostReLoginRes {

        /** GhostReLoginRes code */
        code?: (number|null);

        /** GhostReLoginRes msg */
        msg?: (string|null);

        /** GhostReLoginRes data */
        data?: (pb.IGhostReLoginResData|null);
    }

    /** Represents a GhostReLoginRes. */
    class GhostReLoginRes implements IGhostReLoginRes {

        /**
         * Constructs a new GhostReLoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostReLoginRes);

        /** GhostReLoginRes code. */
        public code: number;

        /** GhostReLoginRes msg. */
        public msg: string;

        /** GhostReLoginRes data. */
        public data?: (pb.IGhostReLoginResData|null);

        /**
         * Creates a new GhostReLoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostReLoginRes instance
         */
        public static create(properties?: pb.IGhostReLoginRes): pb.GhostReLoginRes;

        /**
         * Encodes the specified GhostReLoginRes message. Does not implicitly {@link pb.GhostReLoginRes.verify|verify} messages.
         * @param message GhostReLoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostReLoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostReLoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostReLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostReLoginRes;
    }

    /** Properties of a GhostReLoginResData. */
    interface IGhostReLoginResData {

        /** GhostReLoginResData stage */
        stage?: (string|null);

        /** GhostReLoginResData curuid */
        curuid?: (string|null);

        /** GhostReLoginResData dicenum */
        dicenum?: (number|null);

        /** GhostReLoginResData gameMode */
        gameMode?: (number|null);

        /** GhostReLoginResData coin */
        coin?: (number|null);

        /** GhostReLoginResData chessboard */
        chessboard?: (pb.IGhostChessBoard|null);

        /** GhostReLoginResData roundEndTime */
        roundEndTime?: (number|null);

        /** GhostReLoginResData dicetype */
        dicetype?: (pb.DiceNumResType|null);

        /** GhostReLoginResData userDatas */
        userDatas?: (pb.IUserData[]|null);

        /** GhostReLoginResData loseCoin */
        loseCoin?: (number|null);

        /** GhostReLoginResData winCoin */
        winCoin?: (number|null);

        /** GhostReLoginResData aiMode */
        aiMode?: (number|null);

        /** GhostReLoginResData point */
        point?: (number|null);

        /** GhostReLoginResData deadPoint */
        deadPoint?: (number|null);

        /** GhostReLoginResData deadCount */
        deadCount?: (number|null);

        /** GhostReLoginResData deadModeLeftRound */
        deadModeLeftRound?: (number|null);

        /** GhostReLoginResData deadModeMaxRound */
        deadModeMaxRound?: (number|null);

        /** GhostReLoginResData info */
        info?: (pb.IGhostGameInfo|null);
    }

    /** Represents a GhostReLoginResData. */
    class GhostReLoginResData implements IGhostReLoginResData {

        /**
         * Constructs a new GhostReLoginResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostReLoginResData);

        /** GhostReLoginResData stage. */
        public stage: string;

        /** GhostReLoginResData curuid. */
        public curuid: string;

        /** GhostReLoginResData dicenum. */
        public dicenum: number;

        /** GhostReLoginResData gameMode. */
        public gameMode: number;

        /** GhostReLoginResData coin. */
        public coin: number;

        /** GhostReLoginResData chessboard. */
        public chessboard?: (pb.IGhostChessBoard|null);

        /** GhostReLoginResData roundEndTime. */
        public roundEndTime: number;

        /** GhostReLoginResData dicetype. */
        public dicetype: pb.DiceNumResType;

        /** GhostReLoginResData userDatas. */
        public userDatas: pb.IUserData[];

        /** GhostReLoginResData loseCoin. */
        public loseCoin: number;

        /** GhostReLoginResData winCoin. */
        public winCoin: number;

        /** GhostReLoginResData aiMode. */
        public aiMode: number;

        /** GhostReLoginResData point. */
        public point: number;

        /** GhostReLoginResData deadPoint. */
        public deadPoint: number;

        /** GhostReLoginResData deadCount. */
        public deadCount: number;

        /** GhostReLoginResData deadModeLeftRound. */
        public deadModeLeftRound: number;

        /** GhostReLoginResData deadModeMaxRound. */
        public deadModeMaxRound: number;

        /** GhostReLoginResData info. */
        public info?: (pb.IGhostGameInfo|null);

        /**
         * Creates a new GhostReLoginResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostReLoginResData instance
         */
        public static create(properties?: pb.IGhostReLoginResData): pb.GhostReLoginResData;

        /**
         * Encodes the specified GhostReLoginResData message. Does not implicitly {@link pb.GhostReLoginResData.verify|verify} messages.
         * @param message GhostReLoginResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostReLoginResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostReLoginResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostReLoginResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostReLoginResData;
    }

    /** Properties of a GhostChessBoard. */
    interface IGhostChessBoard {

        /** GhostChessBoard airport_planes */
        airport_planes?: (pb.IGhostAirPortPlane[]|null);

        /** GhostChessBoard plane */
        plane?: (pb.IGhostPlane[]|null);
    }

    /** Represents a GhostChessBoard. */
    class GhostChessBoard implements IGhostChessBoard {

        /**
         * Constructs a new GhostChessBoard.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostChessBoard);

        /** GhostChessBoard airport_planes. */
        public airport_planes: pb.IGhostAirPortPlane[];

        /** GhostChessBoard plane. */
        public plane: pb.IGhostPlane[];

        /**
         * Creates a new GhostChessBoard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostChessBoard instance
         */
        public static create(properties?: pb.IGhostChessBoard): pb.GhostChessBoard;

        /**
         * Encodes the specified GhostChessBoard message. Does not implicitly {@link pb.GhostChessBoard.verify|verify} messages.
         * @param message GhostChessBoard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostChessBoard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostChessBoard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostChessBoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostChessBoard;
    }

    /** Properties of a GhostAirPortPlane. */
    interface IGhostAirPortPlane {

        /** GhostAirPortPlane color */
        color?: (number|null);

        /** GhostAirPortPlane plane */
        plane?: (number|null);

        /** GhostAirPortPlane rebornLeftRound */
        rebornLeftRound?: (number|null);
    }

    /** Represents a GhostAirPortPlane. */
    class GhostAirPortPlane implements IGhostAirPortPlane {

        /**
         * Constructs a new GhostAirPortPlane.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostAirPortPlane);

        /** GhostAirPortPlane color. */
        public color: number;

        /** GhostAirPortPlane plane. */
        public plane: number;

        /** GhostAirPortPlane rebornLeftRound. */
        public rebornLeftRound: number;

        /**
         * Creates a new GhostAirPortPlane instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostAirPortPlane instance
         */
        public static create(properties?: pb.IGhostAirPortPlane): pb.GhostAirPortPlane;

        /**
         * Encodes the specified GhostAirPortPlane message. Does not implicitly {@link pb.GhostAirPortPlane.verify|verify} messages.
         * @param message GhostAirPortPlane message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostAirPortPlane, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostAirPortPlane message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostAirPortPlane
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostAirPortPlane;
    }

    /** Properties of a GhostPlane. */
    interface IGhostPlane {

        /** GhostPlane x */
        x?: (number|null);

        /** GhostPlane y */
        y?: (number|null);

        /** GhostPlane color */
        color?: (number|null);

        /** GhostPlane plane */
        plane?: (number|null);

        /** GhostPlane life */
        life?: (number|null);
    }

    /** Represents a GhostPlane. */
    class GhostPlane implements IGhostPlane {

        /**
         * Constructs a new GhostPlane.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostPlane);

        /** GhostPlane x. */
        public x: number;

        /** GhostPlane y. */
        public y: number;

        /** GhostPlane color. */
        public color: number;

        /** GhostPlane plane. */
        public plane: number;

        /** GhostPlane life. */
        public life: number;

        /**
         * Creates a new GhostPlane instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostPlane instance
         */
        public static create(properties?: pb.IGhostPlane): pb.GhostPlane;

        /**
         * Encodes the specified GhostPlane message. Does not implicitly {@link pb.GhostPlane.verify|verify} messages.
         * @param message GhostPlane message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostPlane, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostPlane message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostPlane
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostPlane;
    }

    /** Properties of a GhostDiceNumReq. */
    interface IGhostDiceNumReq {

        /** GhostDiceNumReq num */
        num?: (number|null);
    }

    /** Represents a GhostDiceNumReq. */
    class GhostDiceNumReq implements IGhostDiceNumReq {

        /**
         * Constructs a new GhostDiceNumReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostDiceNumReq);

        /** GhostDiceNumReq num. */
        public num: number;

        /**
         * Creates a new GhostDiceNumReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostDiceNumReq instance
         */
        public static create(properties?: pb.IGhostDiceNumReq): pb.GhostDiceNumReq;

        /**
         * Encodes the specified GhostDiceNumReq message. Does not implicitly {@link pb.GhostDiceNumReq.verify|verify} messages.
         * @param message GhostDiceNumReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostDiceNumReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostDiceNumReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostDiceNumReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostDiceNumReq;
    }

    /** Properties of a GhostDiceNumRes. */
    interface IGhostDiceNumRes {

        /** GhostDiceNumRes code */
        code?: (number|null);

        /** GhostDiceNumRes msg */
        msg?: (string|null);

        /** GhostDiceNumRes data */
        data?: (pb.IGhostDiceNumData|null);
    }

    /** Represents a GhostDiceNumRes. */
    class GhostDiceNumRes implements IGhostDiceNumRes {

        /**
         * Constructs a new GhostDiceNumRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostDiceNumRes);

        /** GhostDiceNumRes code. */
        public code: number;

        /** GhostDiceNumRes msg. */
        public msg: string;

        /** GhostDiceNumRes data. */
        public data?: (pb.IGhostDiceNumData|null);

        /**
         * Creates a new GhostDiceNumRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostDiceNumRes instance
         */
        public static create(properties?: pb.IGhostDiceNumRes): pb.GhostDiceNumRes;

        /**
         * Encodes the specified GhostDiceNumRes message. Does not implicitly {@link pb.GhostDiceNumRes.verify|verify} messages.
         * @param message GhostDiceNumRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostDiceNumRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostDiceNumRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostDiceNumRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostDiceNumRes;
    }

    /** Properties of a GhostDiceNumData. */
    interface IGhostDiceNumData {

        /** GhostDiceNumData num */
        num?: (number|null);

        /** GhostDiceNumData roundEndTime */
        roundEndTime?: (number|null);

        /** GhostDiceNumData type */
        type?: (pb.DiceNumResType|null);

        /** GhostDiceNumData uid */
        uid?: (string|null);
    }

    /** Represents a GhostDiceNumData. */
    class GhostDiceNumData implements IGhostDiceNumData {

        /**
         * Constructs a new GhostDiceNumData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostDiceNumData);

        /** GhostDiceNumData num. */
        public num: number;

        /** GhostDiceNumData roundEndTime. */
        public roundEndTime: number;

        /** GhostDiceNumData type. */
        public type: pb.DiceNumResType;

        /** GhostDiceNumData uid. */
        public uid: string;

        /**
         * Creates a new GhostDiceNumData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostDiceNumData instance
         */
        public static create(properties?: pb.IGhostDiceNumData): pb.GhostDiceNumData;

        /**
         * Encodes the specified GhostDiceNumData message. Does not implicitly {@link pb.GhostDiceNumData.verify|verify} messages.
         * @param message GhostDiceNumData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostDiceNumData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostDiceNumData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostDiceNumData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostDiceNumData;
    }

    /** Properties of a GhostMoveReq. */
    interface IGhostMoveReq {

        /** GhostMoveReq color */
        color?: (number|null);

        /** GhostMoveReq plane */
        plane?: (number|null);

        /** GhostMoveReq type */
        type?: (pb.MoveType|null);

        /** GhostMoveReq diceNum */
        diceNum?: (number|null);
    }

    /** Represents a GhostMoveReq. */
    class GhostMoveReq implements IGhostMoveReq {

        /**
         * Constructs a new GhostMoveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostMoveReq);

        /** GhostMoveReq color. */
        public color: number;

        /** GhostMoveReq plane. */
        public plane: number;

        /** GhostMoveReq type. */
        public type: pb.MoveType;

        /** GhostMoveReq diceNum. */
        public diceNum: number;

        /**
         * Creates a new GhostMoveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostMoveReq instance
         */
        public static create(properties?: pb.IGhostMoveReq): pb.GhostMoveReq;

        /**
         * Encodes the specified GhostMoveReq message. Does not implicitly {@link pb.GhostMoveReq.verify|verify} messages.
         * @param message GhostMoveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostMoveReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostMoveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostMoveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostMoveReq;
    }

    /** Properties of a GhostCrashPlane. */
    interface IGhostCrashPlane {

        /** GhostCrashPlane color */
        color?: (number|null);

        /** GhostCrashPlane plane */
        plane?: (number|null);

        /** GhostCrashPlane x */
        x?: (number|null);

        /** GhostCrashPlane y */
        y?: (number|null);

        /** GhostCrashPlane life */
        life?: (number|null);
    }

    /** Represents a GhostCrashPlane. */
    class GhostCrashPlane implements IGhostCrashPlane {

        /**
         * Constructs a new GhostCrashPlane.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostCrashPlane);

        /** GhostCrashPlane color. */
        public color: number;

        /** GhostCrashPlane plane. */
        public plane: number;

        /** GhostCrashPlane x. */
        public x: number;

        /** GhostCrashPlane y. */
        public y: number;

        /** GhostCrashPlane life. */
        public life: number;

        /**
         * Creates a new GhostCrashPlane instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostCrashPlane instance
         */
        public static create(properties?: pb.IGhostCrashPlane): pb.GhostCrashPlane;

        /**
         * Encodes the specified GhostCrashPlane message. Does not implicitly {@link pb.GhostCrashPlane.verify|verify} messages.
         * @param message GhostCrashPlane message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostCrashPlane, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostCrashPlane message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostCrashPlane
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostCrashPlane;
    }

    /** Properties of a GhostMoveRes. */
    interface IGhostMoveRes {

        /** GhostMoveRes code */
        code?: (number|null);

        /** GhostMoveRes msg */
        msg?: (string|null);

        /** GhostMoveRes data */
        data?: (pb.IGhostMoveResData|null);
    }

    /** Represents a GhostMoveRes. */
    class GhostMoveRes implements IGhostMoveRes {

        /**
         * Constructs a new GhostMoveRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostMoveRes);

        /** GhostMoveRes code. */
        public code: number;

        /** GhostMoveRes msg. */
        public msg: string;

        /** GhostMoveRes data. */
        public data?: (pb.IGhostMoveResData|null);

        /**
         * Creates a new GhostMoveRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostMoveRes instance
         */
        public static create(properties?: pb.IGhostMoveRes): pb.GhostMoveRes;

        /**
         * Encodes the specified GhostMoveRes message. Does not implicitly {@link pb.GhostMoveRes.verify|verify} messages.
         * @param message GhostMoveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostMoveRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostMoveRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostMoveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostMoveRes;
    }

    /** Properties of a GhostMoveResData. */
    interface IGhostMoveResData {

        /** GhostMoveResData uid */
        uid?: (string|null);

        /** GhostMoveResData plane */
        plane?: (pb.IGhostPlane|null);

        /** GhostMoveResData airport_plane */
        airport_plane?: (pb.IGhostAirPortPlane|null);

        /** GhostMoveResData type */
        type?: (pb.MoveType|null);

        /** GhostMoveResData crashPlanes */
        crashPlanes?: (pb.IGhostCrashPlane[]|null);

        /** GhostMoveResData next_uid */
        next_uid?: (string|null);

        /** GhostMoveResData roundEndTime */
        roundEndTime?: (number|null);

        /** GhostMoveResData diceNum */
        diceNum?: (number|null);

        /** GhostMoveResData aiMode */
        aiMode?: (number|null);

        /** GhostMoveResData point */
        point?: (number|null);

        /** GhostMoveResData deadPoint */
        deadPoint?: (number|null);

        /** GhostMoveResData deadCount */
        deadCount?: (number|null);

        /** GhostMoveResData deadModeLeftRound */
        deadModeLeftRound?: (number|null);

        /** GhostMoveResData deadModeMaxRound */
        deadModeMaxRound?: (number|null);

        /** GhostMoveResData rebornPlanes */
        rebornPlanes?: (pb.IGhostPlane[]|null);

        /** GhostMoveResData planeNew */
        planeNew?: (pb.IGhostPlane|null);
    }

    /** Represents a GhostMoveResData. */
    class GhostMoveResData implements IGhostMoveResData {

        /**
         * Constructs a new GhostMoveResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostMoveResData);

        /** GhostMoveResData uid. */
        public uid: string;

        /** GhostMoveResData plane. */
        public plane?: (pb.IGhostPlane|null);

        /** GhostMoveResData airport_plane. */
        public airport_plane?: (pb.IGhostAirPortPlane|null);

        /** GhostMoveResData type. */
        public type: pb.MoveType;

        /** GhostMoveResData crashPlanes. */
        public crashPlanes: pb.IGhostCrashPlane[];

        /** GhostMoveResData next_uid. */
        public next_uid: string;

        /** GhostMoveResData roundEndTime. */
        public roundEndTime: number;

        /** GhostMoveResData diceNum. */
        public diceNum: number;

        /** GhostMoveResData aiMode. */
        public aiMode: number;

        /** GhostMoveResData point. */
        public point: number;

        /** GhostMoveResData deadPoint. */
        public deadPoint: number;

        /** GhostMoveResData deadCount. */
        public deadCount: number;

        /** GhostMoveResData deadModeLeftRound. */
        public deadModeLeftRound: number;

        /** GhostMoveResData deadModeMaxRound. */
        public deadModeMaxRound: number;

        /** GhostMoveResData rebornPlanes. */
        public rebornPlanes: pb.IGhostPlane[];

        /** GhostMoveResData planeNew. */
        public planeNew?: (pb.IGhostPlane|null);

        /**
         * Creates a new GhostMoveResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostMoveResData instance
         */
        public static create(properties?: pb.IGhostMoveResData): pb.GhostMoveResData;

        /**
         * Encodes the specified GhostMoveResData message. Does not implicitly {@link pb.GhostMoveResData.verify|verify} messages.
         * @param message GhostMoveResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostMoveResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostMoveResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostMoveResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostMoveResData;
    }

    /** Properties of a GhostSettingReq. */
    interface IGhostSettingReq {
    }

    /** Represents a GhostSettingReq. */
    class GhostSettingReq implements IGhostSettingReq {

        /**
         * Constructs a new GhostSettingReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostSettingReq);

        /**
         * Creates a new GhostSettingReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostSettingReq instance
         */
        public static create(properties?: pb.IGhostSettingReq): pb.GhostSettingReq;

        /**
         * Encodes the specified GhostSettingReq message. Does not implicitly {@link pb.GhostSettingReq.verify|verify} messages.
         * @param message GhostSettingReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostSettingReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostSettingReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostSettingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostSettingReq;
    }

    /** Properties of a GhostSettingRes. */
    interface IGhostSettingRes {

        /** GhostSettingRes ticket */
        ticket?: (number|null);

        /** GhostSettingRes nextTimeToRefreshTicket */
        nextTimeToRefreshTicket?: (number|null);

        /** GhostSettingRes freeTicketNum */
        freeTicketNum?: (number|null);

        /** GhostSettingRes sets */
        sets?: (pb.IGhostInfo[]|null);
    }

    /** Represents a GhostSettingRes. */
    class GhostSettingRes implements IGhostSettingRes {

        /**
         * Constructs a new GhostSettingRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostSettingRes);

        /** GhostSettingRes ticket. */
        public ticket: number;

        /** GhostSettingRes nextTimeToRefreshTicket. */
        public nextTimeToRefreshTicket: number;

        /** GhostSettingRes freeTicketNum. */
        public freeTicketNum: number;

        /** GhostSettingRes sets. */
        public sets: pb.IGhostInfo[];

        /**
         * Creates a new GhostSettingRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostSettingRes instance
         */
        public static create(properties?: pb.IGhostSettingRes): pb.GhostSettingRes;

        /**
         * Encodes the specified GhostSettingRes message. Does not implicitly {@link pb.GhostSettingRes.verify|verify} messages.
         * @param message GhostSettingRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostSettingRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostSettingRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostSettingRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostSettingRes;
    }

    /** Properties of a GhostInfo. */
    interface IGhostInfo {

        /** GhostInfo coinChange */
        coinChange?: (number|null);

        /** GhostInfo hard */
        hard?: (number|null);

        /** GhostInfo awards */
        awards?: (pb.IRewardItem[]|null);
    }

    /** Represents a GhostInfo. */
    class GhostInfo implements IGhostInfo {

        /**
         * Constructs a new GhostInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostInfo);

        /** GhostInfo coinChange. */
        public coinChange: number;

        /** GhostInfo hard. */
        public hard: number;

        /** GhostInfo awards. */
        public awards: pb.IRewardItem[];

        /**
         * Creates a new GhostInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostInfo instance
         */
        public static create(properties?: pb.IGhostInfo): pb.GhostInfo;

        /**
         * Encodes the specified GhostInfo message. Does not implicitly {@link pb.GhostInfo.verify|verify} messages.
         * @param message GhostInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostInfo;
    }

    /** Properties of a GhostGameInfo. */
    interface IGhostGameInfo {

        /** GhostGameInfo ghostWinScore */
        ghostWinScore?: (number|null);

        /** GhostGameInfo userWinScore */
        userWinScore?: (number|null);

        /** GhostGameInfo ghostLife */
        ghostLife?: (number|null);

        /** GhostGameInfo infoFinalPosScore */
        infoFinalPosScore?: (number|null);
    }

    /** Represents a GhostGameInfo. */
    class GhostGameInfo implements IGhostGameInfo {

        /**
         * Constructs a new GhostGameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGhostGameInfo);

        /** GhostGameInfo ghostWinScore. */
        public ghostWinScore: number;

        /** GhostGameInfo userWinScore. */
        public userWinScore: number;

        /** GhostGameInfo ghostLife. */
        public ghostLife: number;

        /** GhostGameInfo infoFinalPosScore. */
        public infoFinalPosScore: number;

        /**
         * Creates a new GhostGameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GhostGameInfo instance
         */
        public static create(properties?: pb.IGhostGameInfo): pb.GhostGameInfo;

        /**
         * Encodes the specified GhostGameInfo message. Does not implicitly {@link pb.GhostGameInfo.verify|verify} messages.
         * @param message GhostGameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGhostGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GhostGameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GhostGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GhostGameInfo;
    }

    /** Properties of a MatchSixModeReq. */
    interface IMatchSixModeReq {

        /** MatchSixModeReq grade */
        grade?: (number|null);
    }

    /** Represents a MatchSixModeReq. */
    class MatchSixModeReq implements IMatchSixModeReq {

        /**
         * Constructs a new MatchSixModeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchSixModeReq);

        /** MatchSixModeReq grade. */
        public grade: number;

        /**
         * Creates a new MatchSixModeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchSixModeReq instance
         */
        public static create(properties?: pb.IMatchSixModeReq): pb.MatchSixModeReq;

        /**
         * Encodes the specified MatchSixModeReq message. Does not implicitly {@link pb.MatchSixModeReq.verify|verify} messages.
         * @param message MatchSixModeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchSixModeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchSixModeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchSixModeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchSixModeReq;
    }

    /** Properties of a MatchSixModeRes. */
    interface IMatchSixModeRes {

        /** MatchSixModeRes grade */
        grade?: (number|null);

        /** MatchSixModeRes code */
        code?: (number|null);
    }

    /** Represents a MatchSixModeRes. */
    class MatchSixModeRes implements IMatchSixModeRes {

        /**
         * Constructs a new MatchSixModeRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchSixModeRes);

        /** MatchSixModeRes grade. */
        public grade: number;

        /** MatchSixModeRes code. */
        public code: number;

        /**
         * Creates a new MatchSixModeRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchSixModeRes instance
         */
        public static create(properties?: pb.IMatchSixModeRes): pb.MatchSixModeRes;

        /**
         * Encodes the specified MatchSixModeRes message. Does not implicitly {@link pb.MatchSixModeRes.verify|verify} messages.
         * @param message MatchSixModeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchSixModeRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchSixModeRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchSixModeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchSixModeRes;
    }

    /** Properties of a MatchSixModeSuccessRes. */
    interface IMatchSixModeSuccessRes {

        /** MatchSixModeSuccessRes code */
        code?: (number|null);

        /** MatchSixModeSuccessRes roomId */
        roomId?: (string|null);

        /** MatchSixModeSuccessRes timestamp */
        timestamp?: (number|null);

        /** MatchSixModeSuccessRes opt */
        opt?: (string|null);

        /** MatchSixModeSuccessRes sign */
        sign?: (string|null);

        /** MatchSixModeSuccessRes grade */
        grade?: (number|null);

        /** MatchSixModeSuccessRes sn */
        sn?: (string|null);
    }

    /** Represents a MatchSixModeSuccessRes. */
    class MatchSixModeSuccessRes implements IMatchSixModeSuccessRes {

        /**
         * Constructs a new MatchSixModeSuccessRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMatchSixModeSuccessRes);

        /** MatchSixModeSuccessRes code. */
        public code: number;

        /** MatchSixModeSuccessRes roomId. */
        public roomId: string;

        /** MatchSixModeSuccessRes timestamp. */
        public timestamp: number;

        /** MatchSixModeSuccessRes opt. */
        public opt: string;

        /** MatchSixModeSuccessRes sign. */
        public sign: string;

        /** MatchSixModeSuccessRes grade. */
        public grade: number;

        /** MatchSixModeSuccessRes sn. */
        public sn: string;

        /**
         * Creates a new MatchSixModeSuccessRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchSixModeSuccessRes instance
         */
        public static create(properties?: pb.IMatchSixModeSuccessRes): pb.MatchSixModeSuccessRes;

        /**
         * Encodes the specified MatchSixModeSuccessRes message. Does not implicitly {@link pb.MatchSixModeSuccessRes.verify|verify} messages.
         * @param message MatchSixModeSuccessRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMatchSixModeSuccessRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchSixModeSuccessRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchSixModeSuccessRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MatchSixModeSuccessRes;
    }

    /** Properties of a SixModeReadyGoRes. */
    interface ISixModeReadyGoRes {

        /** SixModeReadyGoRes code */
        code?: (number|null);

        /** SixModeReadyGoRes msg */
        msg?: (string|null);

        /** SixModeReadyGoRes data */
        data?: (pb.ISixModeReadyGoResData|null);
    }

    /** Represents a SixModeReadyGoRes. */
    class SixModeReadyGoRes implements ISixModeReadyGoRes {

        /**
         * Constructs a new SixModeReadyGoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeReadyGoRes);

        /** SixModeReadyGoRes code. */
        public code: number;

        /** SixModeReadyGoRes msg. */
        public msg: string;

        /** SixModeReadyGoRes data. */
        public data?: (pb.ISixModeReadyGoResData|null);

        /**
         * Creates a new SixModeReadyGoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeReadyGoRes instance
         */
        public static create(properties?: pb.ISixModeReadyGoRes): pb.SixModeReadyGoRes;

        /**
         * Encodes the specified SixModeReadyGoRes message. Does not implicitly {@link pb.SixModeReadyGoRes.verify|verify} messages.
         * @param message SixModeReadyGoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeReadyGoRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeReadyGoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeReadyGoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeReadyGoRes;
    }

    /** Properties of a SixModeReadyGoResData. */
    interface ISixModeReadyGoResData {

        /** SixModeReadyGoResData first_uid */
        first_uid?: (string|null);

        /** SixModeReadyGoResData chessboard */
        chessboard?: (pb.ISixModeChessBoard|null);

        /** SixModeReadyGoResData start_time */
        start_time?: (number|null);

        /** SixModeReadyGoResData roundEndTime */
        roundEndTime?: (number|null);

        /** SixModeReadyGoResData userDatas */
        userDatas?: (pb.IUserData[]|null);

        /** SixModeReadyGoResData loseCoin */
        loseCoin?: (number|null);

        /** SixModeReadyGoResData winCoin */
        winCoin?: (number|null);

        /** SixModeReadyGoResData gameMode */
        gameMode?: (number|null);
    }

    /** Represents a SixModeReadyGoResData. */
    class SixModeReadyGoResData implements ISixModeReadyGoResData {

        /**
         * Constructs a new SixModeReadyGoResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeReadyGoResData);

        /** SixModeReadyGoResData first_uid. */
        public first_uid: string;

        /** SixModeReadyGoResData chessboard. */
        public chessboard?: (pb.ISixModeChessBoard|null);

        /** SixModeReadyGoResData start_time. */
        public start_time: number;

        /** SixModeReadyGoResData roundEndTime. */
        public roundEndTime: number;

        /** SixModeReadyGoResData userDatas. */
        public userDatas: pb.IUserData[];

        /** SixModeReadyGoResData loseCoin. */
        public loseCoin: number;

        /** SixModeReadyGoResData winCoin. */
        public winCoin: number;

        /** SixModeReadyGoResData gameMode. */
        public gameMode: number;

        /**
         * Creates a new SixModeReadyGoResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeReadyGoResData instance
         */
        public static create(properties?: pb.ISixModeReadyGoResData): pb.SixModeReadyGoResData;

        /**
         * Encodes the specified SixModeReadyGoResData message. Does not implicitly {@link pb.SixModeReadyGoResData.verify|verify} messages.
         * @param message SixModeReadyGoResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeReadyGoResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeReadyGoResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeReadyGoResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeReadyGoResData;
    }

    /** Properties of a SixModeReLoginRes. */
    interface ISixModeReLoginRes {

        /** SixModeReLoginRes code */
        code?: (number|null);

        /** SixModeReLoginRes msg */
        msg?: (string|null);

        /** SixModeReLoginRes data */
        data?: (pb.ISixModeReLoginResData|null);
    }

    /** Represents a SixModeReLoginRes. */
    class SixModeReLoginRes implements ISixModeReLoginRes {

        /**
         * Constructs a new SixModeReLoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeReLoginRes);

        /** SixModeReLoginRes code. */
        public code: number;

        /** SixModeReLoginRes msg. */
        public msg: string;

        /** SixModeReLoginRes data. */
        public data?: (pb.ISixModeReLoginResData|null);

        /**
         * Creates a new SixModeReLoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeReLoginRes instance
         */
        public static create(properties?: pb.ISixModeReLoginRes): pb.SixModeReLoginRes;

        /**
         * Encodes the specified SixModeReLoginRes message. Does not implicitly {@link pb.SixModeReLoginRes.verify|verify} messages.
         * @param message SixModeReLoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeReLoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeReLoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeReLoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeReLoginRes;
    }

    /** Properties of a SixModeReLoginResData. */
    interface ISixModeReLoginResData {

        /** SixModeReLoginResData stage */
        stage?: (string|null);

        /** SixModeReLoginResData curuid */
        curuid?: (string|null);

        /** SixModeReLoginResData dicenum */
        dicenum?: (number|null);

        /** SixModeReLoginResData gameMode */
        gameMode?: (number|null);

        /** SixModeReLoginResData chessboard */
        chessboard?: (pb.ISixModeChessBoard|null);

        /** SixModeReLoginResData roundEndTime */
        roundEndTime?: (number|null);

        /** SixModeReLoginResData dicetype */
        dicetype?: (pb.DiceNumResType|null);

        /** SixModeReLoginResData coin */
        coin?: (number|null);

        /** SixModeReLoginResData userDatas */
        userDatas?: (pb.IUserData[]|null);

        /** SixModeReLoginResData loseCoin */
        loseCoin?: (number|null);

        /** SixModeReLoginResData winCoin */
        winCoin?: (number|null);
    }

    /** Represents a SixModeReLoginResData. */
    class SixModeReLoginResData implements ISixModeReLoginResData {

        /**
         * Constructs a new SixModeReLoginResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeReLoginResData);

        /** SixModeReLoginResData stage. */
        public stage: string;

        /** SixModeReLoginResData curuid. */
        public curuid: string;

        /** SixModeReLoginResData dicenum. */
        public dicenum: number;

        /** SixModeReLoginResData gameMode. */
        public gameMode: number;

        /** SixModeReLoginResData chessboard. */
        public chessboard?: (pb.ISixModeChessBoard|null);

        /** SixModeReLoginResData roundEndTime. */
        public roundEndTime: number;

        /** SixModeReLoginResData dicetype. */
        public dicetype: pb.DiceNumResType;

        /** SixModeReLoginResData coin. */
        public coin: number;

        /** SixModeReLoginResData userDatas. */
        public userDatas: pb.IUserData[];

        /** SixModeReLoginResData loseCoin. */
        public loseCoin: number;

        /** SixModeReLoginResData winCoin. */
        public winCoin: number;

        /**
         * Creates a new SixModeReLoginResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeReLoginResData instance
         */
        public static create(properties?: pb.ISixModeReLoginResData): pb.SixModeReLoginResData;

        /**
         * Encodes the specified SixModeReLoginResData message. Does not implicitly {@link pb.SixModeReLoginResData.verify|verify} messages.
         * @param message SixModeReLoginResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeReLoginResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeReLoginResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeReLoginResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeReLoginResData;
    }

    /** Properties of a SixModeChessBoard. */
    interface ISixModeChessBoard {

        /** SixModeChessBoard airport_planes */
        airport_planes?: (pb.ISixModeAirPortPlane[]|null);

        /** SixModeChessBoard plane */
        plane?: (pb.ISixModePlane[]|null);
    }

    /** Represents a SixModeChessBoard. */
    class SixModeChessBoard implements ISixModeChessBoard {

        /**
         * Constructs a new SixModeChessBoard.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeChessBoard);

        /** SixModeChessBoard airport_planes. */
        public airport_planes: pb.ISixModeAirPortPlane[];

        /** SixModeChessBoard plane. */
        public plane: pb.ISixModePlane[];

        /**
         * Creates a new SixModeChessBoard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeChessBoard instance
         */
        public static create(properties?: pb.ISixModeChessBoard): pb.SixModeChessBoard;

        /**
         * Encodes the specified SixModeChessBoard message. Does not implicitly {@link pb.SixModeChessBoard.verify|verify} messages.
         * @param message SixModeChessBoard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeChessBoard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeChessBoard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeChessBoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeChessBoard;
    }

    /** Properties of a SixModeAirPortPlane. */
    interface ISixModeAirPortPlane {

        /** SixModeAirPortPlane color */
        color?: (number|null);

        /** SixModeAirPortPlane plane */
        plane?: (number|null);
    }

    /** Represents a SixModeAirPortPlane. */
    class SixModeAirPortPlane implements ISixModeAirPortPlane {

        /**
         * Constructs a new SixModeAirPortPlane.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeAirPortPlane);

        /** SixModeAirPortPlane color. */
        public color: number;

        /** SixModeAirPortPlane plane. */
        public plane: number;

        /**
         * Creates a new SixModeAirPortPlane instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeAirPortPlane instance
         */
        public static create(properties?: pb.ISixModeAirPortPlane): pb.SixModeAirPortPlane;

        /**
         * Encodes the specified SixModeAirPortPlane message. Does not implicitly {@link pb.SixModeAirPortPlane.verify|verify} messages.
         * @param message SixModeAirPortPlane message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeAirPortPlane, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeAirPortPlane message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeAirPortPlane
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeAirPortPlane;
    }

    /** Properties of a SixModePlane. */
    interface ISixModePlane {

        /** SixModePlane x */
        x?: (number|null);

        /** SixModePlane color */
        color?: (number|null);

        /** SixModePlane plane */
        plane?: (number|null);
    }

    /** Represents a SixModePlane. */
    class SixModePlane implements ISixModePlane {

        /**
         * Constructs a new SixModePlane.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModePlane);

        /** SixModePlane x. */
        public x: number;

        /** SixModePlane color. */
        public color: number;

        /** SixModePlane plane. */
        public plane: number;

        /**
         * Creates a new SixModePlane instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModePlane instance
         */
        public static create(properties?: pb.ISixModePlane): pb.SixModePlane;

        /**
         * Encodes the specified SixModePlane message. Does not implicitly {@link pb.SixModePlane.verify|verify} messages.
         * @param message SixModePlane message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModePlane, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModePlane message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModePlane
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModePlane;
    }

    /** Properties of a SixModeDiceNumReq. */
    interface ISixModeDiceNumReq {

        /** SixModeDiceNumReq num */
        num?: (number|null);
    }

    /** Represents a SixModeDiceNumReq. */
    class SixModeDiceNumReq implements ISixModeDiceNumReq {

        /**
         * Constructs a new SixModeDiceNumReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeDiceNumReq);

        /** SixModeDiceNumReq num. */
        public num: number;

        /**
         * Creates a new SixModeDiceNumReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeDiceNumReq instance
         */
        public static create(properties?: pb.ISixModeDiceNumReq): pb.SixModeDiceNumReq;

        /**
         * Encodes the specified SixModeDiceNumReq message. Does not implicitly {@link pb.SixModeDiceNumReq.verify|verify} messages.
         * @param message SixModeDiceNumReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeDiceNumReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeDiceNumReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeDiceNumReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeDiceNumReq;
    }

    /** Properties of a SixModeDiceNumRes. */
    interface ISixModeDiceNumRes {

        /** SixModeDiceNumRes code */
        code?: (number|null);

        /** SixModeDiceNumRes msg */
        msg?: (string|null);

        /** SixModeDiceNumRes data */
        data?: (pb.ISixModeDiceNumData|null);
    }

    /** Represents a SixModeDiceNumRes. */
    class SixModeDiceNumRes implements ISixModeDiceNumRes {

        /**
         * Constructs a new SixModeDiceNumRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeDiceNumRes);

        /** SixModeDiceNumRes code. */
        public code: number;

        /** SixModeDiceNumRes msg. */
        public msg: string;

        /** SixModeDiceNumRes data. */
        public data?: (pb.ISixModeDiceNumData|null);

        /**
         * Creates a new SixModeDiceNumRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeDiceNumRes instance
         */
        public static create(properties?: pb.ISixModeDiceNumRes): pb.SixModeDiceNumRes;

        /**
         * Encodes the specified SixModeDiceNumRes message. Does not implicitly {@link pb.SixModeDiceNumRes.verify|verify} messages.
         * @param message SixModeDiceNumRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeDiceNumRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeDiceNumRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeDiceNumRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeDiceNumRes;
    }

    /** Properties of a SixModeDiceNumData. */
    interface ISixModeDiceNumData {

        /** SixModeDiceNumData num */
        num?: (number|null);

        /** SixModeDiceNumData roundEndTime */
        roundEndTime?: (number|null);

        /** SixModeDiceNumData type */
        type?: (pb.DiceNumResType|null);

        /** SixModeDiceNumData uid */
        uid?: (string|null);
    }

    /** Represents a SixModeDiceNumData. */
    class SixModeDiceNumData implements ISixModeDiceNumData {

        /**
         * Constructs a new SixModeDiceNumData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeDiceNumData);

        /** SixModeDiceNumData num. */
        public num: number;

        /** SixModeDiceNumData roundEndTime. */
        public roundEndTime: number;

        /** SixModeDiceNumData type. */
        public type: pb.DiceNumResType;

        /** SixModeDiceNumData uid. */
        public uid: string;

        /**
         * Creates a new SixModeDiceNumData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeDiceNumData instance
         */
        public static create(properties?: pb.ISixModeDiceNumData): pb.SixModeDiceNumData;

        /**
         * Encodes the specified SixModeDiceNumData message. Does not implicitly {@link pb.SixModeDiceNumData.verify|verify} messages.
         * @param message SixModeDiceNumData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeDiceNumData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeDiceNumData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeDiceNumData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeDiceNumData;
    }

    /** Properties of a SixModeMoveReq. */
    interface ISixModeMoveReq {

        /** SixModeMoveReq color */
        color?: (number|null);

        /** SixModeMoveReq plane */
        plane?: (number|null);

        /** SixModeMoveReq type */
        type?: (pb.MoveType|null);

        /** SixModeMoveReq diceNum */
        diceNum?: (number|null);
    }

    /** Represents a SixModeMoveReq. */
    class SixModeMoveReq implements ISixModeMoveReq {

        /**
         * Constructs a new SixModeMoveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeMoveReq);

        /** SixModeMoveReq color. */
        public color: number;

        /** SixModeMoveReq plane. */
        public plane: number;

        /** SixModeMoveReq type. */
        public type: pb.MoveType;

        /** SixModeMoveReq diceNum. */
        public diceNum: number;

        /**
         * Creates a new SixModeMoveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeMoveReq instance
         */
        public static create(properties?: pb.ISixModeMoveReq): pb.SixModeMoveReq;

        /**
         * Encodes the specified SixModeMoveReq message. Does not implicitly {@link pb.SixModeMoveReq.verify|verify} messages.
         * @param message SixModeMoveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeMoveReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeMoveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeMoveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeMoveReq;
    }

    /** Properties of a SixModeCrashPlane. */
    interface ISixModeCrashPlane {

        /** SixModeCrashPlane color */
        color?: (number|null);

        /** SixModeCrashPlane plane */
        plane?: (number|null);

        /** SixModeCrashPlane x */
        x?: (number|null);
    }

    /** Represents a SixModeCrashPlane. */
    class SixModeCrashPlane implements ISixModeCrashPlane {

        /**
         * Constructs a new SixModeCrashPlane.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeCrashPlane);

        /** SixModeCrashPlane color. */
        public color: number;

        /** SixModeCrashPlane plane. */
        public plane: number;

        /** SixModeCrashPlane x. */
        public x: number;

        /**
         * Creates a new SixModeCrashPlane instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeCrashPlane instance
         */
        public static create(properties?: pb.ISixModeCrashPlane): pb.SixModeCrashPlane;

        /**
         * Encodes the specified SixModeCrashPlane message. Does not implicitly {@link pb.SixModeCrashPlane.verify|verify} messages.
         * @param message SixModeCrashPlane message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeCrashPlane, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeCrashPlane message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeCrashPlane
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeCrashPlane;
    }

    /** Properties of a SixModeMoveRes. */
    interface ISixModeMoveRes {

        /** SixModeMoveRes code */
        code?: (number|null);

        /** SixModeMoveRes msg */
        msg?: (string|null);

        /** SixModeMoveRes data */
        data?: (pb.ISixModeMoveResData|null);
    }

    /** Represents a SixModeMoveRes. */
    class SixModeMoveRes implements ISixModeMoveRes {

        /**
         * Constructs a new SixModeMoveRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeMoveRes);

        /** SixModeMoveRes code. */
        public code: number;

        /** SixModeMoveRes msg. */
        public msg: string;

        /** SixModeMoveRes data. */
        public data?: (pb.ISixModeMoveResData|null);

        /**
         * Creates a new SixModeMoveRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeMoveRes instance
         */
        public static create(properties?: pb.ISixModeMoveRes): pb.SixModeMoveRes;

        /**
         * Encodes the specified SixModeMoveRes message. Does not implicitly {@link pb.SixModeMoveRes.verify|verify} messages.
         * @param message SixModeMoveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeMoveRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeMoveRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeMoveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeMoveRes;
    }

    /** Properties of a SixModeMoveResData. */
    interface ISixModeMoveResData {

        /** SixModeMoveResData uid */
        uid?: (string|null);

        /** SixModeMoveResData plane */
        plane?: (pb.ISixModePlane|null);

        /** SixModeMoveResData airport_plane */
        airport_plane?: (pb.ISixModeAirPortPlane|null);

        /** SixModeMoveResData type */
        type?: (pb.MoveType|null);

        /** SixModeMoveResData crashPlanes */
        crashPlanes?: (pb.ISixModeCrashPlane[]|null);

        /** SixModeMoveResData next_uid */
        next_uid?: (string|null);

        /** SixModeMoveResData roundEndTime */
        roundEndTime?: (number|null);

        /** SixModeMoveResData diceNum */
        diceNum?: (number|null);
    }

    /** Represents a SixModeMoveResData. */
    class SixModeMoveResData implements ISixModeMoveResData {

        /**
         * Constructs a new SixModeMoveResData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISixModeMoveResData);

        /** SixModeMoveResData uid. */
        public uid: string;

        /** SixModeMoveResData plane. */
        public plane?: (pb.ISixModePlane|null);

        /** SixModeMoveResData airport_plane. */
        public airport_plane?: (pb.ISixModeAirPortPlane|null);

        /** SixModeMoveResData type. */
        public type: pb.MoveType;

        /** SixModeMoveResData crashPlanes. */
        public crashPlanes: pb.ISixModeCrashPlane[];

        /** SixModeMoveResData next_uid. */
        public next_uid: string;

        /** SixModeMoveResData roundEndTime. */
        public roundEndTime: number;

        /** SixModeMoveResData diceNum. */
        public diceNum: number;

        /**
         * Creates a new SixModeMoveResData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SixModeMoveResData instance
         */
        public static create(properties?: pb.ISixModeMoveResData): pb.SixModeMoveResData;

        /**
         * Encodes the specified SixModeMoveResData message. Does not implicitly {@link pb.SixModeMoveResData.verify|verify} messages.
         * @param message SixModeMoveResData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISixModeMoveResData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SixModeMoveResData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SixModeMoveResData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SixModeMoveResData;
    }

    /** Properties of a GetAllSkin2Req. */
    interface IGetAllSkin2Req {
    }

    /** Represents a GetAllSkin2Req. */
    class GetAllSkin2Req implements IGetAllSkin2Req {

        /**
         * Constructs a new GetAllSkin2Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetAllSkin2Req);

        /**
         * Creates a new GetAllSkin2Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllSkin2Req instance
         */
        public static create(properties?: pb.IGetAllSkin2Req): pb.GetAllSkin2Req;

        /**
         * Encodes the specified GetAllSkin2Req message. Does not implicitly {@link pb.GetAllSkin2Req.verify|verify} messages.
         * @param message GetAllSkin2Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetAllSkin2Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllSkin2Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllSkin2Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetAllSkin2Req;
    }

    /** Properties of a UserSkin2Message. */
    interface IUserSkin2Message {

        /** UserSkin2Message crystalCoin */
        crystalCoin?: (number|null);

        /** UserSkin2Message decorated */
        decorated?: (pb.ISkins1Msg[]|null);

        /** UserSkin2Message owners */
        owners?: (pb.ISkins1Msg[]|null);

        /** UserSkin2Message diamond */
        diamond?: (number|null);
    }

    /** Represents a UserSkin2Message. */
    class UserSkin2Message implements IUserSkin2Message {

        /**
         * Constructs a new UserSkin2Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUserSkin2Message);

        /** UserSkin2Message crystalCoin. */
        public crystalCoin: number;

        /** UserSkin2Message decorated. */
        public decorated: pb.ISkins1Msg[];

        /** UserSkin2Message owners. */
        public owners: pb.ISkins1Msg[];

        /** UserSkin2Message diamond. */
        public diamond: number;

        /**
         * Creates a new UserSkin2Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSkin2Message instance
         */
        public static create(properties?: pb.IUserSkin2Message): pb.UserSkin2Message;

        /**
         * Encodes the specified UserSkin2Message message. Does not implicitly {@link pb.UserSkin2Message.verify|verify} messages.
         * @param message UserSkin2Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUserSkin2Message, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSkin2Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSkin2Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UserSkin2Message;
    }

    /** Properties of a DiamondGetReq. */
    interface IDiamondGetReq {

        /** DiamondGetReq forceQuery */
        forceQuery?: (boolean|null);
    }

    /** Represents a DiamondGetReq. */
    class DiamondGetReq implements IDiamondGetReq {

        /**
         * Constructs a new DiamondGetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDiamondGetReq);

        /** DiamondGetReq forceQuery. */
        public forceQuery: boolean;

        /**
         * Creates a new DiamondGetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiamondGetReq instance
         */
        public static create(properties?: pb.IDiamondGetReq): pb.DiamondGetReq;

        /**
         * Encodes the specified DiamondGetReq message. Does not implicitly {@link pb.DiamondGetReq.verify|verify} messages.
         * @param message DiamondGetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDiamondGetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiamondGetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiamondGetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DiamondGetReq;
    }

    /** Properties of a DiamondGetRes. */
    interface IDiamondGetRes {

        /** DiamondGetRes forceQuery */
        forceQuery?: (boolean|null);

        /** DiamondGetRes diamond */
        diamond?: (number|null);

        /** DiamondGetRes code */
        code?: (number|null);
    }

    /** Represents a DiamondGetRes. */
    class DiamondGetRes implements IDiamondGetRes {

        /**
         * Constructs a new DiamondGetRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDiamondGetRes);

        /** DiamondGetRes forceQuery. */
        public forceQuery: boolean;

        /** DiamondGetRes diamond. */
        public diamond: number;

        /** DiamondGetRes code. */
        public code: number;

        /**
         * Creates a new DiamondGetRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiamondGetRes instance
         */
        public static create(properties?: pb.IDiamondGetRes): pb.DiamondGetRes;

        /**
         * Encodes the specified DiamondGetRes message. Does not implicitly {@link pb.DiamondGetRes.verify|verify} messages.
         * @param message DiamondGetRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDiamondGetRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiamondGetRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiamondGetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DiamondGetRes;
    }

    /** Properties of a GetAllSkin2Res. */
    interface IGetAllSkin2Res {

        /** GetAllSkin2Res skin */
        skin?: (pb.IUserSkin2Message|null);

        /** GetAllSkin2Res uid */
        uid?: (string|null);

        /** GetAllSkin2Res code */
        code?: (number|null);
    }

    /** Represents a GetAllSkin2Res. */
    class GetAllSkin2Res implements IGetAllSkin2Res {

        /**
         * Constructs a new GetAllSkin2Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetAllSkin2Res);

        /** GetAllSkin2Res skin. */
        public skin?: (pb.IUserSkin2Message|null);

        /** GetAllSkin2Res uid. */
        public uid: string;

        /** GetAllSkin2Res code. */
        public code: number;

        /**
         * Creates a new GetAllSkin2Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllSkin2Res instance
         */
        public static create(properties?: pb.IGetAllSkin2Res): pb.GetAllSkin2Res;

        /**
         * Encodes the specified GetAllSkin2Res message. Does not implicitly {@link pb.GetAllSkin2Res.verify|verify} messages.
         * @param message GetAllSkin2Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetAllSkin2Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllSkin2Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllSkin2Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetAllSkin2Res;
    }

    /** Properties of a SkinSetting2Msg. */
    interface ISkinSetting2Msg {

        /** SkinSetting2Msg type */
        type?: (number|null);

        /** SkinSetting2Msg id */
        id?: (number|null);

        /** SkinSetting2Msg defSkin */
        defSkin?: (number|null);

        /** SkinSetting2Msg minLevel */
        minLevel?: (number|null);

        /** SkinSetting2Msg minScene */
        minScene?: (number|null);

        /** SkinSetting2Msg skinCoin */
        skinCoin?: (number|null);

        /** SkinSetting2Msg order */
        order?: (number|null);

        /** SkinSetting2Msg quality */
        quality?: (number|null);

        /** SkinSetting2Msg coinType */
        coinType?: (number|null);

        /** SkinSetting2Msg sourceCoin */
        sourceCoin?: (number|null);
    }

    /** Represents a SkinSetting2Msg. */
    class SkinSetting2Msg implements ISkinSetting2Msg {

        /**
         * Constructs a new SkinSetting2Msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISkinSetting2Msg);

        /** SkinSetting2Msg type. */
        public type: number;

        /** SkinSetting2Msg id. */
        public id: number;

        /** SkinSetting2Msg defSkin. */
        public defSkin: number;

        /** SkinSetting2Msg minLevel. */
        public minLevel: number;

        /** SkinSetting2Msg minScene. */
        public minScene: number;

        /** SkinSetting2Msg skinCoin. */
        public skinCoin: number;

        /** SkinSetting2Msg order. */
        public order: number;

        /** SkinSetting2Msg quality. */
        public quality: number;

        /** SkinSetting2Msg coinType. */
        public coinType: number;

        /** SkinSetting2Msg sourceCoin. */
        public sourceCoin: number;

        /**
         * Creates a new SkinSetting2Msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkinSetting2Msg instance
         */
        public static create(properties?: pb.ISkinSetting2Msg): pb.SkinSetting2Msg;

        /**
         * Encodes the specified SkinSetting2Msg message. Does not implicitly {@link pb.SkinSetting2Msg.verify|verify} messages.
         * @param message SkinSetting2Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISkinSetting2Msg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SkinSetting2Msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkinSetting2Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SkinSetting2Msg;
    }

    /** Properties of a GetSkinSetting2Req. */
    interface IGetSkinSetting2Req {
    }

    /** Represents a GetSkinSetting2Req. */
    class GetSkinSetting2Req implements IGetSkinSetting2Req {

        /**
         * Constructs a new GetSkinSetting2Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetSkinSetting2Req);

        /**
         * Creates a new GetSkinSetting2Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSkinSetting2Req instance
         */
        public static create(properties?: pb.IGetSkinSetting2Req): pb.GetSkinSetting2Req;

        /**
         * Encodes the specified GetSkinSetting2Req message. Does not implicitly {@link pb.GetSkinSetting2Req.verify|verify} messages.
         * @param message GetSkinSetting2Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetSkinSetting2Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSkinSetting2Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSkinSetting2Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetSkinSetting2Req;
    }

    /** Properties of a GetSkinSetting2Res. */
    interface IGetSkinSetting2Res {

        /** GetSkinSetting2Res skins */
        skins?: (pb.ISkinSetting2Msg[]|null);
    }

    /** Represents a GetSkinSetting2Res. */
    class GetSkinSetting2Res implements IGetSkinSetting2Res {

        /**
         * Constructs a new GetSkinSetting2Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetSkinSetting2Res);

        /** GetSkinSetting2Res skins. */
        public skins: pb.ISkinSetting2Msg[];

        /**
         * Creates a new GetSkinSetting2Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSkinSetting2Res instance
         */
        public static create(properties?: pb.IGetSkinSetting2Res): pb.GetSkinSetting2Res;

        /**
         * Encodes the specified GetSkinSetting2Res message. Does not implicitly {@link pb.GetSkinSetting2Res.verify|verify} messages.
         * @param message GetSkinSetting2Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetSkinSetting2Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSkinSetting2Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSkinSetting2Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetSkinSetting2Res;
    }

    /** Properties of a BuySkin2Req. */
    interface IBuySkin2Req {

        /** BuySkin2Req type */
        type?: (number|null);

        /** BuySkin2Req id */
        id?: (number|null);
    }

    /** Represents a BuySkin2Req. */
    class BuySkin2Req implements IBuySkin2Req {

        /**
         * Constructs a new BuySkin2Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBuySkin2Req);

        /** BuySkin2Req type. */
        public type: number;

        /** BuySkin2Req id. */
        public id: number;

        /**
         * Creates a new BuySkin2Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuySkin2Req instance
         */
        public static create(properties?: pb.IBuySkin2Req): pb.BuySkin2Req;

        /**
         * Encodes the specified BuySkin2Req message. Does not implicitly {@link pb.BuySkin2Req.verify|verify} messages.
         * @param message BuySkin2Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBuySkin2Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuySkin2Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuySkin2Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.BuySkin2Req;
    }

    /** Properties of a BuySkin2Res. */
    interface IBuySkin2Res {

        /** BuySkin2Res type */
        type?: (number|null);

        /** BuySkin2Res id */
        id?: (number|null);

        /** BuySkin2Res crystalCoin */
        crystalCoin?: (number|null);

        /** BuySkin2Res diamond */
        diamond?: (number|null);

        /** BuySkin2Res code */
        code?: (number|null);
    }

    /** Represents a BuySkin2Res. */
    class BuySkin2Res implements IBuySkin2Res {

        /**
         * Constructs a new BuySkin2Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBuySkin2Res);

        /** BuySkin2Res type. */
        public type: number;

        /** BuySkin2Res id. */
        public id: number;

        /** BuySkin2Res crystalCoin. */
        public crystalCoin: number;

        /** BuySkin2Res diamond. */
        public diamond: number;

        /** BuySkin2Res code. */
        public code: number;

        /**
         * Creates a new BuySkin2Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuySkin2Res instance
         */
        public static create(properties?: pb.IBuySkin2Res): pb.BuySkin2Res;

        /**
         * Encodes the specified BuySkin2Res message. Does not implicitly {@link pb.BuySkin2Res.verify|verify} messages.
         * @param message BuySkin2Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBuySkin2Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuySkin2Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuySkin2Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.BuySkin2Res;
    }

    /** Properties of a DecorateSkin2Req. */
    interface IDecorateSkin2Req {

        /** DecorateSkin2Req type */
        type?: (number|null);

        /** DecorateSkin2Req id */
        id?: (number|null);
    }

    /** Represents a DecorateSkin2Req. */
    class DecorateSkin2Req implements IDecorateSkin2Req {

        /**
         * Constructs a new DecorateSkin2Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDecorateSkin2Req);

        /** DecorateSkin2Req type. */
        public type: number;

        /** DecorateSkin2Req id. */
        public id: number;

        /**
         * Creates a new DecorateSkin2Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecorateSkin2Req instance
         */
        public static create(properties?: pb.IDecorateSkin2Req): pb.DecorateSkin2Req;

        /**
         * Encodes the specified DecorateSkin2Req message. Does not implicitly {@link pb.DecorateSkin2Req.verify|verify} messages.
         * @param message DecorateSkin2Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDecorateSkin2Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DecorateSkin2Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DecorateSkin2Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DecorateSkin2Req;
    }

    /** Properties of a DecorateSkin2Res. */
    interface IDecorateSkin2Res {

        /** DecorateSkin2Res type */
        type?: (number|null);

        /** DecorateSkin2Res id */
        id?: (number|null);

        /** DecorateSkin2Res code */
        code?: (number|null);
    }

    /** Represents a DecorateSkin2Res. */
    class DecorateSkin2Res implements IDecorateSkin2Res {

        /**
         * Constructs a new DecorateSkin2Res.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDecorateSkin2Res);

        /** DecorateSkin2Res type. */
        public type: number;

        /** DecorateSkin2Res id. */
        public id: number;

        /** DecorateSkin2Res code. */
        public code: number;

        /**
         * Creates a new DecorateSkin2Res instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecorateSkin2Res instance
         */
        public static create(properties?: pb.IDecorateSkin2Res): pb.DecorateSkin2Res;

        /**
         * Encodes the specified DecorateSkin2Res message. Does not implicitly {@link pb.DecorateSkin2Res.verify|verify} messages.
         * @param message DecorateSkin2Res message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDecorateSkin2Res, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DecorateSkin2Res message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DecorateSkin2Res
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DecorateSkin2Res;
    }

    /** Properties of a GetChannelReq. */
    interface IGetChannelReq {

        /** GetChannelReq type */
        type?: (number|null);
    }

    /** Represents a GetChannelReq. */
    class GetChannelReq implements IGetChannelReq {

        /**
         * Constructs a new GetChannelReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetChannelReq);

        /** GetChannelReq type. */
        public type: number;

        /**
         * Creates a new GetChannelReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChannelReq instance
         */
        public static create(properties?: pb.IGetChannelReq): pb.GetChannelReq;

        /**
         * Encodes the specified GetChannelReq message. Does not implicitly {@link pb.GetChannelReq.verify|verify} messages.
         * @param message GetChannelReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetChannelReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChannelReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChannelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetChannelReq;
    }

    /** Properties of a GetChannelRes. */
    interface IGetChannelRes {

        /** GetChannelRes type */
        type?: (number|null);

        /** GetChannelRes channelId */
        channelId?: (string|null);

        /** GetChannelRes code */
        code?: (number|null);
    }

    /** Represents a GetChannelRes. */
    class GetChannelRes implements IGetChannelRes {

        /**
         * Constructs a new GetChannelRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetChannelRes);

        /** GetChannelRes type. */
        public type: number;

        /** GetChannelRes channelId. */
        public channelId: string;

        /** GetChannelRes code. */
        public code: number;

        /**
         * Creates a new GetChannelRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChannelRes instance
         */
        public static create(properties?: pb.IGetChannelRes): pb.GetChannelRes;

        /**
         * Encodes the specified GetChannelRes message. Does not implicitly {@link pb.GetChannelRes.verify|verify} messages.
         * @param message GetChannelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetChannelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChannelRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChannelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetChannelRes;
    }
}
