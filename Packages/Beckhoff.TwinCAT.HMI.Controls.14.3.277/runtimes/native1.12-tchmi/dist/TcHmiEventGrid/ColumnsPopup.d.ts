import { SettingsPopup } from './SettingsPopup.js';
import type { Control as TcHmiEventGrid, Column } from './TcHmiEventGrid.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiTextbox } from '../TcHmiTextbox/TcHmiTextbox.esm.js';
import type { Control as TcHmiCheckbox } from '../TcHmiCheckbox/TcHmiCheckbox.esm.js';
import type * as TcHmiCombobox from '../TcHmiCombobox/TcHmiCombobox.esm.js';
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
//# sourceMappingURL=ColumnsPopup.d.ts.map