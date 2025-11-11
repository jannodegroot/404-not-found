/**
 * Returns the active theme.
 * @preserve (Part of the public API)
 */
export declare function get(): string;
/**
 * Sets the active theme.
 * @param valueNew Name of the new theme.
 * @preserve (Part of the public API)
 */
export declare function set(valueNew: string): TcHmi.Errors;
/**
 * Returns all registered themes of the project.
 * @preserve (Part of the public API)
 */
export declare function getRegisteredThemes(): string[];
export interface Resource<T extends any> extends TcHmi.IResultObject {
    value: T | null;
    /** The value is generated from the control, the project or in error case from the system. */
    origin: 'control' | 'project' | 'system';
    /** Resources of a control will get "Base" if they do not implement the current theme */
    originThemeName: string;
}
declare const _get: typeof get;
declare const _set: typeof set;
declare const _getRegisteredThemes: typeof getRegisteredThemes;
type tResource<T extends any> = Resource<T>;
declare global {
    namespace TcHmi {
        /**
         * Provides functions for managing and changing themes.
         * @preserve (Part of the public API)
         */
        namespace Theme {
            let get: typeof _get;
            let set: typeof _set;
            let getRegisteredThemes: typeof _getRegisteredThemes;
            type Resource<T extends any> = tResource<T>;
        }
    }
}
export {};
//# sourceMappingURL=Theme.d.ts.map