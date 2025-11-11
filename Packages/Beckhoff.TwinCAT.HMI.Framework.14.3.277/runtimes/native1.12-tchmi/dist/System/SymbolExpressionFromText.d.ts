import { SymbolExpression } from '../API/SymbolExpression.js';
export declare class SymbolExpressionFromText {
    /**
     */
    constructor(text: string);
    /**
     * Resolves all expressions of type from the given text.
     * Will resolve nested symbol expressions too.
     * @param type
     */
    resolveExpressionsBySymbolType(type: TcHmi.SymbolType): SymbolExpression[];
    /**
     * Resolves all expressions from the given text.
     * Will resolve nested symbol expressions too.
     * @returns
     */
    resolveExpressions(): SymbolExpression[];
}
//# sourceMappingURL=SymbolExpressionFromText.d.ts.map