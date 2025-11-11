/**
 * Loads a view partial into the dom.
 * @param url URL of the view file to load
 * @param callback Callback will be called on success or failure
 * @preserve (Part of the public API)
 */
export declare function load(url: string, callback?: null | ((data: TcHmi.IResultObject) => void)): void;
/**
 * Returns the current view object.
 * @preserve (Part of the public API)
 */
export declare function get(): TcHmi.Controls.System.baseTcHmiControl | null;
/**
 * Sets the view scale mode.
 * @param scaleMode new value
 * @preserve (Part of the public API)
 */
export declare function setScaleMode(scaleMode: TcHmi.ScaleModeString): void;
/**
 * Adds a viewport element such as header or footer or over main.
 * Every header or footer gets its own space.
 * Elements targeting 'main' will get covering each other.
 * @param element The viewport element that should be added.
 * @param options optional stuff
 * @param options.name Optional friendly name.
 * @param options.area Target area for the element.
 */
export declare function addViewportElement(element: HTMLElement, options: {
    /** Optional friendly name. */
    name?: string;
    /** Target area for the element. */
    area: 'header' | 'main' | 'footer';
}): TcHmi.IErrorDetails;
/**
 * Removes a viewport element such as the header or footer.
 * @param element The viewport element that should be removed.
 */
export declare function removeViewportElement(element: HTMLElement): TcHmi.IErrorDetails;
/**
 * Returns a DOMRect object providing information about the size of an
 * hmi viewport area (or main area) and its position relative to the viewport.
 * @param area Target area to query.
 */
export declare function getViewportElementDimension(area?: 'header' | 'main' | 'footer'): DOMRect | null;
declare const _load: typeof load;
declare const _get: typeof get;
declare const _setScaleMode: typeof setScaleMode;
declare const _addViewportElement: typeof addViewportElement;
declare const _removeViewportElement: typeof removeViewportElement;
declare const _getViewportElementDimension: typeof getViewportElementDimension;
declare global {
    namespace TcHmi {
        /**
         * Provides functions to set partials as view.
         * @preserve (Part of the public API)
         */
        namespace View {
            let load: typeof _load;
            let get: typeof _get;
            let setScaleMode: typeof _setScaleMode;
            let addViewportElement: typeof _addViewportElement;
            let removeViewportElement: typeof _removeViewportElement;
            let getViewportElementDimension: typeof _getViewportElementDimension;
        }
    }
}
export {};
//# sourceMappingURL=View.d.ts.map