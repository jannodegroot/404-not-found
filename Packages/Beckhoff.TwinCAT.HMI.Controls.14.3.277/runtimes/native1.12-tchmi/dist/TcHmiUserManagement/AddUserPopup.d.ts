import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiToggleSwitch } from '../TcHmiToggleSwitch/TcHmiToggleSwitch.esm.js';
import type { Control as TcHmiPasswordInput } from '../TcHmiPasswordInput/TcHmiPasswordInput.esm.js';
import type { Control as TcHmiCheckbox } from '../TcHmiCheckbox/TcHmiCheckbox.esm.js';
import type { Control as TcHmiCombobox } from '../TcHmiCombobox/TcHmiCombobox.esm.js';
import type { Control as TcHmiRadioButton } from '../TcHmiRadioButton/TcHmiRadioButton.esm.js';
import { UserManagementPopup, type LocalizableTexts as UserManagementPopup_LocalizableTexts } from './UserManagementPopup.js';
import { PasswordRequirements } from './PasswordRequirements.js';
/**
 * The Popup window to add a new User.
 */
export declare class AddUserPopup extends UserManagementPopup {
    /**
     * Creates a new AddUserPopup.
     * @param parentControl The control owning the popup.
     */
    constructor(parentControl?: TcHmi.Controls.System.TcHmiControl | null);
    protected __elementUsername: HTMLElement;
    protected __elementUsernameHeader: HTMLElement;
    protected __elementPassword: HTMLElement;
    protected __elementPasswordHeader: HTMLElement;
    protected __elementGroups: HTMLElement;
    protected __elementGroupsHeader: HTMLElement;
    protected __elementGroupList: HTMLElement;
    protected __elementGroupListInfo: HTMLElement;
    protected __elementLocale: HTMLElement;
    protected __elementLocaleHeader: HTMLElement;
    /** An element containing information about the password requirements */
    protected __elementPasswordRequirements: PasswordRequirements | undefined;
    /**time zone content html element */
    /**save button */
    protected __saveButton: TcHmiButton;
    /**cancel button */
    protected __cancelButton: TcHmiButton;
    /**advanced toggle switch*/
    protected __advancedSwitch: TcHmiToggleSwitch;
    /**username textbox */
    protected __usernameInput: TcHmiInput;
    /**password textbox */
    protected __newPasswordInput: TcHmiPasswordInput;
    /**password textbox 2 */
    protected __newPasswordInput_2: TcHmiPasswordInput;
    /** force password change checkbox */
    protected __forcePasswordChangeCheckbox: TcHmiCheckbox;
    /**localization combobox */
    protected __localeCombobox: TcHmiCombobox<string, string[]>;
    /**radio button client localization*/
    protected __clientLocaleRadioButton: TcHmiRadioButton;
    /**radio button project locale */
    protected __projectLocaleRadioButton: TcHmiRadioButton;
    /**radio button combobox selected localization */
    protected __selectionLocaleRadioButton: TcHmiRadioButton;
    /**time zone combobox */
    /**radio button client timezone*/
    /**radio button project timezone */
    /**radio button combobox selected timezone */
    /**List of all existing user groups*/
    protected __groupList: string[];
    /**List of group checkboxes*/
    protected __groupCheckboxes: Map<string, TcHmi.Controls.Beckhoff.TcHmiCheckbox>;
    /** save the group changes done to the new user */
    protected __groupConfigurations: string[];
    /**Group checkbox event destroyers */
    protected __groupCheckboxEventDestroyer: TcHmi.DestroyFunction[];
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
    /**
     * Callback function to show Usermanagement buttons depending on the symbol Access of the User
     */
    protected __showControlsBasedOnApiAccess(): void;
    protected __performPromptAction(toPerform: TcHmi.Controls.Helpers.Popup.PromptAction<string>): void;
    /**
     * Check current input for password requirements and display the result
     */
    protected __updateSaveButton(): void;
    /**
     * Create an element displaying the requirements for a new password
     */
    protected __createPasswordRequirementsElement(): void;
    /**
     * create user group selection
     */
    protected __createUserGroupSelection(): void;
    /**
     * create a single user group selection checkboxes
     * @param name The name of the created Checkbox
     */
    protected __createGroupCheckbox(name: string): void;
    /**
     * GroupCheckbox callback function
     * @param groupName group name
     */
    protected __onGroupCheckbox(checkbox: TcHmi.Controls.Beckhoff.TcHmiCheckbox, groupName: string): () => void;
    /**
     * create localization Selection radion buttons
     */
    protected __createLocalizationSelection(): void;
    /** -- ! Timezone selection is currently not used ! --
     * create localization Selection radion buttons
     */
    /**
     * Check selected locale RadioButton
     */
    protected __checkLocaleRadioButtons(): string | undefined;
    /** -- ! Timezone selection is currently not used ! --
     * Check selected timeZone RadioButton
     */
    /**
     * Callback for a scroll on the groups element
     */
    protected __onGroupScroll(_event: MouseEvent): void;
    /**
     * Set group element scroll data
     */
    protected __setGroupScrollData(): void;
    /**
     * Enable and disable localization-/timezoneCombobox
     * @param isLocale Selection between locale and time zone
     */
    protected __onRadioStateLocaleChanged(): void;
    /**
     * Callback function for the advanced toggle switch
     */
    protected __onAdvanced(): void;
    /**
     * Set new value for the advanced mode.
     */
    setAdvanced(advanced: boolean): void;
    /**
     * Sets the domain of the usermanagement extentison.
     */
    setDomain(domain: string | undefined): void;
    /**
     * Callback function on Savebutton up
     */
    protected __onSaveUp(): void;
    /**
     * Gets the error message from the given data.
     */
    protected __getErrorAndMessage(data: TcHmi.Server.UserManagement.IUserResultObject): {
        error: TcHmi.Errors;
        message: string;
    };
    /**
     * Resets the controls used in this popup
     */
    protected __resetControls(): void;
    /**
     * Callback function on Cancelbutton up
     */
    protected __onCancelUp(): void;
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
    usernameHeaderText: TcHmi.Localizable;
    passwordHeaderText: TcHmi.Localizable;
    localizationHeaderText: TcHmi.Localizable;
    userGroupsHeaderText: TcHmi.Localizable;
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
    newPasswordInputPlaceholder: TcHmi.Localizable;
    newPasswordInput2Placeholder: TcHmi.Localizable;
    forcePasswordChangeCheckboxtext: TcHmi.Localizable;
    clientLocaleRadioButtonText: TcHmi.Localizable;
    projectLocaleRadioButtonText: TcHmi.Localizable;
    passwordRequirementsHeadline: TcHmi.Localizable;
    passwordRequirementsRepitition: TcHmi.Localizable;
    popupFeedbackNoGroupsToAdjust: TcHmi.Localizable;
    feedbackPromptHeadlineFailed: TcHmi.Localizable;
    feedbackPromptHeadlineSuccess: TcHmi.Localizable;
    feedbackPromptListUserGroupError: TcHmi.Localizable;
    feedbackPromptEnterUsername: TcHmi.Localizable;
    feedbackPromptBothPasswords: TcHmi.Localizable;
    feedbackPromptPasswordMatch: TcHmi.Localizable;
    feedbackPromptUserGroup: TcHmi.Localizable;
    feedbackPromptUsernameExists: TcHmi.Localizable;
    feedbackPromptListUserError: TcHmi.Localizable;
    feedbackPromptUserAdded: TcHmi.Localizable;
    feedbackPromptUserAddedError: TcHmi.Localizable;
}
//# sourceMappingURL=AddUserPopup.d.ts.map