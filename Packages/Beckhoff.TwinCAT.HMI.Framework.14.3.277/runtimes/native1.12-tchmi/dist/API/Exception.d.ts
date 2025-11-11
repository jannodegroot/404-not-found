/**
 * Represents a TcHmi Error.
 */
export declare class Exception extends Error {
    protected __details: TcHmi.SelectableRequired<TcHmi.IErrorDetails, 'message'>;
    /**
     * Creates a new Exception.
     * @param details The error details for this exception.
     */
    constructor(details: TcHmi.IErrorDetails);
    /**
     * Creates a new Exception.
     * @param code The error code.
     * @param reason The reason for the error in user-friendly plain text.
     * @param domain The domain the error originates from.
     * @param exception Underlying native JavaScript error, if there is one.
     */
    constructor(code: Exclude<TcHmi.Errors, TcHmi.Errors.NONE>, reason: string, domain: string, exception?: Error);
    /**
     * Creates a new Exception.
     * @param code The error code.
     * @param reason The reason for the error in user-friendly plain text.
     * @param domain The domain the error originates from.
     * @param errors Underlying TcHmi errors, if there are any.
     */
    constructor(code: Exclude<TcHmi.Errors, TcHmi.Errors.NONE>, reason: string, domain: string, errors?: TcHmi.IErrorDetails[]);
    /**
     * Creates a new Exception.
     * @param code The error code.
     * @param reason The reason for the error in user-friendly plain text.
     * @param domain The domain the error originates from.
     * @param exception Underlying native JavaScript error, if there is one.
     * @param errors Underlying TcHmi errors, if there are any.
     */
    constructor(code: Exclude<TcHmi.Errors, TcHmi.Errors.NONE>, reason: string, domain: string, exception?: Error, errors?: TcHmi.IErrorDetails[]);
    /**
     * Gets the error code.
     */
    get code(): TcHmi.Errors | number;
    /**
     * Gets the string name of the code in the Errors enum.
     */
    get message(): string;
    /**
     * Gets the reason for the error in user-friendly plain text.
     */
    get reason(): string | undefined;
    /**
     * Gets the domain the error originates from.
     */
    get domain(): string | undefined;
    /**
     * Gets the underlying native JavaScript error, if there is one.
     */
    get exception(): Error | undefined;
    /**
     * Gets the underlying TcHmi errors, if there are any.
     */
    get errors(): TcHmi.IErrorDetails[] | undefined;
    /**
     * Gets the error details.
     */
    get details(): TcHmi.IErrorDetails;
    /**
     * Adds underlying TcHmi errors.
     * @param errors The errors to add.
     */
    pushSubErrors(...errors: TcHmi.IErrorDetails[]): number;
    /**
     * Builds a formatted message of the Exception.
     */
    buildMessage(): string;
    /**
     * Logs the Exception in the console with information about the caller.
     * @param callerInfo Information about the caller.
     * @param message An optional message to add further context.
     */
    log(callerInfo: ControlInfo | FrameworkInfo | FunctionInfo, message?: string): void;
    /**
     * Logs the Exception in the console with information about the caller.
     * @param callerInfo Information about the caller.
     * @param message An optional message to add further context.
     */
    log<T extends string>(callerInfo: LogInfo<T extends 'Control' | 'Framework' | 'Function' ? never : T>, message?: string): void;
    /**
     * Logs the Exception in the console with information about the caller.
     * @param control Control instance used to derive module type and ID which is included in the composed context.
     * @param origin The fully qualified name of the control which is included in the composed context if it differs
     * from the control type.
     * @param message An optional message to add further context.
     * @param optionalParameters Optional parameters that are appended to the logged message.
     */
    log(control: TcHmi.Controls.System.baseTcHmiControl, origin: string, message?: string, ...optionalParameters: any[]): void;
    /**
     * Logs the Exception in the console with information about the caller.
     * @param control Control instance used to derive module type and ID which is included in the composed context.
     * @param origin The fully qualified name of the control which is included in the composed context if it differs
     * from the control type.
     * @param additionalInfo Additional custom context information. The key and value of this object will be shown
     * in output. {Attribute: "Top"} will add "Attribute=Top" into the log.
     * @param message An optional message to add further context.
     * @param optionalParameters Optional parameters that are appended to the logged message.
     */
    log(control: TcHmi.Controls.System.baseTcHmiControl, origin: string, additionalInfo: TcHmi.Log.Controls.AdditionalInfo, message?: string, ...optionalParameters: any[]): void;
}
/**
 * Info to be logged in front of the error message.
 */
export interface LogInfo<T extends string> {
    /**
     * The type of source of the log() call. Usually 'Control', 'Framework' or 'Function' but can also be a
     * custom value.
     */
    Source: T;
    /**
     * Custom information to log. The property name should start with a capital letter.
     */
    [InfoName: string]: string | number | boolean;
}
/**
 * Info about a control to be logged in front of the error message. In addition to the required properties,
 * further custom information can also be added.
 */
export interface ControlInfo extends LogInfo<'Control'> {
    /**
     * The return value of getType(). Usually this is set in the second place of the ControlInfo object.
     */
    Module: string;
    /**
     * The private #tchmiFQN (fully qualified name). Usually this is set in the third place of the ControlInfo
     * object.
     */
    Origin: string;
    /**
     * The return value of getId(). Usually this is set in the fourth place of the ControlInfo object.
     */
    Id: string;
}
/**
 * Info about a framework API to be logged in front of the error message. In addition to the required
 * properties, further custom information can also be added.
 */
export interface FrameworkInfo extends LogInfo<'Framework'> {
    /**
     * The name and namespace of the API.
     */
    Module: string;
}
/**
 * Info about a function to be logged in front of the error message. In addition to the required properties,
 * further custom information can also be added.
 */
export interface FunctionInfo extends LogInfo<'Function'> {
    /**
     * The name and namespace of the function.
     */
    Module: string;
}
declare const _Exception: typeof Exception;
type tException = Exception;
type tLogInfo<T extends string> = LogInfo<T>;
type tControlInfo = ControlInfo;
type tFrameworkInfo = FrameworkInfo;
type tFunctionInfo = FunctionInfo;
declare global {
    namespace TcHmi {
        let Exception: typeof _Exception;
        type Exception = tException;
        namespace Exception {
            type LogInfo<T extends string> = tLogInfo<T>;
            type ControlInfo = tControlInfo;
            type FrameworkInfo = tFrameworkInfo;
            type FunctionInfo = tFunctionInfo;
        }
    }
}
export {};
//# sourceMappingURL=Exception.d.ts.map