/**
 * Returns a copy of the current object which is constructed from tchmiconfig.json
 * @preserve (Part of the public API)
 */
export declare function get(): TcHmi.IConfig;
/**
 * Returns a Dictionary with all nuget packages of the project.
 * Key is the Nuget ID.
 * @preserve (Part of the public API)
 */
export declare function getNugetPackagesMetadata(): TcHmi.Dictionary<TcHmi.Config.NugetPackageMetadata>;
declare const _get: typeof get;
declare const _getNugetPackagesMetadata: typeof getNugetPackagesMetadata;
declare global {
    namespace TcHmi {
        /**
         * Provides resources for accessing configuration data.
         * @preserve (Part of the public API)
         */
        namespace Config {
            const get: typeof _get;
            const getNugetPackagesMetadata: typeof _getNugetPackagesMetadata;
        }
    }
}
export {};
//# sourceMappingURL=Config.d.ts.map