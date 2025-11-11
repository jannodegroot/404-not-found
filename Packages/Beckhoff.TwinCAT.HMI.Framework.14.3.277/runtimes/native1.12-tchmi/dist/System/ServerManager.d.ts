import type { Symbol as SystemSymbol } from './Symbol.js';
import type { SymbolExpression } from '../API/SymbolExpression.js';
import type * as Symbol from '../API/Symbol.js';
import * as Server from '../API/Server.js';
export declare class ServerManager {
    constructor();
    /**
     * Key is in the following format: SYMBOLNAME_SUBSCRIPTION-REQUEST-ID
     * Use this to find an entry for a server response.
     * Example: MySymbolA_1234
     */
    private __symbolWatchEntryCacheById;
    /**
     * Key is the System.Symbol reference that holds the watch
     */
    private __symbolWatchEntryCacheByRef;
    /**
     * Key is in the following format: INTERVAL=VALUE_TIMEOUT=VALUE_GROUP=VALUE
     * Use this to find a map of watch symbol entries which will be grouped together when registering a subscription.
     * Example: INTERVAL=DEFAULT_TIMEOUT=DEFAULT_GROUP=5
     * Example: INTERVAL=500_TIMEOUT=10000_GROUP=5
     */
    private __symbolWatchEntryGroups;
    /** Fallback value if the request and tchmiconfig does not provide a value */
    static RECONNECT_INTERVAL: number;
    private __checkLicenseSubscriptionId;
    /**
     * Watches .../Config/ServerState
     */
    private watchServerState;
    /**
     * Unwatch .../Config/ServerState
     */
    private unwatchServerState;
    /**
     * Request ServerState
     */
    private resolveServerState;
    /**
     * Request and handle ServerState
     */
    private resolveHandleServerState;
    /**
     * Opens the websocket and starts the watcher interval.
     */
    open(callback?: (this: void, data: IConnectionResultObject) => void): void;
    /**
     * Closes the websocket and stops the watcher interval.
     */
    close(): void;
    /**
     */
    getFreeRequestId(): number | null;
    /**
     * Set Server Address
     * @param host
     * @param port
     * @param protocol
     */
    setServerAddress(protocol: string, host: string, port?: string | number): void;
    /**
     * Registers an event callback.
     * @param reqId
     * @param callback
     */
    registerEventCallback(reqId: number, callback: (this: void, data: Server.IResultObject) => void): number | null;
    /**
     * Watch a server symbol from Tchmi.System.Symbol
     * This function should only be called from TcHmi.System.Symbol!
     * @param expression
     * @param callback
     * @template T Type of the value to watch
     */
    watch<T = any>(symbol: SystemSymbol, expression: SymbolExpression, options: Symbol.IOptions | null, callback: (this: void, data: IServerWatchResultObject<T>) => void, reason?: string): TcHmi.DestroyFunction;
    /**
     * Sends a request to the server.
     * @param requestObj The request object to send
     * @param callback Callback function reference
     * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
     * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
     */
    request<W = any, R = W>(requestObj: Server.IMessage<W, R>, callback?: null | ((this: void, data: Server.IResultObject<W, R>) => void)): number | null;
    /**
     * Sends a request to the server.
     * @param requestObj The request object to send
     * @param options Request options
     * @param callback Callback function reference
     * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
     * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
     */
    requestEx<W = any, R = W>(requestObj: Server.IMessage<W, R>, options?: IRequestOptions | null, callback?: null | ((this: void, data: Server.IResultObject<W, R>) => void)): number | null;
    /**
     * Releases a request and associated resources like callbacks.
     * @param id Id of the request to release.
     */
    releaseRequest(id: number | null): void;
    /**
     * Returns the current readyState value of the underlying websocket which is connected to the TwinCAT HMI Server. Returns null when system is not ready.
     * Use constants like WebSocket.CLOSED or WebSocket.OPEN for comparison.
     */
    getWebsocketReadyState(): number | null;
    /**
     * Returns true if the websocket is ready, handshakes are done and server is ready for general application communication.
     */
    isReady(): boolean;
    /**
     * Login into a TcHmiServer, reloads the page on success, call of a callback after login
     * @param username String with the username
     * @param password String with the password
     * @param persistent boolean Should the session be valid even after browser restart
     * @param reload Reload hmi after session login.
     * @param options
     * @param callback This callback is called after the request was sent
     * @returns returns a boolean if the login was called
     */
    login(username: string, password: string, persistent: boolean | undefined, reload: boolean | undefined, options: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): boolean;
    /**
     * Logout from a TcHmiServer, reloads the page on success, call of a callback after logout
     * @param reload Reload hmi after session logout
     * @param options Request options
     * @param callback This callback is called after the request was sent
     * @returns returns a boolean if the logout was called
     */
    logout(reload?: boolean, options?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): boolean;
    /**
     * Logout all users with a specific username or all users from a TcHmiServer
     * @param username username to logout.
     * If empty string or null is provided, all users are logged out.
     * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
     * 'Domain::' will logout every user from this domain
     * @param options Request options
     * @param callback This callback is called after the request was sent
     * @returns returns a boolean if the logout was called
     */
    forceLogout(username: string | Server.IForceLogoutTarget | null, options: Server.IRequestOptions | null, callback?: null | ((this: void, data: Server.IResultObject) => void)): boolean;
    /**
     * @param callback
     */
    refreshSubscriptions(callback?: (this: void, data: TcHmi.IResultObject) => void): void;
    /**
     * Returns the framework related api version of the server in the form x.x.x.x and null if the current server version does not support this information yet.
     * You can use the global tchmi_compare_version function to compare the result against a specific version.
     */
    getApiVersion(): string | null;
    /**
     * Processes the results of watchServerSymbolMetaData/resolveServerSymbolMetaData.
     * @param results List of results of Server.IResultObject
     * @returns
     */
    private __processServerSymbolMetaData;
    /**
     * Resolves server symbol meta data from  Data.Caches.serverSymbolMetaDataCache
     * and adds it to  Data.Caches.serverSymbolInteractiveWriteMetaDataCache.
     * Make sure to run resolveServerSymbolMetaDataCache before.
     * @param callback
     */
    private __resolveServerSymbolInteractiveWriteMetaDataCache;
    /**
     * Resolves server symbol meta data and writes it to Data.Caches.serverSymbolMetaDataCache.
     * @param callback
     */
    resolveServerSymbolMetaData(callback: (this: void, data: TcHmi.IResultObject) => void): void;
    /**
     * Watches or resolves (once) server symbol meta data and writes it to Data.Caches.serverSymbolMetaDataCache.
     * Responds only once to callback.
     * This function is meant to be called only once from init state machine in Main.ts.
     * @param callback
     */
    watchOrResolveServerSymbolMetaData(callback: (this: void, data: TcHmi.IResultObject) => void): void;
}
/**
 * Custom Websocket close codes should be in the range 3000-4999.
 * TcHmiSrv generates codes derived from the http codes.
 */
