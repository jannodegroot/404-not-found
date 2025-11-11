import type { ConflictResolution } from './TopMostLayer.js';
import { BaseProvider } from './UiProvider.js';
import type * as Server from './Server.js';
export type BackgroundAction<A extends string> = {
    close: false;
} | {
    close: true;
    action?: A;
};
export type PromptAction<A extends string> = {
    action?: A;
};
export declare enum PositioningMode {
    Centered = 1,
    Floating = 2
}
export declare enum BackgroundMode {
    None = 1,
    Dimmed = 2
}
export interface Bounds {
    width?: number | null;
    widthUnit?: 'px' | '%';
    height?: number | null;
    heightUnit?: 'px' | '%';
    left?: number | null;
    leftUnit?: 'px' | '%';
    top?: number | null;
    topUnit?: 'px' | '%';
    bottom?: number | null;
    bottomUnit?: 'px' | '%';
    right?: number | null;
    rightUnit?: 'px' | '%';
}
export interface StorageSettings {
    /** The name of the storage instance. */
    name: string;
    /** Defines if the last bounds after moving the popup will be restored when opened the next time. */
    restoreBounds?: boolean;
}
/**
 * A generic popup
 * @template T A popup prompt() will result with this value type
 */
export declare abstract class Popup<T = any> {
    /**
     * Handles callbacks to get called after the popup is shown
     */
    abstract onShow: {
        add: (callback: () => void) => TcHmi.DestroyFunction;
        remove: (callback: () => void) => void;
    };
    /**
     * Handles callbacks to get called after the popup is hidden.
     */
    abstract onHide: {
        add: (callback: () => void) => TcHmi.DestroyFunction;
        remove: (callback: () => void) => void;
    };
    /**
     * Handles callbacks to get called after position or size has changed
     */
    abstract onBoundsChange: {
        add: (callback: (data: {
            /** Bounds in UiProvider coordinates */
            bounds: Bounds | null;
        }) => void) => TcHmi.DestroyFunction;
        remove: (callback: (data: {
            /** Bounds in UiProvider coordinates */
            bounds: Bounds | null;
        }) => void) => void;
    };
    /**
     * Base constructor
     */
    constructor();
    abstract destroy(): void;
    /**
     * Shows the popup.
     */
    abstract show(): void;
    /**
     * Hides the popup.
     */
    abstract hide(): void;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    abstract prompt(): Promise<T>;
    /**
     * Aborts a prompted popup and rejects the promise.
     * @param action The action to perform to answer the prompt.
     */
    abstract abort(action?: PromptAction<string>): void;
    /**
     * Sets texts which can either be localizable or static.
     */
    abstract setTexts(texts: Partial<Popup.LocalizableTexts>): void;
    /**
     * Sets the background action.
     * @param action
     */
    abstract setBackgroundAction(action: BackgroundAction<string>): void;
    /**
     * Sets the background mode of the TopMostLayer used for displaying the popup.
     * @param mode
     */
    abstract setBackgroundMode(mode: BackgroundMode): void;
    /**
     * Sets the positioning mode of the popup in the TopMostLayer.
     * @param mode
     */
    abstract setPositioningMode(mode: PositioningMode): void;
    /**
     * Sets the bounds of the popup. Does only have any effect if PositioningMode.Floating is used.
     * @param bounds
     */
    abstract setBounds(bounds: Bounds): void;
    /**
     * Sets the movable option.
     * Does only have an effect when setPositioningMode is also set:
     * `popup.setPositioningMode(TcHmi.UiProvider.PositioningMode.Floating)`
     */
    abstract setMovable(movable: boolean): void;
    /**
     * Determines if the popup is currently showing or not.
     */
    abstract isShowing(): boolean;
    /**
     * Sets the local storage settings.
     */
    abstract setStorageSettings(settings: StorageSettings): void;
    /**
     * Resets the size and position of the Popup and clears that data from localStorage.
     */
    abstract resetBounds(): void;
    /**
     * Sets if the close button should be used or not.
     * @param closeButton
     */
    abstract setCloseButton(closeButton: boolean): void;
    /**
     * Sets what action to take to answer the prompt when the close button is clicked.
     * @param action The action to take to answer the prompt, or null if the prompt should not be answered
     * in that case.
     */
    setCloseButtonAction?(action: PromptAction<string> | null): void;
    /**
     * Display the popup just above the given reference element.
     * @param reference The popup will be as close as possible in the TopMostLayer stack to this element.
     * @param conflictResolution If there are multiple elements that want to be just above the reference, you can
     * specify in which direction conflicts should be resolved. Defaults to Up.
     */
    setJustAbove?(reference: Element, conflictResolution?: ConflictResolution): void;
    /**
     * Reset the justAbove handling.
     * @param reference Pass null to reset the justAbove handling.
     */
    setJustAbove?(reference: null): void;
    /**
     * Returns whether the popup is currently being interacted with by mouse, touch or keyboard.
     */
    hasActiveUserInteraction?(): boolean;
    /**
     * Gets the root element of the popup.
     */
    getElement?(): HTMLElement;
}
export declare namespace Popup {
    interface LocalizableTexts {
        headerText: TcHmi.Localizable;
        buttons: TcHmi.Dictionary<{
            text?: TcHmi.Localizable;
            tooltip?: TcHmi.Localizable;
        }>;
    }
}
/**
 * A generic MessageBox
 * @template T A popup prompt() will result with this value type
 */
