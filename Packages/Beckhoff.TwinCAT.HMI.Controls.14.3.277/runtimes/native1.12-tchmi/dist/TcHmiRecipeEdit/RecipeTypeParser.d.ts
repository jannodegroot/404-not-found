import type { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
export declare class RecipeTypeParser {
    private __recipeManagementDomain;
    private __parentControl?;
    /**
     * Create a new RecipeTypeParser.
     * @param __recipeManagementDomain The domain of the recipe management extension.
     * @param __parentControl The control owning the recipe type parser.
     */
    constructor(__recipeManagementDomain: string | null, __parentControl?: (TcHmiControl.Control | null) | undefined);
    /**
     * Parse a recipe type.
     * @param recipeType The recipe type to parse.
     */
    parse(recipeTypeName: string, recipeType?: TcHmi.Server.RecipeManagement.RecipeType): Promise<ParsedRecipeType>;
    /**
     * Gets the requested recipe types from the server.
     * @param names The names of the recipe types to get.
     */
    protected __getRecipeTypes(names: string[]): Promise<import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.RecipeManagement").RecipeType[]>;
    /**
     * Resolves a recipe types inheritance chain and puts the members of the recipe type into maps according to their group.
     * @param recipeType The recipe type to parse.
     */
    protected __parseRecipeType(recipeTypeName: string, recipeType: TcHmi.Server.RecipeManagement.RecipeType): Promise<ParsedRecipeType>;
    /**
     * Gets the JSON schemas for the given symbols.
     * @param symbols The symbol names to get schemas for.
     */
    protected __getSchemas(symbols: Set<string>): Promise<Map<any, any>>;
}
export interface ParsedRecipeType {
    name: string;
    ungroupedMembers: RecipeTypeMember[];
    memberGroups: Map<string, RecipeTypeMember[]>;
    membersEnabled: boolean;
    comment?: string;
}
interface RecipeTypeMemberBase {
    name: string;
    comment?: string;
    enabled: boolean;
    group?: string;
    order?: number;
}
export interface RecipeTypeMemberSymbol extends RecipeTypeMemberBase {
    /** Name of the symbol of this entry */
    symbol: string;
    /** The type of the symbol */
    symbolType: TcHmi.JsonSchema;
    /** defaultValue for this symbol */
    defaultValue: any;
    /** Schema to restrict the value of the symbol further */
    schema?: TcHmi.JsonSchema;
    /** Engineering unit for this symbol */
    unit?: string;
}
export interface RecipeTypeMemberRecipe extends RecipeTypeMemberBase {
    recipeType: string;
}
export type RecipeTypeMember = RecipeTypeMemberSymbol | RecipeTypeMemberRecipe;
export {};
//# sourceMappingURL=RecipeTypeParser.d.ts.map