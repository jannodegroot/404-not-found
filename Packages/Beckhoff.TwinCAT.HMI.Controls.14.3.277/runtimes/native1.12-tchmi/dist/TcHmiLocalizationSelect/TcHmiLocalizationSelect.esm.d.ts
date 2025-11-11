import { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type * as TcHmiCombobox from '../TcHmiCombobox/TcHmiCombobox.esm.js';
declare class TcHmiLocalizationSelect extends TcHmiControl.Control {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** Reference to the root dom element of the current control template */
    protected __elementTemplateRoot: HTMLElement;
    /**
     * ReadOnly state of the control.
     */
    protected __isReadOnly: boolean | undefined;
    /** The combobox instance used in this control.*/
    protected __combobox: TcHmiCombobox.Control<string, TcHmiCombobox.ListItem<string>[]>;
    /** Internal reference to the attribute "data-tchmi-localization-mapping" */
    protected __localizationReaderMapping: ListItem[] | null | undefined;
    /** Combobox event destroy functions*/
    protected __passThroughPropertyEventDestroyFunction: TcHmi.DestroyFunction | null;
    protected __isEnabledLock: {
        locked: boolean;
        unlockValue: boolean | null;
    };
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
     * Fill SrcData with the registered localizations.
     */
    protected __displayLocalizations(): void;
    /**
     * Set the selected ListItem to the active localization.
     */
    protected __selectActiveLocalization(): void;
    /**
     * Returns an event handler for the onLocaleChanged event.
     */
    protected __onLocalizationChanged(event: TcHmi.EventProvider.Event): void;
    /**
     * Returns an event handler for the onUserInteractionFinished event.
     */
    protected __onUserInteractionFinished(event: TcHmi.EventProvider.Event): void;
    /**
     * Lock the isEnabled state to false.
     */
    protected __lockIsEnabled(): void;
    /**
     * Unlock the isEnabled state and apply the stored unlockValue.
     */
    protected __unlockIsEnabled(): void;
    /**
     * Sets the value of attribute IsEnabled.
     */
    setIsEnabled(valueNew: boolean | null): void;
    /**
     * Handles the onPropertyChanged event of the combobox.
     */
    private __onComboboxPropertyChanged;
    /**************** GETTER & SETTER *********************/
    /**
     * Sets the localizationMappting value and calls the associated process function (__processLocalizationMapping).
     * @param valueNew
     */
    setLocalizationMapping(valueNew: ListItem[] | null): void;
    /**
     * The watch callback for the localizationMapping object resolver.
     */
    protected __onResolverForLocalizationMappingWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<ListItem[]>): void;
    /**
     * Returns the current value of the member variable localizationMapping.
     */
    getLocalizationMapping(): ListItem[] | null | undefined;
    protected __processLocalizationMapping(): void;
    /************** GETTER & SETTER COMBOBOX *****************/
    /** Just pass the attributes through to the combobox */
    /**
     * Sets the background value and calls the associated process function (processBackground).
     * @param valueNew
     * @preserve (Part of the public API)
     */
    setBackgroundColor(valueNew: TcHmi.Color | null): void;
    /**
     * Returns the current background value.
     * @preserve (Part of the public API)
     */
    getBackgroundColor(): TcHmi.Color | null | undefined;
    /**
     * Sets the textHorizontalAlignment value and calls the associated process function (processTextHorizontalAlignment).
     * @param valueNew The new value for textHorizontalAlignment.
     */
    setTextHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
    /**
     * Returns the current value of horizontalTextAligment.
     * @returns The current value of horizontalTextAligment.
     */
    getTextHorizontalAlignment(): TcHmi.HorizontalAlignment | null | undefined;
    /**
     * Sets the contentPadding value and calls the associated process function (processContentPadding) after it.
     * @param valueNew The new value for the contentPadding attribute as object.
     */
    setContentPadding(valueNew: TcHmi.FourSidedCss | null): void;
    /**
     * Returns the current contentPadding value.
     * @returns The current value of the contentPadding member variable as json in string format.
     */
    getContentPadding(): TcHmi.FourSidedCss | null | undefined;
    /**
     * Sets the text color and calls the associated process function (processDropDownHighlightColor).
     * @param valueNew The new value for dropDownHighlightColor.
     */
    setDropDownHighlightColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * Returns the current value of dropDownHighlightColor.
     * @returns The current value of dropDownHighlightColor.
     */
    getDropDownHighlightColor(): TcHmi.SolidColor | null | undefined;
    /**
     * Sets the text color and calls the associated process function (processDropDownHighlightTextColor).
     * @param valueNew The new value for dropDownHighlightTextColor.
     */
    setDropDownHighlightTextColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * Returns the current value of dropDownHighlightTextColor.
     * @returns The current value of dropDownHighlightTextColor.
     */
    getDropDownHighlightTextColor(): TcHmi.SolidColor | null | undefined;
    /**
     * Sets the toggle button background color and calls the associated process function (processDropDownToggleButtonBackgroundColor).
     * @param valueNew The new value for dropDownToggleButtonBackgroundColor.
     */
    setDropDownToggleButtonBackgroundColor(valueNew: TcHmi.Color | null): void;
    /**
     * Returns the current value of dropDownToggleButtonBackgroundColor.
     * @returns The current value of dropDownToggleButtonBackgroundColor.
     */
    getDropDownToggleButtonBackgroundColor(): TcHmi.Color | null | undefined;
    /**
     * Sets the toggle button arrow color and calls the associated process function (processDropDownToggleButtonArrowColor).
     * @param valueNew The new value for dropDownToggleButtonArrowColor.
     */
    setDropDownToggleButtonArrowColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * Returns the current value of dropDownToggleButtonArrowColor.
     * @returns The current value of dropDownToggleButtonArrowColor.
     */
    getDropDownToggleButtonArrowColor(): TcHmi.SolidColor | null | undefined;
    /**
     * Sets the text color and calls the associated process function (processTextColor).
     * @param valueNew The new value for textColor.
     */
    setTextColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * Returns the current value of textColor.
     * @returns The current value of textColor.
     */
    getTextColor(): TcHmi.SolidColor | null | undefined;
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
     * Sets the font family and calls the associated process function (processTextFontFamily).
     * @param valueNew The new value for textFontFamily.
     */
    setTextFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /**
     * Returns the current value of textFontFamily.
     * @returns The current value of textFontFamily.
     */
    getTextFontFamily(): string | null | undefined;
    /**
     * Sets the font style and calls the associated process function (processTextFontStyle).
     * @param valueNew The new value for textFontStyle.
     */
    setTextFontStyle(valueNew: TcHmi.FontStyle | null): void;
    /**
     * Returns the current value of textFontStyle.
     * @returns The current value of textFontStyle.
     */
    getTextFontStyle(): TcHmi.FontStyle | undefined;
    /**
     * Sets the font weight and calls the associated process function (processTextFontWeight).
     * @param valueNew The new value for textFontWeight.
     */
    setTextFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /**
     * Returns the current value of textFontWeight.
     * @returns The current value of textFontWeight.
     */
    getTextFontWeight(): TcHmi.FontWeight | undefined;
    /**
     * Sets the value of the member variable "dataHeight" if the new value is not equal to the current value
     * and calls the associated __process function (__processDataHeight) after that.
     * @param valueNew The new value for dataHeight.
     */
    setDataHeight(valueNew: number | null): void;
    /**
     * Returns the current value of the member variable dataHeight.
     */
    getDataHeight(): number | undefined;
    /**
     * Sets the value of the member variable "maxListHeight" if the new value is not equal to the current value
     * and calls the associated process function (processmaxListHeight) after that.
     * @param valueNew The new value for maxListHeight.
     */
    setMaxListHeight(valueNew: number | null): void;
    /**
     * Returns the current value of the member variable maxListHeight.
     */
    getMaxListHeight(): number | undefined;
    /**
     * Sets the value of the member variable "DropDownStyle" if the new value is not equal to the current value
     * and calls the associated __process function (__processmaxListHeightUnit) after that.
     * @param valueNew The new value for dataHeight.
     */
    setDropDownStyle(valueNew: TcHmiCombobox.DropDownStyle | null): void;
    /**
     * Returns the current value of the member variable DropDownStyle.
     */
    getDropDownStyle(): "Classic" | "Mobile" | undefined;
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
     * Sets the font family and calls the associated process function (processDropDownFontFamily).
     * @param valueNew The new value for DropDownFontFamily.
     */
    setDropDownFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /**
     * Returns the current value of DropDownFontFamily.
     * @returns The current value of DropDownFontFamily.
     */
    getDropDownFontFamily(): string | null | undefined;
    /**
     * Sets the font style and calls the associated process function (processDropDownFontStyle).
     * @param valueNew The new value for DropDownFontStyle.
     */
    setDropDownFontStyle(valueNew: TcHmi.FontStyle | null): void;
    /**
     * Returns the current value of DropDownFontStyle.
     * @returns The current value of DropDownFontStyle.
     */
    getDropDownFontStyle(): TcHmi.FontStyle | undefined;
    /**
     * Sets the font weight and calls the associated process function (processDropDownFontWeight).
     * @param valueNew The new value for DropDownFontWeight.
     */
    setDropDownFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /**
     * Returns the current value of DropDownFontWeight.
     * @returns The current value of DropDownFontWeight.
     */
    getDropDownFontWeight(): TcHmi.FontWeight | undefined;
    /**
     * Sets the DropDownHorizontalAlignment value and calls the associated process function (processDropDownHorizontalAlignment).
     * @param valueNew The new value for DropDownHorizontalAlignment.
     */
    setDropDownHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
    /**
     * Returns the current value of horizontalDropDownAligment.
     * @returns The current value of horizontalDropDownAligment.
     */
    getDropDownHorizontalAlignment(): TcHmi.HorizontalAlignment | undefined;
    /**
     * Sets the DropDownVerticalAlignment value and calls the associated process function (processDropDownVerticalAlignment).
     * @param valueNew The new value for DropDownVerticalAlignment.
     */
    setDropDownVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
    /**
     * Returns the current value of DropDownVerticalAlignment.
     * @returns The current value of DropDownVerticalAlignment.
     */
    getDropDownVerticalAlignment(): TcHmi.VerticalAlignment | undefined;
    /**
     * Sets the DropDown color and calls the associated process function (processDropDownTextColor).
     * @param valueNew The new value for DropDownTextColor.
     */
    setDropDownTextColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * Returns the current value of DropDownTextColor.
     * @returns The current value of DropDownTextColor.
     */
    getDropDownTextColor(): TcHmi.SolidColor | null | undefined;
    /**
     * Sets the toggle button background color and calls the associated process function (processDropDownBackgroundColor).
     * @param valueNew The new value for dropDownBackgroundColor.
     */
    setDropDownBackgroundColor(valueNew: TcHmi.Color | null): void;
    /**
     * Returns the current value of dropDownBackgroundColor.
     * @returns The current value of dropDownBackgroundColor.
     */
    getDropDownBackgroundColor(): TcHmi.Color | null | undefined;
    /**
     * Sets the isReadOnly attribute and calls the associated process function (processIsReadOnly).
     * @preserve (Part of the public API)
     */
    setIsReadOnly(valueNew: boolean | null): void;
    /**
     * Returns the effective value of isReadOnly based on own and parent isReadOnly variable.
     */
    getIsReadOnly(): boolean | undefined;
    /**
     * Process IsReadOnly.
     */
    protected __processIsReadOnly(): void;
}
export interface ListItem {
    /** A Localization code like 'de-DE' */
    code: string;
    /** Text to show for the defined localization code */
    text: string;
}
export { TcHmiLocalizationSelect as Control };
declare const _TcHmiLocalizationSelect: typeof TcHmiLocalizationSelect;
type tTcHmiLocalizationSelect = TcHmiLocalizationSelect;
type tListItem = ListItem;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiLocalizationSelect: typeof _TcHmiLocalizationSelect;
        type TcHmiLocalizationSelect = tTcHmiLocalizationSelect;
        namespace TcHmiLocalizationSelect {
            type ListItem = tListItem;
        }
    }
}
//# sourceMappingURL=TcHmiLocalizationSelect.esm.d.ts.map