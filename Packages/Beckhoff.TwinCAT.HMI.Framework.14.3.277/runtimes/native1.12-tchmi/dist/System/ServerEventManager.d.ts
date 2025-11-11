import type * as ServerEvents from '../API/Server.Events.js';
export declare class ServerEventManager {
    constructor();
    /**
     * Sends a request to the server to confirm an alarm.
     * @param alarm The raw data of the alarm to confirm.
     */
    confirmAlarm(alarm: ServerEvents.RawServerAlarm, callback?: (this: void, data: TcHmi.IResultObject) => void): void;
    /**
     * Requests a list containing all events matching the specified filter from the server.
     * @param filter The filter which events have to match.
     * @param callback The callback function to handle the received events.
     */
    listEvents(filter: TcHmi.Filter | null, callback: (this: void, data: ListResult) => void): void;
    /**
     * Subscribe to events coming from the server.
     * @param filter The filter the events have to match.
     * @param eventCallback The callback function to handle received events.
     * @param doneCallback The callback that is called when the subscription has been registered.
     */
    subscribe(filter: TcHmi.Filter | null, eventCallback: (this: void, data: SubscriptionResult) => void, doneCallback?: (this: void, data: TcHmi.IResultObject) => void): number | null;
    /**
     * Unsubscribe from events.
     * @param id The subscription id.
     * @param callback The callback that is called when the subscription has been deregistered.
     */
    unsubscribe(id: number, callback?: (this: void, data: TcHmi.IResultObject) => void): void;
    /**
     * Update the filter of an event subscription.
     * @param id The id of the subscription to update.
     * @param filter The new filter for the subscription.
     * @param callback The callback that is called when the subscription has been updated.
     */
    updateSubscription(id: number, filter: TcHmi.Filter | null, callback?: (this: void, data: TcHmi.IResultObject) => void): void;
}
export interface SubscriptionInfo {
    responseId: number;
    callback?: (this: void, data: SubscriptionResult) => any;
}
export interface ListResult extends TcHmi.IResultObject {
    events?: ServerEvents.RawServerEvent[];
}
export interface SubscriptionResult extends TcHmi.IResultObject {
    event?: ServerEvents.RawServerEvent;
}
/**
 * Deprecated: Use public type from Server.Events instead
 * @deprecated Use public type from Server.Events instead
 */
export type RawServerEvent = ServerEvents.RawServerEvent;
/**
 * Deprecated: Use public type from Server.Events instead
 * @deprecated Use public type from Server.Events instead
 */
export type RawServerMessage = ServerEvents.RawServerMessage;
/**
 * Deprecated: Use public type from Server.Events instead
 * @deprecated Use public type from Server.Events instead
 */
export type RawServerAlarm = ServerEvents.RawServerAlarm;
/**
 * Deprecated: Use public type from Server.Events instead
 * @deprecated Use public type from Server.Events instead
 */
export type ServerAlarmChangeType = ServerEvents.ServerAlarmChangeType;
/** Runtime Manager */
export declare const serverEventManager: ServerEventManager;
//# sourceMappingURL=ServerEventManager.d.ts.map