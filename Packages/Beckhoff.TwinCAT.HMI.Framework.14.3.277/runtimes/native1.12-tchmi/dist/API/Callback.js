import*as Log from"./Log.js";
/**
 * Calls a callback and catches exceptions to return them as value of type {Error} for further processing.
 * @param callback function to call
 * @param thisArg the this pointer in the function call
 * @param args parameters for the function call
 * @returns undefined or the Error in case of an exception
 * @template T this for the call
 * @template A Array of types for all parameter for the function
 * @preserve (Part of the public API)
 */export function callSafe(callback,thisArg,...args){let res;if(callback&&"function"==typeof callback)try{callback.call(thisArg,...args)}catch(e){res=e instanceof Error?e:new Error("Function "+(callback.name?callback.name+" ":"")+"has thrown a plain value (no Error object) and therefore lacks a callstack. Thrown value: "+e)}return res}
/**
 * Calls a callback and catches exceptions to return them as value of type {Error} for further processing and prints it to console for proper call stack.
 * @param callback function to call
 * @param thisArg the this pointer in the function call
 * @param args parameters for the function call
 * @returns undefined or the Error in case of an exception
 * @template T this for the call
 * @template A Array of types for all parameter for the function
 * @preserve (Part of the public API)
 */export function callSafeEx(callback,thisArg,...args){let res;if(callback&&"function"==typeof callback)try{callback.call(thisArg,...args)}catch(e){res=e instanceof Error?e:new Error("Function "+(callback.name?callback.name+" ":"")+"has thrown a plain value (no Error object) and therefore lacks a callstack. Thrown value: "+e)}return res&&Log.error(res),res}TcHmi.Callback={callSafe,callSafeEx};