import{hostPrefix}from"../System/System.js";import{getCurrentUser}from"./Server.js";
/**
 * Encapsulates access to the browsers localStorage. Provides methods to set, get and delete Items from localStorage
 * that take and return properly typed values. Has a validation mechanism that automatically deletes items if their
 * default initial value changes between class instantiations.
 * @preserve (Part of the public API)
 */export class LocalStorage{__validationValues;__name;__storage;constructor(nameOrControl,__validationValues){this.__validationValues=__validationValues;const namePrefix=hostPrefix+"TcHmi.LocalStorage.data:",name="string"==typeof nameOrControl?nameOrControl:nameOrControl.getType()+":"+nameOrControl.getId();this.__name=namePrefix+name;let stored=window.localStorage.getItem(this.__name);if(null===stored){const legacyNamePrefix="TCHMI_STORAGE_USERDATA_";if(stored=window.localStorage.getItem(legacyNamePrefix+name),null!==stored)try{window.localStorage.setItem(this.__name,stored),window.localStorage.removeItem(legacyNamePrefix+name)}catch(ex){}}if(stored)try{this.__storage=JSON.parse(stored),"object"!=typeof this.__storage&&(this.__storage={})}catch(ex){this.__storage={}}else this.__storage={};for(const[key,value]of Object.entries(this.__validationValues)){const storageEntry=this.__storage[key];storageEntry&&"validation"in storageEntry&&!tchmi_equal(value,storageEntry.validation.expectedValue)&&this.delete(key)}}
/**
     * Sets a stored value for the current user. Returns a boolean that indicates if writing to localStorage was successful.
     * @param key The key of the value to set.
     * @param value The value to set.
     * @preserve (Part of the public API)
     */set(key,value){const user=getCurrentUser();if(!user)return!1;let storageForKey=this.__storage[key];if(!storageForKey){const validationValue=this.__validationValues[key];storageForKey=void 0!==validationValue?{validation:{expectedValue:validationValue}}:{},this.__storage[key]=storageForKey}storageForKey.users||(storageForKey.users={}),storageForKey.users[user]=value;try{window.localStorage.setItem(this.__name,JSON.stringify(this.__storage))}catch(ex){return TcHmi.Log.warnEx("[Source=Framework, Module=TcHmi.Storage] Failed to set item in localStorage. This could be caused by missing permissions or the available storage being full."+(ex instanceof Error?` Exception: ${ex.message}`:"")),!1}return!0}
/**
     * Sets a stored value for the current user only if a stored value is already set or the new value to be stored
     * is not equal to the validationValue. This is useful if you want to avoid writing a value into localStorage if
     * that value is already equal to the default value anyway. Returns a boolean that indicates if a new value was set.
     * @param key The key of the value to set.
     * @param value The value to set.
     * @preserve (Part of the public API)
     */setWithValidation(key,value){const user=getCurrentUser();if(!user)return!1;const valueEqualsValidation=key in this.__validationValues&&tchmi_equal(value,this.__validationValues[key]);let storageForKey=this.__storage[key];if(!storageForKey){if(valueEqualsValidation)return!1;const validationValue=this.__validationValues[key];storageForKey=void 0!==validationValue?{validation:{expectedValue:validationValue}}:{},this.__storage[key]=storageForKey}if(!storageForKey.users?.[user]&&valueEqualsValidation)return!1;storageForKey.users||(storageForKey.users={}),storageForKey.users[user]=value;try{window.localStorage.setItem(this.__name,JSON.stringify(this.__storage))}catch(ex){return TcHmi.Log.warnEx("[Source=Framework, Module=TcHmi.Storage] Failed to set item in localStorage. This could be caused by missing permissions or the available storage being full."+(ex instanceof Error?` Exception: ${ex.message}`:"")),!1}return!0}
/**
     * Returns the stored value associated with the given key for the current user.
     * @param key The key to read.
     * @preserve (Part of the public API)
     */get(key){const user=getCurrentUser();if(!user)return;const storageForKey=this.__storage[key];return storageForKey&&storageForKey.users?storageForKey.users[user]:void 0}
/**
     * Deletes a stored value for the current user.
     * @param key The key of the value to delete.
     * @preserve (Part of the public API)
     */delete(key){const storageForKey=this.__storage[key];if(storageForKey){const user=getCurrentUser();if(!user)return;storageForKey.users&&(delete storageForKey.users[user],0===Object.keys(storageForKey.users).length&&delete this.__storage[key])}if(Object.keys(this.__storage).length>0)try{window.localStorage.setItem(this.__name,JSON.stringify(this.__storage))}catch(ex){}else window.localStorage.removeItem(this.__name)}}TcHmi.LocalStorage=LocalStorage;