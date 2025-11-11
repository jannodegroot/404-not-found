import type { IReadResultObject } from './Symbol.js';
/**
 * Symbol expression parser.
 * @preserve (Part of the public API)
 */
export declare class SymbolExpression {
    /**
     * Split string by pipe, but ignore pipes in brackets.
     * @deprecated Please use SymbolExpression.parse instead. RegExp method will not work properly with nested symbol expressions.
     * @preserve (Part of the public API)
     */
    static RegExpExpressionGroupByPipe: RegExp;
    /**
     * Resolves the first expression occurrence and the content including line breaks.
     * @deprecated Please use SymbolExpression.parse instead. RegExp method will not work properly with nested symbol expressions.
     * @preserve (Part of the public API)
     */
    static RegExpExpression: RegExp;
    /**
     * Resolves the first escapted expression occurrence and the content including line breaks.
     * @deprecated Please use SymbolExpression.parse instead. RegExp method will not work properly with nested symbol expressions.
     * @preserve (Part of the public API)
     */
    static RegExpExpressionEscaped: RegExp;
    /**
     * Parses the given expression.
     * @param expression The expression to be parsed.
     */
    static parse(expression: string): IParseResultObject;
    /**
     * Creates a SymbolExpression instance
     * @param expression expression string
     */
    constructor(expression: string);
    /**
     * Returns the expression string.
     * @preserve (Part of the public API)
     */
    toString(): string;
    /**
     * Returns the content of the expression. The content is everything except the expression tags.
     * @preserve (Part of the public API)
     */
    getContent(): string | undefined;
    /**
     * Returns the tag of the expression. For example "s" in case of an expression of type Server.
     * @preserve (Part of the public API)
     */
    getTag(): TcHmi.SymbolTag | undefined;
    /**
     * Returns the name of the expression.
     * In case of an expression of type Server getName will also contain the path. Use getNameEx to retrieve the name in all expressions which support having a name.
     * @preserve (Part of the public API)
     */
    getName(): string | undefined;
    /**
     * Returns the name of the expression.
     * @preserve (Part of the public API)
     */
    getNameEx(): string | undefined;
    /**
     * Returns the full name containing the base name and the path of the expression but no options.
     * @preserve (Part of the public API)
     */
    getFullName(): string | undefined;
    /**
     * Returns the path of the expression.
     * In case of an expression of type Server getPath will return null. Use getPathEx if you want to retrieve the path in all expressions which support having a path.
     * @preserve (Part of the public API)
     */
    getPath(): string | null;
    /**
     * Returns the path of the expression.
     * @preserve (Part of the public API)
     */
    getPathEx(): string | null;
    /**
     * Returns the path tokens.
     * In case of an expression of type Server getPathTokens will return null. Use getPathTokensEx if you want to retrieve the path tokens in all expressions which support having a path.
     * @preserve (Part of the public API)
     */
    getPathTokens(): string[] | null;
    /**
     * Returns the path tokens.
     * @preserve (Part of the public API)
     */
    getPathTokensEx(): string[] | null;
    /**
     * Returns the type of the expression.
     * @preserve (Part of the public API)
     */
    getType(): TcHmi.SymbolType;
    /**
     * Returns a Dictionary of option flags.
     * @preserve (Part of the public API)
     */
    getOptions(): IOptions;
    /**
     * Returns an array of child symbol expressions.
     * @returns
     */
    getChildren(): SymbolExpression[];
    /**
     * Returns the current symbol expressions parse data.
     * @returns
     */
    getParseData(): IParseData | null;
    /**
     * Returns true if the expressions contains child symbols that have to be resolved before the expression can be resolved.
     */
    hasChildren(): boolean;
    /**
     * Resolves the expression.
     * @param callback The function that will be called when the result is available.
     * @preserve (Part of the public API)
     */
    resolve(callback: (data: IReadResultObject<SymbolExpression>) => void): TcHmi.DestroyFunction;
    private __symbolRefCount;
    /**
     * Watches the expression.
     * @param callback The function that will be called when the result is available.
     * @preserve (Part of the public API)
     */
    watch(callback: (data: IReadResultObject<SymbolExpression>) => void): TcHmi.DestroyFunction;
}
/**
 * Symbol expression related option flags.
 */
