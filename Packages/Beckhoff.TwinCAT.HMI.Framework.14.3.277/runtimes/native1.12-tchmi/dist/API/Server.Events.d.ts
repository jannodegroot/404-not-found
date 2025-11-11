import { Filter as SystemFilter } from '../System/Filter.js';
/**
 * Confirm an alarm.
 * @param alarm The alarm to confirm.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 */
export declare function confirmAlarm(alarm: Alarm, callback?: (this: void, data: TcHmi.IResultObject) => void): void;
/**
 * Export events.
 * @param exportOptions An object containing the export settings.
 * @param exportOptions.filter The filter to apply for the export.
 * @param exportOptions.filename Optional filename for the exported file.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 */
export declare function exportEvents(exportOptions: {
    filter?: TcHmi.Filter | null;
    filename?: string;
}, callback?: (error: TcHmi.IResultObject) => void): void;
/**
 * DEPRECATED
 * Please use a subscription to the ListEvents server symbol instead, otherwise a high volume of events will lead to drastically reduced client performance.
 * Register a consumer for events.
 * Every registration will be queued for 200 ms. This can be forced via the flushRegistrations API.
 * @param filter The filter of this consumer. Only events matching the filter will be passed on to the consumer.
 * @param callbacks The callbacks to pass events back to the consumer. Consumers can specify one callback for listing events and one for the event subscription.
 * @param callbacks.list The callback that is called when the event list has new data.
 * @param callbacks.subscription The callback that is called when the subscription has new data.
 * @param doneCallback The callback that is called when the registration has finished.
 * @deprecated Please use a subscription to the ListEvents server symbol instead.
 */
