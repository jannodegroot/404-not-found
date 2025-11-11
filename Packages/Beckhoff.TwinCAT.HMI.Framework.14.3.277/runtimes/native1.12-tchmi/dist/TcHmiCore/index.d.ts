/** Unique ID of this HMI Instance */
declare var TCHMI_DYNAMIC_INSTANCE_ID: string;
/** The timestamp in milliseconds based on JavaScript Date object when TcHmiFramework.js file was initialy handled by the JavaScript interpreter. */
declare var TCHMI_DEBUG_TIME_LOAD_LIBRARY: number;
/**
 * Engineering instance. Designer instance or LiveView instance.
 **/
declare var TCHMI_ENGINEERING: boolean;
/**
 * Engineering instance. Designer instance.
 **/
declare var TCHMI_DESIGNER: boolean;
/**
 * Engineering instance. LiveView instance.
 **/
declare var TCHMI_LIVEVIEW: boolean;
/**
 * Runtime
 **/
declare var TCHMI_RUNTIME: boolean;
/**
 * Only one control should be shown
 */
declare var TCHMI_SINGLECONTROL: boolean;
/**
 * Websocket used for communication with engineering.
 * If unset we have a VS newer then 2025-05 which communicates via server events.
 **/
declare var TCHMI_ENGINEERING_WEBSOCKET: string | undefined;
/**
 * Defines which partial is opened in a designer instance.
 **/
declare var TCHMI_TARGET_PARTIAL: string;
/**
 * Config override used in engineering instances.
 * */
declare var TCHMI_CONFIG_OVERRIDE: object | null | undefined;
/**
 * DEPRECATED
 * Replaced by: TCHMI_ENGINEERING
 * @deprecated Please use TCHMI_ENGINEERING
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE: boolean;
/**
 * DEPRECATED
 * Replaced by: TCHMI_DESIGNER
 * @deprecated Please use TCHMI_DESIGNER
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE_MASTER: boolean;
/**
 * DEPRECATED
 * Replaced by: TCHMI_LIVEVIEW
 * @deprecated Please use TCHMI_LIVEVIEW
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE_SLAVE: boolean;
/**
 * DEPRECATED
 * Replaced by: TCHMI_CONFIG_OVERRIDE
 * @deprecated Please use TCHMI_CONFIG_OVERRIDE
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE_FALLBACK_CONFIG_JSON: object | null | undefined;
/**
 * DEPRECATED
 * Replaced by: TCHMI_TARGET_PARTIAL
 * @deprecated Please use TCHMI_TARGET_PARTIAL
 **/
declare var TCHMI_ENABLE_DESIGNER_MODE_TARGET_PARTIAL: string;
/**
 * DEPRECATED
 * Replaced by: TCHMI_PERSISTENT_LOG_LEVEL
 * @deprecated Please use TCHMI_PERSISTENT_LOG_LEVEL
 **/
declare var TCHMI_CONSOLE_LOG_PERSISTENT: boolean;
/**
 * DEPRECATED
 * Replaced by: TCHMI_PERSISTENT_LOG_MAX_ENTRIES
 * @deprecated Please use TCHMI_PERSISTENT_LOG_MAX_ENTRIES
 **/
declare var TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES: number;
/**
 * DEPRECATED
 * Replaced by: TCHMI_LOG_TCHMISERVER_MESSAGES
 * @deprecated Please use TCHMI_LOG_TCHMISERVER_MESSAGES
 **/
declare var TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES: boolean;
/**
 * DEPRECATED
 * Replaced by: TCHMI_LOG_ENGINEERING_COM_MESSAGES
 * @deprecated Please use TCHMI_LOG_ENGINEERING_COM_MESSAGES
 **/
declare var TCHMI_CONSOLE_LOG_ENGINEERING_COM_MESSAGES: boolean;
/**
 * DEPRECATED
 * Replaced by: TCHMI_LOG_ENGINEERING_COM_MESSAGES
 * @deprecated Please use TCHMI_LOG_ENGINEERING_COM_MESSAGES
 **/
declare var TCHMI_CONSOLE_LOG_DESIGNER_MODE_COM_MESSAGES: boolean;
/**
 * 0: None
 * 1: Error
 * 2: Warning
 * 3: Info
 * 4: Debug
 */
declare var TCHMI_CONSOLE_LOG_LEVEL: TcHmi.LOG_LEVEL;
/**
 * 0: None
 * 1: Error
 * 2: Warning
 * 3: Info
 * 4: Debug
 */
declare var TCHMI_PERSISTENT_LOG_LEVEL: TcHmi.LOG_LEVEL;
/** Max entries created in IndexedDB. */
declare var TCHMI_PERSISTENT_LOG_MAX_ENTRIES: number;
/** Defines the interval after which log entries are written from memory to the database. */
declare var TCHMI_PERSISTENT_LOG_CACHE_INTERVAL: number;
/** Activate Trace Log of Communication Messages between Framework and Server */
declare var TCHMI_LOG_TCHMISERVER_MESSAGES: boolean;
/** Activate Trace Log of Communication Messages between Framework and Creator */
declare var TCHMI_LOG_ENGINEERING_COM_MESSAGES: boolean;
declare var TCHMI_NUGET_METADATA: TcHmi.Dictionary<TcHmi.Config.NugetPackageMetadata>;
/** Does we run inside a unit test? */
declare var TCHMI_UNITTEST_MODE: boolean;
declare var TCHMI_UNITTEST_INIT_NO_NEXT_STAGE: boolean;
/**
 * Browsers without addEventListener option object api are not supported anymore in TcHmi.
 * Check can be removed because it is always true now.
 * @deprecated Can be removed because it is always true now.
 */
declare var TCHMI_EVENT_OPTION_OBJECT_SUPPORTED: boolean;
declare var TCHMI_SERVER_STATE_WATCH_INTERVAL: number;
declare var TCHMI_DIAGNOSTICS_SERVER: boolean;
declare var TCHMI_DIAGNOSTICS_SERVER_REQUEST_HISTORY_MAX_BUFFER: number;
declare var TCHMI_DIAGNOSTICS_SERVER_REQUEST_RESPONSE_HISTORY_MAX_BUFFER: number;
declare var TCHMI_DIAGNOSTICS_SERVER_REQUEST_RESPONSE_HISTORY_MESSAGES: boolean;
/**
 * Used to override the value of static defined flags dynamically.
 * Data is read from localStorage at runtime.
 * Can be controlled from Client tab on the server config page.
 */
declare var TCHMI_FLAG_OVERRIDES: {
    TCHMI_CONSOLE_LOG_LEVEL?: number;
    TCHMI_PERSISTENT_LOG_LEVEL?: number;
    TCHMI_PERSISTENT_LOG_MAX_ENTRIES?: number;
    TCHMI_PERSISTENT_LOG_CACHE_INTERVAL?: number;
    TCHMI_PERSISTENT_LOG_MAX_SERVER_ENTRIES?: boolean;
    TCHMI_LOG_TCHMISERVER_MESSAGES?: boolean;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_PERSISTENT_LOG_LEVEL
     * @deprecated Please use TCHMI_PERSISTENT_LOG_LEVEL
     **/
    TCHMI_CONSOLE_LOG_PERSISTENT?: boolean;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_PERSISTENT_LOG_MAX_ENTRIES
     * @deprecated Please use TCHMI_PERSISTENT_LOG_MAX_ENTRIES
     **/
    TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES?: number;
    /**
     * DEPRECATED
     * Replaced by: TCHMI_LOG_TCHMISERVER_MESSAGES
     * @deprecated Please use TCHMI_LOG_TCHMISERVER_MESSAGES
     **/
    TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES?: boolean;
} | null | undefined;
/**
 * Converts string "\t"/"\n" (symbol world) to tab/newline (HTML world).
 * This supports escaping with "\\n"
 *
 * @param text The text to escape
 * @returns The decoded representation of parameter text.
 * @preserve (Part of the public API)
 */
declare function tchmi_decode_control_characters(text: string | null | undefined): string;
/**
 * Converts string "\t"/"\n" (symbol world) to tab/newline (HTML world).
 * This supports escaping with "\\n"
 *
 * Some controls converted newline to space in all released tchmi versions.
 * So this helper can do this with the options.newlineToSpace, but
 * do not use that parameter for new controls.
 *
 * You also probably do not need options.preserveBackslash for controls.
 *
 * @param text The text to escape
 * @param options options
 * @param options.newlineToSpace Convert Newline to space
 * @param options.preserveBackslash Preserve an escaped backslash
 * @returns The decoded representation of parameter text.
 * @preserve (Part of the public API)
 */
declare function tchmi_decode_control_characters(text: string | null | undefined, options?: {
    newlineToSpace?: boolean;
    preserveBackslash?: boolean;
}): string;
/**
 * Converts tab/newline (HTML world) to string "\t"/"\n" (symbol world).
 * This supports escaping with "\\t"
 *
 * @param text The text to encode
 * @returns The encoded representation of parameter text.
 * @preserve (Part of the public API)
 */
declare function tchmi_encode_control_characters(text: string | null | undefined): string;
/**
 * Encodes HTML
 * @param html The html to encode
 * @returns The encoded representation of parameter html.
 * @preserve (Part of the public API)
 */
declare function tchmi_encode_html(html: string): string;
/**
 * Decodes HTML
 * @param text The text to decode
 * @returns The decoded representation of parameter text.
 * "&#176;!\"&#167;$%&/()=?~#|&#233;&#232;€…™&#174;&#169;"
 * "°     !\"§     $%&/()=?~#|é     è     €…™®     ©"
 * @preserve (Part of the public API)
 */
declare function tchmi_decode_html(text: string): string;
/**
 * Encodes parts of uris including most reserved characters but will not encode '/' in path or '?', '&' and '=' in search parameters for example.
 * Only path will be encoded by default. Encoding of serch parameter values or hash can be activated optionally.
 * @param uri Uri
 * @param options Options
 * @param options.encodePath Is true by default. When true the path (except '/') will be encoded.
 * @param options.encodeSearchParams Is false by default. When true search parameter values will be encoded by default.
 * @param options.encodeHash Is false by default. When true the hash value will be encoded (except first '#') by default.
 * @preserve (Part of the public API)
 */
declare function tchmi_encode_uri_components(uri: string, options?: {
    encodePath?: boolean;
    encodeSearchParams?: boolean;
    encodeHash?: boolean;
}): string;
/**
 * Converts formatted text to formatted html.
 * @param text The text which contains the formatting placeholders which shall be encoded.
 * @returns The encoded representation of parameter text.
 * @preserve (Part of the public API)
 */
declare function tchmi_text_to_html(text: string): string;
/**
 * Decode base64 strings
 * Attention: JS strings are UTF16!
 * Consider using this API for UTF8 support:
 * new TcHmi.Base64BinaryReader(input).readString()
 * @param input String to decode
 * @returns Returns the String or null
 * @preserve (Part of the public API)
 */
declare function tchmi_base64decode(input: string): string | null;
/**
 * Encode base64 strings
 * Attention: JS strings are UTF16!
 * Consider using this API for UTF8 support:
 * new TcHmi.Base64BinaryWriter().writeString(input).getEncodedString()
 * @param input String to encode
 * @returns Returns the String or null
 * @preserve (Part of the public API)
 */
declare function tchmi_base64encode(input: string): string;
/**
 * Creates a Guid string.
 * @returns Guid
 * @preserve (Part of the public API)
 */
declare function tchmi_create_guid(): string;
/**
 * Compares 2 values for equality.
 * @param a Value 1
 * @param b Value 2
 * @param typeSafeOrOptions A boolean or option object to define how the values should be compared.
 * If it is a boolean, a value of false will perform a type unsafe comparison, i.e. 1 == "1", while
 * a value of true will cause the function to only consider the values equal if their types are also equal.
 * @preserve (Part of the public API)
 */
declare function tchmi_equal(a: any, b: any, typeSafeOrOptions?: boolean | {
    /**
     * A value of true will perform a type unsafe comparison, i.e. 1 == "1", while
     * a value of false will cause the function to only consider the values equal if their types are also equal.
     * Defaults to false if not specified.
     */
    convertPrimitives?: boolean;
    /**
     * If set, will cause the function to perform deep equality checking for maps.
     * To be considered equal, maps must have the same number and order of keys and values, which must be equal.
     * Use compareMaps.deepCompareKeys and compareMaps.deepCompareValues to specify how keys and values should be compared.
     * If not set, maps will only be considered equal if they are reference equal.
     */
    compareMaps?: {
        /**
         * A value of true will perform deep equality checks for map keys.
         * Otherwise maps are only considered equal if all their keys are reference equal.
         */
        deepCompareKeys: boolean;
        /**
         * A value of true will perform deep equality checks for map values.
         * Otherwise maps are only considered equal if all their values are reference equal.
         */
        deepCompareValues: boolean;
    };
    /**
     * If set, will cause the function to perform deep equality checking for sets.
     * To be considered equal, sets must have the same number and order of values, which must be equal.
     * Use compareSets.deepCompareValues to specify how values should be compared.
     * If not set, sets will only be considered equal if they are reference equal.
     */
    compareSets?: {
        /**
         * A value of true will perform deep equality checks for set values.
         * Otherwise sets are only considered equal if all their values are reference equal.
         */
        deepCompareValues: boolean;
    };
    /**
     * A value of true will compare dates by their unix epoch time in milliseconds.
     * Otherwise dates will only be considered equal if they are reference equal.
     * Defaults to false if not specified.
     */
    compareDates?: boolean;
}): boolean;
/**
 * Checks if the given object inherits from another object by comparing its prototype to the native object and array prototypes.
 * Internal function. Should only be used by the framework core.
 * @param obj The object to check.
 */
