import type { Control as TcHmiEventGrid } from './TcHmiEventGrid.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import { Popup } from './Popup.js';
/**
 * A basic settings popup. This popup contains an OK and a Cancel button.
 */
export declare abstract class SettingsPopup<S> extends Popup {
    /**
     * Creates a new SettingsPopup.
     * @param element The HTML element that hosts the popup.
     * @param name The name of the popup. Used for control instantiation.
     * @param control The control owning the popup.
     */
    constructor(element: HTMLElement, name: string, control: TcHmiEventGrid);
    protected __resetButton: TcHmiButton;
    protected __resetHandlers: (() => void)[];
    protected __okHandlers: (() => void | boolean)[];
    protected __cancelHandlers: (() => void | boolean)[];
    protected abstract __settings: S;
    protected __updateRequired: boolean;
    /**
     * Handles the pressed event of a button.
     */
    protected __onButtonPressed(handlers: (() => void | boolean)[], hide: boolean): void;
    /**
     * Registers a handler function for presses of the Reset button. Returns a function to unregister the handler.
     * @param handler The handler to register.
     */
    registerResetButtonHandler(handler: () => void): () => void;
    /**
     * Registers a handler function for presses of the OK button. Returns a function to unregister the handler.
     * @param handler The handler to register. If one or more of the registered handlers returns false, the popup will not be hidden.
     */
    registerOkButtonHandler(handler: () => void | boolean): () => void;
    /**
     * Registers a handler function for presses of the Cancel button. Returns a function to unregister the handler.
     * @param handler The handler to register. If one or more of the registered handlers returns false, the popup will not be hidden.
     */
    registerCancelButtonHandler(handler: () => void | boolean): () => void;
    /**
     * Updates the settings this popup should modify.
     * @param settings The new settings.
     * @param resetable Whether the reset button should be enabled or disabled.
     */
    update(settings: S, resetable?: boolean): void;
    /**
     * Gets the current settings.
     */
    getSettings(): S;
    /**
     * Checks if an update of the settings is required.
     */
    requiresUpdate(): boolean;
}
//# sourceMappingURL=SettingsPopup.d.ts.map