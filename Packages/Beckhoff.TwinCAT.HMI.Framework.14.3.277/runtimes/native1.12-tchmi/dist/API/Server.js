import{accessManager}from"../System/AccessManager.js";import*as Callback from"./Callback.js";import{createTask}from"../System/Callback.js";import{serverManager}from"../System/ServerManager.js";import{isParameterTypeInvalid,resolveServerSymbolNameParts}from"../System/SystemFunctions.js";import*as TypeHelper from"../System/Type.Schema.Helper.js";import{Data}from"../System/System.js";
/**
 * Returns the current readyState value of the underlying websocket which is connected to the server. Returns null when system is not ready.
 * Use constants like WebSocket.CLOSED or WebSocket.OPEN for comparison.
 * If websocket is OPEN handshakes between server and framework may not yet be done and server may not be ready for full functionality.
 * Use isReady function instead.
 * @returns The current readyState value of the underlying websocket which is connected to the server or null.
 * @preserve (Part of the public API)
 * @deprecated Please use isReady function.
 */
function getWebsocketReadyState(){return serverManager?serverManager.getWebsocketReadyState():null}
/**
 * Returns true if the websocket is ready and false if its not.
 * If websocket is ready handshakes between server and framework may not yet be done and server may not be ready for full functionality.
 * Use isReady function instead.
 * @returns If true the websocket is ready for connectivity.
 * @preserve (Part of the public API)
 * @deprecated Please use isReady function.
 */function isWebsocketReady(){return serverManager?.getWebsocketReadyState()===WebSocket.OPEN}
/**
 * Returns true if the server is ready for application communication.
 * Websocket is ready and handshakes are done.
 * @preserve (Part of the public API)
 */export function isReady(){return serverManager?.isReady()??!1}
/**
 * Returns the framework related api version of the server in the form x.x.x.x and null if the
 * current server version does not support this information yet or the server communication is not yet ready.
 * You can call isReady function to determine if server is ready for communication.
 * You can use the global tchmi_compare_version function to compare the result against a specific version.
 * @preserve (Part of the public API)
 */export function getApiVersion(){return serverManager?serverManager.getApiVersion():null}
/**
 * Write one or more values to a TwinCAT HMI Server symbol.
 * @param symbolNames The target TwinCAT HMI Server symbolname.
 * @param values The value which should be written to the target symbol.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */export function writeSymbol(symbolNames,values,callback){return writeSymbolEx(symbolNames,values,null,callback)}
/**
 * Write one or more values to a server symbol.
 * @param symbolNames The target server symbol name or list of symbol names
 * @param values The value which should be written to the target symbol.
 * @param requestOptions Options for the request itself
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */export function writeSymbolEx(symbolNames,values,requestOptions,callback){return writeSymbolEx2(symbolNames,values,{requestOptions},callback)}
/**
 * Write one or more values to a server symbol.
 * @param symbolNames The target server symbol name or list of symbol names
 * @param values The value which should be written to the target symbol.
 * @param options Options
 * @param options.symbolOptions Options for the symbols
 * @param options.requestOptions Options for the request to the server
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */export function writeSymbolEx2(symbolNames,values,options,callback){if(!serverManager)return Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;let symbolNameArr,symbolValueArr,symbolOptions=options?.symbolOptions??null,requestOptions=options?.requestOptions??null,symbolOptionsArr=null;if(Array.isArray(symbolNames)){if(!Array.isArray(values)||symbolNames.length!==values.length)return Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Symbol array length does not match value array length",domain:"TcHmi.Server"}}),null;if(symbolNameArr=symbolNames,symbolValueArr=values,symbolOptions){if(isParameterTypeInvalid(symbolOptions,"options.symbolOptions",{type:"object",expectArray:!0,required:"valueNeeded",minArrayLength:symbolNameArr.length},"TcHmi.Server",callback))return null;symbolOptionsArr=symbolOptions}}else if(symbolNameArr=[symbolNames],symbolValueArr=[values],symbolOptions){if(isParameterTypeInvalid(symbolOptions,"options.symbolOptions",{type:"object",expectArray:!1,required:"valueNeeded"},"TcHmi.Server",callback))return null;symbolOptionsArr=[symbolOptions]}const callstackLinker=createTask("Server.write>"+(symbolNameArr?.[0]??"unknown")),request={requestType:"ReadWrite",commands:[]};for(let i=0;i<symbolNameArr.length;i++){let strSymbolName=symbolNameArr[i],SymbolValue=symbolValueArr[i];if(isParameterTypeInvalid(strSymbolName,"symbolNames",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server",callback))return null;let command={commandOptions:["SendErrorMessage","SendWriteValue"],symbol:strSymbolName,writeValue:SymbolValue};if(symbolOptionsArr){let symbolOptions=symbolOptionsArr[i];symbolOptions&&symbolOptions.version&&(command.version=symbolOptions.version)}request.commands.push(command)}return serverManager.requestEx(request,requestOptions,handleResponse({completed:data=>{callstackLinker.run(()=>{Callback.callSafeEx(callback,null,data)})}}))}
/**
 * Reads the value of one or multiple TwinCAT HMI Server symbol.
 * @param symbolNames The target TwinCAT HMI Server symbolname or list of symbol names
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
 * @returns Request id
 * @template W unused because this is a read only
 * @template R Type of the read value.
 * @preserve (Part of the public API)
 */export function readSymbol(symbolNames,callback){return readSymbolEx(symbolNames,null,callback)}
