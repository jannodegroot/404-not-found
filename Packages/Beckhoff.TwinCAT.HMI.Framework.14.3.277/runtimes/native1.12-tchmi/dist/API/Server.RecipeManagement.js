import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import*as Server from"./Server.js";import*as ValueConverter from"./ValueConverter.js";import{Exception}from"./Exception.js";import{openFileDialog as fileUploaderOpenFileDialog}from"./FileUploader.js";
/**
 * Lists all available recipe types
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function listRecipeTypes(callback=null){return listRecipeTypesEx(null,null,callback)}
/**
 * Lists all available recipe types
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function listRecipeTypesEx(options,requestOptions=null,callback=null){let domain="TcHmiRecipeManagement",path="";if(options){let paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.path,"options.path",{type:"string",required:"fullOptional"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.path&&options.path.length>0&&(path="::"+options.path),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList"+path}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results&&data.results[0]){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.results[0].value})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Watches a list of all available recipe types
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */export function watchRecipeTypesList(options,callback=null){let domain="TcHmiRecipeManagement";if(options){let paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return function(){};if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){}}let destroy,recipeSymbol=new TcHmi.Symbol(`%s%${domain}.Config::recipeTypeList${options?.parallel?"|Parallel=True":""}%/s%`);return destroy=recipeSymbol.watchEx(null,function(data){destroy||(destroy=data.destroy),data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.value,destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:recipeSymbol.getExpression().toString(),domain:"TcHmi.Server.RecipeManagement",errors:data.details?[data.details]:void 0},destroy})}),destroy}
/**
 * Returns a recipe types addressed by name and optional path
 * @param recipeTypeName Name of the recipe type
 * @param path Name of the folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function getRecipeType(recipeTypeName,path,callback=null){return getRecipeTypeEx(recipeTypeName,path,null,null,callback)}
/**
 * Returns a recipe types addressed by name and optional path
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param path Name of the folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function getRecipeTypeEx(recipeTypeName,path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(recipeTypeName,"recipeTypeName",{type:"string",required:"valueNeeded"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const recipeTypeFullPath=path&&recipeTypeName?path+"::"+recipeTypeName:recipeTypeName||(path||"");return options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0}),listRecipeTypesEx({domain,path:recipeTypeFullPath},requestOptions,callback)}
/**
 * Watches a recipe type
 * @param recipeTypeName Name of the recipe type
 * @param path Name of the folder
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */export function watchRecipeType(recipeTypeName,path,options,callback=null){let paramInvalid=isParameterTypeInvalid(recipeTypeName,"recipeTypeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return function(){};if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){};let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){};if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){}}let destroy,recipeSymbol=new TcHmi.Symbol(`%s%${domain}.Config::recipeTypeList::${(path?path+"::":"")+recipeTypeName}${options?.parallel?"|Parallel=True":""}%/s%`);return destroy=recipeSymbol.watchEx(null,function(data){destroy||(destroy=data.destroy),data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.value,destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:recipeSymbol.getExpression().toString(),domain:"TcHmi.Server.RecipeManagement",errors:data.details?[data.details]:void 0},destroy})}),destroy}
/**
 * Creates a recipe type folder
 * @param path name of the new folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function createRecipeTypeFolder(path,callback=null){return createRecipeTypeFolderEx(path,null,null,callback)}
/**
 * Creates a recipe type folder
 * This function provides more options to manipulate the request
 * @param path Name of the new folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function createRecipeTypeFolderEx(path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList::"+path,writeValue:{}}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Deletes a recipe type folder
 * @param path name of the folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function deleteRecipeTypeFolder(path,callback=null){return deleteRecipeTypeFolderEx(path,null,null,callback)}
/**
 * Deletes a recipe type folder
 * This function provides more options to manipulate the request
 * @param path Name of the folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function deleteRecipeTypeFolderEx(path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage","Delete"],symbol:domain+".Config::recipeTypeList::"+path}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Creates a new recipe type
 * @param recipeTypeName Name of the recipe type
 * @param recipeType recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function createRecipeType(recipeTypeName,recipeType,path,callback=null){return createRecipeTypeEx(recipeTypeName,recipeType,path,null,null,callback)}
/**
 * Creates a new recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param recipeType Recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function createRecipeTypeEx(recipeTypeName,recipeType,path,options,requestOptions=null,callback=null){return __manipulateRecipeType(!1,recipeTypeName,recipeType,path,options,requestOptions,callback)}
/**
 * Updates a recipe type
 * @param recipeTypeName Name of the recipe type
 * @param recipeType recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function updateRecipeType(recipeTypeName,recipeType,path,callback=null){return updateRecipeTypeEx(recipeTypeName,recipeType,path,null,null,callback)}
/**
 * Updates a recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param recipeType Recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function updateRecipeTypeEx(recipeTypeName,recipeType,path,options,requestOptions=null,callback=null){return __manipulateRecipeType(!0,recipeTypeName,recipeType,path,options,requestOptions,callback)}function __manipulateRecipeType(update,recipeTypeName,recipeType,path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(recipeTypeName,"recipeTypeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList::"+(path?path+"::":"")+recipeTypeName,writeValue:recipeType}]};update&&writeRequest.commands[0].commandOptions.push("Replace"),options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Renames or moves a recipe type
 * @param recipeTypeName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function renameRecipeType(recipeTypeName,path,newName,newPath,callback=null){return renameRecipeTypeEx(recipeTypeName,path,newName,newPath,null,null,callback)}
/**
 * Renames or moves a recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function renameRecipeTypeEx(recipeTypeName,path,newName,newPath,options,requestOptions=null,callback=null){return __renameRecipeEntry("recipeTypeList",recipeTypeName,path,newName,newPath,options,requestOptions,callback)}
/**
 * Renames or moves a recipe type folder
 * @param recipeTypeFolderName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function renameRecipeTypeFolder(recipeTypeFolderName,path,newName,newPath,callback=null){return renameRecipeTypeFolderEx(recipeTypeFolderName,path,newName,newPath,null,null,callback)}
/**
 * Renames or moves a recipe type folder
 * This function provides more options to manipulate the request
 * @param recipeTypeFolderName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function renameRecipeTypeFolderEx(recipeTypeFolderName,path,newName,newPath,options,requestOptions=null,callback=null){return __renameRecipeEntry("recipeTypeList",recipeTypeFolderName,path,newName,newPath,options,requestOptions,callback)}function __renameRecipeEntry(rootFolder,oldName,path,newName,newPath,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(oldName,"oldName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(newName,"newName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(newPath,"newpath",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"Rename",writeValue:{domain,configuration:"default",old:rootFolder+"::"+(path?path+"::":"")+oldName,new:rootFolder+"::"+(newPath?newPath+"::":"")+newName}}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Deletes a recipe type
 * @param recipeTypeName Name of the recipe type
 * @param path Path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function deleteRecipeType(recipeTypeName,path,callback=null){return deleteRecipeTypeEx(recipeTypeName,path,null,null,callback)}
/**
 * Deletes a recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param path Path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function deleteRecipeTypeEx(recipeTypeName,path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(recipeTypeName,"recipeTypeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage","Delete"],symbol:domain+".Config::recipeTypeList::"+(path?path+"::":"")+recipeTypeName}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Lists all available recipes
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function listRecipes(callback=null){return listRecipesEx(null,null,callback)}
/**
 * Lists all available recipes
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function listRecipesEx(options,requestOptions=null,callback=null){let path="",domain="TcHmiRecipeManagement";if(options){let paramInvalid=isParameterTypeInvalid(options.path,"options.path",{type:"string",required:"fullOptional"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if("string"==typeof options.path&&options.path.length>0&&(path="::"+options.path),paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"+path}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.results[0].value})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Watches a list of all available recipes
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */export function watchRecipeList(options,callback=null){let domain="TcHmiRecipeManagement";if(options){let paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return function(){};if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){}}options&&"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain);let destroy,recipeSymbol=new TcHmi.Symbol(`%s%${domain}.Config::recipeList${options?.parallel?"|Parallel=True":""}%/s%`);return destroy=recipeSymbol.watchEx(null,function(data){destroy||(destroy=data.destroy),data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.value,destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:recipeSymbol.getExpression().toString(),domain:"TcHmi.Server.RecipeManagement",errors:data.details?[data.details]:void 0},destroy})}),destroy}
/**
 * Creates a recipe folder
 * @param path name of the new folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function createRecipeFolder(path,callback=null){return createRecipeFolderEx(path,null,null,callback)}
/**
 * Creates a recipe folder
 * This function provides more options to manipulate the request
 * @param path name of the new folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function createRecipeFolderEx(path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList::"+path,writeValue:{}}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Deletes a recipe folder
 * @param path name of the folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function deleteRecipeFolder(path,callback=null){return deleteRecipeFolderEx(path,null,null,callback)}
/**
 * Deletes a recipe folder
 * This function provides more options to manipulate the request
 * @param path Name of the folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function deleteRecipeFolderEx(path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage","Delete"],symbol:domain+".Config::recipeList::"+path}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Creates a new recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param recipe recipe definition
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function createRecipe(recipeName,path,recipe,callback=null){return createRecipeEx(recipeName,path,recipe,null,null,callback)}
/**
 * Creates a new recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param recipe Recipe definition
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function createRecipeEx(recipeName,path,recipe,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const recipeFullPath=path&&recipeName?path+"::"+recipeName:recipeName||(path||""),writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"+(recipeFullPath?"::"+recipeFullPath:""),writeValue:recipe}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});const rId=Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".UpdateRecipe",writeValue:{path:(path?path+"::":"")+recipeName}}]};Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))}}));if(null===rId){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Lists one recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function getRecipe(recipeName,path,callback=null){return getRecipeEx(recipeName,path,null,null,callback)}
/**
 * Lists one recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function getRecipeEx(recipeName,path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const recipeFullPath=path&&recipeName?path+"::"+recipeName:recipeName||(path||""),writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"+(recipeFullPath?"::"+recipeFullPath:"")}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.results[0].value})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Watches a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */export function watchRecipe(recipeName,path,options,callback=null){let paramInvalid=isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return function(){};if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){};let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){};if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){}}const recipeFullPath=path&&recipeName?path+"::"+recipeName:recipeName||(path||"");let destroy,recipeSymbol=new TcHmi.Symbol(`%s%${domain}.Config::recipeList${recipeFullPath?"::"+recipeFullPath:""}${options?.parallel?"|Parallel=True":""}%/s%`);return destroy=recipeSymbol.watchEx(null,function(data){destroy||(destroy=data.destroy),data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.value,destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:recipeSymbol.getExpression().toString(),domain:"TcHmi.Server.RecipeManagement",errors:data.details?[data.details]:void 0},destroy})}),destroy}
