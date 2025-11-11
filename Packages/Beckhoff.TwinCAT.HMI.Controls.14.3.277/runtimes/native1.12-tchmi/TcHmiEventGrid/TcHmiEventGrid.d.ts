






declare class TcHmiEventGrid extends TcHmi.Controls.System.TcHmiControl {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** member variables */
    /** Reference to the root dom element of the current control template as jquery object. */
    protected __elementTemplateRoot: JQuery;
    protected __elementGridContainer: JQuery;
    protected __elementMenuBar: JQuery;
    protected __elementTypeToggles: JQuery;
    protected __elementSeverityToggles: JQuery;
    protected __elementOptions: JQuery;
    protected __elementMessageActions: JQuery;
    protected __elementFilterPopup: JQuery;
    protected __elementColumnsPopup: JQuery;
    protected __elementDetailsPopup: JQuery;
    protected __elementConfirmAllPopup: JQuery;
    protected __filter: TcHmi.Filter | null | undefined;
    protected __internalFilter: TcHmi.Filter;
    protected __noPayloadsFilter: import("Beckhoff.TwinCAT.HMI.Framework/dist/API/FilterInstance.js").FilterInstance<any>;
    protected __serverInterval: number | null | undefined;
    protected __columns: Column[] | undefined;
    protected __internalColumns: Column[];
    protected __allowDetailsPopup: boolean | undefined;
    protected __showMenuBar: boolean | undefined;
    protected __menuBarPosition: 'Top' | 'Bottom' | 'Left' | 'Right' | undefined;
    protected __buttonFontFamily: string | undefined;
    protected __buttonFontSize: number | undefined;
    protected __buttonFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    protected __buttonFontStyle: TcHmi.FontStyle | undefined;
    protected __buttonFontWeight: TcHmi.FontWeight | undefined;
    protected __buttonHeight: number | undefined;
    protected __storage: TcHmi.LocalStorage<{
        filter: TcHmi.Filter;
        columns: Column[];
    }, {
        filter: ReturnType<TcHmiEventGrid['getFilter']>;
        columns: ReturnType<TcHmiEventGrid['getColumns']>;
    }> | undefined;
    protected __datagrid: TcHmiDatagrid.Control;
    protected __sortingInitialized: boolean;
    protected __headerFontFamilyInitialized: boolean;
    protected __headerFontSizeInitialized: boolean;
    protected __headerFontSizeUnitInitialized: boolean;
    protected __headerFontStyleInitialized: boolean;
    protected __headerFontWeightInitialized: boolean;
    protected __gridFontFamilyInitialized: boolean;
    protected __gridFontSizeInitialized: boolean;
    protected __gridFontSizeUnitInitialized: boolean;
    protected __gridFontStyleInitialized: boolean;
    protected __gridFontWeightInitialized: boolean;
    protected __headerHeightInitialized: boolean;
    protected __headerHeightUnitInitialized: boolean;
    protected __rowHeightInitialized: boolean;
    /**  Internal reference to the attribute "data-tchmi-ignore-escape-sequences" */
    protected __ignoreEscapeSequences: boolean | undefined;
    protected __typeToggles: Map<import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.Events.js").Type, TcHmiToggleButton | undefined>;
    protected __severityToggles: Map<import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.Events.js").Severity, TcHmiToggleButton | undefined>;
    protected __menuBarButtons: Map<string, TcHmiButton | undefined>;
    protected __buttonTooltips: {
        message: string;
        alarm: string;
        verbose: string;
        info: string;
        warning: string;
        error: string;
        critical: string;
        filter: string;
        columns: string;
        export: string;
        confirm: string;
        confirmAll: string;
    };
    protected __canConfirm: boolean;
    protected __filterPrompt: TcHmi.Controls.Helpers.FilterPrompt | null;
    protected __columnsPopup: ColumnsPopup | null;
    protected __detailsPopup: DetailsPopup | null;
    protected __confirmAllPopup: ConfirmAllPopup | null;
    protected __typesToShow: Map<import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.Events.js").Type, boolean>;
    protected __severitiesToShow: Map<import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.Events.js").Severity, boolean>;
    protected __themedIcons: {
        types: Map<import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.Events.js").Type, Icon | null>;
        severities: Map<import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.Events.js").Severity, Icon | null>;
    };
    protected __localizedElements: Map<HTMLElement, {
        key: string;
        parameters?: any[];
    }>;
    protected __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    protected __subscriptionId: number | null;
    protected __availableColumns: TcHmi.Dictionary<TcHmiDatagrid.Column>;
    protected __doubletapStartTime: number;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * If raised, all attributes have been set to it's default or dom values.
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
    /**
     * Add an element to be localized.
     * @param element The element.
     * @param key The localization key.
     * @param parameters Optional parameters to pass to tchmi_format_string.
     */
    __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
    /**
     * Remove a localized element.
     * @param element The element to remove.
     */
    __removeLocalizedElement(element: HTMLElement): void;
    /**
     * Handles the onResized event of the control.
     */
    protected __onResized(): void;
    /**
     * Handles the onThemeDataChanged event.
     */
    protected __onThemeDataChanged(): void;
    /**
     * Creates an event handler for toggle state changed events of type toggle buttons.
     * @param toggleButton The toggle button for which to create an event handler.
     * @param type The type this event handler should control.
     */
    protected __getTypeToggleStateChangedHandler(toggleButton: TcHmiToggleButton, type: TcHmi.Server.Events.Type): () => void;
    /**
     * Creates an event handler for toggle state changed events of severity toggle buttons.
     * @param toggleButton The toggle button for which to create an event handler.
     * @param severity The severity this event handler should control.
     */
    protected __getSeverityToggleStateChangedHandler(toggleButton: TcHmiToggleButton, severity: TcHmi.Server.Events.Severity): () => void;
    /**
     * Handles the selectedItemChanged event of the datagrid.
     */
    protected __onSelectedItemChanged(): void;
    /**
     * Handles the onPropertyChanged event of the datagrid.
     */
    private __onDataGridPropertyChanged;
    /**
     * Handles the onPressedEvent of the filter button.
     */
    protected __onFilterPressed(): void;
    /**
     * Handles the onPressedEvent of the columns button.
     */
    protected __onColumnsPressed(): void;
    /**
     * Handles the onPressedEvent of the export button.
     */
    protected __onExportPressed(): void;
    /**
     * Handles the onPressed event of the confirm button.
     */
    protected __onConfirmPressed(): void;
    /**
     * Handles the onPressed event of the confirmAll button.
     */
    protected __onConfirmAllPressed(): void;
    /**
     * Handles double clicks on table rows.
     */
    protected __onDoubleclick(event: MouseEvent): void;
    /**
     * Handles touchstart events on table rows.
     */
    protected __onTouchStart(event: TouchEvent): void;
    /**
     * Handles scroll events.
     */
    protected __onScroll(event: Event): void;
    /**
     * Shows the details popup
     */
    protected __showDetails(): void;
    /**
     * Processes the currently seleceted datagrid item.
     */
    protected __processSelectedItem(): void;
    /**
     * Updates the subscription getting metadata for the eventgrid.
     * @param unsubscribeOnly Should be set to true when this method is called from __detach. Prevents a new subscription being created after the existing subscription was unsubscribed.
     */
    protected __updateSubscription(unsubscribeOnly?: boolean): void;
    /**
     * Gets a handler that checks the incomming response for errors and executes the specified functions for each command.
     * @param commands The commands that are expected to be present in the response, and their respective handlers.
     */
    protected __getServerResponseHandler(commands: Map<TcHmi.Server.ICommand, (response: TcHmi.Server.ICommand, data: TcHmi.Server.IResultObject) => void>): (data: TcHmi.Server.IResultObject) => void;
    /**
     * Generates the commands and handlers for the numbers in the toggle buttons.
     */
    protected __getToggleButtonCommands(): Map<TcHmi.Server.ICommand<any, any>, (command: TcHmi.Server.ICommand, data: TcHmi.Server.IResultObject) => void>;
    /**
     * Generates the command and handler for the number of confirmable alarms.
     */
    protected __getConfirmAllCommand(): readonly [TcHmi.Server.ICommand<any, any>, (command: TcHmi.Server.ICommand, data: TcHmi.Server.IResultObject) => void];
    /**
     * Gets the filter for all confirmable alarms.
     */
    protected __getConfirmAllFilter(): TcHmi.Filter;
    /**
     * Generates the command and handler for the symbol access level to ConfirmAlarm
     */
    protected __getCanConfirmCommand(): readonly [TcHmi.Server.ICommand<"ConfirmAlarm", import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.js").ACCESS>, (cmd: TcHmi.Server.ICommand<"ConfirmAlarm", import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.js").ACCESS>, data: TcHmi.Server.IResultObject) => void];
    /**
     * Gets the themed icon values from the ThemeManager.
     */
    protected __getThemedIcons(): {
        types: Map<import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.Events.js").Type, Icon | null>;
        severities: Map<import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.Events.js").Severity, Icon | null>;
    };
    /**
     * Sets the columns value and calls the associated process function.
     * @param valueNew The new value for columns.
     */
    setColumns(valueNew: Column[] | null): void;
    /**
     * The watch callback for the columns object resolver.
     */
    protected __onResolverForColumnsWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<Column[]>): void;
    /**
     * Returns the current value of columns.
     */
    getColumns(): Column[] | undefined;
    /**
     * Processes the current columns value.
     */
    protected __processColumns(): void;
    /**
     * Updates the columns of the datagrid.
     * @param columns The names of the column definitions to set.
     */
    protected __updateColumns(columns: Column[], forceRaiseEvent?: boolean): void;
    /**
     * Sets the filter value and calls the associated process function.
     * @param valueNew The new value for filter.
     */
    setFilter(valueNew: TcHmi.Filter | null): void;
    /**
     * The watch callback for the filter object resolver.
     */
    protected __onResolverForFilterWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.Filter>): void;
    /**
     * Returns the current value of filter.
     */
    getFilter(): TcHmi.Filter | null | undefined;
    /**
     * Processes the current filter value.
     */
    protected __processFilter(): void;
    /**
     * Updates the internal filter.
     * @param filter The filter to set.
     */
    protected __updateFilter(filter: TcHmi.Filter, forceRaiseEvent?: boolean): void;
    /**
     * Updates the filter of the datagrid.
     */
    protected __updateDatagridFilter(): void;
    /**
     * Sets the sorting value.
     * @param valueNew The new value for sorting
     */
    setSorting(valueNew: TcHmi.SortingInfo[] | null): void;
    /**
     * Returns the current value of sorting.
     */
    getSorting(): TcHmi.SortingInfo[] | undefined;
    /**
     * Sets the serverInterval value and calls the associated process function.
     * @param valueNew The new value for serverInterval.
     */
    setServerInterval(valueNew: number | null): void;
    /**
     * Returns the current value of serverInterval.
     */
    getServerInterval(): number | null | undefined;
    /**
     * Processes the current serverInterval value.
     */
    protected __processServerInterval(): void;
    /**
     * Sets the headerFontFamily value.
     * @param valueNew The new value for headerFontFamily
     */
    setHeaderFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /**
     * Returns the current value of headerFontFamily.
     */
    getHeaderFontFamily(): string | null | undefined;
    /**
     * Sets the headerFontSize value.
     * @param valueNew The new value for headerFontSize
     */
    setHeaderFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of headerFontSize.
     */
    getHeaderFontSize(): number | undefined;
    /**
     * Sets the headerFontSizeUnit value.
     * @param valueNew The new value for headerFontSizeUnit
     */
    setHeaderFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of headerFontSizeUnit.
     */
    getHeaderFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
    /**
     * Sets the headerFontStyle value.
     * @param valueNew The new value for headerFontStyle
     */
    setHeaderFontStyle(valueNew: TcHmi.FontStyle | null): void;
    /**
     * Returns the current value of headerFontStyle.
     */
    getHeaderFontStyle(): TcHmi.FontStyle | undefined;
    /**
     * Sets the headerFontWeight value.
     * @param valueNew The new value for headerFontWeight
     */
    setHeaderFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /**
     * Returns the current value of headerFontWeight.
     */
    getHeaderFontWeight(): TcHmi.FontWeight | undefined;
    /**
     * Sets the gridFontFamily value.
     * @param valueNew The new value for gridFontFamily
     */
    setGridFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /**
     * Returns the current value of gridFontFamily.
     */
    getGridFontFamily(): string | null | undefined;
    /**
     * Sets the gridFontSize value.
     * @param valueNew The new value for gridFontSize
     */
    setGridFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of gridFontSize.
     */
    getGridFontSize(): number | undefined;
    /**
     * Sets the gridFontSizeUnit value.
     * @param valueNew The new value for gridFontSizeUnit
     */
    setGridFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of gridFontSizeUnit.
     */
    getGridFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
    /**
     * Sets the gridFontStyle value.
     * @param valueNew The new value for gridFontStyle
     */
    setGridFontStyle(valueNew: TcHmi.FontStyle | null): void;
    /**
     * Returns the current value of gridFontStyle.
     */
    getGridFontStyle(): TcHmi.FontStyle | undefined;
    /**
     * Sets the gridFontWeight value.
     * @param valueNew The new value for gridFontWeight
     */
    setGridFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /**
     * Returns the current value of gridFontWeight.
     */
    getGridFontWeight(): TcHmi.FontWeight | undefined;
    /**
     * Sets the headerHeight value.
     * @param valueNew The new value for headerHeight
     */
    setHeaderHeight(valueNew: number | null): void;
    /**
     * Returns the current value of headerHeight.
     */
    getHeaderHeight(): number | undefined;
    /**
     * Sets the headerHeightUnit value.
     * @param valueNew The new value for headerHeightUnit
     */
    setHeaderHeightUnit(valueNew: TcHmi.DimensionUnit | null): void;
    /**
     * Returns the current value of headerHeightUnit.
     */
    getHeaderHeightUnit(): TcHmi.DimensionUnit | undefined;
    /**
     * Sets the rowHeight value.
     * @param valueNew The new value for rowHeight
     */
    setRowHeight(valueNew: number | null): void;
    /**
     * Returns the current value of rowHeight.
     */
    getRowHeight(): number | undefined;
    /**
     * Returns the current value of rowHeightUnit.
     */
    getRowHeightUnit(): string;
    /**
     * Sets the value of the member variable IgnoreEscapeSequences.
     * @param valueNew The new value for IgnoreEscapeSequences
     */
    setIgnoreEscapeSequences(valueNew: boolean | null | undefined): void;
    /**
     * Returns the current value of IgnoreEscapeSequences.
     * @returns The current value of IgnoreEscapeSequences.
     */
    getIgnoreEscapeSequences(): boolean | undefined;
    /**
     * Sets the allowDetailsPopup value and calls the associated process function.
     * @param valueNew The new value for allowDetailsPopup.
     */
    setAllowDetailsPopup(valueNew: boolean | null): void;
    /**
     * Returns the current value of allowDetailsPopup.
     */
    getAllowDetailsPopup(): boolean | undefined;
    /**
     * Processes the current allowDetailsPopup value.
     */
    protected __processAllowDetailsPopup(): void;
    /**
     * Sets the showMenuBar value and calls the associated process function.
     * @param valueNew The new value for showMenuBar.
     */
    setShowMenuBar(valueNew: boolean | null): void;
    /**
     * Returns the current value of showMenuBar.
     */
    getShowMenuBar(): boolean | undefined;
    /**
     * Processes the current showMenuBar value.
     */
    protected __processShowMenuBar(): void;
    /**
     * Sets the menuBarPosition value and calls the associated process function.
     * @param valueNew The new value for menuBarPosition.
     */
    setMenuBarPosition(valueNew: 'Top' | 'Bottom' | 'Left' | 'Right' | null): void;
    /**
     * Returns the current value of menuBarPosition.
     */
    getMenuBarPosition(): "Left" | "Right" | "Top" | "Bottom" | undefined;
    /**
     * Processes the current menuBarPosition value.
     */
    protected __processMenuBarPosition(): void;
    /**
     * Sets the buttonFontFamily value and calls the associated process function.
     * @param valueNew The new value for buttonFontFamily.
     */
    setButtonFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /**
     * Returns the current value of buttonFontFamily.
     */
    getButtonFontFamily(): string | undefined;
    /**
     * Processes the current buttonFontFamily value.
     */
    protected __processButtonFontFamily(): void;
    /**
     * Sets the buttonFontSize value and calls the associated process function.
     * @param valueNew The new value for buttonFontSize.
     */
    setButtonFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of buttonFontSize.
     */
    getButtonFontSize(): number | undefined;
    /**
     * Processes the current buttonFontSize value.
     */
    protected __processButtonFontSize(): void;
    /**
     * Sets the buttonFontSizeUnit value and calls the associated process function.
     * @param valueNew The new value for buttonFontSizeUnit.
     */
    setButtonFontSizeUnit(valueNew: TcHmi.DimensionUnit | null): void;
    /**
     * Returns the current value of buttonFontSizeUnit.
     */
    getButtonFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
    /**
     * Processes the current buttonFontSizeUnit value.
     */
    protected __processButtonFontSizeUnit(): void;
    /**
     * Sets the buttonFontStyle value and calls the associated process function.
     * @param valueNew The new value for buttonFontStyle.
     */
    setButtonFontStyle(valueNew: TcHmi.FontStyle | null): void;
    /**
     * Returns the current value of buttonFontStyle.
     */
    getButtonFontStyle(): TcHmi.FontStyle | undefined;
    /**
     * Processes the current buttonFontStyle value.
     */
    protected __processButtonFontStyle(): void;
    /**
     * Sets the buttonFontWeight value and calls the associated process function.
     * @param valueNew The new value for buttonFontWeight.
     */
    setButtonFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /**
     * Returns the current value of buttonFontWeight.
     */
    getButtonFontWeight(): TcHmi.FontWeight | undefined;
    /**
     * Processes the current buttonFontWeight value.
     */
    protected __processButtonFontWeight(): void;
    /**
     * Sets the buttonHeight value and calls the associated process function.
     * @param valueNew The new value for buttonHeight.
     */
    setButtonHeight(valueNew: number | null): void;
    /**
     * Returns the current value of buttonHeight.
     */
    getButtonHeight(): number | undefined;
    /**
     * Processes the current buttonHeight value.
     */
    protected __processButtonHeight(): void;
    /**
     * Returns the current value of buttonHeightUnit.
     */
    getButtonHeightUnit(): string;
    /**
     * Flexbox has a bug in all major browsers, where the width of a flexbox column does not grow when its child elements wrap. This method fixes that by setting min-width explicitly.
     */
    protected __fixVerticalMenuBarWidth(): void;
    /**
     * Returns the currently selected event.
     */
    getSelectedEvent(): TcHmi.Server.Events.Event<any, TcHmi.Dictionary<any>> | null;
    /**
     * Confirms the selected alarm.
     * @param ctx Context object which provides context specific data and functions.
     */
    confirmSelectedAlarm(ctx: TcHmi.SelectableRequired<TcHmi.Context, 'success' | 'error'>): void;
    /**
     * Confirm all alarms
     * @param ctx Context object which provides context specific data and functions.
     */
    confirmAllAlarms(ctx: TcHmi.SelectableRequired<TcHmi.Context, 'success' | 'error'>): void;
    /**
     * Processes the current enabled status.
     */
    __processIsEnabled(): void;
    /**
     * Processes the current access config.
     */
    __processAccessConfig(): void;
    /**
     * Hides all popups.
     */
    protected __hideAllPopups(): void;
    /**
     * Sets the internal canConfirm variable. This should not be called from outside the control but needs to be public so the confirmAll popup can call it.
     * @param value Whether the current user has the necessary rights to confirm alarms.
     */
    protected __setCanConfirm(value: boolean): void;
    /**
     * Gets the internal canConfirm variable.
     */
    __getCanConfirm(): boolean;
}
export interface Column {
    columnName: string;
    label?: string;
    width?: number;
    widthUnit?: TcHmi.DimensionUnit | 'factor';
    sortable?: boolean;
    format?: TcHmi.IFunction;
}
export interface Icon {
    imagePath: string;
    width: number;
    height: number;
}
export { TcHmiEventGrid as Control };
declare const _TcHmiEventGrid: typeof TcHmiEventGrid;
type tTcHmiEventGrid = TcHmiEventGrid;
type tColumn = Column;
type tIcon = Icon;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiEventGrid: typeof _TcHmiEventGrid;
        type TcHmiEventGrid = tTcHmiEventGrid;
        namespace TcHmiEventGrid {
            type Column = tColumn;
            type Icon = tIcon;
        }
    }
}


