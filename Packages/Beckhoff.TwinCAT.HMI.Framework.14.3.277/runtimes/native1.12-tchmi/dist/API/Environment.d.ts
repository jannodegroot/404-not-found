/**
 * Returns the dynamic framework base path.
 * @preserve (Part of the public API)
 */
export declare function getBasePath(): string;
/**
 * Returns the dynamic base path of a control.
 * @preserve (Part of the public API)
 * @param type Control type name
 */
export declare function getControlBasePath(type: string): string | null;
/**
 * Returns the dynamic base path of a control.
 * @preserve (Part of the public API)
 * @param control TcHmi Control reference
 */
export declare function getControlBasePathEx(control: TcHmi.Controls.System.baseTcHmiControl): string | null;
/**
 * Returns an object describing if the current browser is a TcEmbeddedBrowser and what its capabilities are.
 */
export declare function getBrowserCapabilities(): BrowserCapabilities;
/**
 * Returns the host base uri (with no pathname) which under normal circumstances is in the form "https://192.0.2.1:2020"
 * but can for example be "https://192.0.2.1/TcHmiSrv" in reverse proxy scenarios.
 * In this example http traffic to the external url "https://192.0.2.1/TcHmiSrv" will perhaps be sent to "https://192.0.2.1:2020".
 * If you have to call static urls of the hmi server which are always host related (like "/Config") you should call this function and prepend the result.
 * Example: let configUri = tchmi_path(TcHmi.Environment.getHostBaseUri() + '/Config');
 */
export declare function getHostBaseUri(): string;
/**
 * path+query+hash of the hmi but as seen from the hmi server.
 * Could be different for reverse proxy scenarios.
 * Must be used for populating server redirects like /Logout?Location={1}
 */
export declare function getServerSidePathAndQuery(): string;
export interface BrowserCapabilities {
    isCefSharp: boolean;
    isTcEmbeddedBrowser: boolean;
    supportsDownload: boolean;
}
declare const _getBasePath: typeof getBasePath;
declare const _getControlBasePath: typeof getControlBasePath;
declare const _getControlBasePathEx: typeof getControlBasePathEx;
declare const _getBrowserCapabilities: typeof getBrowserCapabilities;
declare const _getHostBaseUri: typeof getHostBaseUri;
declare const _getServerSidePathAndQuery: typeof getServerSidePathAndQuery;
type tBrowserCapabilities = BrowserCapabilities;
declare global {
    namespace TcHmi {
        /**
         * Provides environment information.
         * @preserve (Part of the public API)
         */
        namespace Environment {
            const getBasePath: typeof _getBasePath;
            const getControlBasePath: typeof _getControlBasePath;
            const getControlBasePathEx: typeof _getControlBasePathEx;
            const getBrowserCapabilities: typeof _getBrowserCapabilities;
            const getHostBaseUri: typeof _getHostBaseUri;
            const getServerSidePathAndQuery: typeof _getServerSidePathAndQuery;
            type BrowserCapabilities = tBrowserCapabilities;
        }
    }
}
export {};
//# sourceMappingURL=Environment.d.ts.map