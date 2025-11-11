/**
 * Provides methods to read base64 encoded data.
 * @preserve (Part of the public API)
 */
export declare class Base64BinaryReader {
    /**
     * Creates a new Base64BinaryReader.
     * This constructor throws an exception if the data is not valid base64.
     * @param data The base64 encoded string to read from.
     * @param endianness Whether the encoded data uses little endian (default) or big endian to store numbers.
     * @preserve (Part of the public API)
     */
    constructor(data: string, endianness?: TcHmi.Endianness);
    /**
     * Reads a boolean value.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readBoolean(): boolean;
    /**
     * Reads a single byte of data.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readByte(): number;
    /**
     * Reads a signed byte.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readSByte(): number;
    /**
     * Reads a signed 16-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readInt16(): number;
    /**
     * Reads an unsigned 16-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readUInt16(): number;
    /**
     * Reads a signed 32-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readInt32(): number;
    /**
     * Reads an unsigned 32-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readUInt32(): number;
    /**
     * Reads a signed 64-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readInt64(): bigint;
    /**
     * Reads an unsigned 64-bit integer.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readUInt64(): bigint;
    /**
     * Reads a single precision floating point number.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readFloat(): number;
    /**
     * Reads a double precision floating point number.
     * This function throws an exception if reading from the current offset position would exceed the length of the available data.
     * @preserve (Part of the public API)
     */
    readDouble(): number;
    /**
     * Reads a string. Will read until a zero byte is encountered, or until the specified length has been reached, or, if no length has been specified, until the end of the data.
     * This function throws an exception if length is negative or reading the number of bytes specified by length from the current offset position would exceed the length of the available data.
     * @param options (Optional) Options for the write.
     * @param options.encoding (Optional) The encoding to use. Defaults to UTF-8.
     * @param options.length (Optional) The length of the string to read in bytes.
     * @preserve (Part of the public API)
     */
    readString(options?: StringOptions): string;
    /**
     * Reads a string. Will read until a zero byte is encountered, or until the specified length has been reached, or, if no length has been specified, until the end of the data.
     * This function throws an exception if length is negative or reading the number of bytes specified by length from the current offset position would exceed the length of the available data.
     * @param length The length of the string to read in bytes.
     * @preserve (Part of the public API)
     */
    readString(length: number): string;
    /**
     * Returns the length of the data in bytes.
     * @preserve (Part of the public API)
     */
    getLength(): number;
    /**
     * Returns the current position of the read pointer.
     * @preserve (Part of the public API)
     */
    getOffset(): number;
    /**
     * Sets the position of the read pointer.
     * @param offset The new position of the read pointer.
     * @preserve (Part of the public API)
     */
    setOffset(offset: number): void;
}
export interface StringOptions {
    encoding?: 'UTF-8' | 'Latin-1' | 'Windows-1252';
    length?: number;
}
declare const _Base64BinaryReader: typeof Base64BinaryReader;
type tBase64BinaryReader = Base64BinaryReader;
type tStringOptions = StringOptions;
declare global {
    namespace TcHmi {
        let Base64BinaryReader: typeof _Base64BinaryReader;
        type Base64BinaryReader = tBase64BinaryReader;
        namespace Base64BinaryReader {
            type StringOptions = tStringOptions;
        }
    }
}
export {};
//# sourceMappingURL=Base64BinaryReader.d.ts.map