export declare abstract class MessageBox<T = any> extends Popup<T> {
    /**
     * Handles callbacks to get called when a button is pressed
     */
    onButtonPressed?: {
        add: (callback: (name: string, value: T) => void) => TcHmi.DestroyFunction;
        remove: (callback: (name: string, value: T) => void) => void;
    };
    /**
     * Base constructor
     */
    constructor();
    /**
     * Aborts a prompted popup and rejects the promise.
     * @param action The action to perform to answer the prompt.
     */
    abstract abort(action?: MbPromptAction<T>): void;
    /**
     * Sets texts which can either be localizable or static.
     */
    abstract setTexts(texts: Partial<MbLocalizableTexts>): void;
    /**
     * Sets the background action.
     * @param action
     */
    abstract setBackgroundAction(action: MbBackgroundAction<T>): void;
    /**
     * Sets what action to take to answer the prompt when the close button is clicked.
     * @param action The action to take to answer the prompt, or null if the prompt should not be answered
     * in that case.
     */
    setCloseButtonAction?(action: MbPromptAction<T> | null): void;
}
export interface MbLocalizableTexts extends Popup.LocalizableTexts {
    contentText: TcHmi.Localizable;
}
export type MbBackgroundAction<R = any> = BackgroundAction<string> | {
    close: true;
    result: R;
};
export type MbPromptAction<R = any> = PromptAction<string> | {
    result: R;
};
/**
 * A generic HtmlElementBox
 * @template T A popup prompt() will result with this value type
 */
export declare abstract class HtmlElementBox<T = any> extends Popup<T> {
    /**
     * Handles callbacks to get called when a button is pressed
     */
    onButtonPressed?: {
        add: (callback: (name: string, value: T) => void) => TcHmi.DestroyFunction;
        remove: (callback: (name: string, value: T) => void) => void;
    };
    /**
     * Base constructor
     */
    constructor();
    /**
     * Aborts a prompted popup and rejects the promise.
     * @param action The action to perform to answer the prompt.
     */
    abstract abort(action?: HebPromptAction<T>): void;
    /**
     * Sets the background action.
     * @param action
     */
    abstract setBackgroundAction(action: HebBackgroundAction<T>): void;
    /**
     * Sets what action to take to answer the prompt when the close button is clicked.
     * @param action The action to take to answer the prompt, or null if the prompt should not be answered
     * in that case.
     */
    setCloseButtonAction?(action: HebPromptAction<T> | null): void;
    /**
     * Sets the content.
     * @param element
     */
    abstract setContentElement(element: HTMLElement): void;
}
export type HebBackgroundAction<R = any> = BackgroundAction<string> | {
    close: true;
    result: R;
};
export type HebPromptAction<R = any> = PromptAction<string> | {
    result: R;
};
/**
 * A generic Inputprompt
 */
