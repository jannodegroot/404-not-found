import * as Server from './Server.js';
/**
 * Parse the domain from a settings object or autodetects it from the current loaded domains.
 * @param settings Settings object
 */
export declare function getDefaultDomain(settings?: IOptions | null): Promise<string>;
/**
 * Watches on the default domain.
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchDefaultDomain(callback?: null | ((data: IWatchResultObject<string>) => void)): TcHmi.DestroyFunction;
/**
 * Adding a Symbol to the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function add(symbolName: string, settings: IEntrySettings, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Adding a Symbol to the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function addEx(symbolName: string, settings: IEntrySettings, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Adding a Symbol to the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function addEx2(symbolName: string, settings: IEntrySettings, options: IOptions | null, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Removing a Symbol from the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function remove(symbolName: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Removing a Symbol from the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function removeEx(symbolName: string, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Removing a Symbol from the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function removeEx2(symbolName: string, options: IOptions | null, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Update a config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function update(symbolName: string, settings: IEntrySettings, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Update a config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateEx(symbolName: string, settings: IEntrySettings, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Update a config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateEx2(symbolName: string, settings: IEntrySettings, options: IOptions | null, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Gets the current config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function get(symbolName: string, callback?: null | ((this: void, data: IEntryResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Gets the current config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getEx(symbolName: string, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: IEntryResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Gets the current config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getEx2(symbolName: string, options: IOptions | null, requestOptions: Server.IRequestOptions | null, callback?: null | ((this: void, data: IEntryResultObject) => void)): TcHmi.IErrorDetails;
export interface IWatchResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
export interface IEntrySettings {
    /** ISO8601 Time Span */
    INTERVAL?: string;
    MAXENTRIES?: number;
    ROWLIMIT?: number;
    RECORDINGENABLED?: boolean;
}
export interface IEntrySettingsEx {
    /** ISO8601 Time Span */
    interval?: string;
    maxEntries?: number;
    rowLimit?: number;
    recordingEnabled?: boolean;
}
/** Global options for the historization */
export interface IOptions {
    /** Domain of the historize handling. Defaults to 'TcHmiPostgresHistorize' or 'TcHmiSqliteHistorize' (auto detected) */
    domain?: string;
}
export interface IEntryResultObject extends TcHmi.IResultObject {
    key?: string;
    settings?: IEntrySettings;
}
declare const _getDefaultDomain: typeof getDefaultDomain;
declare const _watchDefaultDomain: typeof watchDefaultDomain;
declare const _add: typeof add;
declare const _addEx: typeof addEx;
declare const _addEx2: typeof addEx2;
declare const _remove: typeof remove;
declare const _removeEx: typeof removeEx;
declare const _removeEx2: typeof removeEx2;
declare const _update: typeof update;
declare const _updateEx: typeof updateEx;
declare const _updateEx2: typeof updateEx2;
declare const _get: typeof get;
declare const _getEx: typeof getEx;
declare const _getEx2: typeof getEx2;
type tIWatchResultObject<T = any> = IWatchResultObject<T>;
type tIEntrySettings = IEntrySettings;
type tIEntrySettingsEx = IEntrySettingsEx;
type tIOptions = IOptions;
type tIEntryResultObject = IEntryResultObject;
declare global {
    namespace TcHmi.Server {
        /**
         * Provides functions for managing configuration settings of the TcHmiPostgresHistorize or TcHmiSqliteHistorize server extension.
         * @preserve (Part of the public API)
         */
        namespace Historize {
            const getDefaultDomain: typeof _getDefaultDomain;
            const watchDefaultDomain: typeof _watchDefaultDomain;
            const add: typeof _add;
            const addEx: typeof _addEx;
            const addEx2: typeof _addEx2;
            const remove: typeof _remove;
            const removeEx: typeof _removeEx;
            const removeEx2: typeof _removeEx2;
            const update: typeof _update;
            const updateEx: typeof _updateEx;
            const updateEx2: typeof _updateEx2;
            const get: typeof _get;
            const getEx: typeof _getEx;
            const getEx2: typeof _getEx2;
            type IWatchResultObject<T = any> = tIWatchResultObject<T>;
            type IEntrySettings = tIEntrySettings;
            type IEntrySettingsEx = tIEntrySettingsEx;
            type IOptions = tIOptions;
            type IEntryResultObject = tIEntryResultObject;
        }
    }
}
export {};
//# sourceMappingURL=Server.Historize.d.ts.map