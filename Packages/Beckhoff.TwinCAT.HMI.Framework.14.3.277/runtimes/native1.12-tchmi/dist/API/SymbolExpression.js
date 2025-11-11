import{config}from"../System/System.js";import{Symbol as SystemSymbol}from"../System/Symbol.js";import{isParameterTypeInvalid}from"../System/SystemFunctions.js";
/**
 * Symbol expression parser.
 * @preserve (Part of the public API)
 */export class SymbolExpression{
/**
     * Split string by pipe, but ignore pipes in brackets.
     * @deprecated Please use SymbolExpression.parse instead. RegExp method will not work properly with nested symbol expressions.
     * @preserve (Part of the public API)
     */
static RegExpExpressionGroupByPipe=/([^|()]+|[(](['][^']*[']|["][^"]*["]|[^)])*[)])+/g;
/**
     * Resolves the first expression occurrence and the content including line breaks.
     * @deprecated Please use SymbolExpression.parse instead. RegExp method will not work properly with nested symbol expressions.
     * @preserve (Part of the public API)
     */
static RegExpExpression=new RegExp("^\\%[$]*(s|i|l|pp|tp|f|ctrl|ctx|tr|t)\\%([^]*)\\%/\\1\\%$");
/**
     * Resolves the first escapted expression occurrence and the content including line breaks.
     * @deprecated Please use SymbolExpression.parse instead. RegExp method will not work properly with nested symbol expressions.
     * @preserve (Part of the public API)
     */
static RegExpExpressionEscaped=new RegExp("^\\%[$]+(s|i|l|pp|tp|f|ctrl|ctx|tr|t)\\%([^]*)\\%/\\1\\%$");static parse(expression){let open,close,optionsStart,optionsEnd,data={type:TcHmi.SymbolType.Invalid,expression,tag:void 0,content:void 0,isEscaped:!1,escapeLevel:0,fullName:void 0,name:void 0,path:void 0,options:void 0,openStart:void 0,openEnd:void 0,closeStart:void 0,closeEnd:void 0,children:void 0,origin:void 0,originOpenStart:void 0,originOpenEnd:void 0,originCloseStart:void 0,originCloseEnd:void 0},tags=["s","i","l","pp","tp","f","ctrl","ctx","tr","t"];if(expression.startsWith("%")&&expression.endsWith("%")){open=expression.substring(0,expression.substring(1).indexOf("%")+2),close=expression.substring(expression.substring(0,expression.length-1).lastIndexOf("%"));let foundTag,escapeLevel=0;for(const ch of open)"%"!==ch&&("$"!==ch?(foundTag??="",foundTag+=ch):escapeLevel++);let isTagValid=!1;for(let tag of tags)if(tag===foundTag){isTagValid=!0;break}isTagValid&&(data.tag=foundTag,data.escapeLevel=escapeLevel,escapeLevel>0&&(data.isEscaped=!0),data.content=expression.substr(open.length,expression.length-open.length-close.length),data.openStart=0,data.openEnd=open.length-1,data.closeStart=data.expression.length-close.length,data.closeEnd=data.expression.length-1)}if(!data.tag)return{error:TcHmi.Errors.E_INVALID,details:{code:TcHmi.Errors.E_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_INVALID],domain:"TcHmi.SymbolExpression",reason:"The expression '"+expression+"' lacks a valid tag."}};switch(data.tag){case"s":data.type=TcHmi.SymbolType.Server;break;case"i":data.type=TcHmi.SymbolType.Internal;break;case"l":data.type=TcHmi.SymbolType.LocalizedText;break;case"pp":data.type=TcHmi.SymbolType.PartialParam;break;case"tp":data.type=TcHmi.SymbolType.TemplateParam;break;case"f":data.type=TcHmi.SymbolType.Function;break;case"ctrl":data.type=TcHmi.SymbolType.Control;break;case"ctx":data.type=TcHmi.SymbolType.Context;break;case"tr":data.type=TcHmi.SymbolType.ThemedResource;break;case"t":data.type=TcHmi.SymbolType.Timer;break;default:data.type=TcHmi.SymbolType.Invalid}if(data.type===TcHmi.SymbolType.Invalid)return{error:TcHmi.Errors.E_INVALID,details:{code:TcHmi.Errors.E_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_INVALID],domain:"TcHmi.SymbolExpression",reason:"The expression '"+expression+"' lacks a valid tag."}};if(data.type!==TcHmi.SymbolType.Function){let openStart,openEnd,closeStart,closeEnd,nestedLevel=0,pos=data.content?data.content.indexOf("%"):-1;for(;pos>-1&&data.content;){let foundTag,to=data.content.substring(pos+1).indexOf("%")+pos+2,token=data.content.substring(pos,to),isOpen=!1;for(let i=0;i<token.length;i++){let ch=token[i];"%"!==ch&&(1===i&&"/"!==ch&&(isOpen=!0),"/"!==ch&&"$"!==ch&&(foundTag??="",foundTag+=ch))}let isTagValid=!1;for(let tag of tags)if(tag===foundTag){isTagValid=!0;break}if(isTagValid&&isOpen)0===nestedLevel&&void 0===openStart?(openStart=pos,openEnd=to):nestedLevel++;else if(isTagValid&&!isOpen)if(0===nestedLevel&&void 0!==openStart){closeStart=pos,closeEnd=to;let childExpression=data.content.substring(openStart,closeEnd),childParseResult=this.parse(childExpression);if(childParseResult.error===TcHmi.Errors.NONE&&childParseResult.data){let openLength=0;void 0!==openStart&&void 0!==openEnd&&(openLength=openEnd-openStart),childParseResult.data.origin=data,void 0!==openStart&&(childParseResult.data.originOpenStart=openStart+openLength),void 0!==openEnd&&(childParseResult.data.originOpenEnd=openEnd+openLength),void 0!==closeStart&&(childParseResult.data.originCloseStart=closeStart+openLength),void 0!==closeEnd&&(childParseResult.data.originCloseEnd=closeEnd+openLength);let updateGrandChild=child=>{if(child.origin=data,void 0!==child.originOpenStart&&childParseResult.data&&void 0!==childParseResult.data.originOpenStart&&(child.originOpenStart=child.originOpenStart+childParseResult.data.originOpenStart),void 0!==child.originOpenEnd&&childParseResult.data&&void 0!==childParseResult.data.originOpenStart&&(child.originOpenEnd=child.originOpenEnd+childParseResult.data.originOpenStart),void 0!==child.originCloseStart&&childParseResult.data&&void 0!==childParseResult.data.originOpenStart&&(child.originCloseStart=child.originCloseStart+childParseResult.data.originOpenStart),void 0!==child.originCloseEnd&&childParseResult.data&&void 0!==childParseResult.data.originOpenStart&&(child.originCloseEnd=child.originCloseEnd+childParseResult.data.originOpenStart),child.children)for(let gChild of child.children)updateGrandChild(gChild)};if(childParseResult.data.children)for(let gChild of childParseResult.data.children)updateGrandChild(gChild);data.children??=[],data.children.push(childParseResult.data)}openStart=void 0,openEnd=void 0,closeStart=void 0,closeEnd=void 0}else nestedLevel--;pos>-1&&(pos=data.content.substring(to).indexOf("%"),pos>-1&&(pos+=to))}}if(data.children&&data.children.length>0)return{error:TcHmi.Errors.NONE,data};if(data.type!==TcHmi.SymbolType.Function){let pos=-1;if(data.children){let lastChild=data.children[data.children.length-1];void 0!==lastChild.originCloseEnd&&(pos=data.expression.substring(lastChild.originCloseEnd).indexOf("|"),pos>-1&&(pos+=lastChild.originCloseEnd))}else pos=data.expression.indexOf("|");if(pos>-1){optionsStart=pos,optionsEnd=data.expression.length-data.tag.length-3;let options=data.expression.substring(optionsStart,optionsEnd);options&&(optionsStart=pos,data.options=options.substring(1).split("|"))}}if(void 0!==open){let fullNameStart=open.length,fullNameEnd=data.expression.length-(data.tag.length+3);data.type!==TcHmi.SymbolType.Function&&void 0!==optionsStart&&(fullNameEnd=optionsStart),data.fullName=data.expression.substring(fullNameStart,fullNameEnd),0===data.fullName.length&&(data.fullName=void 0)}if(data.fullName)switch(data.type){case TcHmi.SymbolType.Timer:case TcHmi.SymbolType.Control:case TcHmi.SymbolType.Internal:case TcHmi.SymbolType.LocalizedText:case TcHmi.SymbolType.PartialParam:case TcHmi.SymbolType.TemplateParam:case TcHmi.SymbolType.ThemedResource:case TcHmi.SymbolType.Server:{let firstBracketPos=data.fullName.indexOf("["),firstColonPos=data.fullName.indexOf("::"),splitPos=-1;splitPos=-1===firstBracketPos?firstColonPos:-1===firstColonPos||firstBracketPos<firstColonPos?firstBracketPos:firstColonPos,-1!==splitPos?(data.name=data.fullName.substring(0,splitPos),0===data.name.length&&(data.name=void 0),data.path=data.fullName.substring(splitPos),0===data.path.length&&(data.path=void 0)):(data.name=data.fullName,0===data.name.length&&(data.name=void 0));break}case TcHmi.SymbolType.Context:data.path=data.fullName,0===data.path.length&&(data.path=void 0);break;case TcHmi.SymbolType.Function:data.name=data.fullName,0===data.name.length&&(data.name=void 0)}return{error:TcHmi.Errors.NONE,data}}constructor(expression){if(isParameterTypeInvalid(expression,"expression",{type:"string",required:"valueNeeded"}))throw new Error("The expression of a new TcHmi.SymbolExpression needs to be a string.");this.__expression=expression;let parseResult=SymbolExpression.parse(this.__expression);if(parseResult.error===TcHmi.Errors.NONE&&parseResult.data){if(this.__parseData=parseResult.data,this.__tag=parseResult.data.tag,this.__type=parseResult.data.type,this.__content=parseResult.data.content,parseResult.data.children){let temp=new Map;for(let child of parseResult.data.children)temp.has(child.expression)||temp.set(child.expression,new SymbolExpression(child.expression));this.__children=Array.from(temp.values())}if(0===this.__children.length&&(this.__name=parseResult.data.name,this.__path=parseResult.data.path??null,this.__path?this.__pathTokens=TcHmi.ObjectPath.toPathTokens(this.__path):this.__pathTokens=null,this.__nameEx=this.__name,this.__pathEx=this.__path,this.__pathTokensEx=this.__pathTokens,this.__fullName=parseResult.data.fullName,this.__type===TcHmi.SymbolType.Server&&(this.__name=this.__fullName,this.__path=null,this.__pathTokens=null),this.__type!==TcHmi.SymbolType.Function)){let options=parseResult.data.options;if(options)for(let option of options){if(this.__type===TcHmi.SymbolType.Server){const matchInterval=/^(?:Interval\s*=)\s*(\d+)\s*$/i.exec(option);null!==matchInterval&&0!==matchInterval.length&&(this.__options.Interval=parseInt(matchInterval[1],10));const matchTimeout=/^(?:Timeout\s*=)\s*(\d+)\s*$/i.exec(option);null!==matchTimeout&&0!==matchTimeout.length&&(this.__options.Timeout=parseInt(matchTimeout[1],10));const matchParallel=/^(?:Parallel\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchParallel&&0!==matchParallel.length&&(this.__options.Parallel="true"===matchParallel[1].toLowerCase());const matchSubscriptionMode=/^(?:SubscriptionMode\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchSubscriptionMode&&0!==matchSubscriptionMode.length&&(this.__options.SubscriptionMode=matchSubscriptionMode[1]);const matchSubscriptionGroup=/^(?:SubscriptionGroup\s*=)\s*(.*)\s*$/i.exec(option);null!==matchSubscriptionGroup&&0!==matchSubscriptionGroup.length&&(this.__options.SubscriptionGroup=matchSubscriptionGroup[1]);const matchReadWriteGroup=/^(?:ReadWriteGroup\s*=)\s*(.*)\s*$/i.exec(option);null!==matchReadWriteGroup&&0!==matchReadWriteGroup.length&&(this.__options.ReadWriteGroup=matchReadWriteGroup[1]);const matchUniqueHash=/^(?:UniqueHash\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchUniqueHash&&0!==matchUniqueHash.length&&(this.__options.UniqueHash="true"===matchUniqueHash[1].toLowerCase());const matchVersion=/^(?:Version\s*=)\s*(.*)\s*$/i.exec(option);if(null!==matchVersion&&0!==matchVersion.length){let num=Number(matchVersion[1]);Number.isNaN(num)||(this.__options.Version=num)}}else if(this.__type===TcHmi.SymbolType.Control){const matchWaitForControl=/^(?:WaitForControl\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchWaitForControl&&0!==matchWaitForControl.length&&(this.__options.WaitForControl="true"===matchWaitForControl[1].toLowerCase());const matchTimeout=/^(?:Timeout\s*=)\s*(\d+)\s*$/i.exec(option);null!==matchTimeout&&0!==matchTimeout.length&&(this.__options.Timeout=parseInt(matchTimeout[1],10))}const matchBindingMode=/^(?:BindingMode\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchBindingMode&&0!==matchBindingMode.length&&(this.__options.BindingMode=matchBindingMode[1]);const matchBindingEvent=/^(?:BindingEvent\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchBindingEvent&&0!==matchBindingEvent.length&&(this.__options.BindingEvent||(this.__options.BindingEvent=matchBindingEvent[1]),this.__options.BindingEvents||(this.__options.BindingEvents=[]),this.__options.BindingEvents.push(matchBindingEvent[1])),this.__options.BindingErrorHandling=config.binding.symbolError;const matchBindingErrorHandling=/^(?:BindingErrorHandling\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);if(null!==matchBindingErrorHandling&&0!==matchBindingErrorHandling.length){let res=matchBindingErrorHandling[1];"Ignore"!==res&&"Reset"!==res||(this.__options.BindingErrorHandling=res)}this.__options.BindingWriteErrorHandling=config.binding.symbolWriteError;const matchBindingWriteErrorHandling=/^(?:BindingWriteErrorHandling\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);if(null!==matchBindingWriteErrorHandling&&0!==matchBindingWriteErrorHandling.length){let res=matchBindingWriteErrorHandling[1];"Ignore"!==res&&"ReadBack"!==res||(this.__options.BindingWriteErrorHandling=res)}const matchStart=/^(?:Start\s*=)\s*([-?\d]+$)\s*$/i.exec(option);null!==matchStart&&0!==matchStart.length&&(this.__options.Start=parseInt(matchStart[1],10));const matchEnd=/^(?:End\s*=)\s*([-?\d]+$)\s*$/i.exec(option);null!==matchEnd&&0!==matchEnd.length&&(this.__options.End=parseInt(matchEnd[1],10));const matchEventRegistrationMode=/^(?:EventRegistrationMode\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchEventRegistrationMode&&0!==matchEventRegistrationMode.length&&(this.__options.EventRegistrationMode=matchEventRegistrationMode[1]);const matchReferenceResolution=/^(?:ReferenceResolution\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchReferenceResolution&&0!==matchReferenceResolution.length&&(this.__options.ReferenceResolution=matchReferenceResolution[1])}}}}__expression;
/**
     * Returns the expression string.
     * @preserve (Part of the public API)
     */
toString(){return this.__expression}__content;
/**
     * Returns the content of the expression. The content is everything except the expression tags.
     * @preserve (Part of the public API)
     */
getContent(){return this.__content}__tag;
/**
     * Returns the tag of the expression. For example "s" in case of an expression of type Server.
     * @preserve (Part of the public API)
     */
getTag(){return this.__tag}__name;
/**
     * Returns the name of the expression.
     * In case of an expression of type Server getName will also contain the path. Use getNameEx to retrieve the name in all expressions which support having a name.
     * @preserve (Part of the public API)
     */
getName(){return this.__name}__nameEx;
/**
     * Returns the name of the expression.
     * @preserve (Part of the public API)
     */
getNameEx(){return this.__nameEx}__fullName;
/**
     * Returns the full name containing the base name and the path of the expression but no options.
     * @preserve (Part of the public API)
     */
getFullName(){return this.__fullName}__path=null;
/**
     * Returns the path of the expression.
     * In case of an expression of type Server getPath will return null. Use getPathEx if you want to retrieve the path in all expressions which support having a path.
     * @preserve (Part of the public API)
     */
getPath(){return this.__path}__pathEx=null;
/**
     * Returns the path of the expression.
     * @preserve (Part of the public API)
     */
getPathEx(){return this.__pathEx}__pathTokens=null;
/**
     * Returns the path tokens.
     * In case of an expression of type Server getPathTokens will return null. Use getPathTokensEx if you want to retrieve the path tokens in all expressions which support having a path.
     * @preserve (Part of the public API)
     */
getPathTokens(){return this.__pathTokens}__pathTokensEx=null;
/**
     * Returns the path tokens.
     * @preserve (Part of the public API)
     */
getPathTokensEx(){return this.__pathTokensEx}__type=TcHmi.SymbolType.Invalid;
/**
     * Returns the type of the expression.
     * @preserve (Part of the public API)
     */
getType(){return this.__type}__options={};
/**
     * Returns a Dictionary of option flags.
     * @preserve (Part of the public API)
     */
getOptions(){return this.__options}__children=[];getChildren(){return this.__children}__parseData=null;getParseData(){return this.__parseData}hasChildren(){return!!(this.__parseData&&this.__parseData.children&&this.__parseData.children.length>0)}
/**
     * Resolves the expression.
     * @param callback The function that will be called when the result is available.
     * @preserve (Part of the public API)
     */resolve(callback){let symbol=new SystemSymbol(this.__expression),destroy=symbol.resolveExpression(callback);return()=>{destroy?.(),symbol.destroy()}}__symbol;__symbolRefCount=0;
/**
     * Watches the expression.
     * @param callback The function that will be called when the result is available.
     * @preserve (Part of the public API)
     */
watch(callback){this.__symbol||(this.__symbol=new SystemSymbol(this.__expression)),this.__symbolRefCount++;let destroy=this.__symbol.watchExpression(callback);return()=>{destroy?.(),this.__symbolRefCount--,0===this.__symbolRefCount&&(this.__symbol?.destroy(),this.__symbol=void 0)}}}TcHmi.SymbolExpression=SymbolExpression;