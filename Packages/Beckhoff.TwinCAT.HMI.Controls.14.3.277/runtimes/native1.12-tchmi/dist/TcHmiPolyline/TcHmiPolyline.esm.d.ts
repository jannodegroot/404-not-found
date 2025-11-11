import { Control as TcHmiPolygon } from '../TcHmiPolygon/TcHmiPolygon.esm.js';
declare class TcHmiPolyline extends TcHmiPolygon {
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
//# sourceMappingURL=TcHmiPolyline.esm.d.ts.map