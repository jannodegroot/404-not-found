import{hostBaseUri,serverSidePathAndQuery,Data,config}from"../System/System.js";let __browserCapabilities={isCefSharp:"CefSharp"in window,isTcEmbeddedBrowser:!1,supportsDownload:!0};
/**
 * Returns the dynamic framework base path.
 * @preserve (Part of the public API)
 */export function getBasePath(){return tchmi_path(config.basePath)}
/**
 * Returns the dynamic base path of a control.
 * @preserve (Part of the public API)
 * @param type Control type name
 */export function getControlBasePath(type){let module=Data.Modules.controls.map.get(type);return module&&module.error===TcHmi.Errors.NONE&&module.package&&"string"==typeof module.package.basePath&&module.manifestData&&"string"==typeof module.manifestData.basePath?tchmi_path(module.package.basePath+"/"+module.manifestData.basePath):null}
/**
 * Returns the dynamic base path of a control.
 * @preserve (Part of the public API)
 * @param control TcHmi Control reference
 */export function getControlBasePathEx(control){return control?getControlBasePath(control.getType()):null}export function getBrowserCapabilities(){return __browserCapabilities}export function getHostBaseUri(){return hostBaseUri}export function getServerSidePathAndQuery(){return serverSidePathAndQuery}!async function(){if(!("CefSharp"in window))return void(__browserCapabilities={isCefSharp:!1,isTcEmbeddedBrowser:!1,supportsDownload:!0});const cefSharpWindow=window;if(!cefSharpWindow.tcEmbeddedBrowserGlobals)try{await cefSharpWindow.CefSharp.BindObjectAsync("tcEmbeddedBrowserGlobals")}catch(ex){return}__browserCapabilities={isCefSharp:!0,isTcEmbeddedBrowser:!!cefSharpWindow.tcEmbeddedBrowserGlobals,supportsDownload:cefSharpWindow.tcEmbeddedBrowserGlobals?.supportsDownload??!0}}();TcHmi.Environment={getBasePath,getControlBasePath,getControlBasePathEx,getBrowserCapabilities,getHostBaseUri,getServerSidePathAndQuery};