/**
 * A basic popup. No controls are instatiated
 */
export declare abstract class Popup {
    /**
     * Creates a new Popup.
     * @param element The HTML element that hosts the popup.
     * @param name The name of the popup. Used for control instantiation.
     * @param control The control owning the popup.
     */
    constructor(element: HTMLElement, name: string, control: TcHmiEventGrid);
    protected __name: string;
    protected __parentControl: TcHmiEventGrid;
    protected __element: HTMLElement;
    protected __elementContent: HTMLDivElement;
    protected __elementFooter: HTMLDivElement;
    protected __eventDestroyers: TcHmi.DestroyFunction[];
    protected __isShowing: boolean;
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup.
     */
    hide(): void;
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    isShowing(): boolean;
}




/**
 * A basic settings popup. This popup contains an OK and a Cancel button.
 */
export declare abstract class SettingsPopup<S> extends Popup {
    /**
     * Creates a new SettingsPopup.
     * @param element The HTML element that hosts the popup.
     * @param name The name of the popup. Used for control instantiation.
     * @param control The control owning the popup.
     */
    constructor(element: HTMLElement, name: string, control: TcHmiEventGrid);
    protected __resetButton: TcHmiButton;
    protected __resetHandlers: (() => void)[];
    protected __okHandlers: (() => void | boolean)[];
    protected __cancelHandlers: (() => void | boolean)[];
    protected abstract __settings: S;
    protected __updateRequired: boolean;
    /**
     * Handles the pressed event of a button.
     */
    protected __onButtonPressed(handlers: (() => void | boolean)[], hide: boolean): void;
    /**
     * Registers a handler function for presses of the Reset button. Returns a function to unregister the handler.
     * @param handler The handler to register.
     */
    registerResetButtonHandler(handler: () => void): () => void;
    /**
     * Registers a handler function for presses of the OK button. Returns a function to unregister the handler.
     * @param handler The handler to register. If one or more of the registered handlers returns false, the popup will not be hidden.
     */
    registerOkButtonHandler(handler: () => void | boolean): () => void;
    /**
     * Registers a handler function for presses of the Cancel button. Returns a function to unregister the handler.
     * @param handler The handler to register. If one or more of the registered handlers returns false, the popup will not be hidden.
     */
    registerCancelButtonHandler(handler: () => void | boolean): () => void;
    /**
     * Updates the settings this popup should modify.
     * @param settings The new settings.
     * @param resetable Whether the reset button should be enabled or disabled.
     */
    update(settings: S, resetable?: boolean): void;
    /**
     * Gets the current settings.
     */
    getSettings(): S;
    /**
     * Checks if an update of the settings is required.
     */
    requiresUpdate(): boolean;
}







