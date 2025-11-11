import{bindingManager}from"../System/BindingManager.js";import{controlManager}from"../System/ControlManager.js";import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import{SymbolExpression}from"./SymbolExpression.js";function __getFuncName(fn,control){let res=null,current=control;do{const propertyNames=Object.getOwnPropertyNames(current);for(const propertyName of propertyNames)if("arguments"!==propertyName&&"caller"!==propertyName&&current[propertyName]===fn){res=propertyName;break}}while(current=Object.getPrototypeOf(current));return res}
/**
 * Creates a binding between a symbol and a control attribute setter function.
 * @param expression The target symbol expression.
 * @param fn The target function as prototype reference.
 * @param control The target control instance.
 * @preserve (Part of the public API)
 */export function create(expression,fn,control){const fnName=__getFuncName(fn,control);null!==fnName&&createEx(expression,fnName,control)}
/**
 * Creates a binding between a symbol and a control attribute setter function by name.
 * @param expression The target symbol expression.
 * @param fn The name of the control setter function.
 * @param control The target control instance.
 * @preserve (Part of the public API)
 */export function createEx(expression,fn,control){if(!controlManager||!bindingManager)return void TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Creating binding at control "+control.getId()+" failed. System not ready.");const attr=controlManager.getAttributeByPropertySetterName(control,fn);attr?bindingManager.createBinding(expression,attr.propertyName,control):TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] The attribute with the setter "+fn+" is not included in the description.json of "+control.getType()+". Creating a binding with this attribute failed.")}
/**
 * Creates a binding between a symbol and a control attribute setter function by name of property.
 * @param expression The target symbol expression.
 * @param propertyName The name of the control property.
 * @param control The target control instance.
 * @param options [Optional] Additional options for the binding.
 * @param options.ctx Context for the binding symbol.
 * @preserve (Part of the public API)
 */export function createEx2(expression,propertyName,control,options){if(!bindingManager)return void TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Creating binding at control "+control.getId()+" failed. System not ready.");let parameterInvalid=isParameterTypeInvalid(expression,"expression",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Binding");parameterInvalid?TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Binding] Creating binding failed. expression not valid: ",expression):(parameterInvalid=isParameterTypeInvalid(propertyName,"propertyName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Binding"),parameterInvalid?TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Binding] Creating binding failed. propertyName not valid: ",propertyName):control instanceof TcHmi.Controls.System.baseTcHmiControl?bindingManager.createBinding(expression,propertyName,control,options):TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Binding] Creating binding failed. control not valid: ",control))}
/**
 * Removes a binding between a symbol and a control attribute setter function.
 * @param expression [OBSOLETE] The target symbol expression.
 * @param fn The target function as prototype reference.
 * @param control The target control instance.
 * @param bReset [Optional] If set to false the setter will not resetted with null.
 * @preserve (Part of the public API)
 */export function remove(expression,fn,control,bReset=!0){const fnName=__getFuncName(fn,control);null!==fnName&&removeEx(expression,fnName,control,bReset)}
/**
 * Removes a binding between a symbol and a control attribute setter function.
 * @param expression [OBSOLETE] The target symbol expression.
 * @param fn The name of the control setter function.
 * @param control The target control instance.
 * @param bReset [Optional] If set to false the setter will not resetted with null.
 * @preserve (Part of the public API)
 */export function removeEx(expression,fn,control,bReset=!0){if(!controlManager)return void TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Removing binding at control "+control.getId()+" failed. System not ready.");const attr=controlManager.getAttributeByPropertySetterName(control,fn);attr?removeEx2(expression,attr.propertyName,control,bReset):TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] The attribute with the setter "+fn+" is not included in the description.json of "+control.getType()+". Removing a binding with this attribute failed.")}
/**
 * Removes a binding between a symbol and a control attribute setter function by name of property.
 * @param _unused [OBSOLETE] The target symbol expression.
 * @param propertyName The name of the control attribute property.
 * @param control The target control instance.
 * @param bReset [Optional] If set to false the setter will not resetted with null.
 * @preserve (Part of the public API)
 */export function removeEx2(_unused,propertyName,control,bReset=!0){bindingManager?bindingManager.removeBinding(propertyName,control,bReset):TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Removing binding at control "+control.getId()+" failed. System not ready.")}
/**
 * Returns true if a symbol is bound to the target control property.
 * @param propertyName The name of the control attribute property.
 * @param control The target control instance.
 * @preserve (Part of the public API)
 */export function exists(propertyName,control){return!!resolve(propertyName,control)}
/**
 * Returns the symbol expression of a binding as string or null if no symbol is bound to the target control property.
 * @param propertyName The name of the control attribute property.
 * @param control The target control instance.
 * @preserve (Part of the public API)
 */export function resolve(propertyName,control){if(!bindingManager)return TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Resolving binding at control "+control.getId()+" failed. System not ready."),null;const binding=bindingManager.getBinding(propertyName,control);if(binding){const symbol=binding.getSymbol();if(symbol)return symbol.getExpression().toString()}return null}
/**
 * Returns the symbol expression of a binding as SymbolExpression object or null if no symbol is bound to the target control property.
 * @param propertyName The name of the control attribute property.
 * @param control The target control instance.
 * @preserve (Part of the public API)
 */export function resolveEx(propertyName,control){if(!bindingManager)return TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Resolving binding at control "+control.getId()+" failed. System not ready."),null;const binding=bindingManager.getBinding(propertyName,control);if(binding){const symbol=binding.getSymbol();if(symbol)return new SymbolExpression(symbol.getExpression().toString())}return null}TcHmi.Binding={create,createEx,createEx2,remove,removeEx,removeEx2,exists,resolve,resolveEx};