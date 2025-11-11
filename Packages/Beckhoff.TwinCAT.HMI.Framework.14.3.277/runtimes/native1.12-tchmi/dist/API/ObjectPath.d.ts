/**
 * Convenience functionality for dealing with TwinCAT HMI object path syntax.
 * @preserve (Part of the public API)
 */
export declare class ObjectPath implements Iterable<string | number> {
    /**
     * Stores the path as a string. This is only created if the constructor was called with a string or the toString
     * method was called. It will be reset to null if the path is modified.
     */
    private __pathString;
    /**
     * Stores the path as an array of property accessors. If the array does not contain any numbers, that will be
     * indicated by isTokens.
     */
    private __path;
    /**
     * Create an empty object path.
     * @preserve (Part of the public API)
     */
    constructor();
    /**
     * Create an object path instance from a path in string format. A path in string format uses '::' to denote
     * object property access and '[]' to denote array element access. For example: 'foo::bar[1]'.
     * @param path The path in string format.
     * @preserve (Part of the public API)
     */
    constructor(path: string);
    /**
     * Create an object path instance from an array of tokens. In an array of tokens, strings denote object property
     * access, while numbers denote array element access. For example: ['foo', 'bar', 1]. To support legacy
     * behavior, array element access can also be specified by enclosing a number in square brackets. For example:
     * ['foo', 'bar', '[1]'].
     * @param tokens The token array.
     * @preserve (Part of the public API)
     */
    constructor(tokens: (string | number)[]);
    /**
     * Append the given tokens to the back of the path. A token can be a single object property accessor, a single
     * array element accessor using a number or string containing a number enclosed in brackets, or a complete path
     * in string format, which will be parsed and its individual parts added to the object path instance.
     * @param tokens The tokens to add.
     * @returns The new length of the path.
     * @preserve (Part of the public API)
     */
    push(...tokens: (string | number)[]): number;
    /**
     * Removes the last property accessor from the back of the path and returns it. Object property accessors are
     * returned as strings, while array element accessors are returned as numbers.
     * @returns The removed property accessor.
     * @preserve (Part of the public API)
     */
    pop(): string | number | undefined;
    /**
     * Removes the last path token from the back of the path and returns it. Object property accessors are returned
     * as strings, while array element accessors are returned as strings containing a number enclosed in brackets.
     * @returns The removed path token.
     * @preserve (Part of the public API)
     */
    popAsPathToken(): string | undefined;
    /**
     * Append the given tokens to the front of the path. A token can be a single object property access, a single
     * array element access using a number or string containing a number enclosed in brackets, or a complete path in
     * string format, which will be parsed and its individual parts added to the object path instance.
     * @param tokens The tokens to add.
     * @returns The new length of the path.
     * @preserve (Part of the public API)
     */
    unshift(...tokens: (string | number)[]): number;
    /**
     * Removes the first property accessor from the front of the path and returns it. Object property accessors are
     * returned as strings, while array element accessors are returned as numbers.
     * @returns The removed property accessor.
     * @preserve (Part of the public API)
     */
    shift(): string | number | undefined;
    /**
     * Removes the first path token from the front of the path and returns it. Object property accessors are
     * returned as strings, while array element accessors are returned as strings containing a number enclosed
     * in brackets.
     * @returns The removed path token.
     * @preserve (Part of the public API)
     */
    shiftAsPathToken(): string | undefined;
    /**
     * Add the given tokens to the front or back of the path.
     * @param tokens The tokens to add.
     * @param inFront Set to true to add the tokens to the front. Defaults to false.
     * @returns The new length.
     */
    private __add;
    /**
     * Removes the first or last token and returns it.
     * @param inFront Set to true to remove the first token. Defaults to false.
     * @returns The removed token.
     */
    private __remove;
    /**
     * Returns a copy of a section of the path.
     * For both start and end, a negative index can be used to indicate an offset from the end of the path.
     * For example, -2 refers to the second to last token of the path.
     * @param start The beginning index of the specified portion of the path.
     * If start is undefined, then the slice begins at index 0.
     * @param end The end index of the specified portion of the path. This is exclusive of the token at the index 'end'.
     * If end is undefined, then the slice extends to the end of the path.
     */
    slice(start?: number, end?: number): ObjectPath;
    /**
     * Returns the property accessor at the given index.
     * @param index The index.
     * @returns The property accessor at the given index.
     * @preserve (Part of the public API)
     */
    get(index: number): number | string | undefined;
    /**
     * Returns the property accessor at the given index. Array item accessors are returned as a string containing a
     * number enclosed in brackets.
     * @param index The index.
     * @returns The property accessor at the given index.
     * @preserve (Part of the public API)
     */
    getAsPathToken(index: number): string | undefined;
    /**
     * The current length of the path.
     * @preserve (Part of the public API)
     */
    get length(): number;
    /**
     * Provides an IterableIterator for the object path. Iterates over all property accessors.
     * @returns An IterableIterator.
     * @preserve (Part of the public API)
     */
    [window.Symbol.iterator](): IterableIterator<string | number>;
    /**
     * Reads the property of the given object or array that is indicated by the object path. Does not create a
     * clone.
     * @param target The object, array or string to read from.
     * @returns The value of the property that was read.
     * @preserve (Part of the public API)
     */
    readFrom(target: TcHmi.Dictionary<any> | any[] | string): any;
    /**
     * Writes the given value to the property of the given object or array that is indicated by the object path.
     * @param target The object or array to write to.
     * @param value The value to write.
     * @preserve (Part of the public API)
     */
    writeTo(target: TcHmi.Dictionary<any> | any[] | string, value: any): void;
    /**
     * Applies a single property accessor to the given target. Returns the property that is indicated by the
     * property accessor.
     * @param target The target to apply the property accessor to.
     * @param propertyAccessor The property accessor to apply.
     * @returns The property that is indicated by the property accessor.
     */
    private __applyPropertyAccessor;
    /**
     * Returns the path in string format.
     * @returns The path in string format.
     * @preserve (Part of the public API)
     */
    toString(): string;
    /**
     * Converts the object path to tokens. Object property accessors are defined as strings, array item accessors
     * are defined as strings containig a number enclosed in brackets.
     * @returns The path in token array format.
     * @preserve (Part of the public API)
     */
    toPathTokens(): string[];
    /**
     * Splits the object path into tokens but converts tokens like [0] into 0 which can directly be used as array
     * item accessors. Object property accessors are defined as strings.
     * @returns The path in property accessors format.
     * @preserve (Part of the public API)
     */
    toPropertyAccessors(): (string | number)[];
    /**
     * Splits the object path into tokens.
     * @param pathString The string to split.
     * @param options Options for the split operation.
     * @param options.noArrayBrackets Set to true to convert strings containing numbers in brackets to numbers.
     * Defaults to false.
     * @returns The path as an array in token or property accessor format.
     */
    private __split;
    /** Returns a string representation of a function. */
    static toString(): string;
    /**
     * Returns the path in string format.
     * @param tokens The path as an array in token or property accessor format.
     * @returns The path in string format.
     * @preserve (Part of the public API)
     */
    static toString(tokens: (string | number)[]): string;
    /**
     * Converts the object path to tokens. Object property accessors are defined as strings, array item accessors
     * are defined as strings containig a number enclosed in brackets.
     * @param path The path to convert. A path in string format uses '::' to denote object property access and '[]'
     * to denote array element access. For example: 'foo::bar[1]'.
     * @returns The path in token array format.
     * @preserve (Part of the public API)
     */
    static toPathTokens(path: string): string[];
    /**
     * Splits the object path into tokens but converts tokens like [0] into 0 which can directly be used as array
     * item accessors. Object property accessors are defined as strings.
     * @param path The path to convert. A path in string format uses '::' to denote object property access and '[]'
     * to denote array element access. For example: 'foo::bar[1]'.
     * @returns The path in property accessors format.
     * @preserve (Part of the public API)
     */
    static toPropertyAccessors(path: string): (string | number)[];
}
declare const _ObjectPath: typeof ObjectPath;
type tObjectPath = ObjectPath;
declare global {
    namespace TcHmi {
        let ObjectPath: typeof _ObjectPath;
        type ObjectPath = tObjectPath;
    }
}
export {};
//# sourceMappingURL=ObjectPath.d.ts.map