declare const __tchmi_is_instanced_object: {
    (obj: unknown): obj is {
        new (...args: unknown[]): unknown;
        readonly prototype: unknown;
    };
    __objectPrototype?: any;
    __arrayPrototype?: any;
};
/**
 * Clones the data {Object} in param obj and returns a clone of it.
 * This function will not create clones of objects based on a prototype definition (like class instances) and function references
 * and return the original reference instead.
 * String, null, undefined are returned directly as they are immutable / handled by value.
 * @param obj The object to clone.
 * @param options Options to define what should be cloned and how it should be cloned.
 * @param options.cloneMaps If set, maps will be cloned. Otherwise maps will be returned unchanged.
 * @param options.cloneMaps.deepCloneKeys Set to true to also clone map keys. Otherwise map keys will be reference equal to the keys in the original map.
 * @param options.cloneMaps.deepCloneValues Set to true to also clone map values. Otherwise map values will be reference equal to the values in the original map.
 * @param options.cloneSets If set, sets will be cloned. Otherwise sets will be returned unchanged.
 * @param options.cloneSets.deepCloneValues Set to true to also clone set values. Otherwise set values will be reference equal to the values in the original set.
 * @param options.cloneDates If true, dates will be cloned. Otherwise dates will be returned unchanged.
 * @param options.resolveRecursiveReferences If true, the function will keep track of all objects that are cloned and thus be able to detect and properly clone recursive references.
 * @returns Clone of param obj.
 * @template T defines the type of the target object
 * @preserve (Part of the public API)
 */
declare function tchmi_clone_object<T>(obj: T, options?: {
    /**
     * If set, maps will be cloned. Otherwise maps will be returned unchanged.
     */
    cloneMaps?: {
        /**
         * Set to true to also clone map keys. Otherwise map keys will be reference equal to the keys in the original map.
         */
        deepCloneKeys: boolean;
        /**
         * Set to true to also clone map values. Otherwise map values will be reference equal to the values in the original map.
         */
        deepCloneValues: boolean;
    };
    /**
     * If set, sets will be cloned. Otherwise sets will be returned unchanged.
     */
    cloneSets?: {
        /**
         * Set to true to also clone set values. Otherwise set values will be reference equal to the values in the original set.
         */
        deepCloneValues: boolean;
    };
    /**
     * If true, dates will be cloned. Otherwise dates will be returned unchanged.
     * Defaults to false if not specified.
     */
    cloneDates?: boolean;
    /**
     * If true, the function will keep track of all objects that are cloned and thus be able to detect recursive references.
     * This enables the function to clone objects that contain themselves.
     * Defaults to false if not specified.
     */
    resolveRecursiveReferences?: boolean;
}): T;
/**
 * Compares two objects (not class instances) and returns an array of object path strings for the changed properties.
 * This array can directly be used in apis where the "dirtyPaths" argument is allowed like the onPropertyChanged control event.
 * returns null when changed properties can not be checked.
 * @param o1 First object
 * @param o2 Second object
 * @param entryPath sub path
 */
declare function tchmi_compare_object(o1: Record<string, any>, o2: Record<string, any>, entryPath?: string | null): string[] | null;
/**
 * Unify a path string.
 * Replace all backslashes with slashes, replace multiple slashes with single slashes, remove leading slash
 * @param path The path.
 * @returns Unified path.
 */
declare function tchmi_path(path: string): string;
declare function tchmi_path<T>(path: T): T;
/**
 * Converts a String to a valid CSS id pattern by escaping all reserved characters.
 * @param id The target id.
 * @returns Converted id.
 * @preserve (Part of the public API)
 */
declare function tchmi_css_escape_selector(id: string): string;
/**
 * tchmi_escape_regex
 * @param text text to escape
 * @preserve (Part of the public API)
 */
declare function tchmi_escape_regex(text: string): string;
/**
 * Format a string.
 * Placeholder syntax in format string: '{' to begin placeholder, optional parameter-index with | as seperator, description and '}' to close the placeholder.
 * Example: {0|.1f}
 * @param formatString text to format
 * @param args params for the placeholders
 */
declare function tchmi_format_string(formatString: string, ...args: any[]): string;
/**
 * Compares two version strings and returns -1 if b is newer than a, 0 if a is equal to b and 1 if b is newer than a.
 * @param a Version a
 * @param b Version b
 */
declare function tchmi_compare_version(a: string, b: string): -1 | 0 | 1;
/**
 * TwinCAT HMI API
 * Check out
 * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3730606987.html?id=1426887615595781518
 * for an API reference.
 * @preserve (Part of the public API)
 */
