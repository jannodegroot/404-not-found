export type AdditionalInfo = {
    /** attribute name of the control */
    Attribute?: string | undefined | null;
    Symbol?: string | undefined | null;
    [key: string]: string | undefined | null;
};
/**
 * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
 * Adds contextual information (module type, ID, origin) to the message for improved traceability.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param control Control instance used to derive module type and ID which is included in the composed context.
 * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function error(control: TcHmi.Controls.System.baseTcHmiControl, origin: string, message: string, ...optionalParameters: any[]): void;
/**
 * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
 * Adds contextual information (module type, ID, origin, custom) to the message for improved traceability.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param control Control instance used to derive module type and ID which is included in the composed context.
 * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
 * @param additionalInfo Additional custom context information. The key and value of this object will be shown in output. {Attribute: "Top"} will add "Attribute=Top" into the log.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function error(control: TcHmi.Controls.System.baseTcHmiControl, origin: string, additionalInfo: AdditionalInfo, message: string, ...optionalParameters: any[]): void;
/**
 * Prints out a warn message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
 * Adds contextual information (module type, ID, origin) to the message for improved traceability.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param control Control instance used to derive module type and ID which is included in the composed context.
 * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function warn(control: TcHmi.Controls.System.baseTcHmiControl, origin: string, message: string, ...optionalParameters: any[]): void;
/**
 * Prints out a warn message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
 * Adds contextual information (module type, ID, origin, custom) to the message for improved traceability.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param control Control instance used to derive module type and ID which is included in the composed context.
 * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
 * @param additionalInfo Additional custom context information. The key and value of this object will be shown in output. {Attribute: "Top"} will add "Attribute=Top" into the log.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function warn(control: TcHmi.Controls.System.baseTcHmiControl, origin: string, additionalInfo: AdditionalInfo, message: string, ...optionalParameters: any[]): void;
/**
 * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
 * Adds contextual information (module type, ID, origin) to the message for improved traceability.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param control Control instance used to derive module type and ID which is included in the composed context.
 * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function info(control: TcHmi.Controls.System.baseTcHmiControl, origin: string, message: string, ...optionalParameters: any[]): void;
/**
 * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
 * Adds contextual information (module type, ID, origin, custom) to the message for improved traceability.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param control Control instance used to derive module type and ID which is included in the composed context.
 * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
 * @param additionalInfo Additional custom context information. The key and value of this object will be shown in output. {Attribute: "Top"} will add "Attribute=Top" into the log.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function info(control: TcHmi.Controls.System.baseTcHmiControl, origin: string, additionalInfo: AdditionalInfo, message: string, ...optionalParameters: any[]): void;
/**
 * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
 * Adds contextual information (module type, ID, origin) to the message for improved traceability.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param control Control instance used to derive module type and ID which is included in the composed context.
 * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function debug(control: TcHmi.Controls.System.baseTcHmiControl, origin: string, message: string, ...optionalParameters: any[]): void;
/**
 * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
 * Adds contextual information (module type, ID, origin, custom) to the message for improved traceability.
 * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
 * See "client" page in config page of the server for live overrides.
 * @param control Control instance used to derive module type and ID which is included in the composed context.
 * @param origin The fully qualified name of the control which is included in the composed context if it differs from the control type.
 * @param additionalInfo Additional custom context information. The key and value of this object will be shown in output. {Attribute: "Top"} will add "Attribute=Top" into the log.
 * @param message The text which will be printed out in the browsers console and/or written to the browser database.
 * @param optionalParameters Optional parameters
 * @preserve (Part of the public API)
 */
export declare function debug(control: TcHmi.Controls.System.baseTcHmiControl, origin: string, additionalInfo: AdditionalInfo, message: string, ...optionalParameters: any[]): void;
declare const _error: typeof error;
declare const _warn: typeof warn;
declare const _info: typeof info;
declare const _debug: typeof debug;
type tAdditionalInfo = AdditionalInfo;
declare global {
    namespace TcHmi.Log {
        namespace Controls {
            const error: typeof _error;
            const warn: typeof _warn;
            const info: typeof _info;
            const debug: typeof _debug;
            type AdditionalInfo = tAdditionalInfo;
        }
    }
}
export {};
//# sourceMappingURL=Log.Controls.d.ts.map