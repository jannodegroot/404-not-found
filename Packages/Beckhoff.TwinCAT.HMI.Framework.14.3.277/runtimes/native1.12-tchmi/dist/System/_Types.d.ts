export interface IConfigOverride {
    basePath?: string;
    tcHmiServer?: {
        websocketIntervalTime?: number;
        websocketOverwrite?: {
            host?: string;
            port?: number;
        };
    };
}
export declare const enum LifeCycleState {
    AttributesInitialized = 15,
    Attached = 30,
    /** Will be detached in the near future. */
    StartDetaching = 36,
    /** Will not be detached in near the future. */
    StopDetaching = 37,
    Detached = 40
}
export declare enum ControlAttributeType {
    Invalid = 0,
    General = 1,// Attributes which are not defined in Description.json or *.usercontrol.json. General HTML attributes...
    Control = 2,// Attributes which are defined in Description.json as control attribute.
    UserControlParameter = 3
}
export declare enum ControlAttributeValueType {
    Invalid = 0,
    Simple = 1,
    Complex = 2,
    Unknown = 3
}
export interface ControlAttribute<T = any> extends TcHmi.ControlAttribute<T> {
    valueType: ControlAttributeValueType;
    type: ControlAttributeType;
}
export interface ControlAttributeList extends TcHmi.Dictionary<ControlAttribute> {
    'data-tchmi-type': ControlAttribute<string>;
    'id': ControlAttribute<string>;
}
export interface IControlRegistrationBase {
    error: TcHmi.Errors;
    errorDetails?: TcHmi.IErrorDetails;
}
export interface IControlRegistration<C extends TcHmi.Controls.System.baseTcHmiControl = TcHmi.Controls.System.baseTcHmiControl> extends IControlRegistrationBase {
    /** API 0 (1.10), API 1 (1.12) */
    apiVersion: 0 | 1;
    /** Registration name of the control.
     * May not be set in case of error or apiVersion. */
    name?: string;
    /** Since API 1 (1.12)
     * May not be set in case of error or apiVersion. */
    namespace?: string;
    /** With API 0 (1.10), API 1 (1.12)
     * May not be set in case of error or apiVersion. */
    ctrlConstructor?: TcHmi.Controls.baseTcHmiControlConstructor<C>;
    /** Control class is a native ES6 class?
     * May not be set in case of error or apiVersion. */
    nativeEs6Control?: boolean;
    /** The nearest native ES6 class constructor. For details see TcHmi.System.ControlManager.__procConstructor
     * May not be set in case of error or apiVersion. */
    nearestEs6Constructor?: TcHmi.Controls.baseTcHmiControlConstructor;
    /** Only with API 0 (1.10)
     * May not be set in case of error or apiVersion. */
    directory?: string;
    /** Only with API 0 (1.10)
     * May not be set in case of error or apiVersion. */
    template?: string | null;
}
export interface IFunctionRegistrationBase {
    error: TcHmi.Errors;
    errorDetails?: TcHmi.IErrorDetails;
}
/**
 * @template R Type of the result of the function
 */