/**
 * Reads the value of one or multiple TwinCAT HMI Server symbol.
 * @param symbolNames The target TwinCAT HMI Server symbolname or list of symbol names
 * @param requestOptions Options for the request itself
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
 * @returns Request id
 * @template W unused because this is a read only
 * @template R Type of the read value.
 * @preserve (Part of the public API)
 */export function readSymbolEx(symbolNames,requestOptions,callback){return readSymbolEx2(symbolNames,{requestOptions},callback)}
/**
 * Reads the value of a server symbol
 * @param symbolNames The target symbol name or list of symbol names
 * @param options Options
 * @param options.symbolOptions Options for the symbols
 * @param options.requestOptions Options for the request to the server
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
 * @returns Request id
 * @template R Type of the read value.
 * @preserve (Part of the public API)
 */export function readSymbolEx2(symbolNames,options,callback){if(!serverManager)return Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;let symbolNameArr,symbolOptions=options?.symbolOptions??null,requestOptions=options?.requestOptions??null,symbolOptionsArr=null;if(Array.isArray(symbolNames)){if(isParameterTypeInvalid(symbolNames,"symbolNames",{type:"string",expectArray:!0,required:"valueNeeded",minStringLength:1},"TcHmi.Server",callback))return null;if(symbolNameArr=symbolNames,symbolOptions){if(isParameterTypeInvalid(symbolOptions,"options.symbolOptions",{type:"object",expectArray:!0,required:"valueNeeded",minArrayLength:symbolNameArr.length},"TcHmi.Server",callback))return null;symbolOptionsArr=symbolOptions}}else{if(isParameterTypeInvalid(symbolNames,"symbolNames",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server",callback))return null;if(symbolNameArr=[symbolNames],symbolOptions){if(isParameterTypeInvalid(symbolOptions,"options.symbolOptions",{type:"object",expectArray:!1,required:"valueNeeded"},"TcHmi.Server",callback))return null;symbolOptionsArr=[symbolOptions]}}const callstackLinker=createTask("Server.read>"+(symbolNameArr?.[0]??"unknown")),request={requestType:"ReadWrite",commands:[]};for(let i=0;i<symbolNameArr.length;i++){let command={commandOptions:["SendErrorMessage","SendWriteValue"],symbol:symbolNameArr[i]};if(symbolOptionsArr){let symbolOptions=symbolOptionsArr[i];symbolOptions&&symbolOptions.version&&(command.version=symbolOptions.version)}request.commands.push(command)}return serverManager.requestEx(request,requestOptions,handleResponse({completed:data=>{callstackLinker.run(()=>{Callback.callSafeEx(callback,null,data)})}}))}
/**
 * Subscribe to one or more server symbols.
 * @param symbolNames The target server symbol name or list of symbol names.
 * @param interval Subscription refresh interval.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Subscription id
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */export function subscribeSymbol(symbolNames,interval,callback){return subscribeSymbolEx(symbolNames,void 0,interval,callback)}
/**
 * Subscribe to one or more server symbols with writeValue support for function symbols with parameters or cyclic writing.
 * @param symbolNames The target server symbol name or list of symbol names.
 * @param writeValues The value which should be written to the target symbol with each call.
 * @param interval Subscription refresh interval.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Subscription id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */export function subscribeSymbolEx(symbolNames,writeValues,interval,callback){return subscribeSymbolEx2(symbolNames,writeValues,interval,null,callback)}
/**
 * Subscribe to one or more server symbols with writeValue support for function symbols with parameters or cyclic writing.
 * @param symbolNames The target server symbol name or list of symbol names.
 * @param writeValues The value which should be written to the target symbol.
 * @param interval Subscription refresh interval.
 * @param options Options
 * @param options.symbolOptions Options for the symbols
 * @param options.requestOptions Options for the request to the server
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Subscription id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */export function subscribeSymbolEx2(symbolNames,writeValues,interval,options,callback){if(!serverManager)return Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;let symbolNameArr,symbolValueArr,symbolOptions=options?.symbolOptions??null,requestOptions=options?.requestOptions??null,symbolOptionsArr=null;if(Array.isArray(symbolNames)){if(void 0!==writeValues){if(!Array.isArray(writeValues)||symbolNames.length!==writeValues.length)return Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Symbol array length does not match value array length",domain:"TcHmi.Server"}}),null;Array.isArray(writeValues)&&(symbolValueArr=writeValues)}if(symbolNameArr=symbolNames,symbolOptions){if(isParameterTypeInvalid(symbolOptions,"options.symbolOptions",{type:"object",expectArray:!0,required:"valueNeeded",minArrayLength:symbolNameArr.length},"TcHmi.Server",callback))return null;symbolOptionsArr=symbolOptions}}else if(symbolNameArr=[symbolNames],void 0!==writeValues&&(symbolValueArr=[writeValues]),symbolOptions){if(isParameterTypeInvalid(symbolOptions,"options.symbolOptions",{type:"object",expectArray:!1,required:"valueNeeded"},"TcHmi.Server",callback))return null;symbolOptionsArr=[symbolOptions]}let commands=[];for(let i=0;i<symbolNameArr.length;i++){let strSymbolName=symbolNameArr[i],symbolValue=symbolValueArr?.[i];if(isParameterTypeInvalid(strSymbolName,"symbolNames",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server",callback))return null;let command={commandOptions:["SendErrorMessage","SendWriteValue"],symbol:strSymbolName};if(void 0!==symbolValue&&(command.writeValue=symbolValue),symbolOptionsArr){let symbolOptions=symbolOptionsArr[i];symbolOptions&&symbolOptions.version&&(command.version=symbolOptions.version)}commands.push(command)}return subscribeEx(commands,interval,requestOptions,handleResponse({completed:data=>{Callback.callSafeEx(callback,null,data)}}))}export function resolveSymbolSchema(symbolName,callback){resolveSymbolSchemaEx(symbolName,null,callback)}export function resolveSymbolSchemaEx(symbolName,options,callback){const version=options?.version??null,symbolMetaData=Data.Caches.serverSymbolMetaDataCache.get(symbolName);if(symbolMetaData){if(!symbolMetaData.ListSymbols?.SCHEMA)return void Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYMBOL_RESOLVE_SCHEMA,details:{code:TcHmi.Errors.E_SYMBOL_RESOLVE_SCHEMA,message:TcHmi.Errors[TcHmi.Errors.E_SYMBOL_RESOLVE_SCHEMA],domain:"TcHmi.Server"}});let res=TypeHelper.__resolveRawSchema(symbolMetaData.ListSymbols.SCHEMA,null,new Map,version);res.error===TcHmi.Errors.NONE&&res.schema?Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,schema:tchmi_clone_object(res.schema)}):Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else{const{name:baseName,pathTokens:basePathTokens}=resolveServerSymbolNameParts(symbolName);let baseSchemaCacheEntry=Data.Caches.serverSymbolMetaDataCache.get(baseName);if(baseSchemaCacheEntry){if(!baseSchemaCacheEntry.ListSymbols?.SCHEMA)return void Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR]}});if(baseSchemaCacheEntry.error!==TcHmi.Errors.NONE)return void Callback.callSafeEx(callback,null,{error:baseSchemaCacheEntry.error,details:baseSchemaCacheEntry.details});{let baseSchema=baseSchemaCacheEntry.ListSymbols.SCHEMA;if(baseSchema){let res=TypeHelper.__resolveRawSchema(baseSchema,null,new Map);res.error===TcHmi.Errors.NONE&&res.schema?TypeHelper.__resolveSubSchema(res.schema,basePathTokens,function(data){data&&data.error===TcHmi.Errors.NONE?Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,schema:tchmi_clone_object(data.schema)}):Callback.callSafeEx(callback,null,{error:data.error,details:data.details})}):Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}}}}}export function resolveSymbolMetaData(symbolName,callback){if(!Data.Caches.serverSymbolMetaDataCache)return void Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}});let data=Data.Caches.serverSymbolMetaDataCache.get(symbolName);data?Callback.callSafeEx(callback,null,data):Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYMBOL_RESOLVE_META_DATA,details:{code:TcHmi.Errors.E_SYMBOL_RESOLVE_META_DATA,message:TcHmi.Errors[TcHmi.Errors.E_SYMBOL_RESOLVE_META_DATA],domain:"TcHmi.Server"}})}
/**
 * Requests a message to the hmi server with default connection parameter
 * @param request Request object
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */export function request(request,callback){return requestEx(request,null,callback)}
/**
 * Requests a message to the hmi server with given connection parameter
 * @param request Request object
 * @param requestOptions Options for the request itself
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
 * @returns Request id
 * @template W Type of the write value. Use 'any' (or omit) if this contains multiple different types.
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */export function requestEx(request,requestOptions,callback){if(!serverManager)return Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;const callstackLinker=createTask("Server.request>"+(request.requestType??"ReadWrite")+">"+(request.commands?.[0].symbol??"unknown"));return serverManager.requestEx(request,requestOptions,handleResponse({completed:data=>{callstackLinker.run(()=>{Callback.callSafeEx(callback,null,data)})}}))}
/**
 * Subscribe to a to a list of commands.
 * Subscription have to be unsubscribed by use of the TcHmi.Server.unsubscribe function.
 * @param commands Command object with the subscription
 * @param interval Subscription refresh interval.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */export function subscribe(commands,interval,callback){return subscribeEx(commands,interval,null,callback)}
