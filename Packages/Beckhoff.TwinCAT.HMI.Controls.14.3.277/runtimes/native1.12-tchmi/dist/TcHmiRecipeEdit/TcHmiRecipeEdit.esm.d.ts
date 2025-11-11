import { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import { RecipeEditor } from './RecipeEditor.js';
import { CreateRecipePrompt } from './Popups/CreateRecipePrompt.js';
declare class TcHmiRecipeEdit extends TcHmiControl.Control {
    #private;
    /**
     * Constructor
     * @param element
     * @param pcElement
     * @param attrs
     */
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    protected __elementTemplateRoot: HTMLElement;
    protected __elementPathBox: HTMLDivElement;
    protected __elementBrowsingPane: HTMLElement;
    protected __elementBrowsingBox: HTMLUListElement;
    protected __elementTreeBox: HTMLDivElement;
    protected __elementEditingArea: HTMLDivElement;
    protected __serverDomain: string | undefined;
    protected __path: string | undefined;
    protected __oldPath: string | undefined;
    protected __allowedRecipeTypes: string[] | null | undefined;
    protected __preselectedRecipeType: string | undefined;
    protected __promptBeforeActivating: boolean | undefined;
    protected __promptBeforeTeaching: boolean | undefined;
    protected __unwatchRecipeManagementDomain: TcHmi.DestroyFunction | null;
    protected __unwatchRecipeList: TcHmi.DestroyFunction | null;
    protected __watchRecipeConditions: {
        extensionLoaded: boolean;
        userHasRights: boolean;
    };
    protected __watchRecipeListResult: TcHmi.Server.RecipeManagement.FolderRecipe | null;
    protected __onRecipeListReceivedManager: TcHmi.Controls.Helpers.CallbackManager<(rootDirectory: TcHmi.Server.RecipeManagement.FolderRecipe | null) => void>;
    protected __activeRecipesSubscriptionId: number | null;
    protected __watchActiveRecipeConditions: {
        extensionLoaded: boolean;
        userHasRights: boolean;
        recipe: string;
    };
    protected __symbolAccessSubscriptionId: number | null;
    protected __symbolAccess: {
        '{0}.Config': import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.js").ACCESS;
        Rename: import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.js").ACCESS;
        '{0}.ActivateRecipe': import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.js").ACCESS;
        '{0}.ReadFromTarget': import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.js").ACCESS;
        '{0}.UpdateRecipe': import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.js").ACCESS;
        '{0}.GetActiveRecipes': import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.js").ACCESS;
    };
    protected __buttons: {
        createFolder: TcHmiButton;
        createRecipe: TcHmiButton;
        rename: TcHmiButton;
        copy: TcHmiButton;
        cut: TcHmiButton;
        paste: TcHmiButton;
        delete: TcHmiButton;
        activate: TcHmiButton;
        teach: TcHmiButton;
        save: TcHmiButton;
        close: TcHmiButton;
    };
    protected __inputSearch: TcHmiInput;
    protected __elementClearSearch: HTMLDivElement;
    protected __clipboard: {
        action: 'cut' | 'copy';
        origin: string[];
        items: TcHmi.Controls.Helpers.DirectoryBrowser.DescendantItem<TcHmi.Server.RecipeManagement.Recipe, TcHmi.Server.RecipeManagement.FolderRecipe>[];
    } | null;
    protected __recipeBrowser: TcHmi.Controls.Helpers.DirectoryBrowser<TcHmi.Server.RecipeManagement.Recipe, TcHmi.Server.RecipeManagement.FolderRecipe> | undefined;
    protected __treeBrowsingDisplay?: TcHmi.Controls.Helpers.TreeBrowsingDisplay;
    protected __recipeEditor: RecipeEditor | undefined;
    protected __namePrompt: TcHmi.Controls.Helpers.InputPrompt | null;
    protected __createRecipePrompt: CreateRecipePrompt | null;
    protected __confirmationPrompt: TcHmi.Controls.Helpers.TextAndButtonsPrompt<boolean> | null;
    protected __activatePrompt: TcHmi.Controls.Helpers.TextAndButtonsPrompt<'saveAndActivate' | 'justActivate' | 'cancel'> | null;
    protected __teachErrorPopup: TcHmi.Controls.Helpers.TextAndButtonsPrompt<void> | null;
    protected __confirmClosePrompt: TcHmi.Controls.Helpers.TextAndButtonsPrompt<'save' | 'discard' | 'cancel'> | null;
    protected __childControls: TcHmi.Controls.System.TcHmiControl[];
    protected __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    protected __isEnabledLock: {
        locked: boolean;
        unlockValue: boolean | null;
    };
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * If raised, all attributes have been set to it's default or dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /**
     * Is called by tachcontrol() after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    /**
     * Handler for the pressed event of the new folder button.
     */
    protected __onNewFolderPressed(): void;
    /**
     * Handler for the pressed event of the new recipe button.
     */
    protected __onNewRecipePressed(): void;
    /**
     * Handler for the pressed event of the rename button.
     */
    protected __onRenamePressed(): void;
    /**
     * Handler for the pressed event of the copy button.
     */
    protected __onCopyPressed(): void;
    /**
     * Handler for the pressed event of the cut button.
     */
    protected __onCutPressed(): void;
    /**
     * Handler for the pressed event of the paste button.
     */
    protected __onPastePressed(): void;
    /**
     * Handler for the pressed event of the delete button.
     */
    protected __onDeletePressed(): void;
    /**
     * Handler for the textChanged event of the search input.
     */
    protected __onSearchChanged(): void;
    /**
     * Handler for the click event of the clear search element.
     * @param event The event that is handled.
     */
    protected __onClearSearchClick(event: MouseEvent): void;
    /**
     * Handler for the selectionChanged event of the recipe browser.
     * @param selectedItem The now selected item.
     * @param path The path of the folder the selected item is in.
     * @param selectedItemName The name of the selected item.
     */
    protected __onSelectionChanged(selectedItems: TcHmi.Controls.Helpers.DirectoryBrowser.DescendantItem<TcHmi.Server.RecipeManagement.Recipe, TcHmi.Server.RecipeManagement.FolderRecipe>[] | null): void;
    /**
     * Handler for the beforePathChange event of the recipe browser.
     * @param currentItem The new current item.
     * @param path The new path.
     */
    protected __onBeforePathChange(newCurrentItem: TcHmi.Controls.Helpers.DirectoryBrowser.Item<TcHmi.Server.RecipeManagement.Recipe, TcHmi.Server.RecipeManagement.FolderRecipe> | null, newPath: string[] | null, cancelable: boolean): Promise<boolean>;
    /**
     * Handler for the pathChanged event of the recipe browser.
     * @param currentItem The new current item.
     * @param path The new path.
     */
    protected __onPathChanged(currentItem: TcHmi.Controls.Helpers.DirectoryBrowser.Item<TcHmi.Server.RecipeManagement.Recipe, TcHmi.Server.RecipeManagement.FolderRecipe> | null, path: string[] | null): void;
    /**
     * Handler for the dragAndDrop event of the browsing display of the recipe browser.
     * @param dragged The name of the dragged item.
     * @param droppedOnto Infos about the item the dragged item was dropped onto.
     */
    protected __onDragAndDropped(dragged: string, droppedOnto: {
        name: string;
        isParent: boolean;
    }): void;
    /**
     * Handler for the pressed event of the activate button
     */
    protected __onActivatePressed(): void;
    /**
     * Handler for the pressed event of the teach button
     */
    protected __onTeachPressed(): void;
    /**
     * Handler for the pressed event of the save button.
     */
    protected __onSavePressed(): void;
    /**
     * Handler for the pressed event of the close button.
     */
    protected __onClosePressed(): void;
    /**
     * Handler for the changed event of the recipe editor.
     * @param isValid Whether the recipe editor is now in a valid state.
     * @param value The current value of the recipe editor.
     */
    protected __onRecipeEditorChanged(editor: RecipeEditor): void;
    /**
     * Expands the given localization key to a full symbol expression.
     * @param key The key to expand.
     */
    protected __expandLocalizationSymbol(key: string): string;
    /**
     * Forces the buttons operate rights to Deny if the user doesn't have the necessary symbol TcHmi.Access.
     */
    protected __updateButtonAccess(): void;
    /**
     * Returns an InputPrompt and sets the validationPatterns and localizations.
     * @param headerKey The localization key for the header text.
     */
    protected __getNamePrompt(headerKey: string): TcHmi.Controls.Helpers.InputPrompt;
    /**
     * Returns a TextAndButtonsPrompt with a yes and a no button.
     * @param headerKey The localization key for the header text.
     * @param contentKey The localization key for the content text.
     */
    protected __getConfirmationPrompt(headerKey: string, contentKey: string): TcHmi.Controls.Helpers.TextAndButtonsPrompt<boolean>;
    /**
     * Shows a prompt to enter a name and then creates a new folder.
     */
    protected __createFolder(): Promise<void>;
    /**
     * Shows a prompt to enter a name, select a recipe type and then creates a new recipe.
     */
    protected __createRecipe(): Promise<void>;
    /**
     * Shows a prompt to enter a name and then renames the selected item.
     */
    protected __rename(): Promise<void>;
    /**
     * Shows a prompt to confirm and then deletes the selected item.
     */
    protected __delete(): Promise<void>;
    /**
     * Fill the clipboard with the currently selected items.
     * @param action Whether to copy or cut the selected items.
     */
    protected __fillClipboard(action: 'copy' | 'cut'): void;
    /**
     * Pastes the clipboard items into the current location.
     */
    protected __paste(): Promise<void>;
    /**
     * Copy the items to the current folder.
     * @param itemsToPaste The items to copy and paste.
     */
    protected __copyPaste(itemsToPaste: Map<string, TcHmi.Controls.Helpers.DirectoryBrowser.DescendantItem<TcHmi.Server.RecipeManagement.Recipe, TcHmi.Server.RecipeManagement.FolderRecipe>>, target: string[]): void;
    /**
     * Move the items to the current folder.
     * @param origin The original folder containing the items.
     * @param itemsToPaste The items to move.
     */
    protected __cutPaste(itemsToPaste: Map<string, TcHmi.Controls.Helpers.DirectoryBrowser.DescendantItem<TcHmi.Server.RecipeManagement.Recipe, TcHmi.Server.RecipeManagement.FolderRecipe>>, origin: string[], target: string[]): void;
    /**
     * Shows a popup asking the user how to resolve conflicting file names.
     * @param conflictingNames The names that conflict.
     * @param existingNames The names that already exist in the folder.
     */
    protected __resolveFileNameConflicts(conflictingNames: Iterable<string>, existingNames: Iterable<string>): Promise<{
        isOk: true;
        value: Map<string, string>;
    } | {
        isOk: false;
        value?: void | undefined;
    } | {
        readonly isOk: false;
    }>;
    /**
     * Enables or disables the rename and delete button depending on the selected item.
     * @param selectedItem The currently selected item.
     */
    protected __updateBrowsingButtons(selectedItems: TcHmi.Controls.Helpers.DirectoryBrowser.DescendantItem<TcHmi.Server.RecipeManagement.Recipe, TcHmi.Server.RecipeManagement.FolderRecipe>[] | null): void;
    /**
     * Opens or closes the editor depending on the current path.
     * @param currentItem The item the current path points to.
     * @param path The current path.
     */
    protected __openOrCloseEditor(currentItem: TcHmi.Server.RecipeManagement.FolderRecipe | TcHmi.Server.RecipeManagement.Recipe | undefined, path: string[] | null): void;
    /**
     * Checks if the control is in an editing state and if the editor has changes. If so, prompts the user to save or discard changes or cancel the operation.
     * Returns a boolean indicating whether the operation should be canceled or proceeded with.
     */
    protected __checkUnsavedChanges(): Promise<boolean>;
    /**
     * Moves a recipe or folder into another folder.
     * @param dragged The name of the item being moved.
     * @param droppedOnto Infos about the item the dragged item was dropped onto.
     */
    protected __moveItem(dragged: string, droppedOnto: {
        name: string;
        isParent: boolean;
    }): void;
    /**
     * Activates the currently edited recipe.
     */
    protected __activate(): Promise<void>;
    /**
     * Reads the values of the symbols in the currently edited recipe from the PLC and writes them into the recipe.
     */
    protected __teach(): Promise<void>;
    /**
     * Saves the currently edited recipe.
     */
    protected __save(): Promise<void>;
    /**
     * Closes the editor after prompting the user to save changes if there are changes
     */
    protected __closeEditor(): Promise<void>;
    /**
     * Updates the editing buttons according to the state of the editor.
     */
    protected __updateEditingButtons(): void;
    /**
     * Sets the current value of attribute ServerDomain.
     * @param valueNew
     */
    setServerDomain(valueNew: string | null): void;
    /**
     * Returns the current value of attribute ServerDomain.
     */
    getServerDomain(): string | undefined;
    /**
     * Processes the current value of attribute ServerDomain.
     */
    protected __processServerDomain(): void;
    /**
     * Sets the current value of attribute Path.
     * @param valueNew The new value.
     */
    setPath(valueNew: string | null): void;
    /**
     * Returns the current value of attribute Path.
     */
    getPath(): string | undefined;
    /**
     * Processes the current value of attribute Path.
     */
    protected __processPath(): Promise<void>;
    /**
     * Sets the current value of attribute AllowedRecipeTypes.
     * @param valueNew The new value.
     */
    setAllowedRecipeTypes(valueNew: string[] | null): void;
    /**
     * The watch callback for the AllowedRecipeTypes object resolver
     */
    protected __onResolverForAllowedRecipeTypesWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<string[]>): void;
    /**
     * Returns the current value of attribute AllowedRecipeTypes.
     */
    getAllowedRecipeTypes(): string[] | null | undefined;
    /**
     * Processes the current value of attribute AllowedRecipeTypes.
     */
    protected __processAllowedRecipeTypes(): void;
    /**
     * Sets the current value of attribute PreselectedRecipeType.
     * @param valueNew The new value.
     */
    setPreselectedRecipeType(valueNew: string | null): void;
    /**
     * Returns the current value of attribute PreselectedRecipeType.
     */
    getPreselectedRecipeType(): string | undefined;
    /**
     * Processes the current value of attribute PreselectedRecipeType.
     */
    protected __processPreselectedRecipeType(): void;
    /**
     * Returns the current value of the readonly attribute SelectedItems.
     */
    getSelectedItems(): string[];
    /**
     * Sets the current value of attribute PromptBeforeActivating.
     * @param valueNew
     */
    setPromptBeforeActivating(valueNew: boolean | null): void;
    /**
     * Returns the current value of attribute PromptBeforeActivating.
     */
    getPromptBeforeActivating(): boolean | undefined;
    /**
     * Sets the current value of attribute PromptBeforeTeaching.
     * @param valueNew
     */
    setPromptBeforeTeaching(valueNew: boolean | null): void;
    /**
     * Returns the current value of attribute PromptBeforeTeaching.
     */
    getPromptBeforeTeaching(): boolean | undefined;
    /**
     * Updates the RecipeManagementDomainWatch. Also unwatches the recipe list watch.
     * @param unwatchOnly Set to true to only destroy the existing watch. Defaults to false.
     */
    protected __updateRecipeWatches(unwatchOnly?: boolean): void;
    /**
     * Lock the isEnabled state to false.
     */
    protected __lockIsEnabled(): void;
    /**
     * Unlock the isEnabled state and apply the stored unlockValue.
     */
    protected __unlockIsEnabled(): void;
    /**
     * Sets the value of attribute IsEnabled.
     */
    setIsEnabled(valueNew: boolean | null): void;
    /**
     * Updates the recipe list watch, if the recipe extension is loaded and the user has the necessary access rights.
     * @param extensionLoaded Whether the recipe extension is loaded.
     * @param userHasRights Whether the user has the necessary access rights.
     */
    protected __updateRecipeListWatch(extensionLoaded: boolean | null, userHasRights: boolean | null): void;
    /**
     * Callback function for TcHmi.Server.RecipeManagement.watchRecipeList.
     * @param data The recipes.
     */
    protected __onRecipeListWatch(data: TcHmi.Server.RecipeManagement.IWatchResultObject<TcHmi.Server.RecipeManagement.FolderRecipe>): void;
    /**
     * Register a callback to receive the current recipe list.
     * @param callback The callback.
     */
    __registerOnRecipeListReceived(callback: (rootDirectory: TcHmi.Server.RecipeManagement.FolderRecipe | null) => void): TcHmi.DestroyFunction;
    /**
     * Unregister a callback to receive the current recipe list.
     * @param callback The callback.
     */
    __unregisterOnRecipeListReceived(callback: (rootDirectory: TcHmi.Server.RecipeManagement.FolderRecipe | null) => void): void;
    /**
     * Update the subscription to GetActiveRecipes.
     * @param unsubscribeOnly Only unsubscribe. Should be used on detach.
     */
    protected __updateActiveRecipesSubscription(extensionLoaded: boolean | null, userHasRights: boolean | null, recipe: string | null): void;
    /**
     * Update the subscription to GetSymbolAccess.
     * @param unsubscribeOnly Only unsubscribe. Should be used on detach.
     */
    protected __updateSymbolAccessSubscription(unsubscribeOnly?: boolean): void;
}
export { TcHmiRecipeEdit as Control };
declare const _TcHmiRecipeEdit: typeof TcHmiRecipeEdit;
type tTcHmiRecipeEdit = TcHmiRecipeEdit;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiRecipeEdit: typeof _TcHmiRecipeEdit;
        type TcHmiRecipeEdit = tTcHmiRecipeEdit;
    }
}
//# sourceMappingURL=TcHmiRecipeEdit.esm.d.ts.map