import type { Control as TcHmiEventGrid } from './TcHmiEventGrid.esm.js';
import type { Control as TcHmiDatagrid } from '../TcHmiDatagrid/TcHmiDatagrid.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import { Popup } from './Popup.js';
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
//# sourceMappingURL=ConfirmAllPopup.d.ts.map