/**
 * Subscribe to a to a list of commands.
 * Subscription have to be unsubscribed by use of the TcHmi.Server.unsubscribe function.
 * @param commands Command object with the subscription
 * @param interval Subscription refresh interval.
 * @param requestOptions Options for the request itself
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @template R Type of the read value. Use 'any' (or omit) if this contains multiple different types.
 * @preserve (Part of the public API)
 */export function subscribeEx(commands,interval,requestOptions,callback){if(!serverManager)return Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;if(isParameterTypeInvalid(commands,"commands",{type:"object",required:"valueNeeded",expectArray:!0},"TcHmi.Server",callback))return null;let request={requestType:"Subscription",commands};if(isParameterTypeInvalid(interval,"interval",{type:"number",required:"valueNeeded"},"TcHmi.Server",callback))return null;null!=interval&&(request.intervalTime=interval);const callstackLinker=createTask("Server.subscribe>"+(commands?.[0].symbol??"unknown"));return serverManager.requestEx(request,requestOptions,handleResponse({completed:data=>{callstackLinker.run(()=>{Callback.callSafeEx(callback,null,data)})}}))}
/**
 * Unsubscribe a list of commands.
 * @param requestId The id of the subscription request which shall be unsubscribed.
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @preserve (Part of the public API)
 */export function unsubscribe(requestId,callback){return unsubscribeEx(requestId,null,callback)}
