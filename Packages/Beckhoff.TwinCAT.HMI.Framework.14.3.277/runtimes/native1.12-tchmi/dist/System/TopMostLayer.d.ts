import type { IOptionsEx, IElemRemoveResultObject, IOptions, IResizeResultObject } from '../API/TopMostLayer.js';
export declare class TopMostLayer {
    /**
     */
    constructor();
    private readonly __containerDivs;
    /**
     * Appends the elements to the top layer above the normal visualization
     * A reference to the element should be kept to be able to call remove() function
     * The parent element will be a div with style="width:<browserwindowwidth>;height:<browserwindowheight>;"
     * Your element could have style="min-width:50%;min-height:50%;"
     * @param origin control which requests this or null if from codebehind
     * @param element HTML element or jQuery Collection with exactly one element which should be moved to TopMostLayer
     * @param options Optional options
     * @returns boolean success of the add
     */
    add(origin: TcHmi.Controls.System.baseTcHmiControl | typeof globalThis, element: HTMLElement | JQuery | undefined | null, options?: IOptions | IOptionsEx): boolean;
    /**
     * Removes the element from the top layer and returns it for later use by the caller
     * If the element is not inside the TopMostLayer it will be returned without change.
     * @param origin control which requests this or null if from codebehind
     * @param element HTML element or jQuery Collection with the element which should be removed from TopMostLayer
     * @returns The HTML element or jQuery Collection which was removed.
     */
    remove<E extends HTMLElement | JQuery>(_origin: TcHmi.Controls.System.baseTcHmiControl | typeof globalThis, element: E, cancel: boolean): E;
}
/** all options and css backup of an element */
export interface ICtrlMetaData<E extends HTMLElement | JQuery> extends IOptions<E> {
    resizeCb?: ((this: TcHmi.Controls.System.baseTcHmiControl | typeof globalThis, data: IResizeResultObject<E>) => void) | null;
    removeCb?: ((this: TcHmi.Controls.System.baseTcHmiControl | typeof globalThis, data: IElemRemoveResultObject<E>) => void) | null;
    styleBackup?: Pick<CSSStyleDeclaration, 'left' | 'top' | 'position'>;
    /** control which requests this or null if from codebehind */
    origin: TcHmi.Controls.System.baseTcHmiControl | typeof globalThis;
    container: HTMLElement;
    elementsAbove: Set<Node>;
    justAboveReference?: Node;
    wantsToBeBottomMost: boolean;
    originalElement: E;
}
/** Runtime Manager */
export declare const topMostLayer: TopMostLayer;
//# sourceMappingURL=TopMostLayer.d.ts.map