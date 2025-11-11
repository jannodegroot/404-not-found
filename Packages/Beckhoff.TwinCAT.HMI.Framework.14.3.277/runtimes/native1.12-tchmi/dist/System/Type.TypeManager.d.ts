import type { ISchemaRefUriParts } from './Type.Schema.Helper.js';
import type { SchemaSource } from './Type.Schema.js';
export declare const SharedCacheRaw: Map<SchemaSource, TcHmi.JsonSchema>;
export declare const SharedCacheResolved: Map<string, TcHmi.JsonSchema>;
export declare class TypeManager {
    constructor();
    /**
     * Resolves schema definitions from server.
     * Will either watch for changes or read them once depending on the configuration in tchmiconfig.json.
     */
    doWatchOrResolveSchemaDefinitions(callback?: null | ((this: TypeManager, data: TcHmi.IResultObject) => void)): void;
    doForceSchemaDefinitions(callback?: null | ((this: TypeManager, data: TcHmi.IResultObject) => void)): void;
    /**
     * Returns the schema object for a type definition.
     * Can be used for example with 'tchmi:general#/definitions/String'
     * Returns null on error
     * @param id Name of the type reference (for example 'tchmi:general#/definitions/String')
     */
    getSchema(id: string): TcHmi.JsonSchema | null;
    /**
     * Returns the schema object for a type definition.
     * Result object includes an error code
     * Can be used for example with 'tchmi:general#/definitions/String'
     * @param id Name of the type reference (for example 'tchmi:general#/definitions/String')
     */
    getSchemaEx(id: string): ISchemaResultObject;
}
export interface ISchemaResultObject extends TcHmi.IResultObject {
    schema?: TcHmi.JsonSchema;
}
export interface ISchemaPartResultObject extends TcHmi.IResultObject {
    part?: TcHmi.JsonSchema;
}
export interface ISchemaRefUriPartsResultObject extends TcHmi.IResultObject {
    parts?: ISchemaRefUriParts;
}
/** Runtime Manager */
export declare const typeManager: TypeManager;
//# sourceMappingURL=Type.TypeManager.d.ts.map