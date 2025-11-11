export declare class InternalSymbolManager {
    constructor();
    add(name: string, item: TcHmi.IInternalSymbolItem): void;
    remove(name: string): void;
    update(name: string, item: TcHmi.IInternalSymbolItem): void;
    write(name: string, value: any, dirtyPaths?: string[] | null, callback?: (this: InternalSymbolManager, data: IWriteResultObject) => void): void;
    read(name: string, callback?: (this: InternalSymbolManager, data: IReadResultObject) => void): void;
    getType(name: string, callback: (this: InternalSymbolManager, data: ITypeResultObject) => void): void;
    watch<T = any>(name: string, callback: (this: void, data: IWatchResultObject<T>) => void): TcHmi.DestroyFunction;
}
export interface IInternalSymbolItemEx extends TcHmi.IInternalSymbolItem {
    callbacks: IInternalSymbolEntryCallback[];
}
export interface IInternalSymbolEntryCallback {
    callback: ((this: void, data: IWatchResultObject) => void) | null;
    destroy: TcHmi.DestroyFunction;
}
export interface ITypeResultObject extends TcHmi.IResultObject {
    /** Information about the expected type as a tchmi reference name */
    type?: string;
}
export interface IReadResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    dirtyPaths?: string[];
}
export interface IWriteResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    dirtyPaths?: string[];
}
export interface IWatchResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    dirtyPaths?: string[];
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
/** Runtime Manager */
export declare const internalSymbolManager: InternalSymbolManager;
//# sourceMappingURL=InternalSymbolManager.d.ts.map