/**
 * Convenience functionality for dealing with TwinCAT HMI object path syntax.
 * @preserve (Part of the public API)
 */
export class ObjectPath{__pathString=null;__path;constructor(pathOrTokens){if("string"==typeof pathOrTokens){this.__pathString=pathOrTokens;const path=this.__split(this.__pathString,{noArrayBrackets:!0});this.__path={path,isPathTokens:!path.some(token=>"number"==typeof token)}}else if(pathOrTokens){for(const token of pathOrTokens)if("string"==typeof token){if(0===token.length)throw new Error(`Invalid token '${token}' found in token array '${JSON.stringify(pathOrTokens)}'. Empty string tokens are not allowed.`);if(token.includes("::"))throw new Error(`Invalid token '${token}' found in token array '${JSON.stringify(pathOrTokens)}'. The sequence '::' is not allowed in tokens because this is the token separator.`);if(token.includes("]["))throw new Error(`Invalid token '${token}' found in token array '${JSON.stringify(pathOrTokens)}'. One token cannot contain more than one array element accessor.`)}this.__path={path:[],isPathTokens:!0},this.push(...pathOrTokens)}else this.__path={path:[],isPathTokens:!0}}
/**
     * Append the given tokens to the back of the path. A token can be a single object property accessor, a single
     * array element accessor using a number or string containing a number enclosed in brackets, or a complete path
     * in string format, which will be parsed and its individual parts added to the object path instance.
     * @param tokens The tokens to add.
     * @returns The new length of the path.
     * @preserve (Part of the public API)
     */push(...tokens){return this.__add(tokens)}
/**
     * Removes the last property accessor from the back of the path and returns it. Object property accessors are
     * returned as strings, while array element accessors are returned as numbers.
     * @returns The removed property accessor.
     * @preserve (Part of the public API)
     */pop(){return this.__remove()}
/**
     * Removes the last path token from the back of the path and returns it. Object property accessors are returned
     * as strings, while array element accessors are returned as strings containing a number enclosed in brackets.
     * @returns The removed path token.
     * @preserve (Part of the public API)
     */popAsPathToken(){const token=this.__remove();return"number"==typeof token?`[${token}]`:token}
/**
     * Append the given tokens to the front of the path. A token can be a single object property access, a single
     * array element access using a number or string containing a number enclosed in brackets, or a complete path in
     * string format, which will be parsed and its individual parts added to the object path instance.
     * @param tokens The tokens to add.
     * @returns The new length of the path.
     * @preserve (Part of the public API)
     */unshift(...tokens){return this.__add(tokens,!0)}
/**
     * Removes the first property accessor from the front of the path and returns it. Object property accessors are
     * returned as strings, while array element accessors are returned as numbers.
     * @returns The removed property accessor.
     * @preserve (Part of the public API)
     */shift(){return this.__remove(!0)}
/**
     * Removes the first path token from the front of the path and returns it. Object property accessors are
     * returned as strings, while array element accessors are returned as strings containing a number enclosed
     * in brackets.
     * @returns The removed path token.
     * @preserve (Part of the public API)
     */shiftAsPathToken(){const token=this.__remove(!0);return"number"==typeof token?`[${token}]`:token}__add(tokens,inFront=!1){if(0===tokens.length)return this.__path.path.length;this.__pathString=null,tokens=tokens.flatMap(token=>"string"==typeof token?this.__split(token,{noArrayBrackets:!0}):token);for(const token of tokens)if("number"==typeof token&&(this.__path.isPathTokens=!1,Number.isNaN(token)||!Number.isFinite(token)))throw new Error(`Invalid token ${token} found. Only finite numbers are allowed as array element accessors.`);return inFront?this.__path.path.unshift(...tokens):this.__path.path.push(...tokens),this.__path.path.length}__remove(inFront=!1){if(0===this.length)return;this.__pathString=null;const token=inFront?this.__path.path.shift():this.__path.path.pop();return this.__path.path.some(token=>"number"==typeof token)||(this.__path.isPathTokens=!0),token}slice(start,end){return new ObjectPath(this.__path.path.slice(start,end))}
/**
     * Returns the property accessor at the given index.
     * @param index The index.
     * @returns The property accessor at the given index.
     * @preserve (Part of the public API)
     */get(index){return this.__path.path[index]}
/**
     * Returns the property accessor at the given index. Array item accessors are returned as a string containing a
     * number enclosed in brackets.
     * @param index The index.
     * @returns The property accessor at the given index.
     * @preserve (Part of the public API)
     */getAsPathToken(index){const token=this.__path.path[index];return"number"==typeof token?`[${token}]`:token}
/**
     * The current length of the path.
     * @preserve (Part of the public API)
     */get length(){return this.__path.path.length}
/**
     * Provides an IterableIterator for the object path. Iterates over all property accessors.
     * @returns An IterableIterator.
     * @preserve (Part of the public API)
     */[window.Symbol.iterator](){return this.__path.path[window.Symbol.iterator]()}
/**
     * Reads the property of the given object or array that is indicated by the object path. Does not create a
     * clone.
     * @param target The object, array or string to read from.
     * @returns The value of the property that was read.
     * @preserve (Part of the public API)
     */readFrom(target){for(const propertyAccessor of this)target=this.__applyPropertyAccessor(target,propertyAccessor);return target}
/**
     * Writes the given value to the property of the given object or array that is indicated by the object path.
     * @param target The object or array to write to.
     * @param value The value to write.
     * @preserve (Part of the public API)
     */writeTo(target,value){const iterator=this[window.Symbol.iterator]();let current=iterator.next();if(current.done)throw new Error("Could not write with empty path. The path must contain at least one token or property accessor to be able to write.");let next=iterator.next();for(;!next.done;)target=this.__applyPropertyAccessor(target,current.value),current=next,next=iterator.next();if(Array.isArray(target)){if("number"!=typeof current.value)throw new Error(`Could not write to property ${current.value} of array. Arrays can only be written to by numeric indices.`);target[current.value]=value}else{if(null===target)throw new Error(`Could not write to property ${current.value} of null.`);if("object"!=typeof target)throw new Error(`Could not write to property ${current.value} of type ${typeof target}.`);if("string"!=typeof current.value)throw new Error(`Could not write to property ${current.value} of object. Objects can only be written to by object property accessors, which must be strings and cannot be numbers enclosed in brackets.`);target[current.value]=value}}__applyPropertyAccessor(target,propertyAccessor){const targetType=typeof target;if(Array.isArray(target)||"string"===targetType){if("number"==typeof propertyAccessor||"length"===propertyAccessor)return target[propertyAccessor];throw new Error(`Could not read property ${propertyAccessor} of array or string. Arrays or strings can only be read by numeric indices, or their length property.`)}if(null===target)throw new Error(`Could not read property ${propertyAccessor} of null.`);if("object"===targetType){if("string"==typeof propertyAccessor)return target[propertyAccessor];throw new Error(`Could not read property ${propertyAccessor} of object. Objects can only be read by object property accessors, which must be strings and cannot be numbers enclosed in brackets.`)}throw new Error(`Could not read property ${propertyAccessor} of type ${targetType}.`)}
/**
     * Returns the path in string format.
     * @returns The path in string format.
     * @preserve (Part of the public API)
     */toString(){if(this.__pathString)return this.__pathString;this.__pathString="";for(const token of this.__path.path)"string"==typeof token?0===this.__pathString.length?this.__pathString+=token:this.__pathString+="::"+token:this.__pathString+="["+token+"]";return this.__pathString}
/**
     * Converts the object path to tokens. Object property accessors are defined as strings, array item accessors
     * are defined as strings containig a number enclosed in brackets.
     * @returns The path in token array format.
     * @preserve (Part of the public API)
     */toPathTokens(){return this.__path.isPathTokens?this.__path.path:this.__path.path.map(token=>"number"==typeof token?`[${token}]`:token)}
/**
     * Splits the object path into tokens but converts tokens like [0] into 0 which can directly be used as array
     * item accessors. Object property accessors are defined as strings.
     * @returns The path in property accessors format.
     * @preserve (Part of the public API)
     */toPropertyAccessors(){return this.__path.path}__split(pathString,options){const res=[],noArrayBrackets=options?.noArrayBrackets??!1,tokens=pathString.split("::");for(let i=0,ii=tokens.length;i<ii;i++){let token=tokens[i];if(i>0&&0===token.length)throw new Error(`Invalid token '${token}' found in path '${pathString}'. Empty string tokens are not allowed. At least one character has to occurr before and after a '::' sequence which is not at the beginning of the path.`);let temp="",bracketsContent="",bracketsOpened=0,bracketsClosed=0;for(let j=0,jj=token.length;j<jj;j++){let c=token[j];if("["===c&&temp.length>0){if(bracketsOpened++,bracketsOpened>bracketsClosed+1)throw new Error(`Invalid token '${token}' found in path '${pathString}'. Multiple opening brackets before closing bracket.`);bracketsContent="",res.push(temp),temp="",noArrayBrackets||(temp+=c)}else if("]"===c){if(bracketsClosed++,bracketsOpened<bracketsClosed)throw new Error(`Invalid token '${token}' found in path '${pathString}'. Unexpected closing bracket.`);if(token.length>j+1&&"["!==token[j+1])throw new Error(`Invalid token '${token}' found in path '${pathString}'. Unexpected token after closing bracket.`);if(noArrayBrackets){let num=parseInt(bracketsContent,10);if(Number.isNaN(num))throw new Error(`Invalid token '${token}' found in path '${pathString}'. Unexpected token in brackets. Only numeric indices are allowed.`);res.push(num)}else temp+=c,res.push(temp);temp=""}else{if("["===c){if(bracketsOpened++,bracketsOpened>bracketsClosed+1)throw new Error(`Invalid token '${token}' found in path '${pathString}'. Multiple opening brackets before closing bracket.`);bracketsContent=""}(!noArrayBrackets||noArrayBrackets&&"["!==c&&"]"!==c)&&(temp+=c),"["!==c&&"]"!==c&&(bracketsContent+=c),j===jj-1&&temp.length>0&&res.push(temp)}}if(bracketsOpened>bracketsClosed)throw new Error(`Invalid token '${token}' found in path '${pathString}'. Missing closing bracket.`)}return res}
/**
     * Returns the path in string format.
     * @param tokens The path as an array in token or property accessor format.
     * @returns The path in string format.
     * @preserve (Part of the public API)
     */static toString(tokens){if(0===arguments.length)return Object.toString.call(this);return new ObjectPath(tokens).toString()}
/**
     * Converts the object path to tokens. Object property accessors are defined as strings, array item accessors
     * are defined as strings containig a number enclosed in brackets.
     * @param path The path to convert. A path in string format uses '::' to denote object property access and '[]'
     * to denote array element access. For example: 'foo::bar[1]'.
     * @returns The path in token array format.
     * @preserve (Part of the public API)
     */static toPathTokens(path){return new ObjectPath(path).toPathTokens()}
/**
     * Splits the object path into tokens but converts tokens like [0] into 0 which can directly be used as array
     * item accessors. Object property accessors are defined as strings.
     * @param path The path to convert. A path in string format uses '::' to denote object property access and '[]'
     * to denote array element access. For example: 'foo::bar[1]'.
     * @returns The path in property accessors format.
     * @preserve (Part of the public API)
     */static toPropertyAccessors(path){return new ObjectPath(path).toPropertyAccessors()}}TcHmi.ObjectPath=ObjectPath;