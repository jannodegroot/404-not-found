import type { Control as TcHmiTextbox } from '../../TcHmiTextbox/TcHmiTextbox.esm.js';
import type { Control as TcHmiButton } from '../../TcHmiButton/TcHmiButton.esm.js';
import { SelectRecipeTypePrompt } from './SelectRecipeTypePrompt.js';
export declare class CreateRecipePrompt extends TcHmi.Controls.Helpers.OkCancelPrompt<{
    name: string;
    recipeTypeName: string;
    recipeType: TcHmi.Server.RecipeManagement.RecipeType;
}> {
    protected __parentControl: TcHmi.Controls.System.TcHmiControl;
    protected __textbox: TcHmiTextbox;
    protected __forbiddenNames: Set<string>;
    protected __nameLabel: HTMLSpanElement;
    protected __recipeTypeLabel: HTMLSpanElement;
    protected __pathBoxElement: HTMLDivElement;
    protected __selectRecipeTypePrompt: SelectRecipeTypePrompt;
    protected __selectButton: TcHmiButton;
    protected __recipeType: {
        name: string;
        recipeType: TcHmi.Server.RecipeManagement.RecipeType;
    } | null;
    /**
     * Creates a new CreateRecipePrompt instance.
     * @param parentControl The control which owns the popup.
     */
    constructor(parentControl: TcHmi.Controls.System.TcHmiControl);
    /**
     * Destroys the popup and all its controls.
     * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
     */
    destroy(force?: boolean): void;
    /**
     * Handler for the onTextChanged event of the textbox.
     */
    protected __onTextChanged(): void;
    /**
     * Handler for the onPressed event of the select button.
     */
    protected __onSelectPressed(): void;
    /**
     * Handler for the keydown event of the popup element.
     */
    protected __onKeydown(event: KeyboardEvent): void;
    /**
     * Handler for the click event of path items.
     * @param event
     */
    protected __onPathItemClicked(event: MouseEvent): void;
    /**
     * Validates the given text as a name. A valid name must not be empty and not contain '::'.
     * @param text The text to validate.
     */
    protected __isValidName(text: string): boolean;
    /**
     * Prompts the user for a recipe type.
     */
    protected __promptRecipeType(): Promise<void>;
    /**
     * Performs the action for the OK button, i.e. calling prompt.answer().
     */
    protected __ok(): void;
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
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     * @param forbiddenNames Names that cannot be entered (i.e. because another item with this name already exists).
     */
    prompt(forbiddenNames?: Iterable<string> | null, defaultValue?: string): Promise<{
        isOk: true;
        value: {
            name: string;
            recipeTypeName: string;
            recipeType: TcHmi.Server.RecipeManagement.RecipeType;
        };
    } | {
        isOk: false;
        value?: void | undefined;
    }>;
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup.
     */
    hide(): void;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations(texts: Partial<LocalizableTexts>): void;
}
export interface LocalizableTexts extends TcHmi.Controls.Helpers.OkCancelPrompt.LocalizableTexts {
    headerText: TcHmi.Localizable;
    nameLabelText: TcHmi.Localizable;
    recipeTypeLabelText: TcHmi.Localizable;
    selectButtonTooltip: TcHmi.Localizable;
    recipeTypePopupHeaderText: TcHmi.Localizable;
}
//# sourceMappingURL=CreateRecipePrompt.d.ts.map