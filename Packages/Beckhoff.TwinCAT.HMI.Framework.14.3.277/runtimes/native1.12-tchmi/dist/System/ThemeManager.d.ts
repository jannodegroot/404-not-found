import type { Resource } from '../API/Theme.js';
/**
 * Handles the implicit values of a control
 * Values of a control are defined:
 *
 * initial only: Value explicit in the HTML
 * defined in the project: Value implicit defined for a control class
 * defined in the project: Value implicit defined for a theme for a control type
 *
 * defined by the control: Value implicit defined for a theme for a control type
 * defined by the control: Value implicit defined from the defaultValueInternal of a control type (with resolved inheritance)
 */
export declare class ThemeManager {
    constructor();
    /**
     * Inits the local file caches
     */
    __clearProjectThemeUrl(cleanPath: string): void;
    /**
     * Gets the active Theme
     */
    getTheme(): string;
    /**
     * Sets a new Theme
     * @param valueNew
     */
    setTheme(valueNew: string, processTheme: boolean): TcHmi.Errors;
    /**
     * @param controlDescr
     */
    registerControlThemeFiles(controlDescr: TcHmi.ControlDescription): void;
    /**
     * Fill missing values in all themes files when the inheritance parent has it set
     * Note: no harm is done with multiple calls to this file
     */
    private __resolveControlInheritance;
    /**
     * Do we have an active json async fetch active?
     */
    __asyncJsonLoadCount: number;
    /**
     * Disables inactive theme
     * Load and activate control and project theme
     */
    processActiveTheme(callback?: (this: void, data: TcHmi.IResultObject) => void): void;
    /**
     * Retrigger usercontrols
     */
    retriggerUserControls(): void;
    /**
     * Parses every source of implicit properties and returns this or null
     * Can have different value after the event onThemeDataChanged.
     * The order of resources are
     * 1) control class
     * 2) theme definition of the control type in project
     * 3) theme definition in control
     * 4) defaultValueInternal in Description.json of the control
     * @param control
     * @param propertyName
     * @template T Type of the default value.
     */
    getDefaultPropertyValue<T>(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): Resource<T>;
    /**
     * Gets a themed resource.
     * Parses every source of properties and returns this or null
     * Can have different value after the event onThemeDataChanged.
     * The order of resources are
     * 1) control class
     * 2) theme definition of the control type in project
     * 3) theme definition in control
     *
     * @param control Control which needs the resource
     * @param resourceName name of the resource
     * @returns returns the resource or null
     * @template T Type of the value.
     */
    getThemeResource<T>(control: TcHmi.Controls.System.baseTcHmiControl, resourceName: string): Resource<T>;
    /**
     * @param control
     * @param propertyName
     */
    watchAttributeDefaults(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): void;
    /**
     * Start watcher to remove a theme lock on manual variable set
     * @param control
     */
    startAttributeSetterWatcher(control: TcHmi.Controls.System.baseTcHmiControl): void;
    /**
     * @param control
     * @param propertyName
     */
    unwatchAttributeDefaults(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): void;
    /**
     * Process the themed resources of project and control level and call existing callbacks.
     */
    processThemedResources(): void;
    /**
     * Get a the value of a themed resource.
     * @param name Name of the themed resource
     * @param namespaceTokens Namespace of the themed resource.
     */
    getThemedResource(name: string, namespaceTokens: string[]): any;
    /**
     * Get the type of a themed resource
     * @param name
     * @param namespaceTokens
     * @param callback
     */
    getThemedResourceType(name: string, namespaceTokens: string[], callback: (this: ThemeManager, data: ITypeResultObject) => void): void;
    /**
     * Watch a themed resource by namespace and name
     * @param name The name of the themed resource.
     * @param namespaceTokens The namespace of the themed resource.
     * @param callback The function call when the themed resources value has changed.
     */
    watchThemedResource<T = any>(name: string, namespaceTokens: string[], callback: (this: void, data: IWatchResultObject<T>) => void): TcHmi.DestroyFunction;
}
export interface IThemedResource {
    /** The value of the themed resource for a specific theme. Can be undefined if the themed resource has no value defined for a theme. */
    value: any;
    dirtyPaths?: string[];
    callbacks: IThemedResourceEntryCallback[];
}
export interface IThemedResourceEntryCallback {
    callback: ((this: void, data: IWatchResultObject) => void) | null;
    destroy: TcHmi.DestroyFunction;
}
export interface ITypeResultObject extends TcHmi.IResultObject {
    type?: string;
}
export interface IWatchResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    dirtyPaths?: string[];
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
/** Runtime Manager */
export declare const themeManager: ThemeManager;
//# sourceMappingURL=ThemeManager.d.ts.map