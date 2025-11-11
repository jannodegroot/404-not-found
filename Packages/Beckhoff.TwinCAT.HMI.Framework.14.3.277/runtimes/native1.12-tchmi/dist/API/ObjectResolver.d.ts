/**
 * @preserve (Part of the public API)
 */
export declare class ObjectResolver<T extends object | null> {
    /**
     * Creates a new ObjectResolver
     * @param obj Object to resolve
     * @param parentControl When a reference to a logical parent control is defined, calls to resolve or watch will be delayed, when they contain a symbol reference of type Control,
     * until the controls parent partial (View, Content, UserControl) is initialized to guarantee that symbols of type Control which exist in this scope are available.
     */
    constructor(obj: TcHmi.AllowSymbolExpressionsAsValues<T>, parentControl?: TcHmi.Controls.System.baseTcHmiControl | null);
    /**
     * Creates a new ObjectResolver
     * @param obj Object to resolve
     * @param options Options
     * @param options.schema Schema that describes the expected object structure and types.
     * @param options.parentControl When a reference to a logical parent control is defined, calls to resolve or watch will be delayed, when they contain a symbol reference of type Control,
     * until the controls parent partial (View, Content, UserControl) is initialized to guarantee that symbols of type Control which exist in this scope are available.
     */
    constructor(obj: TcHmi.AllowSymbolExpressionsAsValues<T>, options?: IOptions | null);
    /**
     * Resolves all symbol expression refs in the current object.
     * @param callback Callback will be called after success or failure
     * @preserve (Part of the public API)
     */
    resolve(callback?: (this: void, data: IResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * Watches for changes of symbol expressions in the current object und returns the object with updated values.
     * Returns a destroy function to remove the watch.
     * @param callback Callback will be called after success or failure
     * @preserve (Part of the public API)
     */
    watch(callback?: (this: void, data: IWatchResultObject<T>) => void): TcHmi.DestroyFunction;
    /**
     * Writes to the current object instance and reflects changes to possibly existing symbol expressions.
     * @param obj The new object value
     * @param dirtyPaths Paths in the object that have been changed. If not defined changes will be detected automatically.
     * @param callback Will be called when the object (and all symbols mentioned within the object) have completed writing.
     */
    write(obj: TcHmi.AllowSymbolExpressionsAsValues<T>, dirtyPaths?: string[], callback?: (data: TcHmi.IResultObject) => void): void;
    /**
     * Destroys the current object.
     * @preserve (Part of the public API)
     */
    destroy(): void;
}
export interface IWatchResultObject<T extends object | null> extends TcHmi.IResultObject {
    value?: T;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
export interface IResultObject<T extends object | null> extends TcHmi.IResultObject {
    value?: T;
}
export interface IOptions {
    /**
     * When a reference to a logical parent control is defined, calls to resolve or watch will be delayed, when they contain a symbol reference of type Control,
     * until the controls parent partial (View, Content, UserControl) is initialized to guarantee that symbols of type Control which exist in this scope are available.
     */
    parentControl?: TcHmi.Controls.System.baseTcHmiControl | null;
    /** Schema that describes the expected object structure and types. When defined "type" will be ignored. */
    schema?: TcHmi.JsonSchema;
    /**
     * TwinCAT HMI Type Definition string that will be used to resolve the related schema. Will be ignored when "schema" is defined.
     */
    type?: string;
}
declare const _ObjectResolver: typeof ObjectResolver;
type tObjectResolver<T extends object | null> = ObjectResolver<T>;
type tIWatchResultObject<T extends object | null> = IWatchResultObject<T>;
type tIResultObject<T extends object | null> = IResultObject<T>;
type tIOptions = IOptions;
declare global {
    namespace TcHmi {
        let ObjectResolver: typeof _ObjectResolver;
        type ObjectResolver<T extends object | null> = tObjectResolver<T>;
        namespace ObjectResolver {
            type IWatchResultObject<T extends object | null> = tIWatchResultObject<T>;
            type IResultObject<T extends object | null> = tIResultObject<T>;
            type IOptions = tIOptions;
        }
    }
}
export {};
//# sourceMappingURL=ObjectResolver.d.ts.map