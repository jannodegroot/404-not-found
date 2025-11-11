/**
 * Creates a Task object which links callstacks
 * ref https://developer.chrome.com/docs/devtools/console/api/#createtask
 * https://developer.chrome.com/blog/devtools-better-angular-debugging/
 * Linking can be disabled with friendlyName set to false.
 * This can be useful to reduce callstack with active devTools
 * @param friendlyName Name for the callstack entry
 * @returns
 */
export declare function createTask(friendlyName: string | false): Task;
/**
 * Interface for a call wrapper
 */
export interface Task {
    run<T>(f: () => T): T;
}
//# sourceMappingURL=Callback.d.ts.map