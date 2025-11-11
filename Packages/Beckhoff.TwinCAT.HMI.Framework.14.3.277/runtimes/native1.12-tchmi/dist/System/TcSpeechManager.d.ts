export declare class TcSpeechManager {
    constructor();
    /**
     * (Re-)Starts the rtc connection to tcspeech.
     * @param options This option can override all setting from tchmiconfig.json and more
     * @param callback Gets notification when opening connection failed.
     */
    openConnection(options?: TcHmi.TcSpeech.ConnectionOptions & Partial<TcHmi.TcSpeech.BaseConfig>, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
    /**
     * Closes an active connection to TcSpeech.
     * @param options Can target a specific remote tcspeech engine
     * @param callback A callback to get feedback
     */
    closeConnection(options?: {
        remoteSocketId?: number;
    }, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
    /**
     * Sets the volume (between 0 and 1) of speech output on this device.
     * @param newValue new volume. Will be capped between 0 and 1.
     */
    setVolume(newValue: number): void;
    /**
     * Add a new used trigger. This is transported to the speech engine after 50 ms when no other registration postpones it.
     * Called in unit test.
     * @param eventname new event name.
     */
    __addUsedSpeechTrigger(eventname: string): void;
    /**
     * Remove a used trigger. This is transported to the speech engine after 50 ms when no other registration postpones it.
     * Called in unit test.
     * @param eventname the event name to remove.
     */
    __removeUsedSpeechTrigger(eventname: string): void;
    /**
     * Starting output of text. The connection must be open at this point and we have to have enableSpeaker.
     * The callback will get a guid which can be used to stop or request status of the speech synthesis.
     * @param text Text to be synthesized
     * @param options
     * @param callback The callback will get a guid which can be used to stop or request status of the speech synthesis.
     */
    speechSynthesisStart(text: string, options?: {
        priority?: TcHmi.TcSpeech.AudioEntityPriority;
    }, callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
    /**
     * Request the state (queued, playing, stopped) of a given speech synthesis call.
     * @param guid guid for the request. Can be fetched from the callback of speechSynthesisStart
     * @param callback The callback will get the state of the speech synthesis
     */
    speechSynthesisGetStatus(guid: string, callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
    /**
     * Stops a given speech synthesis call.
     * @param guid guid for the request. Can be fetched from the callback of speechSynthesisStart
     * @param callback The callback will get the state of the speech synthesis
     * @preserve (Part of the public API)
     */
    speechSynthesisStop(guid: string, callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
}
export declare const enum ClientState {
    INITIAL_VALUE = 0,
    IDLE = 1,
    INITIALIZE_CONNECTION = 2,
    REGISTER_CLIENT_CONFIG = 3,
    REQUEST_AUDIO_STREAM = 4,
    REQUEST_RTC_OFFER = 5,
    FIND_REGISTERED_SPEECH_SERVICES = 6,
    SEND_OFFER = 7,
    CONNECTED = 8,
    DISCONNECTED = 9,
    GOT_ERROR = 10
}
export declare const enum DomainWatchState {
    NO = 0,
    WAITING = 102,
    WATCHACTIVE = 200
}
export interface IVersionedSpeechCommand {
    /** Socket id of the peer starting the signaling connection. */
    SocketId: number;
    /** Socket id of the remote peer. */
    RemoteSocketId: number;
    SpeechApiVersion: 1;
}
/** Register call for the Speech Registry */
export interface IClientRegisterEntry extends IVersionedSpeechCommand {
    RegisterDate: string;
    /** This client can provide an audio source. */
    AudioSource: boolean;
    /** This client can consume an audio stream. */
    AudioSink: boolean;
    /** This client can start a WebRTC call. */
    CanOffer: boolean;
    /** This client can answer a WebRTC call. */
    CanAnswer: boolean;
    /** Version string of the client. */
    Version: string;
    PotentialLocales: string[];
    State: 'available' | 'busy' | 'offline';
}
export interface ISignalingCommand {
    /** SDP for the peer or empty if deactivated */
    SDP: string;
}
/** WebRTC Offer data of the Client. */
export interface IOfferCommand extends ISignalingCommand {
    /** Type of the command */
    Type: 'Offer';
}
/** WebRTC Answer data of the Speech Service. */
export interface IAnswerCommand extends ISignalingCommand {
    /** Type of the command */
    Type: 'Answer';
}
export interface IIceCandidates {
    /** Type of the command */
    Type: 'IceCandidates';
    /** List of candidates */
    Candidates: RTCIceCandidateInit[];
}
export interface IClientConfig extends IVersionedSpeechCommand {
    CurrentCommands: string[];
    CurrentLocales: string[];
}
export interface IBaseCommand {
    /** Type of the command */
    Type: string;
}
export interface IDetectedCommand extends IBaseCommand {
    /** Type of the command */
    Type: 'DetectedCommand';
    /** Recognition Tag of the active SRGS file which was detected. */
    DetectedCommand: string;
    /**
     * A relative measure of the certainty of correct recognition of a phrase.
     * The value is from 0.0 to 1.0, for low to high confidence, respectively. */
    Confidence: number;
    /** Parameter which was detected by speech recognition. */
    Parameter: unknown;
}
export interface ILogOnClientCommand extends IBaseCommand {
    /** Type of the command */
    Type: 'LogOnClientCommand';
    /** Number as enum: None = 0, Error = 1, Warning = 2, Info = 3, Debug = 4 */
    Severity: TcHmi.LOG_LEVEL;
    /** The messages to display in Log. Multiple values will be displayed in one log entry in a nice way: ['Got this', {'Hello': 'World'}] */
    MessageParts: any[];
}
export interface ISpeechSynthesisStart extends IBaseCommand {
    Type: 'SpeechSynthesisStart';
    /** Text to generate audio from. */
    Text: string;
    /** Priority of the text. */
    Priority: TcHmi.TcSpeech.AudioEntityPriority;
    /** GUID for this request. */
    Guid: string;
}
export interface ISpeechSynthesisStop extends IBaseCommand {
    Type: 'SpeechSynthesisStop';
    /** GUID for this request. */
    Guid: string;
}
export interface ISpeechSynthesisGetStatus extends IBaseCommand {
    Type: 'SpeechSynthesisGetStatus';
    /** GUID for this request. */
    Guid: string;
}
/** Answer to SpeechSynthesisGetStatus */
export interface ISpeechSynthesisStatus extends IBaseCommand {
    Type: 'SpeechSynthesisStatus';
    /** GUID for this request. */
    Guid: string;
    State: 'Queued' | 'Playing' | 'Stopped';
}
export interface IPayloadContainer<T = unknown> extends IVersionedSpeechCommand {
    /** Command itself */
    Command: T;
}
/** Runtime Manager */
export declare const tcSpeechManager: TcSpeechManager;
//# sourceMappingURL=TcSpeechManager.d.ts.map