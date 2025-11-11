import type { IControlRegistration } from '../System/_Types.js';
/** An Array and Map with key 1.10 legacy control type name, 1.12 control type name and 1.12 qualified control type name */
export declare const registrations: {
    /** Map key is the 1.10 legacy control type name, 1.12 control type name and 1.12 qualified control type name */
    map: Map<string, IControlRegistration<TcHmi.Controls.System.baseTcHmiControl>>;
    /** All registrations of all controls */
    array: IControlRegistration[];
};
/**
 * Inject object at specific path.
 * Throws if there is already something at this position.
 * @param fullName path to the object in window
 * @param injectObj Object to inject
 */
export declare function injectInGlobalObject(fullName: string, injectObj: object): void;
/**
 * DEPRECATED
 * Register a control.
 * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
 * @param controlTypeName Name of the Control type.
 * @param constructor Constructor which generates the TcHmi Control.
 * @param directory Directory of the Control (base path is the Controls directory).
 * @param template Template file of the Control (base path is the Controls directory).
 * @template C defines the type for the control to register
 * @preserve (Part of the public API)
 * @deprecated Please use registerEx()
 */
declare function register<C extends TcHmi.Controls.System.baseTcHmiControl>(controlTypeName: string, constructor: TcHmi.Controls.baseTcHmiControlConstructor<C>, directory: string, template?: string | null): void;
/**
 * Register a control.
 * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
 * @param controlTypeName Name of the Control type.
 * @param namespace Name of the Control namespace.
 * @param constructor Constructor which generates the TcHmi Control.
 * @param options options
 * @param options.injectInGlobalObject Inject the control implementation at namespace.name in global object
 * @template C defines the type for the control to register
 * @preserve (Part of the public API)
 */
export declare function registerEx<C extends TcHmi.Controls.System.baseTcHmiControl>(controlTypeName: string, namespace: string, constructor: TcHmi.Controls.baseTcHmiControlConstructor<C>, options?: {
    /** Inject the control implementation at namespace.name in global object */
    injectInGlobalObject: boolean;
}): void;
/**
 * Get control by identifier. Returns the control or undefined.
 * @param id Identifier of the Control.
 * @template T Type of the Control
 * @preserve (Part of the public API)
 */
export declare function get<T extends TcHmi.Controls.System.baseTcHmiControl>(id: string | null | undefined): T | undefined;
/**
 * Gets description information of control by type.
 * @param type Type of the Control.
 * @preserve (Part of the public API)
 */
export declare function getDescription(type: string): TcHmi.ControlDescription | null;
/**
 * Gets version information of control by type.
 * @param type Type of the Control.
 * @preserve (Part of the public API)
 */
export declare function getVersion(type: string): TcHmi.Version | null;
/**
 * Returns the dynamic base path of a control.
 * @preserve (Part of the public API)
 * @param type Control type name
 */
export declare function getBasePath(type: string): string | null;
/**
 * Returns the dynamic base path of a control.
 * @preserve (Part of the public API)
 * @param control TcHmi Control reference
 */
export declare function getBasePathEx(control: TcHmi.Controls.System.baseTcHmiControl): string | null;
/**
 * Get an ES5 Map of all controls. Key of the map is the control identifier
 * @preserve (Part of the public API)
 */
export declare function getMap(): Map<string, TcHmi.Controls.System.baseTcHmiControl>;
/**
 * Limit a pixel dimension with the min and max dimension of the control.
 * @param control Control to check the dimension
 * @param dimension Dimension to check
 * @param valueToTest Value which should be compared
 */
export declare function limitPixelDimensionToControlBound(control: TcHmi.Controls.System.baseTcHmiControl, dimension: 'width' | 'height', valueToTest: number | null): number | null;
/**
 * DEPRECATED
 * Does no longer do anything
 * @deprecated Does no longer do anything
 * @param callback will be imediately called
 * @preserve (Part of the public API)
 */
declare function tachControls(callback?: null | ((this: null) => void)): void;
/**
 * DEPRECATED
 * Does no longer do anything
 * @param callback will be imediately called
 * @deprecated Does no longer do anything
 */
declare function tachControlsAsync(callback?: null | ((this: null) => void)): void;
/** Maps 'TcHmi.Controls.Beckhoff.TcHmiButton' to 'tchmi-button' */
export declare const mapControlNamesFromPackageManifestApi1ToApi0: Map<string, string>;
declare const _register: typeof register;
declare const _registerEx: typeof registerEx;
declare const _get: typeof get;
declare const _getDescription: typeof getDescription;
declare const _getVersion: typeof getVersion;
declare const _getBasePath: typeof getBasePath;
declare const _getBasePathEx: typeof getBasePathEx;
declare const _getMap: typeof getMap;
declare const _limitPixelDimensionToControlBound: typeof limitPixelDimensionToControlBound;
declare const _tachControls: typeof tachControls;
declare const _tachControlsAsync: typeof tachControlsAsync;
declare global {
    namespace TcHmi {
        /**
         * TwinCAT HMI Controls
         * Check out
         * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3728912139.html?id=2674190766896363084
         * for an API reference.
         * @preserve (Part of the public API)
         */
        namespace Controls {
            let register: typeof _register;
            let registerEx: typeof _registerEx;
            let get: typeof _get;
            let getDescription: typeof _getDescription;
            let getVersion: typeof _getVersion;
            let getBasePath: typeof _getBasePath;
            let getBasePathEx: typeof _getBasePathEx;
            let getMap: typeof _getMap;
            let limitPixelDimensionToControlBound: typeof _limitPixelDimensionToControlBound;
            let tachControls: typeof _tachControls;
            let tachControlsAsync: typeof _tachControlsAsync;
        }
    }
}
export {};
//# sourceMappingURL=Controls.d.ts.map