export interface IOptions {
    /** The binding mode to be used when the symbol expression is used to bind a symbol to a control attribute. */
    BindingMode?: TcHmi.BindingMode;
    /**
     * DEPRECATED
     * Will hold first defined BindingEvent. Complete list is stored in BindingEvents array.
     * @deprecated
     */
    BindingEvent?: string;
    /**
     * A list of control event names that will trigger a binding to read the control attribute and write it to the symbol
     * when the symbol expression is used to bind a symbol to a control attribute.
     */
    BindingEvents?: string[];
    /**
     * Timeout
     * Only respected in case of a symbol expression of type Server or Control.
     */
    Timeout?: number;
    /**
     * The interval used for Subscription requests to the symbol described by the expression.
     * Only respected in case of a symbol expression of type Server.
     */
    Interval?: number;
    /**
     * Defines if requests made to the symbol described by the expression will bypass the system request queue.
     * Only respected in case of a symbol expression of type Server.
     */
    Parallel?: boolean;
    /**
     * The mode used for Subscription requests to the symbol described by the expression.
     * Only respected in case of a symbol expression of type Server.
     *
     * Change
     * The server will send a message for a symbols current value when the server has detected a value change.
     *
     * Poll
     * The server will send a message for a symbols current value with every interval timer tick.
     * Can be used to always have information about the current value.
     *
     * ClientPoll
     * Only respected for subscriptions from TcHmi.Symbol api.
     * The client will run a timer (with subscriptions interval time) and send an update to the affected
     * TcHmi.Symbol instance with the last known subscription value reported by the server
     * with every timer tick.
     * Can be used to always have information about the current value.
     *
     * ClientWriteConfirm
     * Only respected for subscriptions from TcHmi.Symbol api.
     * The client will send an one time update to the affected TcHmi.Symbol instance
     * with the last known subscription value reported by the server after a write has happend
     * via the affected TcHmi.Symbol instance.
     * The update will be send after a timer (with subscriptions interval time) has triggered.
     * The timer will be resetted when a write occurs while the timer is already running.
     * Can be used to always have information about the current value after a write operation,
     * without additional load on the server and the client.
     * Can help if the value of a symbol is reset to the previous value after a successful write
     * operation before the server was able to recognise the change caused by the write operation
     * in the context of the subscription.
     */
    SubscriptionMode?: 'Change' | 'Poll' | 'ClientPoll' | 'ClientWriteConfirm';
    /**
     * Subscription requests to the symbol described by the expression with the same SubscriptionGroup will be bundled into the same Subscription request to the server.
     * Only respected in case of a symbol expression of type Server.
     */
    SubscriptionGroup?: string;
    /**
     * ReadWrite requests to the symbol described by the expression with the same ReadWriteGroup will be bundled into the same request to the server when they are raised synchronous.
     * Only respected in case of a symbol expression of type Server.
     */
    ReadWriteGroup?: string;
    /**
     * Requests to the symbol described by the expression will contain the UniqueHash command options when set to true.
     * Only respected in case of a symbol expression of type Server.
     */
    UniqueHash?: boolean;
    /**
     * Requests to the symbol described by the expression will call this version of the symbol.
     * Only respected in case of a symbol expression of type Server.
     */
    Version?: number;
    /**
     * When the symbol expression is used to address an array this defines the start index.
     */
    Start?: number;
    /**
     * When the symbol expression is used to address an array this defines the end index.
     */
    End?: number;
    /**
     * Defines whether an event should be registered to listen for changes in the symbol value or if the symbol expression should be resolved and the resulting string be used as the event name.
     * Only respected when the symbol expression is used to register an event.
     */
    EventRegistrationMode?: 'Verbatim' | 'Resolve';
    /**
     * Defines if we should wait for a control to become available before reporting an error.
     * The time to wait can be defined via Timeout option.
     * Only respected in case of a symbol expression of type Control.
     */
    WaitForControl?: boolean;
    /**
     * Determines how a binding will handle symbol related read/watch errors.
     * Possible values:
     * - Ignore: Ignore the error.
     * - Reset: Forward the default toggle switch (null) to force the control attribute to reset to default value.
     */
    BindingErrorHandling?: 'Ignore' | 'Reset';
    /**
     * Determines how a binding will handle symbol related write errors.
     * Possible values:
     * - Ignore: Ignore the error.
     * - ReadBack: Read back the current symbol value after write attempt failure and forward it to the control.
     */
    BindingWriteErrorHandling?: 'Ignore' | 'ReadBack';
    /**
     * Determines how a symbol should resolve a reference to itself.
     * Possible values:
     * - Self: Returns a reference to the symbol itself.
     * - Value: When the symbol has a value of type symbol it will resolve the inner symbol reference recursively by forcing
     *          ReferenceResolution to Value for every layer until a non symbol value is found and resolve a reference to the symbol holding that value.
     */
    ReferenceResolution?: 'Self' | 'Value';
}
/**
 * Symbol expression parse result.
 */
export interface IParseData {
    type: TcHmi.SymbolType;
    expression: string;
    tag?: TcHmi.SymbolTag;
    content?: string;
    isEscaped: boolean;
    escapeLevel: number;
    fullName?: string;
    name?: string;
    path?: string;
    options?: string[];
    openStart?: number;
    openEnd?: number;
    closeStart?: number;
    closeEnd?: number;
    children?: IParseData[];
    origin?: IParseData;
    originOpenStart?: number;
    originOpenEnd?: number;
    originCloseStart?: number;
    originCloseEnd?: number;
}
export interface IParseResultObject extends TcHmi.IResultObject {
    data?: IParseData;
}
declare const _SymbolExpression: typeof SymbolExpression;
type tSymbolExpression = SymbolExpression;
type tIParseData = IParseData;
type tIOptions = IOptions;
declare global {
    namespace TcHmi {
        let SymbolExpression: typeof _SymbolExpression;
        type SymbolExpression = tSymbolExpression;
        namespace SymbolExpression {
            type IParseData = tIParseData;
            type IOptions = tIOptions;
        }
    }
}
export {};
//# sourceMappingURL=SymbolExpression.d.ts.map