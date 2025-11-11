import { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { SwitchUserPopup } from './SwitchUserPopup.js';
import { EditUserPopup } from './EditUserPopup.js';
import { ManageUserPopup } from './ManageUserPopup.js';
declare class TcHmiUserManagement extends TcHmiControl.Control {
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
//# sourceMappingURL=TcHmiUserManagement.esm.d.ts.map