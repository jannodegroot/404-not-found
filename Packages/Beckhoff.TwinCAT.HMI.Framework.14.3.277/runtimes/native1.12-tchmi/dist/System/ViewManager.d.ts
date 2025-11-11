export declare enum ScaleMode {
    None = 0,
    ScaleToFit = 1,
    ScaleToFitWidth = 2,
    ScaleToFitHeight = 3,
    ScaleToFill = 4
}
/**
 */
export declare class ViewManager {
    #private;
    /**
     */
    constructor();
    /**
     * This browser needs viewport offset for fixed positioned elements
     * ref https://bugs.webkit.org/show_bug.cgi?id=257375
     *
     * null: unknown or unimportant right now (no visualViewort scaling)
     */
    private boundingClientRectNeedsViewPortOffset;
    private __offsetAnimationFrameId;
    private __handlePosition;
    checkBrowserFeatures(): void;
    /**
     * Sets the scalemode.
     * @param scaleMode
     */
    setScaleMode(scaleModeStr: TcHmi.ScaleModeString): void;
    /**
     * Returns the current view control object
     */
    getView(): TcHmi.Controls.System.baseTcHmiControl | null;
    /**
     * Loads a new view into the dom.
     * @param url
     * @param callback
     */
    loadView(url: string, callback?: null | ((this: ViewManager, data: TcHmi.IResultObject) => void)): void;
    /**
     * The callback will have the ViewManager as this
     * @param view
     * @param callback
     */
    loadViewObject(view: TcHmi.Controls.System.baseTcHmiControl, callback?: null | ((this: ViewManager, data: TcHmi.IResultObject) => void)): void;
    /**
     * List of all viewparts
     * Starts with top, ends with bottom
     * center are somewhere in between
     */
    private __registeredViewportElements;
    /**
     * Adds a viewport element such as header or footer or over main.
     * */
    addViewportElement(element: HTMLElement, options: {
        /** Friendly name. */
        name?: string;
        /** Target area for the element. */
        area: 'header' | 'main' | 'footer';
    }): TcHmi.IErrorDetails;
    private __renderViewParts;
    /**
     * Removes a viewport element such as the header or footer.
     * @param element
     */
    removeViewportElement(element: HTMLElement): TcHmi.IErrorDetails;
    /**
     * Returns a DOMRect object providing information about the size of an
     * hmi viewport area (or main area) and its position relative to the viewport.
     */
    getViewportElementDimension(area: 'header' | 'main' | 'footer'): DOMRect | null;
}
/** Runtime Manager */
export declare const viewManager: ViewManager;
//# sourceMappingURL=ViewManager.d.ts.map