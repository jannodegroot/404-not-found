import './acornSymbolExpressionExtension.js';
export declare class FunctionExpression extends TcHmi.Destroyable {
    /**
     * @param functionExpression The expression... Example: 1 + 1 , Example: MyFunction(%s%PLC1.MAIN.nTest%/s%) + 1 + 1
     * @param options Options for the function expression.
     * @param options.watchMode Defines options for the watch mode.
     * @param options.watchMode.enable Defines if symbols within the FunctionExpression should be resolved based on a symbol watch or by explicit calls to each symbol which is the default.
     * @param options.watchMode.ctx The context which is used to execute the function expression in watch mode.
     * @param options.forcedSymbolOptions Defines symbol options which are forced to any symbol read, write or watch call of every symbol.
     */
    constructor(functionExpression: string, options?: {
        watchMode?: {
            enable?: boolean;
            ctx?: TcHmi.Context;
        };
        forcedSymbolOptions?: TcHmi.Symbol.IOptions | null;
    });
    /**
     * If skipCallbackWithSyncValue is set, returns sync value if known.
     * Async success and errors are always handled via CTX object.
     * @param skipCallbackWithSyncValue false will call the ctx.success in any case. true will not call success if value is known sync
     */
    execute(ctx: TcHmi.SelectableRequired<TcHmi.FunctionExpressionContext, 'success' | 'error'>, skipCallbackWithSyncValue: true): IFunctionResultHandled | IFunctionResultValue;
    /**
     * Sync and Async success and errors are always handled via CTX object.
     */
    execute(ctx: TcHmi.SelectableRequired<TcHmi.FunctionExpressionContext, 'success' | 'error'>): IFunctionResultHandled;
    watch(callback: (this: void, data: IWatchResultObject) => void): TcHmi.DestroyFunction;
    /**
     * Resolved the processed wait mode of the function expression.
     * Even if a called function provides a synchronous wait mode it may be processed asynchronous if asynchronous working symbols
     * are added as parameter because parameters are resolved before the underlying function is called.
     */
    private __resolveProcessedWaitMode;
    /**
     * Returns true if the function expression will be processed asynchronous and false if not.
     * Even if a called function provides a synchronous wait mode it may be processed asynchronous if asynchronous working symbols
     * are added as parameter because parameters are resolved before the underlying function is called.
     */
    isProcessedAsync(): boolean;
    destroy(): void;
}
/** Meta data of synbol expression used during processing. */
export interface ISymbolExpressionMetaData {
    options: ISymbolExpressionArgumentOptions;
    value?: any;
}
/** Options of symbol expression based on function description argument settings. */
export interface ISymbolExpressionArgumentOptions {
    passAsSymbol: boolean;
    allowSymbolReferenceWatchDelegation: boolean;
}
/** Result handling will be NOT handled via CTX object. The caller is responsible for the value! */
export interface IFunctionResultValue extends TcHmi.IResultObject {
    /** Errors.E_FUNCTION_HANDLED_VIA_RETURN_VALUE: Value of the FunctionExpression is known synchronous. The caller is responsible for the value! */
    error: TcHmi.Errors.E_FUNCTION_HANDLED_VIA_RETURN_VALUE;
    /** Value of the FunctionExpression is known synchronous. Error is Errors.NONE */
    value: any;
}
/** Result handling will be handled via CTX object. */
export interface IFunctionResultHandled extends TcHmi.IResultObject {
    /** Errors.NONE: Value of the FunctionExpression is handled by the CTX */
    error: TcHmi.Errors.NONE;
}
export interface IWatchResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
//# sourceMappingURL=FunctionExpression.d.ts.map