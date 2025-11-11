import type { IFunctionRegistration } from '../System/_Types.js';
/** An array and Map with key 1.10 legacy function type name, 1.12 function name and 1.12 qualified function name */
export declare const registrations: {
    /** Map key is the 1.10 legacy function name and 1.12 qualified function name */
    map: Map<string, IFunctionRegistration<any>>;
    /** All registrations of all functions */
    array: IFunctionRegistration[];
};
/**
 * Deprecated! Please use registerFunctionEx.
 * @deprecated Please use registerFunctionEx.
 * @param name name of the framework function
 * @param functionImplementation Javascript function to execute
 * @param _descriptionUrl Url for the function description
 * @preserve (Part of the public API)
 */
declare function registerFrameworkFunction(name: string, functionImplementation: (...args: any[]) => any, _descriptionUrl?: string): void;
/**
 * Deprecated! Please use registerFunctionEx.
 * Registers a function created within a TwinCAT HMI project in the framework.
 * @param name Name of the function
 * @param functionImplementation Javascript function to execute
 * @preserve (Part of the public API)
 * @deprecated Please use registerFunctionEx.
 */
declare function registerFunction(name: string, functionImplementation: (...args: any[]) => any): void;
/**
 * Registers a function created within a TwinCAT HMI project in the framework.
 * @param name Name of the function
 * @param namespace namespace of the function
 * @param functionImplementation Javascript function to execute
 * @param options options
 * @param options.injectInGlobalObject Inject the function implementation at namespace.name in global object
 * @preserve (Part of the public API)
 */
export declare function registerFunctionEx(name: string, namespace: string, functionImplementation: (...args: any[]) => any, options?: {
    /** Inject the function implementation at namespace.name in global object */
    injectInGlobalObject: boolean;
}): void;
/**
 * Returns a registered HMI function
 * @param name Name of the function
 * @preserve (Part of the public API)
 */
export declare function getFunction(name: string): ((...args: any[]) => any) | undefined;
/**
 * Gets version information of function by name.
 * @param name Name of the function
 * @preserve (Part of the public API)
 */
export declare function getFunctionVersion(name: string): TcHmi.Version | null;
declare const _registerFunction: typeof registerFunction;
declare const _registerFunctionEx: typeof registerFunctionEx;
declare const _getFunction: typeof getFunction;
declare const _getFunctionVersion: typeof getFunctionVersion;
declare const _registerFrameworkFunction: typeof registerFrameworkFunction;
declare global {
    namespace TcHmi {
        /**
         * Provides resources for managing functions.
         * @preserve (Part of the public API)
         */
        namespace Functions {
            const registerFunction: typeof _registerFunction;
            const registerFunctionEx: typeof _registerFunctionEx;
            const getFunction: typeof _getFunction;
            const getFunctionVersion: typeof _getFunctionVersion;
            const registerFrameworkFunction: typeof _registerFrameworkFunction;
        }
    }
}
export {};
//# sourceMappingURL=Functions.d.ts.map