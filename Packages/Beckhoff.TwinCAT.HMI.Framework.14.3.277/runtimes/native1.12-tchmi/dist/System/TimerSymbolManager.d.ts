export declare class TimerSymbolManager {
    constructor();
    /**
     * Adds a timer symbol configuration item.
     * @param name Then name of the timer symbol.
     * @param item The configuration item.
     */
    add(name: string, item: TcHmi.ITimerSymbolItem, callbacks?: ITimerSymbolEntryCallback[]): void;
    /**
     * Removes a timer symbol configuration item.
     * @param name Then name of the timer symbol.
     */
    remove(name: string): void;
    /**
     * Updates a timer symbol configuration item
     * @param name Then name of the timer symbol.
     * @param item The new timer symbol configuration item
     * @returns
     */
    update(name: string, item: TcHmi.ITimerSymbolItem): void;
    /**
     * Reads the current value of a timer symbol.
     * @param name Then name of the timer symbol.
     * @param callback Callback that is raised when the result available.
     */
    read(name: string, callback?: (this: TimerSymbolManager, data: IReadResultObject) => void): void;
    /**
     * Watches the value of a timer symbol.
     * @param name Then name of the timer symbol.
     * @param callback Callback that is raised when the current value changes.
     * @returns {DestroyFunction} A destroy function that releases all watch related resources when called.
     */
    watch<T = any>(name: string, callback: (this: void, data: IWatchResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * Returns the type of a timer symbol.
     * @param name Then name of the timer symbol.
     * @param callback Callback that is raised when the result available.
     */
    getType(name: string, callback: (this: TimerSymbolManager, data: ITypeResultObject) => void): void;
    /**
     * Starts the timer for all timer symbols.
     */
    run(): void;
    /**
     * Stops the timer for all symbols.
     */
    stop(): void;
}
/**
 * Type Guard which checks TcHmi.ITimerSymbolPatternItem object for 'value' property
 * @param value object to test
 */
export declare function isValuePatternItem(value: TcHmi.ITimerSymbolPatternItem | null | undefined): value is TcHmi.ITimerSymbolValuePatternItem;
/**
 * Type Guard which checks TcHmi.ITimerSymbolPatternItem object for 'symbol' property
 * @param value object to test
 */
export declare function isSymbolPatternItem(value: TcHmi.ITimerSymbolPatternItem | null | undefined): value is ITimerSymbolSymbolPatternItemEx;
export interface ITimerSymbolItemEx extends TcHmi.ITimerSymbolItem {
    callbacks: ITimerSymbolEntryCallback[];
    active: boolean;
    destroy: TcHmi.DestroyFunction;
}
export interface ITimerSymbolSymbolPatternItemEx extends TcHmi.ITimerSymbolSymbolPatternItem {
    symbolPending?: boolean;
    symbolValue?: any;
}
export interface ITimerSymbolEntryCallback {
    callback: ((this: void, data: IWatchResultObject) => void) | null;
    lastReportedValue?: any;
    destroy: TcHmi.DestroyFunction;
}
export interface ITimerSymbolPatternMetaData {
    items: Map<string, ITimerSymbolItemEx>;
    pattern: number[];
    currentIndex: number;
    timeoutId: number;
}
export interface ITypeResultObject extends TcHmi.IResultObject {
    /** Information about the expected type as a tchmi reference name */
    type?: string;
}
export interface IReadResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    dirtyPaths?: string[];
}
export interface IWatchResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    dirtyPaths?: string[];
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
/** Runtime Manager */
export declare const timerSymbolManager: TimerSymbolManager;
//# sourceMappingURL=TimerSymbolManager.d.ts.map