import type { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiCombobox } from '../TcHmiCombobox/TcHmiCombobox.esm.js';
import { UserManagementPopup, type LocalizableTexts as UserManagementPopup_LocalizableTexts } from './UserManagementPopup.js';
/**
 * A popup for deleting users.
 */
export declare class DeleteUserPopup extends UserManagementPopup {
    /**
     * Creates a new ChangeGroupsPopup.
     * @param parentControl The control owning the popup.
     */
    constructor(parentControl?: TcHmiControl.Control | null);
    protected __elementUserSelection: HTMLElement;
    protected __elementUserSelectionHeader: HTMLElement;
    /**confirm button*/
    protected __deleteButton: TcHmiButton;
    /**cancel button*/
    protected __cancelButton: TcHmiButton;
    /**user combobox*/
    protected __userCombobox: TcHmiCombobox<string, string[]>;
    /**name of the selected user*/
    protected __selectedUserName: string | null | undefined;
    protected __deleteConfirmationPrompt: TcHmi.Controls.Helpers.TextAndButtonsPrompt<boolean> | null;
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
     * Callback function on deleteButton cancel
     * @param username The name of the user which properties will be changed
     */
    private __deleteUser;
    /**
     * Callback function on deleteButton cancel
     */
    protected __onConfirm(): void;
    /**
     * Set new value for the advanced mode.
     */
    setAdvanced(advanced: boolean): void;
    /**
     * Sets the domain of the usermanagement extentison.
     */
    setDomain(domain: string | undefined): void;
    /**
     * Callback function on deleteButton cancel
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
    deleteButton: {
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
    feedbackPromptHeadlineFailed: TcHmi.Localizable;
    feedbackPromptHeadlineSuccess: TcHmi.Localizable;
    feedbackPromptListUserError: TcHmi.Localizable;
    feedbackPromptUserDeleted: TcHmi.Localizable;
    feedbackPromptUserNotDeleted: TcHmi.Localizable;
    deleteConfirmationPromptHeaderText: TcHmi.Localizable;
    deleteConfirmationPromptContentText: TcHmi.Localizable;
    deleteConfirmationPromptButtonDelete: {
        text: TcHmi.Localizable;
        tooltip: TcHmi.Localizable;
    };
    deleteConfirmationPromptButtonCancel: {
        text: TcHmi.Localizable;
        tooltip: TcHmi.Localizable;
    };
}
//# sourceMappingURL=DeleteUserPopup.d.ts.map