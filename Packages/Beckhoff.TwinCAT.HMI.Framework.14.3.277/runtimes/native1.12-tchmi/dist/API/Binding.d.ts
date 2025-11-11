import { SymbolExpression } from './SymbolExpression.js';
/**
 * Creates a binding between a symbol and a control attribute setter function.
 * @param expression The target symbol expression.
 * @param fn The target function as prototype reference.
 * @param control The target control instance.
 * @preserve (Part of the public API)
 */
export declare function create(expression: string, fn: (value: any) => void, control: TcHmi.Controls.System.baseTcHmiControl): void;
/**
 * Creates a binding between a symbol and a control attribute setter function by name.
 * @param expression The target symbol expression.
 * @param fn The name of the control setter function.
 * @param control The target control instance.
 * @preserve (Part of the public API)
 */
export declare function createEx(expression: string, fn: string, control: TcHmi.Controls.System.baseTcHmiControl): void;
/**
 * Creates a binding between a symbol and a control attribute setter function by name of property.
 * @param expression The target symbol expression.
 * @param propertyName The name of the control property.
 * @param control The target control instance.
 * @param options [Optional] Additional options for the binding.
 * @param options.ctx Context for the binding symbol.
 * @preserve (Part of the public API)
 */
export declare function createEx2(expression: string, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl, options?: {
    ctx?: TcHmi.Context;
}): void;
/**
 * Removes a binding between a symbol and a control attribute setter function.
 * @param expression [OBSOLETE] The target symbol expression.
 * @param fn The target function as prototype reference.
 * @param control The target control instance.
 * @param bReset [Optional] If set to false the setter will not resetted with null.
 * @preserve (Part of the public API)
 */
export declare function remove(expression: string | null, fn: (value: any) => void, control: TcHmi.Controls.System.baseTcHmiControl, bReset?: boolean): void;
/**
 * Removes a binding between a symbol and a control attribute setter function.
 * @param expression [OBSOLETE] The target symbol expression.
 * @param fn The name of the control setter function.
 * @param control The target control instance.
 * @param bReset [Optional] If set to false the setter will not resetted with null.
 * @preserve (Part of the public API)
 */
export declare function removeEx(expression: string | null, fn: string, control: TcHmi.Controls.System.baseTcHmiControl, bReset?: boolean): void;
/**
 * Removes a binding between a symbol and a control attribute setter function by name of property.
 * @param _unused [OBSOLETE] The target symbol expression.
 * @param propertyName The name of the control attribute property.
 * @param control The target control instance.
 * @param bReset [Optional] If set to false the setter will not resetted with null.
 * @preserve (Part of the public API)
 */
export declare function removeEx2(_unused: string | null, propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl, bReset?: boolean): void;
/**
 * Returns true if a symbol is bound to the target control property.
 * @param propertyName The name of the control attribute property.
 * @param control The target control instance.
 * @preserve (Part of the public API)
 */
export declare function exists(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): boolean;
/**
 * Returns the symbol expression of a binding as string or null if no symbol is bound to the target control property.
 * @param propertyName The name of the control attribute property.
 * @param control The target control instance.
 * @preserve (Part of the public API)
 */
export declare function resolve(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): string | null;
/**
 * Returns the symbol expression of a binding as SymbolExpression object or null if no symbol is bound to the target control property.
 * @param propertyName The name of the control attribute property.
 * @param control The target control instance.
 * @preserve (Part of the public API)
 */
export declare function resolveEx(propertyName: string, control: TcHmi.Controls.System.baseTcHmiControl): SymbolExpression | null;
declare const _create: typeof create;
declare const _createEx: typeof createEx;
declare const _createEx2: typeof createEx2;
declare const _remove: typeof remove;
declare const _removeEx: typeof removeEx;
declare const _removeEx2: typeof removeEx2;
declare const _exists: typeof exists;
declare const _resolve: typeof resolve;
declare const _resolveEx: typeof resolveEx;
declare global {
    namespace TcHmi {
        /**
         * Provides functions for creating and removing bindings.
         * @preserve (Part of the public API)
         */
        namespace Binding {
            let create: typeof _create;
            let createEx: typeof _createEx;
            let createEx2: typeof _createEx2;
            let remove: typeof _remove;
            let removeEx: typeof _removeEx;
            let removeEx2: typeof _removeEx2;
            let exists: typeof _exists;
            let resolve: typeof _resolve;
            let resolveEx: typeof _resolveEx;
        }
    }
}
export {};
//# sourceMappingURL=Binding.d.ts.map