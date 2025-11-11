export declare class DialogManager {
    /**
     */
    constructor();
    /**
     * Change visibility of dialog and set its DialogType when showing
     * @param dialogOwner Caller Id to prevent overwriting forreign dialogs. null overrides this check
     * @param bVisibility
     * @param dialogType
     * @returns returns false if the dialog could not be opened
     */
    showDialog(dialogOwner: string | null, bVisibility: boolean, dialogType?: import("../API/DialogManager.js").DialogType, options?: TcHmi.DialogManager.DialogOptions): boolean;
    /**
     * Changes the output content of the dialog to a new value.
     * Will always target DialogType.Overlay. Use updateTextEx if you want to target a specific DialogType.
     * The default DialogSeverity is Info.
     * @param dialogOwner Caller Id to prevent overwriting forreign dialogs. null overrides this check
     * @param dialogType
     * @param newHtmlContent
     * @param severity
     */
    updateText(dialogOwner: string | null, newHtmlContent: string, severity?: import("../API/DialogManager.js").DialogSeverity): boolean;
    /**
     * Changes the output content of the dialog for a specific DialogType.
     * The default DialogType is Overlay
     * The default DialogSeverity is Info.
     * @param dialogOwner Caller Id to prevent overwriting forreign dialogs. null overrides this check
     * @param newHtmlContent
     * @param options
     */
    updateTextEx(dialogOwner: string | null, newHtmlContent: string, options?: {
        dialogType?: TcHmi.DialogManager.DialogType;
        severity?: TcHmi.DialogManager.DialogSeverity;
        /** Attach a button for reload? Defaults to false.  */
        buttonReload?: boolean;
    }): boolean;
    /**
     * Returns the current dialog owner.
     * null if we have no current owner (probably no open dialog).
     */
    getDialogOwner(): string | null;
}
/** Runtime Manager */
export declare const dialogManager: DialogManager;
//# sourceMappingURL=DialogManager.d.ts.map