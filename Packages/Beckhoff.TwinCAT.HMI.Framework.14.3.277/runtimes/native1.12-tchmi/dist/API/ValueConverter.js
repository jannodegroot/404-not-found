import{typeManager}from"../System/Type.TypeManager.js";import*as SystemSchema from"../System/Type.Schema.js";const AngleUnitList={deg:"deg",rad:"rad",turn:"turn",grad:"grad"},BorderStyleValueList={Solid:"Solid",Dashed:"Dashed",Dotted:"Dotted",None:"None"},DimensionUnitList={px:"px","%":"%"},FontSizeUnitList={px:"px","%":"%",em:"em",rem:"rem"},FontStyleList={Normal:"Normal",Italic:"Italic",Oblique:"Oblique",Auto:"Auto"},FontWeightList={Normal:"Normal",Bold:"Bold",Auto:"Auto"},HorizontalAlignmentList={Left:"Left",Center:"Center",Right:"Right"},ScaleModeStringList={None:"None",ScaleToFill:"ScaleToFill",ScaleToFit:"ScaleToFit",ScaleToFitWidth:"ScaleToFitWidth",ScaleToFitHeight:"ScaleToFitHeight"},SizeModeList={Value:"Value",Parent:"Parent"},SizeModeWithContentList={Value:"Value",Parent:"Parent",Content:"Content"},ToggleStateList={Normal:"Normal",Active:"Active"},VerticalAlignmentList={Top:"Top",Center:"Center",Bottom:"Bottom"},VisibilityList={Visible:"Visible",Hidden:"Hidden",Collapsed:"Collapsed"};
/**
 * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}.
 * No content check will be done!
 * @param value The value to convert.
 * @param defaultValue The fallback value (null if not given)
 * @template T Type of the resulting object.
 * @preserve (Part of the public API)
 */
