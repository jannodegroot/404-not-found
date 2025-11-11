import type * as Server from './Server.js';
/**
 * Watches on specific domain.
 * @param name Name of the domain to watch
 * @param callback Callback which is called once and on every change
 */
export declare function watch(name: string, callback?: (data: IServerWatchResultObject<IDomainInfo>) => void): TcHmi.DestroyFunction;
export interface IWatchResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    processedStart?: string;
    processedEnd?: string;
    dirtyPaths?: string[];
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
export interface IServerWatchResultObject<T = any> extends IWatchResultObject<T> {
    response?: Server.IMessage<T>;
}
/** IDomainInfo */
export interface IDomainInfo {
    error?: TcHmi.IErrorDetails;
    /** Shows if extension can be used for user management. */
    authExtension: boolean;
    /** The version of the extension's configuration. */
    configVersion: string;
    /** Indicates whether a debugger is or will be attached to the extension. */
    debuggerAttached?: boolean;
    /** Name of the extension. */
    extension: string;
    /** A more readable name version of the extension name. */
    friendlyName: string;
    /** The globally unique identifier associated with the extension. */
    guid?: string;
    /** Indicate the extension is license status. */
    licensed?: boolean;
    /** Shows if the domain refers to a remote server. */
    remote?: boolean;
    /** Shows if the extension is considered to be required. */
    required?: boolean;
    /** Shows the current state of the extension. */
    state?: 'NotLoaded' | 'Loaded' | 'Initialized' | 'Invalid' | 'Disabled' | 'Unloading' | 'NotRunning';
    /** Indicate the extension is a customer extension. */
    thirdParty?: boolean;
    /** Shows last update time of the config. */
    updated?: string;
    /** The version of the extension. */
    version: string;
    /** Indicates under which circumstances the extension configuration should be visible. */
    visibility?: 'AlwaysShow' | 'AlwaysHide' | 'HideInEngineering';
}
declare const _watch: typeof watch;
type tIWatchResultObject<T = any> = IWatchResultObject<T>;
type tIServerWatchResultObject<T = any> = IServerWatchResultObject<T>;
type tIDomainInfo = IDomainInfo;
declare global {
    namespace TcHmi.Server {
        /**
         * Provides functions for monitoring domains / extensions of the server.
         * @preserve (Part of the public API)
         */
        namespace Domains {
            let watch: typeof _watch;
            type IWatchResultObject<T = any> = tIWatchResultObject<T>;
            type IServerWatchResultObject<T = any> = tIServerWatchResultObject<T>;
            type IDomainInfo = tIDomainInfo;
        }
    }
}
export {};
//# sourceMappingURL=Server.Domains.d.ts.map