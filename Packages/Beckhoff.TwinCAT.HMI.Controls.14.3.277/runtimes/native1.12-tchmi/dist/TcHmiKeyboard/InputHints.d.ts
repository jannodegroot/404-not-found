export declare class InputHints {
    protected __keysHost: HTMLElement;
    protected __parentControl: TcHmi.Controls.System.TcHmiControl;
    protected __localization: TcHmi.Locale.ControlLocalization;
    protected __localizedElements: Map<HTMLElement, {
        key: string;
        parameters?: any[];
    }>;
    protected __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    protected __focusedElement: HTMLInputElement | HTMLTextAreaElement | null;
    protected __mutationObserver: MutationObserver;
    protected __onUpdate: TcHmi.Controls.Helpers.CallbackManager<() => void>;
    /**
     * Event that is triggered when the min or max values are updated.
     */
    onUpdate: Readonly<{
        add: (callback: () => void) => TcHmi.DestroyFunction;
        remove: (callback: () => void) => void;
    }>;
    protected __element: HTMLDivElement;
    protected __min: MinHint;
    protected __max: MaxHint;
    protected __displayType: DisplayType;
    protected __alignment: 'Left' | 'Right';
    /**
     * Create a new InputHints instance.
     * @param __keysHost The element containing the keys in the DOM.
     * @param __parentControl The parent control instance.
     */
    constructor(__keysHost: HTMLElement, __parentControl: TcHmi.Controls.System.TcHmiControl);
    /**
     * Updates the hints values and visibility. Will add the hints to the DOM if necessary. Changes to the min and
     * max attributes of the focused element will be observed and trigger an update.
     * @param focusedElement The element that currently has focus.
     */
    update(focusedElement: HTMLInputElement | HTMLTextAreaElement | null): void;
    /**
     * Updates the hints values and visibility. Will add the hints to the DOM if necessary.
     */
    protected __update(): void;
    /**
     * Shows the hints, but only if displayType is not None.
     */
    protected __show(): void;
    /**
     * Hides the hints.
     */
    hide(): void;
    /**
     * Validates the current input and highlights any hints being violated. Returns false if at least one hint is violated.
     * @param currentInput The current input of the keyboard.
     */
    validate(currentInput: string): boolean;
    /**
     * Resets the validation highlighting.
     */
    resetValidation(): void;
    /**
     * Gets the element that contains the hints.
     */
    getElement(): HTMLDivElement;
    /**
     * Sets how the hints should be displayed: As an overlay over the indirect input textbox, at a position defined
     * by the layout, or not at all.
     * @param displayType The display type.
     */
    setDisplayType(displayType: DisplayType): void;
    /**
     * Gets the display type.
     */
    getDisplayType(): DisplayType;
    /**
     * Sets whether the hints should be left or right aligned.
     * @param alignment The new alignment.
     */
    setAlignment(alignment: 'Left' | 'Right'): void;
    /**
     * Gets the alignment.
     */
    getAlignment(): "Left" | "Right";
    /**
     * Add an element to be localized.
     * @param element The element.
     * @param key The localization key.
     * @param parameters Optional parameters to pass to tchmi_format_string.
     */
    protected __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
    /**
     * Remove a localized element.
     * @param element The element to remove.
     */
    protected __removeLocalizedElement(element: HTMLElement): void;
}
export declare enum DisplayType {
    None = 0,
    TextboxOverlay = 1,
    LayoutDefined = 2
}
declare abstract class InputHint {
    protected __parent: HTMLElement;
    protected __value: number | null;
    protected __displayValue: string | null;
    protected __elementLabel: HTMLSpanElement;
    protected __elementValue: HTMLSpanElement;
    /**
     * Creates a new InputHint instance to manage the hints DOM elements.
     * @param __parent The element that should contain the input hint elements.
     */
    constructor(__parent: HTMLElement);
    /**
     * Set the value of this input hint and write it to the DOM if no display value is defined. Also hides or shows the hint.
     * @param value The new value.
     */
    set value(value: number | null);
    /**
     * Get the value of this input hint.
     */
    get value(): number | null;
    /**
     * Set the displayed value of this input hint and write it to the DOM. Also hides or shows the hint.
     * @param value The new value.
     */
    set displayValue(value: string | null);
    /**
     * Get the displayed value of this input hint.
     */
    get displayValue(): string | null;
    /**
     * Writes the hints displayValue or value to the DOM and hides or shows the hint.
     */
    protected __updateHint(): void;
    /**
     * Show this input hint by adding it to the DOM.
     */
    abstract show(): void;
    /**
     * Hide this input hint by removing it from the DOM.
     */
    hide(): void;
    /**
     * Checks whether the given value is valid for this hint an updates the violated state accordingly.
     * @param value The value to check.
     */
    validate(value: number): boolean;
    /**
     * Checks whether the given value is valid.
     * @param value The value to check.
     */
    protected abstract __isValidValue(value: number): boolean;
    /**
     * Resets the validation highlighting.
     */
    resetValidation(): void;
    /**
     * Set the violated state of this input hint.
     * @param violated The violated state.
     */
    protected __setIsViolated(violated: boolean): void;
}
declare class MinHint extends InputHint {
    /**
     * Creates a new MinHint instance to manage the hints DOM elements.
     * @param parent The element that should contain the input hint elements.
     * @param localizer An object containig functions to add and remove elements to a localization collection.
     */
    constructor(parent: HTMLElement, localizer: {
        add: (element: HTMLElement, key: string, ...parameters: any[]) => void;
        remove: (element: HTMLElement) => void;
    });
    /**
     * Show this input hint by adding it to the DOM.
     */
    show(): void;
    /**
     * Checks whether the given value is valid.
     * @param value The value to check.
     */
    protected __isValidValue(value: number): boolean;
}
declare class MaxHint extends InputHint {
    /**
     * Creates a new MaxHint instance to manage the hints DOM elements.
     * @param parent The element that should contain the input hint elements.
     * @param localizer An object containig functions to add and remove elements to a localization collection.
     */
    constructor(parent: HTMLElement, localizer: {
        add: (element: HTMLElement, key: string, ...parameters: any[]) => void;
        remove: (element: HTMLElement) => void;
    });
    /**
     * Show this input hint by adding it to the DOM.
     */
    show(): void;
    /**
     * Checks whether the given value is valid.
     * @param value The value to check.
     */
    protected __isValidValue(value: number): boolean;
}
export {};
//# sourceMappingURL=InputHints.d.ts.map