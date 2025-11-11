/**
 * Closes the system keyboard.
 */
export declare function close(): void;
/**
 * Get the provider name of the system keyboard.
 */
export declare function getProviderName(): string;
/**
 * Set the provider name of the system keyboard.
 * @param providerName Name of the system keyboard provider.
 */
export declare function setProviderName(providerName: string): void;
/**
 * Gets if the system keyboard should open on focus of a textarea or input element.
 */
export declare function getAutoOpen(): boolean;
/**
 * Sets if the system keyboard should open on focus of a textarea or input element.
 * @param newState new value
 */
export declare function setAutoOpen(newState: boolean): void;
/**
 * Get the url of the keyboard layout according to the requested input mode and the current localization.
 * @param requestedInputMode the input mode of the input field the system keyboard is requested.
 */
export declare function getLayoutFileFromInputMode(requestedInputMode: string): LayoutResult;
/**
 * Returns the project keyboard mapping. The project keyboard mapping maps pairs of input mode and keyboard layout urls to locale strings.
 */
export declare function getProjectKeyboardMapping(): TcHmi.Dictionary<TcHmi.Keyboard.InputModeMapping>;
/**
 * Sets the project keyboard mapping. The project keyboard mapping maps pairs of input mode and keyboard layout urls to locale strings.
 * @param projectKeyboardMapping new project keyboard mapping.
 */
export declare function setProjectKeyboardMapping(projectKeyboardMapping: TcHmi.Dictionary<TcHmi.Keyboard.InputModeMapping>): void;
/**
 * Gets the layout object of the system keyboard container.
 */
export declare function getContainerLayout(): TcHmi.Keyboard.ContainerLayout | null;
/**
 * Sets the layout object of the system keyboard container. The layout object defines the positioning and dimensions of the keyboard.
 * @param layout dimensions and position of the system keyboard.
 */
export declare function setContainerLayout(layout: TcHmi.Keyboard.ContainerLayout): void;
export interface LayoutResultSuccess extends TcHmi.IResultObject {
    error: TcHmi.Errors.NONE;
    layoutUrl: string;
}
export interface LayoutResultFail extends TcHmi.IResultObject {
    error: Exclude<TcHmi.Errors, TcHmi.Errors.NONE>;
    details: TcHmi.SelectableRequired<TcHmi.IErrorDetails, 'message' | 'reason' | 'domain'>;
}
export type LayoutResult = LayoutResultSuccess | LayoutResultFail;
declare const _close: typeof close;
declare const _getProviderName: typeof getProviderName;
declare const _setProviderName: typeof setProviderName;
declare const _getAutoOpen: typeof getAutoOpen;
declare const _setAutoOpen: typeof setAutoOpen;
declare const _getLayoutFileFromInputMode: typeof getLayoutFileFromInputMode;
declare const _getProjectKeyboardMapping: typeof getProjectKeyboardMapping;
declare const _setProjectKeyboardMapping: typeof setProjectKeyboardMapping;
declare const _getContainerLayout: typeof getContainerLayout;
declare const _setContainerLayout: typeof setContainerLayout;
type tLayoutResultSuccess = LayoutResultSuccess;
type tLayoutResultFail = LayoutResultFail;
type tLayoutResult = LayoutResult;
declare global {
    namespace TcHmi {
        /**
         * Provides an interface for keyboard interaction.
         * @preserve (Part of the public API)
         */
        namespace Keyboard {
            const close: typeof _close;
            const getProviderName: typeof _getProviderName;
            const setProviderName: typeof _setProviderName;
            const getAutoOpen: typeof _getAutoOpen;
            const setAutoOpen: typeof _setAutoOpen;
            const getLayoutFileFromInputMode: typeof _getLayoutFileFromInputMode;
            const getProjectKeyboardMapping: typeof _getProjectKeyboardMapping;
            const setProjectKeyboardMapping: typeof _setProjectKeyboardMapping;
            const getContainerLayout: typeof _getContainerLayout;
            const setContainerLayout: typeof _setContainerLayout;
            type LayoutResultSuccess = tLayoutResultSuccess;
            type LayoutResultFail = tLayoutResultFail;
            type LayoutResult = tLayoutResult;
        }
    }
}
export {};
//# sourceMappingURL=Keyboard.d.ts.map