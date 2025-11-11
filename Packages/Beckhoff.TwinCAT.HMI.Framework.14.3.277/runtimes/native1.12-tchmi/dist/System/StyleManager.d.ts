export declare class StyleManager {
    constructor();
    /** Legacy style api was used once */
    private __legacyEventsRegistered;
    /**
     * Writes all styles that are currently cached for the specified control into the head.
     * @param controlNames The target controls.
     */
    writeStylesFromCache(ctrls: readonly TcHmi.Controls.System.baseTcHmiControl[]): void;
    /**
     * Removes all styles for the specified control from the head and saves them in the cache.
     * @param controlName The target control name.
     */
    removeStylesFromDom(ctrls: readonly TcHmi.Controls.System.baseTcHmiControl[]): void;
    /**
     * Gets the existing style overwrites for a control.
     * @param controlName The name of the targeted Control.
     */
    getExistingStyleOverwrites(controlName: string): any;
    /**
     * Returns all styles set on a given element inside the specified control.
     * @param controlName The target control name.
     * @param selector The selector under which to find the style. Has to exactly match the selector that was used to set the style.
     */
    getStyle(controlName: string, selector: string): TcHmi.Dictionary<string[]> | undefined;
    /**
     * Returns an array of values for a given CSS property on a given element inside the specified control.
     * @param controlName The target control name.
     * @param selector The selector under which to find the style. Has to exactly match the selector that was used to set the style.
     * @param propertyName The CSS property to get. If this parameter is not provided, all styles will be returned.
     */
    getStyle(controlName: string, selector: string, propertyName: string): string[] | undefined;
    /**
     * Writes the styles to a style element inside the control.
     * @param controlName The name of the target control.
     * @param styles The styles to write.
     */
    writeStyles(controlName: string, styles: any): void;
    /**
     * Replaces "%id%" in all selector parts with a given prefix. If "%id%" could not be found in a selector part the prefix is added to the start of the selector."#" is automatically prepended to the prefix.
     * @param selector The selector to expand.
     * @param prefix The prefix to add to the selector.
     */
    expandSelector(selector: string, prefix: string): string;
    /**
     * Theme Processor for generic styles.
     * @param controlName The name of the target control.
     * @param selector The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
     * @param property The CSS property to process.
     * @param value The value for the CSS property.
     */
    processGenericStyle(controlName: string, selector: string, property: string, value: string | null): void;
    /**
     * Theme Processor for generic styles.
     * @param controlName The name of the target control.
     * @param selector The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
     * @param property The CSS property to process.
     * @param value An array of values for the CSS property. This is useful for providing vendor-prefixed values to ensure compatibility.
     */
    processGenericStyle(controlName: string, selector: string, property: string, value: string[] | null): void;
    /**
     * Theme Processor for generic styles.
     * @param controlName The name of the target control.
     * @param selector The target CSS selector. %id% is automatically replaced by the control name. Pass an empty string to target the control root.
     * @param styles A dictionary of property-value pairs. Can be used to set multiple styles simultaneously. The values can be strings or arrays of strings to provide vendor-prefixed values.
     */
    processGenericStyle(controlName: string, selector: string, styles: TcHmi.Dictionary<string | string[] | null> | null): void;
    processGenericStyle(controlName: string, selector: string, property: string | TcHmi.Dictionary<string | string[] | null> | null, value: string | string[] | null): void;
    /**
     * Theme Processor for background.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new value for the background.
     */
    processBackground(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: Partial<TcHmi.Background> | null | undefined): void;
    /**
     * Theme processor for SVG fill color.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new fill color.
     */
    processFillColor(element: JQuery<SVGElement | HTMLElement> | Iterable<SVGElement> | SVGElement | undefined, valueNew: TcHmi.Color | null | undefined): void;
    /**
     * Theme processor for SVG stroke color.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new stroke color.
     */
    processStrokeColor(element: JQuery<SVGElement | HTMLElement> | Iterable<SVGElement> | SVGElement | undefined, valueNew: TcHmi.SolidColor | null | undefined): void;
    /**
     * Theme processor for text color.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new text color.
     */
    processTextColor(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.SolidColor | null | undefined): void;
    /**
     * Theme processor for border color.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new border color.
     */
    processBorderColor(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.Color | null | undefined): void;
    /**
     * Theme processor for border width.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new border widths.
     */
    processBorderWidth(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: Partial<TcHmi.BorderWidth> | null | undefined): void;
    /**
     * Theme processor for border radius.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new border radii.
     */
    processBorderRadius(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.BorderRadius | null | undefined): void;
    /**
     * Theme processor for border style.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new border styles.
     */
    processBorderStyle(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.BorderStyle | null | undefined): void;
    /**
     * Theme processor for box shadow.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new border styles.
     */
    processBoxShadow(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: readonly TcHmi.BoxShadow[] | null | undefined): void;
    /**
     * Theme processor for font family.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new font family.
     */
    processFontFamily(element: Iterable<Element> | Element | undefined, valueNew: TcHmi.FontFamily | null | undefined): void;
    /**
     * Theme processor for font size.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new font size.
     * @param unitNew The new font size unit. Defaults to "px".
     */
    processFontSize(element: Iterable<Element> | Element | undefined, valueNew: number | null | undefined, unitNew: TcHmi.FontSizeUnit): void;
    /**
     * Theme processor for font style.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new font style. Allowed values are "Normal", "Italic" and "Oblique".
     */
    processFontStyle(element: Iterable<Element> | Element | undefined, valueNew: TcHmi.FontStyle | undefined | null): void;
    /**
     * Theme processor for font weight.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new font weight. Allowed values are "Normal" and "Bold".
     */
    processFontWeight(element: Iterable<Element> | Element | undefined, valueNew: TcHmi.FontWeight | undefined | null): void;
    /**
     * Theme processor for visibility.
     * Visibility also affects pointer events, i.e. a hidden element will not receive mouse click events.
     * Hidden still uses space in fluid calculations, collapsed is ignored there.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new visibility. Allowed values are "Visible", "Collapsed" and "Hidden". Hidden still uses space in fluid calculations, collapsed is ignored there.
     */
    processVisibility(element: Iterable<Element> | Element | undefined, valueNew: TcHmi.Visibility | null | undefined): void;
    /**
     * Theme processor for horizontal alignment. This aligns the content of the target element, not the target element itself.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new horizontal alignment. Allowed values are "Left", "Center" and "Right".
     */
    processContentHorizontalAlignment(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.HorizontalAlignment | null | undefined): void;
    /**
     * Theme processor for vertical alignment. This aligns the content of the target element, not the target element itself.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new vertical alignment. Allowed values are "Top", "Center" and "Bottom".
     */
    processContentVerticalAlignment(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.VerticalAlignment | null | undefined): void;
    /**
     * Theme processor for content padding.
     * Note: Percentages always refer to the width of the element, never its height (even for top and bottom).
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new content padding.
     */
    processContentPadding(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: Partial<TcHmi.FourSidedCss> | null | undefined): void;
    /**
     * Theme processor for transforms.
     * @param element The jQuery collection or HTML/SVG element(s) to operate with.
     * @param valueNew The new transform value or an array of transform values.
     * @param order If this parameter is passed, the transforms in valueNew will replace the transform at the specified place, instead of replacing all transforms. Note that origin and perspective are exempt from this.
     */
    processTransform(element: Iterable<HTMLElement> | HTMLElement | undefined, valueNew: TcHmi.Transform | TcHmi.Transform[] | null | undefined, order?: number): void;
    private __measurementCanvas;
}
/** Runtime Manager */
export declare const styleManager: StyleManager;
//# sourceMappingURL=StyleManager.d.ts.map