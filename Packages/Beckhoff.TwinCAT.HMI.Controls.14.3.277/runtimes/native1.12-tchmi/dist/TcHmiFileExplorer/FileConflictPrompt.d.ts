import type { Control as TcHmiRadioButton } from '../TcHmiRadioButton/TcHmiRadioButton.esm.js';
export declare class FileConflictPrompt extends TcHmi.Controls.Helpers.OkCancelPrompt<Map<string, string>> {
    protected __existingNames: Set<string>;
    protected __elementLabel: HTMLElement;
    protected __rows: Map<string, {
        skip: TcHmiRadioButton;
        replace: TcHmiRadioButton;
        both: TcHmiRadioButton;
    }>;
    protected __doAll: {
        label: HTMLElement;
        controls: {
            skip: TcHmiRadioButton;
            replace: TcHmiRadioButton;
            both: TcHmiRadioButton;
        };
    } | undefined;
    /**
     * Creates a new FileConflictPrompt instance.
     * @param conflictingNames A map of the names that produce conflicts and whether the original file is replaceable (i. e. not read only).
     * @param parentControl The control which owns the popup.
     */
    constructor(conflictingNames: Map<string, boolean>, existingNames: Iterable<string>, parentControl: TcHmi.Controls.System.TcHmiControl);
    /**
     * Destroys the popup and all its controls.
     * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
     */
    destroy(force?: boolean): void;
    /**
     * Creates a container element with a label and three radio buttons.
     * @param labelText The text that is displayed in the label.
     * @param replaceable Whether to enable or disable the 'Replace' radio button.
     * @param eventHandler The event handler for the radioStateChanged event of the radio buttons.
     */
    protected __buildRow(labelText: string, replaceable?: boolean, eventHandler?: () => void): {
        container: HTMLDivElement;
        label: HTMLSpanElement;
        controls: {
            skip: TcHmiRadioButton;
            replace: TcHmiRadioButton;
            both: TcHmiRadioButton;
        };
    };
    /**
     * Event handler for the radioStateChanged event of the radio buttons
     */
    protected __onRadioStateChanged(): void;
    /**
     * Create an event handler for radioStateChanged event of an all
     * @param name
     */
    protected __getOnAllRadioStateChangedHandler(name: 'skip' | 'replace' | 'both'): () => void;
    /**
     * Performs the action for the OK button, i.e. calling prompt.answer().
     */
    protected __ok(): void;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations(texts: Partial<LocalizableTexts>): void;
}
export interface LocalizableTexts extends TcHmi.Controls.Helpers.OkCancelPrompt.LocalizableTexts {
    headerText: TcHmi.Localizable;
    labelText: TcHmi.Localizable;
    radioTextSkip: TcHmi.Localizable;
    radioTextReplace: TcHmi.Localizable;
    radioTextKeepBoth: TcHmi.Localizable;
    labelDoForAll: TcHmi.Localizable;
}
//# sourceMappingURL=FileConflictPrompt.d.ts.map