declare namespace TcHmi {
    /**
     * Turns a subset of optional properties of an object type into required properties.
     * Example: SelectableRequired<TcHmi.Context, 'success' | 'error'>
     * This will turn success and error to required and keep everything else as it is defined in TcHmi.Context.
     * @preserve (Part of the public API)
     */
    type SelectableRequired<T, K extends keyof T> = {
        [S in K]-?: T[S];
    } & {
        [P in keyof T]: T[P];
    };
    /**
     * Turns a subset of required properties of an object type into optional properties.
     * Example: SelectableOptional<Events.Message, 'sourceDomain'>
     * This will turn deprecated sourceDomain to optional and keep everything else as it is defined in TcHmi.Message.
     * @preserve (Part of the public API)
     */
    type SelectableOptional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
    /**
     * Add null to all properties of T
     * @preserve (Part of the public API)
     **/
    type Nullable<T> = {
        [P in keyof T]: T[P] | null;
    };
    /**
     * Creates an exact result type for Object.entries() with precise type for the key and value.
     * Use like this:
     * Object.entries(myVar) as ObjectEntries<typeof myVar>
     * @preserve (Part of the public API)
     */
    type ObjectEntries<T> = [keyof T, Required<T>[keyof T]][];
    /**
     * A generic Context interface.
     * @preserve (Part of the public API)
     */
    interface Context<T1 = any> {
        /** Should be called if there is no error with an optional result. */
        success?: (result?: T1) => void;
        /**
         * Should be called if there is an error.
         * Must provide an error code and optional more details.
         */
        error?: (error: TcHmi.Errors, details?: IErrorDetails) => void;
        /** Contains event argument data if current context is an event trigger. */
        args?: any[];
        /** Optional additional properties */
        [additionalProperty: string]: any;
    }
    const enum LOG_LEVEL {
        Performance = -1,
        None = 0,
        Error = 1,
        Warning = 2,
        Info = 3,
        Debug = 4
    }
    interface EventContext<T1 = any> extends Context<T1> {
        /** Name of the event which is being handled. */
        name: string;
    }
    interface FunctionExpressionContext<T1 = any> extends Context<T1> {
        /** Determines if the caller expects the called context to watch symbol references on its own and reports changes back via success function. */
        delegatedWatch?: boolean;
        /** Function which can be injected in the context object by the called context. It will be called by the context caller when the context has to be destroyed.*/
        destroy?: DestroyFunction;
    }
    /**
     * IErrorDetails extends the server error object to allow framework specific error details and server specific error details in one object.
     * Objects of this type are optionally extended with framework specific properties.
     * Based on Protocol.Schema.json#/definitions/errorDetails of TcHmiServer
     */
    interface IErrorDetails {
        /** The error code. */
        code: TcHmi.Errors | number;
        /** The enum name of error code and not a plain-text message. Use reason for a plaintext description of the error. */
        message?: string;
        /** Plaintext description of the error. */
        reason?: string;
        /** The name of the server or framework domain where the error occurred. */
        domain?: string;
        /** Optional Error object for exceptions */
        exception?: Error;
        /** A list of errors which lead to the current error. */
        errors?: IErrorDetails[] | undefined;
    }
    /** () => void */
    interface DestroyFunction {
        (): void;
    }
    type FontFamily = string;
    type AngleUnit = 'deg' | 'rad' | 'turn' | 'grad';
    type BorderStyleValue = 'Solid' | 'Dashed' | 'Dotted' | 'None';
    type DimensionUnit = 'px' | '%';
    type FontSizeUnit = 'px' | '%' | 'em' | 'rem';
    type FontStyle = 'Normal' | 'Italic' | 'Oblique' | 'Auto';
    type FontWeight = 'Normal' | 'Bold' | 'Auto';
    type HorizontalAlignment = 'Left' | 'Center' | 'Right';
    type ScaleModeString = 'None' | 'ScaleToFill' | 'ScaleToFit' | 'ScaleToFitWidth' | 'ScaleToFitHeight';
    type SizeMode = 'Value' | 'Parent';
    type SizeModeWithContent = 'Value' | 'Parent' | 'Content';
    type ToggleState = 'Normal' | 'Active';
    type VerticalAlignment = 'Top' | 'Center' | 'Bottom';
    /** Hidden still uses space in fluid calculations, collapsed is ignored there.*/
    type Visibility = 'Visible' | 'Hidden' | 'Collapsed';
    interface Version {
        full: string;
        major: number;
        minor: number;
        build: number;
        revision: number;
    }
    interface IResultObject {
        /** Global error code of this result object */
        error: Errors;
        /** Detailed (recursive?) error of this result object */
        details?: IErrorDetails | undefined;
    }
    type SymbolTag = 's' | 'i' | 'l' | 'pp' | 'tp' | 'f' | 'ctrl' | 'ctx' | 'tr' | 't';
    enum SymbolType {
        Invalid = 0,
        Server = 10,// Used for symbols with expression -> %s%...%/s%
        Internal = 20,// Used for symbols with expression -> %i%...%/i%
        LocalizedText = 30,// Used for symbols with expression -> %l%...%/l%
        PartialParam = 40,// Used for symbols with expression -> %pp%...%/pp%
        TemplateParam = 50,// Used for symbols with expression -> %tp%...%/tp%
        Function = 60,// Used for symbols with expression -> %f%...%/f%
        Control = 70,// Used for symbols with expression -> %ctrl%...%/ctrl%
        Context = 80,// Used for symbols with expression -> %ctx%...%/ctx%
        ThemedResource = 90,// Used in for symbols with getExpression() -> %tr%...%/tr%
        Timer = 100
    }
    /**
     * A symbol expression string like "%s%Symbol%/s%".
     */
    type SymbolExpressionString<ST extends SymbolTag = SymbolTag> = ST extends ST ? `%${ST}%${string}%/${ST}%` : never;
    type AllowSymbolExpressionsAsValues<T, ST extends SymbolTag = SymbolTag> = T | (T extends object ? {
        [P in keyof T]: AllowSymbolExpressionsAsValues<T[P], ST>;
    } : never) | SymbolExpressionString<ST>;
    type BindingMode = 'OneWay' | 'TwoWay';
    interface baseColor {
    }
    type Color = SolidColor | LinearGradientColor;
    interface SolidColor extends baseColor {
        /**
         * <color> CSS data type for a solid color.
         * It is defined with 'none' instead of 'transparent'.
         * Therefor use StyleProvider.resolveSolidColorAsCssValue API before pushing it into the DOM.
         */
        color: string;
    }
    interface LinearGradientColor extends baseColor {
        angle: number | string;
        stopPoints: StopPoint[];
    }
    interface StopPoint {
        color: string;
        stop?: string;
    }
    /** A color as an object with rgba parts from 0 to 255 */
    interface RGBAColor {
        /** part red of the color from 0 to 255 */
        r: number;
        /** part green of the color from 0 to 255 */
        g: number;
        /** part blue of the color from 0 to 255 */
        b: number;
        /** part alpha of the color from 0 to 255 */
        a: number;
    }
    interface baseFourSidedCss {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }
    interface FourSidedCss extends baseFourSidedCss {
        leftUnit?: DimensionUnit;
        topUnit?: DimensionUnit;
        rightUnit?: DimensionUnit;
        bottomUnit?: DimensionUnit;
    }
    interface PixelFourSidedCss extends baseFourSidedCss {
        leftUnit?: 'px';
        topUnit?: 'px';
        rightUnit?: 'px';
        bottomUnit?: 'px';
    }
    type BorderWidth = PixelFourSidedCss;
    interface BorderStyle {
        left: BorderStyleValue;
        top: BorderStyleValue;
        right: BorderStyleValue;
        bottom: BorderStyleValue;
    }
    interface BorderRadius {
        topLeft: number;
        topLeftUnit?: DimensionUnit;
        topRight: number;
        topRightUnit?: DimensionUnit;
        bottomRight: number;
        bottomRightUnit?: DimensionUnit;
        bottomLeft: number;
        bottomLeftUnit?: DimensionUnit;
    }
    interface BoxShadow {
        /** Color of this Box Shadow */
        color: SolidColor | null;
        /** The Shadow Offset */
        offsetX?: number | null;
        offsetXUnit?: DimensionUnit;
        /** The Shadow Offset */
        offsetY?: number | null;
        offsetYUnit?: DimensionUnit;
        /** Inset shadows are drawn inside the border (even transparent ones), above the background, but below content. */
        inset?: boolean;
        /** The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. */
        blur?: number | null;
        blurUnit?: DimensionUnit;
        /** Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. */
        spread?: number | null;
        spreadUnit?: DimensionUnit;
    }
    interface Background {
        color: Color | null;
        image: string | null;
        imageWidth: number | null;
        imageWidthUnit: DimensionUnit;
        imageHeight: number | null;
        imageHeightUnit: DimensionUnit;
        imageHorizontalAlignment: HorizontalAlignment;
        imageVerticalAlignment: VerticalAlignment;
        imagePadding: FourSidedCss | null;
    }
    /**
     * The base transform interface. All transform operations must extend this interface and set transformType accordingly.
     */
    interface baseTransform {
        /**
         * Specifies which type of transform should be performed.
         * Currently supported values: Translate, Rotate, Scale, Skew, Origin, Perspective.
         */
        transformType: string;
    }
    type Transform = Translate | Rotate | Scale | Skew | Origin | Perspective;
    /**
     * Translate an element. transformType must be "Translate".
     */
    interface Translate extends baseTransform {
        transformType: 'Translate';
        /**
         * Translate in x axis direction. Defaults to 0 if not provided.
         */
        x?: number;
        /**
         * The unit to use for the translation in x axis direction. Supported values: px, %. Defaults to px if not provided.
         */
        xUnit?: DimensionUnit;
        /**
         * Translate in y axis direction. Defaults to 0 if not provided.
         */
        y?: number;
        /**
         * The unit to use for the translation in y axis direction. Supported values: px, %. Defaults to px if not provided.
         */
        yUnit?: DimensionUnit;
        /**
         * Translate in z axis direction. Defaults to 0 if not provided.
         */
        z?: number;
        /**
         * The unit to use for the translation in z axis direction. Supported values: px, %. Defaults to px if not provided.
         */
        zUnit?: DimensionUnit;
    }
    /**
     * Rotate an element. transformType must be "Rotate".
     */
    interface Rotate extends baseTransform {
        transformType: 'Rotate';
        /**
         * The angle to rotate the element.
         */
        angle: number;
        /**
         * The unit to use for the rotation. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
         */
        angleUnit?: AngleUnit;
        /**
         * The vector to rotate around. Defaults to { x: 0, y: 0, z: 1} if not provided.
         */
        vector?: {
            x: number;
            y: number;
            z: number;
        };
    }
    /**
     * Scale an element. transformType must be "Scale".
     */
    interface Scale extends baseTransform {
        transformType: 'Scale';
        /**
         * Scale in x axis direction. Defaults to 1 if not provided.
         */
        x?: number;
        /**
         * Scale in y axis direction. Defaults to 1 if not provided.
         */
        y?: number;
        /**
         * Scale in z axis direction. Defaults to 1 if not provided.
         */
        z?: number;
    }
    /**
     * Skew an element. transformType must be "Skew".
     */
    interface Skew extends baseTransform {
        transformType: 'Skew';
        /**
         * Skew x axis. Defaults to 0 if not provided.
         */
        xAngle?: number;
        /**
         * The unit to use for the x axis skew. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
         */
        xAngleUnit?: AngleUnit;
        /**
         * Skew y axis. Defaults to 0 if not provided.
         */
        yAngle?: number;
        /**
         * The unit to use for the y axis skew. Supported values: deg, rad, turn, grad. Defaults to deg if not provided.
         */
        yAngleUnit?: AngleUnit;
    }
    /**
     * Set the origin of transforms for an element. Should be only used once per transform list. If multiple origins are specified only the last one is used.
     * transformType must be "Origin".
     */
    interface Origin extends baseTransform {
        transformType: 'Origin';
        /**
         * The transform origin x coordinate. Defaults to 50 if not provided. If this and xUnit are not provided, xUnit will default to % to center the origin on the element.
         */
        x?: number;
        /**
         * The unit of the transform origin x coordinate. Defaults to % if x is not provided. Otherwise defaults to px.
         */
        xUnit?: TcHmi.DimensionUnit;
        /**
         * The transform origin y coordinate. Defaults to 50 if not provided. If this and yUnit are not provided, yUnit will default to % to center the origin on the element.
         */
        y?: number;
        /**
         * The unit of the transform origin y coordinate. Defaults to % if y is not provided. Otherwise defaults to px.
         */
        yUnit?: TcHmi.DimensionUnit;
        /**
         * The transform origin z coordinate. Defaults to 0 if not provided.
         */
        z?: number;
        /**
         * The unit of the transform origin z coordinate. Defaults to px if not provided.
         */
        zUnit?: TcHmi.DimensionUnit;
    }
    /**
     * Sets the perspective for 3D transforms on an element. Should be only used once per transform list. If multiple perspectives are specified only the last one is used.
     * transformType must be "Perspective".
     */
    interface Perspective extends baseTransform {
        transformType: 'Perspective';
        /**
         * The distance to use for the perspective. Visualize this as the distance between the user and the transformed element. The shorter the distance, the extremer the transforms appear.
         */
        distance: number;
        /**
         * The unit of the distance. Supported values: px, %. Defaults to px if not provided.
         */
        distanceUnit?: TcHmi.DimensionUnit;
        /**
         * The origin of the perspective. Default behaviour is the same as transform origin.
         */
        origin?: {
            x?: number;
            xUnit?: TcHmi.DimensionUnit;
            y?: number;
            yUnit?: TcHmi.DimensionUnit;
        };
    }
    /**
     * Key/Value pair in a plain JS Object
     */
    interface Dictionary<T> {
        [index: string]: T;
    }
    /**
     * @template R Type of the result of the function
     */
    interface IFunction<R = any> {
        objectType: 'Function';
        /** Should function be active? */
        active?: boolean;
        /** Registered name of the Function. */
        fn: string;
        fnParams: IFunction.Value[];
    }
    namespace IFunction {
        interface baseValue {
        }
        type Value = StaticValue | Symbol | EventDataObject | FunctionExpression;
        interface StaticValue extends baseValue {
            objectType: 'StaticValue';
            /** Contains a value based on the defined valuetype. A value can be a string, number, boolean, array or an object. */
            value: any;
            /** Information about the used type as a tchmi reference name for re-edit scenarios while Engineering. */
            valueType?: string;
        }
        interface Symbol extends baseValue {
            objectType: 'Symbol';
            /** A tchmi binding symbol expression string. Example: "%s%ADS::test1%s%" */
            symbolExpression: string;
        }
        interface EventDataObject extends baseValue {
            objectType: 'EventDataObject';
            /** The name of the prooperty of the event object. */
            propertyPath: string;
        }
        interface FunctionExpression extends baseValue {
            objectType: 'FunctionExpression';
            functionExpression: string;
        }
    }
    /**
     * JSON Schema defines a JSON based format for defining the structure of JSON data.
     */
    interface nativeJsonSchema {
        $ref?: string;
        /**
         * This is important because it tells refs where
         * the root of the document is located
         */
        id?: string;
        /**
         * It is recommended that the meta-schema is
         * included in the root of any JSON Schema
         */
        $schema?: string;
        /**
         * Title of the schema
         */
        title?: string;
        /**
         * Schema description
         */
        description?: string;
        /**
         * Default json for the object represented by
         * this schema
         */
        default?: any;
        /**
         * The value must be a multiple of the number
         * (e.g. 10 is a multiple of 5)
         */
        multipleOf?: number;
        maximum?: number;
        /**
         * If true maximum must be > value, >= otherwise
         */
        exclusiveMaximum?: boolean;
        minimum?: number;
        /**
         * If true minimum must be < value, <= otherwise
         */
        exclusiveMinimum?: boolean;
        maxLength?: number;
        minLength?: number;
        /**
         * This is a regex string that the value must
         * conform to
         */
        pattern?: string;
        format?: 'date-time' | 'timespan' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'uri' | 'int64' | 'base64';
        /**
         * Defines what type additional item have
         * when they are not described in `items` schema array.
         */
        additionalItems?: boolean | JsonSchema;
        /**
         * Defines the array items.
         * If this is an array the first schema describes the first item in the array and so on.
         */
        items?: JsonSchema | JsonSchema[];
        maxItems?: number;
        minItems?: number;
        uniqueItems?: boolean;
        maxProperties?: number;
        minProperties?: number;
        required?: string[];
        additionalProperties?: boolean | JsonSchema;
        /**
         * Holds simple JSON Schema definitions for
         * referencing from elsewhere.
         */
        definitions?: {
            [key: string]: JsonSchema;
        };
        /**
         * The keys that can exist on the object with the
         * json schema that should validate their value
         */
        properties?: {
            [property: string]: JsonSchema;
        };
        /**
         * The key of this object is a regex for which
         * properties the schema applies to
         */
        patternProperties?: {
            [pattern: string]: JsonSchema;
        };
        /**
         * If the key is present as a property then the
         * string of properties must also be present.
         * If the value is a JSON Schema then it must
         * also be valid for the object if the key is
         * present.
         */
        dependencies?: {
            [key: string]: JsonSchema | string[];
        };
        /**
         * Indicates that a value should not be modified
         */
        readOnly?: boolean;
        /**
         * Enumerates the values that this schema can be
         * e.g.
         * {"type": "string", "enum": ["red", "green", "blue"]}
         */
        enum?: any[];
        /**
         * The basic type of this schema, can be one of
         * [string, number, object, array, boolean, null]
         * or an array of the acceptable types
         */
        type?: JsonDataTypeNames | JsonDataTypeNames[];
        allOf?: JsonSchema[];
        anyOf?: JsonSchema[];
        oneOf?: JsonSchema[];
        /**
         * The entity being validated must not match this schema
         */
        not?: JsonSchema;
    }
    type JsonDataTypeNames = 'string' | 'number' | 'object' | 'array' | 'boolean' | 'null' | 'integer';
    /**
     * JSON Schema defines a JSON based format for defining the structure of JSON data.
     */
    interface JsonSchema extends nativeJsonSchema {
        /**
         * Custom general extension to model relations from 0 to n original $ref resources used within the current schema when
         * id can not be used because the schema was merged.
         */
        base?: string | string[];
        /** Custom server related extension to model the beginning of the plc index. */
        startOffset?: number;
        /** Custom server related extension to describe symbol related attributes. */
        attributes?: Dictionary<any>;
        /** Custom server related extension to describe symbol related format maximum. */
        formatMaximum?: string;
        /**
         * Custom framework related extension to describe an instanceof class while type is 'object'.
         * See tchmi:framework#/definitions/Symbol for further information.
         */
        frameworkInstanceOf?: string;
        /**
         * If frameworkInstanceOf relates to TcHmi.Symbol frameworkSymbolSubType will contain the expected value type of the symbol.
         */
        frameworkSymbolSubType?: JsonSchema;
        /**
         * If frameworkInstanceOf relates to TcHmi.Controls.System.TcHmiControl frameworkControlType will contain the expected value type of the control.
         */
        frameworkControlNamespace?: string;
        /**
         * If frameworkInstanceOf relates to TcHmi.Controls.System.TcHmiControl frameworkControlType will contain the expected value type of the control.
         */
        frameworkControlType?: string;
        /**
         * If frameworkInstanceOf relates to TcHmi.Controls.System.TcHmiControl and frameworkControlType relates to TcHmi.Controls.System.TcHmiUserControl frameworkUserControlConfig will contain the path to the expected usercontrol config.
         */
        frameworkUserControlConfig?: string;
        /**
         * Extension to identify types that should be handled by custom editors.
         */
        frameworkMetaType?: string;
        /**
         * Used by server to describe parameter of a function. The schema which holds writeValue will describe the return value of the function.
         */
        writeValue?: JsonSchema;
        /**
         * PLC comment
         */
        comment?: string;
        /**
         * Used to describe a conversion rules.
         */
        convert?: 'string' | 'number' | 'boolean' | 'bigint' | 'bigint64' | 'unsignedbigint64';
        /**
         * Used to describe members of an enum. This is optional for an enum definition in the server.
         */
        options?: {
            label: string;
            value: number;
        }[];
        addSymbol?: boolean;
        /**
         * Which properties to show as columns in the editor.
         */
        engineeringColumns?: string[];
        /**
         * Metadata about object properties that isn't covered by JSON Schema.
         */
        propertiesMeta?: {
            name: string;
            displayName: string;
            refTo?: string;
            category?: string;
            displayPriority?: number;
            description: string;
            defaultValue?: any;
            defaultValueInternal?: any;
        }[];
        /**
         * Used by server to describe available versions of a symbol.
         */
        versions?: number[];
        /**
         * Used by server to describe if a symbol is a function.
         */
        function?: boolean;
    }
    /**
     * One rule for a right corresponding to a group
     * example:
     * {
     * "accessright": "operate",
     * "group": "Admins",
     * "permission": "Allow"
     * }
     * or
     * {
     * "accessright" : "observe",
     * "group" : "Users",
     * "permission": "Allow"
     * }
     */
    interface AccessControl {
        /** Right which this rule defines. */
        accessright: string;
        /** Group to which this access right is given. */
        group: string;
        /** Permission for this access rule.
         * Allow of one group overrides Deny/Inherit of another group.
         * Deny will result in deny if we have no Allow of another group.
         * Inherit will ask parent control when we got no Allow/Deny.
         * If the parent does not define something there will be a specified default.
         */
        permission: 'Allow' | 'Deny' | 'Inherit';
    }
    /**
     * Allows a mapping of rights to parent control virtual rights. For example the 'operate' right of this control can be configured to react on a custom 'canStartPump' right of a parent control.
     * Example:
     * {
     * "virtualControlRight": "canStartPump",
     * "controlRight": "operate"
     * }
     */
    interface VirtualControlRightMapping {
        /** Name of the right which is configured on a parent control (aka outer right). */
        virtualControlRight: string;
        /** Name of the right which is working on this control (aka inner right). */
        controlRight: string;
    }
    /**
     * Endianness dictates the order in which the bytes encoding a number are stored.
     * Little Endian stores the least significant byte first, for example the number 41394 (Hex: 0xA1B2) will be stored as [0xB2, 0xA1].
     * Big Endian stores the most significant byte first, for example the number 41394 (Hex: 0xA1B2) will be stored as [0xA1, 0xB2].
     */
    enum Endianness {
        LittleEndian = 0,
        BigEndian = 1
    }
    interface SortingInfo {
        name?: string;
        order: 'Ascending' | 'Descending';
    }
    /**
     * Maps the filtered, sorted, and paged values of hierarchical data structures to their original positions
     * The index is hierarchical and is build by the indices of all preceeding parent element and the index of the element itself.
     * Example:
     * ```json
     * [
     *      {
     *          "index": [0],
     *          "children": [
     *              {
     *                  "index": [0, 0]
     *              },
     *              {
     *                  "index": [0, 1],
     *                  "children": [
     *                      {
     *                          "index": [0, 1, 0]
     *                      }
     *                  ]
     *              }
     *          ]
     *      },
     *      {
     *          "index": [1],
     *          "children": [
     *              {
     *                  "index": [1, 0]
     *              },
     *              {
     *                  "index": [1, 1]
     *              }
     *          ]
     *      }
     * ]
     * ```
     */
    interface HierarchicalFilterMap {
        /** List of indices to address a data object in a nested array or object */
        index: number[];
        children?: HierarchicalFilterMap[];
    }
    interface Filter extends Array<Comparison | LogicOperator | Filter> {
    }
    interface Comparison {
        path?: string;
        comparator: '==' | '!=' | '<' | '>' | '<=' | '>=' | 'contains' | 'contains not' | '== [ignore case]' | '!= [ignore case]' | 'contains [ignore case]' | 'contains not [ignore case]';
        value: string | number | Date | boolean | null;
    }
    interface LogicOperator {
        logic: 'AND' | 'OR';
    }
    enum PartialType {
        Invalid = 0,
        View = 1,
        Content = 2,
        UserControl = 3
    }
    /**
     * A trigger is based on an event, which is defined by a global unique identifier.
     * Events raised by controls are always defined with the following pattern: [Control_ID].[EVENT_NAME]
     * The available control events are defined in the associated control markup file.
     */
    interface Trigger {
        /** A string value which contains the target event name. */
        event: string;
        /** preventDefault() should be called in this trigger */
        preventDefault?: true;
        /** An array of {Action} objects. Each Event can contain 1 ... n {Action} objects. */
        actions: TcHmi.Trigger.Action[];
        /** Context for the trigger that can be accessed via %ctx% expressions */
        ctx?: TcHmi.Trigger.RegisterContext;
    }
    namespace Trigger {
        interface RegisterContext<T1 = any> extends TcHmi.Context<T1> {
            /**
             * The control that registers this trigger. The control will always set this to itself.
             */
            owner?: TcHmi.Controls.System.baseTcHmiControl;
        }
        interface baseAction {
            /** Should action be active? Defaults to true. */
            active?: boolean;
            /** Should action be collapsed? Not used in runtime */
            collapsed?: boolean;
            /** Async Wait */
            asyncWait: boolean;
            /** Success callback action list. */
            success: Action[];
            /** Error callback action list. */
            error: Action[];
        }
        type Action = Condition | Comment | SwitchCase | ControlApiFunction | WriteToSymbol | TAFunction | JavaScript | ActionTemplate | FunctionExpression;
        interface ConditionIf {
            if: Expression[];
            then?: Action[] | null;
            /** Used by creator only. */
            showThenActions?: boolean;
        }
        interface ConditionElseIf {
            elseif: Expression[];
            then?: Action[] | null;
            /** Used by creator only. */
            showThenActions?: boolean;
        }
        interface ConditionElse {
            else: Action[];
            /** Used by creator only. */
            showThenActions?: boolean;
        }
        interface Condition extends baseAction {
            /** Definition of the action type. */
            objectType: 'Condition';
            parts: (ConditionIf | ConditionElseIf | ConditionElse)[];
        }
        interface SwitchCase extends baseAction {
            /** Definition of the action type. */
            objectType: 'SwitchCase';
            /** An object of type {Compare} which contains the target switch value. */
            compare: IFunction.Value;
            /** */
            cases: VCase[];
            caseDefault: DCase;
        }
        interface ControlApiFunction extends baseAction {
            /** Definition of the action type. */
            objectType: 'ControlApiFunction';
            /** The id of the target control as string value. */
            control: string;
            /** The name of the target api function. */
            fn: string;
            /** An array of {ParamValue} objects. Each element in the array represents a parameter of the function defined in "fn". */
            fnParams: IFunction.Value[];
        }
        interface WriteToSymbol extends baseAction {
            /** Definition of the action type. */
            objectType: 'WriteToSymbol';
            /** The target binding symbol as binding expression. */
            symbolExpression: string | null;
            /** An object of type {Value}. */
            value: IFunction.Value;
        }
        /** Free comment. Will be ignored on runtime. */
        interface Comment {
            /** Definition of the action type. */
            objectType: 'Comment';
            /** Free comment. Will be ignored on runtime. */
            comment?: string;
            active?: undefined;
            success?: undefined;
            error?: undefined;
            asyncWait?: undefined;
        }
        interface TAFunction extends baseAction {
            /** Definition of the action type. */
            objectType: 'Function';
            /** The name of the target setter function which is public accessible in the control defined in "Control". */
            fn: string;
            /** An array of {ParamValue} objects. Each element in the array represents a parameter of the setter function defined in "Fn". */
            fnParams: IFunction.Value[];
        }
        interface JavaScript extends baseAction {
            /** Definition of the action type. */
            objectType: 'JavaScript';
            /**
             * An array of string objects. Each string in the array represents one line of code.
             * To avoid invalidation of the TcHmiConfig it is important to escape quotationmarks.
             */
            sourceLines: string[];
            /** Tells the system if the function is finished synchronous or if the user will call a feedback function of the context object. */
            waitMode?: 'Synchronous' | 'Asynchronous';
        }
        interface ActionTemplate extends baseAction {
            /** Definition of the action type. */
            objectType: 'ActionTemplate';
            /** The name of the target ActionTemplate.*/
            templateName: string;
            /** A long description of this Action Template. */
            description: string;
            /** An array of {ParamValue} objects. Each element in the array represents a parameter which will be used inside the ActionTemplate */
            fnParams: IFunction.Value[];
        }
        interface FunctionExpression extends baseAction {
            /** Definition of the action type. */
            objectType: 'FunctionExpression';
            functionExpression: string | null;
        }
        interface BindingTarget {
            /**
             * The object type name as {string}.
             * Extensions:
             * {BindingTarget}.objectType = "ControlAttributeBindingTarget"
             */
            objectType: string;
        }
        interface ControlAttributeBindingTarget extends BindingTarget {
            objectType: 'ControlAttributeBindingTarget';
            attributeExpression: string | null;
        }
        interface Expression {
            /** An object of type {Value} which represents a value which will be compared. */
            compare1: IFunction.Value;
            /** An object of type {Value} which represents a value which will be compared. */
            compare2: IFunction.Value;
            /**
             * A string value which contains the compare operator string (JavaScript) which will be used to compare the values behind the properties "Compare1" and "Compare2".
             */
            compareOperator: '==' | '===' | '!=' | '!==' | '<' | '<=' | '>' | '>=';
            /**
             * A string|null value which defines the logical binding of the current element to the previous element.
             *
             * The property has to be set to null if its the first {Expression} object in the Expressions array.
             */
            logic: 'AND' | 'OR' | null;
        }
        interface Case {
            actions: Action[];
        }
        /** Value Case */
        interface VCase extends Case {
            /** Configured Value to compare */
            caseValue: IFunction.Value;
        }
        /** Default Case */
        interface DCase extends Case {
        }
    }
    /**
     * Defines tchmiconfig.json
     */
    interface IConfig {
        /** Project version as defined by the customer */
        projectVersion: string;
        /** Splash screen settings */
        splash: {
            versionSource: 'None' | 'Project' | 'Framework';
        };
        /** Path to the Framework Directory. */
        basePath: string;
        /** Scalemode of the full Application. */
        scaleMode: ScaleModeString;
        /** Name of the View which is active while loading the Application. */
        startupView: string;
        /** Path to a custom login page. */
        loginPage?: string;
        /** Project based include files. */
        dependencyFiles?: (StylesheetFileDescription | JavaScriptFileDescription)[];
        /** Name of the Theme which is active while loading the Application. */
        activeTheme: string;
        /** List of Themes of this Application. Key is the themename. */
        themes: Dictionary<ProjectThemeDescription>;
        /** Configuration of the server communication. */
        tcHmiServer: {
            /** Default subscription interval time. */
            websocketIntervalTime: number;
            /** General websocket request/response timeout. */
            websocketTimeout: number;
            /** System websocket request/response timeout. */
            websocketSystemTimeout: number;
            /** Default symbol subscription mode. */
            websocketSubscriptionMode?: 'Change' | 'Poll' | 'ClientPoll' | 'ClientWriteConfirm';
            /**
             * Disables system subscriptions that are not necessary when no resources are created dynamically at runtime.
             * No symbol mappings created dynamically at runtime. No extensions plugged in at runtime. Etc.
             */
            disableOptionalSystemSubscriptions: boolean;
        };
        /** Definition of all project based symbols. */
        symbols: ISymbolConfig;
        /** Definition of global triggers. */
        trigger: Trigger[];
        /** Definition of global intervals. */
        intervals: IIntervalConfig;
        /** List of packages.*/
        packages: IPackageInfo[];
        /** List of all available view files. */
        views: IView[];
        /** List of all available user function files. */
        userFunctions: IUserFunction[];
        /** List of all available Usercontrols. */
        userControls: IUserControl[];
        /** List of all available content files. */
        content: IContent[];
        /** Definition of all available actionTemplates. */
        actionTemplates: ActionTemplate[];
        /** List of all available application level localization files (LocalizedText symbols). */
        languages: ILanguageFileMap;
        /** List of all available framework core localization file overrides. */
        languagesForFramework?: ILanguageFileMap;
        /** List of all available package localization file overrides. */
        languagesForPackages?: IModuleLanguageFileMapsMap;
        /** List of all available control module localization file overrides. */
        languagesForControls?: IModuleLanguageFileMapsMap;
        /** List of all available function module localization file overrides. */
        languagesForFunctions?: IModuleLanguageFileMapsMap;
        /**
         * Language file used if a language file or a key within a language file is missing.
         * Attention: Can be empty string!
         */
        languageFallback?: string;
        /** List of all available keyboard layout files in project. */
        keyboardLayouts: IProjectKeyboardLayout[];
        /** Disable various loading optimizations */
        disableLoadingOptimization?: boolean;
        tcSpeech?: TcHmi.TcSpeech.BaseConfig;
        /** Definition of engineering settings. */
        creatorSettings: {
            /** Definition of the viewport emulation. */
            viewport: {
                /** Width as a Pixel Number. */
                defaultWidth: number;
                /** Height as a Pixel Number. */
                defaultHeight: number;
            };
        };
        /** Definition of global binding settings. */
        binding: {
            /**
             * Determines how a binding will handle symbol related read/watch errors.
             * Possible values:
             * - Ignore: Ignore the error.
             * - Reset: Forward the default toggle switch (null) to force the control attribute to reset to default value.
             */
            symbolError: 'Ignore' | 'Reset';
            /**
             * Determines how a binding will handle symbol related write errors.
             * Possible values:
             * - Ignore: Ignore the error.
             * - ReadBack: Read back the current symbol value after write attempt failure and forward it to the control.
             */
            symbolWriteError: 'Ignore' | 'ReadBack';
        };
        /** Defines the system keyboard */
        systemKeyboard?: {
            /** Defines if the system keyboard should open on focus of a textarea or input element. */
            autoOpen?: boolean;
            /** Id of the keyboard provider */
            providerName: string;
            /** Definition of the keyboard mappings. Key is the locale. */
            projectKeyboardMapping?: Dictionary<Keyboard.InputModeMapping>;
            /** Layout of the system keyboard. */
            layout?: Keyboard.ContainerLayout;
        };
        systemPopups?: {
            /** Id of the popups provider. */
            providerName: string;
        };
    }
    type LanguageFileMapEntry = string | string[];
    /** Mapping between locale (Key is Language and Region as in ISO 639/BCP 47 with '-' separator) and file path (or file path array) as a value. */
    interface ILanguageFileMap extends Dictionary<LanguageFileMapEntry> {
    }
    /** Mapping between control and function type identifier to language filemap (which itself maps a language key to a file path (or file path array) value). */
    interface IModuleLanguageFileMapsMap extends Dictionary<ILanguageFileMap> {
    }
    interface ISymbolConfig {
        /** Definition of all project based internal symbols (available via %i%symbolname%/i%). Key is the symbol name.*/
        internal: {
            [symbolname: string]: IInternalSymbolItem;
        };
        /** Definition of all project based themedResource symbols (available via %tr%symbolname%/tr%). Key is the symbol name. */
        themedResources: {
            [symbolname: string]: IThemedResourceItem;
        };
        /** Definition of all project based timer symbols (available via %t%timer%/t%). Key is the symbol name.*/
        timer: {
            [symbolname: string]: ITimerSymbolItem;
        };
    }
    /** Definition of the internal symbol. */
    interface IInternalSymbolItem {
        /** Value for this internal symbol. */
        value?: any;
        /** Information about the expected type as a tchmi reference name. */
        type: string;
        /** The change of value is saved in the client and available after reload. Defaults to false if not provided. */
        persist?: boolean;
        /** The symbol can not be changed. Defaults to false if not provided. */
        readonly?: boolean;
    }
    /** Definition of the themedResource symbol. */
    interface IThemedResourceItem {
        /** Information about the expected type as a tchmi reference name */
        type: string;
        /** A Map containing a value for each theme. Key is the themename. */
        values: Dictionary<any>;
        /** A description of the themed resource. */
        description?: string;
    }
    /** Definition of the timer symbol. */
    interface ITimerSymbolItem {
        /** Value pattern for this timer symbol. */
        pattern: (ITimerSymbolValuePatternItem | ITimerSymbolSymbolPatternItem)[];
        /** SymbolExpression (Boolean) which controls the state of the timer. */
        runSymbol?: string;
        /** Value which is active when the timer is stopped. */
        stopValue?: any;
        /** Information about the expected type as a tchmi reference name. */
        type: string;
    }
    /** Definition of a timer symbol pattern. */
    interface ITimerSymbolPatternItem {
        /** Duration in milliseconds for this pattern part. */
        duration: number;
    }
    /** Definition of a timer symbol value pattern. */
    interface ITimerSymbolValuePatternItem extends ITimerSymbolPatternItem {
        /** Value for this pattern part. */
        value: any;
    }
    /** Definition of a timer symbol symbol pattern. */
    interface ITimerSymbolSymbolPatternItem extends ITimerSymbolPatternItem {
        /** SymbolExpression which represents the value for this timer symbol pattern part. */
        symbol: string;
    }
    /**
     * Defines every <LangugageCode>.localization
     */
    interface ILocalization {
        /** Identifier of the describing schema. */
        $schema?: string;
        /** Definition of this Language and Region as in ISO 639/BCP 47 with '-' separator. */
        locale: string;
        /**
         * Identifies the target scope of this localization file.
         * Required in engineering environment if file is used for override.
         */
        scope?: 'Application' | 'Framework' | 'Control' | 'Function' | 'Server';
        /**
         * Identifies the localization file source for project level override.
         * Required in engineering environment if file is used to override localization files with Control or Function scope.
         * Example: 'TcHmi.Controls.System.TcHmiControl'
         */
        source?: string;
        /** List of localized Text. */
        localizedText: ILocalizedTextMap;
    }
    /** Mapping between localization key and value. */
    type ILocalizedTextMap<K extends string = string> = Record<K, string | null>;
    interface baseDependencyFileDescription {
        /** Path to the file with the project/control directory as base path. Can be .js, .theme or .css depending on "type" property. */
        name: string;
        /** A long description of this file. */
        description?: string;
    }
    /** project tchmiconfig.json, control Description.json#DependencyFile and function FunctionDescription#DependencyFile section */
    interface JavaScriptFileDescription extends baseDependencyFileDescription {
        /** Type of the control asset. */
        type: 'JavaScript' | 'EsModule';
    }
    /**
     * Control Description.json#dependencyFiles
     * tchmiconfig.json#dependencyFiles
     */
    interface StylesheetFileDescription extends baseDependencyFileDescription {
        /** Type of the control asset. */
        type: 'Stylesheet';
    }
    /**
     * Control Description.json#themeFiles
     * tchmiconfig.json#dependencyFiles
     */
    interface ThemedValuesFileDescription extends baseDependencyFileDescription {
        /** Type of the control asset. */
        type: 'ThemedValues';
    }
    /**
     * Defines a control
     */
    interface ControlDescription {
        /** Identifier of the describing schema. */
        $schema?: string;
        /**
         * 0: 1.10 style controls
         * 1: 1.12 style controls:
         */
        apiVersion?: number;
        /** Control name without namespace like TcHmiButton */
        name: string;
        /** Control namespace like TcHmi.Controls.Beckhoff */
        namespace: string;
        /** Name which should be presented the user. */
        displayName?: string;
        version: TcHmi.Version;
        /** Determine if a control is shown to the user. */
        visible: boolean;
        /** Determine if the control can be changed by a theme. Defaults to standard. */
        themeable: 'None' | 'Standard' | 'Advanced';
        /** FQN of inheritance parent. */
        base: string;
        uses: string[];
        category: string;
        displayPriority?: number;
        heritable: boolean;
        /** A long description of this control. */
        description: string;
        /** The event which is manipulated on double click in designer. */
        defaultDesignerEvent?: string;
        properties: {
            /** Can contain other controls. */
            containerControl: boolean;
            /** Default size of control after instantiation */
            geometry: {
                width: number;
                height: number;
            };
        };
        icons: IconDescription[];
        template?: string;
        /** JS files the creator includes in our HTML and CSS files the framework loads itself. */
        dependencyFiles: (TcHmi.JavaScriptFileDescription | TcHmi.StylesheetFileDescription)[];
        /** Files the framework fetches potentially. Key is the themename. */
        themes?: TcHmi.Dictionary<TcHmi.ControlThemeDescription>;
        /** A list of attributes of this control. */
        attributes: TcHmi.ControlAttributeDescription[];
        /** Resources of the control. */
        themedResources: ControlResourceDescription[];
        /** A list of API Functions of this Control. */
        functions?: ControlFunctionDescription[];
        attributeCategories?: {
            name: string;
            displayPriority: number;
            defaultCollapsed?: boolean;
            description: string;
        }[];
        /** A list of access rights which is checked by this control. Will be checked by its child controls, too, if they are configured with a matching virtual mapping */
        access?: TcHmi.Controls.ControlAccessDescription[];
        /** A list of events associated to this control. */
        events?: ControlEventDescription[];
        /** List of custom data types. */
        dataTypes?: TcHmi.DataTypeDescription[];
        /** Mapping between locale (Key is Language and Region as in ISO 639/BCP 47 with '-' separator) and file path (or file path array) as a value. */
        languages?: ControlLanguages;
    }
    interface IconDescription {
        /** Path to the icon file */
        name: string;
        width: number;
        height: number;
    }
    interface ControlResourceDescription {
        /** Name of the resource. */
        name: string;
        /** Name which should be presented the user. */
        displayName?: string;
        /** A long description of this resource. */
        description?: string;
        /** The type of the resource gives the tchmi creator a hint to use a custom editor for this attribute.\nThe corresponding schemas are described as dataTypes. */
        type: string;
    }
    interface baseEventDescription {
        /** Internal name of the event like ".onPressed" on controls. */
        name: string;
        /** Name which should be presented the user. */
        displayName?: string;
        /** A long description of this event. */
        description: string;
        /** The event can have the option preventDefault. */
        allowsPreventDefault?: boolean;
    }
    interface ControlEventDescription extends baseEventDescription {
        /** Determine if an event is shown to the user. */
        visible: boolean;
        heritable: boolean;
        /** category of this event */
        category: 'Operator' | 'Control' | 'Framework';
        /**
         * An optional display priority of the event. Most users will only use events with a low number.\nEvents without this value are very rare used.
         * 10 is load, unload, pressed. 15 are major interaction events like click, right click, double click. 50 are enter, leave, mousedown, mouseup.
         */
        displayPriority?: number;
    }
    interface ControlFunctionDescription {
        /** Internal name of function. */
        name: string;
        /** Name which should be presented the user. */
        displayName?: string;
        /** Determine if a function is shown to the user. */
        visible: boolean;
        /** A long description of this function. */
        description: string;
        category: string;
        params?: {
            /** Name of the parameter */
            name: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** A long description of this parameter. */
            description: string;
            /** Information about the expected type as a tchmi reference name. */
            type: string;
            /** Defines if this is bindable to a Symbol. */
            bindable: boolean;
            /** Determine if a parameter is shown to the user. */
            visible: boolean;
        }[];
        /** Return value type as a tchmi reference name or null if the function has no return value. */
        type?: string | null;
        heritable: boolean;
        /** If set to true a context object will be injected into the JavaScript scope which can for example be used to tell the system that an asynchronous operation has finished. */
        injectContextObject?: boolean;
        /**
         * This property defines search terms for the Engineering that are to optimize the search function within the Actions & Conditions Editor.
         * This makes it possible to find the function using terms other than the function name.
         * For example, if the strings "MyFunction" and "1234" are added to the array, the function can also be found under these terms. */
        searchTerms?: string[];
        /** Tells the system if the function is finished synchronous or if the user will call a feedback function in the context object of the context object to signal finish. */
        waitMode?: 'Synchronous' | 'Asynchronous';
    }
    /** Mapping between locale (Key is Language and Region as in ISO 639/BCP 47 with '-' separator) and file path (or file path array) as a value. */
    interface ControlLanguages extends ILanguageFileMap {
    }
    /** Description of a function */
    interface FunctionDescription {
        /** Identifier of the describing schema. */
        $schema?: string;
        apiVersion?: number;
        version: Version;
        dependencyFiles: JavaScriptFileDescription[];
        function: FunctionDefinition;
        dataTypes?: DataTypeDescription[];
        /** List of all available function localization files. */
        languages?: ILanguageFileMap;
    }
    /** List of custom data types. */
    interface DataTypeDescription {
        /** Name for the datatype file (property will not be used). */
        name?: string;
        /** Path to the schema describing the datatypes. */
        schema: string;
    }
    interface FunctionDefinition {
        name: string;
        namespace?: string;
        displayName?: string;
        description: string;
        category: string;
        visible: boolean;
        /** If set to true a context object will be injected into the JavaScript scope which can be used to tell the system that an asynchronous operation has finished. */
        injectContextObject?: boolean;
        /** Tells the system if the function is finished synchronous or if the user will call a feedback function of the context object. */
        waitMode?: 'Synchronous' | 'Asynchronous';
        /** Return value type as a tchmi reference name or null if the function has no return value. */
        returnValue?: {
            /** Return value type as a tchmi reference name. */
            type: string;
            description?: string;
        } | null;
        arguments: FunctionArgument[];
    }
    interface FunctionArgument {
        /** Variable name in the function. */
        name: string;
        /** Name which should be presented the user. */
        displayName?: string;
        /** Information about the expected type as a tchmi reference name. */
        type: string;
        /** A long description of this argument. */
        description: string;
        /** This parameter is mandatory for this function. */
        required: boolean;
        /** This parameter can be binded to a symbol. */
        bindable: boolean;
        /** This parameter can have the same binding options as a control attribute. */
        allowControlAttributeBindingOptions?: boolean;
        /** Determines if symbol references injected via this parameter will be watched by the function itself if 'delegatedWatch: true' is defined in the context object when calling the function. */
        allowSymbolReferenceWatchDelegation?: boolean;
        /** TcHmiCreator ui state.*/
        asReference?: boolean;
        /** This value will be used as initial value while function is generated in engineering. */
        defaultValue?: any;
        /** Specified the argument as rest parameter (variable number of arguments). */
        restParameter?: boolean;
    }
    interface baseThemeDescription {
        /** References to Resources of this Theme. */
        resources: (ThemedValuesFileDescription | StylesheetFileDescription)[];
    }
    interface ControlThemeDescription extends baseThemeDescription {
    }
    interface ProjectThemeDescription extends baseThemeDescription {
        /** Do not load theme files (.theme and .css) for this controls */
        replacesThemeForControls?: string[];
        /**
         * Project only: Do not load .css files for these package components (as 'packageId/componentName').
         * For example 'Beckhoff.TwinCAT.HMI.Controls/ContentTabs' or for all global resources 'Beckhoff.TwinCAT.HMI.ResponsiveNavigation' */
        replacesThemeForPackageComponents?: string[];
    }
    /** Package information as given in tchmiconfig */
    interface IPackageInfo {
        /** Package name like Beckhoff.TwinCAT.HMI.Controls */
        name: string;
        /** Base url path for this package like /Beckhoff.TwinCAT.HMI.Controls or /framework */
        basePath: string;
    }
    interface IUserFunction {
        /** Path to the user function js file. */
        url: string;
    }
    interface IPartial {
        /** Path to the Partial main file. */
        url: string;
    }
    interface IView extends IPartial {
        /** Defines if the file should be loaded and compiled before usage to accelerate later usage. */
        preload: boolean;
        /** Defines if the objects related to the target partial should be kept alive after destroy to avoid addition compile. */
        keepAlive: boolean;
        /**
         * Defines if bindings on controls within this file should be preloaded before its content is displayed
         * to have proper values when the content is displayed.
         * Requires Preload to be activated.
         */
        preloadBindings?: boolean;
    }
    interface IContent extends IPartial {
        /** Defines if the file should be loaded and compiled before usage to accelerate later usage. */
        preload: boolean;
        /** Defines if the objects related to the target partial should be kept alive after destroy to avoid addition compile. */
        keepAlive: boolean;
        /** Defines if the content should be loaded synchronous. */
        loadSync?: boolean;
        /**
         * Defines if bindings on controls within this file should be preloaded before its content is displayed
         * to have proper values when the content is displayed.
         * Requires Preload to be activated.
         */
        preloadBindings?: boolean;
    }
    interface IUserControl extends IPartial {
    }
    interface IIntervalConfig {
        [intervalName: string]: IIntervalItem;
    }
    interface IIntervalItem {
        interval: number;
        actions: Trigger.Action[];
    }
    interface ActionTemplate {
        /** Name of the Action Template. */
        name: string;
        category: string;
        actions: Trigger.Action[];
        parameters: TemplateParameter[];
    }
    interface TemplateParameter {
        name: string;
        /** Information about the expected type as a tchmi reference name */
        type: string;
        description: string;
        structDataType: any;
    }
    interface IProjectKeyboardLayout {
        url: string;
    }
    interface EnumMapping {
        [index: number]: string;
    }
    /**
     * A symbol expression referencing a text or
     * an object with a symbol expression and some values useful for this text.
     */
    type Localizable = string | FormattedLocalizable;
    /**
     * Object with a symbol expression referencing a text.
     * This text can contain placeholders which can be filled with values from formatValues.
     */
    interface FormattedLocalizable {
        /**
         * Symbol expression referencing a text.
         * This can contain placeholders which can be filled with values from formatValues.
         */
        symbolExpression: string;
        /** A list of values which can be used to replace the placeholders in the text value. */
        formatValues: any[];
    }
    namespace Controls {
        /** Dictionary of all ControlsAttributes with mandatory entry 'data-tchmi-type' and 'id'. */
        interface ControlAttributeList extends Dictionary<TcHmi.ControlAttribute> {
            'data-tchmi-type': TcHmi.ControlAttribute<string>;
            'id': TcHmi.ControlAttribute<string>;
        }
        /** Description of (virtual) control rights */
        interface ControlAccessDescription {
            /** Name of the access definition in the HTML. */
            name: string;
            /** Name which should be presented the user. */
            displayName?: string;
            /** A long description of this access definition. */
            description?: string;
            /** Determine if an access definition is shown to the user in engineering. */
            visible?: boolean;
            /** Defines the default of this control access right. This will be used if the check for this access right does not return a result. */
            defaultValueInternal: boolean | null;
            /** Names of access rights which must be valid, if this right should be granted. For example 'create' should work only when 'operate' is granted. */
            dependsOn?: string[];
        }
    }
    interface ControlAttribute<T = any> {
        /** Name from HTML, so guaranteed to be lowercase only with simple attributes! */
        name: string;
        /** Value for this attribute from "HTML" */
        value: T;
        descr: ControlAttributeDescription | null;
    }
    interface ControlAttributeDescription {
        /** Name of the attribute in the HTML. This comes from JSON of the user! Casing can be uppercase even if HTML is lowercase only */
        name: string;
        /** Name of the attribute property. */
        propertyName: string;
        /** Name of the attribute property setter (can be empty string or missing if the attribute is readonly). */
        propertySetterName?: string;
        /** Name of the attribute property getter. */
        propertyGetterName: string;
        /** Reference to a corresponding other propertyName */
        refTo?: string;
        /** Name which should be presented the user. */
        displayName?: string;
        /** Determine if an attribute is shown to the user. */
        visible: boolean;
        /** Determine if the attribute can be changed by a theme. Defaults to standard. */
        themeable: 'None' | 'Standard' | 'Advanced';
        /** Information about the expected type as a tchmi reference name */
        type: string;
        /** Name of the area this attribute will be listed in the creator. */
        category: string;
        /** Display priority of the Attribute */
        displayPriority?: number;
        /** A long description of this attribute. */
        description: string;
        /** This property was defined but not enforced till 1.10 and therefore wrong used by many controls @deprecated */
        required?: boolean;
        /** The attribute has to be set in the HTML. Otherwise the control is not valid. */
        requiredOnCompile?: boolean;
        /** Readonly attributes do not need a setter. */
        readOnly: boolean;
        /** A definition of functions which are allowed to use here. The functions must match the requiredArguments signature. */
        allowedFunctions?: {
            /** The type of the attribute gives the tchmi creator a hint to use a custom editor for this attribute. */
            returnType: string | null;
            requiredArguments: {
                /** Information about the expected type as a tchmi reference name */
                type: string;
            }[];
            /** A compatible function must match this waitmode. */
            requiredWaitMode: 'Synchronous' | 'Asynchronous';
        };
        /** Defines if this is bindable to a Symbol. */
        bindable: boolean;
        /** Defines if heritable. */
        heritable: boolean;
        /** This will be used as default BindingMode on bindings to this attribute if no BindingMode is defined in the symbol expression. Defaults to 'OneWay'. */
        defaultBindingMode?: BindingMode;
        /**
         * This property indicates the default value for the attribute that is used in the
         * Engineering Properties window when instantiating the control and written to the HTML code.
         */
        defaultValue: any;
        /**
         * This property specifies the internal default value for the attribute.
         * This value is passed to the Setter function when the control has no other value in HTML code.
         * The internal default aka runtime default may differ from the normal default (drop default).
         */
        defaultValueInternal: any;
        /** Allows symbol expressions in properties of object or array values. */
        allowSymbolExpressionsInObject?: boolean;
        /** Allows injection of symbol references before initialization of the control has finished. */
        allowEarlySymbolReferenceInjection?: boolean;
        /**
         * Allows delegation of symbol reference preloading.
         * @deprecated
         */
        allowSymbolReferencePreloading?: boolean;
    }
    namespace Config {
        /**
         * Information about a nuget package
         */
        interface NugetPackageMetadata {
            /** A comma-separated list of packages authors, matching the profile names on nuget.org. */
            authors: string;
            /** A description of the package for UI display. */
            description: string;
            /** A human-friendly title of the package which may be used in some UI displays. */
            title: string;
            /** The version of the package, following the major.minor.patch pattern. Version numbers may include a pre-release suffix as described in Package versioning. */
            version: string;
        }
    }
    namespace Keyboard {
        /**
         * Mapping from input mode string to project based keyboard layout.
         *
         * The TcHmiKeyboard provider supports this config:
         *
         * A focused HTMLInput or HTMLTextarea element can have following
         * properties to request a specific keyboard layout:
         * HTML attribute 'data-tchmi-input-mode' to force a specific tchmi input mode (could be any string if mapping is provided in project)
         * HTML attribute inputmode === ('numeric' || 'decimal')
         * HTML attribute type === ('number')
         */
        interface InputModeMapping extends Dictionary<string> {
            /**
             * Keyboard layout path for texts and unknown input elements.
             * Could be the empty string. Will fall back to 'text' of fallback language.
             */
            text: string;
            /**
             * Keyboard layout path for decimal input elements (potential fractional input).
             * Could be the empty string. Will fall back to 'decimal' of fallback language,
             * 'text' keyboard file of this language or 'text' of fallback language.
             */
            decimal: string;
            /**
             * Keyboard layout path for numeric input elements (non-fractional input).
             * Could be empty. Will fall back to 'decimal' of this language,
             * 'numeric' / 'decimal' of fallback language,
             * 'text' keyboard file of this language or 'text' of fallback language.
             */
            numeric: string;
        }
        /**
         * Possible input modes for keyboard handling.
         * The list is extensible in the project, but there are some well known values:
         *
         * - 'skip' is no keyboard. Current keyboard will be NOT closed.
         * - 'none' is no keyboard. Current keyboard will be closed.
         *
         * - 'numeric' is a numeric keyboard to use with non-fractional input
         * - 'decimal' is a numeric keyboard to use with potential fractional input
         *
         * - 'text' is a text keyboard and used as a fallback for unknown input modes
         */
        type KeyboardInputMode = 'skip' | 'none' | Exclude<keyof InputModeMapping, number>;
        /**
         * Possible positions for the system keybaord.
         *
         * - 'popup' The keyboard will be opened in a popup.
         * - 'footer' The keyboard will be displayed in a footer.
         */
        type Position = 'popup' | 'footer';
        /**
         * The height and position describing the system keyboards container layout.
         */
        interface ContainerLayout {
            /**
             * Pixel height of the system keyboard.
             * If empty the defined height of the keyboard layout will be used.
             */
            height?: number | null;
            /**
             * Position of the system keyboard.
             * If not defined will use popup.
             */
            position?: Position;
        }
    }
    /**
     * Functions for interaction with TcSpeech.
     * @preserve (Part of the public API)
     */
    namespace TcSpeech {
        /** Configuration for TcSpeech Integration in tchmiconfig.json */
        interface BaseConfig {
            /** Name of the TcSpeech extension on the server. Defaults to 'TcHmiSpeech' */
            domain: string;
            /** Our speaker should be used. */
            enableSpeaker: boolean;
            /** Our microphone should be used. */
            enableMicrophone: boolean;
            /** Default audio volume */
            defaultVolume: number;
            /**
             * Ignore detected speech commands with a lower relative measure of the certainty of correct recognition of a phrase.
             * The value is from 0.0 to 1.0, for low to high confidence, respectively.
             **/
            confidenceThreshold: number;
        }
        interface ConnectionOptions {
            /** Target a specific remote TwinCAT speech engine to connect */
            remoteSocketId?: number;
            /** Constraint for Microphone */
            sourceConstraints?: MediaStreamConstraints['audio'];
            /** Constraint for Speaker */
            sinkConstraints?: {
                /** Device id of audiooutput */
                deviceId?: string;
            };
        }
        enum AudioEntityPriority {
            Low = 5,
            Normal = 10,
            High = 15
        }
        interface SpeechSynthesisResult extends TcHmi.IResultObject {
            /** GUID for this request. */
            guid?: string;
            state?: 'Queued' | 'Playing' | 'Stopped';
        }
        interface IEventCallbackParameter {
            /** Recognition Tag of the active SRGS file which was detected. */
            Command: string;
            /**
             * A relative measure of the certainty of correct recognition of a phrase.
             * The value is from 0.0 to 1.0, for low to high confidence, respectively. */
            Confidence: number;
            /** Parameter which was detected by speech recognition. Type depends on SRGS file. */
            Parameter: unknown;
        }
    }
    /**
     * The names of the enumeration exist at runtime.
     * For example, you can (and should) use TcHmi.Errors.NONE directly in a comparison.
     * @preserve (Part of the public API)
     */
    enum Errors {
        NONE = 0,
        ERROR = 1,
        E_PARAMETER_INVALID = 2,
        E_TIMEOUT = 3,
        E_EXCEPTION = 4,
        E_INVALID = 5,
        E_NOT_UNIQUE = 6,
        E_OUT_OF_RANGE = 7,
        E_DESTROYED = 8,
        E_NOT_SUPPORTED = 100,
        E_SYSTEM_NOT_READY = 105,
        E_NOT_ALLOWED = 110,
        E_UNKNOWN = 115,
        E_UNKNOWN_TYPE = 120,
        E_KEY_NOT_FOUND = 130,
        E_TYPE_INVALID = 150,
        E_VALUE_INVALID = 160,
        E_REGISTRATION_MISSING = 180,
        E_REGISTRATION_ERROR = 190,
        E_MODULE_MISSING = 200,
        E_MODULE_ERROR = 210,
        E_WEBSOCKET_NOT_READY = 1000,
        E_WEBSOCKET_CLOSED = 1001,
        E_WEBSOCKET_NOT_SUPPORTED = 1404,
        E_WEBSOCKET_OPEN_SERVER_LICENSE_CHECK_FAILED = 1500,
        E_WEBSOCKET_OPEN_SERVER_LICENSE_MISSING = 1501,
        E_WEBSOCKET_OPEN_SERVER_NO_ACCESS = 1502,
        E_SYMBOL_STATE_INVALID = 2000,
        E_SYMBOL_VALUE_INVALID = 2001,
        E_SYMBOL_RESOLVE_SCHEMA = 2002,
        E_SYMBOL_READONLY = 2003,
        E_SYMBOL_UNKNOWN = 2010,
        E_SYMBOL_INVALID_DATA_PROVIDER_ENTRY = 2020,
        E_SYMBOL_INVALID_PATH = 2030,
        E_SYMBOL_SUBSYMBOL_ERROR = 2040,
        E_SYMBOL_SUBVALUE_ERROR = 2045,
        E_SYMBOL_OBJECT_RESOLVE = 2050,
        E_SYMBOL_RESOLVE_META_DATA = 2060,
        E_SYMBOL_UNKNOWN_ATTRIBUTE = 2100,
        E_SYMBOL_RESOLVE_EXPRESSION = 2150,
        E_SYMBOL_RESOLVE_REFERENCE = 2200,
        E_SERVER_RESPONSE_ERROR = 3000,
        E_SERVER_COMMAND_ERROR = 3005,
        E_SERVER_INVALID_RESPONSE = 3010,
        E_SERVER_COMMANDS_MISSING = 3015,
        E_SERVER_COMMAND_MISSING = 3016,
        E_SERVER_READVALUE_MISSING = 3020,
        E_SERVER_WRITEVALUE_MISSING = 3025,
        E_SERVER_RESPONSE_MISSING = 3030,
        E_SERVER_DOMAIN_UNKNOWN = 3100,
        E_SERVER_HANDSHAKE = 3200,
        E_FUNCTION_MISSING_FUNCTION_REFERENCE = 4000,
        E_FUNCTION_MISSING_FUNCTION_DESCRIPTION = 4005,
        E_FUNCTION_INVALID_CONFIGURATION = 4010,
        E_FUNCTION_EXCEPTION = 4020,
        E_FUNCTION_UNKNOWN = 4030,
        E_FUNCTION_RESTPARAMETER_DEFINITION_MISSING = 4040,
        E_FUNCTION_RESOLVING_PARAMETER_FAILED = 4050,
        /** Value of the FunctionExpression is known synchronous. The caller is responsible for the value! */
        E_FUNCTION_HANDLED_VIA_RETURN_VALUE = 4060,
        E_FUNCTION_EXPRESSION_PARSER_ERROR = 4100,
        E_FUNCTION_EXPRESSION_EXCEPTION = 4120,
        E_FUNCTION_CALL_ABORTED = 4130,
        E_FUNCTION_DESTROYED = 4140,
        E_TRIGGER_ACTION_EXCEPTION = 5050,
        E_TRIGGER_JAVASCRIPT_EVAL_EXCEPTION = 5055,
        E_TRIGGER_FUNCTION_EXPRESSION_EXCEPTION = 5060,
        E_TRIGGER_RESOLVE_CONDITION_EXPRESSION_EXCEPTION = 5065,
        E_TRIGGER_CONDITION_INVALID = 5200,
        E_CONTROL_INSTANCE_NOT_FOUND = 6000,
        E_CONTROL_INVALID_CONFIGURATION = 6001,
        E_CONTROL_ATTRIBUTE_NOT_FOUND = 6005,
        E_CONTROL_ATTRIBUTE_INVALID_CONFIGURATION = 6010,
        E_CONTROL_INSTANCE_NO_LONGER_AVAILABLE = 6020,
        E_SCHEMA_INVALID = 7000,
        E_SCHEMA_INVALID_PATH = 7010,
        E_SCHEMA_INVALID_REF_ID = 7020,
        /** Deprecated. Use E_SCHEMA_UNKNOWN_SOURCE instead. */
        E_SCHEMA_UNKNOWN_FILE = 7030,
        E_SCHEMA_UNKNOWN_SOURCE = 7030,// Replaces E_SCHEMA_UNKNOWN_FILE but keeps value for compatibility.
        E_SCHEMA_UNKNOWN_DEFINITION = 7040,
        E_SCHEMA_NOT_RESOLVED = 7050,
        E_PACKAGE = 8000,
        E_LOCALIZATION_UNKNOWN_KEY = 9000,
        E_INTERACTIVE_WRITE_ABORT = 10100
    }
    const enum HttpStatusCode {
        Continue = 100,
        Switching = 101,
        Ok = 200,
        Created = 201,
        No_Content = 204,
        Partial_Content = 206,
        Multiple_Choices = 300,
        Moved_Permanently = 301,
        Redirect = 302,
        Not_Modified = 304,
        Temporary_Redirect = 307,
        Permanent_Redirect = 308,
        Bad_Request = 400,
        Unauthorized = 401,
        Payment_Required = 402,
        Forbidden = 403,
        Not_Found = 404,
        Method_Not_Allowed = 405,
        Request_Timeout = 408,
        Gone = 410,
        Length_Required = 411,
        Precondition_Failed = 412,
        Request_Payload_too_Large = 413,
        Range_Not_Satisfiable = 416,
        Expectation_Failed = 417,
        Upgrade_Required = 426,
        Too_Many_Requests = 429,
        Custom_License_Expired = 460,
        Custom_Login_Timeout = 461,
        Custom_Too_Many_Connections = 463,
        Custom_Server_Starting = 464,
        Custom_License_Limit_Exceeded = 465,
        Custom_Missing_Parameter = 466,
        Internal_Server_Error = 500,
        Not_Implemented = 501,
        Service_Unavailable = 503,
        Version_not_Supported = 505,
        Custom_Extension_not_Loaded = 520,
        Custom_Syntax_Error = 521,
        Custom_Forced_Disconnect = 522
    }
    /**
     * For internal use only.
     * Do not use or manipulate resources from within TcHmi.System in your code.
     * @preserve (Part of the public API)
     */
    namespace System {
        /**
         * DEPRECATED
         * Please use TcHmi.LOG_LEVEL
         * @deprecated Please use TcHmi.LOG_LEVEL
         */
        const enum LOG_LEVEL {
            Performance = -1,
            None = 0,
            Error = 1,
            Warning = 2,
            Info = 3,
            Debug = 4
        }
    }
}
declare namespace TcHmi {
    /**
     * Interface for destroyable resources.
     */
    abstract class Destroyable {
        /**
         * Destroys the resource.
         * This method should be called when the resource is no longer needed.
         * @preserve (Part of the public API)
         */
        abstract destroy(): void;
        /**
         * Used to determine if the resource has been destroyed.
         */
        protected __isDestroyed: boolean;
        /**
         * Used to determine if the resource has been destroyed.
         * @preserve (Part of the public API)
         */
        isDestroyed(): boolean;
        /**
         * Used to determine if the resource is destroyable.
         * @preserve (Part of the public API)
         */
        isDestroyable(): boolean;
        /**
         * Reference counter for the resource.
         */
        protected __destroyPrivileges: number;
        /**
         * When called a previously claimed destroy privilege is released.
         * This will decrease the privilege counter.
         * @preserve (Part of the public API)
         */
        protected __releaseDestroyPrivilege(): void;
        /**
         * When called unwanted destruction of the resource is avoided by increasing a reference counter.
         * Make sure to call destroy() when you are done with the resource to decrease the privilege counter again and possibly destroy the instance.
         * @preserve (Part of the public API)
         */
        claimDestroyPrivilege(): void;
    }
}
declare namespace TcHmi.Controls {
    /**
     * TwinCAT HMI System Controls
     * Check out
     * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3729751819.html?id=437693173022431772
     * for an API reference.
     * @preserve (Part of the public API)
     */
    namespace System {
    }
    /** Constructor which generates a TcHmi Control.
     * @template C defines the type for the control
     */
    interface baseTcHmiControlConstructor<C extends TcHmi.Controls.System.baseTcHmiControl = TcHmi.Controls.System.baseTcHmiControl> {
        new (element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList): C;
        readonly prototype: C;
    }
}
declare namespace TcHmi.Controls.System {
    /**
     * Abstract base class for all TwinCAT HMI Controls.
     * Needed for handling controls in Framework APIs.
     * Check out
     * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3845361931.html?id=3265481440996758836
     * for an API reference.
     * @preserve (Part of the public API)
     */
    abstract class baseTcHmiControl extends TcHmi.Destroyable {
        /**
         * Constructor
         */
        constructor();
        /**
         * Main HTML Element of the Control as jQuery object.
         * @preserve (Part of the public API)
         */
        abstract getElement(): JQuery;
        /**
         * Precompiled copy of main JQuery element defining this control.
         * @preserve (Part of the public API)
         */
        abstract getPcElement(): JQuery;
        /**
         * Set __pcElement (with cleaned prevObj jQuery Stack)
         * @param value
         */
        abstract __setPcElement(value: JQuery): void;
        /**
         * List of attributes defined in html.
         * @preserve (Part of the public API)
         */
        abstract getAttrs(): TcHmi.Controls.ControlAttributeList;
        /**
         * Type of the control as full qualified name like 'TcHmi.Controls.Beckhoff.TcHmiButton'
         * @preserve (Part of the public API)
         */
        abstract getType(): string;
        /**
         * Control Id
         * @preserve (Part of the public API)
         */
        abstract getId(): string;
        /**
         * Get all children controls.
         * Only readable access to them is good practice for most parent controls.
         */
        abstract getChildren(): TcHmi.Controls.System.baseTcHmiControl[];
        /**
         * Get dynamic virtual access definition of an instance of a control
         * @param name name of the control right to fetch
         */
        getDescriptionAccessByName?(name: string): TcHmi.Controls.ControlAccessDescription | null;
        /**
         * Returns a boolean determining if the control is initialized.
         * @preserve (Part of the public API)
         */
        abstract getIsInitialized(): boolean;
        /**
         * Returns a boolean determining if the control is attached to the dom.
         * @preserve (Part of the public API)
         */
        abstract getIsAttached(): boolean;
        /**
         * Current life cycle states
         */
        abstract getLifeCycleState(): {
            initialized: boolean;
            attached: boolean;
            /** Detach in progress (in region switching for example) */
            detaching: boolean;
            destroyed: boolean;
        };
        /**
         * Returns a boolean determining if the control was already destroyed.
         * @preserve (Part of the public API)
         */
        abstract getIsDestroyed(): boolean;
        /**
         * Set the internal state of a control
         */
        abstract __setLifeCycleState(doNotCallThisApi: number): void;
        /**
         * Returns a boolean determining if the control should not be destroyed.
         * @preserve (Part of the public API)
         */
        abstract getKeepAlive(): boolean;
        /**
         * Sets __keepAlive
         * @param value
         */
        abstract __setKeepAlive(value: boolean): void;
        /**
         * Sets __keepAlive
         * @param value
         */
        abstract __getKeepAlive(): boolean;
        /**
         * Returns a boolean determining if the control is a container control.
         * @preserve (Part of the public API)
         */
        abstract getIsContainerControl(): boolean;
        /**
         * Parent control or null if there is (till now?) no parent control.
         * @preserve (Part of the public API)
         */
        abstract getParent(): TcHmi.Controls.System.baseTcHmiControl | null;
        /**
         * Sets __parent
         * @param value
         */
        abstract __setParent(value: TcHmi.Controls.System.baseTcHmiControl | null): void;
        /**
         * Adds a child to this control and handles the hierarchical management layer.
         * If this is a container control it will append child's DOM element to the container DOM.
         * @param control Class instance of the child.
         * @param pos Optional index of the position for the new child.
         */
        abstract __addChild(control: TcHmi.Controls.System.baseTcHmiControl, pos?: number | null): void;
        /**
         * Remove a child from a control if this is a container control.
         * @param control
         */
        abstract __removeChild(control: TcHmi.Controls.System.baseTcHmiControl): void;
        /**
         * Returns the Row index of the Control inside a TcHmiGrid Container.
         * @preserve (Part of the public API)
         */
        abstract getGridRowIndex(): number | undefined;
        /**
         * Sets a new GridRow index
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setGridRowIndex(valueNew: number | null): void;
        /**
         * Returns the Column index of the Control inside a TcHmiGrid Container.
         * @preserve (Part of the public API)
         */
        abstract getGridColumnIndex(): number | undefined;
        /**
         * Sets a new GridColumn index
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setGridColumnIndex(valueNew: number | null): void;
        /**
         * Returns the attribute description of the control property
         * @param propertyName
         * @returns
         */
        protected abstract getAttributeDescription(propertyName: string): TcHmi.ControlAttributeDescription | null;
        /**
         * Returns the configured defaultInternalValue of the control property
         * @param propertyName
         * @template T Type of the default value
         * @preserve (Part of the public API)
         */
        protected abstract getAttributeDefaultValueInternal<T = any>(propertyName: string): T | null;
        /**
         * Is raised before control attribute setters are called to allow initialization based on current attribute values.
         * @preserve (Part of the public API)
         */
        abstract __previnit(): void;
        /**
         * Is raised after control attribute setters have been called to allow initialization based on current attribute values.
         * @preserve (Part of the public API)
         */
        abstract __init(): void;
        /**
         * Is called of control is attached to the dom.
         * @preserve (Part of the public API)
         */
        abstract __attach(): void;
        /**
         * Is called if control is detached from the dom.
         * @preserve (Part of the public API)
         */
        abstract __detach(): void;
        /**
         * AccessConfig
         * @preserve (Part of the public API)
         */
        abstract getAccessConfig(): AccessControl[];
        /**
         * Sets the new AccessConfig
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setAccessConfig(valueNew: AccessControl[] | null): void;
        /**
         * Processes the current AccessConfig attribute value.
         * @preserve (Part of the public API)
         */
        abstract __processAccessConfig(): void;
        /**
         * Returns the VirtualControlRightMapping so it can react on parent control virtual rights.
         * @preserve (Part of the public API)
         */
        abstract getVirtualControlRightMappings(): VirtualControlRightMapping[];
        /**
         * Sets the new VirtualControlRightMapping so it can react on parent control virtual rights.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setVirtualControlRightMappings(valueNew: VirtualControlRightMapping[] | null): void;
        /**
         * Returns the effective value of isEnabled based on own and parent isEnabled variable.
         * @preserve (Part of the public API)
         */
        abstract getIsEnabled(): boolean | undefined;
        /**
         * Sets the isEnabled attribute and calls the associated process function (processIsEnabled).
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setIsEnabled(valueNew: boolean | null): void;
        /**
         * Processes and publish the current isEnabled attribute value and of its children.
         */
        abstract __processIsEnabled(): void;
        /**
         * List of classes of the control.
         * @preserve (Part of the public API)
         */
        abstract getClassNames(): string[] | undefined;
        /**
         * Defines the classes the control is part of.
         * @param valueNew
         */
        abstract setClassNames(valueNew: string[] | null): void;
        abstract __injectRenderedDimensions(doNotCallThisApi: object): void;
        /**
         * Returns the current width of the Control.
         * @preserve (Part of the public API)
         */
        abstract getWidth(): number | null | undefined;
        /**
         * Width processor
         * @param callerControl
         */
        abstract __processWidth(callerControl?: baseTcHmiControl): void;
        /**
         * Returns the current width unit of the Control.
         * @preserve (Part of the public API)
         */
        abstract getWidthUnit(): DimensionUnit | undefined;
        /**
         * Returns the current width mode of the control.
         * @preserve (Part of the public API)
         */
        abstract getWidthMode(): SizeMode | SizeModeWithContent | undefined;
        /**
         * Returns if inner dimension depends on child controls.
         * @preserve (Part of the public API)
         */
        abstract innerWidthDependsOnChilds(): boolean;
        /**
         * Updates the inner dimension depending on child controls.
         * @preserve (Part of the public API)
         */
        abstract updateInnerWidthDependingOnChilds(): void;
        /**
         * Returns the current height of the Control.
         * @preserve (Part of the public API)
         */
        abstract getHeight(): number | null | undefined;
        /**
         * Processing of Height
         * @param callerControl
         */
        abstract __processHeight(callerControl?: baseTcHmiControl): void;
        /**
         * Returns the current height mode of the control.
         * @preserve (Part of the public API)
         */
        abstract getHeightMode(): SizeMode | SizeModeWithContent | undefined;
        /**
         * Returns if inner dimension depends on child controls.
         * @preserve (Part of the public API)
         */
        abstract innerHeightDependsOnChilds(): boolean;
        /**
         * Updates the inner dimension depending on child controls.
         * @preserve (Part of the public API)
         */
        abstract updateInnerHeightDependingOnChilds(): void;
        /**
         * Returns the current height unit of the Control.
         * @preserve (Part of the public API)
         */
        abstract getHeightUnit(): DimensionUnit | undefined;
        /**
         * Returns the current top coordinate of the Control.
         * @preserve (Part of the public API)
         */
        abstract getTop(): number | null | undefined;
        /**
         * Returns the current top coordinate unit of the Control.
         * @preserve (Part of the public API)
         */
        abstract getTopUnit(): DimensionUnit | undefined;
        /**
         * Returns the current left coordinate of the Control.
         * @preserve (Part of the public API)
         */
        abstract getLeft(): number | null | undefined;
        /**
         * Returns the current left coordinate unit of the Control.
         * @preserve (Part of the public API)
         */
        abstract getLeftUnit(): DimensionUnit | undefined;
        /**
         * Returns the current bottom coordinate of the Control.
         * @preserve (Part of the public API)
         */
        abstract getBottom(): number | null | undefined;
        /**
         * Returns the current bottom coordinate unit of the Control.
         * @preserve (Part of the public API)
         */
        abstract getBottomUnit(): DimensionUnit | undefined;
        /**
         * Returns the current right coordinate of the Control.
         * @preserve (Part of the public API)
         */
        abstract getRight(): number | null | undefined;
        /**
         * Returns the current right coordinate unit of the Control.
         * @preserve (Part of the public API)
         */
        abstract getRightUnit(): DimensionUnit | undefined;
        /**
         * Returns the current minwidth value.
         * @preserve (Part of the public API)
         */
        abstract getMinWidth(): number | null | undefined;
        /**
         * Returns the current minwidth unit.
         * @preserve (Part of the public API)
         */
        abstract getMinWidthUnit(): DimensionUnit | undefined;
        /**
         * Returns the current minheight value.
         * @preserve (Part of the public API)
         */
        abstract getMinHeight(): number | null | undefined;
        /**
         * Returns the current maxwidth value.
         * @preserve (Part of the public API)
         */
        abstract getMaxWidth(): number | null | undefined;
        /**
         * Returns the current maxwidth unit.
         * @preserve (Part of the public API)
         */
        abstract getMaxWidthUnit(): DimensionUnit | undefined;
        /**
         * Returns the current maxheight value.
         * @preserve (Part of the public API)
         */
        abstract getMaxHeight(): number | null | undefined;
        /**
         * Returns the current maxheight unit.
         * @preserve (Part of the public API)
         */
        abstract getMaxHeightUnit(): DimensionUnit | undefined;
        /**
         * Returns the current rendered left value in pixel.
         * @preserve (Part of the public API)
         */
        abstract getRenderedLeft(): number | null;
        /**
         * Returns the current rendered top value in pixel.
         * @preserve (Part of the public API)
         */
        abstract getRenderedTop(): number | null;
        /**
         * Returns the current rendered right value in pixel.
         * @preserve (Part of the public API)
         */
        abstract getRenderedRight(): number | null;
        /**
         * Returns the current rendered bottom value in pixel.
         * @preserve (Part of the public API)
         */
        abstract getRenderedBottom(): number | null;
        /**
         * Returns the current rendered width value in pixel.
         * @preserve (Part of the public API)
         */
        abstract getRenderedWidth(): number | null;
        /**
         * Returns the current rendered height value in pixel.
         * @preserve (Part of the public API)
         */
        abstract getRenderedHeight(): number | null;
        /**
         * Sets the value of the width attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setWidth(valueNew: number | null): void;
        /**
         * Sets the unit of the width attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setWidthUnit(valueNew: DimensionUnit | null): void;
        /**
         * Sets the value of the width mode attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setWidthMode(valueNew: SizeMode | null): void;
        /**
         * Sets the value of the height attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setHeight(valueNew: number | null): void;
        /**
         * Sets the value of the height mode attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setHeightMode(valueNew: SizeMode | null): void;
        /**
         * Sets the unit of the height attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setHeightUnit(valueNew: DimensionUnit | null): void;
        /**
         * Returns the calculated width in pixel if self defined (not percent based) or based on the children.
         * max-width overrides width, but min-width overrides max-width.
         */
        abstract __getContentWidth(): number | null;
        /**
         * Returns the calculated height in pixel if self defined (not percent based) or based on the children.
         * max-height overrides height, but min-height overrides max-height.
         */
        abstract __getContentHeight(): number | null;
        /**
         * Sets the value of the top attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setTop(valueNew: number | null): void;
        /**
         * Sets the unit of the top attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setTopUnit(valueNew: DimensionUnit | null): void;
        /**
         * Sets the value of the left attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setLeft(valueNew: number | null): void;
        /**
         * Sets the unit of the left attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setLeftUnit(valueNew: DimensionUnit | null): void;
        /**
         * Sets the value of the bottom attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBottom(valueNew: number | null): void;
        /**
         * Sets the unit of the bottom attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBottomUnit(valueNew: DimensionUnit | null): void;
        /**
         * Sets the value of the right attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setRight(valueNew: number | null): void;
        /**
         * Sets the unit of the right attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setRightUnit(valueNew: DimensionUnit | null): void;
        /**
         * Sets the value of the minwidth attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setMinWidth(valueNew: number | null): void;
        /**
         * Sets the unit of the minwidth attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setMinWidthUnit(valueNew: DimensionUnit | null): void;
        /**
         * Sets the value of the minheight attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setMinHeight(valueNew: number | null): void;
        /**
         * Returns the current minheight unit.
         * @preserve (Part of the public API)
         */
        abstract getMinHeightUnit(): DimensionUnit | undefined;
        /**
         * Sets the unit of the minheight attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setMinHeightUnit(valueNew: DimensionUnit | null): void;
        /**
         * Sets the value of the maxwidth attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setMaxWidth(valueNew: number | null): void;
        /**
         * Sets the unit of the maxwidth attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setMaxWidthUnit(valueNew: DimensionUnit | null): void;
        /**
         * Sets the value of the maxheight attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setMaxHeight(valueNew: number | null): void;
        /**
         * Sets the unit of the maxheight attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setMaxHeightUnit(valueNew: DimensionUnit | null): void;
        /**
         * Returns the current zindex value.
         * @preserve (Part of the public API)
         */
        abstract getZindex(): number | null | undefined;
        /**
         * Sets the value of the zindex attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setZindex(valueNew: number | null): void;
        /**
         * Returns the current opacity value.
         * Sets the value of the zindex attribute.
         * @preserve (Part of the public API)
         */
        abstract getOpacity(): number | null | undefined;
        /**
         * Sets the value of the opacity attribute. The value must be between 0 (0%) and 1 (100%).
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setOpacity(valueNew: number | null): void;
        /**
         * Returns the current visibility value.
         * @preserve (Part of the public API)
         */
        abstract getVisibility(): Visibility | undefined;
        /**
         * Sets the value of the visibility attribute.
         * @param valueNew The new visibility value.
         * @preserve (Part of the public API)
         */
        abstract setVisibility(valueNew: Visibility | null): void;
        /**
         * Returns the current transform value.
         * @preserve (Part of the public API)
         */
        abstract getTransform(): Transform[] | null | undefined;
        /**
         * Sets the value of the transform attribute.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setTransform(valueNew: Transform[] | null): void;
        /**
         * Returns the current background value.
         * @preserve (Part of the public API)
         */
        abstract getBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
        /**
         * Sets the background value and calls the associated process function (processBackground).
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBackgroundColor(valueNew: Color | null): void;
        /**
         * Returns the current value of the member variable backgroundImage.
         * @preserve (Part of the public API)
         */
        abstract getBackgroundImage(): string | null | undefined;
        /**
         * Sets the value of the member variable "backgroundImage" if the new value is not equal to the current value.
         * and calls the associated process function (processBackgroundImage) after that.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBackgroundImage(valueNew: string | null): void;
        /**
         * Returns the current value of the member variable backgroundImagePadding.
         * @preserve (Part of the public API)
         */
        abstract getBackgroundImagePadding(): FourSidedCss | null | undefined;
        /**
         * Sets the value of the member variable "backgroundImagePadding" if the new value is not equal to the current value
         * and calls the associated process function (processBackgroundImagePadding) after that.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBackgroundImagePadding(valueNew: FourSidedCss | null): void;
        /**
         * Returns the current value of the member variable backgroundImageWidth.
         * @preserve (Part of the public API)
         */
        abstract getBackgroundImageWidth(): number | null | undefined;
        /**
         * Sets the value of the member variable "backgroundImageWidth" if the new value is not equal to the current value.
         * and calls the associated process function (processBackgroundImageWidth) after that.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBackgroundImageWidth(valueNew: number | null): void;
        /**
         * Returns the current value of the member variable backgroundImageWidthUnit.
         * @preserve (Part of the public API)
         */
        abstract getBackgroundImageWidthUnit(): DimensionUnit | undefined;
        /**
         * Sets the value of the member variable "backgroundImageWidthUnit" if the new value is not equal to the current value.
         * and calls the associated process function (processBackgroundImageWidthUnit) after that.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBackgroundImageWidthUnit(valueNew: DimensionUnit | null): void;
        /**
         * Returns the current value of the member variable backgroundImageHeight.
         * @preserve (Part of the public API)
         */
        abstract getBackgroundImageHeight(): number | null | undefined;
        /**
         * Sets the value of the member variable "backgroundImageHeight" if the new value is not equal to the current value.
         * and calls the associated process function (processBackgroundImageHeight) after that.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBackgroundImageHeight(valueNew: number | null): void;
        /**
         * Returns the current value of the member variable backgroundImageHeightUnit.
         * @preserve (Part of the public API)
         */
        abstract getBackgroundImageHeightUnit(): DimensionUnit | undefined;
        /**
         * Sets the value of the member variable "backgroundImageHeightUnit" if the new value is not equal to the current value.
         * and calls the associated process function (processBackgroundImageHeightUnit) after that.
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBackgroundImageHeightUnit(valueNew: DimensionUnit | null): void;
        /**
         * Returns the current value of horizontalBackgroundImageAligment.
         * @preserve (Part of the public API)
         */
        abstract getBackgroundImageHorizontalAlignment(): HorizontalAlignment | undefined;
        /**
         * Sets the backgroundImageHorizontalAlignment value and calls the associated process function (processBackgroundImageHorizontalAlignment).
         * @preserve (Part of the public API)
         */
        abstract setBackgroundImageHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
        /**
         * Returns the current value of backgroundImageVerticalAlignment.
         * @preserve (Part of the public API)
         */
        abstract getBackgroundImageVerticalAlignment(): VerticalAlignment | undefined;
        /**
         * Sets the backgroundImageVerticalAlignment value and calls the associated process function (processBackgroundImageVerticalAlignment).
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBackgroundImageVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
        /**
         * Returns the current border-color value.
         * @preserve (Part of the public API)
         */
        abstract getBorderColor(): Color | null | undefined;
        /**
         * Sets the border-color attribute value and calls the associated process function (processBorderColor).
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBorderColor(valueNew: Color | null): void;
        /**
         * Returns the current border-width value.
         * @preserve (Part of the public API)
         */
        abstract getBorderWidth(): BorderWidth | null | undefined;
        /**
         * Sets the border-width attribute value and calls the associated process function (processBorderWidth).
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBorderWidth(valueNew: BorderWidth | null): void;
        /**
         * Returns the current border-radius value.
         * @preserve (Part of the public API)
         */
        abstract getBorderRadius(): BorderRadius | null | undefined;
        /**
         * Sets the border-radius attribute value and calls the associated process function (processBorderRadius).
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBorderRadius(valueNew: BorderRadius | null): void;
        /**
         * Internal reference to the attribute "data-tchmi-border-type".
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setBorderStyle(valueNew: BorderStyle | null): void;
        /**
         * Returns the current border-style value.
         * @preserve (Part of the public API)
         */
        abstract getBorderStyle(): BorderStyle | null | undefined;
        /**
         * Sets the internal reference to the attribute "data-tchmi-box-shadow".
         * @preserve (Part of the public API)
         */
        abstract setBoxShadow(valueNew: BoxShadow[] | null): void;
        /**
         * Returns the current box-shadow value.
         * @preserve (Part of the public API)
         */
        abstract getBoxShadow(): BoxShadow[] | null | undefined;
        /**
         * Returns the current value of tooltip.
         * @preserve (Part of the public API)
         */
        abstract getTooltip(): string | null | undefined;
        /**
         * Sets the tooltip attribute and calls the associated process function (processTooltip).
         * @param valueNew
         * @preserve (Part of the public API)
         */
        abstract setTooltip(valueNew: string | null): void;
        /**
         * Sets the focus to main html input / textarea element if available.
         */
        focus?(): void;
    }
}
//# sourceMappingURL=index.d.ts.map