import type { Control as TcHmiEventGrid } from 'TcHmiEventGrid.esm.js';
/**
 * A basic popup. No controls are instatiated
 */
export declare abstract class Popup {
    /**
     * Creates a new Popup.
     * @param element The HTML element that hosts the popup.
     * @param name The name of the popup. Used for control instantiation.
     * @param control The control owning the popup.
     */
    constructor(element: HTMLElement, name: string, control: TcHmiEventGrid);
    protected __name: string;
    protected __parentControl: TcHmiEventGrid;
    protected __element: HTMLElement;
    protected __elementContent: HTMLDivElement;
    protected __elementFooter: HTMLDivElement;
    protected __eventDestroyers: TcHmi.DestroyFunction[];
    protected __isShowing: boolean;
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup.
     */
    hide(): void;
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    isShowing(): boolean;
}
//# sourceMappingURL=Popup.d.ts.map