export interface IFunctionRegistration<R = any> extends IFunctionRegistrationBase {
    /** Registration name of function
     * May not be set in case of error. */
    name?: string;
    /** Namespace of the function.
     * May not be set in case of error. */
    namespace?: string;
    /**
     * JS Function implementation
     * May not be set in case of error.
     */
    func?: (...args: any[]) => R;
}
/** Commands this Framework supports. */
export type TcHmiAutomationCommand = {
    messageType: 'System.setSingleControlMode';
} | {
    messageType: 'System.generateControl';
    /** The type of the control. */
    controlType: string;
    /** The identifier of the control. */
    controlId: string;
    /** A dictionary for the attributes with the html attribute names as keys */
    controlAttributes: null | Record<string, any>;
} | {
    messageType: 'System.hideSplashScreen';
} | {
    messageType: 'Theme.set';
    themename: 'Base' | 'Base-Dark';
} | {
    messageType: 'Locale.set';
    locale: string;
};
/** Commands this Framework sends. */
export type TcHmiAutomationCommandReply = {
    messageType: 'Ack:System.setSingleControlMode';
} | {
    messageType: 'Ack:Theme.set';
} | {
    messageType: 'Ack:Locale.set';
} | {
    messageType: 'System.InitStageFinished';
    stage: string;
} | {
    messageType: 'System.FrameworkLoaded';
} | {
    messageType: 'System.Initialized';
} | {
    messageType: 'Ack:System.generateControl';
} | {
    messageType: 'Ack:System.hideSplashScreen';
} | {
    messageType: 'System.Error';
    reason: string;
} | {
    messageType: 'System.Timeout';
    reason: string;
};
/** Object to store all package data. */
export interface IPackage {
    /** Package name like Beckhoff.TwinCAT.HMI.Controls */
    name: string;
    /** Base url path for this package like Beckhoff.TwinCAT.HMI.Controls or framework */
    basePath: string;
    /** Content of the Manifest file for this package */
    manifest: IManifest;
}
export interface IModuleRegistrationBase {
    /** Registration error */
    error: TcHmi.Errors;
    /** Registration error details */
    errorDetails?: TcHmi.IErrorDetails;
}
export interface IControlModule<C extends TcHmi.Controls.System.baseTcHmiControl = TcHmi.Controls.System.baseTcHmiControl> extends IModuleRegistrationBase {
    /** Registration data of this control
     * May not be set in case of error and may be filled lazy. */
    reg?: IControlRegistration<C>;
    manifestData?: IManifestControlModuleData;
    /** Package object this control belongs to.
     * May not be set in case of error. */
    package?: IPackage;
    /** Control description.json object for this control
     * May not be set in case of error. */
    description?: TcHmi.ControlDescription;
    /** Resolved Controldescription object for this control
     * May not be set in case of error. */
    descriptionExpanded?: ControlDescriptionWithInheritance;
}
export interface IFunctionModule<R = any> extends IModuleRegistrationBase {
    /**
     * Registration data of this function
     * May not be set in case of error and may be filled lazy.
     **/
    reg?: IFunctionRegistration<R>;
    /** May not be set in case of error or if function is not provided by package. */
    manifestData?: IManifestFunctionModuleData;
    /** May not be set in case of error or if function is not provided by package. */
    package?: IPackage;
    /** Function description as an object.
     * May not be set in case of error. */
    description?: TcHmi.FunctionDescription;
}
/**
 * Defines every <UserControl>.usercontrol.json
 */
export interface UserControlConfig {
    parameters: TcHmi.ControlAttributeDescription[];
    /**
     * Additional virtual rights for the User Control.
     * For example the 'operate' right of an embedded button can be configured to react on 'canStartPump' right of this User Control.
     **/
    virtualRights?: TcHmi.Controls.ControlAccessDescription[];
}
/**
 * DEPRECATED
 * Defines Function
 * Please use TcHmi.FunctionDescription
 * @deprecated Please use TcHmi.FunctionDescription
 */
export type IFunctionDescription = TcHmi.FunctionDescription;
/**
 * DEPRECATED
 * Defines ControlAttributeDescription
 * Please use TcHmi.ControlAttributeDescription
 * @deprecated Please use TcHmi.ControlAttributeDescription
 */
export type ControlDescription = TcHmi.ControlDescription;
/**
 * ControlDescription with resolved Inheritance for easier handling in runtime
 */
