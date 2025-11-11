import{config}from"../System/System.js";import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import{themeManager}from"../System/ThemeManager.js";
/**
 * Returns the active theme.
 * @preserve (Part of the public API)
 */export function get(){return themeManager?themeManager.getTheme():"Base"}
/**
 * Sets the active theme.
 * @param valueNew Name of the new theme.
 * @preserve (Part of the public API)
 */export function set(valueNew){return themeManager?isParameterTypeInvalid(valueNew,"valueNew",{type:"string",required:"valueNeeded",minStringLength:1})?TcHmi.Errors.E_PARAMETER_INVALID:themeManager.setTheme(valueNew,!0):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Theme] Setting theme failed. System not ready."),TcHmi.Errors.E_SYSTEM_NOT_READY)}
/**
 * Returns all registered themes of the project.
 * @preserve (Part of the public API)
 */export function getRegisteredThemes(){return Object.keys(config.themes)}TcHmi.Theme={...TcHmi.Theme??{},get,set,getRegisteredThemes};