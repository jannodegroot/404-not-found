/**
 * Changes the locale of the HMI including all localization symbols.
 * Note that this does not change the Time Format Locale.
 * The locale name is given as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
 * @param locale locale name to load. The locale name is given as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
 * @param callback optional callback which is called after locale change
 * @preserve (Part of the public API)
 */
export declare function load(locale: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
/**
 * Returns the current locale string for texts or undefined if no localized Symbol is available.
 * Note that this is not the Time Format Locale.
 * The locale name is given as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
 * @returns The current locale identifier as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
 * @preserve (Part of the public API)
 */
export declare function get(): string | undefined;
/**
 * Returns the list of available application locales.
 * The locale name is given as ISO 639/BCP 47 identifiers (Examples: 'en', 'en-US').
 * @preserve (Part of the public API)
 */
export declare function getRegisteredLocales(): string[];
/**
 * Returns the list of available control locales.
 * The locale name is given as ISO 639/BCP 47 identifiers (Examples: 'en', 'en-US').
 * @param type Control type (for example TcHmi.Controls.Beckhoff.TcHmiRadialGauge)
 */
export declare function getRegisteredLocalesForControl(type: string | null): string[];
/**
 * Returns the list of available function locales.
 * The locale name is given as ISO 639/BCP 47 identifiers (Examples: 'en', 'en-US').
 * @param type Function type (for example TcHmi.Functions.Beckhoff.CheckAccess)
 */
export declare function getRegisteredLocalesForFunction(type: string | null): string[];
/**
 * Allows safe access to a localization dictionary.
 * @template K Keys this Reader will resolve
 */
export declare class LocalizationReader<K extends string = string> {
    /**
     * Allows safe access to a localization dictionary.
     * @param localization localization dictionary
     */
    constructor(localization: TcHmi.ILocalizedTextMap<K>);
    private __localizationDictionary;
    /**
     * Returns the raw localization dictionary.
     */
    getLocalization(): TcHmi.ILocalizedTextMap<K>;
    /**
     * Returns the value associated with the key or the key if not value exists.
     * @param key Key to map to a localization
     */
    get(key: K): string;
}
/**
 * Used to access namespace related localization content.
 * Do not use this class directly. Please use one of its specializations like TcHmi.Locale.ControlLocalization,
 * TcHmi.Locale.FunctionLocalization or TcHmi.Locale.ApplicationLocalization.
 * @template K Keys this Localization will provide.
 */
export declare abstract class Localization<K extends string = string> {
    protected __namespace: string;
    /**
     * Returns a dictionary with all related localization texts.
     * @param options optional locale level
     */
    get(options?: {
        level: Level;
    }): LocalizationReader<K>;
    /**
     * Watches the list of all related localization texts.
     * Returns a destroy function to remove the watch.
     * @param callback callback which is called on each value change
     * @template WK Keys this watch will provide. Falls back to keys of the Localization.
     */
    watch<WK extends string = K>(callback: (this: void, data: IWatchResultObject<WK>) => void): TcHmi.DestroyFunction;
    /**
     * Watches the list of all related localization texts.
     * Returns a destroy function to remove the watch.
     * @param options optional locale level
     * @param callback callback which is called on each value change
     * @template WK Keys this watch will provide. Falls back to keys of the Localization.
     */
    watchEx<WK extends string = K>(options: {
        level: Level;
    } | undefined, callback: (this: void, data: IWatchResultObject<WK>) => void): TcHmi.DestroyFunction;
    /**
     * Returns the text for a specific localization key or the key if no text is available.
     * @param key Key which should be mapped to a text.
     * @param options optional locale level
     */
    getText(key: K, options?: {
        level: Level;
    }): string;
    /**
     * Watches the text for a specific localization key or the key if no text is available.
     * Returns a destroy function to remove the watch.
     * @param key Key which is mapped to a text.
     * @param callback callback which is called on each value change
     */
    watchText(key: K, callback?: (this: void, data: IWatchTextResultObject) => void): TcHmi.DestroyFunction;
    /**
     * Watches the text for a specific localization key or the key if no text is available.
     * @param key Key which is mapped to a text.
     * @param options optional locale level
     * @param callback callback which is called on each value change
     */
    watchTextEx(key: K, options: {
        level: Level;
    } | undefined, callback: (this: void, data: IWatchTextResultObject) => void): TcHmi.DestroyFunction;
}
/**
 * Used to access application related localization content.
 */
export declare class ApplicationLocalization extends Localization {
    /**
     * Constructor
     */
    constructor();
}
/**
 * Used to access control related localization content.
 */
export declare class ControlLocalization extends Localization {
    /**
     * Constructor
     * @param type Name+Namespace of the control
     */
    constructor(type: string);
}
/**
 * Used to access function related localization content.
 */
export declare class FunctionLocalization extends Localization {
    /**
     * Constructor
     * @param type Name+Namespace of the function
     */
    constructor(type: string);
}
/**
 * Used to access package related localization content.
 */
export declare class PackageLocalization extends Localization {
    /**
     * Constructor
     * @param id Id of the target NuGet package
     */
    constructor(id: string);
}
export declare enum Level {
    Application = 0,
    Engineering = 1
}
export interface IWatchResultObject<K extends string = string> extends TcHmi.IResultObject {
    reader?: LocalizationReader<K>;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
export interface IWatchTextResultObject extends TcHmi.IResultObject {
    text?: string;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
}
declare const _load: typeof load;
declare const _get: typeof get;
declare const _getRegisteredLocales: typeof getRegisteredLocales;
declare const _getRegisteredLocalesForControl: typeof getRegisteredLocalesForControl;
declare const _getRegisteredLocalesForFunction: typeof getRegisteredLocalesForFunction;
declare const _LocalizationReader: typeof LocalizationReader;
declare const _Localization: typeof Localization;
declare const _ApplicationLocalization: typeof ApplicationLocalization;
declare const _ControlLocalization: typeof ControlLocalization;
declare const _FunctionLocalization: typeof FunctionLocalization;
declare const _PackageLocalization: typeof PackageLocalization;
declare const _Level: typeof Level;
type tLocalizationReader<K extends string = string> = LocalizationReader<K>;
type tLocalization<K extends string = string> = Localization<K>;
type tApplicationLocalization = ApplicationLocalization;
type tControlLocalization = ControlLocalization;
type tFunctionLocalization = FunctionLocalization;
type tPackageLocalization = PackageLocalization;
type tLevel = Level;
type tIWatchResultObject<K extends string = string> = IWatchResultObject<K>;
type tIWatchTextResultObject = IWatchTextResultObject;
declare global {
    namespace TcHmi {
        /**
         * Provides resources for managing the localization.
         * @preserve (Part of the public API)
         */
        namespace Locale {
            const load: typeof _load;
            const get: typeof _get;
            const getRegisteredLocales: typeof _getRegisteredLocales;
            const getRegisteredLocalesForControl: typeof _getRegisteredLocalesForControl;
            const getRegisteredLocalesForFunction: typeof _getRegisteredLocalesForFunction;
            const LocalizationReader: typeof _LocalizationReader;
            type LocalizationReader<K extends string = string> = tLocalizationReader<K>;
            const Localization: typeof _Localization;
            type Localization<K extends string = string> = tLocalization<K>;
            const ApplicationLocalization: typeof _ApplicationLocalization;
            type ApplicationLocalization = tApplicationLocalization;
            const ControlLocalization: typeof _ControlLocalization;
            type ControlLocalization = tControlLocalization;
            const FunctionLocalization: typeof _FunctionLocalization;
            type FunctionLocalization = tFunctionLocalization;
            const PackageLocalization: typeof _PackageLocalization;
            type PackageLocalization = tPackageLocalization;
            const Level: typeof _Level;
            type Level = tLevel;
            type IWatchResultObject<K extends string = string> = tIWatchResultObject<K>;
            type IWatchTextResultObject = tIWatchTextResultObject;
        }
    }
}
export {};
//# sourceMappingURL=Locale.d.ts.map