/**
 * Unsubscribe a list of commands.
 * @param requestId The id of the subscription request which shall be unsubscribed.
 * @param requestOptions Options for the request itself
 * @param callback Asynchronous response callback which will be raised when the operation has finished.
 * @returns Request id
 * @preserve (Part of the public API)
 */export function unsubscribeEx(requestId,requestOptions,callback){let res=null;if(!serverManager)return Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;if(isParameterTypeInvalid(requestId,"requestId",{type:"number",required:"valueNeeded"},"TcHmi.Server",callback))return null;let requestEntry=serverManager.getRequest(requestId);if(requestEntry){if(serverManager.releaseRequest(requestId),!requestEntry.queue||requestEntry.queuePending){const request={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"Unsubscribe",writeValue:requestId}]};return res=serverManager.requestEx(request,requestOptions,handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}})),res}return Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE}),null}return Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE}),null}
/**
 * Releases a request and associated resources like callbacks.
 * @param id Id of the request to release.
 * @preserve (Part of the public API)
 */export function releaseRequest(id){serverManager&&serverManager.releaseRequest(id)}
/**
 * Get current username as string (could be __SystemGuest/__SystemUser without auth) or null when unknown (while loading).
 * @preserve (Part of the public API)
 */export function getCurrentUser(){return accessManager?accessManager.getCurrentUserConfig().name:(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Server] System not ready."),null)}
/**
 * Get groups membership of current user as array (can be empty).
 * @preserve (Part of the public API)
 */export function getGroupsOfCurrentUser(){return accessManager?tchmi_clone_object(accessManager.getCurrentUserConfig().userIsInGroups):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Server] System not ready."),[])}
/**
 * Get current user config.
 * @preserve (Part of the public API)
 */export function getCurrentUserConfig(){return accessManager?tchmi_clone_object(accessManager.getCurrentUserConfig()):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Server] System not ready."),{state:0,userIsInGroups:[],name:null,domain:null,locale:void 0,configLocale:"client",timeFormatLocale:void 0,configTimeFormatLocale:"client",timeZone:void 0,timeZoneOffset:0,configTimeZone:void 0,autoLogOffMilliSeconds:null,session:null,clientCertificate:null,clientIp:"",errorMessage:"",defaultAuthExtension:"TcHmiUserManagement",defaultUserGroup:"__SystemUsers"})}
/**
 * Login into a TcHmiServer, reloads the page on success, call of a callback after login.
 * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified the default auth extension will be used.
 * @param userName String with the username
 * @param password String with the password
 * @param persistent Should the session be valid even after browser restart
 * @param callback This callback is called if the login was sent
 * @returns returns a boolean if the login was called
 * @preserve (Part of the public API)
 */export function login(userName,password,persistent=!0,callback){return loginEx(userName,password,persistent,null,callback)}
/**
 * Login into a TcHmiServer, reloads the page on success, call of a callback after login.
 * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified the default auth extension will be used.
 * @param userName String with the username
 * @param password String with the password
 * @param persistent Should the session be valid even after browser restart
 * @param requestOptions Options for the request itself
 * @param callback This callback is called if the login was sent
 * @returns returns a boolean if the login was called
 * @preserve (Part of the public API)
 */export function loginEx(userName,password,persistent=!0,requestOptions,callback){return loginEx2(userName,password,persistent,!0,requestOptions,callback)}
/**
 * Login into a TcHmiServer, reloads the page on success if not deactivated, call of a callback after login.
 * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified the default auth extension will be used.
 * @param userName String with the username
 * @param password String with the password
 * @param persistent Should the session be valid even after browser restart
 * @param reload Reload hmi after session login.
 * @param requestOptions Options for the request itself
 * @param callback This callback is called if the login was sent
 * @returns returns a boolean if the login was called
 * @preserve (Part of the public API)
 */export function loginEx2(userName,password,persistent=!0,reload=!1,requestOptions,callback){let res=!1;return serverManager?!isParameterTypeInvalid(userName,"userName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server",callback)&&(!isParameterTypeInvalid(password,"password",{type:"string",required:"valueNeeded"},"TcHmi.Server",callback)&&(res=serverManager.login(userName,password,persistent,reload,requestOptions,callback),res)):(Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),!1)}
