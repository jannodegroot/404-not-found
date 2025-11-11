import type * as PopupProvider from '../API/UiProvider.PopupProvider';
export declare function add(symbol: PopupProvider.IwpSymbol, options?: PopupProvider.IwpOptions | null, parentControl?: TcHmi.Controls.System.baseTcHmiControl | null): Item;
export declare function remove(id: number): void;
export interface Item {
    id: number;
    promise: Promise<{
        isOk: true;
        value: PopupProvider.IwpValue;
    } | {
        isOk: false;
        value?: PopupProvider.IwpValue;
    }>;
}
//# sourceMappingURL=InteractiveWrite.Queue.d.ts.map