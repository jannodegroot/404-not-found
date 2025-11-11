
declare class TcHmiPasswordInput extends TcHmi.Controls.Beckhoff.TcHmiInput {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * If raised, all attributes have been set to it's default or dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /**
     * Is called by the system after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called by the system after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
}
export { TcHmiPasswordInput as Control };
declare const _TcHmiPasswordInput: typeof TcHmiPasswordInput;
type tTcHmiPasswordInput = TcHmiPasswordInput;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiPasswordInput: typeof _TcHmiPasswordInput;
        type TcHmiPasswordInput = tTcHmiPasswordInput;
    }
}
