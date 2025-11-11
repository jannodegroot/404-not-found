import type { Control as TcHmiCombobox } from '../TcHmiCombobox/TcHmiCombobox.esm.js';
import type { Control as TcHmiCheckbox } from '../TcHmiCheckbox/TcHmiCheckbox.esm.js';
import { UserManagementPopup, type LocalizableTexts as UserManagementPopup_LocalizableTexts } from './UserManagementPopup.js';
/**
 * A popup for changing a users groups.
 */
export declare class ChangeUserPopup extends UserManagementPopup {
    /**
     * Creates a new ChangeUsersPopup.
     * @param parentControl The control owning the popup.
     */
    constructor(parentControl?: TcHmi.Controls.System.TcHmiControl | null);
    protected __elementUserSelection: HTMLElement;
    protected __elementUserSelectionHeader: HTMLElement;
    protected __elementPassword: HTMLElement;
    protected __elementPasswordHeader: HTMLElement;
    protected __elementGroups: HTMLElement;
    protected __elementGroupsHeader: HTMLElement;
    protected __elementGroupList: HTMLElement;
    protected __elementGroupListInfo: HTMLElement;
    /**confirm button*/
    protected __saveButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    /**cancel button*/
    protected __cancelButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    /**advanced toggle switch*/
    protected __advancedSwitch: TcHmi.Controls.Beckhoff.TcHmiToggleSwitch;
    /**user combobox*/
    protected __userCombobox: TcHmiCombobox<string, string[]>;
    /** force password change checkbox*/
    protected __forcePasswordChangeCheckbox: TcHmiCheckbox;
    protected __groupList: string[] | null;
    /** list of group checkboxes*/
    protected __groupCheckboxes: Map<string, TcHmiCheckbox>;
    /**List of all users*/
    protected __userList: TcHmi.Dictionary<TcHmi.Server.UserManagement.IUserDetails>;
    /**user details of the selected user*/
    protected __selectedUserDetails: TcHmi.Server.UserManagement.IUserDetails | undefined;
    /**name of the selected user*/
    protected __selectedUserName: string | null | undefined;
    /** save the changes done for each user <user, groups the user is in> */
    protected __groupConfigurations: Map<string, string[]>;
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
     * Callback function to show Usermanagement buttons depending on the symbol Access of the User
     */
    protected __showControlsBasedOnApiAccess(): void;
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    protected __performPromptAction(toPerform: TcHmi.Controls.Helpers.Popup.PromptAction<string>): void;
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
     * Update the force password change checkbox.
     */
    protected __updateForcePasswordChange(): void;
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
    protected __onGroupCheckbox(checkbox: TcHmiCheckbox, groupName: string): () => void;
    /**
     * Adds and removes usergroups of a User
     * @param username The name of the user which properties will be changed
     * @param groupsToAdd Array of groups which will be added to the user
     * @param groupsToRemove Array of groups which will be remove from the user
     */
    protected __updateUser(username: string, groupsToAdd: string[], groupsToRemove: string[], forcePasswordChange: boolean): void;
    /**
     * Gets the error message from the given data.
     */
    protected __getErrorAndMessage(data: TcHmi.Server.UserManagement.IUserResultObject): {
        error: TcHmi.Errors;
        message: string;
        reason: string;
    };
    /**
     * Callback function on Savebutton cancel
     */
    protected __onConfirm(): void;
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
     * Callback for a scroll on the groups element
     */
    protected __onGroupScroll(event: MouseEvent): void;
    /**
     * Set group element scroll data
     */
    protected __setGroupScrollData(): void;
    /**
     * Callback function on Savebutton cancel
     */
    protected __onCancel(): void;
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
    userSelectionHeaderText: TcHmi.Localizable;
    passwordHeaderText: TcHmi.Localizable;
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
    userComboboxPlaceholder: TcHmi.Localizable;
    popupFeedbackNoGroupsToAdjust: TcHmi.Localizable;
    forcePasswordChangeCheckboxtext: TcHmi.Localizable;
    feedbackPromptHeadlineFailed: TcHmi.Localizable;
    feedbackPromptHeadlineSuccess: TcHmi.Localizable;
    feedbackPromptListUserError: TcHmi.Localizable;
    feedbackPromptListUserGroupError: TcHmi.Localizable;
    feedbackPromptUserGroupsNotUpdated: TcHmi.Localizable;
    feedbackPromptUserInformationUpdated: TcHmi.Localizable;
}
//# sourceMappingURL=ChangeUserPopup.d.ts.map