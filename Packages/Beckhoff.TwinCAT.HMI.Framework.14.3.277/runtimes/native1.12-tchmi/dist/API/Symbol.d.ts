import { SymbolExpression } from './SymbolExpression.js';
import type * as Server from './Server.js';
import { ObjectResolver as ApiObjectResolver } from './ObjectResolver.js';
/**
 * Provides methods to read and write symbol values and schemas.
 * @template ST Type of the value in the symbol.
 * @preserve (Part of the public API)
 */
export declare class Symbol<ST = any> extends TcHmi.Destroyable {
    /**
     * Throws SyntaxError if called with no valid symbol expression.
     * @param expression Expression for the symbol
     */
    constructor(expression: string);
    /**
     * Throws SyntaxError if called with no valid arguments object.
     * @param expressionObject Expression meta data object including the expression itself and further information like context.
     */
    constructor(expressionObject: ExpressionContainer);
    /**
     * Throws SyntaxError if called with no valid arguments object.
     * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
     */
    constructor(expressionOrExpressionObject: string | ExpressionContainer);
    /**
     * Reads the value of the current symbol.
     * return undefined if the symbol is not available
     * @returns A copy of the value
     * @template T Type of the read value. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */
    read<T = ST>(): T | undefined;
    /**
     * Reads the value of the current symbol and raises a callback with a copy of the result.
     * Returns a destroy function to terminate reading of asynchronous values.
     * @param callback with gets a copy of the value
     * @template T Type of the read value. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */
    readEx<T = ST>(callback?: (this: this, data: IReadResultObject<T> | IServerReadResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * Reads the value of the current symbol and raises a callback with a copy of the result.
     * Returns a destroy function to terminate reading of asynchronous values.
     * @param options Options for symbol handling
     * @param callback with gets a copy of the value
     * @template T Type of the read value. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */
    readEx2<T = ST>(options: IOptions | null, callback?: (this: this, data: IReadResultObject<T> | IServerReadResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * Writes the value of the current symbol.
     * Returns a destroy function to terminate writing of asynchronous values.
     * @param value The new value
     * @param callback Callback will be called after success or failure
     * @template T Type of the write value. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */
    write<T = ST>(value: T, callback?: (this: this, data: IWriteResultObject<T> | IServerWriteResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * Writes the value of the current symbol.
     * Returns a destroy function to terminate writing of asynchronous values.
     * @param value Value to write
     * @param options Options for symbol handling
     * @param callback Callback will be called after success or failure
     * @template T Type of the write value. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */
    writeEx<T = ST>(value: T, options: IOptions | null, callback?: (this: this, data: IWriteResultObject<T> | IServerWriteResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * Watches for changes of the current symbol and raises the callback in case of a change.
     * Returns a destroy function to remove the watch.
     * @param callback Callback will be called with each change of the value of the symbol
     * @template T Type of the value to watch. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */
    watch<T = ST>(callback?: (this: this, data: IWatchResultObject<T> | IServerWatchResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * Watches for changes of the current symbol and raises the callback in case of a change.
     * Returns a destroy function to remove the watch.
     * @param options Options for symbol handling
     * @param callback Callback will be called with each change of the value of the symbol
     * @template T Type of the value to watch. Falls back to type of the symbol.
     * @preserve (Part of the public API)
     */
    watchEx<T = ST>(options: IOptions | null, callback?: (this: this, data: IWatchResultObject<T> | IServerWatchResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * Returns the underlying SymbolExpression object.
     * @preserve (Part of the public API)
     */
    getExpression(): SymbolExpression;
    /**
     * Returns the context of the symbol.
     * @preserve (Part of the public API)
     */
    getContext(): TcHmi.Context | undefined;
    /**
     * Resolves the expression.
     * @param callback Callback will be called after success (with the schema) or failure
     * @preserve (Part of the public API)
     */
    resolveExpression(callback: (data: IReadResultObject<SymbolExpression>) => void): TcHmi.DestroyFunction;
    /**
     * Watches the expression.
     * @param callback Callback will be called after success (with the schema) or failure
     * @preserve (Part of the public API)
     */
    watchExpression(callback: (data: IReadResultObject<SymbolExpression>) => void): TcHmi.DestroyFunction;
    /**
     * Resolves the schema of the current symbol.
     * @param callback Callback will be called after success (with the schema) or failure
     * @preserve (Part of the public API)
     */
    resolveSchema(callback?: (this: this, data: ISchemaResultObject) => void): void;
    /**
     * Resolves the reference of the symbol.
     * Either a reference to the symbol itself or a reference to the value when the value is of type TcHmi.Symbol.
     * @param callback Callback will be called after success or failure.
     * @param options Options for symbol handling
     * @preserve (Part of the public API)
     */
    resolveReference(callback: (data: IResolveSymbolReferenceResultObject) => void, options?: IOptions): TcHmi.DestroyFunction;
    /**
     * Watches the reference of the symbol.
     * Either a reference to the symbol itself or a reference to the value when the value is of type TcHmi.Symbol.
     * @param callback Callback will be called after success or failure.
     * @param options Options for symbol handling
     * @preserve (Part of the public API)
     */
    watchReference(callback: (data: IResolveSymbolReferenceResultObject) => void, options?: IOptions): TcHmi.DestroyFunction;
    /**
     * Resolves a dictionary of PLC (?) attributes from the underlying schema.
     * @param callback Callback will be called after success (with the attributes) or failure
     * @preserve (Part of the public API)
     */
    resolveAttributes(callback?: (this: this, data: IAttributesResultObject) => void): TcHmi.DestroyFunction;
    /**
     * Resolves a PLC (?) attribute by name from the underlying schema.
     * @param name Name of the PLC (?) attribute
     * @param callback Callback will be called after success (with the attribute) or failure
     * @preserve (Part of the public API)
     */
    resolveAttribute(name: string, callback?: (this: this, data: IAttributesResultObject) => void): void;
    /**
     * Resolves a list of available versions of the symbol.
     * @param callback Callback will be called after success (with the list of version) or failure
     * @preserve (Part of the public API)
     */
    resolveVersions(callback?: (this: this, data: IVersionsResultObject) => void): void;
    /**
     * Watches a list of available versions of the symbol.
     * @param callback Callback will be called after success (with the list of version) or failure
     * @preserve (Part of the public API)
     */
    watchVersions(callback?: (this: this, data: IVersionsResultObject) => void): TcHmi.DestroyFunction;
    /**
     * Resolves the symbols meta data
     * @param callback Callback will be called after success (with the meta data) or failure
     * @preserve (Part of the public API)
     */
    resolveMetaData(callback?: (this: this, data: IServerSymbolMetaDataResultObject) => void): void;
    /**
     * Watches for changes of the symbols meta data
     * @param callback Callback will be called after success (with the meta data) or failure
     * @preserve (Part of the public API)
     */
    watchMetaData(callback?: (this: this, data: IServerSymbolMetaDataResultObject) => void): TcHmi.DestroyFunction;
    /**
     * Checks if this symbol exists
     * @param callback Callback will be called after success or failure
     * @preserve (Part of the public API)
     */
    exists(callback?: (this: this, data: IExistsResultObject) => void): void;
    /**
     * Used to determine if this Symbol instance is processed async or sync?
     * @preserve (Part of the public API)
     */
    isProcessedAsync(): boolean;
    /**
     * Destroys the current symbol object when there are no more claimed destroy privileges.
     * @preserve (Part of the public API)
     */
    destroy(): void;
    /**
     * Returns function references which are handled by the symbol consumer.
     *
     * @preserve (Part of the public API)
     */
    getReferenceDelegation(): ReferenceDelegation | null;
    /**
     * Please use TcHmi.ObjectResolver instead
     * @deprecated Please use TcHmi.ObjectResolver instead
     */
    static ObjectResolver: typeof ApiObjectResolver;
    static read: typeof read;
    static readEx: typeof readEx;
    static readEx2: typeof readEx2;
    static readEx3: typeof readEx3;
    static write: typeof write;
    static writeEx: typeof writeEx;
    static writeEx2: typeof writeEx2;
    static resolveExpression: typeof resolveExpression;
    static resolveSchema: typeof resolveSchema;
    static resolveAttributes: typeof resolveAttributes;
    static resolveAttribute: typeof resolveAttribute;
    static resolveVersions: typeof resolveVersions;
    static resolveMetaData: typeof resolveMetaData;
    static exists: typeof exists;
    static isSymbolExpression: typeof isSymbolExpression;
    static isSymbolExpressionEscaped: typeof isSymbolExpressionEscaped;
    static escapeSymbolExpression: typeof escapeSymbolExpression;
    static isIServerReadResultObject: typeof isIServerReadResultObject;
}
/**
 * Reads the value of a symbol by name and type.
 * This function throws an exception if the symbol type is not supported.
 * @param name Name of the symbol (without for example %i% marker)
 * @param type Type of the symbol as enum value
 * @template T Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function read<T = any>(name: string, type: TcHmi.SymbolType): T | undefined;
/**
 * Reads the value of a symbol by expression.
 * @param expression Expression for the symbol
 * @template T Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readEx<T = any>(expression: string): T | undefined;
/**
 * Reads the value of a symbol by expression.
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @template T Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readEx<T = any>(expressionObject: ExpressionContainer): T | undefined;
/**
 * Reads the value of a symbol by expression.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @template T Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readEx<T = any>(expressionOrExpressionObject: string | ExpressionContainer): T | undefined;
/**
 * Reads the value of a symbol by expression and raises a callback with the result.
 * Returns a destroy function to terminate reading of asynchronous values.
 * @param expression Expression for the symbol to read
 * @param callback Callback will be called after success (with the value) or failure
 * @template T Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readEx2<T = any>(expression: string, callback?: (this: void, data: IReadResultObject<T> | IServerReadResultObject<T>) => void): TcHmi.DestroyFunction;
/**
 * Reads the value of a symbol by expression and raises a callback with the result.
 * Returns a destroy function to terminate reading of asynchronous values.
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @param callback Callback will be called after success (with the value) or failure
 * @template T Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readEx2<T = any>(expressionObject: ExpressionContainer, callback?: (this: void, data: IReadResultObject<T> | IServerReadResultObject<T>) => void): TcHmi.DestroyFunction;
/**
 * Reads the value of a symbol by expression and raises a callback with the result.
 * Returns a destroy function to terminate reading of asynchronous values.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param callback Callback will be called after success (with the value) or failure
 * @template T Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readEx2<T = any>(expressionOrExpressionObject: string | ExpressionContainer, callback?: (this: void, data: IReadResultObject<T> | IServerReadResultObject<T>) => void): TcHmi.DestroyFunction;
/**
 * Reads the value of a symbol by expression and raises a callback with the result.
 * Returns a destroy function to terminate reading of asynchronous values.
 * @param expression Expression for the symbol
 * @param options Options for symbol handling
 * @param callback Callback will be called after success or failure
 * @template T Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readEx3<T = any>(expression: string, options: IOptions | null, callback?: (this: void, data: IReadResultObject<T> | IServerReadResultObject<T>) => void): TcHmi.DestroyFunction;
/**
 * Reads the value of a symbol by expression and raises a callback with the result.
 * Returns a destroy function to terminate reading of asynchronous values.
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @param options Options for symbol handling
 * @param callback Callback will be called after success or failure
 * @template T Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readEx3<T = any>(expressionObject: ExpressionContainer, options: IOptions | null, callback?: (this: void, data: IReadResultObject<T> | IServerReadResultObject<T>) => void): TcHmi.DestroyFunction;
/**
 * Reads the value of a symbol by expression and raises a callback with the result.
 * Returns a destroy function to terminate reading of asynchronous values.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param options Options for symbol handling
 * @param callback Callback will be called after success or failure
 * @template T Type of the read value.
 * @preserve (Part of the public API)
 */
export declare function readEx3<T = any>(expressionOrExpressionObject: string | ExpressionContainer, options: IOptions | null, callback?: (this: void, data: IReadResultObject<T> | IServerReadResultObject<T>) => void): TcHmi.DestroyFunction;
/**
 * Writes the value of a symbol by name and type.
 * This function throws an exception if the symbol type is not supported.
 * Returns a destroy function to terminate writing of asynchronous values.
 * @param name Name of the symbol (without for example %i% marker)
 * @param type Type of the symbol as enum value
 * @param value The new value
 * @param callback Callback will be called after success or failure
 * @template T Type of the write value.
 * @preserve (Part of the public API)
 */
export declare function write<T = any>(name: string, type: TcHmi.SymbolType, value: T, callback?: null | ((this: void, data: IWriteResultObject<T> | IServerWriteResultObject<T>) => void)): TcHmi.DestroyFunction;
/**
 * Writes the value of a symbol by expression.
 * Returns a destroy function to terminate writing of asynchronous values.
 * @param expression Expression for the symbol
 * @param value Value to write
 * @param callback Callback will be called after success or failure
 * @template T Type of the write value.
 * @preserve (Part of the public API)
 */
export declare function writeEx<T = any>(expression: string, value: T, callback?: null | ((this: void, data: IWriteResultObject<T> | IServerWriteResultObject<T>) => void)): TcHmi.DestroyFunction;
/**
 * Writes the value of a symbol by expression.
 * Returns a destroy function to terminate writing of asynchronous values.
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @param value Value to write
 * @param callback Callback will be called after success or failure
 * @template T Type of the write value.
 * @preserve (Part of the public API)
 */
export declare function writeEx<T = any>(expressionObject: ExpressionContainer, value: T, callback?: null | ((this: void, data: IWriteResultObject<T> | IServerWriteResultObject<T>) => void)): TcHmi.DestroyFunction;
/**
 * Writes the value of a symbol by expression.
 * Returns a destroy function to terminate writing of asynchronous values.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param value Value to write
 * @param callback Callback will be called after success or failure
 * @template T Type of the write value.
 * @preserve (Part of the public API)
 */
export declare function writeEx<T = any>(expressionOrExpressionObject: string | ExpressionContainer, value: T, callback?: null | ((this: void, data: IWriteResultObject<T> | IServerWriteResultObject<T>) => void)): TcHmi.DestroyFunction;
/**
 * Writes the value of a symbol by expression.
 * Returns a destroy function to terminate writing of asynchronous values.
 * @param expression Expression for the symbol
 * @param value Value to write
 * @param options Options for symbol handling
 * @param callback Callback will be called after success or failure
 * @template T Type of the write value.
 * @preserve (Part of the public API)
 */
export declare function writeEx2<T = any>(expression: string, value: T, options: IOptions | null, callback?: null | ((this: void, data: IWriteResultObject<T> | IServerWriteResultObject<T>) => void)): TcHmi.DestroyFunction;
/**
 * Writes the value of a symbol by expression.
 * Returns a destroy function to terminate writing of asynchronous values.
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @param value Value to write
 * @param options Options for symbol handling
 * @param callback Callback will be called after success or failure
 * @template T Type of the write value.
 * @preserve (Part of the public API)
 */
export declare function writeEx2<T = any>(expressionObject: ExpressionContainer, value: T, options: IOptions | null, callback?: null | ((this: void, data: IWriteResultObject<T> | IServerWriteResultObject<T>) => void)): TcHmi.DestroyFunction;
/**
 * Writes the value of a symbol by expression.
 * Returns a destroy function to terminate writing of asynchronous values.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param value Value to write
 * @param options Options for symbol handling
 * @param callback Callback will be called after success or failure
 * @template T Type of the write value.
 * @preserve (Part of the public API)
 */
export declare function writeEx2<T = any>(expressionOrExpressionObject: string | ExpressionContainer, value: T, options: IOptions | null, callback?: null | ((this: void, data: IWriteResultObject<T> | IServerWriteResultObject<T>) => void)): TcHmi.DestroyFunction;
/**
 * Resolves the expression.
 * @param expression Expression for the symbol
 * @param callback Callback will be called after success (with the schema) or failure
 * @preserve (Part of the public API)
 */
export declare function resolveExpression(expression: string, callback: (data: IReadResultObject<SymbolExpression>) => void): void;
/**
 * Resolves the expression.
 * @param expressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param callback Callback will be called after success (with the schema) or failure
 * @preserve (Part of the public API)
 */
export declare function resolveExpression(expressionObject: ExpressionContainer, callback: (data: IReadResultObject<SymbolExpression>) => void): void;
/**
 * Resolves the expression.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param callback Callback will be called after success (with the schema) or failure
 * @preserve (Part of the public API)
 */
export declare function resolveExpression(expressionOrExpressionObject: string | ExpressionContainer, callback: (data: IReadResultObject<SymbolExpression>) => void): void;
/**
 * Resolves the schema of the current symbol.
 * @param expression Expression for the symbol
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function resolveSchema(expression: string, callback?: (this: void, data: ISchemaResultObject) => void): void;
/**
 * Resolves the schema of the current symbol.
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function resolveSchema(expressionObject: ExpressionContainer, callback?: (this: void, data: ISchemaResultObject) => void): void;
/**
 * Resolves the schema of the current symbol.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function resolveSchema(expressionOrExpressionObject: string | ExpressionContainer, callback?: (this: void, data: ISchemaResultObject) => void): void;
/**
 * Resolves a dictionary of PLC (?) attributes from the underlying schema.
 * @param expression Expression for the symbol
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function resolveAttributes(expression: string, callback?: (this: void, data: IAttributesResultObject) => void): void;
/**
 * Resolves a dictionary of PLC (?) attributes from the underlying schema.
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function resolveAttributes(expressionObject: ExpressionContainer, callback?: (this: void, data: IAttributesResultObject) => void): void;
/**
 * Resolves a dictionary of PLC (?) attributes from the underlying schema.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function resolveAttributes(expressionOrExpressionObject: string | ExpressionContainer, callback?: (this: void, data: TcHmi.Symbol.IAttributesResultObject) => void): void;
/**
 * Resolves a PLC (?) attribute by name from the underlying schema.
 * @param expression Expression for the symbol
 * @param name Name of the PLC (?) attribute
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function resolveAttribute(expression: string, name: string, callback?: (this: void, data: IAttributesResultObject) => void): void;
/**
 * Resolves a PLC (?) attribute by name from the underlying schema.
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @param name Name of the PLC (?) attribute
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function resolveAttribute(expressionObject: ExpressionContainer, name: string, callback?: (this: void, data: IAttributesResultObject) => void): void;
/**
 * Resolves a PLC (?) attribute by name from the underlying schema.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param name Name of the PLC (?) attribute
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function resolveAttribute(expressionOrExpressionObject: string | ExpressionContainer, name: string, callback?: (this: void, data: IAttributesResultObject) => void): void;
/**
 * Resolves a list of available versions of the symbol.
 * @param expression Expression for the symbol
 * @param callback Callback will be called after success (with the list of version) or failure
 * @preserve (Part of the public API)
 */
export declare function resolveVersions(expression: string, callback?: (this: void, data: IVersionsResultObject) => void): void;
/**
 * Resolves a list of available versions of the symbol.
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @param callback Callback will be called after success (with the list of version) or failure
 * @preserve (Part of the public API)
 */
export declare function resolveVersions(expressionObject: ExpressionContainer, callback?: (this: void, data: IVersionsResultObject) => void): void;
/**
 * Resolves a list of available versions of the symbol.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param callback Callback will be called after success (with the list of version) or failure
 * @preserve (Part of the public API)
 */
export declare function resolveVersions(expressionOrExpressionObject: string | ExpressionContainer, callback?: (this: void, data: IVersionsResultObject) => void): void;
/**
 * Resolves the symbols meta data
 * @param expression Expression for the symbol
 * @param callback Callback will be called after success (with the meta data) or failure
 * @preserve (Part of the public API)
 */
export declare function resolveMetaData(expression: string, callback?: (this: void, data: IServerSymbolMetaDataResultObject) => void): void;
/**
 * Resolves the symbols meta data
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @param callback Callback will be called after success (with the meta data) or failure
 * @preserve (Part of the public API)
 */
export declare function resolveMetaData(expressionObject: ExpressionContainer, callback?: (this: void, data: IServerSymbolMetaDataResultObject) => void): void;
/**
 * Resolves the symbols meta data
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param callback Callback will be called after success (with the meta data) or failure
 * @preserve (Part of the public API)
 */
export declare function resolveMetaData(expressionOrExpressionObject: string | ExpressionContainer, callback?: (this: void, data: IServerSymbolMetaDataResultObject) => void): void;
/**
 * Checks if a symbol exists.
 * @param expression Expression for the symbol
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function exists(expression: string, callback?: (this: void, data: IExistsResultObject) => void): void;
/**
 * Checks if a symbol exists.
 * @param expressionObject Expression meta data object including the expression itself and further information like context.
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function exists(expressionObject: ExpressionContainer, callback?: (this: void, data: IExistsResultObject) => void): void;
/**
 * Checks if a symbol exists.
 * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
 * @param callback Callback will be called after success or failure
 * @preserve (Part of the public API)
 */
export declare function exists(expressionOrExpressionObject: string | ExpressionContainer, callback?: (this: void, data: IExistsResultObject) => void): void;
/**
 * Returns true if the expression is a valid symbol expression
 * @param expression Expression for the symbol
 * @preserve (Part of the public API)
 */
export declare function isSymbolExpression(expression: string): boolean;
/**
 * Returns true if expression is escaped with $ in opening expression tag before type token.
 * Example:
 * %$i%... -> true
 * %i%...  -> false
 * @param expression Expression for the symbol
 * @preserve (Part of the public API)
 */
export declare function isSymbolExpressionEscaped(expression: string): boolean;
/**
 * Will remove one escape level from expression and return it.
 * @param expression Expression for the symbol
 * @preserve (Part of the public API)
 */
export declare function escapeSymbolExpression(expression: string): string;
/**
 * A type assertion for differntiating a IServerReadResultObject from a IReadResultObject
 * @param data IReadResultObject
 */
export declare function isIServerReadResultObject<T = any>(data: IReadResultObject<T> | IServerReadResultObject<T>): data is IServerReadResultObject<T>;
export interface ISymbolResultObject extends TcHmi.IResultObject {
    /** The original expression of the symbol (unset in case of error) */
    expression?: SymbolExpression;
    /** The resolved expression used for processing this result (unset in case of error) */
    expressionResolved?: SymbolExpression;
}
export interface IWatchResultObject<T = any> extends ISymbolResultObject {
    value?: T;
    processedStart?: string;
    processedEnd?: string;
    dirtyPaths?: string[];
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
export interface IServerWatchResultObject<T = any> extends IWatchResultObject<T> {
    response?: Server.IMessage<T>;
}
export interface IReadResultObject<T = any> extends ISymbolResultObject {
    value?: T;
    processedStart?: string;
    processedEnd?: string;
    dirtyPaths?: string[];
    destroy?: TcHmi.DestroyFunction;
}
export interface IServerReadResultObject<T = any> extends IReadResultObject<T> {
    response?: Server.IMessage<T>;
}
export interface IWriteResultObject<T = any> extends ISymbolResultObject {
    value?: T;
    processedStart?: string;
    processedEnd?: string;
    dirtyPaths?: string[];
    destroy?: TcHmi.DestroyFunction;
}
export interface IServerWriteResultObject<T = any> extends IWriteResultObject<T> {
    response?: Server.IMessage<T>;
}
export interface ISchemaResultObject extends ISymbolResultObject {
    schema?: TcHmi.JsonSchema;
}
export interface IExistsResultObject extends ISymbolResultObject {
    result?: boolean;
}
export interface ExpressionContainer {
    expression: string;
    ctx?: TcHmi.Context;
}
export interface IAttributesResultObject extends ISymbolResultObject {
    attributes?: TcHmi.Dictionary<any>;
}
export interface IAttributeResultObject<T = any> extends ISymbolResultObject {
    name?: string;
    value?: T;
}
export interface IVersionsResultObject extends ISymbolResultObject {
    versions?: number[];
}
export interface IServerSymbolMetaDataResultObject extends ISymbolResultObject {
    ListSymbols?: IListSymbols;
    TcHmiAuditTrail?: {
        AuditTrailSymbols?: {
            enabled?: boolean;
            commentRequired?: boolean;
        };
    };
}
export interface IListSymbols {
    /** numeric access as in enum TcHmi.Server.ACCESS */
    ACCESS?: number;
    DOMAIN?: string;
    DYNAMIC?: boolean;
    HIDDEN?: boolean;
    MAPPING?: string;
    OPTIONS?: TcHmi.Dictionary<any>;
    SCHEMA?: TcHmi.JsonSchema;
    USEMAPPING?: boolean;
    /** Versions the symbol supports on this server */
    VERSIONS?: number[];
    REAUTHENTICATION_REQUIRED?: boolean;
    REVIEWER_GROUPS?: string[];
}
export interface IOptions {
    forceParallel?: boolean;
    forceReadWriteGroup?: string | number;
    forceVersion?: number;
    forceReferenceResolution?: 'Self' | 'Value';
}
export interface ReferenceDelegation {
    /**
     * A function reference that has to be injected by the symbol reference consumer when able to preload.
     * Preloading should be done when the function is called by the symbol reference provider and the
     * symbol reference consumer must call the done callback function when preloading is done.
     */
    preload?: (done: () => void) => void;
}
export interface IResolveSymbolReferenceResultObject extends ISymbolResultObject {
    ref?: Symbol;
    destroy: TcHmi.DestroyFunction;
}
declare const _Symbol: typeof Symbol;
type tSymbol<ST = any> = Symbol<ST>;
type tISymbolResultObject = ISymbolResultObject;
type tIWatchResultObject<T = any> = IWatchResultObject<T>;
type tIServerWatchResultObject<T = any> = IServerWatchResultObject<T>;
type tIReadResultObject<T = any> = IReadResultObject<T>;
type tIServerReadResultObject<T = any> = IServerReadResultObject<T>;
type tIWriteResultObject<T = any> = IWriteResultObject<T>;
type tIServerWriteResultObject<T = any> = IServerWriteResultObject<T>;
type tISchemaResultObject = ISchemaResultObject;
type tIExistsResultObject = IExistsResultObject;
type tIAttributesResultObject = IAttributesResultObject;
type tIAttributeResultObject<T = any> = IAttributeResultObject<T>;
type tIVersionsResultObject = IVersionsResultObject;
type tIServerSymbolMetaDataResultObject = IServerSymbolMetaDataResultObject;
type tIListSymbols = IListSymbols;
type tIOptions = IOptions;
type tReferenceDelegation = ReferenceDelegation;
type tIResolveSymbolReferenceResultObject = IResolveSymbolReferenceResultObject;
type tExpressionContainer = ExpressionContainer;
declare global {
    namespace TcHmi {
        let Symbol: typeof _Symbol;
        type Symbol<ST = any> = tSymbol<ST>;
        namespace Symbol {
            type ISymbolResultObject = tISymbolResultObject;
            type IWatchResultObject<T = any> = tIWatchResultObject<T>;
            type IServerWatchResultObject<T = any> = tIServerWatchResultObject<T>;
            type IReadResultObject<T = any> = tIReadResultObject<T>;
            type IServerReadResultObject<T = any> = tIServerReadResultObject<T>;
            type IWriteResultObject<T = any> = tIWriteResultObject<T>;
            type IServerWriteResultObject<T = any> = tIServerWriteResultObject<T>;
            type ISchemaResultObject = tISchemaResultObject;
            type IExistsResultObject = tIExistsResultObject;
            type IAttributesResultObject = tIAttributesResultObject;
            type IAttributeResultObject<T = any> = tIAttributeResultObject<T>;
            type IVersionsResultObject = tIVersionsResultObject;
            type IServerSymbolMetaDataResultObject = tIServerSymbolMetaDataResultObject;
            type IListSymbols = tIListSymbols;
            type IOptions = tIOptions;
            type ReferenceDelegation = tReferenceDelegation;
            type IResolveSymbolReferenceResultObject = tIResolveSymbolReferenceResultObject;
            type ExpressionContainer = tExpressionContainer;
            type ObjectResolver<T extends object | null> = TcHmi.ObjectResolver<T>;
            namespace ObjectResolver {
                /**
                 * Please use TcHmi.ObjectResolver.IWatchResultObject instead.
                 * @deprecated Please use TcHmi.ObjectResolver.IWatchResultObject instead.
                 */
                type IWatchResultObject<T extends object | null> = TcHmi.ObjectResolver.IWatchResultObject<T>;
                /**
                 * Please use TcHmi.ObjectResolver.IResultObject instead.
                 * @deprecated Please use TcHmi.ObjectResolver.IResultObject instead.
                 */
                type IResultObject<T extends object | null> = TcHmi.ObjectResolver.IResultObject<T>;
                /**
                 * Please use TcHmi.ObjectResolver.IOptions instead.
                 * @deprecated Please use TcHmi.ObjectResolver.IOptions instead.
                 */
                type IOptions = TcHmi.ObjectResolver.IOptions;
            }
        }
    }
}
export {};
//# sourceMappingURL=Symbol.d.ts.map