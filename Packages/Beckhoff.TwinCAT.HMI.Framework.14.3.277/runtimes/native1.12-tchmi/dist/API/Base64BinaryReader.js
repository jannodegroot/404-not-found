/**
 * Provides methods to read base64 encoded data.
 * @preserve (Part of the public API)
 */
export class Base64BinaryReader{
/**
     * Creates a new Base64BinaryReader.
     * This constructor throws an exception if the data is not valid base64.
     * @param data The base64 encoded string to read from.
     * @param endianness Whether the encoded data uses little endian (default) or big endian to store numbers.
     * @preserve (Part of the public API)
     */
constructor(data,endianness=TcHmi.Endianness.LittleEndian){let decoded=tchmi_base64decode(data);if(null===decoded)throw new Error(`Could not decode string "${data}" as base64.`);this.__data=[];for(let i=0,ii=decoded.length;i<ii;i++)this.__data.push(decoded.charCodeAt(i));this.__endianness=endianness}__data;__endianness;__offset=0;__stringEncodings={"UTF-8":{decode:(bytes,_endianness)=>{let codePoints=[];for(let i=0,byteLength=bytes.length;i<byteLength;i++){let byte=bytes[i];if(0===byte)return{codePoints,byteCount:i+1};if(byte<=127)codePoints.push(byte);else if(byte>=194&&byte<=244){let followBytes=1,firstByteMask=31,mask=32;for(;mask>0;)(byte&mask)>0?(followBytes++,firstByteMask>>>=1,mask>>>=1):mask=0;let codePoint=byte&firstByteMask,lastByteIndex=i+followBytes;if(lastByteIndex>=byteLength)codePoint=65533;else for(;i<lastByteIndex;){i++;let byte=bytes[i];if(byte<128||byte>191){codePoint=65533,i--;break}codePoint=codePoint<=67108863?(codePoint<<6|63&byte)>>>0:codePoint*Math.pow(2,6)+(63&byte)}codePoints.push(codePoint)}else codePoints.push(65533)}return{codePoints,byteCount:bytes.length}}},"Latin-1":{decode:(bytes,_endianness)=>{const terminatorIndex=bytes.indexOf(0);return-1!==terminatorIndex?{codePoints:bytes.slice(0,terminatorIndex),byteCount:terminatorIndex+1}:{codePoints:bytes,byteCount:bytes.length}}},"Windows-1252":{decode:(bytes,_endianness)=>{const differencesToLatin1={128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376},terminatorIndex=bytes.indexOf(0);return-1!==terminatorIndex?{codePoints:bytes.slice(0,terminatorIndex).map(byte=>byte in differencesToLatin1?differencesToLatin1[byte]:byte),byteCount:terminatorIndex+1}:{codePoints:bytes.map(byte=>byte in differencesToLatin1?differencesToLatin1[byte]:byte),byteCount:bytes.length}}}};__getChunk(length){if(this.__offset+length>this.__data.length)throw new RangeError(`Trying to read ${length} bytes from offset ${this.__offset} exceeds the length of the data.`);let chunk=this.__data.slice(this.__offset,this.__offset+length);return this.__offset+=length,this.__endianness===TcHmi.Endianness.BigEndian&&(chunk=chunk.reverse()),chunk}__readInteger(lengthInBytes,signed){let chunk=this.__getChunk(lengthInBytes),result=0;for(let i=0,ii=chunk.length;i<ii;i++){let byte=255&chunk[i];i<4?result=(result|byte<<8*i)>>>0:result+=byte*Math.pow(256,i)}if(signed){let mask=Math.pow(2,8*lengthInBytes-1);lengthInBytes<=4?result=(result&~mask)-((result&mask)>>>0):128&~chunk[chunk.length-1]||(result-=2*mask)}return result}__readBigInteger(lengthInBytes,signed){let chunk=this.__getChunk(lengthInBytes),result=0n;for(let i=0,ii=chunk.length;i<ii;i++){let byte=0xffn&BigInt(chunk[i]);result=BigInt.asUintN(8*lengthInBytes,result|byte<<8n*BigInt(i))}if(signed){const mask=2n**(8n*BigInt(lengthInBytes)-1n);lengthInBytes<=4?result=-BigInt.asUintN(8,result&mask)+(result&~mask):128&~chunk[chunk.length-1]||(result-=2n*mask),result=BigInt.asIntN(8*lengthInBytes,result)}else result=BigInt.asUintN(8*lengthInBytes,result);return result}__readFloatingPointNumber(lengthInBytes){let chunk=this.__getChunk(lengthInBytes),exponentBits=8,significandBits=23;switch(lengthInBytes){case 4:exponentBits=8,significandBits=23;break;case 8:exponentBits=11,significandBits=52}let bias=Math.pow(2,exponentBits-1)-1,parts=[{value:0,bitsToRead:significandBits},{value:0,bitsToRead:exponentBits},{value:0,bitsToRead:1}],partIndex=0,shift=0;for(let i=0;i<lengthInBytes||parts[partIndex].bitsToRead<0;i++){let carryOver=0;parts[partIndex].bitsToRead<0?(carryOver=8+parts[partIndex].bitsToRead,i--,partIndex++,shift=0):0===parts[partIndex].bitsToRead&&(partIndex++,shift=0);let byte=(255&chunk[i])>>>carryOver;parts[partIndex].bitsToRead<8&&(byte&=Math.pow(2,parts[partIndex].bitsToRead)-1),shift<=24?parts[partIndex].value=(parts[partIndex].value|byte<<shift)>>>0:parts[partIndex].value+=byte*Math.pow(2,shift),shift+=8-carryOver,parts[partIndex].bitsToRead-=8-carryOver}let significand=parts[0].value,exponent=parts[1].value,sign=parts[2].value;return exponent===Math.pow(2,exponentBits)-1?significand>0?NaN:1/0*(1===sign?-1:1):0===exponent&&0===significand?0*(1===sign?-1:1):0===exponent?(1===sign?-1:1)*significand*Math.pow(2,1-bias-significandBits):(1===sign?-1:1)*(1+significand/Math.pow(2,significandBits))*Math.pow(2,exponent-bias)}
/**
     * Reads a boolean value.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readBoolean(){return 0!==this.__readInteger(1,!1)}
/**
     * Reads a single byte of data.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readByte(){return this.__readInteger(1,!1)}
/**
     * Reads a signed byte.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readSByte(){return this.__readInteger(1,!0)}
/**
     * Reads a signed 16-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readInt16(){return this.__readInteger(2,!0)}
/**
     * Reads an unsigned 16-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readUInt16(){return this.__readInteger(2,!1)}
/**
     * Reads a signed 32-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readInt32(){return this.__readInteger(4,!0)}
/**
     * Reads an unsigned 32-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readUInt32(){return this.__readInteger(4,!1)}
/**
     * Reads a signed 64-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readInt64(){return this.__readBigInteger(8,!0)}
/**
     * Reads an unsigned 64-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readUInt64(){return this.__readBigInteger(8,!1)}
/**
     * Reads a single precision floating point number.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readFloat(){return this.__readFloatingPointNumber(4)}
/**
     * Reads a double precision floating point number.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */readDouble(){return this.__readFloatingPointNumber(8)}
/**
     * Reads a string. Will read until a zero byte is encountered, or until the specified length has been reached, or, if no length has been specified, until the end of the data.
     * This function throws an exception if length is negative or reading the number of bytes specified by length from the current offset position would exceed the length of the available data.
     * @param optionsOrLength The options to use or the length of the string to read in bytes.
     * @preserve (Part of the public API)
     */readString(optionsOrLength){let stringBytes,options={encoding:"UTF-8"};if("number"==typeof optionsOrLength?options.length=optionsOrLength:optionsOrLength&&(optionsOrLength.encoding&&optionsOrLength.encoding in this.__stringEncodings&&(options.encoding=optionsOrLength.encoding),void 0!==optionsOrLength.length&&(options.length=optionsOrLength.length)),void 0!==options.length){if(options.length<0)throw new RangeError("Length of the string to read must be positive.");if(this.__offset+options.length>this.__data.length)throw new RangeError(`Trying to read ${options.length} bytes from offset ${this.__offset} exceeds the length of the data.`);stringBytes=this.__data.slice(this.__offset,this.__offset+options.length)}else stringBytes=this.__data.slice(this.__offset);let result=this.__stringEncodings[options.encoding].decode(stringBytes,this.__endianness);return this.__offset+=options.length??result.byteCount,this.__getStringFromCodePoints(result.codePoints)}__getStringFromCodePoints(codePoints){let codeUnits=[];for(let i=0,ii=codePoints.length;i<ii;i++){let codePoint=codePoints[i];if(codePoint<=65535)codeUnits.push(codePoint);else{codePoint-=65536;let highSurrogate=55296+(codePoint>>10),lowSurrogate=codePoint%1024+56320;codeUnits.push(highSurrogate,lowSurrogate)}}return String.fromCharCode(...codeUnits)}
/**
     * Returns the length of the data in bytes.
     * @preserve (Part of the public API)
     */getLength(){return this.__data.length}
/**
     * Returns the current position of the read pointer.
     * @preserve (Part of the public API)
     */getOffset(){return this.__offset}
/**
     * Sets the position of the read pointer.
     * @param offset The new position of the read pointer.
     * @preserve (Part of the public API)
     */setOffset(offset){this.__offset=Math.floor(offset)}}TcHmi.Base64BinaryReader=Base64BinaryReader;