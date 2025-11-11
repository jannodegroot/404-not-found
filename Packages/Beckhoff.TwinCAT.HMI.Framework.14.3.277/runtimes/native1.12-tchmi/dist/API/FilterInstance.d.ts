/**
 * The strategy to use while recursing into a tree structure.
 */
export declare enum Strategy {
    /**
     * Children will be evaluated first. If a child matches the filter, its parent will also match the filter.
     */
    DepthFirst = 0,
    /**
     * Children will only be evaluated after the parent itself was tested. If a parent item does not match the
     * filter, none of its children will match.
     */
    BreadthFirst = 1
}
/**
 * Allows users to build filters and filter data with them.
 */
export declare class FilterInstance<T = any> {
    private __filter;
    private __schema;
    private __parsedFilter;
    private __wrapInBrackets;
    /**
     * Creates a new empty filter. An empty filter will match any data.
     * @param schema Optional schema that describes the filter. Necessary if you want to compare the values of
     * dates, since the filter needs to know if a given string should be interpreted as a date in ISO-8601 format.
     */
    constructor(schema?: TcHmi.JsonSchema);
    /**
     * Creates a copy of an existing filter instance.
     * @param filter The filter instance to copy.
     * @param schema Optional schema that describes the filter. If omitted, the schema of the existing filter
     * instance will be used. Necessary if you want to compare the values of dates, since the filter needs to know
     * if a given string should be interpreted as a date in ISO-8601 format.
     */
    constructor(filter: FilterInstance, schema?: TcHmi.JsonSchema);
    /**
     * Creates a new filter instance based on an existing filter definition.
     * @param filter The filter definition to use.
     * @param schema Optional schema that describes the filter. Necessary if you want to compare the values of
     * dates, since the filter needs to know if a given string should be interpreted as a date in ISO-8601 format.
     */
    constructor(filter: TcHmi.Filter, schema?: TcHmi.JsonSchema);
    /**
     * Creates a new filter instance based on a single comparison.
     * @param comparison The comparison to use.
     * @param schema Optional schema that describes the filter. Necessary if you want to compare the values of
     * dates, since the filter needs to know if a given string should be interpreted as a date in ISO-8601 format.
     */
    constructor(comparison: TcHmi.Comparison, schema?: TcHmi.JsonSchema);
    /**
     * Creates a new filter instance based on a single comparison.
     * @param path The path of the property that should be compared. The special values '{value}' and '{key}' can be
     * used to refer to the items value or key directly.
     * @param comparator How the comparison should be done.
     * @param value The value to compare against.
     * @param schema Optional schema that describes the filter. Necessary if you want to compare the values of
     * dates, since the filter needs to know if a given string should be interpreted as a date in ISO-8601 format.
     */
    constructor(path: '{value}' | '{key}' | string, comparator: TcHmi.Comparison['comparator'], value: TcHmi.Comparison['value'], schema?: TcHmi.JsonSchema);
    /**
     * Returns the current filter definition.
     */
    getFilter(): TcHmi.Filter;
    /**
     * Returns the filter schema.
     */
    getSchema(): TcHmi.JsonSchema | null;
    /**
     * Combines this filter with another filter using a logical and operator.
     * @param filter The filter to append.
     */
    and(filter: TcHmi.Filter | FilterInstance): this;
    /**
     * Combines this filter with a new comparison using a logical and operator.
     * @param comparison The comparison to append.
     */
    and(comparison: TcHmi.Comparison): this;
    /**
     * Combines this filter with a new comparison using a logical and operator.
     * @param path The path of the property that should be compared. The special values '{value}' and '{key}' can be
     * used to refer to the items value or key directly.
     * @param comparator How the comparison should be done.
     * @param value The value to compare against.
     */
    and(path: '{value}' | '{key}' | string, comparator: TcHmi.Comparison['comparator'], value: TcHmi.Comparison['value']): this;
    /**
     * Combines this filter with another filter using a logical or operator.
     * @param filter The filter to append.
     */
    or(filter: TcHmi.Filter | FilterInstance): this;
    /**
     * Combines this filter with a new comparison using a logical or operator.
     * @param comparison The comparison to append.
     */
    or(comparison: TcHmi.Comparison): this;
    /**
     * Combines this filter with a new comparison using a logical or operator.
     * @param path The path of the property that should be compared. The special values '{value}' and '{key}' can be
     * used to refer to the items value or key directly.
     * @param comparator How the comparison should be done.
     * @param value The value to compare against.
     */
    or(path: '{value}' | '{key}' | string, comparator: TcHmi.Comparison['comparator'], value: TcHmi.Comparison['value']): this;
    /**
     * Combines this filter with another filter or a comparison using a given logical operator.
     * @param logic Whether to use and or or logic.
     * @param filter The filter or comparison to combine this filter with.
     */
    private __append;
    /**
     * Wraps the entire filter in brackets.
     */
    wrapInBrackets(): this;
    /**
     * Compiles the filter. Returns an object indicating if any error occured during compilation.
     */
    compile(): TcHmi.IResultObject;
    /**
     * Tests whether the given candidate matches the filter.
     * @param candidate The candidate to test.
     * @param key If the candidat originated in a collection, for example an array, you can specify the key or index
     * of the candidate to support filters that filter by the key.
     */
    test(candidate: T, key?: string | number): boolean;
    /**
     * Filter an array. Returns a new array which contains only the items that match the filter.
     * @param array The array to filter.
     */
    filter<D extends T[]>(array: D): D;
    /**
     * Filter a dictionary. Returns a new dictionary which contains only the items that match the filter.
     * @param dictionary The dictionary to filter.
     */
    filter<D extends TcHmi.Dictionary<T>>(dictionary: D): D;
    /**
     * Filter a map. Returns a new map which contains only the items that match the filter.
     * @param map The map to filter.
     */
    filter<D extends Map<string | number, T>>(map: D): D;
    /**
     * Filter a set. Returns a new set which contains only the items that match the filter.
     * @param set The set to filter.
     */
    filter<D extends Set<T>>(set: D): D;
    /**
     * Filter an array. Returns a new array which contains only the items that match the filter and a map array that
     * contains the original indices of the filtered data.
     * @param array The array to filter.
     */
    filterWithMap<D extends T[]>(array: D): {
        data: D;
        map: number[];
    };
    /**
     * Recursively filter a tree by applying the filter to all levels of the structure. Returns the filtered data.
     * @param tree The tree to filter.
     * @param childrenProperty The name of the property that contains child items of each tree node.
     * @param strategy The strategy to use. DepthFirst will include items that don't match the filter if they have
     * children that match, while BreadthFirst will only include items that directly match the filter, regardless of
     * their children.
     */
    filterTree<D extends Tree<T, C>, C extends keyof D[number]>(tree: D, childrenProperty: C, strategy?: Strategy): D;
    /**
     * Recursively filter a tree by applying the filter to all levels of the structure. Returns the filtered data
     * and a map array that contains the original indices of the filtered data.
     * @param tree The tree to filter.
     * @param childrenProperty The name of the property that contains child items of each tree node.
     * @param strategy The strategy to use. DepthFirst will include items that don't match the filter if they have
     * children that match, while BreadthFirst will only include items that directly match the filter, regardless of
     * their children.
     */
    filterTreeWithMap<D extends Tree<T, C>, C extends keyof D[number]>(tree: D, childrenProperty: C, strategy?: Strategy): {
        data: D;
        map: TcHmi.HierarchicalFilterMap[];
    };
    /**
     * Perform depth-first filtering.
     * @param tree The tree to filter.
     * @param childrenProperty The name of the property that contains child items of each tree node.
     * @param parsedFilter The filter to use.
     * @param path Set to an empty array to generate a filter map. Omit to skip filter map generation.
     */
    private __depthFirst;
    /**
     * Perform breadth-first filtering.
     * @param tree The tree to filter.
     * @param childrenProperty The name of the property that contains child items of each tree node.
     * @param parsedFilter The filter to use.
     * @param path Set to an empty array to generate a filter map. Omit to skip filter map generation.
     */
    private __breadthFirst;
    static Strategy: typeof Strategy;
}
export type Tree<D, C extends string | number | symbol> = ({
    [children in C]?: Tree<D, C>;
} & D)[];
declare const _FilterInstance: typeof FilterInstance;
type tStrategy = Strategy;
type tFilterInstance<T = any> = FilterInstance<T>;
type tTree<D, C extends string | number | symbol> = Tree<D, C>;
declare global {
    namespace TcHmi {
        let FilterInstance: typeof _FilterInstance;
        type FilterInstance<T = any> = tFilterInstance<T>;
        namespace FilterInstance {
            type Strategy = tStrategy;
            type Tree<D, C extends string | number | symbol> = tTree<D, C>;
        }
    }
}
export {};
//# sourceMappingURL=FilterInstance.d.ts.map