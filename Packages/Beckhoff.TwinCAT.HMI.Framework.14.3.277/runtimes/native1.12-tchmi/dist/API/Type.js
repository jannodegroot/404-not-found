import{typeManager}from"../System/Type.TypeManager.js";
/**
 * Returns the schema object for a type definition.
 * Can be used for example with 'tchmi:general#/definitions/String'
 * Returns null on error
 * For schema information on Symbols use its resolveSchema()
 * or for SymbolExpressions use TcHmi.Symbol.resolveSchema()
 * @param typeName Name of the type reference (for example 'tchmi:general#/definitions/String')
 * @preserve (Part of the public API)
 */export function getSchema(typeName){return typeManager?typeManager.getSchema(typeName):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Type] Getting Schema failed. System not ready."),null)}TcHmi.Type??={},TcHmi.Type.getSchema=getSchema;