
declare class TcHmiPolyline extends TcHmi.Controls.Beckhoff.TcHmiPolygon {
    #private;
}
export { TcHmiPolyline as Control };
declare const _TcHmiPolyline: typeof TcHmiPolyline;
type tTcHmiPolyline = TcHmiPolyline;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiPolyline: typeof _TcHmiPolyline;
        type TcHmiPolyline = tTcHmiPolyline;
    }
}