export function toObject(value,defaultValue=null){return toObjectEx(value,{defaultValue}).value}
/**
 * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}. Returns a result object for error detection.
 * No content check will be done!
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @template T Type of the resulting object.
 * @preserve (Part of the public API)
 */export function toObjectEx(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;if("string"==typeof value&&""!==value)try{res.value=JSON.parse(value)}catch(e){res.error=TcHmi.Errors.E_VALUE_INVALID,e instanceof Error?res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"Converting string to object failed:"+e.message,exception:e}:res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:String(e)}}else"object"==typeof value?null!==value&&(res.value=value):(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not compatible with type object."});return res}
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
 * @preserve (Part of the public API)
 */export function toString(value,defaultValue=null){if(0===arguments.length){return{}.toString()}return toStringEx(value,{defaultValue}).value}
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toStringEx(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;switch(typeof value){case"boolean":case"number":case"bigint":res.value=value.toString();break;case"object":value instanceof Date?res.value=value.toISOString():value instanceof TcHmi.Controls.System.baseTcHmiControl||value instanceof Element||(res.value=JSON.stringify(value));break;case"string":res.value=value;break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter"}}return res}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toDimensionUnit(value,defaultValue=null){return toEnum(value,DimensionUnitList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toDimensionUnitEx(value,options){return toEnumEx(value,DimensionUnitList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toAngleUnit(value,defaultValue=null){return toEnum(value,AngleUnitList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toAngleUnitEx(value,options){return toEnumEx(value,AngleUnitList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toBorderStyleValue(value,defaultValue=null){return toEnum(value,BorderStyleValueList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toBorderStyleValueEx(value,options){return toEnumEx(value,BorderStyleValueList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toFontStyle(value,defaultValue=null){return toEnum(value,FontStyleList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toFontStyleEx(value,options){return toEnumEx(value,FontStyleList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toFontSizeUnit(value,defaultValue=null){return toEnum(value,FontSizeUnitList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toFontSizeUnitEx(value,options){return toEnumEx(value,FontSizeUnitList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toFontWeight(value,defaultValue=null){return toEnum(value,FontWeightList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toFontWeightEx(value,options){return toEnumEx(value,FontWeightList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toHorizontalAlignment(value,defaultValue=null){return toEnum(value,HorizontalAlignmentList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toHorizontalAlignmentEx(value,options){return toEnumEx(value,HorizontalAlignmentList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toScaleModeString(value,defaultValue=null){return toEnum(value,ScaleModeStringList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toScaleModeStringEx(value,options){return toEnumEx(value,ScaleModeStringList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toSizeMode(value,defaultValue=null){return toEnum(value,SizeModeList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toSizeModeEx(value,options){return toEnumEx(value,SizeModeList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toSizeModeWithContent(value,defaultValue=null){return toEnum(value,SizeModeWithContentList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toSizeModeWithContentEx(value,options){return toEnumEx(value,SizeModeWithContentList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toVerticalAlignment(value,defaultValue=null){return toEnum(value,VerticalAlignmentList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toVerticalAlignmentEx(value,options){return toEnumEx(value,VerticalAlignmentList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toVisibility(value,defaultValue=null){return toEnum(value,VisibilityList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toVisibilityEx(value,options){return toEnumEx(value,VisibilityList,options)}
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toToggleState(value,defaultValue=null){return toEnum(value,ToggleStateList,defaultValue)}
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toToggleStateEx(value,options){return toEnumEx(value,ToggleStateList,options)}
/**
 * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toFontFamily(value,defaultValue){return toString(value,defaultValue)}
/**
 * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toFontFamilyEx(value,options){return toStringEx(value,options)}
/**
 * Converts a value to {number}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to number (null if not given)
 * @preserve (Part of the public API)
 */
export function toNumber(value,defaultValue=null){return toNumberEx(value,{defaultValue}).value}
/**
 * Converts a value to {number}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toNumberEx(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;switch(typeof value){case"string":res.value=function(value){return/^(\-|\+)?(\d+(\.\d+)?([e,E](\-|\+)?\d+)?|Infinity)$/.test(value)?parseFloat(value):NaN}(value),isNaN(res.value)&&"NaN"!==value&&(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid number."},res.value=defaultValue);let big=null;try{big=BigInt(value)}catch(e){}void 0!==res.value&&null!==res.value&&!isNaN(res.value)&&null!==big&&(BigInt(value)>BigInt(Number.MAX_SAFE_INTEGER)||BigInt(value)<BigInt(Number.MIN_SAFE_INTEGER))&&(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not within the bounds of 'number'."},res.value=defaultValue);break;case"boolean":switch(value){case!0:res.value=1;break;case!1:res.value=0}break;case"number":res.value=value;break;case"bigint":value>BigInt(Number.MAX_SAFE_INTEGER)?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be greater than Number.MAX_SAFE_INTEGER."},res.value=defaultValue):value<BigInt(Number.MIN_SAFE_INTEGER)?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be smaller than Number.MIN_SAFE_INTEGER."},res.value=defaultValue):res.value=Number(value);break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter"}}return res}
/**
 * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */export function toBoolean(value,defaultValue=null){return toBooleanEx(value,{defaultValue}).value}
/**
 * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toBooleanEx(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;switch(typeof value){case"string":switch(value.toLowerCase()){case"true":res.value=!0;break;case"false":res.value=!1;break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must be either 'true' or 'false' without case sensitivity."},res.value=defaultValue}break;case"number":switch(value){case 1:res.value=!0;break;case 0:res.value=!1;break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must be either '1' or '0'."},res.value=defaultValue}break;case"bigint":switch(value){case 1n:res.value=!0;break;case 0n:res.value=!1;break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must be either '1n' or '0n'."},res.value=defaultValue}break;case"boolean":res.value=value;break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The type of value must be 'string', 'number', 'bigint' or 'boolean'."},res.value=defaultValue}return res}
/**
 * Converts a value to {BigInt} and returns the {BigInt} or null if the type of value is not compatible to {BigInt}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */export function toBigInt(value,defaultValue=null){return toBigIntEx(value,{defaultValue}).value}
/**
 * Converts a value to {BigInt} and returns the 64 bit {BigInt} or null if the type of value is not compatible to {BigInt}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toBigIntEx(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;try{let bigint=BigInt(value);return"number"==typeof value&&bigint!=value?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid bigint."},res.value=defaultValue,res):(res.value=bigint,res)}catch(e){if("string"!=typeof value)return res.error=TcHmi.Errors.E_EXCEPTION,e instanceof Error?res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:"Converting value to BigInt failed:"+e.message,exception:e}:res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:String(e)},res.value=defaultValue,res;try{let num=toNumber(value);if(null!==num){let bigint=BigInt(num);return bigint!=num?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid bigint."},res.value=defaultValue,res):(res.value=bigint,res)}return res.error=TcHmi.Errors.E_EXCEPTION,e instanceof Error?res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:"Converting value to BigInt failed:"+e.message,exception:e}:res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:String(e)},res.value=defaultValue,res}catch(e){return res.error=TcHmi.Errors.E_EXCEPTION,e instanceof Error?res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:"Converting value to BigInt failed:"+e.message,exception:e}:res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:String(e)},res.value=defaultValue,res}}}
/**
 * Converts a value to 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */export function toBigInt64(value,defaultValue=null){return toBigInt64Ex(value,{defaultValue}).value}
/**
 * Converts a value to 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toBigInt64Ex(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;let bigint=toBigInt(value);if(null===bigint)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid 64 bit integer."},res.value=defaultValue,res;let bigint64=BigInt.asIntN(64,bigint);return bigint64!==bigint?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid 64 bit integer."},res.value=defaultValue,res):(res.value=bigint64,res)}
/**
 * Converts a value to unsigned 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */export function toUnsignedBigInt64(value,defaultValue=null){return toUnsignedBigInt64Ex(value,{defaultValue}).value}
/**
 * Converts a value to unsigned 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toUnsignedBigInt64Ex(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;let bigint=toBigInt(value);if(null===bigint)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid 64 bit unsigned integer."},res.value=defaultValue,res;let ubigint64=BigInt.asUintN(64,bigint);return ubigint64!==bigint?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid 64 bit unsigned integer."},res.value=defaultValue,res):(res.value=ubigint64,res)}
/**
 * Converts a value to its enum value (reduced allowed value set) and
 * returns the corresponding number (numeric enums) or string (string enums or js objects)
 * or the given default value if the type of value is not compatible to the enum.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * This is the implementation.
 * @param value The value to convert.
 * @param enumType Enum value to convert to.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */export function toEnum(value,enumType,defaultValue=null){return toEnumEx(value,enumType,{defaultValue}).value}
/**
 * Converts a value to enum {number} and returns the enum {number} or null if the type of value is not compatible to enum {Object}.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * Returns a result object for error detection.
 * @param value The value to convert.
 * @param enumType Enum value to convert to
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */export function toEnumEx(value,enumType,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;switch(typeof value){case"string":if(""===value)break;const numValue=parseInt(value,10);isNaN(numValue)?(res.value=enumType[value],void 0===res.value&&(res.value=enumType[value.toLowerCase()]),void 0===res.value&&(res.value=enumType[value.toUpperCase()]),void 0===res.value&&(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not valid for the given enumeration."},res.value=defaultValue)):res=toEnumEx(numValue,enumType,defaultValue);break;case"number":void 0!==enumType[value]?res.value=value:(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not valid for the given enumeration."},res.value=defaultValue);break;case"boolean":res=toEnumEx(toNumber(value),enumType,defaultValue);break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must be of type 'string', 'number' or 'boolean'."},res.value=defaultValue}return res}
/**
 * Converts a value to the best effort value related to schema addressed by its name or null if no schema related type is matching or schema is unknown.
 * @param value The value to convert.
 * @param typeName TcHmi type name
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @preserve (Part of the public API)
 */export function toType(value,typeName,options){return toTypeEx(value,typeName,options).value}
/**
 * Converts a value to the best effort value related to schema addressed by its name or null if no schema related type is matching or schema is unknown. Returns a result object for error detection.
 * @param value The value to convert.
 * @param typeName TcHmi type name
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @preserve (Part of the public API)
 */export function toTypeEx(value,typeName,options){if(!typeManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"System not ready.",domain:"TcHmi.ValueConverter"};return{error:errorDetail.code,details:errorDetail,value:null}}if(null==value){return{error:TcHmi.Errors.E_VALUE_INVALID,details:{code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},value:null}}const schemaRes=typeManager.getSchemaEx(typeName);if(schemaRes.error!==TcHmi.Errors.NONE){return{error:schemaRes.error,details:{code:schemaRes.error,message:TcHmi.Errors[schemaRes.error],domain:"TcHmi.ValueConverter",reason:"Resolving the schema: '"+typeName+"' failed.",errors:schemaRes.details?[schemaRes.details]:void 0},value:null}}const valueRes=toSchemaType(value,schemaRes.schema,options);return{error:TcHmi.Errors.NONE,value:valueRes}}
/**
 * Converts a value to the best effort value related to schema or null if no schema related type is matching.
 * @param value The value to convert.
 * @param schema json schema as an object
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @param options.resolveFunctionWriteValue A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead.
 * @preserve (Part of the public API)
 */export function toSchemaType(value,schema,options){return toSchemaTypeEx(value,schema,options).value}
/**
 * Converts a value to the best effort value related to schema or null if no schema related type is matching. Returns a result object for error detection.
 * @param value The value to convert.
 * @param schema json schema as an object
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @param options.resolveFunctionWriteValue A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead.
 * @preserve (Part of the public API)
 */export function toSchemaTypeEx(value,schema,options){if(null==value){return{error:TcHmi.Errors.E_VALUE_INVALID,details:{code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},value:null}}if(null==schema)return{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],domain:"TcHmi.ValueConverter",reason:"The parameter: 'schema' must be a valid object of type: 'TcHmi.JsonSchema'."},value:null};if(options&&options.resolveFunctionWriteValue&&schema.writeValue)return toSchemaTypeEx(value,schema.writeValue,options.convertDirection?{convertDirection:options.convertDirection}:void 0);const typeOfValue=typeof value,ruleSchemaMap=SystemSchema.resolveTypeConvertRuleSchemaMap(schema);if(ruleSchemaMap){if(options&&options.convertDirection===ConvertDirection.Backward){let res;for(const key of ruleSchemaMap.keys()){if(!key)continue;const ruleSchemas=ruleSchemaMap.get(key);if(ruleSchemas&&"string"===key)for(let ruleSchema of ruleSchemas){if(res=toString(value),ruleSchema&&(!ruleSchema.enum||ruleSchema.enum&&ruleSchema.enum.includes(res)))break;res=void 0}if(void 0!==res)break}if(void 0!==res)return{error:TcHmi.Errors.NONE,value:res}}else{const ruleSchemas=ruleSchemaMap.get(typeOfValue);if(ruleSchemas)for(let ruleSchema of ruleSchemas)switch(ruleSchema.convert){case"number":{let res=toNumberEx(value);if(res.error===TcHmi.Errors.NONE)return res;break}case"string":{let res=toStringEx(value);if(res.error===TcHmi.Errors.NONE)return res}break;case"boolean":{let res=toBooleanEx(value);if(res.error===TcHmi.Errors.NONE)return res}break;case"bigint":{let res=toBigIntEx(value);if(res.error===TcHmi.Errors.NONE)return res}break;case"bigint64":{let res=toBigInt64Ex(value);if(res.error===TcHmi.Errors.NONE)return res}break;case"unsignedbigint64":{let res=toUnsignedBigInt64Ex(value);if(res.error===TcHmi.Errors.NONE)return res}}}for(let entry of ruleSchemaMap.entries())for(let ruleSchema of entry[1])if(typeOfValue===ruleSchema.convert||"bigint"===typeOfValue&&("bigint64"===ruleSchema.convert||"unsignedbigint64"===ruleSchema.convert))return{error:TcHmi.Errors.NONE,value}}const schemaType=SystemSchema.resolveType(schema);if("string"!=typeof schemaType&&!Array.isArray(schemaType))return{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],domain:"TcHmi.ValueConverter",reason:"Failed to resolve type from given schema."},value:null};if(Array.isArray(schemaType)){if("string"===typeOfValue||"number"===typeOfValue||"boolean"===typeOfValue||"object"===typeOfValue){if(schemaType.includes(typeOfValue))return{error:TcHmi.Errors.NONE,value};for(const validType of schemaType){let res;switch(validType){case"object":case"array":res=toObjectEx(value);break;case"string":res=toStringEx(value);break;case"integer":case"number":res=toNumberEx(value);break;case"boolean":res=toBooleanEx(value);break;default:res=null}if(null!==res)return{error:TcHmi.Errors.NONE,value:res.value}}}}else switch(schemaType){case"object":case"array":return toObjectEx(value);case"string":return toStringEx(value);case"integer":case"number":return toNumberEx(value);case"boolean":return toBooleanEx(value)}return{error:TcHmi.Errors.E_VALUE_INVALID,details:{code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not compatible with any definition in the given schema."},value:null}}export var ConvertDirection;!function(ConvertDirection){ConvertDirection[ConvertDirection.Forward=0]="Forward",ConvertDirection[ConvertDirection.Backward=1]="Backward"}(ConvertDirection||(ConvertDirection={}));TcHmi.ValueConverter={toObject,toObjectEx,toString,toStringEx,toDimensionUnit,toDimensionUnitEx,toAngleUnit,toAngleUnitEx,toBorderStyleValue,toBorderStyleValueEx,toFontStyle,toFontStyleEx,toFontSizeUnit,toFontSizeUnitEx,toFontWeight,toFontWeightEx,toHorizontalAlignment,toHorizontalAlignmentEx,toScaleModeString,toScaleModeStringEx,toSizeMode,toSizeModeEx,toSizeModeWithContent,toSizeModeWithContentEx,toVerticalAlignment,toVerticalAlignmentEx,toVisibility,toVisibilityEx,toToggleState,toToggleStateEx,toFontFamily,toFontFamilyEx,toNumber,toNumberEx,toBoolean,toBooleanEx,toBigInt,toBigIntEx,toBigInt64,toBigInt64Ex,toUnsignedBigInt64,toUnsignedBigInt64Ex,toEnum,toEnumEx,toType,toTypeEx,toSchemaType,toSchemaTypeEx,ConvertDirection};