/**
 * Logout from a TcHmiServer, reloads the page on success
 * @param callback This callback is called after the logout was sent
 * @returns returns a boolean if the logout was called
 * @preserve (Part of the public API)
 */export function logout(callback){return logoutEx(null,callback)}
/**
 * Logout from a TcHmiServer, reloads the page on success
 * @param requestOptions Options for the request itself
 * @param callback This callback is called after the logout was sent
 * @returns returns a boolean if the logout was called
 * @preserve (Part of the public API)
 */export function logoutEx(requestOptions,callback){return logoutEx2(!0,requestOptions,callback)}
/**
 * Logout from a TcHmiServer, optional reloads the page on success
 * @param reload Reload hmi after session logout
 * @param requestOptions Options for the request itself
 * @param callback This callback is called after the logout was sent
 * @returns returns a boolean if the logout was called
 * @preserve (Part of the public API)
 */export function logoutEx2(reload=!0,requestOptions,callback){let res=!1;return serverManager?(res=serverManager.logout(reload,requestOptions,callback),res):(Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),res)}
/**
 * Logout all users with a specific username or all users from a TcHmiServer
 * @param username username to logout.
 * If empty string or null is provided, all users are logged out.
 * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
 * 'Domain::' will logout every user from this domain
 * @param callback This callback is called after the request was sent
 * @returns returns a boolean if the logout was called
 * @preserve (Part of the public API)
 */export function forceLogout(username,callback){return forceLogoutEx(username,null,callback)}
