declare global {
    namespace TcHmi {
        /**
         * Provides functions for logging.
         * @preserve (Part of the public API)
         */
        namespace Log {
            /** When set to true no prefix will be printed with log messages. */
            let Prefix: boolean;
            /** When set to true the configured log level will be ignored and the messages logged anyway. */
            let Force: boolean;
        }
    }
}
/**
 * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
 * If the message is an object it will be inspectable in most debug tools. See errorEx if you want to show multiple objects.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param forceNoPrefix If set the date will be hidden
 * @preserve (Part of the public API)
 */
export declare function error(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
/**
 * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function errorEx(message: string, ...optionalParameters: any[]): void;
/**
 * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
 * If the message is an object it will be inspectable in most debug tools. See warnEx if you want to show multiple objects.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param forceNoPrefix If set the date will be hidden
 * @preserve (Part of the public API)
 */
export declare function warn(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
/**
 * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function warnEx(message: string, ...optionalParameters: any[]): void;
/**
 * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
 * If the message is an object it will be inspectable in most debug tools. See infoEx if you want to show multiple objects.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param forceNoPrefix If set the date will be hidden
 * @preserve (Part of the public API)
 */
export declare function info(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
/**
 * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function infoEx(message: string, ...optionalParameters: any[]): void;
/**
 * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
 * If the message is an object it will be inspectable in most debug tools. See debugEx if you want to show multiple objects.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param forceNoPrefix If set the date will be hidden
 * @preserve (Part of the public API)
 */
export declare function debug(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
/**
 * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function debugEx(message: string, ...optionalParameters: any[]): void;
/**
 * Starts a new timer for performance analysis and stops the current timer
 * Is also responsible for console grouping
 * @param timerName Human readable name of the starting Timer or null to end timer
 */
export declare function performanceLog(timerName: string | null): void;
/**
 * Starts a new timer for performance analysis
 * @param timerName Human readable name of the starting Timer
 */
export declare function performanceLogStart(timerName: string): void;
/**
 * Stops an existing timer for performance analysis
 * @param timerName Human readable name of the starting Timer
 */
export declare function performanceLogEnd(timerName: string): void;
/**
 * Builds a formatted message of hierarchical error objects.
 * @param error Error object to show nicely
 * @preserve (Part of the public API)
 */
export declare function buildMessage(error: TcHmi.IErrorDetails | undefined): string;
declare const _error: typeof error;
declare const _errorEx: typeof errorEx;
declare const _warn: typeof warn;
declare const _warnEx: typeof warnEx;
declare const _info: typeof info;
declare const _infoEx: typeof infoEx;
declare const _debug: typeof debug;
declare const _debugEx: typeof debugEx;
declare const _performanceLog: typeof performanceLog;
declare const _performanceLogStart: typeof performanceLogStart;
declare const _performanceLogEnd: typeof performanceLogEnd;
declare const _buildMessage: typeof buildMessage;
declare global {
    namespace TcHmi {
        /**
         * Provides functions for logging.
         * @preserve (Part of the public API)
         */
        namespace Log {
            let error: typeof _error;
            let errorEx: typeof _errorEx;
            let warn: typeof _warn;
            let warnEx: typeof _warnEx;
            let info: typeof _info;
            let infoEx: typeof _infoEx;
            let debug: typeof _debug;
            let debugEx: typeof _debugEx;
            let performanceLog: typeof _performanceLog;
            let performanceLogStart: typeof _performanceLogStart;
            let performanceLogEnd: typeof _performanceLogEnd;
            let buildMessage: typeof _buildMessage;
        }
    }
}
export {};
//# sourceMappingURL=Log.d.ts.map