import { Symbol as SystemSymbol } from './Symbol.js';
export declare class Binding extends TcHmi.Destroyable {
    private static __compareTiming;
    constructor(expression: string, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl, options?: {
        ctx?: TcHmi.Context;
    });
    private __lastReportedError;
    /**
     * Destroy the Binding
     */
    destroy(): void;
    getExpression(): string;
    getSymbol(): SystemSymbol | null;
    getPropertyName(): string;
    getControl(): TcHmi.Controls.System.baseTcHmiControl | null;
    getState(): State;
    getPreload(): boolean;
    getPartial(): TcHmi.Controls.System.baseTcHmiControl | null;
    /**
     * Watches the binding for state changes.
     * @param callback
     */
    watchState(callback: (this: Binding, data: IWatchStateResultObject) => void): TcHmi.DestroyFunction;
}
export declare enum State {
    Invalid = 0,
    Error = 1,
    Initializing = 100,
    Resuming = 200,
    Preloading = 300,
    Initialized = 400,
    Ready = 500,
    Suspended = 600,
    Destroyed = 700
}
export interface IWatchStateEntry {
    callback: (this: Binding, data: IWatchStateResultObject) => void;
    destroy?: TcHmi.DestroyFunction;
}
export interface IWatchStateResultObject extends TcHmi.IResultObject {
    binding: Binding;
    state: State;
    stateOld: State;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
//# sourceMappingURL=Binding.d.ts.map