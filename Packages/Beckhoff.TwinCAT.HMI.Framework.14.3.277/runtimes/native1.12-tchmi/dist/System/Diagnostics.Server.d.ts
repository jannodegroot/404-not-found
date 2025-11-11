import type { IRequestEntry } from './ServerManager.js';
import type * as Server from '../API/Server.js';
/**
 * Starts the diagnostics logging.
 * @param lazy If set to true TCHMI_DIAGNOSTICS_SERVER has to be set to true or diagnostics will not be initialized.
 *             If set to false or if it is not defined TCHMI_DIAGNOSTICS_SERVER will be forced to true.
 */
export declare function start(lazy?: boolean): void;
/**
 * Stops the diagnostics logging.
 */
export declare function stop(): void;
/**
 * Called from TcHmi.System.ServerManager if a request is registered.
 * Do not call this function manually.
 * @param request
 */
export declare function requestRegistered(request: IRequestEntry): void;
/**
 * Called from TcHmi.System.ServerManager if a request is queued.
 * Do not call this function manually.
 * @param request
 */
export declare function requestQueued(request: IRequestEntry): void;
/**
 * Called from TcHmi.System.ServerManager if a request is send via websocket.
 * Do not call this function manually.
 * @param request
 */
export declare function requestSent(request: IRequestEntry): void;
/**
 * Called from TcHmi.System.ServerManager if a request response was received via websocket.
 * Do not call this function manually.
 * @param request
 * @param response
 */
export declare function requestReceived(request: IRequestEntry, response: Server.IMessage): void;
/**
 * Called from TcHmi.System.ServerManager if a request is removed from the requests queue.
 * Do not call this function manually.
 * @param request
 */
export declare function requestUnqueued(request: IRequestEntry): void;
/**
 * Called from TcHmi.System.ServerManager if a pending queue requests is done.
 * Do not call this function manually.
 * @param request
 */
export declare function requestPendingDone(request: IRequestEntry): void;
/**
 * Called from TcHmi.System.ServerManager if a request is unregistered.
 * Do not call this function manually.
 * @param request
 */
export declare function requestUnregistered(request: IRequestEntry): void;
/**
 * Deletes collected diagnostics data.
 * @param request
 */
export declare function clear(): void;
/**
 * Resets collected diagnostics data.
 * @param request
 */
export declare function reset(): void;
/**
 * Generates a dump of current diagnostics data.
 * @param request
 */
export declare function dump(): void;
/**
 * Starts cyclic dump generation.
 * @param request
 */
export declare function cyclicDump(interval: number): void;
/**
 * Aborts cyclic dump generation.
 * @param request
 */
export declare function cyclicDumpAbort(): void;
/**
 * Download current diagnostics data dumps as json file.
 */
export declare function download(): void;
/**
 * Print current diagnostics data to the console.
 */
export declare function print(): void;
export interface IDiagnosticsData {
    requestsHistory: Map<IRequestEntry, IRequestDiagnosticsEntry>;
    requestsCache: Map<IRequestEntry, IRequestDiagnosticsEntry>;
    requestsQueue: Map<IRequestEntry, IRequestDiagnosticsEntry>;
    requestsQueuePendingRequest: {
        request: IRequestEntry;
        requestDiag: IRequestDiagnosticsEntry;
    } | null;
    dumps: IRequestDiagnosticsDumps;
}
export interface IRequestDiagnosticsEntry {
    message?: Server.IMessage;
    responseFirst?: {
        timestampReceived: number;
        message?: Server.IMessage;
    };
    responsesLast?: {
        timestampReceived: number;
        message?: Server.IMessage;
    }[];
    timestampRegistered?: number;
    timestampQueued?: number;
    timestampSent?: number;
    timestampReceived?: number;
    timestampUnqueued?: number;
    timestampUnregistered?: number;
    timestampQueuePendingBegin?: number;
    timestampQueuePendingEnd?: number;
    timeRegistered?: number;
    timeInQueue?: number;
    timeQueuePending?: number;
    timeServer?: number;
}
export interface IRequestDiagnosticsDumps {
    lastDumpDate: string | null;
    lastDumpTimestamp: number;
    data: IRequestDiagnosticsDump[];
}
export interface IRequestDiagnosticsDump {
    requestsHistory: IRequestDiagnosticsEntry[];
    requestsCache: IRequestDiagnosticsEntry[];
    requestsQueue: IRequestDiagnosticsEntry[];
    requestsQueuePendingRequest: IRequestDiagnosticsEntry | null;
}
export interface IRequestDiagnosticsDumpEvalData {
    requestsByTime?: IRequestDiagnosticsEntry[] | null;
    requestsByServerTime?: IRequestDiagnosticsEntry[] | null;
    requestsByQueueTime?: IRequestDiagnosticsEntry[] | null;
    requestsByQueuePendingTime?: IRequestDiagnosticsEntry[] | null;
}
//# sourceMappingURL=Diagnostics.Server.d.ts.map