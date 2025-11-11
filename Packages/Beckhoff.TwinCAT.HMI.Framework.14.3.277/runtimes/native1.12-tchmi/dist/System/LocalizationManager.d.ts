export declare class LocalizationManager {
    /**
     * Key is the url.
     * Property is null when system is initialized to disable the cache.
     */
    private __fileFetchPromises;
    /**
     * The current locale string for texts or undefined if no localized Symbol is available.
     * @returns The current locale identifier.
     */
    getLocale(options?: {
        level?: TcHmi.Locale.Level;
    }): string | undefined;
    /**
     * Returns the current fallback locale string for texts or undefined if no localized Symbol is available.
     * @returns The current fallback locale identifier.
     */
    getLocaleFallback(options?: {
        level?: TcHmi.Locale.Level;
    }): string | undefined;
    /**
     * Returns the content of the current loaded locale file.
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     */
    getLocaleData(namespace: string, options?: {
        level?: TcHmi.Locale.Level;
    }): TcHmi.ILocalization | undefined;
    /**
     * Set a namespaces locale data and merges data if we have file overrides.
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     * @param data
     * @param options
     */
    setLocaleData(namespace: string, data: TcHmi.ILocalization, fileurl: string, options?: {
        level?: TcHmi.Locale.Level;
    }): void;
    /**
     * Returns the data of the current loaded fallback locale file.
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     */
    getLocaleFallbackData(namespace: string, options?: {
        level?: TcHmi.Locale.Level;
    }): TcHmi.ILocalization | undefined;
    /**
     * Set a namespaces fallback locale data and merges data if we have file overrides.
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     * @param data
     * @param options
     */
    setLocaleFallbackData(namespace: string, data: TcHmi.ILocalization, fileurl: string, options?: {
        level?: TcHmi.Locale.Level;
    }): void;
    /**
     *  Change locale of current user in server. AccessManager will handle locale change and force locale processing in LocalizationManager.
     */
    loadLocale(locale: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
    /**
     * Process localization file content.
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     * @param data content
     */
    processLocalizationData(namespace: string, data?: TcHmi.ILocalization, fallback?: TcHmi.ILocalization, options?: {
        level?: TcHmi.Locale.Level;
    }): TcHmi.Errors;
    /**
     * Loads a new locale for a specific localization namespace. Returns a boolean promise that indicates success.
     * @param newLocale The new locale to load.
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     * @param options Optional options for the locale, such as the level.
     */
    private __processLocaleForNamespace;
    /**
     * Loads the given localization file or files.
     * @param file The file or files to load.
     * @param namespace The namespace of the localization files.
     * @param level The level of the localization files.
     */
    private __loadLocalizationFile;
    /**
     * Loads a new locale after a server locale change or system init
     * @param locale The locale to load
     */
    processLocale(newLocale: string | null | undefined, options?: {
        level?: TcHmi.Locale.Level;
    }, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): Promise<void>;
    processPendingEntryWatches(): void;
    processLocalizationWatches(namespace: string | string[], options?: {
        level?: TcHmi.Locale.Level;
    }): void;
    /**
     * Register a application level language file. Existing locales will be replaced.
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     * @param locale
     * @param pathOrPathArray
     */
    registerLocalizationFile(namespace: string, locale: string, pathOrPathArray: TcHmi.LanguageFileMapEntry): void;
    /**
     * Unregister a application level language file.
     * Only removals for same type (string vs string[]) as registered with registerLocalizationFile are supported
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     * @param locale
     * @param pathOrPathArray
     */
    unregisterLocalizationFile(namespace: string, locale: string, pathOrPathArray: TcHmi.LanguageFileMapEntry): void;
    /**
     * Resolves the inheritation of control related localization files and creates a merged localization file.
     */
    resolveControlLocalizationFileInheritation(): void;
    /**
     * Register fallback locale
     * @param fallback
     */
    setFallbackLocale(fallback: string | undefined | null): void;
    /**
     * Resets the current fallback locale data and processes locale again.
     * @param callback
     */
    resetFallbackLocale(callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): void;
    /**
     * Clears the file fetch cache.
     */
    clearFileFetchCache(): void;
    /**
     * Get registered file path strings by a cascaded Map with keys:
     * 1) namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     * 2) locale
     */
    getFiles(): Map<string, Map<string, TcHmi.LanguageFileMapEntry>>;
    /**
     * Gets all localized text of a namespace.
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     */
    get(namespace: string, options?: {
        level?: TcHmi.Locale.Level;
    }): TcHmi.Locale.LocalizationReader;
    /**
     * Watches all localized text of a namespace.
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     */
    watch(namespace: string, options: {
        level?: TcHmi.Locale.Level;
    } | undefined, callback: (this: void, data: TcHmi.Locale.IWatchResultObject) => void): TcHmi.DestroyFunction;
    /**
     * Get a localized text of a namespace by key
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     * @param key
     */
    getText(namespace: string, key: string, options?: {
        level?: TcHmi.Locale.Level;
    }): string;
    /**
     * Watch a localized text of a namespace by key
     * @param namespace For example "TcHmi.System.Localization.Control<TcHmi.Controls.Beckhoff.TcHmiRadialGauge>"
     * @param key
     * @param options
     * @param callback
     */
    watchText(namespace: string, key: string, options: {
        level?: TcHmi.Locale.Level;
    } | undefined, callback: (this: void, data: TcHmi.Locale.IWatchTextResultObject) => void): TcHmi.DestroyFunction;
}
export interface LocalizedText {
    /** Key */
    key: string;
    /** Text in the current locale. */
    text?: string;
    /** Determines if the current instance is based on fallback data. */
    fallback: boolean;
    /** Determines if the current instance is a dummy without data for delayed callback handling if data becomes available. */
    dummy: boolean;
    /** Callbacks associated with the current instance. */
    callbacks: ILocalizationTextCallback[];
}
export interface ILocalizationTextCallback {
    callback?: (this: void, data: TcHmi.Locale.IWatchTextResultObject) => void;
    destroy: TcHmi.DestroyFunction;
}
export interface ILocalizationCallback {
    callback: (this: void, data: TcHmi.Locale.IWatchResultObject) => void;
    destroy: TcHmi.DestroyFunction;
}
/** Runtime Manager */
export declare const localizationManager: LocalizationManager;
//# sourceMappingURL=LocalizationManager.d.ts.map