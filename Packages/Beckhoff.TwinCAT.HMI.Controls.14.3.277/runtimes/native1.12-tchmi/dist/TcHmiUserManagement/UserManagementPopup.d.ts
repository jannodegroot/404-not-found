import type { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
export declare abstract class UserManagementPopup extends TcHmi.Controls.Helpers.Popup<void> {
    /**
     * Creates a new Popup.
     * @param element The HTML element that hosts the popup.
     * @param parentControl The control owning the popup.
     */
    constructor(parentControl?: TcHmiControl.Control | null);
    /** Localized Texts */
    protected __localizedTexts: Partial<LocalizableTexts> | null;
    /**font size of the displayed text*/
    protected __textFontSize: number | null;
    /**font size unit of the displayed text*/
    protected __textFontSizeUnit: TcHmi.FontSizeUnit;
    /**font size of the displayed drop down text*/
    protected __dropDownFontSize: number | null;
    /**font size unit of the displayed drop down text*/
    protected __dropDownFontSizeUnit: TcHmi.FontSizeUnit;
    /**headline font size */
    protected __headlineFontSize: number | null;
    /**headline font size unit */
    protected __headlineFontSizeUnit: TcHmi.FontSizeUnit;
    /**sub headline font size */
    protected __subHeadlineFontSize: number | null;
    /** subheadline font size unit */
    protected __subHeadlineFontSizeUnit: TcHmi.FontSizeUnit;
    /** The domain used for the api function */
    protected __selectedDomain: string | undefined;
    /** Feedback Popup */
    protected __feedbackPrompt: TcHmi.Controls.Helpers.TextAndButtonsPrompt<void> | null;
    /**
     * Sets the domain of the usermanagement extentison.
     */
    setDomain(domain: string | undefined): void;
    /**
     * Get all font sizes from the parent control and set them to the elements.
     */
    protected __updateFontSizes(): void;
    /**
     * DEPRECATED please use the setters of the specific properties.
     */
    refreshParentControlResources(): void;
    setTextFontSize(valueNew: number | null): void;
    setTextFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    setDropDownFontSize(valueNew: number | null): void;
    setDropDownFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    setHeadlineFontSize(valueNew: number | null): void;
    setHeadlineFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    setSubHeadlineFontSize(valueNew: number | null): void;
    setSubHeadlineFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Create a feedback prompt
     **/
    protected __createFeedbackPrompt(): TcHmi.Controls.Helpers.TextAndButtonsPrompt<undefined>;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<LocalizableTexts>): void;
}
export interface LocalizableTexts {
    headerText: TcHmi.Localizable;
    feedbackPromptButtonOk: TcHmi.Localizable;
}
//# sourceMappingURL=UserManagementPopup.d.ts.map