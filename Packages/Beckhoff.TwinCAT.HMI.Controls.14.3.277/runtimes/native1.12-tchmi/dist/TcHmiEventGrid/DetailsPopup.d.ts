import type { Control as TcHmiEventGrid } from './TcHmiEventGrid.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import { Popup } from './Popup.js';
/**
 * A popup showing details of events. Contains a close button.
 */
export declare class DetailsPopup extends Popup {
    #private;
    /**
     * Creates a new DetailsPopup.
     * @param element The HTML element that hosts the popup.
     * @param control The control owning the popup.
     */
    constructor(element: HTMLElement, control: TcHmiEventGrid);
    protected __event: TcHmi.Server.Events.Event | null;
    protected __confirmButton: TcHmiButton;
    protected __localizedElements: HTMLElement[];
    protected __destroyersToCallOnHide: TcHmi.DestroyFunction[];
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup.
     */
    hide(): void;
    /**
     * Destroys the popup and all its controls. Also removes all DOM event handlers
     */
    destroy(): void;
    /**
     * Updates the content of the popup.
     * @param event The event whose details should be shown.
     */
    update(event: TcHmi.Server.Events.Event): void;
    /**
     * Returns the currently shown event.
     */
    getEvent(): TcHmi.Server.Events.Event<any, TcHmi.Dictionary<any>> | null;
    __setCanConfirm(value: boolean): void;
}
//# sourceMappingURL=DetailsPopup.d.ts.map