let controlManager,getControlBasePath,getControlBasePathEx;import("../System/ControlManager.js").then(module=>{controlManager=module.controlManager}),import("./Environment.js").then(module=>{getControlBasePath=module.getControlBasePath,getControlBasePathEx=module.getControlBasePathEx});export const registrations={map:new Map,array:[]};export function injectInGlobalObject(fullName,injectObj){const pathArr=fullName.split(".");if(pathArr.some(path=>!path))throw new Error("Empty parts for namespace not allowed.");const name=pathArr.pop();let iteratingTargetObject=window;for(const path of pathArr){if(path in iteratingTargetObject||(iteratingTargetObject[path]={}),"object"!=typeof iteratingTargetObject[path]&&"function"!=typeof iteratingTargetObject[path]||null===iteratingTargetObject[path])throw new Error(`The requested namespace ${fullName} has conflicts with existing window properties.`);iteratingTargetObject=iteratingTargetObject[path]}if(name in iteratingTargetObject)throw new Error("There is already an object at the requested place "+fullName);iteratingTargetObject[name]=injectObj}
/**
 * DEPRECATED
 * Register a control.
 * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
 * @param controlTypeName Name of the Control type.
 * @param constructor Constructor which generates the TcHmi Control.
 * @param directory Directory of the Control (base path is the Controls directory).
 * @param template Template file of the Control (base path is the Controls directory).
 * @template C defines the type for the control to register
 * @preserve (Part of the public API)
 * @deprecated Please use registerEx()
 */function register(controlTypeName,constructor,directory,template){let registration={name:controlTypeName,directory,error:TcHmi.Errors.NONE,apiVersion:0,ctrlConstructor:constructor,template};if(constructor.toString().startsWith("class"))registration.nativeEs6Control=!0;else{registration.nativeEs6Control=!1;let firstES6constructor=constructor;do{firstES6constructor=Object.getPrototypeOf(firstES6constructor)}while(firstES6constructor&&!firstES6constructor.toString().startsWith("class"));firstES6constructor&&(registration.nearestEs6Constructor=firstES6constructor)}registrations.map.has(controlTypeName)?registrations.map.set(controlTypeName,{apiVersion:1,error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.register",reason:'Ambiguous registration for the type name: "'+controlTypeName+'". Control will not be addressable by this type name. Please try fully qualified name to access control.'}}):registrations.map.set(controlTypeName,registration),registrations.array.push(registration),TcHmi.EventProvider.raise("System.onControlRegistered",registration)}
/**
 * Register a control.
 * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
 * @param controlTypeName Name of the Control type.
 * @param namespace Name of the Control namespace.
 * @param constructor Constructor which generates the TcHmi Control.
 * @param options options
 * @param options.injectInGlobalObject Inject the control implementation at namespace.name in global object
 * @template C defines the type for the control to register
 * @preserve (Part of the public API)
 */export function registerEx(controlTypeName,namespace,constructor,options){let foundDuplicate=!1,registration={name:controlTypeName,namespace,error:TcHmi.Errors.NONE,apiVersion:1,ctrlConstructor:constructor};if(constructor.toString().startsWith("class"))registration.nativeEs6Control=!0;else{registration.nativeEs6Control=!1;let firstES6constructor=constructor;do{firstES6constructor=Object.getPrototypeOf(firstES6constructor)}while(firstES6constructor&&!firstES6constructor.toString().startsWith("class"));firstES6constructor&&(registration.nearestEs6Constructor=firstES6constructor)}const qname=namespace?namespace+"."+controlTypeName:controlTypeName;if(registrations.map.has(controlTypeName)?registrations.map.set(controlTypeName,{apiVersion:1,error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.registerEx",reason:`Ambiguous registration for the type name: "${controlTypeName}". Control will not be addressable by this type name. Please try fully qualified name to access control.`}}):registrations.map.set(controlTypeName,registration),registrations.map.has(qname)?(registrations.map.set(qname,{apiVersion:1,error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.registerEx",reason:`Ambiguous registration for the name: "${qname}". Control will not be addressable by this name.`}}),foundDuplicate=!0):(registrations.map.set(qname,registration),options?.injectInGlobalObject&&injectInGlobalObject(qname,constructor)),mapControlNamesFromPackageManifestApi1ToApi0.has(qname)){let nameLegacy=mapControlNamesFromPackageManifestApi1ToApi0.get(qname);registrations.map.has(nameLegacy)?(registrations.map.set(nameLegacy,{apiVersion:1,error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.registerEx",reason:`Ambiguous registration for the name: "${nameLegacy}". Control will not be addressable by this name.`}}),foundDuplicate=!0):registrations.map.set(nameLegacy,registration)}foundDuplicate||(registrations.array.push(registration),TcHmi.EventProvider.raise("System.onControlRegistered",registration))}
/**
 * Get control by identifier. Returns the control or undefined.
 * @param id Identifier of the Control.
 * @template T Type of the Control
 * @preserve (Part of the public API)
 */export function get(id){if(!id||!controlManager)return;return controlManager.getControlsCache().get(id)}
/**
 * Gets description information of control by type.
 * @param type Type of the Control.
 * @preserve (Part of the public API)
 */export function getDescription(type){return type&&controlManager?tchmi_clone_object(controlManager.getDescription(type,!0)):null}
/**
 * Gets version information of control by type.
 * @param type Type of the Control.
 * @preserve (Part of the public API)
 */export function getVersion(type){if(!type||!controlManager)return null;let descr=controlManager.getDescription(type);return descr&&descr.version&&"object"==typeof descr.version?tchmi_clone_object(descr.version):null}
/**
 * Returns the dynamic base path of a control.
 * @preserve (Part of the public API)
 * @param type Control type name
 */export function getBasePath(type){return getControlBasePath?.(type)??null}
/**
 * Returns the dynamic base path of a control.
 * @preserve (Part of the public API)
 * @param control TcHmi Control reference
 */export function getBasePathEx(control){return getControlBasePathEx?.(control)??null}
/**
 * Get an ES5 Map of all controls. Key of the map is the control identifier
 * @preserve (Part of the public API)
 */export function getMap(){return controlManager?tchmi_clone_object(controlManager.getControlsCache(),{cloneMaps:{deepCloneKeys:!1,deepCloneValues:!1}}):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Controls] Accessing control map failed. System not ready."),new Map)}export function limitPixelDimensionToControlBound(control,dimension,valueToTest){let currentMinValue=null,currentMaxValue=null;return"height"===dimension?("px"===control.getMinHeightUnit()&&(currentMinValue=control.getMinHeight()??null),"px"===control.getMaxHeightUnit()&&(currentMaxValue=control.getMaxHeight()??null)):"width"===dimension&&("px"===control.getMinWidthUnit()&&(currentMinValue=control.getMinWidth()??null),"px"===control.getMaxWidthUnit()&&(currentMaxValue=control.getMaxWidth()??null)),null===valueToTest?currentMinValue:(currentMinValue&&valueToTest<currentMinValue&&(valueToTest=currentMinValue),currentMaxValue&&valueToTest&&valueToTest>currentMaxValue&&(valueToTest=currentMaxValue),valueToTest)}
/**
 * DEPRECATED
 * Does no longer do anything
 * @deprecated Does no longer do anything
 * @param callback will be imediately called
 * @preserve (Part of the public API)
 */function tachControls(callback=null){TcHmi.Log.warn('[Source=Framework, Module=TcHmi.Controls] The function "TcHmi.Controls.tachControls(callback: null | ((this: void) => void) = null)" has been marked as deprecated and should no longer be used because it does no longer do anything.'),"function"==typeof callback&&callback.apply(null)}function tachControlsAsync(callback=null){TcHmi.Log.warn('[Source=Framework, Module=TcHmi.Controls] The function "TcHmi.Controls.tachControlsAsync(callback: null | ((this: void) => void) = null)" has been marked as deprecated and should no longer be used because it does no longer do anything.'),"function"==typeof callback&&callback.apply(null)}export const mapControlNamesFromPackageManifestApi1ToApi0=new Map([["TcHmi.Controls.Beckhoff.TcHmiBarChart","tchmi-bar-chart"],["TcHmi.Controls.Beckhoff.TcHmiButton","tchmi-button"],["TcHmi.Controls.Beckhoff.TcHmiCheckbox","tchmi-checkbox"],["TcHmi.Controls.Beckhoff.TcHmiCombobox","tchmi-combobox"],["TcHmi.Controls.Beckhoff.TcHmiDatagrid","tchmi-datagrid"],["TcHmi.Controls.Beckhoff.TcHmiDateTimePicker","tchmi-date-time-picker"],["TcHmi.Controls.Beckhoff.TcHmiEllipse","tchmi-ellipse"],["TcHmi.Controls.Beckhoff.TcHmiEventGrid","tchmi-event-grid"],["TcHmi.Controls.Beckhoff.TcHmiIFrame","tchmi-iframe"],["TcHmi.Controls.Beckhoff.TcHmiImage","tchmi-image"],["TcHmi.Controls.Beckhoff.TcHmiKeyboard","tchmi-keyboard"],["TcHmi.Controls.Beckhoff.TcHmiLine","tchmi-line"],["TcHmi.Controls.Beckhoff.TcHmiLinearGauge","tchmi-linear-gauge"],["TcHmi.Controls.Beckhoff.TcHmiLineChart","tchmi-line-chart"],["TcHmi.Controls.Beckhoff.TcHmiPolygon","tchmi-polygon"],["TcHmi.Controls.Beckhoff.TcHmiRadialGauge","tchmi-radial-gauge"],["TcHmi.Controls.Beckhoff.TcHmiRectangle","tchmi-rectangle"],["TcHmi.Controls.Beckhoff.TcHmiTextblock","tchmi-textblock"],["TcHmi.Controls.Beckhoff.TcHmiTextbox","tchmi-textbox"],["TcHmi.Controls.Beckhoff.TcHmiTimespanPicker","tchmi-timespan-picker"],["TcHmi.Controls.Beckhoff.TcHmiToggleButton","tchmi-toggle-button"],["TcHmi.Controls.Beckhoff.TcHmiTrendLineChart","tchmi-trend-line-chart"],["TcHmi.Controls.Beckhoff.TcHmiVideo","tchmi-video"],["TcHmi.Controls.System.TcHmiContainer","tchmi-container"],["TcHmi.Controls.System.TcHmiContainerControl","tchmi-container-control"],["TcHmi.Controls.System.TcHmiContent","tchmi-content"],["TcHmi.Controls.System.TcHmiControl","tchmi-control"],["TcHmi.Controls.System.TcHmiGrid","tchmi-grid"],["TcHmi.Controls.System.TcHmiHtmlHost","tchmi-html-host"],["TcHmi.Controls.System.TcHmiPartial","tchmi-partial"],["TcHmi.Controls.System.TcHmiRegion","tchmi-region"],["TcHmi.Controls.System.TcHmiUserControl","tchmi-user-control"],["TcHmi.Controls.System.TcHmiUserControlHost","tchmi-user-control-host"],["TcHmi.Controls.System.TcHmiView","tchmi-view"]]);TcHmi.Controls={...TcHmi.Controls??{},register,registerEx,get,getDescription,getVersion,getBasePath,getBasePathEx,getMap,limitPixelDimensionToControlBound,tachControls,tachControlsAsync};