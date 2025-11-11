import type { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Class to display a dropdown to configure sorting criterions.
 */
export declare class SortConfigurator<T extends TcHmi.SortingInfo> {
    protected __host: HTMLElement;
    protected __parentControl: TcHmiControl.Control;
    protected __display: HTMLSpanElement;
    protected __dropdown: HTMLDivElement;
    protected __list: HTMLUListElement;
    protected __criterions: Map<T["name"], {
        localizationKey: string;
        element: HTMLLIElement;
        label: HTMLSpanElement;
    }>;
    protected __divider: HTMLLIElement;
    protected __attributeValue: T[] | undefined;
    protected __userValue: T[];
    protected __onValueChangeManager: TcHmi.Controls.Helpers.CallbackManager<(value: T[], isUserConfigured: boolean) => void>;
    onValueChange: Readonly<{
        add: (callback: (value: T[], isUserConfigured: boolean) => void) => TcHmi.DestroyFunction;
        remove: (callback: (value: T[], isUserConfigured: boolean) => void) => void;
    }>;
    protected __localizationReader: TcHmi.Locale.LocalizationReader | null;
    protected __destroyers: TcHmi.DestroyFunction[];
    protected __destroyOnClose: TcHmi.DestroyFunction[];
    protected __pointerEventDestroyers: TcHmi.DestroyFunction[];
    protected __isOpen: boolean;
    protected __dropdownResizeObserver: ResizeObserver | null;
    protected __dragOperations: Map<HTMLLIElement, {
        criterion: T;
        currentIndex: number;
        originalIndex: number;
        pointers: {
            id: number;
            offset: number;
        }[];
    }>;
    protected __workingCopy: T[] | null;
    protected __listItemGeometry: {
        height: number;
        gap: number;
    };
    /**
     * Create a new SortConfigurator
     * @param __host The element that displays the curent configuration and that when clicked on opens the dropdown.
     * @param sortingCriterions The available sorting criterions.
     * @param __parentControl The parent control.
     */
    constructor(__host: HTMLElement, sortingCriterions: {
        name: T['name'];
        localizationKey: string;
    }[], __parentControl: TcHmiControl.Control);
    /**
     * Destroy the SortConfigurator.
     */
    destroy(): void;
    /**
     * Event handler for the click event of the host.
     * @param event The event that is handled.
     */
    protected __onHostClick(event: MouseEvent): void;
    /**
     * Event handler for the click event of the document.
     * @param event The event that is handled.
     */
    protected __onDocumentClick(event: MouseEvent): void;
    /**
     * Event handler for the pointerdown event of the dropdown.
     * @param event The event that is handled.
     */
    protected __onPointerDown(event: PointerEvent): void;
    /**
     * Event handler for the pointermove event of the dropdown.
     * @param event The event that is handled.
     */
    protected __onPointerMove(event: PointerEvent): void;
    /**
     * Event handler for the pointerup event of the dropdown.
     * @param event The event that is handled.
     */
    protected __onPointerUp(event: PointerEvent): void;
    /**
     * Event handler for the pointercancel event of the dropdown.
     * @param event The event that is handled.
     */
    protected __onPointerCancel(event: PointerEvent): void;
    /**
     * Event handler for the click event of the criterion list elements.
     * @param event The event that is handled.
     */
    protected __onCriterionClick(event: MouseEvent): void;
    /**
     * Open the dropdown.
     */
    protected __open(): void;
    /**
     * Close the dropdown.
     */
    protected __close(): void;
    /**
     * Set the value of the attribute. This value is used when the user clicks the reset button.
     * Setting this also sets the UserValue.
     * @param value The value of the attribute.
     */
    setAttributeValue(value: T[]): void;
    /**
     * Get the value of the attribute.
     */
    getAttributeValue(): T[] | undefined;
    /**
     * Set the value that is actually used.
     * @param value The value that is actually used.
     */
    setUserValue(value: T[]): void;
    /**
     * Set the value that is actually used.
     * @param value The value that is actually used.
     * @param isUserConfigured Whether this value was configured by the user or came from the attribute.
     */
    protected __setUserValue(value: T[], isUserConfigured?: boolean): void;
    /**
     * Get the value that is actually used.
     */
    getUserValue(): T[];
    /**
     * Write the current configuration to the display element as localized text.
     */
    protected __updateDisplay(): void;
    /**
     * Arrange the list items in the dropdown according to the given configuration and set their classes.
     * @param sorting The configuration to show.
     */
    protected __updateDropdown(sorting: T[]): void;
    /**
     * Position the dropdown as close to the host as possible.
     */
    protected __positionDropdown(): void;
}
//# sourceMappingURL=SortConfigurator.d.ts.map