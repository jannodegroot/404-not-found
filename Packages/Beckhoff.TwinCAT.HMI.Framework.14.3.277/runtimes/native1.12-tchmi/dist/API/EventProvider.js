export let __events=new Map;let __internalEventId=0;
/**
 * Register a callback to an event name.
 * If the name is a symbol expression the callback will be initially called when
 * there is a symbol with this name.
 * Returns a destroy function to remove the registration.
 * @param name Name of the event.
 * @param callback Callback which will be called
 * @param options Data an event can be given while registration.
 * @param registrationData Additional data and options for the event registration.
 * @param registrationData.ctx Context to be used when resolving %ctx% symbols.
 * @returns Destroy function which cleans up/unregisters
 * @preserve (Part of the public API)
 */export function register(name,callback,options,registrationData){let destroyWatch,internalEventId=0,registeredName="";const destroy=()=>{(()=>{if(!internalEventId||!registeredName)return;destroyWatch&&(destroyWatch(),destroyWatch=void 0);const event=__events.get(registeredName),entry=event?.get(internalEventId);event&&(event.delete(internalEventId),0===event.size&&__events.delete(registeredName)),raise(`System.EventProvider.onDestroyedCallback<${registeredName}>`,entry),raise("System.EventProvider.onDestroyedCallback",entry),registeredName=""})()};return(name=>{internalEventId=++__internalEventId,registeredName=name;let event=__events.get(name);void 0===event&&(event=new Map,__events.set(name,event));const entry={id:internalEventId,name,callback,options,registrationData,destroy};event.set(internalEventId,entry),raise(`System.EventProvider.onRegisterCallback<${name}>`,entry),raise("System.EventProvider.onRegisterCallback",entry)})(name),destroy}
/**
 * Calls all registered callbacks related to an event name.
 * @param name Name of the event.
 * @param args Optional parameter(s) which will be transfered to the callbacks
 * @preserve (Part of the public API)
 */export function raise(name,...args){const eventMap=__events.get(name);if(eventMap)for(const event of eventMap.values())TcHmi.Callback.callSafeEx(event.callback,null,{name:event.name,destroy:event.destroy??function(){}},...args)}
/**
 * Calls the callback of a specific event registration.
 * @param event Event object
 * @param args optional parameter(s) which will be transfered to the callbacks
 * @preserve (Part of the public API)
 */export function raiseEx(event,...args){TcHmi.Callback.callSafeEx(event.callback,null,{name:event.name,destroy:event.destroy??function(){}},...args)}export function watchEventRegistration(name,callback){let destroyEventOnDestroyCallback=null;const _register=function(event){destroyEventOnDestroyCallback=register(`System.EventProvider.onDestroyedCallback<${name}>`,function(e,event){TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,type:EventRegWatchType.DESTROY,event}),destroyEventOnDestroyCallback?(destroyEventOnDestroyCallback(),destroyEventOnDestroyCallback=null):e.destroy()}),TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,type:EventRegWatchType.REGISTER,event})};let eventMap=__events.get(name);eventMap&&eventMap.forEach(_register);let destroyEventOnRegisterCallback=register(`System.EventProvider.onRegisterCallback<${name}>`,function(_e,event){_register(event)});return function(){destroyEventOnRegisterCallback&&(destroyEventOnRegisterCallback(),destroyEventOnRegisterCallback=null),destroyEventOnDestroyCallback&&(destroyEventOnDestroyCallback(),destroyEventOnDestroyCallback=null)}}export function has(name){return __events.has(name)}export function count(name){const events=__events.get(name);return events?.size??0}export function registerDomEvent(element,type,listener,options){options=options?{passive:!0,...options}:{passive:!0};const elements=window.Symbol.iterator in element?element:[element];for(const element of elements)element.addEventListener(type,listener,options);return()=>{for(const element of elements)element.removeEventListener(type,listener,options)}}export var EventRegWatchType;!function(EventRegWatchType){EventRegWatchType[EventRegWatchType.REGISTER=100]="REGISTER",EventRegWatchType[EventRegWatchType.DESTROY=200]="DESTROY"}(EventRegWatchType||(EventRegWatchType={}));TcHmi.EventProvider={register,raise,raiseEx,watchEventRegistration,has,count,registerDomEvent,EventRegWatchType};