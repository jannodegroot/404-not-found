/**
 * Appends the elements to the top layer above the normal visualization
 * A reference to the element should be kept to be able to call remove() function
 * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
 * Your element could have style="min-width:50%;min-height:50%;"
 * @param control Control which requests this. If no reference for justAbove is specified, the control element
 * will be used as the justAbove reference, with conflict resolution set to Up.
 * @param element HTML element which should be moved to TopMostLayer
 * @param options Optional options
 * @returns success of the add
 * @preserve (Part of the public API)
 */
export declare function add<E extends HTMLElement>(control: TcHmi.Controls.System.baseTcHmiControl, element: E | undefined | null, options?: IOptions<E>): boolean;
/**
 * Appends the elements to the top layer above the normal visualization
 * A reference to the element should be kept to be able to call remove() function
 * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
 * Your element could have style="min-width:50%;min-height:50%;"
 * @param control Control which requests this. If no reference for justAbove is specified, the control element
 * will be used as the justAbove reference, with conflict resolution set to Up.
 * @param element jQuery Collection with exactly one element which should be moved to TopMostLayer
 * @param options Optional options
 * @returns success of the add
 * @preserve (Part of the public API)
 */
export declare function add(control: TcHmi.Controls.System.baseTcHmiControl, element: JQuery | undefined | null, options?: IOptions): boolean;
/**
 * Removes the element from the top layer and returns it for later use by the caller
 * If the element is not inside the TopMostLayer it will be returned without change.
 * @param control control which requests this
 * @param element HTML element which should be removed from TopMostLayer
 * @returns The removed HTML element
 * @preserve (Part of the public API)
 */
export declare function remove<E extends HTMLElement>(control: TcHmi.Controls.System.baseTcHmiControl, element: E): E;
/**
 * Removes the element from the top layer and returns it for later use by the caller
 * If the element is not inside the TopMostLayer it will be returned without change.
 * @param control control which requests this
 * @param element jQuery Collection with the element which should be removed from TopMostLayer
 * @returns jQuery Collection
 * @preserve (Part of the public API)
 */
export declare function remove(control: TcHmi.Controls.System.baseTcHmiControl, element: JQuery): JQuery;
/**
 * Appends the elements to the top layer above the normal visualization (not control namespaced)
 * A reference to the element should be kept to be able to call remove() function
 * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
 * Your element could have style="min-width:50%;min-height:50%;"
 * @param element HTML element which should be moved to TopMostLayer
 * @param options Optional options
 * @returns success of the add
 * @preserve (Part of the public API)
 */
export declare function addEx<E extends HTMLElement>(element: E | undefined | null, options?: IOptionsEx<E>): boolean;
/**
 * Appends the elements to the top layer above the normal visualization (not control namespaced)
 * A reference to the element should be kept to be able to call remove() function
 * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
 * Your element could have style="min-width:50%;min-height:50%;"
 * @param element jQuery Collection with exactly one element which should be moved to TopMostLayer
 * @param options Optional options
 * @returns success of the add
 * @preserve (Part of the public API)
 */
export declare function addEx(element: JQuery | undefined | null, options?: IOptionsEx): boolean;
/**
 * Removes the element from the top layer and returns it for later use by the caller (not control namespaced)
 * If the element is not inside the TopMostLayer it will be returned without change.
 * @param element HTML element which should be removed from TopMostLayer
 * @returns The removed HTML element
 * @preserve (Part of the public API)
 */
export declare function removeEx<E extends HTMLElement>(element: E): E;
/**
 * Removes the element from the top layer and returns it for later use by the caller (not control namespaced)
 * If the element is not inside the TopMostLayer it will be returned without change.
 * @param element jQuery Collection with the element which should be removed from TopMostLayer
 * @returns jQuery Collection
 * @preserve (Part of the public API)
 */
