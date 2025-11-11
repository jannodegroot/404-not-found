import type { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { UserManagementPopup, type LocalizableTexts as UserManagementPopup_LocalizableTexts } from './UserManagementPopup.js';
import { AddUserPopup, type LocalizableTexts as AddUserPopup_LocalizableTexts } from './AddUserPopup.js';
import { DeleteUserPopup, type LocalizableTexts as DeleteUserPopup_LocalizableTexts } from './DeleteUserPopup.js';
import { ChangeUserPopup, type LocalizableTexts as ChangeUserPopup_LocalizableTexts } from './ChangeUserPopup.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiCombobox } from '../TcHmiCombobox/TcHmiCombobox.esm.js';
/**
 * The popup to navigate to the real functional popup.
 */
export declare class ManageUserPopup extends UserManagementPopup {
    /**
     * Creates a new LoginPopup.
     * @param parentControl The control owning the popup.
     */
    constructor(parentControl?: TcHmiControl.Control | null);
    protected __elementDomains: HTMLElement;
    protected __elementDomainsHeader: HTMLElement;
    /** feedback element */
    protected __elementFeedback: HTMLElement;
    /** Confirm button*/
    protected __cancelButton: TcHmiButton;
    /** add user button*/
    protected __addUserButton: TcHmiButton;
    /**delete user button */
    protected __deleteUserButton: TcHmiButton;
    /** manage user groups button */
    protected __changeUserButton: TcHmiButton;
    /** domain combobox */
    protected __domainCombobox: TcHmiCombobox<string, string[]>;
    /** add user popup */
    protected __addUserPopup: AddUserPopup | undefined;
    /** delete user popup */
    protected __deleteUserPopup: DeleteUserPopup | undefined;
    /** manage user popup */
    protected __changeUserPopup: ChangeUserPopup | undefined;
    /** List of user groups */
    protected __groupList: TcHmi.Dictionary<TcHmi.Server.UserManagement.IGroupDetails> | undefined;
    /**content buttons*/
    protected __elementButtons: HTMLElement;
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
    updateDomains(): void;
    /**
     * display the buttons based on the current api access
     */
    protected __showButtonsBasedOnApiAccess(): void;
    protected __performPromptAction(toPerform: TcHmi.Controls.Helpers.Popup.PromptAction<string>): void;
    /**
     * Callback function on ConfirmButton
     */
    protected __onClose(): void;
    /**
     * Callback function on AddUser
     */
    protected __onAddUser(): void;
    /**
     * Callback function on Edit User Properties
     */
    protected __onDeleteUser(): void;
    /**
     * Callback function on Edit User
     */
    protected __onChangeUser(): void;
    /**
     * Callback function on domain selection changed
     **/
    protected __onDomainSelectionChanged(): void;
    protected __advancedChangedByPopup(advanced: boolean): void;
    protected __onSubPopupClosed(): void;
    /**
     * Set new value for the advanced mode.
     */
    setAdvanced(advanced: boolean): void;
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
    cancelButton: {
        text: TcHmi.Localizable;
        tooltip: TcHmi.Localizable;
    };
    addUserButton: {
        text: TcHmi.Localizable;
        tooltip: TcHmi.Localizable;
    };
    deleteUserButton: {
        text: TcHmi.Localizable;
        tooltip: TcHmi.Localizable;
    };
    changeUserButton: {
        text: TcHmi.Localizable;
        tooltip: TcHmi.Localizable;
    };
    feedbackPromptNothingToConfigure: TcHmi.Localizable;
    addUserLocalizableTexts: AddUserPopup_LocalizableTexts;
    deleteUserLocalizabletexts: DeleteUserPopup_LocalizableTexts;
    changeUserLocalizableTexts: ChangeUserPopup_LocalizableTexts;
}
//# sourceMappingURL=ManageUserPopup.d.ts.map