
declare class TcHmiTabNavigation extends TcHmi.Controls.System.TcHmiControl {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** Reference to the root dom element of the current control template as HTMLElement. */
    protected __elementTemplateRoot: HTMLElement;
    /** Reference to the content tabs dom element of the control */
    protected __elementContentTabs: TcHmi.Controls.Helpers.ContentTabs;
    /** The List of tabs to be displayed in the control */
    protected __tabs: Tab[] | null | undefined;
    protected __oldTabs: Tab[] | null | undefined;
    /** Cache the file host attributes to be able to pass symbols to the file host */
    protected __fileHostAttributesCache: Map<string, string | TcHmi.Dictionary<any> | undefined>;
    /** The name of the active tab */
    protected __activeTabName: string | null | undefined;
    /** The name of the initially active tab */
    protected __initialTabName: string | null | undefined;
    /** The alignment of the tab bar */
    protected __tabAlignment: TcHmi.Controls.Helpers.ContentTabs.TabAlignment | null | undefined;
    /** The horizontal alignment of the text */
    protected __textHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
    /** The vertical alignment of the text */
    protected __textVerticalAlignment: TcHmi.VerticalAlignment | null | undefined;
    /** The font size of the text */
    protected __textFontSize: number | undefined;
    /** The font size unit of text */
    protected __textFontSizeUnit: TcHmi.FontSizeUnit | undefined;
    /** The font family of the text */
    protected __textFontFamily: TcHmi.FontFamily | null | undefined;
    /** The font style of the text */
    protected __textFontStyle: TcHmi.FontStyle | undefined;
    /** The font weight of the text */
    protected __textFontWeight: TcHmi.FontWeight | undefined;
    /** The padding of the text */
    protected __textPadding: TcHmi.FourSidedCss | null | undefined;
    /** The text color of the tabs */
    protected __tabTextColor: TcHmi.SolidColor | null | undefined;
    /** The text color of the tabs */
    protected __activeTabTextColor: TcHmi.SolidColor | null | undefined;
    /** The text color of the tabs */
    protected __activeTabColor: TcHmi.SolidColor | null | undefined;
    /** The overflow mode of the tabs */
    protected __tabOverflowMode: TcHmi.Controls.Helpers.ContentTabs.TabOverflowMode | null | undefined;
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
     * Callback function which is fired on tab change
     **/
    protected __tabChangeCallback(newTabName: string): void;
    /** Callback function for a user change */
    protected __onUserDataChanged(): void;
    /**
     * Builds the file host instance based on TargetFile and TargetFileHostAttributes for a single tab
     * and appends it to the tabs contentElement.
     */
    protected __buildFileHost(tab: Tab): void;
    /** Append the target file host of a specific tab to its contentElement */
    protected __attachTargetFileHost(tab: Tab): void;
    /** Detach target file host */
    protected __detachTargetFileHost(tab: Tab): void;
    /**
     * Build the link element for a single tab.
     * @param tab
     */
    protected __buildLink(tab: Tab): void;
    /**
     * Build the icon element for a tab if the icon data is given.
     */
    protected __buildIcon(tab: Tab): void;
    /**
     * Remove tabs from the control and destroy the file host.
     * @param tabs
     */
    protected __removeTabs(tabs: Tab[] | null | undefined, destroy?: boolean): void;
    /**
     * Get AccessConfig with injected access rights of the navigation elements
     */
    getAccessConfig(): TcHmi.AccessControl[];
    /**
     * get access rights of the tab items
     * @param items items structure
     * @param accesList List of accesData
     */
    protected __getSubRights(items: Tab[], accessList: TcHmi.AccessControl[]): TcHmi.AccessControl[];
    /**
     * Our navigation-only rights should be default true
     * @param name Name of the navigation-only right (?) to check
     */
    getDescriptionAccessByName(name: string): TcHmi.Controls.ControlAccessDescription | null;
    /**
     * Sets the content value and calls the associated process function (processTabs).
     * @param valueNew The new value for the tabs attribute.
     */
    setTabs(valueNew: Tab[] | null): void;
    /**
     * The watch callback for the tabs object resolver.
     */
    protected __onResolverForTabsWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<Tab[]>): void;
    /**
     * Returns the current value of the tabs attribute.
     */
    getTabs(): Tab[] | null | undefined;
    /**
     * Processes the tabs.
     */
    protected __processTabs(): void;
    /**
     * Sets the TabAlignment attribute.
     * @param valueNew The new value for TabAlignment.
     */
    setTabAlignment(valueNew: TcHmi.Controls.Helpers.ContentTabs.TabAlignment | null): void;
    /**
     * Returns the current value of TabAlignment.
     */
    getTabAlignment(): TcHmi.Controls.Helpers.ContentTabs.TabAlignment | null | undefined;
    /**
     * Processes the current value of attribute TabAlignment.
     */
    protected __processTabAlignment(): void;
    /**
     * Sets the activeTabName value and calls the associated process function (processActiveTabName).
     * @param valueNew The new value for activeTabName.
     */
    setActiveTabName(valueNew: string | null): void;
    /**
     * Returns the current value of ActiveTabName.
     */
    getActiveTabName(): string | null | undefined;
    protected __processActiveTabName(): void;
    /**
     * Sets the initialTabName value and calls the associated process function (processInitialTabName).
     * @param valueNew The new value for initialTabName.
     */
    setInitialTabName(valueNew: string | null): void;
    /**
     * Returns the current value of initialTabName.
     */
    getInitialTabName(): string | null | undefined;
    /**
     * Processes the current border-radius attribute.
     */
    protected __processBorderRadius(): void;
    /**
     * Sets the textHorizontalAlignment value and calls the associated process function (processTextHorizontalAlignment).
     * @param valueNew The new value for textHorizontalAlignment.
     */
    setTextHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
    /**
     * Returns the current value of horizontalTextAligment.
     */
    getTextHorizontalAlignment(): TcHmi.HorizontalAlignment | null | undefined;
    /**
     * Processes the current textHorizontalAlignment attribute value.
     */
    protected __processTextHorizontalAlignment(): void;
    /**
     * Sets the textVerticalAlignment value and calls the associated process function (processTextVerticalAlignment).
     * @param valueNew The new value for textVerticalAlignment.
     */
    setTextVerticalAlignment(valueNew: TcHmi.VerticalAlignment | null): void;
    /**
     * Returns the current value of textVerticalAlignment.
     */
    getTextVerticalAlignment(): TcHmi.VerticalAlignment | null | undefined;
    /**
     * Processes the current textVerticalAlignment attribute value.
     */
    protected __processTextVerticalAlignment(): void;
    /**
     * Sets the font size and calls the associated process function (processTextFontSize).
     * @param valueNew The new value for textFontSize.
     */
    setTextFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of textFontSize.
     */
    getTextFontSize(): number | undefined;
    /**
     * Processes the current textFontSize attribute value.
     */
    protected __processTextFontSize(): void;
    /**
     * Sets the font size and calls the associated process function (processTextFontSizeUnit).
     * @param valueNew The new value for textFontSizeUnit.
     */
    setTextFontSizeUnit(valueNew: TcHmi.FontSizeUnit | null): void;
    /**
     * Returns the current value of textFontSizeUnit.
     */
    getTextFontSizeUnit(): TcHmi.FontSizeUnit | undefined;
    /**
     * Processes the current textFontSizeUnit attribute value.
     */
    protected __processTextFontSizeUnit(): void;
    /**
     * Sets the font family and calls the associated process function (processTextFontFamily).
     * @param valueNew The new value for textFontFamily.
     */
    setTextFontFamily(valueNew: TcHmi.FontFamily | null): void;
    /**
     * Returns the current value of textFontFamily.
     */
    getTextFontFamily(): string | null | undefined;
    /**
     * Processes the current textFontFamily attribute value.
     */
    protected __processTextFontFamily(): void;
    /**
     * Sets the font style and calls the associated process function (processTextFontStyle).
     * @param valueNew The new value for textFontStyle.
     */
    setTextFontStyle(valueNew: TcHmi.FontStyle | null): void;
    /**
     * Returns the current value of textFontStyle.
     */
    getTextFontStyle(): TcHmi.FontStyle | undefined;
    /**
     * Processes the current textFontStyle attribute value.
     */
    protected __processTextFontStyle(): void;
    /**
     * Sets the font weight and calls the associated process function (processTextFontWeight).
     * @param valueNew The new value for textFontWeight.
     */
    setTextFontWeight(valueNew: TcHmi.FontWeight | null): void;
    /**
     * Returns the current value of textFontWeight.
     */
    getTextFontWeight(): TcHmi.FontWeight | undefined;
    /**
     * Processes the current textFontWeight attribute value.
     */
    protected __processTextFontWeight(): void;
    /**
     * Sets the value of the member variable "textPadding" if the new value is not equal to the current value
     * and calls the associated process function (processTextPadding) after that.
     * @param valueNew The new value for textPadding.
     */
    setTextPadding(valueNew: TcHmi.FourSidedCss | null): void;
    /**
     * The watch callback for the textPadding object resolver.
     */
    protected __onResolverForTextPaddingWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.FourSidedCss>): void;
    /**
     * Returns the current value of the member variable textPadding.
     */
    getTextPadding(): TcHmi.FourSidedCss | null | undefined;
    /**
     * Processes the current value of textPadding and forwards it to the target span element in template html.
     * The current value of textPadding is only forwarded if it is no binding expression.
     */
    protected __processTextPadding(): void;
    /**
     * Processes the current background-color attribute.
     */
    protected __processBackgroundColor(): void;
    /**
     * Sets the text color and calls the associated process function (processTabTextColor).
     * @param valueNew The new value for tabTextColor.
     */
    setTabTextColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the tabTextColor object resolver.
     * @param data Object containing the new value for tabTextColor
     */
    protected __onResolverForTabTextColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of tabTextColor.
     * @returns The current value of tabTextColor.
     */
    getTabTextColor(): TcHmi.SolidColor | null | undefined;
    /**
     * Processes the current tabTextColor attribute value.
     */
    protected __processTabTextColor(): void;
    /**
     * Sets the text color and calls the associated process function (processActiveTabTextColor).
     * @param valueNew The new value for activeTabTextColor.
     */
    setActiveTabTextColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the activeTabTextColor object resolver.
     * @param data Object containing the new value for activeTabTextColor
     */
    protected __onResolverForActiveTabTextColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of activeTabTextColor.
     * @returns The current value of activeTabTextColor.
     */
    getActiveTabTextColor(): TcHmi.SolidColor | null | undefined;
    /**
     * Processes the current activeTabTextColor attribute value.
     */
    protected __processActiveTabTextColor(): void;
    /**
     * Sets the  color and calls the associated process function (processActiveTabColor).
     * @param valueNew The new value for activeTabColor.
     */
    setActiveTabColor(valueNew: TcHmi.SolidColor | null): void;
    /**
     * The watch callback for the activeTabColor object resolver.
     * @param data Object containing the new value for activeTabColor
     */
    protected __onResolverForActiveTabColorWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<TcHmi.SolidColor>): void;
    /**
     * Returns the current value of activeTabColor.
     * @returns The current value of activeTabColor.
     */
    getActiveTabColor(): TcHmi.SolidColor | null | undefined;
    /**
     * Processes the current activeTabColor attribute value.
     */
    protected __processActiveTabColor(): void;
    /**
     * Sets the tabOverflowMode value and calls the associated process function (processTabOverflowMode).
     * @param valueNew The new value for tabOverflowMode.
     */
    setTabOverflowMode(valueNew: TcHmi.Controls.Helpers.ContentTabs.TabOverflowMode | null): void;
    /**
     * Returns the current value of TabOverflowMode.
     */
    getTabOverflowMode(): TcHmi.Controls.Helpers.ContentTabs.TabOverflowMode | null | undefined;
    /**
     * Processes the current value of attribute TabOverflowMode.
     */
    protected __processTabOverflowMode(): void;
}
export interface Tab {
    name: string;
    displayName: string;
    targetFile: TargetFile;
    targetFileHostPreload: boolean;
    targetFileHostPreAttach: boolean;
    targetFileHostKeepAlive: boolean;
    accessRights?: TcHmi.AccessControl[];
    scrolling?: 'No' | 'Yes' | 'Auto';
    hidden?: boolean;
    fileHost?: TcHmi.Controls.System.TcHmiRegion | TcHmi.Controls.System.TcHmiUserControlHost;
    linkElement?: HTMLElement;
    contentElement?: HTMLElement;
    icon?: TabIcon;
    iconElement?: HTMLElement;
}
export type TargetFile = TcHmi.Controls.System.TcHmiPopup.TargetFile;
export interface TabIcon {
    iconPath: string;
    iconWidth?: number;
    iconWidthUnit?: 'px' | '%';
    iconHeight?: number;
    iconHeightUnit?: 'px' | '%';
}
export { TcHmiTabNavigation as Control };
declare const _TcHmiTabNavigation: typeof TcHmiTabNavigation;
type tTcHmiTabNavigation = TcHmiTabNavigation;
type tTab = Tab;
type tTargetFile = TargetFile;
type tTabIcon = TabIcon;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiTabNavigation: typeof _TcHmiTabNavigation;
        type TcHmiTabNavigation = tTcHmiTabNavigation;
        namespace TcHmiTabNavigation {
            type Tab = tTab;
            type TargetFile = tTargetFile;
            type TabIcon = tTabIcon;
        }
    }
}
