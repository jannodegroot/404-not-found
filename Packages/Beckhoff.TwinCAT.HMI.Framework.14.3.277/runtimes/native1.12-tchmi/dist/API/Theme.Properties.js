import{controlManager}from"../System/ControlManager.js";import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import{themeManager}from"../System/ThemeManager.js";
/**
 * Parses every source of implicit properties and returns this or null
 * Can have different value after the event onThemeDataChanged.
 * The order of resources are
 * 1) control class
 * 2) theme definition of the control type in project
 * 3) theme definition in control
 * 4) defaultValueInternal in Description.json of the control
 * @param control Control which needs the resource
 * @param propertyName name of the property
 * @template T Type of the default value
 * @preserve (Part of the public API)
 */export function getDefaultValue(control,propertyName){return themeManager?control instanceof TcHmi.Controls.System.baseTcHmiControl?isParameterTypeInvalid(propertyName,"propertyName",{type:"string",required:"valueNeeded",minStringLength:1})?{error:TcHmi.Errors.E_PARAMETER_INVALID,origin:"system",originThemeName:themeManager.getTheme(),value:null}:themeManager.getDefaultPropertyValue(control,propertyName):{error:TcHmi.Errors.E_PARAMETER_INVALID,origin:"system",originThemeName:themeManager.getTheme(),value:null}:{error:TcHmi.Errors.E_SYSTEM_NOT_READY,origin:"system",originThemeName:"",value:null}}
/**
 * Sets the default value of a property and change it (if needed) on theme change.
 * @param control Control to manipulate
 * @param propertyName Property to manipulate
 * @returns returns an Error code
 * @preserve (Part of the public API)
 */export function setThemeValue(control,propertyName){if(!(control instanceof TcHmi.Controls.System.baseTcHmiControl))return TcHmi.Errors.E_PARAMETER_INVALID;if(isParameterTypeInvalid(propertyName,"propertyName",{type:"string",required:"valueNeeded",minStringLength:1}))return TcHmi.Errors.E_PARAMETER_INVALID;if(!themeManager||!controlManager)return TcHmi.Log.error("[Source=Framework, Module=TcHmi.Theme] System not ready."),TcHmi.Errors.E_SYSTEM_NOT_READY;let error=controlManager.setControlProperty(control,propertyName,null);return error?error.code:TcHmi.Errors.NONE}
/**
 * After calling this function the control property will not be changed on theme change anymore.
 * Does not change the property value.
 * @param control Control to manipulate
 * @param propertyName Property to manipulate
 * @returns returns an Error code
 * @preserve (Part of the public API)
 */export function releaseThemeValue(control,propertyName){return control instanceof TcHmi.Controls.System.baseTcHmiControl?isParameterTypeInvalid(propertyName,"propertyName",{type:"string",required:"valueNeeded",minStringLength:1})?TcHmi.Errors.E_PARAMETER_INVALID:themeManager&&controlManager?(themeManager.unwatchAttributeDefaults(control,propertyName),TcHmi.Errors.NONE):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Theme] System not ready."),TcHmi.Errors.E_SYSTEM_NOT_READY):TcHmi.Errors.E_PARAMETER_INVALID}TcHmi.Theme??={},TcHmi.Theme.Properties={getDefaultValue,setThemeValue,releaseThemeValue};