/**
 * Checks if a right is allowed for the current user on this control or its parents
 * Rules for granting access:
 * - Designer Mode Master => true
 * - Server Auth is not restricted (IsAuthRequired == false in Server) => TRUE
 * - Server Auth is not known right now => null
 * - Server Auth loading error => false
 * - On this control: 1 Group  has  ALLOW => TRUE
 * - On this control: 0 Groups have ALLOW, but 1 Group has DENY => FALSE
 * - On this control: 0 Groups have ALLOW, 0 Groups have DENY => Ask Parent
 * - use control default of the bottom most control with this right. TcHmi.Controls.System.TcHmiView has operate/observe set to TRUE
 * - control has no parent (detached control) => null
 * @param control Control to check
 * @param requestedAccessright name of the access right
 * @returns Returns true/false or null if the state is not known right now
 * @preserve (Part of the public API)
 */
export declare function checkAccess(control: Readonly<TcHmi.Controls.System.baseTcHmiControl>, requestedAccessright: string): boolean | null;
/**
 * Overrides a control access right to Deny state. Call with null to release the force again.
 * @param control Control to check
 * @param accessrightToOverride name of the access right
 * @param forcedRight 'Deny' or null to release
 */
export declare function setControlRightOverride(control: Readonly<TcHmi.Controls.System.baseTcHmiControl>, accessrightToOverride: string, forcedRight: 'Deny' | null): boolean;
/**
 * Returns a Set with a list of all overridden deny rights for a control.
 * Gives an empty Set when no right is overridden.
 * @param control Control to check
 */
export declare function getControlRightOverrides(control: Readonly<TcHmi.Controls.System.baseTcHmiControl>): Set<string>;
declare const _checkAccess: typeof checkAccess;
declare const _setControlRightOverride: typeof setControlRightOverride;
declare const _getControlRightOverrides: typeof getControlRightOverrides;
declare global {
    namespace TcHmi {
        /**
         * Provides functions for checking rights.
         * @preserve (Part of the public API)
         */
        namespace Access {
            const checkAccess: typeof _checkAccess;
            const setControlRightOverride: typeof _setControlRightOverride;
            const getControlRightOverrides: typeof _getControlRightOverrides;
        }
    }
}
export {};
//# sourceMappingURL=Access.d.ts.map