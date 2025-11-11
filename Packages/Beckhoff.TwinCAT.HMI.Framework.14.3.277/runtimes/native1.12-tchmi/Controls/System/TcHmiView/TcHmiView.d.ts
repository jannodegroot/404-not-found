
declare class TcHmiView extends TcHmi.Controls.System.TcHmiPartial {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /**
     * Shows/hides the control depending of the current 'observe' right
     */
    __processAccessConfig(): void;
}
export { TcHmiView as Control };
declare const _TcHmiView: typeof TcHmiView;
type tTcHmiView = TcHmiView;
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiView: typeof _TcHmiView;
        type TcHmiView = tTcHmiView;
    }
}
