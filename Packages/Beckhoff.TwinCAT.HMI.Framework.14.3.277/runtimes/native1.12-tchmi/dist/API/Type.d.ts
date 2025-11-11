/**
 * Returns the schema object for a type definition.
 * Can be used for example with 'tchmi:general#/definitions/String'
 * Returns null on error
 * For schema information on Symbols use its resolveSchema()
 * or for SymbolExpressions use TcHmi.Symbol.resolveSchema()
 * @param typeName Name of the type reference (for example 'tchmi:general#/definitions/String')
 * @preserve (Part of the public API)
 */
export declare function getSchema(typeName: string): TcHmi.JsonSchema | null;
declare const _getSchema: typeof getSchema;
declare global {
    namespace TcHmi {
        namespace Type {
            let getSchema: typeof _getSchema;
        }
    }
}
export {};
//# sourceMappingURL=Type.d.ts.map