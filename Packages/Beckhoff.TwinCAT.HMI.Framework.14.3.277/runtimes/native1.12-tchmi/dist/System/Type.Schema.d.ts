/**
 * Resolves all $ref within a schema.
 * @param schema
 */
export declare function resolveRefs(schema: TcHmi.JsonSchema, source?: SchemaSource | null): undefined | TcHmi.JsonSchema;
/**
 * Generates a Javascript object or data primitive from the default values of a schema object.
 * The result contains cloned content. Feel free to to what you like with it.
 * @param schema
 */
export declare function resolveDefault(schema: TcHmi.JsonSchema): unknown;
export type SchemaSource = 'general' | 'server' | 'framework' | 'project';
//# sourceMappingURL=Type.Schema.d.ts.map