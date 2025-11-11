export {};
declare global {
    namespace TcHmi {
        let version: TcHmi.Version;
        /**
         * Deprecated. Please use TcHmi.Controls.get()
         * @deprecated Please use TcHmi.Controls.get()
         */
        let control: TcHmi.Dictionary<TcHmi.Controls.System.baseTcHmiControl>;
        /**
         * Reserved
         */
        let Control: never;
    }
}
//# sourceMappingURL=Control.d.ts.map