import{accessManager}from"../System/AccessManager.js";export function __rebuildLocalizationCache(){__numberFormatMilliSecondsCache.clear(),__dateFormatCache.clear()}export function getDateTimeFormatter(locale,timeZone,hour12,type="full"){let level1=__dateFormatCache.get(locale);level1||(level1=new Map,__dateFormatCache.set(locale,level1));let level2=level1.get(timeZone);level2||(level2=new Map,level1.set(timeZone,level2));let level3=level2.get(hour12);level3||(level3=new Map,level2.set(hour12,level3));let formatter=level3.get(type);if(formatter)return formatter;const config=accessManager?.getCurrentUserConfig();let timeFormatLocale=locale;timeFormatLocale||(timeFormatLocale=config?.timeFormatLocale);let _timeZone=timeZone;_timeZone||(_timeZone=config?.timeZone);try{new Intl.DateTimeFormat(timeFormatLocale)}catch(e){timeFormatLocale=void 0}try{new Intl.DateTimeFormat(timeFormatLocale,{timeZone:_timeZone})}catch(e){e instanceof RangeError&&(_timeZone=void 0)}let IntlOptions={timeZone:_timeZone,hour12};switch(type){case"date":IntlOptions.year="numeric",IntlOptions.month="numeric",IntlOptions.day="numeric";break;case"time":IntlOptions.fractionalSecondDigits=3;case"time-no-millisec":IntlOptions.hour="numeric",IntlOptions.minute="numeric",IntlOptions.second="numeric";break;case"full":IntlOptions.fractionalSecondDigits=3;case"full-no-millisec":IntlOptions.year="numeric",IntlOptions.month="numeric",IntlOptions.day="numeric",IntlOptions.hour="numeric",IntlOptions.minute="numeric",IntlOptions.second="numeric"}return IntlOptions.hour&&"function"!=typeof Intl.DateTimeFormat.prototype.formatToParts&&(IntlOptions.hour12=!1),formatter=new Intl.DateTimeFormat(timeFormatLocale,IntlOptions),level3.set(type,formatter),formatter}let __numberFormatMilliSecondsCache=new Map,__dateFormatCache=new Map;
/**
 * Skip non numeric chars and parseInt the rest.
 * MS Browsers add Left-To-Right-Mark to output
 * https://github.com/tc39/ecma402/issues/28
 * @param input string input
 * @preserve (Part of the public API)
 */
export function parseInt(input){let value="";for(let i=0;i<input.length;i++)input.charCodeAt(i)>=32&&input.charCodeAt(i)<=126&&(value+=input[i]);return Number.parseInt(value,10)}
/**
 * Parses a Date object
 * formats it to a time zone and split its components into an object
 * On error all entries will be NaN
 * @param date Date object to parse
 * @param options Options
 * @preserve (Part of the public API)
 */export function parseDate(date,options){const dateObject={year:NaN,month:NaN,day:NaN,hour:NaN,minute:NaN,second:NaN,millisecond:NaN};if(isNaN(date.getTime()))return dateObject;let timeZone;if(options&&"string"==typeof options.timeZone&&(timeZone=options.timeZone),"function"==typeof Intl.DateTimeFormat.prototype.formatToParts){let parts=getDateTimeFormatter("de-DE",timeZone,!1,"full").formatToParts(date);dateObject.year=parseInt(parts.find(value=>"year"===value.type).value),dateObject.month=parseInt(parts.find(value=>"month"===value.type).value),dateObject.day=parseInt(parts.find(value=>"day"===value.type).value),dateObject.hour=parseInt(parts.find(value=>"hour"===value.type).value),dateObject.minute=parseInt(parts.find(value=>"minute"===value.type).value),dateObject.second=parseInt(parts.find(value=>"second"===value.type).value),dateObject.millisecond=date.getUTCMilliseconds()}else{let formatter=getDateTimeFormatter("de-DE",timeZone,!1,"date"),dateArray=formatter.format(date).split(".");dateObject.year=parseInt(dateArray[2]),dateObject.month=parseInt(dateArray[1]),dateObject.day=parseInt(dateArray[0]),formatter=getDateTimeFormatter("de-DE",timeZone,!1,"time");let timeArray=formatter.format(date).split(":");dateObject.hour=parseInt(timeArray[0]),dateObject.minute=parseInt(timeArray[1]),dateObject.second=parseInt(timeArray[2]),dateObject.millisecond=date.getUTCMilliseconds()}return dateObject}
/**
 * Formats a Date object down to milliseconds in the correct locale and time zone (config from server user or browser default)
 * On error this will be null
 * @param date Date Object to parse
 * @param options Options
 * @preserve (Part of the public API)
 */export function formatDate(date,options){if(isNaN(date.getTime()))return null;const locale=options?.locale??void 0,timeZone=options?.timeZone,format=options?.type;return getDateTimeFormatter(locale,timeZone,void 0,format).format(date)}TcHmi.Localization={getDateTimeFormatter,formatDate,parseDate,parseInt};