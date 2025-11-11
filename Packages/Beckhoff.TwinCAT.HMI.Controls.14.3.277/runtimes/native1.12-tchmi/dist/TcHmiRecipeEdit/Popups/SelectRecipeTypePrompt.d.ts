export declare class SelectRecipeTypePrompt extends TcHmi.Controls.Helpers.OkCancelPrompt<{
    name: string;
    recipeType: TcHmi.Server.RecipeManagement.RecipeType;
}> {
    #private;
    protected __parentControl: TcHmi.Controls.System.TcHmiControl;
    protected __recipeTypeBrowser: TcHmi.Controls.Helpers.DirectoryBrowser<TcHmi.Server.RecipeManagement.RecipeType, TcHmi.Server.RecipeManagement.FolderRecipeType>;
    protected __initialPath: string[] | null;
    protected __recipeManagementDomain: string | null;
    protected __allowedRecipeTypes: string[] | null;
    protected __preselectedRecipeType: string[];
    protected __unwatchRecipeTypesList: TcHmi.DestroyFunction | null;
    /**
     * Creates a new SelectRecipeTypePrompt instance.
     * @param pathDisplay The display to show the currently chosen path in.
     * @param parentControl The control which owns the popup.
     */
    constructor(pathDisplay: TcHmi.Controls.Helpers.PathDisplay, parentControl: TcHmi.Controls.System.TcHmiControl);
    /**
     * Handler for the PathChanged event of the recipe type browser.
     * @param currentItem The current item.
     * @param path The path to the current item.
     */
    protected __onPathChanged(currentItem: TcHmi.Controls.Helpers.DirectoryBrowser.Item<TcHmi.Server.RecipeManagement.RecipeType, TcHmi.Server.RecipeManagement.FolderRecipeType> | null, path: string[] | null): void;
    /**
     * Handler for the SelectionChanged event of the recipe type browser.
     * @param selectedItem The selected item, or null if nothing is selected.
     * @param path The current path.
     * @param selectedItemName The name of the selected item, or null if nothing is selected.
     */
    protected __onSelectionChanged(selectedItems: TcHmi.Controls.Helpers.DirectoryBrowser.DescendantItem<TcHmi.Server.RecipeManagement.RecipeType, TcHmi.Server.RecipeManagement.FolderRecipeType>[] | null): void;
    /**
     * Suspends the RecipeTypeBrowser of this popup.
     */
    suspend(): void;
    /**
     * Resumes the RecipeTypeBrowser of this popoup.
     */
    resume(): void;
    /**
     * Sets the path of the RecipeTypeBrowser to the root directory.
     */
    reset(): Promise<void>;
    /**
     * Sets the recipeManagementDomain. The recipeManagementDomain must be set to be able to browse recipe types.
     * @param recipeManagementDomain The server domain that is used for recipe management.
     */
    setRecipeManagementDomain(recipeManagementDomain: string | null): void;
    /**
     * Sets the allowedRecipeTypes. If not an empty array or null, only recipe types that are included will be shown.
     * @param allowedRecipeTypes The list of allowed recipe types.
     */
    setAllowedRecipeTypes(allowedRecipeTypes: string[] | null): void;
    /**
     * Sets the preselectedRecipeType.
     * @param preselectedRecipeType The preselected recipe type.
     */
    setPreselectedRecipeType(preselectedRecipeType: string[]): void;
    /**
     * Gets the currently selected recipe type. Returns null if no recipe type is selected.
     */
    getSelectedRecipeType(): Promise<{
        name: string;
        recipeType: import("Beckhoff.TwinCAT.HMI.Framework/dist/API/Server.RecipeManagement").RecipeType;
    } | null>;
    /**
     * Unwatches and rewatches the recipe types list.
     */
    protected __watchRecipeTypes(): void;
    /**
     * Callback function for TcHmi.Server.RecipeManagement.watchRecipeList.
     * @param data The recipes.
     */
    protected __onRecipeTypeListWatch(data: TcHmi.Server.RecipeManagement.IWatchResultObject<TcHmi.Server.RecipeManagement.FolderRecipeType>): void;
    /**
     * Performs the action for the OK button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
     */
    protected __ok(): Promise<void>;
    /**
     * Performs the action for the Cancel button.
     */
    protected __cancel(): void;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    prompt(): Promise<{
        isOk: true;
        value: {
            name: string;
            recipeType: TcHmi.Server.RecipeManagement.RecipeType;
        };
    } | {
        isOk: false;
        value?: void | undefined;
    }>;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations(texts: Partial<LocalizableTexts>): void;
}
export interface LocalizableTexts extends TcHmi.Controls.Helpers.OkCancelPrompt.LocalizableTexts {
    headerText: TcHmi.Localizable;
}
//# sourceMappingURL=SelectRecipeTypePrompt.d.ts.map