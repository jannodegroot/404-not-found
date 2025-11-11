export declare class IntervalManager {
    /**
     * Adds a new TcHmi.IIntervalItem
     * @param name The name of the TcHmi.IIntervalItem to add.
     */
    add(name: string, item: TcHmi.IIntervalItem): void;
    /**
     * Removes a TcHmi.IIntervalItem
     * @param name The name of the TcHmi.IIntervalItem to remove.
     */
    remove(name: string): void;
    /**
     * Updates an existing TcHmi.IIntervalItem
     * @param name The name of the TcHmi.IIntervalItem to update.
     */
    update(name: string, itemNew: TcHmi.IIntervalItem): void;
    /**
     * Starts an interval by its name.
     * @param name The name of the interval to start.
     */
    start(name: string): void;
    /**
     * Stops an interval by its name.
     * @param name The name of the interval to stop.
     */
    stop(name: string): void;
}
export interface IIntervalItemEx extends TcHmi.IIntervalItem {
    intervalId: number;
}
/** Runtime Manager */
export declare const intervalManager: IntervalManager;
//# sourceMappingURL=IntervalManager.d.ts.map