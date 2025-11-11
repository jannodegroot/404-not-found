/**
 * Encapsulates access to the browsers localStorage. Provides methods to set, get and delete Items from localStorage
 * that take and return properly typed values. Has a validation mechanism that automatically deletes items if their
 * default initial value changes between class instantiations.
 * @preserve (Part of the public API)
 */
export declare class LocalStorage<I extends {
    [key: string]: unknown;
}, V extends Partial<{
    [K in keyof I]: unknown;
}> = {
    [K in keyof I]?: never;
}> {
    protected __validationValues: V;
    protected __name: string;
    protected __storage: Partial<{
        [K in keyof I]: Item<I[K], V[K]>;
    }>;
    /**
     * Create a new storage instance with the specified name. Values that were previously stored under the same name
     * will be read from the browsers localStorage and values that no longer match their validation values are removed.
     * @param name The name of the storage instance.
     * @param validationValues Values to validate stored items. The validationValue for each item will be stored in
     * localStorage alongside the stored item. When a new storage instance is created, stored items whose validationValue
     * no longer matches the validationValue given to the constructor will be deleted. The validationValue for each item
     * should be chosen to be an attribute or similar value, that, when changed during engineering in the creator
     * overrides the stored item value. This way, attributes that are changed in the creator are not overridden again by
     * values from localStorage when the liveview is reloaded or a deployed HMI is updated.
     * @preserve (Part of the public API)
     */
    constructor(name: string, validationValues: V);
    /**
     * Create a new storage instance for the given control. The name of the instance will be derived from the control id.
     * Values that were previously stored under the same name will be read from the browsers localStorage and values
     * that no longer match their validation values are removed. For validation to function properly, storage instances
     * should be created in the __init() method of controls.
     * @param control The control for which to create the storage instance.
     * @param validationValues Values to validate stored items. The validationValue for each item will be stored in
     * localStorage alongside the stored item. When a new storage instance is created, stored items whose validationValue
     * no longer matches the validationValue given to the constructor will be deleted. The validationValue for each item
     * should be chosen to be an attribute or similar value, that, when changed during engineering in the creator
     * overrides the stored item value. This way, attributes that are changed in the creator are not overridden again by
     * values from localStorage when the liveview is reloaded or a deployed HMI is updated.
     * @preserve (Part of the public API)
     */
    constructor(control: TcHmi.Controls.System.baseTcHmiControl, validationValues: V);
    /**
     * Sets a stored value for the current user. Returns a boolean that indicates if writing to localStorage was successful.
     * @param key The key of the value to set.
     * @param value The value to set.
     * @preserve (Part of the public API)
     */
    set<K extends keyof I>(key: K, value: I[K]): boolean;
    /**
     * Sets a stored value for the current user only if a stored value is already set or the new value to be stored
     * is not equal to the validationValue. This is useful if you want to avoid writing a value into localStorage if
     * that value is already equal to the default value anyway. Returns a boolean that indicates if a new value was set.
     * @param key The key of the value to set.
     * @param value The value to set.
     * @preserve (Part of the public API)
     */
    setWithValidation<K extends keyof I>(key: K, value: I[K]): boolean;
    /**
     * Returns the stored value associated with the given key for the current user.
     * @param key The key to read.
     * @preserve (Part of the public API)
     */
    get<K extends keyof I>(key: K): I[K] | undefined;
    /**
     * Deletes a stored value for the current user.
     * @param key The key of the value to delete.
     * @preserve (Part of the public API)
     */
    delete<K extends keyof I>(key: K): void;
}
interface BaseItem<S> {
    users?: TcHmi.Dictionary<S>;
}
interface ValidatedItem<S, V> extends BaseItem<S> {
    validation: {
        expectedValue: V;
    };
}
export type Item<S, V = void> = BaseItem<S> | ValidatedItem<S, V>;
declare const _LocalStorage: typeof LocalStorage;
type tLocalStorage<I extends {
    [key: string]: unknown;
}, V extends Partial<{
    [K in keyof I]: unknown;
}> = {
    [K in keyof I]?: never;
}> = LocalStorage<I, V>;
type tBaseItem<S> = BaseItem<S>;
type tValidatedItem<S, V> = ValidatedItem<S, V>;
declare global {
    namespace TcHmi {
        let LocalStorage: typeof _LocalStorage;
        type LocalStorage<I extends {
            [key: string]: unknown;
        }, V extends Partial<{
            [K in keyof I]: unknown;
        }> = {
            [K in keyof I]?: never;
        }> = tLocalStorage<I, V>;
        namespace LocalStorage {
            type BaseItem<S> = tBaseItem<S>;
            type ValidatedItem<S, V> = tValidatedItem<S, V>;
        }
    }
}
export {};
//# sourceMappingURL=LocalStorage.d.ts.map