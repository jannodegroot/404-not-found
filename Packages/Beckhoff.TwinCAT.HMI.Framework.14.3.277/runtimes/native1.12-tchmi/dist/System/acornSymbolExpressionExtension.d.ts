export interface SymbolExpression extends ESTree.Expression {
    start: number;
    end: number;
    expression: string;
}
export interface Identifier extends ESTree.Identifier {
    start: number;
    end: number;
}
export interface IParserEx {
    symbolExpression_readToken: any;
    symbolExpression_readWord: any;
    symbolExpression_parseString: () => string;
    symbolExpression_parseOpeningTagName: () => string;
    symbolExpression_parseClosingTagName: () => string;
    symbolExpression_parseElementAt: any;
    symbolExpression_parseElement: any;
}
//# sourceMappingURL=acornSymbolExpressionExtension.d.ts.map