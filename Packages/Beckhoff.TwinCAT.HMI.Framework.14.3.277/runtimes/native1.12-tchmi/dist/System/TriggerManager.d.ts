/**
 */
export declare class TriggerManager {
    /**
     */
    constructor();
    /**
     * Registers all triggers defined in the triggerArr array.
     * @param triggerArr Array that contains events to register and actions to perform when those events are raised.
     */
    register(triggerArr: TcHmi.Trigger[] | null | undefined): TcHmi.DestroyFunction;
}
export interface TriggerContext<T1 = any> extends TcHmi.Trigger.RegisterContext<T1> {
    trigger?: TcHmi.Trigger;
    event?: TcHmi.EventProvider.Event;
}
/** Runtime Manager */
export declare const triggerManager: TriggerManager;
//# sourceMappingURL=TriggerManager.d.ts.map