/**
 * A popup for configuring the columns of the event grid.
 */
export declare class ColumnsPopup extends SettingsPopup<Column[]> {
    /**
     * Creates a new ColumnsPopup.
     * @param element The HTML element that hosts the popup.
     * @param control The control owning the popup.
     */
    constructor(element: HTMLElement, control: TcHmiEventGrid);
    protected __settings: Column[];
    protected __elementAvailableColumns: HTMLElement;
    protected __elementSelectedColumns: HTMLElement;
    protected __elementColumnName: HTMLElement;
    protected __elementColumnLabel: HTMLElement;
    protected __upButton: TcHmiButton;
    protected __downButton: TcHmiButton;
    protected __widthTextbox: TcHmiTextbox;
    protected __widthUnitCombobox: TcHmiCombobox.Control<TcHmi.DimensionUnit | 'factor', TcHmiCombobox.ListItemGeneric<TcHmi.DimensionUnit | 'factor'>[]>;
    protected __nameTextbox: TcHmiTextbox;
    protected __labelTextbox: TcHmiTextbox;
    protected __sortableCheckbox: TcHmiCheckbox;
    protected __availableColumns: TcHmi.List<{
        name: string;
        element: HTMLElement;
    }>;
    protected __selectedColumns: TcHmi.List<{
        name: string;
        element: HTMLElement;
    }>;
    protected __columns: TcHmi.Dictionary<{
        label: string;
        order: number;
        allowSortable: boolean;
    }>;
    protected __activeElement: HTMLElement | null;
    protected __activeColumn: Column | null;
    /**
     * Destroys the popup and all its controls. Also removes all DOM event handlers
     */
    destroy(): void;
    /**
     * Updates the column configuration.
     * @param columns The current column configuration.
     * @param resetable Whether the reset button should be enabled or disabled.
     */
    update(columns: Column[], resetable: boolean): void;
    /**
     * Handles clicks inside the availableColumns element.
     * @param event The click event.
     */
    protected __onAvailableColumnClick(event: MouseEvent): void;
    /**
     * Handles clicks inside the selectedColumns element.
     * @param event The click event.
     */
    protected __onSelectedColumnClick(event: MouseEvent): void;
    /**
     * Handles the pressed event of the up button.
     */
    protected __onUpPressed(): void;
    /**
     * Handles the pressed event of the down button.
     */
    protected __onDownPressed(): void;
    /**
     * Handles the textChanged event of the width textbox
     */
    protected __onWidthChanged(): void;
    /**
     * Handles the selectionChanged event of the width unit combobox
     */
    protected __onWidthUnitChanged(): void;
    /**
     * Handles the textChanged event of the name textbox
     */
    protected __onNameChanged(): void;
    /**
     * Handles the textChanged event of the label textbox
     */
    protected __onLabelChanged(): void;
    /**
     * Handles the toggleStateChanged event of the sortable checkbox
     */
    protected __onSortableChanged(): void;
    /**
     * Marks a column element as active.
     * @param element The element to activate.
     */
    protected __activateColumn(element: HTMLElement | null): void;
    /**
     * Updates the select, deselect, up, down buttons according to the currently active column.
     */
    protected __updateButtons(): void;
    /**
     * Updates the column properties controls according to the currently active column.
     */
    protected __updateColumnProperties(): void;
    /**
     * Creates an element representing a column.
     * @param label The label of the column.
     */
    protected __createColumnDiv(label: string, localize?: boolean): HTMLDivElement;
}




