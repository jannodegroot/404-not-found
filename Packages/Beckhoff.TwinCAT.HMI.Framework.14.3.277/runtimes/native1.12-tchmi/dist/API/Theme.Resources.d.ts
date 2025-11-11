import type { Resource } from './Theme.js';
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
 * @template T Type of the value
 * @preserve (Part of the public API)
 */
export declare function get<T = any>(control: TcHmi.Controls.System.baseTcHmiControl, resourceName: string): Resource<T>;
/**
 * Resolves the basepath for a path value inside a theme resource
 * @param control Control which asks for that
 * @param resource resource to resolve the basepath
 * @template T Type of the value
 */
export declare function resolveBasePath<T = any>(control: TcHmi.Controls.System.baseTcHmiControl, resource: Resource<T>): string;
declare const _get: typeof get;
declare const _resolveBasePath: typeof resolveBasePath;
declare global {
    namespace TcHmi.Theme {
        /**
         * Control resource related API
         * @preserve (Part of the public API)
         */
        namespace Resources {
            const get: typeof _get;
            const resolveBasePath: typeof _resolveBasePath;
        }
    }
}
export {};
//# sourceMappingURL=Theme.Resources.d.ts.map