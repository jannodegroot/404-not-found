import { BaseProvider } from './UiProvider.js';
/**
 * Abstract class for all KeyboardProvider
 */
export declare abstract class KeyboardProvider extends BaseProvider {
    readonly type = "keyboard";
    /**
     * Create a new Keyboard provider.
     * @param providerName The name of this provider.
     */
    constructor(providerName: string);
    /**
     * Open a keyboard with a specific target element.
     * @param textElement
     */
    abstract open(textElement: HTMLInputElement | HTMLTextAreaElement): TcHmi.IErrorDetails;
    /**
     * Will be called when the config has changed.
     */
    abstract refreshConfig(): void;
    /**
     * Closes a keyboard.
     * @param textElement
     */
    abstract close(): TcHmi.IErrorDetails;
    /**
     * Returns whether the keyboard is currently being interacted with by mouse, touch or physical keyboard.
     */
    hasActiveUserInteraction?(): boolean;
}
declare const _KeyboardProvider: typeof KeyboardProvider;
type tKeyboardProvider = KeyboardProvider;
declare global {
    namespace TcHmi {
        namespace UiProvider {
            let KeyboardProvider: typeof _KeyboardProvider;
            type KeyboardProvider = tKeyboardProvider;
        }
    }
}
export {};
//# sourceMappingURL=UiProvider.KeyboardProvider.d.ts.map