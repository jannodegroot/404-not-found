import{accessManager}from"../System/AccessManager.js";import{isParameterTypeInvalid}from"../System/SystemFunctions.js";
/**
 * Checks if a right is allowed for the current user on this control or its parents
 * Rules for granting access:
 * - Designer Mode Master => true
 * - Server Auth is not restricted (IsAuthRequired == false in Server) => TRUE
 * - Server Auth is not known right now => null
 * - Server Auth loading error => false
 * - On this control: 1 Group  has  ALLOW => TRUE
 * - On this control: 0 Groups have ALLOW, but 1 Group has DENY => FALSE
 * - On this control: 0 Groups have ALLOW, 0 Groups have DENY => Ask Parent
 * - use control default of the bottom most control with this right. TcHmi.Controls.System.TcHmiView has operate/observe set to TRUE
 * - control has no parent (detached control) => null
 * @param control Control to check
 * @param requestedAccessright name of the access right
 * @returns Returns true/false or null if the state is not known right now
 * @preserve (Part of the public API)
 */export function checkAccess(control,requestedAccessright){return control instanceof TcHmi.Controls.System.baseTcHmiControl&&(!isParameterTypeInvalid(requestedAccessright,"requestedAccessright",{type:"string",required:"valueNeeded",minStringLength:1})&&(accessManager?accessManager.checkAccess(control,requestedAccessright):null))}export function setControlRightOverride(control,accessrightToOverride,forcedRight){return control instanceof TcHmi.Controls.System.baseTcHmiControl&&(!isParameterTypeInvalid(accessrightToOverride,"accessrightToForce",{type:"string",required:"valueNeeded",minStringLength:1})&&(("Deny"===forcedRight||null===forcedRight)&&(!!accessManager&&(accessManager.setControlRightOverride(control,accessrightToOverride,forcedRight),!0))))}export function getControlRightOverrides(control){return tchmi_clone_object(accessManager?.getControlRightOverrides(control)??new Set,{cloneSets:{deepCloneValues:!1}})}TcHmi.Access={checkAccess,setControlRightOverride,getControlRightOverrides};