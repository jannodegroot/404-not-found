import type { KeyboardProvider } from './UiProvider.KeyboardProvider.js';
import type { PopupProvider } from './UiProvider.PopupProvider.js';
/**
 * Register a provider
 * @param provider Provider to register
 */
export declare function register(provider: TypeProviderMap[keyof TypeProviderMap]): void;
/**
 * Returns a Map of all registered providers for a given type
 * @param type The provider type.
 */
export declare function getProviders<T extends keyof TypeProviderMap>(type: T): Map<string, TypeProviderMap[T]>;
/**
 * Returns a registered provider for a given type and id
 * @param type The type of the provider
 * @param providerName The name of the provider
 */
export declare function getProvider<T extends keyof TypeProviderMap>(type: T, providerName: string): TypeProviderMap[T] | undefined;
/**
 * Returns the provider for the given type that was configured in tchmiconfig.json.
 * Returns undefined if no provider was configured.
 * Throws an error if the configured provider is not registered.
 * @param type The type of the provider to get.
 */
export declare function getPreferredProvider<T extends keyof TypeProviderMap>(type: T): TypeProviderMap[T] | undefined;
/**
 * Abstract base class for all UiProvider
 */
export declare abstract class BaseProvider {
    abstract readonly type: keyof TypeProviderMap;
    readonly providerName: string;
    /**
     * Base class for all UiProvider
     * @param providerName Name of the provider
     * @param type Type of the provider.
     */
    constructor(providerName: string, type: keyof TypeProviderMap);
}
export interface TypeProviderMap {
    keyboard: KeyboardProvider;
    popup: PopupProvider;
}
declare const _register: typeof register;
declare const _getProviders: typeof getProviders;
declare const _getProvider: typeof getProvider;
declare const _getPreferredProvider: typeof getPreferredProvider;
declare const _BaseProvider: typeof BaseProvider;
declare global {
    namespace TcHmi {
        /**
         * Provides an interface for Ui Provider.
         * @preserve (Part of the public API)
         */
        namespace UiProvider {
            let register: typeof _register;
            let getProviders: typeof _getProviders;
            let getProvider: typeof _getProvider;
            let getPreferredProvider: typeof _getPreferredProvider;
            let BaseProvider: typeof _BaseProvider;
        }
    }
}
export {};
//# sourceMappingURL=UiProvider.d.ts.map