export declare function registerConsumer(filter: TcHmi.Filter | null, callbacks: {
    list?: (this: void, data: ListResult) => void;
    subscription?: (this: void, data: SubscriptionResult) => void;
}, doneCallback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.DestroyFunction;
/**
 * Flush the registrations of consumers that have been added via registerConsumer.
 */
export declare function flushRegistrations(): void;
/**
 * Parses a raw server event and returns an object for consumption by controls etc.
 * @param rawEvent The raw event to parse.
 */
export declare function parseServerEvent(rawEvent: RawServerEvent): Message | Alarm | PayloadEvent;
/**
 * Creates a message or payload event on the server.
 * @param event The event to create.
 * @param callback Is called when the server responds to the CreateEvent request.
 */
export declare function createEvent(event: TcHmi.SelectableOptional<Message, 'sourceDomain'> | PayloadEvent, callback?: (this: void, data: TcHmi.IResultObject) => void): void;
interface Consumer {
    filter: SystemFilter;
    rawFilter: TcHmi.Filter | null;
    activeAlarmIds: (number | string)[];
    listCallback?: (data: ListResult) => void;
    subscriptionCallback?: (data: SubscriptionResult) => void;
    registration: {
        listPending: boolean;
        subscriptionPending: boolean;
        callback?: null | ((this: void, data: TcHmi.IResultObject) => void);
    };
}
export interface ListResult<TPayload = any, TParams extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> extends TcHmi.IResultObject {
    events?: Event<TPayload, TParams>[];
}
export interface SubscriptionResult<TPayload = any, TParams extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> extends TcHmi.IResultObject {
    event?: Event<TPayload, TParams>;
    changeType?: ChangeType;
    removedByFilter?: boolean;
}
export declare enum Type {
    Message = 0,
    Alarm = 1,
    Payload = 2
}
export declare enum Severity {
    Verbose = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
    Critical = 4
}
export declare enum AlarmState {
    Raised = 0,
    Confirmed = 1,
    Cleared = 2,
    ClearedAndConfirmed = 3,
    Invalid = 4
}
export declare enum ConfirmationState {
    NotSupported = 0,
    NotRequired = 1,
    WaitForConfirmation = 2,
    Confirmed = 3,
    Reset = 4
}
interface EventBase {
    /** The type of event */
    type: Type;
    /** The domain of the event */
    domain: string;
    /** The name of the event */
    name: string;
    timeReceived: Date;
    sessionId?: string;
}
interface MessageOrAlarm<T extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> extends EventBase {
    /** The type of event */
    type: Type.Message | Type.Alarm;
    /** The severity of the event */
    severity: Severity;
    /** DEPRECATED! This used to be used to differentiate the domain in which the event originated vs the domain which was responsible for delivering it. It now always holds the same value as domain.
     * @deprecated This used to be used to differentiate the domain in which the event originated vs the domain which was responsible for delivering it. It now always holds the same value as domain.
     */
    sourceDomain: string;
    /** The localized text of the event */
    text?: string | undefined;
    /** The time at which the event was triggered */
    timeRaised: Date;
    /** Parameters set by the trigger of the event */
    params: T;
}
export interface Message<T extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> extends MessageOrAlarm<T> {
    /** The type of event */
    type: Type.Message;
}
export interface Alarm<T extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> extends MessageOrAlarm<T> {
    /** The type of event */
    type: Type.Alarm;
    /** A unique value with which this alarm can be identified */
    id: number;
    /** The time at which the alarm was confirmed by the trigger as no longer acute */
    timeCleared: Date | null;
    /** The time at which the alarm was acknowledged by the user */
    timeConfirmed: Date | null;
    alarmState: AlarmState;
    /** The current confirmation status */
    confirmationState: ConfirmationState;
}
export interface PayloadEvent<T = any> extends EventBase {
    /** The type of event */
    type: Type.Payload;
    payload?: T;
}
export declare enum ChangeType {
    AlarmRaised = 0,
    AlarmChanged = 1,
    AlarmDisposed = 2,
    MessageSent = 3
}
export type Event<TPayload = any, TParams extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = Message<TParams> | Alarm<TParams> | PayloadEvent<TPayload>;
export interface RawServerEvent {
    domain: string;
    name: string;
    timeReceived: string;
    payload?: RawServerMessage | RawServerAlarm | any;
    payloadType?: Type;
    localizedString?: string;
    changeType?: ServerAlarmChangeType;
    sessionId?: string;
}
export interface RawServerMessage {
    name: string;
    domain: string;
    severity: Severity;
    timeRaised: string;
    params: TcHmi.Dictionary<any>;
}
export interface RawServerAlarm extends RawServerMessage {
    id: number;
    timeCleared: string | null;
    timeConfirmed: string | null;
    alarmState: AlarmState;
    confirmationState: ConfirmationState;
}
export declare enum ServerAlarmChangeType {
    Raise = 0,
    Change = 1,
    Dispose = 2
}
/**
 * Type guard for alarms. Returns true if the given candidate is a Alarm, false otherwise
 * @param value The candidate to test.
 */
export declare function isAlarm(value: Event): value is Alarm;
/**
 * Type guard for Messages. Returns true if the given candidate is a Message, false otherwise
 * @param value The candidate to test.
 */
export declare function isMessage(value: Event): value is Message;
/**
 * Type guard for Payloads. Returns true if the given candidate is a Payload, false otherwise
 * @param value The candidate to test.
 */
export declare function isPayload(value: Event): value is PayloadEvent;
declare const _confirmAlarm: typeof confirmAlarm;
declare const _exportEvents: typeof exportEvents;
declare const _registerConsumer: typeof registerConsumer;
declare const _flushRegistrations: typeof flushRegistrations;
declare const _parseServerEvent: typeof parseServerEvent;
declare const _createEvent: typeof createEvent;
declare const _isAlarm: typeof isAlarm;
declare const _isMessage: typeof isMessage;
declare const _isPayload: typeof isPayload;
type tConsumer = Consumer;
type tListResult<TPayload = any, TParams extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = ListResult<TPayload, TParams>;
type tSubscriptionResult<TPayload = any, TParams extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = SubscriptionResult<TPayload, TParams>;
declare const _Type: typeof Type;
type tType = Type;
declare const _Severity: typeof Severity;
type tSeverity = Severity;
declare const _AlarmState: typeof AlarmState;
type tAlarmState = AlarmState;
declare const _ConfirmationState: typeof ConfirmationState;
type tConfirmationState = ConfirmationState;
type tEventBase = EventBase;
type tMessageOrAlarm<T extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = MessageOrAlarm<T>;
type tMessage<T extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = Message<T>;
type tAlarm<T extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = Alarm<T>;
type tPayloadEvent<T = any> = PayloadEvent<T>;
declare const _ChangeType: typeof ChangeType;
type tChangeType = ChangeType;
type tEvent<TPayload = any, TParams extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = Event<TPayload, TParams>;
type tRawServerEvent = RawServerEvent;
type tRawServerMessage = RawServerMessage;
type tRawServerAlarm = RawServerAlarm;
declare const _ServerAlarmChangeType: typeof ServerAlarmChangeType;
type tServerAlarmChangeType = ServerAlarmChangeType;
declare global {
    namespace TcHmi.Server {
        /**
         * Provides functions for monitoring alarms and server events.
         * @preserve (Part of the public API)
         */
        namespace Events {
            const confirmAlarm: typeof _confirmAlarm;
            const exportEvents: typeof _exportEvents;
            const registerConsumer: typeof _registerConsumer;
            const flushRegistrations: typeof _flushRegistrations;
            const parseServerEvent: typeof _parseServerEvent;
            const createEvent: typeof _createEvent;
            const isAlarm: typeof _isAlarm;
            const isMessage: typeof _isMessage;
            const isPayload: typeof _isPayload;
            type Consumer = tConsumer;
            type ListResult<TPayload = any, TParams extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = tListResult<TPayload, TParams>;
            type SubscriptionResult<TPayload = any, TParams extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = tSubscriptionResult<TPayload, TParams>;
            let Type: typeof _Type;
            type Type = tType;
            let Severity: typeof _Severity;
            type Severity = tSeverity;
            let AlarmState: typeof _AlarmState;
            type AlarmState = tAlarmState;
            let ConfirmationState: typeof _ConfirmationState;
            type ConfirmationState = tConfirmationState;
            type EventBase = tEventBase;
            type MessageOrAlarm<T extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = tMessageOrAlarm<T>;
            type Message<T extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = tMessage<T>;
            type Alarm<T extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = tAlarm<T>;
            type PayloadEvent<T = any> = tPayloadEvent<T>;
            let ChangeType: typeof _ChangeType;
            type ChangeType = tChangeType;
            type Event<TPayload = any, TParams extends TcHmi.Dictionary<any> = TcHmi.Dictionary<any>> = tEvent<TPayload, TParams>;
            type RawServerEvent = tRawServerEvent;
            type RawServerMessage = tRawServerMessage;
            type RawServerAlarm = tRawServerAlarm;
            let ServerAlarmChangeType: typeof _ServerAlarmChangeType;
            type ServerAlarmChangeType = tServerAlarmChangeType;
        }
    }
}
export {};
//# sourceMappingURL=Server.Events.d.ts.map