export declare abstract class InputPrompt extends Popup<{
    isOk: true;
    value: string;
} | {
    isOk: false;
}> {
    /**
     * Base constructor
     */
    constructor();
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    abstract prompt(forbiddenValues?: Iterable<string> | null, defaultValue?: string): Promise<{
        isOk: true;
        value: string;
    } | {
        isOk: false;
    }>;
    /**
     * Aborts a prompted popup and rejects the promise.
     * @param action The action to perform to answer the prompt.
     */
    abstract abort(action?: IpPromptAction): void;
    /**
     * Sets the background action.
     * @param action
     */
    abstract setBackgroundAction(action: IpBackgroundAction): void;
    /**
     * Sets what action to take to answer the prompt when the close button is clicked.
     * @param action The action to take to answer the prompt, or null if the prompt should not be answered
     * in that case.
     */
    setCloseButtonAction?(action: IpPromptAction | null): void;
    /**
     * Sets texts which can either be localizable or static.
     */
    abstract setTexts(texts: Partial<IpLocalizableTexts>): void;
}
export interface IpLocalizableTexts extends Popup.LocalizableTexts {
    labelText: TcHmi.Localizable;
    headerText: TcHmi.Localizable;
}
export type IpBackgroundAction = BackgroundAction<'ok' | 'cancel'>;
export type IpPromptAction = PromptAction<'ok' | 'cancel'>;
/**
 * InteractiveWritePrompt
 */
export declare abstract class InteractiveWritePrompt extends Popup<{
    isOk: true;
    value: IwpValue;
} | {
    isOk: false;
    value?: IwpValue;
}> {
    /**
     * Base constructor
     */
    constructor();
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    abstract prompt(): Promise<{
        isOk: true;
        value: IwpValue;
    } | {
        isOk: false;
        value?: IwpValue;
    }>;
    /**
     * Aborts a prompted popup and rejects the promise.
     * @param action The action to perform to answer the prompt.
     */
    abstract abort(action?: IwpPromptAction): void;
    /**
     * Sets the background action.
     * @param action
     */
    abstract setBackgroundAction(action: IwpBackgroundAction): void;
    /**
     * Sets what action to take to answer the prompt when the close button is clicked.
     * @param action The action to take to answer the prompt, or null if the prompt should not be answered
     * in that case.
     */
    setCloseButtonAction?(action: IwpPromptAction | null): void;
}
export interface IwpSymbol {
    name: string;
    writeValue: any;
    comment?: string;
    metaData: IwpSymbolMetaData;
}
export interface IwpAuthOptions {
    usernameSelection?: 'Combobox' | 'Input';
    usernameSelected?: string;
}
export interface IwpOptions {
    requestOptions?: Server.IRequestOptions | null;
    authOptions?: IwpAuthOptions | null;
}
export interface IwpValue {
    result?: Server.IValueResultObject;
}
export interface IwpSymbolMetaData {
    reauthenticationRequired?: boolean;
    reviewerGroups?: string[];
    auditTrail?: {
        enabled?: boolean;
        commentRequired?: boolean;
    };
}
export type IwpBackgroundAction = BackgroundAction<'ok' | 'cancel'>;
export type IwpPromptAction = PromptAction<'ok' | 'cancel'>;
/**
 * Abstract class for all PopupProvider
 */
