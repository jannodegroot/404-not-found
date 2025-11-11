import { MouseMode, type Control as TcHmiLineChart } from './TcHmiLineChart.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import { Control as TcHmiToggleButton } from '../TcHmiToggleButton/TcHmiToggleButton.esm.js';
export declare class Menubar {
    /** Create the menubar div element with all controls */
    constructor(lineChart: TcHmiLineChart);
    /** LineChart element to which the menu bar should be added. */
    protected __lineChart: TcHmiLineChart;
    /** Reference to the div element used as parent for buttons (top most layer) as jquery object. */
    protected __elementMenuBarDropdown: JQuery;
    /** Stores the menuButtons as Object */
    protected __menuBarControls: {
        playButton: TcHmiButton;
        pauseButton: TcHmiButton;
        panXToggleButton: TcHmiToggleButton;
        panXYToggleButton: TcHmiToggleButton;
        zoomXToggleButton: TcHmiToggleButton;
        zoomXYToggleButton: TcHmiToggleButton;
        resetZoomButton: TcHmiButton;
        optionsButton: TcHmiButton;
    } | null;
    /** Reference to the div element with all menubarControls as jquery object. */
    protected __menubar: JQuery;
    /** Events */
    private __destroyEvents;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    /** Is called if onPressed event of start or pause button has raised. */
    protected __onPressed(event: TcHmi.EventProvider.Event): void;
    /** Is called if activeChangedEvent of toggleButtons has raised. */
    protected __onIsActiveChanged(_event: TcHmi.EventProvider.Event): void;
    /** Show options-div (with buttons which can not be shown) */
    showOptions(): void;
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
    setActiveToggleButton(mouseMode: MouseMode): void;
    /**
     * Sets the active toggle button from mouseMode
     * @param mouseMode The mouseMode value from control
     */
    setMenubarButtonsEnabled(enableMenubarControls: {
        playButtonEnable: boolean;
        pauseButtonEnable: boolean;
        panXToggleButtonEnable: boolean;
        panXYToggleButtonEnable: boolean;
        zoomXToggleButtonEnable: boolean;
        zoomXYToggleButtonEnable: boolean;
        resetZoomButtonEnable: boolean;
    }): void;
}
//# sourceMappingURL=Menubar.d.ts.map