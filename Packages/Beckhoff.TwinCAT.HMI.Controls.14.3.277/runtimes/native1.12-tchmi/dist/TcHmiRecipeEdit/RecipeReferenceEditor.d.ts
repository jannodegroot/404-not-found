import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import { SelectRecipePrompt } from './Popups/SelectRecipePrompt.js';
import type { Control as TcHmiRecipeEdit } from 'TcHmiRecipeEdit.esm.js';
export declare class RecipeReferenceEditor {
    #private;
    protected __element: HTMLElement;
    protected __recipeType: string;
    protected __parentControl: TcHmiRecipeEdit;
    protected __eventDestroyers: Set<TcHmi.DestroyFunction>;
    protected __container: HTMLDivElement;
    protected __pathBoxElement: HTMLDivElement;
    protected __button: TcHmiButton;
    protected __selectRecipePrompt: SelectRecipePrompt;
    protected __recipe: {
        name: string;
        recipe: TcHmi.Server.RecipeManagement.Recipe;
    } | null;
    protected __isEnabled: boolean;
    protected __localizationSymbols: Map<string, {
        symbol: TcHmi.Symbol<string>;
        destroyWatch: TcHmi.DestroyFunction;
    }>;
    protected readonly __onChangeManager: TcHmi.Controls.Helpers.CallbackManager<(editor: RecipeReferenceEditor) => void>;
    readonly onChange: Readonly<{
        add: (callback: (editor: RecipeReferenceEditor) => void) => TcHmi.DestroyFunction;
        remove: (callback: (editor: RecipeReferenceEditor) => void) => void;
    }>;
    /**
     * Creates a new RecipeReferenceEditor.
     * @param __element The element hosting the editor.
     * @param __parentControl The parent control of the editor.
     */
    constructor(__element: HTMLElement, __recipeType: string, __parentControl: TcHmiRecipeEdit);
    /**
     * Destroys the editor and all its controls.
     */
    destroy(): void;
    /**
     * Set a new Value.
     * @param value The value to set.
     */
    setValue(value: string | null): Promise<void>;
    /**
     * Gets the current value.
     */
    getState(): State;
    /**
     * Enable or disable the editor. Disabled editors are greyed out and cannot be interacted with.
     * @param isEnabled Whether the editor should be enabled or disabled.
     */
    setIsEnabled(isEnabled: boolean): void;
    /**
     * Get whether the editor is enabled or disabled.
     */
    getIsEnabled(): boolean;
    /**
     * Event handler for the onPressed event of the button.
     */
    protected __onPressed(): void;
    /**
     * Handler for the click event of path items.
     * @param event
     */
    protected __onPathItemClicked(event: MouseEvent): void;
    /**
     * Prompts the user for a recipe type.
     */
    protected __promptRecipe(): Promise<void>;
    /**
     * Sets the internal recipe variable, toggles the invalid class and triggers change handlers.
     * @param recipe The new recipe.
     */
    protected __setRecipe(recipe: {
        name: string;
        recipe: TcHmi.Server.RecipeManagement.Recipe;
    } | null): void;
    /**
     * Callback for received recipe lists.
     * @param rootDirectory The recipe list.
     */
    protected __onRecipeListReceived(rootDirectory: TcHmi.Server.RecipeManagement.FolderRecipe | null): void;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations(texts: Partial<LocalizableTexts>): void;
    /**
     * Watch the given symbol and call the onChange callback every time it changes with the resolved and formatted symbol value.
     * @param name The name for this symbol. Must be unique across all inheritance layers and further calls for the same localization must use the same name.
     * @param localization The localization to watch.
     * @param onChange The callback that is called with the localized and formatted text as a parameter.
     */
    protected __watchLocalization(name: string, localization: TcHmi.FormattedLocalizable, onChange: (localizedText: string) => void): void;
    /**
     * Destroys the localization watch with the given name, if it exists.
     * @param name The name that was used with __watchLoclalization to start watching the symbol.
     */
    protected __unwatchLocalization(name: string): void;
}
export interface LocalizableTexts extends TcHmi.Controls.Helpers.OkCancelPrompt.LocalizableTexts {
    openPopupButtonTooltip: TcHmi.Localizable;
    recipePopupHeaderText: TcHmi.Localizable;
}
export type State = {
    isValid: false;
} | {
    isValid: true;
    value: string;
};
//# sourceMappingURL=RecipeReferenceEditor.d.ts.map