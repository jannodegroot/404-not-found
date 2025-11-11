import { type ControlAttributeList } from './_Types.js';
export interface ControlHierarchy {
    ctrl: TcHmi.Controls.System.baseTcHmiControl;
    children_hierarchy: ControlHierarchy[];
    pctrl: TcHmi.Controls.System.baseTcHmiControl | null;
}
/**
 * Resolves the control hierarchy of the control object in param ctrl.
 * @param ctrl The first level control object which will act as the entry point for hierarchy.
 * @param pctrl The parent control object which will associated to the first level control object in the return value.
 * @returns Control object hierarchy.
 */
export declare function resolveControlHierarchy(ctrl: TcHmi.Controls.System.baseTcHmiControl, pctrl?: TcHmi.Controls.System.baseTcHmiControl | null): ControlHierarchy;
export interface IResolveAttributesResultObject extends TcHmi.IResultObject {
    /** Keys of the dictionary can be mixed case! */
    value: ControlAttributeList;
}
/**
 * Resolves the attributes of the jquery object in param elem based on the current dom values as an array of name, value objects.
 */
export declare function resolveAttributesFromControlElement(elem: Element): IResolveAttributesResultObject;
/**
 * Resolves qualified name.
 * @param name
 * @param namespace
 */
export declare function resolveQualifiedName(name: string, namespace?: string): string;
export declare function parseIdFromHtml(markup: string): string | undefined;
/**
 * Decode base64 encoded utf8 strings
 * Only used for sync to creator where base64 is our overkill escaping solution
 * @param input
 * @returns returns the String or null
 */
export declare function tchmi_utf8str_base64decode(input: string): string | null;
/**
 * Decode base64 encoded utf8 strings
 * Only used for sync to creator where base64 is our overkill escaping solution
 * @param input String to encode
 * @returns returns the String or null
 */
export declare function tchmi_utf8str_base64encode(input: string): string | null;
/**
 * ElementStyleDimensions
 */
export interface ElementStyleDimensions {
    width: string;
    height: string;
    left: string;
    top: string;
    right: string;
    bottom: string;
}
/**
 * Used to compare server command processedStart and processedEnd ISO8601 time strings.
 * Important! This function is not mentioned to parse generic ISO8601 time strings. Its meant to parse
 * the mentioned server command time strings as fast as possible by making some expectations which
 * may not be given on generic ISO8601 time strings.
 *
 * Returns -1 if a is earlier than b, 0 if a is equal to b and 1 if a is later than b.
 */
export declare function compareISO8601ServerCommandDateTimeStrings(a: string, b: string): -1 | 0 | 1;
/**
 * Used to compare server command processedStart and processedEnd ISO8601 time duration strings.
 * Important! This function is not mentioned to parse generic ISO8601 time strings. Its meant to parse
 * the mentioned server command time duration strings as fast as possible by making some expectations which
 * may not be given on generic ISO8601 time strings.
 *
 * Returns -1 if a is shorter than b, 0 if a is equal to b and 1 if a is longer than b.
 */
export declare function compareISO8601ServerCommandDurationStrings(a: string, b: string): -1 | 0 | 1;
export type ParameterType = 'object' | 'boolean' | 'number' | 'string' | 'symbol' | 'bigint' | 'function' | 'date';
/**
 * Checks the javascript type of a variable and calls the given callback if it is invalid.
 * Returns a boolean indicating if the variable is valid.
 * @param parameter The parameter to check.
 * @param parameterName Parameter name for better reporting.
 * @param options Expected JS type and if null/undefined are valid
 * @param domain Domain which should be set in error detail
 * @param callback Function which will be called when the type check failed
 * @returns returns false if the type was valid and an errorDetail for invalid parameters
 */
export declare function isParameterTypeInvalid<T = any>(parameter: T | undefined | null, parameterName: string, options: {
    /** Expected JS datatype or list of types. Can be skipped if only isArray should be checked. */
    type?: ParameterType | ParameterType[];
    /** Expect an array. */
    expectArray?: boolean;
    minStringLength?: number;
    minArrayLength?: number;
    minValue?: number | bigint;
    /** Is this required (aka what about null and undefined)? */
    required: 'fullOptional' | 'undefinedOk' | 'nullOk' | 'valueNeeded';
}, domain?: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails | false;
export { injectInGlobalObject } from '../API/Controls.js';
/**
 * Resolves a server symbol name into its base symbol name and its path.
 * @param symbolName The target server symbol name.
 */
export declare function resolveServerSymbolNameParts(symbolName: string): {
    name: string;
    pathTokens: null | string[];
};
/**
 * Parses an autoLogoff timespan roughly into milliseconds. Will calculate with 365 days per year and 30 days per month.
 * @param autoLogoff The parsed timespan.
 * @returns
 */
export declare function autoLogoffToMilliseconds(autoLogoff: string): number | null;
/**
 * Resolves a promise or rejects with a timeout Error.
 * Timeout time defaults to config.tcHmiServer.websocketSystemTimeout
 * @param promise
 * @returns
 */
export declare function promiseTimeout<T>(promise: Promise<T>, option?: {
    timeout?: number;
    rejectDetails?: TcHmi.IErrorDetails;
    /** Will be used when no rejectDetails is given */
    rejectMessage?: string;
}): Promise<Awaited<T>>;
/**
 * DEPRECATED! Use TcHmi.ObjectPath.toPathTokens instead.
 * @deprecated Use TcHmi.ObjectPath.toPathTokens instead.
 * @param path
 */
export declare function resolveSymbolPathToTokenArray(path: string): string[];
/**
 * Resolves css related dimensions for an element.
 * DEPRECATED
 * @deprecated
 * @param j
 */
export declare function resolveElementStyleDimensions(j: JQuery): ElementStyleDimensions;
/**
 * DEPRECATED
 * @deprecated
 * @param text
 */
export declare function toCamelCase(text: string): string;
/**
 * DEPRECATED
 * @deprecated
 * @param text
 */
export declare function toDashCase(text: string): string;
//# sourceMappingURL=SystemFunctions.d.ts.map