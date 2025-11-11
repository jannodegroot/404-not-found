import * as Server from './Server.js';
import { ACCESS as ServerACCESS } from './Server.js';
/**
 * Add a new user with a given password
 * @param userName Username to add.
 * @param password Password for the new user.
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function addUser(userName: string, password: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Add a new user with a given password
 * @param userName Username to add.
 * @param password Password for the new user.
 * @param options Optional details for this new user.
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function addUserEx(userName: string, password: string, options?: Partial<IUserDetails> | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all usernames as a string array
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listUsernames(callback?: null | ((this: void, data: IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all usernames as a string array
 * @param options Options
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listUsernamesEx(options?: IUserManagementOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all username as a dictionary with all meta data
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listUsers(callback?: null | ((this: void, data: IUserResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all username as a dictionary with all meta data
 * @param options Options
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listUsersEx(options?: IUserManagementOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IUserResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all user groups as a dictionary with all meta data
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listUserGroups(callback?: null | ((this: void, data: IGroupResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all user groups as a dictionary with all meta data
 * @param _options (not used till now)
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listUserGroupsEx(_options?: TcHmi.Dictionary<never> | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IGroupResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all user group names as a string array.
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listUserGroupNames(callback?: null | ((this: void, data: GroupNamesResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all user group names as a string array.
 * @param _options (not used till now)
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listUserGroupNamesEx(_options?: TcHmi.Dictionary<never> | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: GroupNamesResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all users of a group as a string array
 * @param groupName group name to check
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listUsersInGroup(groupName: string, callback?: null | ((this: void, data: IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all users of a group as a string array
 * @param groupName group name to check
 * @param options Options
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listUsersInGroupEx(groupName: string, options?: IUserManagementOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IUsernameListResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Removes a user
 * @param userName user name to remove
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function removeUser(userName: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Removes a user
 * @param userName user name to remove
 * @param options Options
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function removeUserEx(userName: string, options?: IUserManagementOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Update user config
 * @param userName Username to update.
 * @param options Details for this user.
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateUser(userName: string | null, options: IUpdateUserDetails | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Update user config
 * @param userName Username to update.
 * @param options Details for this user.
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateUserEx(userName: string | null, options: IUpdateUserDetails | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Check access rights for usermanagement functions
 * @param options Option for setting usermanagement domain
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getApiAccess(options: IUserManagementOptions | null, callback?: null | ((this: void, data: IApiAccessResultObject) => void)): TcHmi.IErrorDetails;
export interface IUserManagementOptions {
    /** Domain of the user management. defaults to TcHmiUserManagement */
    domain?: string;
}
export interface IBaseUserDetails extends IUserManagementOptions {
    /** A user can be disabled or enabled. Setting this needs access to symbol 'DisableUser' or 'EnableUser'. */
    enabled: boolean;
    /** ISO8601 TimeSpan for logout after user interaction. Setting this needs access to symbol 'AddOrChangeUser'. */
    autoLogout: string;
    /** Locale of this user. 'client' and 'project' are special values for project global or browser. */
    locale?: string;
    /** Locale of this user for date formatting. 'client' and 'project' are special values for project global or browser. */
    timeFormatLocale?: string;
    /** Time zone of this user. 'client' and 'project' are special values for project global or browser. */
    timeZone?: string;
}
export interface IUserDetails extends IBaseUserDetails {
    /** list of groups the user is part of */
    groups: string[];
}
export interface IUpdateUserDetails extends Partial<IBaseUserDetails> {
    /** New username for this user. Access to symbol 'RenameUser' needed. */
    newName?: string;
    /** New password for the user. */
    password?: string;
    /** Current password for the user (needed if the user wants to change the password of itself). */
    currentPassword?: string;
    /** List of new groups the user will be part of. Access to symbol 'AddOrChangeUser' needed. */
    addGroups?: string[];
    /** List of groups the user will be removed. Access to symbol 'AddOrChangeUser' needed. */
    removeGroups?: string[];
}
/** userList: string[]; */
export interface IUsernameListResultObject extends TcHmi.IResultObject {
    userList?: string[];
}
/** userDetails: TcHmi.Dictionary<IUserDetails>; */
export interface IUserResultObject extends TcHmi.IResultObject {
    userDetails?: TcHmi.Dictionary<IUserDetails>;
}
export interface IGroupDetails {
    /** a group can be disabled */
    enabled: boolean;
    fileAccess: ServerACCESS;
    files: TcHmi.Dictionary<ServerACCESS>;
    symbolAccess: ServerACCESS;
    symbols: TcHmi.Dictionary<ServerACCESS>;
}
export interface IGroupResultObject extends TcHmi.IResultObject {
    groupDetailsList?: TcHmi.Dictionary<IGroupDetails>;
}
export interface GroupNamesResultObject extends TcHmi.IResultObject {
    groupNames?: string[];
}
export interface IApiAccessResultObject extends TcHmi.IResultObject {
    result?: {
        addUser: {
            general: boolean;
            enable: boolean;
            locale: boolean;
            timeFormatLocale: boolean;
            timeZone: boolean;
            autoLogoff: boolean;
            groups: boolean;
        };
        listUserNames: {
            general: boolean;
        };
        listUsers: {
            general: boolean;
            enabled: boolean;
            locale: boolean;
            timeFormatLocale: boolean;
            timeZone: boolean;
            autoLogoff: boolean;
            groups: boolean;
        };
        listUserGroupNames: {
            general: boolean;
        };
        listUserGroups: {
            general: boolean;
            enabled: boolean;
            fileAccess: boolean;
            files: boolean;
            symbolAccess: boolean;
            symbols: boolean;
        };
        listUsersInGroup: {
            general: boolean;
        };
        removeUser: {
            general: boolean;
        };
        updateUser: {
            general: boolean;
            newName: boolean;
            addGroups: boolean;
            removeGroups: boolean;
            enabled: boolean;
            autoLogout: boolean;
            locale: boolean;
            timeFormatLocale: boolean;
            timeZone: boolean;
            changeOwnPassword: boolean;
            changePassword: boolean;
        };
    };
}
declare const _addUser: typeof addUser;
declare const _addUserEx: typeof addUserEx;
declare const _listUsernames: typeof listUsernames;
declare const _listUsernamesEx: typeof listUsernamesEx;
declare const _listUsers: typeof listUsers;
declare const _listUsersEx: typeof listUsersEx;
declare const _listUserGroups: typeof listUserGroups;
declare const _listUserGroupsEx: typeof listUserGroupsEx;
declare const _listUserGroupNames: typeof listUserGroupNames;
declare const _listUserGroupNamesEx: typeof listUserGroupNamesEx;
declare const _listUsersInGroup: typeof listUsersInGroup;
declare const _listUsersInGroupEx: typeof listUsersInGroupEx;
declare const _removeUser: typeof removeUser;
declare const _removeUserEx: typeof removeUserEx;
declare const _updateUser: typeof updateUser;
declare const _updateUserEx: typeof updateUserEx;
declare const _getApiAccess: typeof getApiAccess;
type tIUserManagementOptions = IUserManagementOptions;
type tIBaseUserDetails = IBaseUserDetails;
type tIUserDetails = IUserDetails;
type tIUpdateUserDetails = IUpdateUserDetails;
type tIUsernameListResultObject = IUsernameListResultObject;
type tIUserResultObject = IUserResultObject;
type tIGroupDetails = IGroupDetails;
type tIGroupResultObject = IGroupResultObject;
type tGroupNamesResultObject = GroupNamesResultObject;
type tIApiAccessResultObject = IApiAccessResultObject;
declare global {
    namespace TcHmi.Server {
        /**
         * Provides functions for user management.
         * @preserve (Part of the public API)
         */
        namespace UserManagement {
            const addUser: typeof _addUser;
            const addUserEx: typeof _addUserEx;
            const listUsernames: typeof _listUsernames;
            const listUsernamesEx: typeof _listUsernamesEx;
            const listUsers: typeof _listUsers;
            const listUsersEx: typeof _listUsersEx;
            const listUserGroups: typeof _listUserGroups;
            const listUserGroupsEx: typeof _listUserGroupsEx;
            const listUserGroupNames: typeof _listUserGroupNames;
            const listUserGroupNamesEx: typeof _listUserGroupNamesEx;
            const listUsersInGroup: typeof _listUsersInGroup;
            const listUsersInGroupEx: typeof _listUsersInGroupEx;
            const removeUser: typeof _removeUser;
            const removeUserEx: typeof _removeUserEx;
            const updateUser: typeof _updateUser;
            const updateUserEx: typeof _updateUserEx;
            const getApiAccess: typeof _getApiAccess;
            type IUserManagementOptions = tIUserManagementOptions;
            type IBaseUserDetails = tIBaseUserDetails;
            type IUserDetails = tIUserDetails;
            type IUpdateUserDetails = tIUpdateUserDetails;
            type IUsernameListResultObject = tIUsernameListResultObject;
            type IUserResultObject = tIUserResultObject;
            type IGroupDetails = tIGroupDetails;
            type IGroupResultObject = tIGroupResultObject;
            type GroupNamesResultObject = tGroupNamesResultObject;
            type IApiAccessResultObject = tIApiAccessResultObject;
        }
    }
}
export {};
//# sourceMappingURL=Server.UserManagement.d.ts.map