import * as TcHmiTrendLineChart from './TcHmiTrendLineChart.esm.js';
import type { Control as TcHmiCombobox } from '../TcHmiCombobox/TcHmiCombobox.esm.js';
import type { Control as TcHmiTimespanPicker } from '../TcHmiTimespanPicker/TcHmiTimespanPicker.esm.js';
import type { Control as TcHmiDateTimePicker } from '../TcHmiDateTimePicker/TcHmiDateTimePicker.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import { Control as TcHmiToggleButton } from '../TcHmiToggleButton/TcHmiToggleButton.esm.js';
export declare class Menubar {
    private localePrefix;
    /** Create the menubar div element with all controls */
    constructor(trendlineChart: TcHmiTrendLineChart.Control);
    /** LineChart element to which the menu bar should be added. */
    protected __trendlineChart: TcHmiTrendLineChart.Control;
    /** Reference to the div element used as parent for buttons (top most layer) as jquery object. */
    protected __elementMenuBarDropdown: JQuery;
    /** Stores the menuButtons as System.TcHmiControl[] */
    protected __menuBarControls: {
        startCombobox: TcHmiCombobox<string>;
        startTimespanPicker: TcHmiTimespanPicker;
        startTimespanButton: TcHmiButton;
        startDateTimePicker: TcHmiDateTimePicker;
        startDateTimeButton: TcHmiButton;
        endCombobox: TcHmiCombobox<string>;
        endTimespanPicker: TcHmiTimespanPicker;
        endTimespanButton: TcHmiButton;
        endDateTimePicker: TcHmiDateTimePicker;
        endDateTimeButton: TcHmiButton;
        resetButton: TcHmiButton;
        stopButton: TcHmiButton;
        panXToggleButton: TcHmiToggleButton;
        panXYToggleButton: TcHmiToggleButton;
        zoomXToggleButton: TcHmiToggleButton;
        zoomXYToggleButton: TcHmiToggleButton;
        resetZoomButton: TcHmiButton;
        settingsButton: TcHmiButton;
        showStatisticalDataToggleButton: TcHmiToggleButton;
        optionsButton: TcHmiButton;
    } | null;
    /** Reference to the div element with all menubarControls as jquery object. */
    protected __menubar: JQuery;
    private __lineGraphDescriptionsEditor;
    /** Reference to the div element used as settings dialog as jquery object. */
    protected __elementSettingsDialog: JQuery;
    /** Events */
    private __destroyEvents;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    private __addMenubarEvents;
    /** Is called if onPressed event of start or stop button has raised. */
    __onPressed(event: TcHmi.EventProvider.Event): void;
    /** Is called if activeChangedEvent of toggleButtons has raised. */
    __onIsActiveChanged(event: TcHmi.EventProvider.Event): void;
    /** Is called if activeChangedEvent of toggleButtons has raised. */
    __onValueChanged(event: TcHmi.EventProvider.Event): void;
    /** Is called if onPressed event of ok button has raised. */
    private __onOkPressed;
    /** Is called if onPressed event of cancel button has raised. */
    private __onCancelPressed;
    /** Is called if onPressed event of cancel button has raised. */
    private __onResetSettingsPressed;
    /**
     * Returns an event handler for the onUserInteractionFinished events of the start or end comboboxes.
     * @param combobox The combobox to generate the handler for.
     * @param action What to do with the value of the combobox.
     */
    __getTimeComboboxHandler(combobox: TcHmiCombobox<string>, action: (value: string | null) => void): (event: TcHmi.EventProvider.Event) => void;
    /** Open the settings popup. */
    openSettingsPopup(): void;
    /** Show options-div (with buttons which can not be shown) */
    showOptions(): void;
    /** Remove __elementMenuBarDropdown from TopMostLayer */
    removeElementFromTopMostLayer(): void;
    /** Calculated which menuButtons added to topMostLayer */
    calcMenuButtons(): void;
    /**
     * Gets the value of menubar
     * @returns The parent element of the menubar
     */
    getMenubar(): JQuery<HTMLElement>;
    /**
     * Sets the active toggle button from mouseMode
     * @param mouseMode The mouseMode value from control
     */
    setActiveToggleButton(mouseMode: TcHmiTrendLineChart.MouseMode): void;
    /**
     * Get the active toggle button
     * @returns The active toggle button
     */
    getActiveToggleButton(): TcHmiToggleButton | null;
    /**
     * Get the menubarControls
     * @returns The menubarControls
     */
    getMenubarControls(): {
        startCombobox: TcHmiCombobox<string>;
        startTimespanPicker: TcHmiTimespanPicker;
        startTimespanButton: TcHmiButton;
        startDateTimePicker: TcHmiDateTimePicker;
        startDateTimeButton: TcHmiButton;
        endCombobox: TcHmiCombobox<string>;
        endTimespanPicker: TcHmiTimespanPicker;
        endTimespanButton: TcHmiButton;
        endDateTimePicker: TcHmiDateTimePicker;
        endDateTimeButton: TcHmiButton;
        resetButton: TcHmiButton;
        stopButton: TcHmiButton;
        panXToggleButton: TcHmiToggleButton;
        panXYToggleButton: TcHmiToggleButton;
        zoomXToggleButton: TcHmiToggleButton;
        zoomXYToggleButton: TcHmiToggleButton;
        resetZoomButton: TcHmiButton;
        settingsButton: TcHmiButton;
        showStatisticalDataToggleButton: TcHmiToggleButton;
        optionsButton: TcHmiButton;
    } | null;
    /**
     * Sets the active toggle button from mouseMode
     * @param mouseMode The mouseMode value from control
     */
    setMenubarButtonsEnabled(enableMenubarControls: {
        startCombobox: boolean;
        startTimespanPicker: boolean;
        startTimespanButton: boolean;
        startDateTimePicker: boolean;
        startDateTimeButton: boolean;
        endCombobox: boolean;
        endTimespanPicker: boolean;
        endTimespanButton: boolean;
        endDateTimePicker: boolean;
        endDateTimeButton: boolean;
        resetButton: boolean;
        stopButton: boolean;
        panXToggleButton: boolean;
        panXYToggleButton: boolean;
        zoomXToggleButton: boolean;
        zoomXYToggleButton: boolean;
        resetZoomButton: boolean;
        settingsButton: boolean;
        showStatisticalDataToggleButton: boolean;
        optionsButton: boolean;
    }): void;
    /** Update the srcData auf the start combobox */
    updateSrcDataStart(): void;
    /** Update the srcData auf the end combobox */
    updateSrcDataEnd(): void;
    setStatisticalDataToggleButtonToggleState(state: boolean): void;
}
//# sourceMappingURL=Menubar.d.ts.map