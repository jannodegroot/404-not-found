import type { ControlDescriptionWithInheritance } from './_Types.js';
import { ControlAttributeType } from './_Types.js';
import type { IResolveAttributesResultObject } from './SystemFunctions.js';
export declare class ControlManager {
    #private;
    constructor();
    /** Resolves UserControl attribute meta data. */
    resolveUcAttributes(): void;
    /**
     * Will raise a detach for the control even if it's still part of the dom.
     * Caller has to grant that control will be removed from dom.
     */
    forceDetach(ctrl: TcHmi.Controls.System.baseTcHmiControl | undefined): void;
    /**
     * Checks dimension and position changes for a set of controls or all
     * @returns a list of all delayed controls for the user events
     */
    checkControlGeometry(options?: {
        geos?: ControlGeoData | Map<string, ControlGeoData> | Set<ControlGeoData>;
        /**
         * User events are not raised and returned in the return value.
         * The caller is responsible for raising them later!
         * Defaults to false */
        delayUserEvents?: boolean;
        /** Refresh check even when not dirty. Defaults to false */
        force?: boolean;
        checkReason?: string;
    }): {
        skippedResizedEventList: TcHmi.Controls.System.baseTcHmiControl[];
        skippedMovedEventList: TcHmi.Controls.System.baseTcHmiControl[];
    };
    /**
     * Checks dimension and position changes for a set of controls or all
     * @returns a list of all delayed controls for the user events
     */
    checkControlGeometryByControl(control: TcHmi.Controls.System.baseTcHmiControl): void;
    /** All current controls as a Map with its name as the map key */
    getControlsCache(): Map<string, TcHmi.Controls.System.baseTcHmiControl>;
    /**
     * Sets the a value of a property
     * If the value is null it will set the default value to the property and locks it with a watcher which will keep it on theme change.
     * @param control
     * @param propertyName
     * @param valueNew new value or null if lock to Theme
     */
    setControlProperty(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string, valueNew: any | null, dirtyPaths?: string[]): TcHmi.IErrorDetails;
    /**
     * These schema do not reference a file path.
     * Value is the schema id.
     */
    private __schemaWithNoPath;
    /**
     * Sets the a value of a property (Warning: this does not check for readonly flag!)
     * If the value is null it will set the default value to the property and locks it with a watcher which will keep it on theme change.
     * @param control
     * @param attribute
     * @param valueNew new value or null if lock to Theme
     */
    setControlPropertyByAttribute(control: TcHmi.Controls.System.baseTcHmiControl, attribute: TcHmi.ControlAttributeDescription, valueNew: any | null, dirtyPaths?: string[]): TcHmi.IErrorDetails;
    /** Destruct a control instance */
    destruct(control: TcHmi.Controls.System.baseTcHmiControl): void;
    /**
     * Creates a new control.
     * The new control HTMLElement, available via getElement(), can be attached to the DOM afterwards.
     * @template C defines the type for the control to compile
     */
    compile<C extends TcHmi.Controls.System.baseTcHmiControl>(elem: Element, parent?: TcHmi.Controls.System.baseTcHmiControl | null, options?: {
        pos?: number | null;
        designerIgnore?: boolean;
        overrideAttr?: TcHmi.Dictionary<any> | null;
    }): CompileResult<C>;
    /** Resolve the inheritation of a control description */
    resolveDescriptionInheritation(): void;
    getInheritanceTree(): InheritanceHierarchyEntry | undefined;
    /**
     * Get resolved description by type.
     * @param type
     */
    getDescription(type: string | undefined | null): ControlDescriptionWithInheritance | null;
    /**
     * Get description by type.
     * @param type
     */
    getDescription(type: string | undefined | null, inheritanceExcluded: true): TcHmi.ControlDescription | null;
    /**
     * Get a list of all types which the inheritance of the requested control type defines
     * @param type
     */
    getDescriptionTypes(type: string | undefined | null): string[];
    isRegisteredDescriptionType(type: string | undefined | null): boolean;
    /** Get Description path from DescriptionCacheEntry
     * @param type
     */
    getDescriptionPath(type: string | undefined | null): string | null;
    getDescriptionAttributes(type: string | undefined | null): TcHmi.ControlAttributeDescription[] | null;
    /**
     * Returns a list of access rights of a control type.
     * @param type control type name
     */
    getDescriptionAccess(type: string | undefined | null): TcHmi.Controls.ControlAccessDescription[] | null;
    /**
     * Get control attribute section from Description.json by name (will be lowercased for comparison)
     * @param type control type name
     * @param name
     */
    getDescriptionAttributeByName(type: string | null | undefined, name: string | null | undefined): TcHmi.ControlAttributeDescription | null;
    /**
     * Get control attribute section from Description.json by PropertyName
     * @param type control type name
     * @param propertyName
     */
    getDescriptionAttributeByPropertyName(type: string | undefined | null, propertyName: string | undefined): TcHmi.ControlAttributeDescription | null;
    /**
     * Get UserControl attribute section from Description.json by PropertyName
     * @param ucConfigUrl
     * @param propertyName
     */
    getUserControlConfigAttributeByPropertyName(ucConfigUrl: string, propertyName: string): TcHmi.ControlAttributeDescription | null;
    /**
     * Get control attribute section from Description.json by SetterName
     * @param type control type name
     * @param propertySetterName
     */
    getDescriptionAttributeByPropertySetterName(type: string | undefined | null, propertySetterName: string): TcHmi.ControlAttributeDescription | null;
    /**
     * Get control attribute section from Description.json by SetterName
     * @param type control type name
     * @param propertyGetterName
     */
    getDescriptionAttributeByPropertyGetterName(type: string | undefined | null, propertyGetterName: string): TcHmi.ControlAttributeDescription | null;
    /**
     * Get control attribute section from Description.json by SetterName
     * @param type control type name
     */
    getDescriptionLanguages(type: string | undefined | null): TcHmi.ControlLanguages | null;
    /**
     * Gets attribute description by name of property and does not determine between description and usercontrol attributes.
     * @param control
     * @param propertyName
     */
    getAttributeByPropertyName(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string | undefined): TcHmi.ControlAttributeDescription | null;
    /**
     * Gets attribute description by name of property and does not determine between description and usercontrol attributes.
     * @param control
     * @param propertyName
     */
    getAttributeTypeByPropertyName(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string): ControlAttributeType;
    /**
     * Gets attribute description by name of property setter and does not determine between description and usercontrol attributes.
     * @param control
     * @param propertySetterName
     */
    getAttributeByPropertySetterName(control: TcHmi.Controls.System.baseTcHmiControl, propertySetterName: string): TcHmi.ControlAttributeDescription | null;
    /**
     * Gets attribute description by name of property getter and does not determine between description and usercontrol attributes.
     * @param control
     * @param propertyGetterName
     */
    getAttributeByPropertyGetterName(control: TcHmi.Controls.System.baseTcHmiControl, propertyGetterName: string): TcHmi.ControlAttributeDescription | null;
    /**
     * Gets inherited access of a control
     * @param type control type name
     * @param name name of the control right to fetch
     */
    getDescriptionAccessByName(type: string, name: string): TcHmi.Controls.ControlAccessDescription | null;
}
export interface CompileResult<C extends TcHmi.Controls.System.baseTcHmiControl> extends TcHmi.IResultObject {
    control?: C | undefined;
}
/** Geometric data of a control */
export interface ControlGeoData {
    ctrl: TcHmi.Controls.System.baseTcHmiControl;
    layoutData: ControlLayoutData;
    /** Detected some changes which could change rendered size. So recheck it. */
    isDirty: boolean;
    /** This or parent control is/was collapsed. */
    isCollapsed: boolean;
}
/** A move can be Local and Global or if the container was moved Global only */
export declare const enum ControlMoveType {
    None = 0,
    Local = 1,
    Global = 2
}
export interface InheritanceHierarchyEntry {
    controlType: string;
    children: InheritanceHierarchyEntry[];
}
export interface InitialElementCacheEntry {
    controlId: string;
    /** outerHtml from first compile of this control (runtime data) */
    outerHtml: string;
    /** html attributes from first compile. key: lowercase attribute names (beware: html is lowercase only) (no runtime data!) */
    htmlAttributeMap: Map<string, {
        type: 'static' | 'injected' | 'binding' | 'delayed';
        attribute?: TcHmi.ControlAttribute;
    }>;
    /** Inner attribute values from first compile. Lowercase attribute names (beware: html is lowercase only) (runtime data) */
    injectedAttributeMap: Map<string, any>;
    /** parsed html attributes from first compile. (no runtime data!) */
    attributeList: IResolveAttributesResultObject;
}
/** Layout data of a control */
export interface ControlLayoutData {
    /** Control was moved (at least global). Can be resetted by the control itself. */
    moved: boolean;
    /** Control was moved compared to its parent. Can be resetted by the control itself. */
    movedLocal: boolean;
    /** Control was resized. Can be resetted by the control itself. */
    resized: boolean;
    bounds: {
        /** The number of pixels of the control as resulted from its getBoundingClientRect. */
        topGlobal: number | null;
        /** The number of pixels of the control as resulted from its getBoundingClientRect. */
        leftGlobal: number | null;
        /** The number of pixels that the upper left corner of the control is offset to the left within the parent control. */
        offsetTop: number | null;
        /** The number of pixels that the upper left corner of the control is offset to the top within the parent control. */
        offsetLeft: number | null;
        /** The number of pixels of the control as resulted from its getBoundingClientRect. */
        width: number | null;
        /** The number of pixels of the control as resulted from its getBoundingClientRect. */
        height: number | null;
    };
    /** Cached result of getComputedStyle of the control main element. */
    computedStyles: Pick<CSSStyleDeclaration, 'left' | 'top' | 'right' | 'bottom' | 'width' | 'height'>;
}
/** Runtime Manager */
export declare const controlManager: ControlManager;
//# sourceMappingURL=ControlManager.d.ts.map