export declare const enum TcHmiWebsocketStatusCode {
    /** Server shutting down */
    Ok = 4200,
    Permanent_Redirect = 4308,
    Bad_Request = 4400,
    Unauthorized = 4401,
    Payment_Required = 4402,
    Forbidden = 4403,
    Not_Found = 4404,
    Method_Not_Allowed = 4405,
    Request_Timeout = 4408,
    Gone = 4410,
    Length_Required = 4411,
    Precondition_Failed = 4412,
    Request_Payload_too_Large = 4413,
    Range_Not_Satisfiable = 4416,
    Expectation_Failed = 4417,
    Upgrade_Required = 4426,
    Too_Many_Requests = 4429,
    Custom_License_Expired = 4460,
    Custom_Login_Timeout = 4461,
    Custom_Too_Many_Connections = 4463,
    Custom_Server_Starting = 4464,
    Custom_License_Limit_Exceeded = 4465,
    Custom_Missing_Parameter = 4466,
    Internal_Server_Error = 4500,
    Not_Implemented = 4501,
    Service_Unavailable = 4503,
    Version_not_Supported = 4505,
    Custom_Extension_not_Loaded = 4520,
    Custom_Syntax_Error = 4521,
    Custom_Forced_Disconnect = 4522
}
export declare const enum ConnectState {
    UNCONNECTED = 0,
    ERROR = 1,
    COMMAND_ERROR = 2,
    CONNECTED = 3,
    UNLOAD = 4,
    ACCESS_MISSING = 5,
    LICENSE_MISSING = 6
}
export declare const enum RequestType {
    INVALID = 0,
    READWRITE = 100,
    SUBSCRIPTION = 200,
    EVENT = 300
}
export interface IRequestEntry {
    id: number;
    type: RequestType;
    message?: Server.IMessage;
    deletionPending: boolean;
    timeoutTimer: number;
    timeoutCallback: null | ((this: void) => void);
    timeout: number | null;
    /** Minimal time the subscription ticks will be fired on symbol changes. If not set the default of the project will be used */
    interval?: number | null;
    callbacks: ((this: void, data: Server.IResultObject) => void)[];
    responseCallback: null | ((this: void, data: IResponseResultObject) => void);
    /** Request in queue waiting for processing. If queuePending is set to true too the request was sent to the server and is waiting for response. */
    queue: boolean;
    /** Request in queue was sent to the server and is waiting for response. */
    queuePending: boolean;
    /**
     *  Request from SymbolWatches = managed/true;
     *  Everything else = unmanaged/false; */
    managed: boolean;
    /** When set to true and this is a subscription it will ignored when refreshSubscriptions is called. */
    refreshLock: boolean;
    /** TcHmi.Symbol reference which has caused the request when request was caused by TcHmi.Symbol. */
    symbol?: SystemSymbol;
}
export interface IInteractiveWriteRequestEntry {
    id: number;
    destroy: TcHmi.DestroyFunction;
}
export interface IServerSymbolWatchEntry {
    name: string;
    interval: number | null;
    timeout: number | null;
    group: string | null;
    version: number | null;
    start: number | null;
    end: number | null;
    clientMode: 'ClientPoll' | 'ClientWriteConfirm' | null;
    clientPollInterval: number;
    clientWriteConfirmTimeout: number;
    clientPendingReadWriteCount: number;
    resetClientPollInterval: () => void;
    options: Server.ICommandOptions[];
    reqId: number | null;
    commandIndex: number | null;
    refs: number;
    value: any;
    response?: Server.IMessage;
    /** The time the command processing has started as iso 8601 string. */
    processedStart?: string;
    /** The time the command processing has ended as iso 8601 string. */
    processedEnd?: string;
    callbacks: IServerSymbolWatchEntryCallbackObj[];
}
export interface IServerSymbolWatchEntryCallbackObj {
    callback: (this: void, data: IServerWatchResultObject) => void;
    symbol: SystemSymbol;
    dirty: boolean;
    refreshLock: boolean;
    destroy: TcHmi.DestroyFunction;
}
export interface IServerSymbolWatchEntryGroup {
    watchEntries: Map<string, IServerSymbolWatchEntry>;
}
/** provides the url of the request */
export interface IConnectionResultObject extends TcHmi.IResultObject {
    url: string;
}
export interface IResponseResultObject extends TcHmi.IResultObject {
    response: TcHmi.SelectableRequired<Server.IMessage, 'apiVersion' | 'id' | 'sessionId' | 'commands'>;
}
export interface ILicenseCheckResultObject extends TcHmi.IResultObject {
    connectState: ConnectState;
}
export interface IServerStateInfo {
    architecture?: string;
    creatorMode: boolean;
    endpoints: string[];
    forceAuthEndpoints: string[];
    pid: number;
    productVersion: string;
    projectName: string;
    projectVersion: string;
    publishInProgress: boolean;
    serviceMode: boolean;
    serviceName?: string;
    state: number;
    version: string;
    timedClient?: IServerStateTimedClientInfo;
    maintenanceMode?: IServerStateMaintenanceMode;
    serverTime?: string;
    frameworkApiVersion?: string;
}
export interface IServerStateTimedClientInfo {
    isTimed: boolean;
    expiration?: string;
    availableAgain?: string;
}
export interface IRequestOptions extends Server.IRequestOptions {
    symbol?: SystemSymbol;
}
export interface IRequestGroup {
    id: string;
    requestId: number;
    options: IRequestGroupOptions;
    requests: IRequestGroupRequest[];
}
export interface IRequestGroupRequest {
    message: Server.IMessage;
    options: undefined | null | Server.IRequestOptions;
    callback: undefined | null | ((this: void, data: Server.IResultObject) => void);
}
export interface IRequestGroupOptions {
    parallel?: boolean;
    timeout?: number;
    refresh?: boolean;
}
export interface IServerStateMaintenanceMode {
    isActive?: boolean;
    isAllowed?: boolean;
    isMaintenanceUser?: boolean;
    timer?: string;
}
export interface IWatchResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    processedStart?: string;
    processedEnd?: string;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
export interface IServerWatchResultObject<T = any> extends IWatchResultObject<T> {
    response?: Server.IMessage<T>;
}
/** Runtime Manager */
export declare const serverManager: ServerManager;
//# sourceMappingURL=ServerManager.d.ts.map