/**
 * Generates a Javascript object or data primitive from the default values of a schema object.
 * Hint:
 * If you have a type definition string you can use TcHmi.Type.getSchema() API to get the schema object.
 * @param schema Schema so resolve
 * @preserve (Part of the public API)
 */
export declare function resolveDefault(schema: TcHmi.JsonSchema): any;
/**
 * Resolves the effective type value/s of a schema except those with additional conversion rules.
 * Hint:
 * If you have a type definition string you can use TcHmi.Type.getSchema() API to get the schema object.
 * @param schema Schema to resolve
 * @preserve (Part of the public API)
 */
export declare function resolveType(schema: TcHmi.JsonSchema): undefined | TcHmi.JsonDataTypeNames | TcHmi.JsonDataTypeNames[];
/**
 * Recurse a schema with its corresponding data
 * @param schema Schema to iterate
 * @param data data which is defined by the schema
 * @param action callback to call on each part
 */
export declare function recurseThroughSchema<T = unknown>(schema: TcHmi.JsonSchema, data: T, action: (subschema: TcHmi.JsonSchema, subdata: unknown, path: string) => RecurseSchemaResult<unknown>): RecurseSchemaResult<T>;
export interface RecurseSchemaResult<T extends any = any> {
    changedValue: boolean;
    value: T;
}
/**
 * Tests whether the given value fits into the type specified by the provided schema.
 * @param value The value to test.
 * @param schema The schema to test against.
 */
export declare function matchesSchemaType(value: any, schema: TcHmi.JsonSchema): boolean;
declare const _resolveDefault: typeof resolveDefault;
declare const _resolveType: typeof resolveType;
declare const _recurseThroughSchema: typeof recurseThroughSchema;
declare const _matchesSchemaType: typeof matchesSchemaType;
type tRecurseSchemaResult<T extends any = any> = RecurseSchemaResult<T>;
declare global {
    namespace TcHmi.Type {
        namespace Schema {
            const resolveDefault: typeof _resolveDefault;
            const resolveType: typeof _resolveType;
            const recurseThroughSchema: typeof _recurseThroughSchema;
            const matchesSchemaType: typeof _matchesSchemaType;
            type RecurseSchemaResult<T extends any = any> = tRecurseSchemaResult<T>;
        }
    }
}
export {};
//# sourceMappingURL=Type.Schema.d.ts.map