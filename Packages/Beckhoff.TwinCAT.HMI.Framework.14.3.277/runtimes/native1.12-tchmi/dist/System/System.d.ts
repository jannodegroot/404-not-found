import type { IControlModule, IFunctionModule, IPackage, UserControlConfig, FrameworkDescription } from './_Types.js';
import type * as Symbol from '../API/Symbol.js';
export declare namespace Init {
    /** tchmiconfig.json and framework description is loaded and parsed. */
    let initializedBaseConfig: Promise<void>;
    let __resolveInitializedBaseConfigPromise: () => void;
    /** Thememanager is initialized and has loaded a theme from TcHmiConfig.json (but perhaps not all package styles are loaded) */
    let initializedThemes: Promise<void>;
    let __resolveInitializedThemesPromise: () => void;
    /** Communication to Server setup with all symbols and locale from user on server. */
    let initializedServerCommunication: Promise<void>;
    let __resolveInitializedServerCommunicationPromise: () => void;
    /** Communication to Server and VS is up */
    let initializedCommunication: Promise<void>;
    let __resolveInitializedCommunicationPromise: () => void;
    /** Promise which resolves on system initialization, just before showing the TcHmiView. */
    let initialized: Promise<void>;
    let __resolveInitializedPromise: () => void;
}
export declare namespace Data {
    /** Map key is the package name like Beckhoff.TwinCAT.HMI.Controls  */
    const packages: Map<string, IPackage>;
    namespace Modules {
        /** An Array and Map with key 1.10 legacy control type name, 1.12 control type name AND 1.12 qualified control type name */
        let controls: {
            /** Map key is the 1.10 legacy control type name, 1.12 control type name AND 1.12 qualified control type name */
            map: Map<string, IControlModule<TcHmi.Controls.System.baseTcHmiControl>>;
            /** All modules of all controls */
            array: IControlModule[];
            /** Map key is the URL of the description.json */
            urlMap: Map<string, IControlModule<TcHmi.Controls.System.baseTcHmiControl>>;
        };
        let functions: {
            /** Map key is the 1.10+1.12 function name AND 1.12 qualified function name */
            map: Map<string, IFunctionModule<any>>;
        };
    }
    namespace Caches {
        /** Map key is the url */
        let templateMarkupCache: Map<string, string>;
        /** Map key is the url */
        let templateMarkupElementCache: Map<string, Node>;
        /** Map key is the url */
        let partialMarkupCache: Map<string, {
            markup: string;
            partialId?: string;
        }>;
        /** Map key is the url */
        let partialCompositeConfigCache: Map<string, UserControlConfig>;
        /** Map key is symbol name */
        let serverSymbolMetaDataCache: Map<string, Symbol.IServerSymbolMetaDataResultObject>;
        /** Map key is symbol name */
        let serverSymbolInteractiveWriteMetaDataCache: Map<string, Symbol.IServerSymbolMetaDataResultObject>;
    }
    /** Map key is the partial file url */
    let isKeepAlivePartial: Map<string, boolean>;
    /** Map key is the partial file url */
    let isLoadSyncContent: Map<string, boolean>;
    /** Map key is the partial file url */
    let isPreloadBindingPartial: Map<string, boolean>;
}
/** Content of tchmiconfig.json as an object */
export declare let config: TcHmi.IConfig;
export declare function setConfig(newConfig: TcHmi.IConfig): void;
export declare let nugetPackagesMetadata: TcHmi.Dictionary<TcHmi.Config.NugetPackageMetadata>;
/**
 * Full url pointing to the base of the TcHmi Server like "https://192.0.2.1:2020" (with no pathname).
 * Could be different for reverse proxy scenarios (could be "https://192.0.2.1/TcHmiSrv").
 */
export declare let hostBaseUri: string;
export declare let setHostBaseUri: (newHostBaseUri: string) => void;
/**
 * path+query+hash of the hmi but as seen from the hmi server.
 * Could be different for reverse proxy scenarios.
 * Must be used for populating server redirects like /Logout?Location={1}
 */
export declare let serverSidePathAndQuery: string;
export declare let setServerSidePathAndQuery: (newServerSidePathAndQuery: string) => void;
/** Prefix to have a unique identifier for differenting / vs /bin path */
export declare let hostPrefix: string;
export declare let setHostPrefix: (newHostPrefix: string) => void;
/** ISO timestamp of the HTML generation of the HMI in local time or undefined when unknown */
export declare let buildtime: string | undefined;
/** Content of Description.json of the Framework as an object */
export declare let frameworkDescription: FrameworkDescription;
export declare let setFrameworkDescription: (newFrameworkDescription: FrameworkDescription) => void;
/**
 * Bool which represents system initialization.
 * Will be set to true just before showing the TcHmiView
 * followed by a EventProvider 'onInitialized' event
 */
export declare let isInitialized: boolean;
export declare function setIsInitialized(value: boolean): void;
/**
 * Bool which represents system preload status
 * Will be set to true after Content and Binding preload.
 */
export declare let isPreloaded: boolean;
export declare function setIsPreloaded(value: boolean): void;
/** System is unloaded via internal system API call by creator. */
export declare let isUnloaded: boolean;
export declare let destroyGlobalTrigger: TcHmi.DestroyFunction | null;
export declare function setDestroyGlobalTrigger(newDestroyGlobalTrigger: TcHmi.DestroyFunction | null): void;
/** Maps 'tchmi-button' to 'TcHmi.Controls.Beckhoff.TcHmiButton' */
export declare const mapControlNamesFromPackageManifestApi0ToApi1: Map<string, string>;
/** Maps 'TcHmi.Controls.Beckhoff.TcHmiButton' to 'tchmi-button' */
export { mapControlNamesFromPackageManifestApi1ToApi0 } from '../API/Controls.js';
//# sourceMappingURL=System.d.ts.map