/**
 * A popup showing details of events. Contains a close button.
 */
export declare class DetailsPopup extends Popup {
    #private;
    /**
     * Creates a new DetailsPopup.
     * @param element The HTML element that hosts the popup.
     * @param control The control owning the popup.
     */
    constructor(element: HTMLElement, control: TcHmiEventGrid);
    protected __event: TcHmi.Server.Events.Event | null;
    protected __confirmButton: TcHmiButton;
    protected __localizedElements: HTMLElement[];
    protected __destroyersToCallOnHide: TcHmi.DestroyFunction[];
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup.
     */
    hide(): void;
    /**
     * Destroys the popup and all its controls. Also removes all DOM event handlers
     */
    destroy(): void;
    /**
     * Updates the content of the popup.
     * @param event The event whose details should be shown.
     */
    update(event: TcHmi.Server.Events.Event): void;
    /**
     * Returns the currently shown event.
     */
    getEvent(): TcHmi.Server.Events.Event<any, TcHmi.Dictionary<any>> | null;
    __setCanConfirm(value: boolean): void;
}





/**
 * A popup asking for confirmation berfore confirming all alarms. Contains a yes and a no button.
 */
export declare class ConfirmAllPopup extends Popup {
    #private;
    /**
     * Creates a new ConfirmAllPopup.
     * @param element The HTML element that hosts the popup.
     * @param control The control owning the popup.
     */
    constructor(element: HTMLElement, control: TcHmiEventGrid);
    protected __alarms: TcHmi.Server.Events.Alarm[];
    protected __datagrid: TcHmiDatagrid;
    protected __yesButton: TcHmiButton;
    protected __elementAlarmCount: HTMLElement;
    /**
     * Destroys the popup and all its controls. Also removes all DOM event handlers
     */
    destroy(): void;
    /**
     * Updates the content of the popup.
     * @param event The event whose details should be shown.
     */
    update(alarms: TcHmi.Server.Events.Alarm[]): void;
    /**
     * Returns the currently shown alarms.
     */
    getAlarms(): TcHmi.Server.Events.Alarm<TcHmi.Dictionary<any>>[];
}