export interface ControlDescriptionWithInheritance extends TcHmi.ControlDescription {
    inheritationResolved: boolean;
    /** List of custom data types (but including all data from inheritance parents). */
    inheritedTypes: string[];
    /** A list of attributes of this control (but including all data from inheritance parents). */
    inheritedAttributes: ControlAttributeDescriptionWithInheritance[];
    /** lowercase name based map (but including all data from inheritance parents) */
    inheritedAttributesNameMap: Map<string, ControlAttributeDescriptionWithInheritance>;
    /** lowercase PropertyName based map (but including all data from inheritance parents) */
    inheritedAttributesPropertyNameMap: Map<string, ControlAttributeDescriptionWithInheritance>;
    /** lowercase PropertyGetterName based map (but including all data from inheritance parents) */
    inheritedAttributesPropertyGetterNameMap: Map<string, ControlAttributeDescriptionWithInheritance>;
    /** lowercase PropertySetterName based map (but including all data from inheritance parents) */
    inheritedAttributesPropertySetterNameMap: Map<string, ControlAttributeDescriptionWithInheritance>;
    /** A list of access rights which is checked by this control (but including all data from inheritance parents). Will be checked by its child controls, too, if they are configured with a matching virtual mapping. */
    inheritedAccess: TcHmi.Controls.ControlAccessDescription[];
    /** A list of events associated to this control (but including all data from inheritance parents). */
    inheritedEvents: ControlEventDescriptionWithInheritance[];
    /** A list of API Functions of this Control (but including all data from inheritance parents). */
    inheritedFunctions: ControlFunctionDescriptionWithInheritance[];
    /** Mapping between locale (Key is Language and Region as in ISO 639/BCP 47 with '-' separator) and file path as a value (but including all data from inheritance parents). */
    inheritedLanguages: ControlLanguagesWithInheritance;
    /** Url of the template (but including all data from inheritance parents) */
    inheritedTemplate?: string;
}
export interface FrameworkDescription {
    version: TcHmi.Version;
    events: FrameworkEventDescription[];
    dataTypes: TcHmi.DataTypeDescription[];
    /**
     * List of all available framework localization files.
     * Key is Language and Region as in ISO 639/BCP 47 with '-' separator.
     */
    languages?: TcHmi.ILanguageFileMap;
}
/**
 * DEPRECATED
 * Please use TcHmi.ControlAttributeDescription
 * @deprecated Please use TcHmi.ControlAttributeDescription
 */
export type ControlAttributeDescription = TcHmi.ControlAttributeDescription;
export interface ControlAttributeDescriptionWithInheritance extends TcHmi.ControlAttributeDescription {
    /** Inherited from (not implemented right now) */
    inheritControl?: string;
}
export interface ThemeFile {
    /** Dictionary of control type attribute values in this file. Key is the full qualified controltype name. */
    controlTypeValues?: TcHmi.Dictionary<AttributeValue>;
    /** Dictionary of class attribute values in this file. Key is the control class name. */
    controlClassValues?: TcHmi.Dictionary<AttributeValue>;
}
export interface AttributeValue {
    /** Value of the TcHmi attribute. Key is the attribute name. */
    attributes?: TcHmi.Dictionary<any>;
    /** Value of the resource. Key is the resource name. */
    themedResources?: TcHmi.Dictionary<any> | null;
}
export interface ControlFunctionDescriptionWithInheritance extends TcHmi.ControlFunctionDescription {
    /** Inherited from (not implemented right now) */
    inheritControl?: string;
}
/**
 * DEPRECATED
 * Please use FunctionDefinition
 * @deprecated Please use FunctionDefinition
 */
export type IFunction = TcHmi.FunctionDefinition;
/**
 * DEPRECATED
 * Please use FunctionArgument
 * @deprecated Please use FunctionArgument
 */
export type IFunctionArgument = TcHmi.FunctionArgument;
export interface FrameworkEventDescription extends TcHmi.baseEventDescription {
    /** category of this event */
    category: 'Framework';
}
export interface ControlEventDescriptionWithInheritance extends TcHmi.ControlEventDescription {
    /** Inherited from (not implemented right now) */
    inheritControl?: string;
}
/**
 * DEPRECATED
 * List of custom data types.
 * Please use TcHmi.DataTypeDescription
 * @deprecated Please use TcHmi.DataTypeDescription
 */
