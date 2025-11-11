import type { SymbolExpression } from '../API/SymbolExpression.js';
import type * as Symbol from '../API/Symbol.js';
export declare class SymbolTypeServer<ST = any> extends TcHmi.Destroyable {
    private __printExpression;
    /**
     * Starts a watch on a symbol
     * @param options
     * @param callback callback will be called after success or failure
     * @template T Type of the value to watch. Falls back to type of the symbol.
     */
    watch<T = ST>(expression: SymbolExpression, options: Symbol.IOptions | null, callback: (data: Symbol.IWatchResultObject<T> | Symbol.IServerWatchResultObject<T>) => void, reason?: string): TcHmi.DestroyFunction;
}
//# sourceMappingURL=Symbol.SymbolTypeServer.d.ts.map