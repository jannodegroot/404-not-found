/**
 * (Re-)Starts the rtc connection to TwinCAT speech engine.
 * @param options This option can override all setting from tchmiconfig.json and more
 * @param callback Gets notification when opening connection failed.
 * @preserve (Part of the public API)
 */
export declare function openConnection(options?: TcHmi.TcSpeech.ConnectionOptions & Partial<TcHmi.TcSpeech.BaseConfig>, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
/**
 * Closes an active connection to TwinCAT speech engine.
 * @param options Can target a specific remote TwinCAT speech engine
 * @param options.remoteSocketId socket id to close
 * @param callback A callback to get feedback
 * @preserve (Part of the public API)
 */
export declare function closeConnection(options?: {
    remoteSocketId?: number;
}, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
/**
 * Sets the volume (between 0 and 1) of speech output on this device.
 * @param valueNew new volume. Will be capped between 0 and 1.
 * @preserve (Part of the public API)
 */
export declare function setVolume(valueNew: number): void;
/**
 * Functions for SpeechSynthesis .
 * @preserve (Part of the public API)
 */
export declare class SpeechSynthesis {
    /** Text to be synthesized */
    readonly text: string;
    readonly options?: {
        priority?: TcHmi.TcSpeech.AudioEntityPriority;
    } | undefined;
    /**
     * Functions for SpeechSynthesis .
     * @param text Text to be synthesized
     * @param options Options
     * @param options.priority Audio entity priority
     * @preserve (Part of the public API)
     */
    constructor(
    /** Text to be synthesized */
    text: string, options?: {
        priority?: TcHmi.TcSpeech.AudioEntityPriority;
    } | undefined);
    private __guid;
    /**
     * Starting output of text. The connection must be open at this point and we have to have enableSpeaker.
     * The callback will get a guid which can be used to stop or request status of the speech synthesis.
     * @param callback The callback will get a guid which can be used to stop or request status of the speech synthesis.
     * @preserve (Part of the public API)
     */
    start(callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
    /**
     * Request the state (queued, playing, stopped) of a given speech synthesis call.
     * @param callback The callback will get the state of the speech synthesis
     * @preserve (Part of the public API)
     */
    getStatus(callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
    /**
     * Stops a given speech synthesis call.
     * @param callback The callback will get the state of the speech synthesis
     * @preserve (Part of the public API)
     */
    stop(callback?: null | ((this: void, data: TcHmi.TcSpeech.SpeechSynthesisResult) => void)): void;
}
declare const _openConnection: typeof openConnection;
declare const _closeConnection: typeof closeConnection;
declare const _setVolume: typeof setVolume;
declare const _SpeechSynthesis: typeof SpeechSynthesis;
type tSpeechSynthesis = SpeechSynthesis;
declare global {
    namespace TcHmi {
        /**
         * Functions for interaction with TcSpeech.
         * @preserve (Part of the public API)
         */
        namespace TcSpeech {
            let openConnection: typeof _openConnection;
            let closeConnection: typeof _closeConnection;
            let setVolume: typeof _setVolume;
            let SpeechSynthesis: typeof _SpeechSynthesis;
            type SpeechSynthesis = tSpeechSynthesis;
        }
    }
}
export {};
//# sourceMappingURL=TcSpeech.d.ts.map