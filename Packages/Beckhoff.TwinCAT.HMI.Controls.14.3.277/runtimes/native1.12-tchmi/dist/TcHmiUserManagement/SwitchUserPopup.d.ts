import type { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { UserManagementPopup, type LocalizableTexts as UserManagementPopup_LocalizableTexts } from './UserManagementPopup.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiPasswordInput } from '../TcHmiPasswordInput/TcHmiPasswordInput.esm.js';
import type { Control as TcHmiCombobox } from '../TcHmiCombobox/TcHmiCombobox.esm.js';
/**
 * A popup for deleting users.
 */
export declare class SwitchUserPopup extends UserManagementPopup {
    /**
     * Creates a new ChangeGroupsPopup.
     * @param parentControl The control owning the popup.
     */
    constructor(parentControl?: TcHmiControl.Control | null);
    protected __elementDomain: HTMLElement;
    protected __elementDomainHeader: HTMLElement;
    protected __elementUsername: HTMLElement;
    protected __elementUsernameHeader: HTMLElement;
    protected __elementPassword: HTMLElement;
    protected __elementPasswordHeader: HTMLElement;
    /** confirm button */
    protected __saveButton: TcHmiButton;
    /** cancel button */
    protected __cancelButton: TcHmiButton;
    /** user combobox */
    protected __userCombobox: TcHmiCombobox<string, string[]>;
    /** username input */
    protected __usernameInput: TcHmiInput;
    /** password input */
    protected __passwordInput: TcHmiPasswordInput;
    /** domain combobox */
    protected __domainCombobox: TcHmiCombobox<string, string[]>;
    /** name of the selected user */
    protected __selectedUserName: string | null | undefined;
    /** defines a control to choose the user to be logged in */
    protected __userSelectType: 'Combobox' | 'Input';
    /** Advanced mode flag */
    protected __advanced: boolean;
    /**
     * Contains all functions which are fired on advanced change.
     */
    private __advancedChangeCallbacks;
    onAdvancedChanged: Readonly<{
        add: (callback: (advanced: boolean) => void) => TcHmi.DestroyFunction;
        remove: (callback: (advanced: boolean) => void) => void;
    }>;
    /** Localized Texts */
    protected __localizedTexts: Partial<LocalizableTexts> | null;
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    protected __performPromptAction(toPerform: TcHmi.Controls.Helpers.Popup.PromptAction<string>): void;
    /**
     * Get and handle the domains
     **/
    protected __updateDomains(): void;
    /**
     * Updates the user selection
     */
    protected __updateUserSelection(): void;
    /**
     * Show Combobox to select a user
     */
    protected __showSelectionCombobox(): void;
    /**
     * Show input control to enter a user
     */
    protected __showSelectionInput(): void;
    /**
     * Update selectable Users in the UserCombobox
     */
    protected __updateComboboxData(): void;
    /**
     * Callback function on usercombobox selections changed. Update Checkbox selection for the selected user.
     */
    protected __onUserCombobox(): void;
    /**
     * enable the popup controls due to the current state
     */
    protected __updatePopupControls(): void;
    /**
     * Callback function on Savebutton
     */
    protected __onConfirm(): void;
    /**
     * Set new value for the advanced mode.
     */
    setAdvanced(advanced: boolean): void;
    /**
     * Callback function on Savebutton cancel
     */
    protected __onCancel(): void;
    /**
     * Callback function on domain selection changed
     **/
    protected __onDomainSelectionChanged(): void;
    /**
     * Get all font sizes from the parent control and set them to the elements.
     */
    protected __updateFontSizes(): void;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<LocalizableTexts>): void;
}
export interface LocalizableTexts extends UserManagementPopup_LocalizableTexts {
    domainHeaderText: TcHmi.Localizable;
    usernameHeaderText: TcHmi.Localizable;
    passwordHeaderText: TcHmi.Localizable;
    saveButton: {
        text: TcHmi.Localizable;
        tooltip: TcHmi.Localizable;
    };
    cancelButton: {
        text: TcHmi.Localizable;
        tooltip: TcHmi.Localizable;
    };
    advancedSwitch: {
        text: TcHmi.Localizable;
        tooltip: TcHmi.Localizable;
    };
    usernameInputPlaceholder: TcHmi.Localizable;
    passwordInputPlaceholder: TcHmi.Localizable;
    userComboboxPlaceholder: TcHmi.Localizable;
    feedbackPromptHeadlineFailed: TcHmi.Localizable;
    feedbackPromptHeadlineSuccess: TcHmi.Localizable;
    feedbackPromptUsername: TcHmi.Localizable;
    feedbackPromptPassword: TcHmi.Localizable;
    feedbackPromptUserSwitched: TcHmi.Localizable;
    feedbackPromptUserNotSwitched: TcHmi.Localizable;
}
//# sourceMappingURL=SwitchUserPopup.d.ts.map