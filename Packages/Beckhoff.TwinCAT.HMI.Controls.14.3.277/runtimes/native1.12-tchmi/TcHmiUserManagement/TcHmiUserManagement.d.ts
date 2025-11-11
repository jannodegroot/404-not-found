



declare class TcHmiUserManagement extends TcHmi.Controls.System.TcHmiControl {
    #private;
    /**
     * Constructor of the control
     * @param element Element from HTML (internal, do not use)
     * @param pcElement precompiled Element (internal, do not use)
     * @param attrs Attributes defined in HTML in a special format (internal, do not use)
     */
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /**HTML-Templete root elements */
    protected __elementTemplateRoot: HTMLElement;
    /**Base html element */
    protected __elementBase: HTMLElement;
    /**dropdown html element */
    protected __elementDropdown: HTMLElement;
    /** registered and destroyed only while topmostlayer interaction */
    protected __resizedEventDestroyEvent: TcHmi.DestroyFunction | null;
    /** registered and destroyed only while topmostlayer interaction */
    protected __movedEventDestroyEvent: TcHmi.DestroyFunction | null;
    /**boolean to show if dropdownbox is open */
    protected __dropdownboxOpen: boolean;
    /**text font size */
    protected __textFontSize: number | undefined;
    /**text font size unit */
    protected __textFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    /**text font size */
    protected __userNameFontSize: number | undefined;
    /**text font size unit */
    protected __userNameFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    /**headline font size */
    protected __headlineFontSize: number | undefined;
    /**headline font size unit */
    protected __headlineFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    /**sub headline font size */
    protected __subHeadlineFontSize: number | undefined;
    /** subheadline font size unit */
    protected __subHeadlineFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    /** drop down font size */
    protected __dropDownFontSize: number | undefined;
    /** drop down font size unit */
    protected __dropDownFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    /**text color of the main element */
    protected __textColor: TcHmi.SolidColor | null | undefined;
    /**logout button */
    protected __logoutButton: HTMLElement | undefined;
    /**logout button */
    protected __switchUserButton: HTMLElement | undefined;
    /**Add User button  */
    protected __editUserButton: HTMLElement | undefined;
    /**Add User button  */
    protected __userManagementButton: HTMLElement | undefined;
    /**touch interactions */
    protected __touches: {
        id: number;
        originalX: number;
        originalY: number;
        element: HTMLElement;
    }[];
    /** display logout button */
    protected __allowLogout: boolean | null | undefined;
    /** display switch user button */
    protected __allowSwitchUser: boolean | null | undefined;
    /**mouse down */
    protected __mouseDown: boolean;
    /** popups are in advanced state */
    protected __advanced: boolean;
    /**Switch User Popup */
    protected __switchUserPopup: SwitchUserPopup | null | undefined;
    /**Edit User Popup */
    protected __editUserPopup: EditUserPopup | null | undefined;
    /**UserManagement Popup */
    protected __manageUserPopup: ManageUserPopup | null | undefined;
    /** Localization */
    protected __localizedElements: Map<HTMLElement, {
        key: string;
        parameters?: any[];
    }>;
    protected __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    protected __showUsermanagementButtons: {
        editUser: boolean;
        userManagement: boolean;
    };
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /**
     * Is called by the system after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called by the system after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    protected __onDocumentClick(event: MouseEvent): void;
    /**
     * Function to adjust dropdown position on resize or move
     */
    protected __resizeDropDownBox(): void;
    /**
     * function to build or destroy Popup
     * @param valueNew? Toogles the dropdown
     */
    protected __setDropDownboxOpen(valueNew?: boolean): void;
    /**
     * Updates the displayed entries of the drop down menu
     **/
    updateDropdown(): void;
    /**
     * Get Api access to each domain and break them down to the usermanagement buttons
     **/
    protected __getApiAccessForDomains(): void;
    /**
     * Populates the dropdown list with elements specified in __data
     */
    protected __fillDropdown(): void;
    /**
     * function to create a drop down button.
     * @param localizationKey The localization key of the created button.
     * @param clickEventCallback The event callback for the click event of the button.
     */
    protected __createDropDownButton(clickEventCallback: (event: MouseEvent) => void, localizationKey: string): HTMLDivElement;
    /**
     * function to remove a drop down buttons eventListeners and localized elements.
     * @param buttonElement The element to remove.
     * @param clickEventHandler The event handler for the click event of the button.
     */
    protected __removeDropDownbutton(buttonElement: HTMLElement | undefined, clickEventHandler: (this: void, event: MouseEvent) => void): void;
    /**
     * function to create the switch user popup
     */
    showSwitchUserPopup(): void;
    /**
     * function to create the edit user popup
     */
    showEditUserPopup(): void;
    /**
     * function to create the Usermanagement Popup
     */
    showManageUserPopup(): void;
    /**
     * Refresh resources for existing popups
     */
    protected __refreshPopupResources(): void;
    /**
     * Event Callbackfunction ...
     */
    protected __onExpandDropdown(_event: TcHmi.EventProvider.Event): void;
    /**
     * Event Callbackfunction Mousedown
     */
    protected __onExpandDropdownMouseDown(_event: TcHmi.EventProvider.Event): void;
    /**
     * Event Callbackfunction Mouseout
     */
    protected __onExpandDropdownMouseLeave(_event: TcHmi.EventProvider.Event): void;
    /**
     * Event Callbackfunction Mousedown
     */
    protected __onExpandDropdownMouseEnter(_event: TcHmi.EventProvider.Event): void;
    /**
     * Event Callbackfunction called onMouseUp of document
     */
    protected __onMouseUp(_event: MouseEvent): void;
    /**
     * Event Callbackfunction called onClick of LogoutButton
     */
    protected __onLogout(_event: MouseEvent): void;
    /**
     * Event Callbackfunction called onClick of SwitchUserButton
     */
    protected __onSwitchUser(_event: MouseEvent): void;
    /**
     * Event Callbackfunction called onClick of EditUserButton
     */
    protected __onEditUser(_event: MouseEvent): void;
    /**
     * Event Callbackfunction called onClick of UserManagementButton
     */
    protected __onUserManagement(_event: MouseEvent): void;
    /**
     * Is raised if mouse enter to the combobox element.
     */
    protected __onMouseEnter(event: MouseEvent): void;
    /**
     * Is raised if mouse leave the combobox element.
     */
    protected __onMouseLeave(event: MouseEvent): void;
    /**
     * Returns an event handler for the touchstart event.
     */
    protected __onTouchstart(event: TouchEvent): void;
    /**
     * Is raised if user data changed.
     */
    protected __onUserDataChanged(): void;
    /**
     * Adds or removes the hover class to the given combobox item.
     * @param element The element representing the combobox item.
     * @param hover Whether to add or remove the hover class.
     */
    protected __hoverComboboxItem(element: HTMLElement, hover: boolean): void;
    /**
     * DEPRECATED Popup elements are created by the popup itself.
     * get Notification Template
     */
    __getNotificationElement(): null;
    /**
     * DEPRECATED Popup elements are created by the popup itself.
     * get Warning Template
     */
    __getWarningElement(): null;
    /**
     * DEPRECATED Popup elements are created by the popup itself.
     * get AddUser Template
     */
    __getAddUserElement(): null;
    /**
     * DEPRECATED Popup elements are created by the popup itself.
     * get AddUser Template
     */
    __getDeleteUserElement(): null;
    /**
     * DEPRECATED Popup elements are created by the popup itself.
     * get AddUser Template
     */
    __getGroupmanagementElement(): null;
    protected __advancedChangedByPopup(advanced: boolean): void;
    /**
     *  Get advanced state
     */
    getAdvancedState(): boolean;
    protected __onPopupClosed(): void;
    /**
     *  Set advanced state
     */
    setAdvancedState(valueNew: boolean): void;
    /**
     * Add an element to be localized.
     * @param element The element.
     * @param key The localization key.
     * @param parameters Optional parameters to pass to tchmi_format_string.
     */
    private __addLocalizedElement;
    /**
     * Remove a localized element.
     * @param element The element to remove.
     */
    private __removeLocalizedElement;
    getLocalization(): import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Locale.js").ControlLocalization;
    /**
     * Expands the given localization key to a full symbol expression.
     * @param key The key to expand.
     */
    protected __expandLocalizationSymbol(key: string): string;
    /********************************* ATTRIBUTE GETTER & SETTER *********************************************/
    /**
     * Sets the font size and calls the associated process function (processTextFontSize).
     * @param valueNew The new value for textFontSize.
     */
    setTextFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of textFontSize.
     * @returns The current value of textFontSize.
     */
    getTextFontSize(): number | undefined;
    /**
     * Processes the current TextFontSize attribute value.
     */
    protected __processTextFontSize(): void;
    /**
     * Sets the font size unit and calls the associated process function (processTextFontSizeUnit).
     * @param valueNew The new value for textFontSizeUnit.
     */
    setTextFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of textFontSizeUnit.
     * @returns The current value of textFontSizeUnit.
     */
    getTextFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
    /**
     * Processes the current TextFontSize attribute value.
     */
    protected __processTextFontSizeUnit(): void;
    /**
     * Sets the font size and calls the associated process function (processHeadlineFontSize).
     * @param valueNew The new value for headlineFontSize.
     */
    setHeadlineFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of headlineFontSize.
     * @returns The current value of headlineFontSize.
     */
    getHeadlineFontSize(): number | undefined;
    /**
     * Processes the current headlineFontSize attribute value.
     */
    protected __processHeadlineFontSize(): void;
    /**
     * Sets the font size unit and calls the associated process function (processHeadlineFontSizeUnit).
     * @param valueNew The new value for headlineFontSizeUnit.
     */
    setHeadlineFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of headlineFontSizeUnit.
     * @returns The current value of headlineFontSizeUnit.
     */
    getHeadlineFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
    /**
     * Processes the current headlineFontSizeUnit attribute value.
     */
    protected __processHeadlineFontSizeUnit(): void;
    /**
     * Sets the font size and calls the associated process function (procesSubHeadlineFontSize).
     * @param valueNew The new value for subHeadlineFontSize.
     */
    setSubHeadlineFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of subHeadlineFontSize.
     * @returns The current value of subHeadlineFontSize.
     */
    getSubHeadlineFontSize(): number | undefined;
    /**
     * Processes the current subHeadlineFontSize attribute value.
     */
    protected __procesSubHeadlineFontSize(): void;
    /**
     * Sets the font size unit and calls the associated process function (processSubHeadlineFontSizeUnit).
     * @param valueNew The new value for subHeadlineFontSizeUnit.
     */
    setSubHeadlineFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of subHeadlineFontSizeUnit.
     * @returns The current value of subHeadlineFontSizeUnit.
     */
    getSubHeadlineFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
    /**
     * Processes the current subHeadlineFontSizeUnit attribute value.
     */
    protected __processSubHeadlineFontSizeUnit(): void;
    /**
     * Sets the font size and calls the associated process function (processDropDownFontSize).
     * @param valueNew The new value for DropDownFontSize.
     */
    setDropDownFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of DropDownFontSize.
     * @returns The current value of DropDownFontSize.
     */
    getDropDownFontSize(): number | undefined;
    /**
     * Processes the current DropDownFontSize attribute value.
     */
    protected __processDropDownFontSize(): void;
    /**
     * Sets the font size unit and calls the associated process function (processDropDownFontSizeUnit).
     * @param valueNew The new value for DropDownFontSizeUnit.
     */
    setDropDownFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of DropDownFontSizeUnit.
     * @returns The current value of DropDownFontSizeUnit.
     */
    getDropDownFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
    /**
     * Processes the current DropDownFontSizeUnit attribute value.
     */
    protected __processDropDownFontSizeUnit(): void;
    /**
     * Sets the font size and calls the associated process function (processUserNameFontSize).
     * @param valueNew The new value for userNameFontSize.
     */
    setUserNameFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of userNameFontSize.
     * @returns The current value of userNameFontSize.
     */
    getUserNameFontSize(): number | undefined;
    /**
     * Processes the current userNameFontSize attribute value.
     */
    protected __processUserNameFontSize(): void;
    /**
     * Sets the font size unit and calls the associated process function (processUserNameFontSizeUnit).
     * @param valueNew The new value for userNameFontSizeUnit.
     */
    setUserNameFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of userNameFontSizeUnit.
     * @returns The current value of userNameFontSizeUnit.
     */
    getUserNameFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
    /**
     * Processes the current userNameFontSizeUnit attribute value.
     */
    protected __processUserNameFontSizeUnit(): void;
    /**
     * Sets the text color and calls the associated process function (processTextColor).
     * @param valueNew The new value for textColor.
     */
    setTextColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the textColor object resolver.
     */
    protected __onResolverForTextColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of textColor.
     * @returns The current value of textColor.
     */
    getTextColor(): TcHmi.SolidColor | null | undefined;
    /**
     * Processes the current textColor attribute value.
     */
    protected __processTextColor(): void;
    /**
     * Sets the value of allowLogout
     * @param valueNew The new value for allowLogout
     */
    setAllowLogout(valueNew: boolean | null): void;
    /**
     * Gets the value of allowLogout
     * @returns The current value of allowLogout
     */
    getAllowLogout(): boolean | null | undefined;
    /**
     * Processes allowLogout
     */
    protected __processAllowLogout(): void;
    /**
     * Sets the value of allowSwitchUser
     * @param valueNew The new value for allowSwitchUser
     */
    setAllowSwitchUser(valueNew: boolean | null): void;
    /**
     * Gets the value of allowSwitchUser
     * @returns The current value of allowSwitchUser
     */
    getAllowSwitchUser(): boolean | null | undefined;
    /**
     * Processes allowSwitchUser
     */
    protected __processAllowSwitchUser(): void;
}
export { TcHmiUserManagement as Control };
declare const _TcHmiUserManagement: typeof TcHmiUserManagement;
type tTcHmiUserManagement = TcHmiUserManagement;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiUserManagement: typeof _TcHmiUserManagement;
        type TcHmiUserManagement = tTcHmiUserManagement;
    }
}


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
