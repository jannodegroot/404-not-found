export declare class Filter {
    private constructor();
    /**
     * Smallest such that 1.0 + floatEpsilon != 1.0. See https://en.wikipedia.org/wiki/Machine_epsilon
     * We use single precision here because the often used PLC type REAL is single precision.
     */
    private static readonly __floatEpsilon;
    /**
     * Converts a filter to an expression tree.
     * @param data The filter to convert
     */
    static parse(data: TcHmi.Filter | null, schema?: TcHmi.JsonSchema | null): Filter;
    /**
     * Determine whether the given candidate matches this filter.
     * @param candidate The candidate to test.
     */
    test(candidate: any, key?: string | number): boolean;
    /**
     * Resolves an equals comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveEquals;
    /**
     * Resolves an equals not comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveEqualsNot;
    /**
     * Resolves a less than comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveLessThan;
    /**
     * Resolves a greater than comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveGreaterThan;
    /**
     * Resolves a less than or equals comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveLessThanOrEquals;
    /**
     * Resolves a greater than or equals comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveGreaterThanOrEquals;
    /**
     * Resolves a contains comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveContains;
    /**
     * Resolves a contains not comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveContainsNot;
    /**
     * Resolves an equals ignore case comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveEqualsIgnoreCase;
    /**
     * Resolves an equals not ignore case comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveEqualsNotIgnoreCase;
    /**
     * Resolves a contains ignore case comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveContainsIgnoreCase;
    /**
     * Resolves a contains not ignore case comparison.
     * @param left The datum to test.
     * @param right The comparison value to test against.
     */
    private __resolveContainsNotIgnoreCase;
}
export interface Comparison extends TcHmi.Comparison {
    originalValue?: string | number | boolean | Date | null;
}
//# sourceMappingURL=Filter.d.ts.map