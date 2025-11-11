/**
 * Starts a globally configured interval.
 * @param name The name of the interval to start.
 */
export declare function start(name: string): void;
/**
 * Stops a globally configured interval.
 * @param name The name of the interval to stop.
 */
export declare function stop(name: string): void;
declare const _start: typeof start;
declare const _stop: typeof stop;
declare global {
    namespace TcHmi {
        /**
         * Provides functionality to control global intervals.
         * @preserve (Part of the public API)
         */
        namespace Interval {
            const start: typeof _start;
            const stop: typeof _stop;
        }
    }
}
export {};
//# sourceMappingURL=Interval.d.ts.map