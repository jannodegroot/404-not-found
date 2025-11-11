import './API/Access.js';
import './API/Animation.js';
import './API/Base64BinaryReader.js';
import './API/Base64BinaryWriter.js';
import './API/Binding.js';
import './API/Callback.js';
import './API/Config.js';
import './API/Control.js';
import './API/ControlFactory.js';
import './API/Controls.js';
import './API/Decorators.js';
import './API/DialogManager.js';
import './API/Engineering.ErrorPane.js';
import './API/Environment.js';
import './API/EventProvider.js';
import './API/Exception.js';
import './API/FileUploader.js';
import './API/FilterInstance.js';
import './API/Function.js';
import './API/Functions.js';
import './API/Interval.js';
import './API/Keyboard.js';
import './API/List.js';
import './API/LocalStorage.js';
import './API/Locale.js';
import './API/Localization.js';
import './API/Log.Controls.js';
import './API/Log.js';
import './API/ObjectPath.js';
import './API/Server.ADS.js';
import './API/Server.AuditTrail.js';
import './API/Server.Domains.js';
import './API/Server.Events.js';
import './API/Server.Historize.js';
import './API/Server.RecipeManagement.js';
import './API/Server.UserManagement.js';
import './API/Server.js';
import './API/StyleProvider.js';
import './API/Symbol.js';
import './API/SymbolExpression.js';
import './API/TcSpeech.js';
import './API/Theme.Properties.js';
import './API/Theme.Resources.js';
import './API/Theme.js';
import './API/TimedAsyncTask.js';
import './API/TopMostLayer.js';
import './API/Trigger.Actions.js';
import './API/Type.Schema.js';
import './API/Type.js';
import './API/UiProvider.KeyboardProvider.js';
import './API/UiProvider.PopupProvider.js';
import './API/UiProvider.js';
import './API/ValueConverter.js';
import './API/View.js';
import './API/_TypeGuards.IFunction.js';
import './API/_TypeGuards.Trigger.js';
import './API/_TypeGuards.js';
import './System/AutomationCommandManager.js';
import './System/SymbolEventHandler.js';
export declare function printGeneralLogInformation(): void;
export declare function printForcedLogInformation(): void;
export declare let __initStep: INIT_STATE;
/**
 * Use control and project data from indexedDb.
 * Could be set to false if last user was different, because file access rights could be different.
 */
export declare let __fetchFromIndexedDb: boolean;
/**
 * First load after publish should clear data because the data could be invalid
 * for the current project config.
 */
export declare let __firstLoadAfterPublish: boolean;
export declare function prepare(): void;
export declare function run(initStep: INIT_STATE): void;
export declare const enum INIT_STATE {
    INVALID = 0,
    IDLE = 1,
    CHECK_BROWSER_FEATURES = 2,
    BASE_CONFIGURATION = 3,
    BASE_DESCRIPTION = 4,
    BASE_PACKAGE_LOAD = 5,
    LOCALIZATION_EARLY = 6,
    THEME_MANAGER_EARLY = 7,
    CACHE_LOADING = 8,
    SYSTEM_PREPARATION = 9,
    PACKAGES_MANIFEST_LOAD = 10,
    CONTROLS_DESCRIPTION_LOAD = 11,
    CONTROLS_DESCRIPTION_RESOLVE = 12,
    LOCALIZATION_FINAL = 13,
    THEME_MANAGER_FINAL = 14,
    CONTROLS_TEMPLATES_LOAD = 15,
    PACKAGES_FUNCTION_DESCRIPTION_LOAD = 16,
    USER_FUNCTION_DESCRIPTION_LOAD = 17,
    OPEN_ENGINEERING_CONNECTION = 18,
    REGISTRATION_CHECK = 19,
    OPEN_SERVER_CONNECTION = 20,
    TYPEDEFINITIONS = 21,
    SERVER_SYMBOL_META_DATA_CACHE = 22,
    AUDIT_TRAIL_INIT = 23,
    VALIDATION = 24,
    USERCONTROL_LOAD = 25,
    CONTENT_LOAD = 26,
    VIEW_LOAD = 27,
    CONTENT_COMPILE = 28,
    VIEW_COMPILE = 29,
    PRELOAD_BINDINGS = 30,
    FINAL = 1000,
    ERROR = 10000
}
//# sourceMappingURL=Main.d.ts.map