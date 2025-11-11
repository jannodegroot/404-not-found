import*as Server from"./Server.js";import{Exception}from"./Exception.js";import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import{FilterInstance}from"./FilterInstance.js";import{config}from"../System/System.js";export function getDefaultDomain(settings){return settings?.domain?Promise.resolve(settings.domain):new Promise((resolve,reject)=>{null===Server.readSymbol("ListDomains",data=>{if(data.error||!data.results||!data.results[0]||!data.results[0].value)return void reject(new Exception(data.details??{code:data.error!==TcHmi.Errors.NONE?data.error:TcHmi.Errors.E_SERVER_READVALUE_MISSING,reason:"Failed to fetch domains",domain:"TcHmi.Server.Historize"}));let foundDomain;const domainInfoArr=Object.entries(data.results[0].value),[postgresDomain,_p]=domainInfoArr.find(([_,info])=>"TcHmiPostgresHistorize"===info.extension&&("Initialized"===info.state||"Loaded"===info.state))??[];foundDomain??=postgresDomain;const[sqliteDomain,_s]=domainInfoArr.find(([_,info])=>"TcHmiSqliteHistorize"===info.extension&&("Initialized"===info.state||"Loaded"===info.state))??[];foundDomain??=sqliteDomain,foundDomain?resolve(foundDomain):reject(new Exception({code:TcHmi.Errors.ERROR,reason:"No matching Historize domains found.",domain:"TcHmi.Server.Historize"}))})&&reject(new Exception({code:TcHmi.Errors.ERROR,reason:"Failed to send request to fetch domains",domain:"TcHmi.Server.Historize"}))})}
/**
 * Watches on the default domain.
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */export function watchDefaultDomain(callback=null){let domainSymbol=new TcHmi.Symbol("%s%ListDomains|SubscriptionMode=Change%/s%"),diagnosticsSubscriptionId=null,destroy=()=>{destroyWatch(),domainSymbol?.destroy(),domainSymbol=null,null!==diagnosticsSubscriptionId&&(Server.unsubscribeEx(diagnosticsSubscriptionId,null),diagnosticsSubscriptionId=null)};const destroyWatch=domainSymbol.watchEx(null,data=>{if(data.error||!data.value)return void TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:"Error requesting historize extension name",domain:"TcHmi.Server.Historize",errors:data.details?[data.details]:void 0},destroy});let foundDomain;const domainInfoArr=Object.entries(data.value),[postgresDomain,_p]=domainInfoArr.find(([_,info])=>"TcHmiPostgresHistorize"===info.extension&&("Initialized"===info.state||"Loaded"===info.state))??[];foundDomain??=postgresDomain;const[sqliteDomain,_s]=domainInfoArr.find(([_,info])=>"TcHmiSqliteHistorize"===info.extension&&("Initialized"===info.state||"Loaded"===info.state))??[];foundDomain??=sqliteDomain,foundDomain?(null!==diagnosticsSubscriptionId&&(Server.unsubscribeEx(diagnosticsSubscriptionId,null),diagnosticsSubscriptionId=null),"TcHmiPostgresHistorize"===foundDomain&&(diagnosticsSubscriptionId=TcHmi.Server.subscribeEx([{symbol:`${postgresDomain}.Diagnostics`,filter:new FilterInstance("{key}","==","connectionState").or("{key}","==","domainState").getFilter()}],config.tcHmiServer.websocketIntervalTime,null,data=>{const value=data.response?.commands?.[0]?.readValue;data.error===TcHmi.Errors.NONE&&"Connected"===value?.connectionState&&"Good"===value?.domainState?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:postgresDomain,destroy}):sqliteDomain?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:sqliteDomain,destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:"Historize extension not connected or domain state not good",reason:"connectionState or domainState invalid",domain:"TcHmi.Server.Historize"},destroy})})),TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:sqliteDomain,destroy})):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:TcHmi.Errors.E_NOT_SUPPORTED,message:TcHmi.Errors[TcHmi.Errors.E_NOT_SUPPORTED],reason:"Error requesting historize extension name. No compatible extension found",domain:"TcHmi.Server.Historize"},destroy})});return destroy}
/**
 * Adding a Symbol to the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function add(symbolName,settings,callback=null){return addEx2(symbolName,settings,null,null,callback)}
/**
 * Adding a Symbol to the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function addEx(symbolName,settings,requestOptions,callback=null){return addEx2(symbolName,settings,null,requestOptions,callback)}
/**
 * Adding a Symbol to the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function addEx2(symbolName,settings,options,requestOptions,callback=null){let isInvalid=isParameterTypeInvalid(symbolName,"symbolName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.Historize",callback);if(isInvalid)return isInvalid;if(isInvalid=isParameterTypeInvalid(settings,"settings ",{type:"object",required:"valueNeeded"},"TcHmi.Server.Historize",callback),isInvalid)return isInvalid;return getDefaultDomain(options).then(domain=>{const writeValue={interval:settings.INTERVAL??"PT1S",maxEntries:settings.MAXENTRIES??1e4,rowLimit:settings.ROWLIMIT??1e4,recordingEnabled:settings.RECORDINGENABLED??!0},writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::historizedSymbolList::"+symbolName,writeValue}]};return null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results&&data.results[0]){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))?Promise.reject(new globalThis.Error("Failed to add symbol")):Promise.resolve()}).catch(err=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:err.message,domain:"TcHmi.Server.Historize"}})}),{code:TcHmi.Errors.NONE}}
/**
 * Removing a Symbol from the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function remove(symbolName,callback=null){return removeEx2(symbolName,null,null,callback)}
/**
 * Removing a Symbol from the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function removeEx(symbolName,requestOptions,callback=null){return removeEx2(symbolName,null,requestOptions,callback)}
/**
 * Removing a Symbol from the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function removeEx2(symbolName,options,requestOptions,callback=null){let isInvalid=isParameterTypeInvalid(symbolName,"symbolName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.Historize",callback);if(isInvalid)return isInvalid;return getDefaultDomain(options).then(domain=>{const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage","Delete"],symbol:domain+".Config::historizedSymbolList::"+symbolName}]};return null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results&&data.results[0]){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))?Promise.reject(new globalThis.Error("Failed to remove symbol")):Promise.resolve()}).catch(err=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:err.message,domain:"TcHmi.Server.Historize"}})}),{code:TcHmi.Errors.NONE}}
/**
 * Update a config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function update(symbolName,settings,callback=null){return updateEx2(symbolName,settings,null,null,callback)}
/**
 * Update a config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function updateEx(symbolName,settings,requestOptions,callback=null){return updateEx2(symbolName,settings,null,requestOptions,callback)}
/**
 * Update a config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param settings Settings for the symbol
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function updateEx2(symbolName,settings,options,requestOptions,callback=null){let isInvalid=isParameterTypeInvalid(symbolName,"symbolName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.Historize",callback);if(isInvalid)return isInvalid;if(isInvalid=isParameterTypeInvalid(settings,"settings ",{type:"object",required:"valueNeeded"},"TcHmi.Server.Historize",callback),isInvalid)return isInvalid;return getDefaultDomain(options).then(domain=>{const readRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::historizedSymbolList::"+symbolName}]};return null===Server.requestEx(readRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results&&data.results[0]){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{let readValue=data.results[0].value;if(!readValue)return void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_READVALUE_MISSING});let writeValue=tchmi_clone_object(readValue);void 0!==settings.INTERVAL&&(writeValue.interval=settings.INTERVAL),void 0!==settings.MAXENTRIES&&(writeValue.maxEntries=settings.MAXENTRIES),void 0!==settings.ROWLIMIT&&(writeValue.rowLimit=settings.ROWLIMIT),void 0!==settings.RECORDINGENABLED&&(writeValue.recordingEnabled=settings.RECORDINGENABLED);const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::historizedSymbolList::"+symbolName,writeValue}]};Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results&&data.results[0]){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))}}))?Promise.reject(new globalThis.Error("Failed to update symbol")):Promise.resolve()}).catch(err=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:err.message,domain:"TcHmi.Server.Historize"}})}),{code:TcHmi.Errors.NONE}}
/**
 * Gets the current config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function get(symbolName,callback=null){return getEx2(symbolName,null,null,callback)}
/**
 * Gets the current config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function getEx(symbolName,requestOptions,callback=null){return getEx2(symbolName,null,requestOptions,callback)}
/**
 * Gets the current config of a Symbol in the Historize Configuration of the server
 * @param symbolName Name of the Symbol to manipulate
 * @param options global settings
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function getEx2(symbolName,options,requestOptions,callback=null){let isInvalid=isParameterTypeInvalid(symbolName,"symbolName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.Historize",callback);if(isInvalid)return isInvalid;return getDefaultDomain(options).then(domain=>{const readRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::historizedSymbolList::"+symbolName}]};return null===Server.requestEx(readRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results&&data.results[0]){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{let readValue=data.results[0].value;if(!readValue)return void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_READVALUE_MISSING});let settings={};void 0!==readValue.interval&&(settings.INTERVAL=readValue.interval),void 0!==readValue.maxEntries&&(settings.MAXENTRIES=readValue.maxEntries),void 0!==readValue.rowLimit&&(settings.ROWLIMIT=readValue.rowLimit),void 0!==readValue.recordingEnabled&&(settings.RECORDINGENABLED=readValue.recordingEnabled),TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,key:symbolName,settings})}}))?Promise.reject(new globalThis.Error("Failed to get symbol")):Promise.resolve()}).catch(err=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:err.message,domain:"TcHmi.Server.Historize"}})}),{code:TcHmi.Errors.NONE}}TcHmi.Server??={},TcHmi.Server.Historize={getDefaultDomain,watchDefaultDomain,add,addEx,addEx2,remove,removeEx,removeEx2,update,updateEx,updateEx2,get,getEx,getEx2};