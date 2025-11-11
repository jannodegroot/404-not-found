import type { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { UserManagementPopup, type LocalizableTexts as UserManagementPopup_LocalizableTexts } from './UserManagementPopup.js';
import { PasswordRequirements } from './PasswordRequirements.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiToggleSwitch } from '../TcHmiToggleSwitch/TcHmiToggleSwitch.esm.js';
import type { Control as TcHmiPasswordInput } from '../TcHmiPasswordInput/TcHmiPasswordInput.esm.js';
import type { Control as TcHmiRadioButton } from '../TcHmiRadioButton/TcHmiRadioButton.esm.js';
import type { Control as TcHmiCheckbox } from '../TcHmiCheckbox/TcHmiCheckbox.esm.js';
import type { Control as TcHmiCombobox } from '../TcHmiCombobox/TcHmiCombobox.esm.js';
/**
 * A popup to edit the information of the user.
 */
export declare class EditUserPopup extends UserManagementPopup {
    /**
     * Creates a new LoginPopup.
     * @param element The HTML element that hosts the popup.
     * @param parentControl The control owning the popup.
     */
    constructor(parentControl?: TcHmiControl.Control | null);
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
    /**timezone content html element */
    /**save button*/
    protected __saveButton: TcHmiButton;
    /**save button*/
    protected __cancelButton: TcHmiButton;
    /**advanced toggle switch*/
    protected __advancedSwitch: TcHmiToggleSwitch;
    /**old password textbox*/
    protected __oldPasswordInput: TcHmiPasswordInput;
    /**new password textbox 1*/
    protected __newPasswordInput: TcHmiPasswordInput;
    /** new password textbox 2*/
    protected __newPasswordInput_2: TcHmiPasswordInput;
    /**localization combobox */
    protected __localeCombobox: TcHmiCombobox<string, string[]>;
    /**radiobutton client localization*/
    protected __clientLocaleRadioButton: TcHmiRadioButton;
    /** radiobutton project localization*/
    protected __projectLocaleRadioButton: TcHmiRadioButton;
    /**radio button combobox selected localization*/
    protected __selectionLocaleRadioButton: TcHmiRadioButton;
    /**time zone combobox */
    /**radio button client time zone*/
    /**radio button project time zone*/
    /**radio button combobox selected time zone*/
    /**List of all existing user groups*/
    protected __groupList: string[];
    /**List of group checkboxes*/
    protected __groupCheckboxes: Map<string, TcHmiCheckbox>;
    /** save the group changes done to the new user */
    protected __groupConfigurations: string[];
    /**Group checkbox event destroyers */
    protected __groupCheckboxEventDestroyer: TcHmi.DestroyFunction[];
    /** the last api access result */
    protected __apiAccessResult: TcHmi.Server.UserManagement.IApiAccessResultObject | undefined;
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
    protected __updatePasswordRequirements(): void;
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
     * @param name Name of the created radion button
     */
    protected __createGroupCheckbox(name: string): void;
    /**
     * GroupCheckbox callback function
     * @param groupName group name
     */
    protected __onGroupCheckbox(checkbox: TcHmi.Controls.Beckhoff.TcHmiCheckbox, groupName: string): () => void;
    /**
     * Set group checkbox toggle states based on the current user config
     */
    protected __setGroupCheckboxesByUserConfig(): void;
    /**
     * create localization Selection radion buttons
     */
    protected __createLocalizationSelection(): void;
    /**
     * Set the radio button radio states by the current user config
     */
    protected __setLocaleRadioButtonsByUserConfig(): void;
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
     * Callback function on Savebutton up
     */
    protected __onSaveUp(): void;
    /**
     * Adds and removes usergroups of a User
     * @param username The name of the user which properties will be changed
     * @param oldPassword The old password
     * @param newPassword The new password of the user
     * @param groupsToAdd Array of groups which will be added to the user
     * @param groupsToRemove Array of groups which will be remove from the user
     * @param locale the new locale of the user
     * @param timeZone the new time zone of the user
     */
    protected __updateUser(username: string, oldPassword: string | undefined, newPassword: string | undefined, groupsToAdd: string[] | undefined, groupsToRemove: string[] | undefined, locale: string | undefined, timeZone: string | undefined): void;
    /**
     * Callback function for the advanced toggle switch
     */
    protected __onAdvanced(): void;
    /**
     * Set new value for the advanced mode.
     */
    setAdvanced(advanced: boolean): void;
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
    oldPasswordInputPlaceholder: TcHmi.Localizable;
    newPasswordInputPlaceholder: TcHmi.Localizable;
    newPasswordInput2Placeholder: TcHmi.Localizable;
    clientLocaleRadioButtonText: TcHmi.Localizable;
    projectLocaleRadioButtonText: TcHmi.Localizable;
    passwordRequirementsHeadline: TcHmi.Localizable;
    passwordRequirementsCurrentPassword: TcHmi.Localizable;
    passwordRequirementsRepitition: TcHmi.Localizable;
    popupFeedbackNoGroupsToAdjust: TcHmi.Localizable;
    feedbackPromptHeadlineFailed: TcHmi.Localizable;
    feedbackPromptHeadlineSuccess: TcHmi.Localizable;
    feedbackPromptListUserGroupError: TcHmi.Localizable;
    feedbackPromptPasswordOld: TcHmi.Localizable;
    feedbackPromptBothPasswords: TcHmi.Localizable;
    feedbackPromptPasswordMatch: TcHmi.Localizable;
    feedbackPromptUserInfoNotUpdated: TcHmi.Localizable;
    feedbackPromptUserInformationUpdated: TcHmi.Localizable;
}
//# sourceMappingURL=EditUserPopup.d.ts.map