export declare function removeEx(element: JQuery): JQuery;
export interface IOptionsBase {
    /** Center the element on the screen. Default is false. */
    centerHorizontal?: boolean | null | undefined;
    /** Center the element on the screen. Default is false. */
    centerVertical?: boolean | null | undefined;
    /** Should the overlay be darken over the background. Default is true. */
    dimBackground?: boolean | null | undefined;
    /** Prevents pointer events from passing through the overlay and prohibits interaction with elements behind the overlay. Default is true. */
    modal?: boolean | null | undefined;
    /** Should a click on the overlay close the TopMostLayer? Default is true. */
    closeOnBackground?: boolean | null | undefined;
    /** All further calls moves element to top instead of abort. Default is false. */
    allowMultipleCall?: boolean;
    /**
     * Add to the TopMostLayer just above the reference element. This will result in the added element being as
     * low as possible in the TopMostLayer order while still being above the reference. If two or more elements
     * want to be the lowest element you can specify the conflict resolution behavior to either insert the newly
     * added element above or below the other elements that want to be at the bottom. If the conflict resolution
     * is not specifed it defaults to Up, which results in conflicting elements being inserted so that the last
     * added element is at the highest postion of all conflicting elements.
     */
    justAbove?: {
        reference: Element;
        conflictResolution?: ConflictResolution;
    };
}
export declare enum ConflictResolution {
    Up = 0,
    Down = 1
}
/**
 * Options for control based API
 */
export interface IOptions<E extends HTMLElement | JQuery = JQuery> extends IOptionsBase {
    /**
     * Callback which will be called when the element has been potentially being resized.
     * Its parameter gets information about the parents dimension.
     */
    resizeCb?: ((this: TcHmi.Controls.System.baseTcHmiControl, data: IResizeResultObject<E>) => void) | null | undefined;
    /**
     * Callback which will be called when the element has been removed.
     * Its parameter has information if the element was not removed by a
     * remove API call but for example with a click beside the element.
     */
    removeCb?: ((this: TcHmi.Controls.System.baseTcHmiControl, data: IElemRemoveResultObject<E>) => void) | null | undefined;
}
/**
 * Options for non-control based API
 */
export interface IOptionsEx<E extends HTMLElement | JQuery = JQuery> extends IOptionsBase {
    /** Callback which will be called when the element has been potentially being resized */
    resizeCb?: ((this: typeof globalThis, data: IResizeResultObject<E>) => void) | null | undefined;
    /** Callback which will be called when the element has been removed*/
    removeCb?: ((this: typeof globalThis, data: IElemRemoveResultObject<E>) => void) | null | undefined;
}
export interface IResizeResultObject<E extends HTMLElement | JQuery = JQuery> extends TcHmi.IResultObject {
    /** The given element in the TopMostLayer */
    element: E;
    parentPixelSize: {
        width: number;
        height: number;
    };
}
export interface IElemRemoveResultObject<E extends HTMLElement | JQuery = JQuery> extends TcHmi.IResultObject {
    /** The detached element which was in the TopMostLayer */
    element: E;
    /** The removal was NOT triggered by an API call but for example by user click beside the element. */
    canceled: boolean;
}
declare const _add: typeof add;
declare const _remove: typeof remove;
declare const _addEx: typeof addEx;
declare const _removeEx: typeof removeEx;
type tIOptionsBase = IOptionsBase;
declare const _ConflictResolution: typeof ConflictResolution;
type tConflictResolution = ConflictResolution;
type tIOptions<E extends HTMLElement | JQuery = JQuery> = IOptions<E>;
type tIOptionsEx<E extends HTMLElement | JQuery = JQuery> = IOptionsEx<E>;
type tIResizeResultObject<E extends HTMLElement | JQuery = JQuery> = IResizeResultObject<E>;
type tIElemRemoveResultObject<E extends HTMLElement | JQuery = JQuery> = IElemRemoveResultObject<E>;
declare global {
    namespace TcHmi {
        /**
         * Provides a layer to show elements above the normal visualization.
         * @preserve (Part of the public API)
         */
        namespace TopMostLayer {
            const add: typeof _add;
            const remove: typeof _remove;
            const addEx: typeof _addEx;
            const removeEx: typeof _removeEx;
            type IOptionsBase = tIOptionsBase;
            const ConflictResolution: typeof _ConflictResolution;
            type ConflictResolution = tConflictResolution;
            type IOptions<E extends HTMLElement | JQuery = JQuery> = tIOptions<E>;
            type IOptionsEx<E extends HTMLElement | JQuery = JQuery> = tIOptionsEx<E>;
            type IResizeResultObject<E extends HTMLElement | JQuery = JQuery> = tIResizeResultObject<E>;
            type IElemRemoveResultObject<E extends HTMLElement | JQuery = JQuery> = tIElemRemoveResultObject<E>;
        }
    }
}
export {};
//# sourceMappingURL=TopMostLayer.d.ts.map