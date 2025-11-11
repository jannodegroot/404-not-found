export {};
/**
 * Please use an array.
 * @deprecated Please use an array.
 */
declare class List<T> extends Array<T> {
    /**
     * Please use an array.
     * @deprecated Please use an array.
     */
    constructor();
    /**
     * Please use an array.
     * @deprecated Please use an array.
     */
    first(predicate: ($: T) => boolean): T;
    /**
     * Please use an array.
     * @deprecated Please use an array.
     */
    firstOrDefault(predicate: ($: T) => boolean, _defaultValue?: T): T | null;
    /**
     * Please use an array.
     * @deprecated Please use an array.
     */
    remove(item: T): boolean;
    /**
     * Please use an array.
     * @deprecated Please use an array.
     */
    addRange(items: T[]): void;
    /**
     * Please use an array.
     * @deprecated Please use an array.
     */
    clearAll(): void;
    /**
     * Please use an array.
     * @deprecated Please use an array.
     */
    findIndex(predicate: ($: T, index: number, obj: T[]) => boolean): number;
}
declare const _List: typeof List;
type tList<T> = List<T>;
declare global {
    namespace TcHmi {
        let List: typeof _List;
        type List<T> = tList<T>;
    }
}
//# sourceMappingURL=List.d.ts.map