export declare abstract class PopupProvider extends BaseProvider {
    readonly type = "popup";
    /**
     * Create a new Popup provider.
     * @param providerName The name of this provider.
     */
    constructor(providerName: string);
    /**
     * Creates an instance of the MessageBox class which allows interaction with the underlying popup implementation.
     * @param header The localization for the header text.
     * @param content The localization for the content text.
     * @param buttons The buttons to show.
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     * @template T A popup prompt() will result with this value type
     */
    createMessageBox?<T>(header: TcHmi.Localizable, content: TcHmi.Localizable, buttons: TcHmi.Dictionary<{
        value: T;
        width: number;
        height: number;
        widthMode?: 'Value' | 'Content';
        heightMode?: 'Value' | 'Content';
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        textPadding?: TcHmi.FourSidedCss;
        text: TcHmi.Localizable;
        tooltip?: TcHmi.Localizable;
        keepPopupOpen?: boolean;
        actions?: TcHmi.Trigger.Action[];
    }>, parentControl?: TcHmi.Controls.System.baseTcHmiControl | null): MessageBox<T>;
    /**
     * Creates an instance of the HtmlElementBox class which allows interaction with the underlying popup implementation.
     * @param header The localization for the header text.
     * @param content The html content.
     * @param buttons The buttons to show.
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     * @template T A popup prompt() will result with this value type
     */
    createHtmlElementBox?<T>(header: TcHmi.Localizable, content: HTMLElement, buttons: TcHmi.Dictionary<{
        value: T;
        width: number;
        height: number;
        widthMode?: 'Value' | 'Content';
        heightMode?: 'Value' | 'Content';
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        textPadding?: TcHmi.FourSidedCss;
        text: TcHmi.Localizable;
        tooltip?: TcHmi.Localizable;
        keepPopupOpen?: boolean;
        actions?: TcHmi.Trigger.Action[];
    }>, parentControl?: TcHmi.Controls.System.baseTcHmiControl | null): HtmlElementBox<T>;
    /**
     * Creates an instance of the InputPrompt class which allows interaction with the underlying popup implementation.
     * @param header The localization for the header text.
     * @param label The localization for the label text.
     * @param validation Optional list of regex patterns that the input must or must not match
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     */
    createInputPrompt?(header: TcHmi.Localizable, label: TcHmi.Localizable, validation?: {
        pattern: RegExp;
        expectedTestResult: boolean;
    }[] | null, parentControl?: TcHmi.Controls.System.baseTcHmiControl | null): InputPrompt;
    /**
     * Creates an instance of the InteractiveWritePrompt class which allows interaction with the underlying popup implementation.
     * @param symbols A list of symbol data which is shown in the popup.
     * @param options Options
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     */
    createInteractiveWritePrompt?(symbol: IwpSymbol, options?: IwpOptions | null, parentControl?: TcHmi.Controls.System.baseTcHmiControl | null): InteractiveWritePrompt;
    static MessageBox: typeof MessageBox;
    static HtmlElementBox: typeof HtmlElementBox;
    static InputPrompt: typeof InputPrompt;
    static InteractiveWritePrompt: typeof InteractiveWritePrompt;
    static BackgroundMode: typeof BackgroundMode;
    static PositioningMode: typeof PositioningMode;
}
declare const _PopupProvider: typeof PopupProvider;
type tPopupProvider = PopupProvider;
type tBackgroundAction<A extends string> = BackgroundAction<A>;
type tPromptAction<A extends string> = PromptAction<A>;
type tBounds = Bounds;
type tStorageSettings = StorageSettings;
type tLocalizableTexts = Popup.LocalizableTexts;
type tMessageBox<T = any> = MessageBox<T>;
type tHtmlElementBox<T = any> = HtmlElementBox<T>;
type tInputPrompt = InputPrompt;
type tInteractiveWritePrompt = InteractiveWritePrompt;
declare global {
    namespace TcHmi.UiProvider {
        let PopupProvider: typeof _PopupProvider;
        type PopupProvider = tPopupProvider;
        namespace PopupProvider {
            type BackgroundAction<A extends string> = tBackgroundAction<A>;
            type PromptAction<A extends string> = tPromptAction<A>;
            type Bounds = tBounds;
            type StorageSettings = tStorageSettings;
            type LocalizableTexts = tLocalizableTexts;
            type MessageBox<T = any> = tMessageBox<T>;
            type HtmlElementBox<T = any> = tHtmlElementBox<T>;
            type InputPrompt = tInputPrompt;
            type InteractiveWritePrompt = tInteractiveWritePrompt;
            namespace MessageBox {
                type LocalizableTexts = MbLocalizableTexts;
                type BackgroundAction<R = any> = MbBackgroundAction<R>;
                type PromptAction<R = any> = MbPromptAction<R>;
            }
            namespace HtmlElementBox {
                type BackgroundAction<R = any> = HebBackgroundAction<R>;
                type PromptAction<R = any> = HebPromptAction<R>;
            }
            namespace InputPrompt {
                type LocalizableTexts = IpLocalizableTexts;
                type BackgroundAction = IpBackgroundAction;
                type PromptAction = IpPromptAction;
            }
            namespace InteractiveWritePrompt {
                type Symbol = IwpSymbol;
                type AuthOptions = IwpAuthOptions;
                type Options = IwpOptions;
                type Value = IwpValue;
                type SymbolMetaData = IwpSymbolMetaData;
                type BackgroundAction = IwpBackgroundAction;
                type PromptAction = IwpPromptAction;
            }
        }
    }
}
export {};
//# sourceMappingURL=UiProvider.PopupProvider.d.ts.map