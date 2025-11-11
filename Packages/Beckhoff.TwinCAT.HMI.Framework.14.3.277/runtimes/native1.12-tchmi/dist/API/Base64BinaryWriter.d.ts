/**
 * Provides methods to write base64 encoded data.
 * @preserve (Part of the public API)
 */
export declare class Base64BinaryWriter {
    /**
     * Creates a new Base64BinaryWriter.
     * @param endianness Whether to use little endian (default) or big endian when encoding numbers.
     * @param length The desired length of the data. If this parameter is omitted the data will be expanded dynamically.
     * @preserve (Part of the public API)
     */
    constructor(endianness?: TcHmi.Endianness, length?: number);
    /**
     * Writes a boolean value.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The boolean value to write.
     * @preserve (Part of the public API)
     */
    writeBoolean(value: boolean): this;
    /**
     * Writes a single byte of data.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The byte to write.
     * @preserve (Part of the public API)
     */
    writeByte(value: number): this;
    /**
     * Writes a signed byte.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The byte to write.
     * @preserve (Part of the public API)
     */
    writeSByte(value: number): this;
    /**
     * Writes a signed 16-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */
    writeInt16(value: number): this;
    /**
     * Writes an unsigned 16-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */
    writeUInt16(value: number): this;
    /**
     * Writes a signed 32-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */
    writeInt32(value: number): this;
    /**
     * Writes an unsigned 32-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */
    writeUInt32(value: number): this;
    /**
     * Writes a signed 64-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */
    writeInt64(value: bigint): this;
    /**
     * Writes an unsigned 64-bit integer.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */
    writeUInt64(value: bigint): this;
    /**
     * Writes a single precision floating point number.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */
    writeFloat(value: number): this;
    /**
     * Writes a double precision floating point number.
     * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The number to write.
     * @preserve (Part of the public API)
     */
    writeDouble(value: number): this;
    /**
     * Writes a string.
     * This function throws an exception if the provided value does not fit into the given length or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The string to write.
     * @param options (Optional) Options for the write.
     * @param options.encoding (Optional) The encoding to use. Defaults to UTF-8.
     * @param options.length (Optional) The length of the string to write. If the string is shorter, the remaining space is filled with 0.
     * @param options.addNullTerminator (Optional) Whether to add a terminating 0 at the end of the string, if it isn't already terminated.
     * @preserve (Part of the public API)
     */
    writeString(value: string, options?: StringOptions): this;
    /**
     * Writes a string.
     * This function throws an exception if the provided value does not fit into the given length or if length was specified during writer construction and the value to write does not fit into the remaining length.
     * @param value The string to write.
     * @param length The length of the string to write. If the string is shorter, the remaining space is filled with 0.
     * @preserve (Part of the public API)
     */
    writeString(value: string, length: number): this;
    /**
     * Returns the base64 encoded string. If not enough data was written to fill the length the data should have, the rest is filled up with zeros.
     * @preserve (Part of the public API)
     */
    getEncodedString(): string;
    /**
     * Returns the length of the data that has been written.
     * @preserve (Part of the public API)
     */
    getLength(): number;
}
export interface StringOptions {
    encoding?: 'UTF-8' | 'Latin-1' | 'Windows-1252';
    length?: number;
    addNullTerminator?: boolean;
}
declare const _Base64BinaryWriter: typeof Base64BinaryWriter;
type tBase64BinaryWriter = Base64BinaryWriter;
type tStringOptions = StringOptions;
declare global {
    namespace TcHmi {
        let Base64BinaryWriter: typeof _Base64BinaryWriter;
        type Base64BinaryWriter = tBase64BinaryWriter;
        namespace Base64BinaryWriter {
            type StringOptions = tStringOptions;
        }
    }
}
export {};
//# sourceMappingURL=Base64BinaryWriter.d.ts.map