/**
 * Updates a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newValues dictionary of the new values
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function updateRecipe(recipeName,path,newValues,callback=null){return updateRecipeEx(recipeName,path,newValues,null,null,callback)}
/**
 * Updates a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newValues Dictionary of the new values
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function updateRecipeEx(recipeName,path,newValues,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(newValues,"newValues",{type:"object",required:"valueNeeded"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"+(path?"::"+path:"")+"::"+recipeName+"::values",writeValue:newValues}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Reads all values which is referenced by a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function readFromTarget(recipeName,path,callback=null){return readFromTargetEx(recipeName,path,null,null,callback)}
/**
 * Reads all values which is referenced by a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function readFromTargetEx(recipeName,path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".ReadFromTarget",writeValue:{path:(path?path+"::":"")+recipeName}}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.results[0].value})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Reads the current values which are referenced from a base recipe and write it back
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function teach(recipeName,path,callback=null){return teachEx(recipeName,path,null,null,callback)}
/**
 * Reads the current values which are referenced from a base recipe and write it back
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function teachEx(recipeName,path,options,requestOptions=null,callback=null){return readFromTargetEx(recipeName,path,options,requestOptions,function(readFromTargetData){readFromTargetData.error===TcHmi.Errors.NONE?createRecipeEx(recipeName,path,readFromTargetData.value[(path?path+"::":"")+recipeName],options,requestOptions,createRecipeData=>{createRecipeData.error!==TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,createRecipeData):TcHmi.Callback.callSafeEx(callback,null,readFromTargetData)}):TcHmi.Callback.callSafeEx(callback,null,readFromTargetData)})}
/**
 * Reads the current values which are referenced from a base recipe and write it into a new recipe
 * @param recipeName Name of the base recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newRecipeName Name of the new recipe. (could be prefixed with a path if separated with ::)
 * @param newRecipePath Path of the new recipe. (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function teachAsNewRecipe(recipeName,path,newRecipeName,newRecipePath,callback=null){return teachAsNewRecipeEx(recipeName,path,newRecipeName,newRecipePath,null,null,callback)}
/**
 * Reads the current values which are referenced from a base recipe and write it into a new recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the base recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newRecipeName Name of the new recipe. (could be prefixed with a path if separated with ::)
 * @param newRecipePath Path of the new recipe. (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function teachAsNewRecipeEx(recipeName,path,newRecipeName,newRecipePath,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);return paramInvalid||(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid||(paramInvalid=isParameterTypeInvalid(newRecipeName,"newRecipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid||(paramInvalid=isParameterTypeInvalid(newRecipePath,"newRecipepath",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid||readFromTargetEx(recipeName,path,options,requestOptions,data=>{data.error===TcHmi.Errors.NONE?createRecipeEx(newRecipeName,newRecipePath,data.value[(path?path+"::":"")+recipeName],options,requestOptions,callback):TcHmi.Callback.callSafeEx(callback,null,data)}))))}
/**
 * Activates a recipe (writes all values)
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function activate(recipeName,path,callback=null){return activateEx(recipeName,path,null,null,callback)}
/**
 * Activates a recipe (writes all values)
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function activateEx(recipeName,path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".ActivateRecipe",writeValue:{path:(path?path+"::":"")+recipeName}}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Lists all active recipes
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function getActiveRecipes(callback=null){return getActiveRecipesEx(null,null,callback)}
/**
 * Lists all active recipes
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function getActiveRecipesEx(options,requestOptions=null,callback=null){let domain="TcHmiRecipeManagement";if(options){let paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".GetActiveRecipes"}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,recipeList:data.results[0].value})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
 * Watches a list of all active recipes
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */export function watchActiveRecipes(options,callback=null){let domain="TcHmiRecipeManagement";if(options){let paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return function(){};if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){}}let destroy,recipeSymbol=new TcHmi.Symbol(`%s%${domain}.GetActiveRecipes${options?.parallel?"|Parallel=True":""}%/s%`);return destroy=recipeSymbol.watchEx(null,function(data){destroy||(destroy=data.destroy),data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.value,destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:recipeSymbol.getExpression().toString(),domain:"TcHmi.Server.RecipeManagement",errors:data.details?[data.details]:void 0},destroy})}),destroy}
/**
 * Renames or moves a recipe
 * @param recipeName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName New name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function renameRecipe(recipeName,path,newName,newPath,callback=null){return renameRecipeEx(recipeName,path,newName,newPath,null,null,callback)}
/**
 * Renames or moves a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName New name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function renameRecipeEx(recipeName,path,newName,newPath,options,requestOptions=null,callback=null){return __renameRecipeEntry("recipeList",recipeName,path,newName,newPath,options,requestOptions,callback)}
/**
 * Renames or moves a recipe folder
 * @param recipeFolderName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName New name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function renameRecipeFolder(recipeFolderName,path,newName,newPath,callback=null){return renameRecipeFolderEx(recipeFolderName,path,newName,newPath,null,null,callback)}
/**
 * Renames or moves a recipe folder
 * This function provides more options to manipulate the request
 * @param recipeFolderName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName Mew name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function renameRecipeFolderEx(recipeFolderName,path,newName,newPath,options,requestOptions=null,callback=null){return __renameRecipeEntry("recipeList",recipeFolderName,path,newName,newPath,options,requestOptions,callback)}
/**
 * Deletes a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function deleteRecipe(recipeName,path,callback=null){return deleteRecipeEx(recipeName,path,null,null,callback)}
/**
 * Deletes a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function deleteRecipeEx(recipeName,path,options,requestOptions=null,callback=null){let paramInvalid=isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage","Delete"],symbol:domain+".Config::recipeList::"+(path?path+"::":"")+recipeName}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}function __fetchAllRecipeTypes(filterList,path,options,requestOptions){const domain=options?.domain??"TcHmiRecipeManagement",allTypePromises=[];for(const filter of filterList){const recipeTypeFullPath=path&&filter?path+"::"+filter:filter||(path||"");allTypePromises.push(new Promise((typeResolve,typeReject)=>{getRecipeTypeEx(recipeTypeFullPath,null,options,requestOptions,typeData=>{if(typeData.error||!typeData.value)return void typeReject(new Exception(typeData.error!==TcHmi.Errors.NONE?typeData.error:TcHmi.Errors.ERROR,`Request for type ${recipeTypeFullPath} failed.`,"TcHmi.Server.RecipeManagement",typeData.details?[typeData.details]:void 0));const recipeTypeOrFolder=typeData.value,recipeTypeCommand={symbol:domain+".Config::recipeTypeList"+(recipeTypeFullPath?"::"+recipeTypeFullPath:""),writeValue:recipeTypeOrFolder};if(options?.referencedRecipeTypes&&""!==recipeTypeFullPath){const allSubTypes=new Set,findTypesInRecipeTypeFolder=currentRecipeTypeOrFolder=>{if(isRecipeType(currentRecipeTypeOrFolder))for(const reference of currentRecipeTypeOrFolder.recipeTypeNames??[])allSubTypes.add(reference);else for(const subRecipeType of Object.values(currentRecipeTypeOrFolder))findTypesInRecipeTypeFolder(subRecipeType)};findTypesInRecipeTypeFolder(recipeTypeOrFolder),__fetchAllRecipeTypes(allSubTypes,null,options,requestOptions).then(data=>{typeResolve([...data,recipeTypeCommand])}).catch(err=>{typeReject(err)})}else typeResolve([recipeTypeCommand])})}))}return Promise.all(allTypePromises).then(data=>Promise.resolve(data.flat(1)))}
/**
 * Downloads one or more recipes. Downloads all recipes when filter is the empty string, empty array or null.
 * The sibling API downloadRecipesEx can include the referenced recipe types, too.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipes (could be prefixed with a path if separated with ::)
 * @param path Path of the recipes (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function downloadRecipes(filter,path,callback=null){return downloadRecipesEx(filter,path,null,null,callback)}
/**
 * Downloads one or more recipes. Downloads all recipes when filter is the empty string, empty array or null.
 * Can include the referenced recipe types, too, when set in options.
 * This function provides more options to manipulate the request.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipes (could be prefixed with a path if separated with ::)
 * @param path Path of the recipes (root folder if set to null)
 * @param options Options for the download recipeManagement
 * @param requestOptions Options for the request itself (not used right now)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function downloadRecipesEx(filter,path,options,requestOptions=null,callback=null){let filterArr;if(null===filter)filterArr=[""];else if(Array.isArray(filter)&&0===filter.length)filterArr=[""];else if(Array.isArray(filter)){let paramInvalid=isParameterTypeInvalid(filter,"filter",{type:"string",expectArray:!0,required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;filterArr=filter}else{let paramInvalid=isParameterTypeInvalid(filter,"recipeName",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;filterArr=[filter]}let paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.referencedRecipeTypes,"options.referencedRecipeTypes",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}return new Promise((resolve,reject)=>{const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"},{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList"}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});null!==Server.requestEx(writeRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];reject(new Exception(res.details??{code:res.error}))}else reject(new Exception(data.details??{code:data.error}))},success:data=>{const allRecipes=data.results.find(data=>data.symbol===domain+".Config::recipeList")?.value,allRecipeTypes=data.results.find(data=>data.symbol===domain+".Config::recipeTypeList")?.value;allRecipes&&allRecipeTypes?resolve({allRecipes,allRecipeTypes}):reject(new Exception(TcHmi.Errors.ERROR,"Request had wrong content.","TcHmi.Server.RecipeManagement"))}}))||reject(new Exception(TcHmi.Errors.ERROR,"Request could not be sent.","TcHmi.Server.RecipeManagement"))}).then(data=>{const allRecipeTypesMap=new Map,allRecipeTypesOrFolderMap=new Map,buildRecipeTypeMap=(currentRecipeTypeOrFolder,path)=>{if(allRecipeTypesOrFolderMap.set(path,currentRecipeTypeOrFolder),isRecipeType(currentRecipeTypeOrFolder))allRecipeTypesMap.set(path,currentRecipeTypeOrFolder);else for(const[subPath,subRecipeTypeFolder]of Object.entries(currentRecipeTypeOrFolder))buildRecipeTypeMap(subRecipeTypeFolder,path?path+"::"+subPath:subPath)};buildRecipeTypeMap(data.allRecipeTypes,"");const allRecipesMap=new Map;let referencedRecipe=new Map,referencedRecipeTypes=new Map;const buildRecipeMap=(currentRecipeOrFolder,path)=>{if(allRecipesMap.set(path,currentRecipeOrFolder),isRecipe(currentRecipeOrFolder)){referencedRecipeTypes.set(path,currentRecipeOrFolder.recipeTypeName),referencedRecipe.set(path,[]);const typeMembers=allRecipeTypesMap.get(currentRecipeOrFolder.recipeTypeName)?.members;if(typeMembers)for(const recipeTypeMember of Object.values(typeMembers))if(recipeTypeMember&&"recipeType"in recipeTypeMember){const linkedRecipePath=currentRecipeOrFolder.values[recipeTypeMember.recipeType];linkedRecipePath&&referencedRecipe.get(path)?.push(linkedRecipePath)}}else for(const[subPath,subRecipeFolder]of Object.entries(currentRecipeOrFolder))buildRecipeMap(subRecipeFolder,path?path+"::"+subPath:subPath)};buildRecipeMap(data.allRecipes,"");const resultMessage={requestType:"ReadWrite",commands:[]},includedRecipePaths=new Set,includedRecipeTypePaths=new Set,buildRecipeTypeCommand=referencedRecipeType=>{if(referencedRecipeType&&!includedRecipeTypePaths.has(referencedRecipeType)){includedRecipeTypePaths.add(referencedRecipeType);const referencedRecipeTypeObj=allRecipeTypesMap.get(referencedRecipeType);resultMessage.commands?.unshift({commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList"+(referencedRecipeType?"::"+referencedRecipeType:""),writeValue:referencedRecipeTypeObj});for(const subReferencedRecipeType of referencedRecipeTypeObj?.recipeTypeNames??[])buildRecipeTypeCommand(subReferencedRecipeType)}else void 0===referencedRecipeType&&resultMessage.commands?.unshift({commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList",writeValue:allRecipeTypesOrFolderMap.get("")})},buildRecipeCommand=recipePath=>{if(includedRecipePaths.has(recipePath))return;includedRecipePaths.add(recipePath),resultMessage.commands?.push({commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"+(recipePath?"::"+recipePath:""),writeValue:allRecipesMap.get(recipePath)});const referencedRecipeType=referencedRecipeTypes.get(recipePath);options?.referencedRecipeTypes&&(resultMessage.commands?.some(cmd=>cmd.symbol===domain+".Config::recipeTypeList")||buildRecipeTypeCommand(referencedRecipeType));for(const referencedPath of referencedRecipe.get(recipePath)??[])buildRecipeCommand(referencedPath)};for(const recipePath of filterArr)buildRecipeCommand(path?path+"::"+recipePath:recipePath);const downloaderAElement=document.createElement("a");downloaderAElement.download=(1===filterArr.length&&filterArr[0]?filterArr[0].replace(/::/g,"_"):domain+"_recipeList")+(options?.referencedRecipeTypes?"+ref":"")+".json",downloaderAElement.href="data:application/json;charset=utf8,"+encodeURI(JSON.stringify(resultMessage)),downloaderAElement.style.display="none",document.body.appendChild(downloaderAElement),downloaderAElement.click(),downloaderAElement.remove(),TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}).catch(error=>{error instanceof Exception?TcHmi.Callback.callSafeEx(callback,null,{error:error.code,details:error.details}):TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Unknown error in downloadRecipeEx",domain:"TcHmi.Server.RecipeManagement",exception:error}})}),{code:TcHmi.Errors.NONE}}
/**
 * Downloads one or more recipe types. Downloads all recipe types when recipeTypeName is the empty string or null.
 * The sibling API downloadRecipeTypesEx can include the referenced recipe types, too.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipe types (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe types (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function downloadRecipeTypes(filter,path,callback=null){return downloadRecipeTypesEx(filter,path,null,null,callback)}
/**
 * Downloads one or more recipe types. Downloads all recipe types when recipeTypeName is the empty string or null.
 * Can include the referenced recipe types, too, when set in options.
 * This function provides more options to manipulate the request.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipe types (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe types (root folder if set to null)
 * @param options Options for the download recipeManagement
 * @param requestOptions Options for the request itself (not used right now)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function downloadRecipeTypesEx(filter,path,options,requestOptions=null,callback=null){let filterArr;if(Array.isArray(filter)){let paramInvalid=isParameterTypeInvalid(filter,"filter",{type:"string",expectArray:!0,required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;filterArr=filter}else{let paramInvalid=isParameterTypeInvalid(filter,"recipeTypeName",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;filterArr=[filter]}let paramInvalid=isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.referencedRecipeTypes,"options.referencedRecipeTypes",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if(paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}return __fetchAllRecipeTypes(filterArr,path,options,requestOptions).then(allPromiseResults=>{const seenPath=new Set,resultMessage={requestType:"ReadWrite",commands:allPromiseResults.flat(1).filter(data=>!seenPath.has(data.symbol)&&(seenPath.add(data.symbol),!0))},downloaderAElement=document.createElement("a");downloaderAElement.download=(1===filterArr.length&&filterArr[0]?filterArr[0].replace(/::/g,"_"):domain+"_recipeTypeList")+(options?.referencedRecipeTypes?"+ref":"")+".json",downloaderAElement.href="data:application/json;charset=utf8,"+encodeURI(JSON.stringify(resultMessage)),downloaderAElement.style.display="none",document.body.appendChild(downloaderAElement),downloaderAElement.click(),downloaderAElement.remove(),TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}).catch(error=>{error instanceof Exception?TcHmi.Callback.callSafeEx(callback,null,{error:error.code,details:error.details}):TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Unknown error in downloadRecipeTypesEx",domain:"TcHmi.Server.RecipeManagement",exception:error}})}),{code:TcHmi.Errors.NONE}}
/**
 * Uploads one or more recipe files (each containing one or all recipes or recipe types of a server).
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function uploadRecipeFiles(callback=null){return uploadRecipeFilesEx(null,null,callback)}
/**
 * Uploads one or more recipe files (each containing one or all recipes or recipe types of a server).
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */export function uploadRecipeFilesEx(options,requestOptions=null,callback=null){let domain;if(options){let paramInvalid=isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}let pendingFileCount=0;return fileUploaderOpenFileDialog({multiple:!0,acceptedFileTypes:[".json"]}).then(files=>{if(files?.length){pendingFileCount+=files.length;for(const file of files){const reader=new FileReader;reader.addEventListener("loadend",()=>{if(pendingFileCount<=0)return;const request=ValueConverter.toObject(reader.result);if(!request?.commands?.length)return pendingFileCount=0,void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Selected recipe file to upload has invalid content.",domain:"TcHmi.Server.RecipeManagment"}});for(const command of request.commands){if(!command.symbol||!command.symbol.includes(".Config::"))return pendingFileCount=0,void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Selected recipe file to upload has invalid content. Symbol not allowed: "+command.symbol,domain:"TcHmi.Server.RecipeManagment"}});if(domain){const symbol=command.symbol,configIndex=symbol.indexOf(".Config::");command.symbol=domain+symbol.substring(configIndex)}}options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0}),Server.requestEx(request,requestOptions,data=>{if(!(pendingFileCount<=0)){if(data.error||!data.results)return pendingFileCount=0,void TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details});for(const res of data.results)if(res.error!==TcHmi.Errors.NONE)return pendingFileCount=0,void TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details});pendingFileCount--,pendingFileCount<=0&&TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}})}),reader.addEventListener("error",()=>{pendingFileCount<=0||(pendingFileCount=0,TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Reading recipe file to upload has failed.",domain:"TcHmi.Server.RecipeManagment"}}))}),reader.readAsText(file)}}else pendingFileCount=0,TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}),{code:TcHmi.Errors.NONE}}export function isRecipe(candidate){return"string"==typeof candidate.recipeTypeName&&"object"==typeof candidate.values&&null!==candidate.values}export function isRecipeType(candidate){if("object"!=typeof candidate.members||null===candidate.members)return!1;for(const member of Object.values(candidate.members))if("string"!=typeof member.recipeType){if("string"!=typeof member.symbol)return!1;if(!("defaultValue"in member))return!1}const additionalChecksRequired=0===Object.keys(candidate.members).length;let recipeTypeNamesValid=!1,optionsValid=!1;if("recipeTypeNames"in candidate){if(!Array.isArray(candidate.recipeTypeNames))return!1;for(const entry of candidate.recipeTypeNames){if("string"!=typeof entry)return!1;recipeTypeNamesValid=!0}}if("options"in candidate){if("object"!=typeof candidate.options||null===candidate.options)return!1;if("enabled"in candidate.options){if("None"!==candidate.options.enabled&&"Disabled"!==candidate.options.enabled)return!1;optionsValid=!0}if("comment"in candidate.options){if("string"!=typeof candidate.options.comment)return!1;optionsValid=!0}}return!(additionalChecksRequired&&!recipeTypeNamesValid&&!optionsValid)}TcHmi.Server??={},TcHmi.Server.RecipeManagement={listRecipeTypes,listRecipeTypesEx,watchRecipeTypesList,getRecipeType,getRecipeTypeEx,watchRecipeType,createRecipeTypeFolder,createRecipeTypeFolderEx,deleteRecipeTypeFolder,deleteRecipeTypeFolderEx,createRecipeType,createRecipeTypeEx,updateRecipeType,updateRecipeTypeEx,renameRecipeType,renameRecipeTypeEx,renameRecipeTypeFolder,renameRecipeTypeFolderEx,deleteRecipeType,deleteRecipeTypeEx,listRecipes,listRecipesEx,watchRecipeList,createRecipeFolder,createRecipeFolderEx,deleteRecipeFolder,deleteRecipeFolderEx,createRecipe,createRecipeEx,getRecipe,getRecipeEx,watchRecipe,updateRecipe,updateRecipeEx,readFromTarget,readFromTargetEx,teach,teachEx,teachAsNewRecipe,teachAsNewRecipeEx,activate,activateEx,getActiveRecipes,getActiveRecipesEx,watchActiveRecipes,renameRecipe,renameRecipeEx,renameRecipeFolder,renameRecipeFolderEx,deleteRecipe,deleteRecipeEx,downloadRecipes,downloadRecipesEx,downloadRecipeTypes,downloadRecipeTypesEx,uploadRecipeFiles,uploadRecipeFilesEx,isRecipe,isRecipeType};