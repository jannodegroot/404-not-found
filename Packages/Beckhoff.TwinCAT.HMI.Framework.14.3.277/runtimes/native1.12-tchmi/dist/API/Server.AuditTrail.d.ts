import * as Server from './Server.js';
/**
 * Creates a custom audit trail log entry.
 * @param entry The data for the custom audit trail log entry.
 * @param callback Will be called after request.
 */
export declare function createAuditLogEntry(entry: AuditLogEntry, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
/**
 * Creates a custom audit trail log entry.
 * @param entry The data for the custom audit trail log entry.
 * @param options Optional options
 * @param callback Will be called after request.
 * @returns
 */
export declare function createAuditLogEntryEx(entry: AuditLogEntry, options?: {
    requestOptions: Server.IRequestOptions | null;
} | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
export interface AuditLogEntry {
    name: string;
    contextDomain?: string;
    comment?: string;
    data?: any;
}
declare const _createAuditLogEntry: typeof createAuditLogEntry;
declare const _createAuditLogEntryEx: typeof createAuditLogEntryEx;
type tAuditLogEntry = AuditLogEntry;
declare global {
    namespace TcHmi.Server {
        /**
         * Provides functions for the Audit Trail extension.
         * @preserve (Part of the public API)
         */
        namespace AuditTrail {
            const createAuditLogEntry: typeof _createAuditLogEntry;
            const createAuditLogEntryEx: typeof _createAuditLogEntryEx;
            namespace CreateAuditLogEntry {
                type AuditLogEntry = tAuditLogEntry;
            }
        }
    }
}
export {};
//# sourceMappingURL=Server.AuditTrail.d.ts.map