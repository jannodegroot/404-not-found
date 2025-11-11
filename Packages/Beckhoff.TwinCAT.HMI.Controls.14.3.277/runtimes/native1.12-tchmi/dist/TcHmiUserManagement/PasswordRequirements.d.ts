export declare class PasswordRequirements extends HTMLElement {
    #private;
    protected __elementHeader: HTMLElement;
    /** An object defining the requirements of a password. Maps a rule name to a regular expression */
    protected __passwordComplexityRules: TcHmi.Dictionary<{
        regex: string;
        localizationParameters?: TcHmi.Dictionary<string>;
    }> | undefined;
    /** A Map containing a Checkbox for each password complexity rule */
    protected __passwordComplexityCheckboxes: Map<string, TcHmi.Controls.Beckhoff.TcHmiCheckbox>;
    /** A Map defining custom validation rules. Maps a name with the text displayed on the checkbox */
    protected __customRules: Map<string, TcHmi.Localizable>;
    /** The parent TcHmiUserManagement control */
    protected __parentControl: TcHmi.Controls.System.TcHmiControl;
    /** A callback function called when the control is fully initilized */
    protected __initCallback: (() => void) | undefined;
    /**event destroyer functions */
    protected __eventDestroyers: TcHmi.DestroyFunction[];
    protected __localizedTexts: Partial<LocalizableTexts> | null;
    protected __localizationSymbols: Map<string, {
        symbol: TcHmi.Symbol<string>;
        destroyWatch: TcHmi.DestroyFunction;
    }>;
    constructor(parentControl: TcHmi.Controls.System.TcHmiControl, customRules?: Map<string, TcHmi.Localizable>, initCallback?: () => void);
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Creates the password requirement element bases on the custom rules and the password complexity rules of the server.
     */
    protected __createElement(): void;
    /**
     * Validate the current password and update the representation.
     * @param password The password to check
     * @param customRules A map containing the name of a custom rule and its current state as a boolean.
     * @returns Returns true if the password is valid and returns false otherwise.
     */
    validate(password: string, customRules?: Map<string, boolean>): boolean;
    /**
     * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
     * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
     * @param localization The localization to watch.
     * @param onChange The callback that is called with the localized and formatted text as a parameter.
     */
    protected __watchLocalization(name: string, localization: TcHmi.FormattedLocalizable, onChange: (localizedText: string) => void): void;
    /**
     * Destroys the localization watch with the given name, if it exists.
     * @param name The name that was used with __watchLoclalization to start watching the symbol.
     */
    protected __unwatchLocalization(name: string): void;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<LocalizableTexts>): void;
    /**
     * Write potentially localized texts to a DOM Element.
     * @param name A name for the localized text.
     * @param text The text to apply.
     * @param element The element to apply the text to.
     */
    protected __applyTextToElement(name: string, text: TcHmi.Localizable | null | undefined, element: Element): void;
}
export interface LocalizableTexts {
    headerText: TcHmi.Localizable;
}
//# sourceMappingURL=PasswordRequirements.d.ts.map