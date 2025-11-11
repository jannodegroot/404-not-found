export declare class Path<T extends string | string[] = string | string[]> {
    private readonly __original;
    private readonly __path;
    private readonly __rootParts;
    /**
     * Creates a new path object by validation the passed in path value.
     * @param path The original path value. If applicable, '..' will be resolved.
     * A path can either be a string, using '/' as the path separator, or an array, where each array item is a path item. It path is an array, its items must not contain '/'.
     * @param root Whether to treat the whole path as a root path, meaning its parents cannot be navigated to, or, if a number, how many path items belong to the root.
     */
    constructor(path: T, root?: boolean | number);
    /**
     * Returns the original value.
     */
    get original(): T;
    /**
     * Returns the length of the path array.
     */
    get length(): number;
    /**
     * Gets an individual part of the path.
     * @param index The index of the part to get.
     */
    get(index: number): string;
    /**
     * Returns the last part of the path, i. e. the name of the file or folder the path points to. Returns undefined if the path is empty.
     */
    getName(): string;
    /**
     * Returns the path in string representation.
     */
    toString(): string;
    /**
     * Returns the path in array representation.
     */
    toArray(): string[];
    /**
     * Combines this path with the given other path and returns the result as a new path.
     * @param path The path to combine this path with.
     */
    combine(path: Path | string | string[]): Path<string[]>;
    /**
     * Removes the last part of the path and returns it.
     */
    pop(): string | undefined;
    /**
     * Checks if the given path is equal to this path.
     * @param path The path to check.
     */
    equals(path: Path | string | string[]): boolean;
    /**
     * Provide an iterator.
     */
    [globalThis.Symbol.iterator](): IterableIterator<string>;
}
//# sourceMappingURL=Path.d.ts.map