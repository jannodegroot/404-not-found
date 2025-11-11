import { Binding } from './Binding.js';
export declare class BindingManager {
    constructor();
    /**
     * @param partialUrl
     */
    getPreloadingBindings(): Set<Binding>;
    /**
     * @param partialUrl
     */
    getPreloadingBindingsByPartial(partial: TcHmi.Controls.System.baseTcHmiControl): Set<Binding>;
    /**
     * @param partialUrl
     */
    getPreloadingBindingsByControl(control: TcHmi.Controls.System.baseTcHmiControl): Set<Binding>;
    /**
     * @param partialUrl
     * @param callback
     */
    watchPreloadingBindingDone(callback: (this: BindingManager, data: IWatchPreloadingBindingDoneResultObject) => void): TcHmi.DestroyFunction;
    /**
     * @param partialUrl
     * @param callback
     */
    watchPreloadingBindingDoneByPartial(partial: TcHmi.Controls.System.baseTcHmiControl, callback: (this: BindingManager, data: IWatchPreloadingBindingDoneResultObject) => void): TcHmi.DestroyFunction;
    /**
     * @param partialUrl
     * @param callback
     */
    watchPreloadingBindingDoneByControl(control: TcHmi.Controls.System.baseTcHmiControl, callback: (this: BindingManager, data: IWatchPreloadingBindingDoneResultObject) => void): TcHmi.DestroyFunction;
    /**
     * @param propertyName
     * @param fnThis
     */
    getBinding(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): Binding | null;
    /**
     * @param control
     */
    getBindingsByControl(control: TcHmi.Controls.System.baseTcHmiControl): Map<string, Binding> | undefined;
    /**
     * Creates a binding between a symbol and a control attribute setter.
     * This function throws an exception if the binding is not valid.
     * @param expression
     * @param propertyName
     * @param control
     */
    createBinding(expression: string, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl, options?: {
        ctx?: TcHmi.Context;
    }): Binding;
    /**
     * Removes a binding between a symbol and a control attribute setter.
     * @param propertyName
     * @param control
     * @param bResetSetter
     */
    removeBinding(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl, bResetSetter?: boolean): void;
}
export interface IWatchPreloadingBindingsEntry {
    callback: (this: BindingManager, data: IWatchPreloadingBindingDoneResultObject) => void;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
export interface IWatchPreloadingBindingsByPartialEntry {
    partial: TcHmi.Controls.System.baseTcHmiControl;
    callback: (this: BindingManager, data: IWatchPreloadingBindingDoneResultObject) => void;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
export interface IWatchPreloadingBindingsByControlEntry {
    control: TcHmi.Controls.System.baseTcHmiControl;
    callback: (this: BindingManager, data: IWatchPreloadingBindingDoneResultObject) => void;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
export interface IWatchPreloadingBindingDoneResultObject extends TcHmi.IResultObject {
    binding: Binding;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
/** Runtime Manager */
export declare const bindingManager: BindingManager;
//# sourceMappingURL=BindingManager.d.ts.map