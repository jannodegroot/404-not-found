/**
 * Provides methods to write base64 encoded data.
 * @preserve (Part of the public API)
 */
export class Base64BinaryWriter{
/**
     * Creates a new Base64BinaryWriter.
     * @param endianness Whether to use little endian (default) or big endian when encoding numbers.
     * @param length The desired length of the data. If this parameter is omitted the data will be expanded dynamically.
     * @preserve (Part of the public API)
     */
constructor(endianness=TcHmi.Endianness.LittleEndian,length){this.__endianness=endianness,this.__length=void 0!==length?length:1/0}__data=[];__endianness;__length;__stringEncodings={"UTF-8":{encode:(codePoints,_endianness)=>{let bytes=[];for(let i=0,ii=codePoints.length;i<ii;i++){let codePoint=codePoints[i];if(codePoint<=127)bytes.push(codePoint);else{let cpBytes=[],firstByteTemplate=192,firstByteMask=31,followByteTemplate=128,followByteMask=63;for(;codePoint>0&&cpBytes.length<=6;)cpBytes.push(followByteTemplate|codePoint&followByteMask),codePoint<=4294967295?codePoint>>>=6:codePoint=Math.floor(codePoint/Math.pow(2,6)),codePoint<=firstByteMask?(cpBytes.push(firstByteTemplate|codePoint&firstByteMask),codePoint=0):(firstByteTemplate=followByteTemplate|firstByteTemplate>>>1,firstByteMask>>>=1);bytes=bytes.concat(cpBytes.reverse())}}return bytes}},"Latin-1":{encode:(codePoints,_endianness)=>{if(codePoints.some(codePoint=>codePoint>255))throw new RangeError("The string to be encoded contains characters outside of the Latin1 range.");return codePoints}},"Windows-1252":{encode:(codePoints,_endianness)=>{const differencesToLatin1={8364:128,8218:130,402:131,8222:132,8230:133,8224:134,8225:135,710:136,8240:137,352:138,8249:139,338:140,381:142,8216:145,8217:146,8220:147,8221:148,8226:149,8211:150,8212:151,732:152,8482:153,353:154,8250:155,339:156,382:158,376:159};if((codePoints=codePoints.map(codePoint=>codePoint in differencesToLatin1?differencesToLatin1[codePoint]:codePoint)).some(codePoint=>codePoint>255))throw new RangeError("The string to be encoded contains characters outside of the Windows-1252 range.");return codePoints}}};__addChunk(chunk){if(this.__data.length+chunk.length>this.__length)throw new RangeError(`Trying to write ${chunk.length} bytes exceeds the length of the data.`);this.__endianness===TcHmi.Endianness.BigEndian&&(chunk=chunk.reverse()),this.__data=this.__data.concat(chunk)}__checkIntegerBounds(value,lengthInBytes,signed){if(value%1!=0)return!1;let range=Math.pow(2,8*lengthInBytes)-1,lowerBound=signed?-Math.ceil(range/2):0;return value>=lowerBound&&value<=range+lowerBound}__checkBigIntegerBounds(value,lengthInBytes,signed){if(signed){if(BigInt.asIntN(8*lengthInBytes,value)===value)return!0}else{if(BigInt.asUintN(8*lengthInBytes,value)===value)return!0}return!1}__writeInteger(value,lengthInBytes){let chunk=[];for(let i=0;i<lengthInBytes;i++)chunk.push(255&value),lengthInBytes-i<=4?value>>>=8:value=Math.floor(value/256);this.__addChunk(chunk)}__writeBigInteger(value,lengthInBytes){let chunk=[];for(let i=0;i<lengthInBytes;i++)chunk.push(Number(0xffn&value)),value=BigInt.asUintN(8*lengthInBytes,value)>>8n;this.__addChunk(chunk)}__writeFloatingPointNumber(value,lengthInBytes){let exponentBits,significandBits;switch(lengthInBytes){case 4:exponentBits=8,significandBits=23;break;case 8:exponentBits=11,significandBits=52}let exponent,significand,bias=Math.pow(2,exponentBits-1)-1,sign=value<0?1:0;if(isFinite(value))if(0===value)sign=1/value==-1/0?1:0,exponent=0,significand=0;else{value=Math.abs(value);let preComma=Math.floor(value),postComma=value-preComma,preCommaLength=0,num=preComma;for(;num>0;)preCommaLength++,num<=4294967295?num>>>=1:num=Math.floor(num/2);significand=preComma>0?preComma-Math.pow(2,preCommaLength-1):0;let significandLength=preCommaLength>0?preCommaLength-1:0;significandLength>significandBits&&(significand<=4294967295?significand>>>=significandLength-significandBits:significand=Math.floor(significand/Math.pow(2,significandLength-significandBits)),significandLength=significandBits);let postCommaIndexOfOne=-1;num=postComma;let i=0;for(;significandLength<significandBits;){num*=2;let bit=num>=1?1:0;i>=bias-1&&-1===postCommaIndexOfOne&&(postCommaIndexOfOne=i),bit&&(num--,-1===postCommaIndexOfOne&&(postCommaIndexOfOne=i,0===preCommaLength))?i++:(significand=significandLength<32?(significand<<1|bit)>>>0:2*significand+bit,(preCommaLength>0||postCommaIndexOfOne>-1||0===postComma)&&significandLength++,i++)}exponent=preCommaLength>0?preCommaLength-1:-postCommaIndexOfOne-1,exponent+=bias;let maxExponentValue=Math.pow(2,exponentBits)-1;exponent<1?exponent=0:exponent>maxExponentValue-1&&(exponent=maxExponentValue,significand=0)}else{exponent=0;for(let i=0;i<exponentBits;i++)exponent=exponent<<1|1;significand=isNaN(value)?1:0}let parts=[{value:significand,length:significandBits},{value:exponent,length:exponentBits},{value:sign,length:1}],chunk=[],partIndex=0;for(let i=0;i<lengthInBytes||parts[partIndex].length<0;i++){let carryBack=0;parts[partIndex].length<0?(carryBack=8+parts[partIndex].length,i--,partIndex++):0===parts[partIndex].length&&partIndex++,void 0===chunk[i]&&(chunk[i]=0),chunk[i]|=parts[partIndex].value<<carryBack&255,parts[partIndex].length<=32?parts[partIndex].value=parts[partIndex].value>>>8-carryBack:parts[partIndex].value=Math.floor(parts[partIndex].value/Math.pow(2,8-carryBack)),parts[partIndex].length-=8-carryBack}this.__addChunk(chunk)}
/**
     * Writes a boolean value.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The boolean value to write.
     * @preserve (Part of the public API)
     */writeBoolean(value){return this.writeByte(value?1:0),this}
/**
     * Writes a single byte of data.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The byte to write.
     * @preserve (Part of the public API)
     */writeByte(value){if(!this.__checkIntegerBounds(value,1,!1))throw new RangeError(`The value ${value} does not fit into a byte.`);return this.__writeInteger(value,1),this}
/**
     * Writes a signed byte.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The byte to write.
     * @preserve (Part of the public API)
     */writeSByte(value){if(!this.__checkIntegerBounds(value,1,!0))throw new RangeError(`The value ${value} does not fit into a signed byte.`);return this.__writeInteger(value,1),this}
/**
     * Writes a signed 16-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */writeInt16(value){if(!this.__checkIntegerBounds(value,2,!0))throw new RangeError(`The value ${value} does not fit into an int16.`);return this.__writeInteger(value,2),this}
/**
     * Writes an unsigned 16-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */writeUInt16(value){if(!this.__checkIntegerBounds(value,2,!1))throw new RangeError(`The value ${value} does not fit into an uint16.`);return this.__writeInteger(value,2),this}
/**
     * Writes a signed 32-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */writeInt32(value){if(!this.__checkIntegerBounds(value,4,!0))throw new RangeError(`The value ${value} does not fit into a int32.`);return this.__writeInteger(value,4),this}
/**
     * Writes an unsigned 32-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */writeUInt32(value){if(!this.__checkIntegerBounds(value,4,!1))throw new RangeError(`The value ${value} does not fit into an uint32.`);return this.__writeInteger(value,4),this}
/**
     * Writes a signed 64-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */writeInt64(value){if(!this.__checkBigIntegerBounds(value,8,!0))throw new RangeError(`The value ${value} does not fit into a int64.`);return this.__writeBigInteger(value,8),this}
/**
     * Writes an unsigned 64-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */writeUInt64(value){if(!this.__checkBigIntegerBounds(value,8,!1))throw new RangeError(`The value ${value} does not fit into a uint64.`);return this.__writeBigInteger(value,8),this}
/**
     * Writes a single precision floating point number.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */writeFloat(value){return this.__writeFloatingPointNumber(value,4),this}
/**
     * Writes a double precision floating point number.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */writeDouble(value){return this.__writeFloatingPointNumber(value,8),this}
/**
     * Writes a string.
     * This function throws an exception if the provided value does not fit into the given length or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The string to write.
     * @param optionsOrLength The options to use or the length of the string to write.
     * @preserve (Part of the public API)
     */writeString(value,optionsOrLength){let options={encoding:"UTF-8",addNullTerminator:!1};"number"==typeof optionsOrLength?options.length=optionsOrLength:optionsOrLength&&(optionsOrLength.encoding&&optionsOrLength.encoding in this.__stringEncodings&&(options.encoding=optionsOrLength.encoding),void 0!==optionsOrLength.length&&(options.length=optionsOrLength.length),optionsOrLength.addNullTerminator&&(options.addNullTerminator=!0));const codePoints=this.__getCodePointsFromString(value);options.addNullTerminator&&0!==codePoints[codePoints.length-1]&&codePoints.push(0);let bytes=this.__stringEncodings[options.encoding].encode(codePoints,this.__endianness);if(void 0!==options.length){for(;bytes.length<options.length;)bytes.push(0);if(bytes.length>options.length)throw new RangeError("The specified string does not fit into the specified length.")}if(this.__data.length+bytes.length>this.__length)throw new RangeError(`Trying to write ${bytes.length} bytes exceeds the length of the data.`);return this.__data=this.__data.concat(bytes),this}__getCodePointsFromString(value){let codePoints=[];for(let i=0,ii=value.length;i<ii;i++){let first=value.charCodeAt(i);if(first>=55296&&first<=56319&&i<ii-1){let second=value.charCodeAt(i+1);second>=56320&&second<=57343?(codePoints.push(1024*(first-55296)+second-56320+65536),i++):codePoints.push(first)}else codePoints.push(first)}return codePoints}
/**
     * Returns the base64 encoded string. If not enough data was written to fill the length the data should have, the rest is filled up with zeros.
     * @preserve (Part of the public API)
     */getEncodedString(){const length=this.__data.length;if(isFinite(this.__length)&&this.__data.length<this.__length){const start=this.__data.length;this.__data.length=this.__length,this.__data.fill(0,start)}const rawChunks=[];for(let i=0;i<this.__data.length;i+=1e4)rawChunks.push(String.fromCharCode(...this.__data.slice(i,i+1e4)));return this.__data.length=length,tchmi_base64encode(rawChunks.join(""))}
/**
     * Returns the length of the data that has been written.
     * @preserve (Part of the public API)
     */getLength(){return this.__data.length}}TcHmi.Base64BinaryWriter=Base64BinaryWriter;