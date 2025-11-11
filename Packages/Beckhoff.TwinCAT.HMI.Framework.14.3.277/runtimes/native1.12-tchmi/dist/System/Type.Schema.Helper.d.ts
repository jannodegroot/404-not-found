import type { SchemaSource } from './Type.Schema.js';
import type { ISchemaResultObject, ISchemaPartResultObject, ISchemaRefUriPartsResultObject } from './Type.TypeManager.js';
export declare function __resolveRefIdParts(id: string): ISchemaRefUriPartsResultObject;
export declare function __resolveRawSchemaDefinitionPart(partSchema: TcHmi.JsonSchema, sourceOrRootSchema: SchemaSource | TcHmi.JsonSchema | null | undefined, path: string, $refPath: Map<string, null>): ISchemaPartResultObject;
/**
 * Some schemas are not equal to the result of server if calling GetDefinitions with resolve: 'MergeRefs'.
 * Examples:
 *     - Resolving of custom properties. Server does not do this because it's a performance sink during validation. But we need this information in framework.
 *     - Resolving of $ref pointing to nested definitions definitions.
 *     - Handling of id field. Server forwards lower level ids sometimes but we need root level id. Maybe this will be fixed in server too.
 */
export declare function __resolveRawSchemaDefinition(id: string, sourceOrDefinitionsSchema: SchemaSource | TcHmi.JsonSchema | null | undefined, $refPath: Map<string, null>): ISchemaResultObject;
export declare function __resolveRawSchema(schema: TcHmi.JsonSchema, source: SchemaSource | null | undefined, $refPath: Map<string, null>, version?: number | null): ISchemaResultObject;
export declare function __resolveSubSchema(schema: TcHmi.JsonSchema, pathTokens: string[] | null, callback?: (this: void, data: ISchemaResultObject) => void): void;
export interface ISchemaRefUriParts {
    isRelative: boolean;
    source?: SchemaSource | null | undefined;
    path: string;
    pathTokens: (keyof TcHmi.JsonSchema)[];
}
//# sourceMappingURL=Type.Schema.Helper.d.ts.map