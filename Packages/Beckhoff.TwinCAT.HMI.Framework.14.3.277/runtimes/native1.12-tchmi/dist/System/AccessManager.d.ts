import * as Server from '../API/Server.js';
export declare class AccessManager {
    /**
     */
    constructor();
    /**
     * Overrides a control access right to Deny state. Call with null to release the force again.
     * @param control
     * @param accessrightToOverride name of the access right
     * @param forcedRight
     */
    setControlRightOverride(control: Readonly<TcHmi.Controls.System.baseTcHmiControl>, accessrightToOverride: string, forcedRight: 'Deny' | null): void;
    /**
     * Returns a Set with a list of all overridden deny rights for a control.
     * Gives an empty Set when no right is overridden.
     * @param control Control to check
     */
    getControlRightOverrides(control: Readonly<TcHmi.Controls.System.baseTcHmiControl>): Set<string>;
    /**
     * Get current user config
     */
    getCurrentUserConfig(): Server.UserConfigOnServer;
    /**
     * Reload on next logout aka user change to '__SystemGuest'
     * @param value Reload hmi after session login/logout
     */
    enableReload(value: boolean): void;
    /**
     * Returns true if the AccessManager has loaded server user data for at least the first time and is ready to use.
     */
    isReady(): boolean;
    /**
     * Unsubscribe from server symbols required for user related access handling.
     */
    unsubscribe(callback?: (this: void, data: TcHmi.IResultObject) => void): void;
    /**
     * Subscribe to server symbols required for user related access handling.
     * @param callback Will be called after successful register of the subscription
     */
    subscribe(callback?: (this: void, data: TcHmi.IResultObject) => void): void;
    /**
     * Checks if a right is allowed for the current user on this control or its parents
     * Rules for granting access:
     *      - Designer Mode Master => true
     *      - Server Auth is not restricted (IsAuthRequired == false in Server) => TRUE
     *      - Server Auth is not known right now => null
     *      - Server Auth loading error => false
     *      - On this control: 1 Group  has  ALLOW, 0-n Group have DENY => TRUE
     *      - On this control: 0 Groups have ALLOW, but 1 Group has DENY => FALSE
     *      - On this control: 0 Groups have ALLOW, 0 Groups have DENY => Ask Parent
     *      - use control default of the bottom most control with this right. TcHmi.Controls.System.TcHmiView has operate/observe set to TRUE
     *      - control has no parent (detached control) => null
     * @param control Control to check
     * @param requestedAccessright name of the access right
     * @returns true/false or null if the state is not known right now
     */
    checkAccess(control: Readonly<TcHmi.Controls.System.baseTcHmiControl>, requestedAccessright: string): boolean | null;
    /** Logout is async because of subscription handling. */
    private __logoutSent;
}
/** Runtime Manager */
export declare const accessManager: AccessManager;
//# sourceMappingURL=AccessManager.d.ts.map