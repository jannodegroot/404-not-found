import{dialogManager}from"../System/DialogManager.js";
/**
 * Change visibility of dialog and set its DialogType when showing.
 * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
 * @param bVisibility Toggling visiblity of dialog
 * @param dialogType Type of dialog
 * @param options Options
 * @returns returns false if the dialog could not be opened
 * @preserve (Part of the public API)
 */export function showDialog(dialogOwner,bVisibility,dialogType,options){return dialogManager?dialogManager.showDialog(dialogOwner,bVisibility,dialogType,options):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.DialogManager] Creating dialog failed. System not ready."),!1)}
/**
 * Changes the output content of the Dialog to a new value.
 * Will always target DialogType.Overlay. Use updateTextEx if you want to target a specific DialogType.
 * The default DialogSeverity is Info.
 * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
 * @param html Content to show
 * @param severity Severity for the content.
 * @returns Success of the text update
 * @preserve (Part of the public API)
 */export function updateText(dialogOwner,html,severity=DialogSeverity.Info){return dialogManager?dialogManager.updateText(dialogOwner,html,severity):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.DialogManager] Updating dialog failed. System not ready."),!1)}
/**
 * Changes the output content of the Dialog to a new value.
 * The default DialogType is Overlay.
 * The default DialogSeverity is Info.
 * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
 * @param html Text to display
 * @param options options
 * @param options.dialogType Overlay or watermark
 * @param options.severity severity of the text
 * @param options.buttonReload If true a reload button is added
 * @returns Success of the text update
 * @preserve (Part of the public API)
 */export function updateTextEx(dialogOwner,html,options){return dialogManager?dialogManager.updateTextEx(dialogOwner,html,options):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.DialogManager] Updating dialog failed. System not ready."),!1)}
/**
 * Returns the current dialog owner or null.
 * @preserve (Part of the public API)
 */export function getDialogOwner(){return dialogManager?dialogManager.getDialogOwner():(TcHmi.Log.error("[Source=Framework, Module=TcHmi.DialogManager] Getting dialog owner failed. System not ready."),null)}
/**
 * Builds a formatted message of hierarchical error objects for use in dialog.
 * @param error Error object to show nicely
 * @preserve (Part of the public API)
 */export function buildMessage(error){let __buildMessage=function(error,level){if(!error)return"";let res="",space="&nbsp;&nbsp;";for(let i=0,ii=level;i<ii;i++)space+="&nbsp;&nbsp;";if(error.code&&(res+="Code: "+error.code+"/0x"+error.code.toString(16)),error.message&&(res+=", Message: "+error.message),error.reason&&(res+="<br />"+space+"Reason: "+error.reason),error.domain&&(res+="<br />"+space+"Domain: "+error.domain),void 0!==error.errors&&error.errors.length){res+="<br />"+space+"as result of: ";for(let i=0,ii=error.errors.length;i<ii;i++)res+=__buildMessage(error.errors[i],level+1)}return res};return __buildMessage(error,0)}export var DialogSeverity;!function(DialogSeverity){DialogSeverity[DialogSeverity.Info=0]="Info",DialogSeverity[DialogSeverity.Warning=1]="Warning",DialogSeverity[DialogSeverity.Error=2]="Error"}(DialogSeverity||(DialogSeverity={}));export var DialogType;!function(DialogType){DialogType[DialogType.Overlay=1]="Overlay",DialogType[DialogType.Watermark=2]="Watermark"}(DialogType||(DialogType={}));TcHmi.DialogManager={showDialog,updateText,updateTextEx,getDialogOwner,buildMessage,DialogType,DialogSeverity};