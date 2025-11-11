import { SymbolExpression } from '../API/SymbolExpression.js';
export declare enum SymbolState {
    Invalid = 0,
    Ready = 10,
    Destroyed = 20
}
/**
 * System Symbol
 * @template ST Type of the value in the symbol.
 */
export declare class Symbol<ST = any> extends TcHmi.Destroyable {
    /**
     * System Symbol
     * Throws SyntaxError if called with no valid symbol expression.
     * @param expression
     */
    constructor(expression: string | SymbolExpression);
    /**
     * System Symbol
     * Throws SyntaxError if called with no valid arguments object.
     * @param expressionObject
     */
    constructor(expressionObject: {
        expression: string | SymbolExpression;
        ctx?: TcHmi.Context;
    });
    constructor(expressionOrExpressionObject: string | SymbolExpression | {
        expression: string | SymbolExpression;
        ctx?: TcHmi.Context;
    });
    getDiagGUID(): string;
    getExpression(): SymbolExpression;
    getState(): SymbolState;
    getReferenceDelegation(): TcHmi.Symbol.ReferenceDelegation | null;
    getContext(): TcHmi.Context<any> | undefined;
    isReady(): boolean;
    /**
     * Determines if this symbol will be processed asynchronous or synchronous. Returns true if processed asynchronous.
     */
    isProcessedAsync(): boolean;
    private __printExpression;
    /**
     * Destroys the current symbol object when the internal reference counter reaches 0.
     */
    destroy(): void;
    /**
     * Resolves the expression.
     * @param callback
     */
    resolveExpression(callback: (this: Symbol, data: TcHmi.Symbol.IReadResultObject<TcHmi.SymbolExpression>) => void): TcHmi.DestroyFunction;
    /**
     * Watches the expression.
     * @param callback
     */
    watchExpression(callback: (this: Symbol, data: TcHmi.Symbol.IReadResultObject<TcHmi.SymbolExpression>) => void, reason?: string): TcHmi.DestroyFunction;
    /**
     * Resolves the schema of the current symbol.
     * @param callback
     */
    resolveSchema(callback?: (data: TcHmi.Symbol.ISchemaResultObject) => void): TcHmi.DestroyFunction;
    /**
     * Resolves a dictionary of attributes from the underlying schema.
     * @param callback
     */
    resolveAttributes(callback?: (this: this, data: TcHmi.Symbol.IAttributesResultObject) => void): TcHmi.DestroyFunction;
    /**
     * Resolves an attribute by name from the underlying schema.
     * @param name
     * @param callback
     */
    resolveAttribute(name: string, callback?: (this: this, data: TcHmi.Symbol.IAttributeResultObject) => void): void;
    /**
     * Resolves a list of available versions of the symbol.
     * @param callback
     */
    resolveVersions(callback?: (this: this, data: TcHmi.Symbol.IVersionsResultObject) => void): void;
    /**
     * Resolves a list of available versions of the symbol.
     * @param callback
     */
    private __resolveVersions;
    /**
     * Watches the list of available versions of the symbol.
     * @param callback
     */
    watchVersions(callback?: (this: this, data: TcHmi.Symbol.IVersionsResultObject) => void): () => void;
    /**
     * Watches the list of available versions of the symbol.
     * @param callback
     */
    private __watchVersions;
    /**
     * Resolves the symbols meta data.
     * @param callback
     */
    resolveMetaData(callback?: (this: this, data: TcHmi.Symbol.IServerSymbolMetaDataResultObject) => void): void;
    /**
     * Resolves the symbols meta data.
     * @param callback
     */
    private __resolveMetaData;
    /**
     * Watches the symbols meta data.
     * @param callback
     */
    watchMetaData(callback?: (this: this, data: TcHmi.Symbol.IServerSymbolMetaDataResultObject) => void): TcHmi.DestroyFunction;
    /**
     * Watches the symbols meta data.
     * @param callback
     */
    private __watchMetaData;
    /**
     * Reads a value of the symbol and raises a callback with a copy of it
     * @param callback
     * @template T Type of the read value. Falls back to type of the symbol.
     */
    read<T = ST>(callback: (this: this, data: TcHmi.Symbol.IReadResultObject<T> | TcHmi.Symbol.IServerReadResultObject<T>) => void): TcHmi.DestroyFunction | null;
    /**
     * Reads a value of the symbol and raises a callback with a copy of it
     * @param options
     * @param callback
     * @template T Type of the read value. Falls back to type of the symbol.
     */
    readEx<T = ST>(options: TcHmi.Symbol.IOptions | null, callback: (this: this, data: TcHmi.Symbol.IReadResultObject<T> | TcHmi.Symbol.IServerReadResultObject<T>) => void): TcHmi.DestroyFunction | null;
    /**
     * @param value
     * @param callback
     * @template T Type of the write value. Falls back to type of the symbol.
     */
    write<T = ST>(value: T, callback?: (this: this, data: TcHmi.Symbol.IWriteResultObject<T> | TcHmi.Symbol.IServerWriteResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * @param value
     * @param dirtyPaths
     * @param callback
     * @template T Type of the write value. Falls back to type of the symbol.
     */
    writeEx<T = ST>(value: T, dirtyPaths?: string[] | null, callback?: (this: this, data: TcHmi.Symbol.IWriteResultObject<T> | TcHmi.Symbol.IServerWriteResultObject<T>) => void): TcHmi.DestroyFunction | null;
    /**
     * @param value
     * @param options
     * @param dirtyPaths
     * @param callback
     * @template T Type of the write value. Falls back to type of the symbol.
     */
    writeEx2<T = ST>(value: T, options?: TcHmi.Symbol.IOptions | null, dirtyPaths?: string[] | null, callback?: (this: this, data: TcHmi.Symbol.IWriteResultObject<T> | TcHmi.Symbol.IServerWriteResultObject<T>) => void): TcHmi.DestroyFunction | null;
    /**
     * @param value
     * @param options
     * @param dirtyPaths
     * @param callback
     * @template T Type of the write value. Falls back to type of the symbol.
     */
    private __write;
    /**
     * Starts a watch on a symbol
     * @param callback
     * @template T Type of the value to watch. Falls back to type of the symbol.
     */
    watch<T = ST>(callback: (this: this, data: TcHmi.Symbol.IWatchResultObject<T> | TcHmi.Symbol.IServerWatchResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * Starts a watch on a symbol
     * @param options
     * @param callback callback will be called after success or failure
     * @template T Type of the value to watch. Falls back to type of the symbol.
     */
    watchEx<T = ST>(options: TcHmi.Symbol.IOptions | null, callback: (this: this, data: TcHmi.Symbol.IWatchResultObject<T> | TcHmi.Symbol.IServerWatchResultObject<T>) => void, reason?: string): TcHmi.DestroyFunction;
    /**
     * Starts a watch on a symbol
     * @param options
     * @param callback callback will be called after success or failure
     * @template T Type of the value to watch. Falls back to type of the symbol.
     */
    private __watch;
    static isServerSymbol(checkSymbol: Symbol): boolean;
    static isInternalSymbol(checkSymbol: Symbol): boolean;
    static isLocalizedTextSymbol(checkSymbol: Symbol): boolean;
    static isPartialParamSymbol(checkSymbol: Symbol): boolean;
    static isTemplateParamSymbol(checkSymbol: Symbol): boolean;
    static isFunctionSymbol(checkSymbol: Symbol): boolean;
    static isControlSymbol(checkSymbol: Symbol): boolean;
    static isContextSymbol(checkSymbol: Symbol): boolean;
    static isThemedSymbol(checkSymbol: Symbol): boolean;
    /**
     * Returns true if the symbol can be read without any error. Otherwise it will reutrn false.
     * @param callback
     */
    exists(callback?: (this: this, data: TcHmi.Symbol.IExistsResultObject) => void): void;
}
//# sourceMappingURL=Symbol.d.ts.map