/**
 * Logout all users with a specific username or all users from a TcHmiServer
 * @param userName username to logout.
 * If empty string or null is provided, all users are logged out.
 * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
 * 'Domain::' will logout every user from this domain
 * @param requestOptions Options for the request itself
 * @param callback This callback is called after the request was sent
 * @returns returns a boolean if the logout was called
 * @preserve (Part of the public API)
 */export function forceLogoutEx(userName,requestOptions,callback){let res=!1;return serverManager?(void 0!==userName&&""!==userName||(userName=null),res=serverManager.forceLogout(userName,requestOptions,callback),res):(Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),!1)}export function handleResponse(args){return data=>{if(data.error!==TcHmi.Errors.NONE)return Callback.callSafeEx(args.error,null,data),void Callback.callSafeEx(args.completed,null,data);let response=data.response,responseCommandIndices=data.responseCommandIndices;if(data.results){let hasCommandError=!1;for(let result of data.results)result.error!==TcHmi.Errors.NONE&&(hasCommandError=!0);hasCommandError?Callback.callSafeEx(args.error,null,data):Callback.callSafeEx(args.success,null,data),Callback.callSafeEx(args.completed,null,data)}else{if(!response)return Callback.callSafeEx(args.error,null,{error:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_MISSING],reason:"Missing response from server.",domain:"TcHmi.Server"}}),void Callback.callSafeEx(args.completed,null,{error:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_MISSING],reason:"Missing response from server.",domain:"TcHmi.Server"}});if(response.error){const res={error:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_ERROR],reason:"Error in response from server with id: "+response.id,domain:"TcHmi.Server",errors:[response.error]}};return void 0!==response&&(res.response=response),void 0!==responseCommandIndices&&(res.responseCommandIndices=responseCommandIndices),Callback.callSafeEx(args.error,null,res),void Callback.callSafeEx(args.completed,null,res)}let commands=response.commands;if(!commands||0===commands.length){const res={error:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,details:{code:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMANDS_MISSING],reason:"Missing commands in response from server with id: "+response.id,domain:"TcHmi.Server"}};return void 0!==response&&(res.response=response),void 0!==responseCommandIndices&&(res.responseCommandIndices=responseCommandIndices),Callback.callSafeEx(args.error,null,res),void Callback.callSafeEx(args.completed,null,res)}let hasCommandError=!1,commandErrors=[];data.results=[];for(const[index,command]of commands.entries())if(!data.responseCommandIndices||data.responseCommandIndices.includes(index))if(command.error){hasCommandError=!0,commandErrors.push({code:TcHmi.Errors.E_SERVER_COMMAND_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_ERROR],reason:'Error in command for symbol: "'+command.symbol+'" in response from server with id: '+response.id,domain:"TcHmi.Server",errors:[command.error]});const res={error:TcHmi.Errors.E_SERVER_COMMAND_ERROR,details:{code:TcHmi.Errors.E_SERVER_COMMAND_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_ERROR],reason:'Error in command for symbol: "'+command.symbol+'" in response from server with id: '+response.id,domain:"TcHmi.Server",errors:[command.error]},symbol:command.symbol};void 0!==data.response&&(res.response=data.response),void 0!==data.responseCommandIndices&&(res.responseCommandIndices=data.responseCommandIndices),data.results.push(res)}else{const res={error:TcHmi.Errors.NONE,symbol:command.symbol,value:command.readValue};void 0!==data.response&&(res.response=data.response),void 0!==data.responseCommandIndices&&(res.responseCommandIndices=data.responseCommandIndices),data.results.push(res)}hasCommandError?Callback.callSafeEx(args.error,null,data):Callback.callSafeEx(args.success,null,data),Callback.callSafeEx(args.completed,null,data)}}}export var Error;!function(Error){Error[Error.HMI_SUCCESS=0]="HMI_SUCCESS",Error[Error.HMI_E_FAIL=257]="HMI_E_FAIL",Error[Error.HMI_E_SYMBOL_IN_USE=274]="HMI_E_SYMBOL_IN_USE",Error[Error.HMI_E_SYMBOL_NOT_MAPPED=513]="HMI_E_SYMBOL_NOT_MAPPED",Error[Error.HMI_E_LICENSE_TARGET=778]="HMI_E_LICENSE_TARGET",Error[Error.HMI_E_MISSING_LICENSE_HANDSHAKE=781]="HMI_E_MISSING_LICENSE_HANDSHAKE",Error[Error.HMI_E_LICENSE_VERIFY=782]="HMI_E_LICENSE_VERIFY",Error[Error.HMI_E_PASSWORD_CHANGE_REQUIRED=4096]="HMI_E_PASSWORD_CHANGE_REQUIRED",Error[Error.HMI_E_INSUFFICIENT_ACCESS=4101]="HMI_E_INSUFFICIENT_ACCESS"}(Error||(Error={}));export var ACCESS;!function(ACCESS){ACCESS[ACCESS.NONE=0]="NONE",ACCESS[ACCESS.READ=1]="READ",ACCESS[ACCESS.WRITE=2]="WRITE",ACCESS[ACCESS.READWRITE=3]="READWRITE"}(ACCESS||(ACCESS={}));TcHmi.Server={...TcHmi.Server??{},getWebsocketReadyState,isWebsocketReady,isReady,getApiVersion,writeSymbol,writeSymbolEx,writeSymbolEx2,readSymbol,readSymbolEx,readSymbolEx2,subscribeSymbol,subscribeSymbolEx,subscribeSymbolEx2,resolveSymbolSchema,resolveSymbolSchemaEx,resolveSymbolMetaData,request,requestEx,subscribe,subscribeEx,unsubscribe,unsubscribeEx,releaseRequest,getCurrentUser,getGroupsOfCurrentUser,getCurrentUserConfig,login,loginEx,loginEx2,logout,logoutEx,logoutEx2,forceLogout,forceLogoutEx,handleResponse,ACCESS,Error};