export type DataTypeDescription = TcHmi.DataTypeDescription;
/** Mapping between locale (Key is Language and Region as in ISO 639/BCP 47 with '-' separator) and file path (or file path array) as a value (but including all data from inheritance parents). */
export interface ControlLanguagesWithInheritance extends TcHmi.ControlLanguages {
}
/** Manifest file for a package which references controls, functions and other stuff */
export interface IManifest {
    /** Identifier of the describing schema. */
    $schema?: string;
    /**
     * 0: 1.10 style
     * 1: 1.12 style
     */
    apiVersion: 0 | 1;
    /** List of all referenced  controls, functions and other stuff in this manifest */
    modules: (IManifestPackageModuleData | IManifestControlModuleData | IManifestFunctionModuleData | IManifestResourceModuleData | IManifestLanguageModuleData)[];
    provideMetadata?: IManifestMetaData;
    /**
     * Allows mapping of an import keyword, path prefixes or full path to a real path inside this hmi package.
     * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap
     */
    esmoduleImports?: {
        /**
         * Optional base path for this mapping.
         * Can be used to restrict an entry to a single control.
         */
        moduleScope?: string;
        /**
         * Path to map this import keyword, path prefixes or full path to.
         * This path is relative to the package root (where this manifest is located).
         */
        imports: TcHmi.Dictionary<string>;
    }[];
}
/** Describes a reference to a package. */
export interface IManifestPackageModuleData {
    /** Describes a reference to a package. */
    type: 'Package';
    /** This is the NugetId of the referenced package. The resources of the referenced package are used before the rest of the modules. */
    nugetId: string;
}
/** Describes a tchmi control. */
export interface IManifestControlModuleData {
    /** Describes a tchmi control. */
    type: 'Control';
    /** The base path to find all control files. */
    basePath: string;
    /** Name of the description file for the control: Description.json in most cases. */
    descriptionFile: string;
    toolboxCategory?: string;
}
/** Describes a tchmi function. */
export interface IManifestFunctionModuleData {
    /** Describes a tchmi function. */
    type: 'Function';
    /** The base path to find the function <functionName>.js and <functionName>.function.json files. */
    basePath: string;
    /** Name of the description file for the function. This is <functionName>.function.json in most cases. */
    descriptionFile: string;
}
export interface IManifestResourceModuleData {
    /**
     * Defines we are refering to a (non-control and non-function) resource. This can be a CSS Stylesheet or a JS file.
     * Javascript module files can be import'ed in controls and functions without referencing them here.
     */
    type: 'Resource';
    /**
     * Url of the resource. This can be a CSS Stylesheet or a JS file.
     * Javascript module files can be import'ed in controls and functions without referencing them here.
     */
    path: string;
    /** Restricts the CSS Resource to be used only for one specific theme name. Will be used for all themes if unset. (not valid for JS files) */
    theme?: string;
    /** Groups the resource for theme override in project. (not valid for JS files) */
    component?: string;
}
export interface IManifestLanguageModuleData {
    /** Defines we are refering to a language file." */
    type: 'Language';
    /** Determines the language code of the language file. */
    locale: string;
    /** Url of a language file or an array of language file urls. */
    files: TcHmi.LanguageFileMapEntry;
}
/**
 * Example:
 * ---------------------------------------
 * ```json
 * {
 *    "toolbox": {
 *       "MyIdentifier": {
 *          "200": "Test",
 *          "201": {
 *             "default": "Bühnentechnik",
 *             "de-DE": "Bühnentechnik",
 *             "en-US": "Stagecraft",
 *             "it-IT": "Scenotecnica",
 *             "nl-NL": "Theatertechniek"
 *          }
 *       }
 *    }
 * }
 * ```
 * ---------------------------------------
 * Can be used in control module toolboxCategory
 * ```json
 * {
 *    "basePath": "./",
 *    "descriptionFile": "Description.json",
 *    "toolboxCategory": "MyIdentifier:201",
 * }
 * ```
 * ---------------------------------------
 */
export interface IManifestMetaData {
    toolbox?: TcHmi.Dictionary<TcHmi.Dictionary<string | TcHmi.Dictionary<string>>>;
}
/**
 * DEPRECATED
 * Please use TcHmi.Trigger
 * @deprecated Please use TcHmi.Trigger
 */
export type Trigger = TcHmi.Trigger;
//# sourceMappingURL=_Types.d.ts.map