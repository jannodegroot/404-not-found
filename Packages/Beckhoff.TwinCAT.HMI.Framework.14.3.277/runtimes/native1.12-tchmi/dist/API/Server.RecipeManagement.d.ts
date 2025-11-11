import * as Server from './Server.js';
/**
 * Lists all available recipe types
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listRecipeTypes(callback?: null | ((this: void, data: IRecipeTypeListResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all available recipe types
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listRecipeTypesEx(options?: IRecipeListOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IRecipeTypeListResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Watches a list of all available recipe types
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchRecipeTypesList(options?: IRecipeWatchOptions | null, callback?: null | ((this: void, data: IWatchResultObject<FolderRecipeType>) => void)): TcHmi.DestroyFunction;
/**
 * Returns a recipe types addressed by name and optional path
 * @param recipeTypeName Name of the recipe type
 * @param path Name of the folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getRecipeType(recipeTypeName: string, path: string | null, callback?: null | ((this: void, data: IRecipeTypeGetResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Returns a recipe types addressed by name and optional path
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param path Name of the folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getRecipeTypeEx(recipeTypeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IRecipeTypeGetResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Watches a recipe type
 * @param recipeTypeName Name of the recipe type
 * @param path Name of the folder
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchRecipeType(recipeTypeName: string, path: string | null, options?: IRecipeWatchOptions | null, callback?: null | ((this: void, data: IWatchResultObject<RecipeType>) => void)): TcHmi.DestroyFunction;
/**
 * Creates a recipe type folder
 * @param path name of the new folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeTypeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Creates a recipe type folder
 * This function provides more options to manipulate the request
 * @param path Name of the new folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeTypeFolderEx(path: string, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Deletes a recipe type folder
 * @param path name of the folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeTypeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Deletes a recipe type folder
 * This function provides more options to manipulate the request
 * @param path Name of the folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeTypeFolderEx(path: string, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Creates a new recipe type
 * @param recipeTypeName Name of the recipe type
 * @param recipeType recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeType(recipeTypeName: string, recipeType: RecipeType, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Creates a new recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param recipeType Recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeTypeEx(recipeTypeName: string, recipeType: RecipeType, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Updates a recipe type
 * @param recipeTypeName Name of the recipe type
 * @param recipeType recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateRecipeType(recipeTypeName: string, recipeType: RecipeType, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Updates a recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param recipeType Recipe type definition
 * @param path Path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateRecipeTypeEx(recipeTypeName: string, recipeType: RecipeType, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Renames or moves a recipe type
 * @param recipeTypeName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeType(recipeTypeName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Renames or moves a recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeTypeEx(recipeTypeName: string, path: string | null, newName: string, newPath: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Renames or moves a recipe type folder
 * @param recipeTypeFolderName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeTypeFolder(recipeTypeFolderName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Renames or moves a recipe type folder
 * This function provides more options to manipulate the request
 * @param recipeTypeFolderName Old name of the recipe type
 * @param path Old path of the recipe type (root folder if set to null)
 * @param newName New name of the recipe type
 * @param newPath New path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeTypeFolderEx(recipeTypeFolderName: string, path: string | null, newName: string, newPath: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Deletes a recipe type
 * @param recipeTypeName Name of the recipe type
 * @param path Path of the recipe type (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeType(recipeTypeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Deletes a recipe type
 * This function provides more options to manipulate the request
 * @param recipeTypeName Name of the recipe type
 * @param path Path of the recipe type (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeTypeEx(recipeTypeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all available recipes
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listRecipes(callback?: null | ((this: void, data: IRecipeListResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all available recipes
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function listRecipesEx(options?: IRecipeListOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IRecipeListResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Watches a list of all available recipes
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchRecipeList(options?: IRecipeWatchOptions | null, callback?: null | ((this: void, data: IWatchResultObject<FolderRecipe>) => void)): TcHmi.DestroyFunction;
/**
 * Creates a recipe folder
 * @param path name of the new folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Creates a recipe folder
 * This function provides more options to manipulate the request
 * @param path name of the new folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeFolderEx(path: string, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Deletes a recipe folder
 * @param path name of the folder
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeFolder(path: string, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Deletes a recipe folder
 * This function provides more options to manipulate the request
 * @param path Name of the folder
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeFolderEx(path: string, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Creates a new recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param recipe recipe definition
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipe(recipeName: string, path: string | null, recipe: Recipe, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Creates a new recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param recipe Recipe definition
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function createRecipeEx(recipeName: string, path: string | null, recipe: Recipe, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists one recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getRecipe(recipeName: string, path: string | null, callback?: null | ((this: void, data: IGetRecipeResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists one recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getRecipeEx(recipeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IGetRecipeResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Watches a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchRecipe(recipeName: string, path: string | null, options?: IRecipeWatchOptions | null, callback?: null | ((this: void, data: IWatchResultObject<Recipe>) => void)): TcHmi.DestroyFunction;
/**
 * Updates a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newValues dictionary of the new values
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateRecipe(recipeName: string, path: string | null, newValues: TcHmi.Dictionary<any>, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Updates a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newValues Dictionary of the new values
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function updateRecipeEx(recipeName: string, path: string | null, newValues: TcHmi.Dictionary<any>, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Reads all values which is referenced by a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function readFromTarget(recipeName: string, path: string | null, callback?: null | ((this: void, data: IReadFromTargetResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Reads all values which is referenced by a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function readFromTargetEx(recipeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IReadFromTargetResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Reads the current values which are referenced from a base recipe and write it back
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function teach(recipeName: string, path: string | null, callback?: null | ((this: void, data: IReadFromTargetResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Reads the current values which are referenced from a base recipe and write it back
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function teachEx(recipeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IReadFromTargetResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Reads the current values which are referenced from a base recipe and write it into a new recipe
 * @param recipeName Name of the base recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newRecipeName Name of the new recipe. (could be prefixed with a path if separated with ::)
 * @param newRecipePath Path of the new recipe. (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function teachAsNewRecipe(recipeName: string, path: string | null, newRecipeName: string, newRecipePath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Reads the current values which are referenced from a base recipe and write it into a new recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the base recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param newRecipeName Name of the new recipe. (could be prefixed with a path if separated with ::)
 * @param newRecipePath Path of the new recipe. (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function teachAsNewRecipeEx(recipeName: string, path: string | null, newRecipeName: string, newRecipePath: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Activates a recipe (writes all values)
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function activate(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Activates a recipe (writes all values)
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function activateEx(recipeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all active recipes
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getActiveRecipes(callback?: null | ((this: void, data: IGetActiveRecipesResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Lists all active recipes
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function getActiveRecipesEx(options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: IGetActiveRecipesResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Watches a list of all active recipes
 * @param options Options for the watch
 * @param callback Callback which is called once and on every change
 * @preserve (Part of the public API)
 */
export declare function watchActiveRecipes(options?: IRecipeWatchOptions | null, callback?: null | ((this: void, data: IWatchResultObject<string[]>) => void)): TcHmi.DestroyFunction;
/**
 * Renames or moves a recipe
 * @param recipeName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName New name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipe(recipeName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Renames or moves a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName New name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeEx(recipeName: string, path: string | null, newName: string, newPath: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Renames or moves a recipe folder
 * @param recipeFolderName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName New name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeFolder(recipeFolderName: string, path: string | null, newName: string, newPath: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Renames or moves a recipe folder
 * This function provides more options to manipulate the request
 * @param recipeFolderName Old name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Old path of the recipe (root folder if set to null)
 * @param newName Mew name of the recipe
 * @param newPath New path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function renameRecipeFolderEx(recipeFolderName: string, path: string | null, newName: string, newPath: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Deletes a recipe
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipe(recipeName: string, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Deletes a recipe
 * This function provides more options to manipulate the request
 * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe (root folder if set to null)
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function deleteRecipeEx(recipeName: string, path: string | null, options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Downloads one or more recipes. Downloads all recipes when filter is the empty string, empty array or null.
 * The sibling API downloadRecipesEx can include the referenced recipe types, too.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipes (could be prefixed with a path if separated with ::)
 * @param path Path of the recipes (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function downloadRecipes(filter: string | string[] | null, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Downloads one or more recipes. Downloads all recipes when filter is the empty string, empty array or null.
 * Can include the referenced recipe types, too, when set in options.
 * This function provides more options to manipulate the request.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipes (could be prefixed with a path if separated with ::)
 * @param path Path of the recipes (root folder if set to null)
 * @param options Options for the download recipeManagement
 * @param requestOptions Options for the request itself (not used right now)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function downloadRecipesEx(filter: string | string[] | null, path: string | null, options?: IRecipeDownloadOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Downloads one or more recipe types. Downloads all recipe types when recipeTypeName is the empty string or null.
 * The sibling API downloadRecipeTypesEx can include the referenced recipe types, too.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipe types (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe types (root folder if set to null)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function downloadRecipeTypes(filter: string | string[] | null, path: string | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Downloads one or more recipe types. Downloads all recipe types when recipeTypeName is the empty string or null.
 * Can include the referenced recipe types, too, when set in options.
 * This function provides more options to manipulate the request.
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param filter Name or names of the recipe types (could be prefixed with a path if separated with ::)
 * @param path Path of the recipe types (root folder if set to null)
 * @param options Options for the download recipeManagement
 * @param requestOptions Options for the request itself (not used right now)
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function downloadRecipeTypesEx(filter: string | string[] | null, path: string | null, options?: IRecipeDownloadOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Uploads one or more recipe files (each containing one or all recipes or recipe types of a server).
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function uploadRecipeFiles(callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
/**
 * Uploads one or more recipe files (each containing one or all recipes or recipe types of a server).
 * This needs to be triggered by a user interaction (not on load or symbol change).
 * This function provides more options to manipulate the request
 * @param options Options for the recipeManagement
 * @param requestOptions Options for the request itself
 * @param callback Will be called after request.
 * @preserve (Part of the public API)
 */
export declare function uploadRecipeFilesEx(options?: IRecipeOptions | null, requestOptions?: Server.IRequestOptions | null, callback?: null | ((this: void, data: TcHmi.IResultObject) => void)): TcHmi.IErrorDetails;
export interface RecipeType {
    /** List of RecipeTypes this RecipeType inherits */
    recipeTypeNames?: string[];
    /** List of symbol definitions for this RecipeType */
    members: TcHmi.Dictionary<{
        /** Name of the symbol of this entry */
        symbol: string;
        /** defaultValue for this symbol */
        defaultValue: any;
        /** Schema the value inside a Recipe should validate */
        schema?: TcHmi.JsonSchema;
        /** Engineering unit for this symbol */
        unit?: string;
        comment?: string;
        enabled?: boolean;
        /** Groups for engineering display */
        group?: string;
        /** Engineering display order */
        order?: number;
    } | {
        /**
         * References another recipeType.
         * The used recipe name will be in the recipe as a string value.
         */
        recipeType: string;
        enabled?: boolean;
        /** Groups for engineering display */
        group?: string;
        /** Engineering display order */
        order?: number;
        /** Engineering unit for this symbol */
        unit?: string;
        comment?: string;
    }>;
    options?: {
        /** None: no restriction from recipeType
                Disabled: All member of the recipe are disabled */
        enabled?: 'None' | 'Disabled';
        comment?: string;
    };
}
/** Dictionary of folders or RecipeTypes */
export interface FolderRecipeType {
    [index: string]: FolderRecipeType | RecipeType;
}
export interface IRecipeListResultObject extends TcHmi.IResultObject {
    value?: FolderRecipe;
}
export interface Recipe {
    /** Full path of the RecipeType this Recipe implements */
    recipeTypeName: string;
    /**
     * Values for the symbols or the name of a linked recipe.
     * Key is the symbol name or recipeType name.
     */
    values: TcHmi.Dictionary<any>;
}
/** Dictionary of folders or Recipes */
export interface FolderRecipe {
    [index: string]: FolderRecipe | Recipe;
}
export interface IRecipeTypeListResultObject extends TcHmi.IResultObject {
    value?: FolderRecipeType;
}
export interface IRecipeTypeGetResultObject extends TcHmi.IResultObject {
    value?: RecipeType;
}
export interface IGetRecipeResultObject extends TcHmi.IResultObject {
    value?: Recipe;
}
export interface IReadFromTargetResultObject extends TcHmi.IResultObject {
    /** This is an example key "subFolder::myRecipe" */
    value?: TcHmi.Dictionary<Recipe>;
}
export interface IGetActiveRecipesResultObject extends TcHmi.IResultObject {
    recipeList?: string[];
}
/** Options for all recipe APIs */
export interface IRecipeOptions {
    /** domain of the RecipeManagement. defaults to TcHmiRecipeManagement */
    domain?: string;
    parallel?: boolean;
}
export interface IRecipeListOptions extends IRecipeOptions {
    /** Subpath to list a subfolder */
    path?: string;
}
export interface IRecipeDownloadOptions extends IRecipeOptions {
    /** The export should contain referenced recipe types, too. Defaults to false. */
    referencedRecipeTypes?: boolean;
}
export interface IRecipeWatchOptions extends IRecipeOptions {
}
export interface IWatchResultObject<T = any> extends TcHmi.IResultObject {
    value?: T;
    /** A destroy function to remove the watch. Only set if there is no error. */
    destroy?: TcHmi.DestroyFunction;
    response?: Server.IMessage<T>;
}
/**
 * Type guard for recipes. Returns true if the given candidate is a Recipe, false otherwise
 * @param candidate The candidate to test.
 */
export declare function isRecipe(candidate: FolderRecipe | Recipe): candidate is Recipe;
/**
 * Type guard for recipe types. Returns true if the given candidate is a RecipeType, false otherwise
 * @param candidate The candidate to test.
 */
export declare function isRecipeType(candidate: FolderRecipeType | RecipeType): candidate is RecipeType;
declare const _listRecipeTypes: typeof listRecipeTypes;
declare const _listRecipeTypesEx: typeof listRecipeTypesEx;
declare const _watchRecipeTypesList: typeof watchRecipeTypesList;
declare const _getRecipeType: typeof getRecipeType;
declare const _getRecipeTypeEx: typeof getRecipeTypeEx;
declare const _watchRecipeType: typeof watchRecipeType;
declare const _createRecipeTypeFolder: typeof createRecipeTypeFolder;
declare const _createRecipeTypeFolderEx: typeof createRecipeTypeFolderEx;
declare const _deleteRecipeTypeFolder: typeof deleteRecipeTypeFolder;
declare const _deleteRecipeTypeFolderEx: typeof deleteRecipeTypeFolderEx;
declare const _createRecipeType: typeof createRecipeType;
declare const _createRecipeTypeEx: typeof createRecipeTypeEx;
declare const _updateRecipeType: typeof updateRecipeType;
declare const _updateRecipeTypeEx: typeof updateRecipeTypeEx;
declare const _renameRecipeType: typeof renameRecipeType;
declare const _renameRecipeTypeEx: typeof renameRecipeTypeEx;
declare const _renameRecipeTypeFolder: typeof renameRecipeTypeFolder;
declare const _renameRecipeTypeFolderEx: typeof renameRecipeTypeFolderEx;
declare const _deleteRecipeType: typeof deleteRecipeType;
declare const _deleteRecipeTypeEx: typeof deleteRecipeTypeEx;
declare const _listRecipes: typeof listRecipes;
declare const _listRecipesEx: typeof listRecipesEx;
declare const _watchRecipeList: typeof watchRecipeList;
declare const _createRecipeFolder: typeof createRecipeFolder;
declare const _createRecipeFolderEx: typeof createRecipeFolderEx;
declare const _deleteRecipeFolder: typeof deleteRecipeFolder;
declare const _deleteRecipeFolderEx: typeof deleteRecipeFolderEx;
declare const _createRecipe: typeof createRecipe;
declare const _createRecipeEx: typeof createRecipeEx;
declare const _getRecipe: typeof getRecipe;
declare const _getRecipeEx: typeof getRecipeEx;
declare const _watchRecipe: typeof watchRecipe;
declare const _updateRecipe: typeof updateRecipe;
declare const _updateRecipeEx: typeof updateRecipeEx;
declare const _readFromTarget: typeof readFromTarget;
declare const _readFromTargetEx: typeof readFromTargetEx;
declare const _teach: typeof teach;
declare const _teachEx: typeof teachEx;
declare const _teachAsNewRecipe: typeof teachAsNewRecipe;
declare const _teachAsNewRecipeEx: typeof teachAsNewRecipeEx;
declare const _activate: typeof activate;
declare const _activateEx: typeof activateEx;
declare const _getActiveRecipes: typeof getActiveRecipes;
declare const _getActiveRecipesEx: typeof getActiveRecipesEx;
declare const _watchActiveRecipes: typeof watchActiveRecipes;
declare const _renameRecipe: typeof renameRecipe;
declare const _renameRecipeEx: typeof renameRecipeEx;
declare const _renameRecipeFolder: typeof renameRecipeFolder;
declare const _renameRecipeFolderEx: typeof renameRecipeFolderEx;
declare const _deleteRecipe: typeof deleteRecipe;
declare const _deleteRecipeEx: typeof deleteRecipeEx;
declare const _downloadRecipes: typeof downloadRecipes;
declare const _downloadRecipesEx: typeof downloadRecipesEx;
declare const _downloadRecipeTypes: typeof downloadRecipeTypes;
declare const _downloadRecipeTypesEx: typeof downloadRecipeTypesEx;
declare const _uploadRecipeFiles: typeof uploadRecipeFiles;
declare const _uploadRecipeFilesEx: typeof uploadRecipeFilesEx;
declare const _isRecipe: typeof isRecipe;
declare const _isRecipeType: typeof isRecipeType;
type tRecipeType = RecipeType;
type tFolderRecipeType = FolderRecipeType;
type tIRecipeListResultObject = IRecipeListResultObject;
type tRecipe = Recipe;
type tFolderRecipe = FolderRecipe;
type tIRecipeTypeListResultObject = IRecipeTypeListResultObject;
type tIRecipeTypeGetResultObject = IRecipeTypeGetResultObject;
type tIGetRecipeResultObject = IGetRecipeResultObject;
type tIReadFromTargetResultObject = IReadFromTargetResultObject;
type tIGetActiveRecipesResultObject = IGetActiveRecipesResultObject;
type tIRecipeOptions = IRecipeOptions;
type tIRecipeListOptions = IRecipeListOptions;
type tIRecipeDownloadOptions = IRecipeDownloadOptions;
type tIRecipeWatchOptions = IRecipeWatchOptions;
type tIWatchResultObject<T = any> = IWatchResultObject<T>;
type tRecipeDownloadOptions = IRecipeDownloadOptions;
declare global {
    namespace TcHmi.Server {
        /**
         * Provides functions for recipe management.
         * @preserve (Part of the public API)
         */
        namespace RecipeManagement {
            const listRecipeTypes: typeof _listRecipeTypes;
            const listRecipeTypesEx: typeof _listRecipeTypesEx;
            const watchRecipeTypesList: typeof _watchRecipeTypesList;
            const getRecipeType: typeof _getRecipeType;
            const getRecipeTypeEx: typeof _getRecipeTypeEx;
            const watchRecipeType: typeof _watchRecipeType;
            const createRecipeTypeFolder: typeof _createRecipeTypeFolder;
            const createRecipeTypeFolderEx: typeof _createRecipeTypeFolderEx;
            const deleteRecipeTypeFolder: typeof _deleteRecipeTypeFolder;
            const deleteRecipeTypeFolderEx: typeof _deleteRecipeTypeFolderEx;
            const createRecipeType: typeof _createRecipeType;
            const createRecipeTypeEx: typeof _createRecipeTypeEx;
            const updateRecipeType: typeof _updateRecipeType;
            const updateRecipeTypeEx: typeof _updateRecipeTypeEx;
            const renameRecipeType: typeof _renameRecipeType;
            const renameRecipeTypeEx: typeof _renameRecipeTypeEx;
            const renameRecipeTypeFolder: typeof _renameRecipeTypeFolder;
            const renameRecipeTypeFolderEx: typeof _renameRecipeTypeFolderEx;
            const deleteRecipeType: typeof _deleteRecipeType;
            const deleteRecipeTypeEx: typeof _deleteRecipeTypeEx;
            const listRecipes: typeof _listRecipes;
            const listRecipesEx: typeof _listRecipesEx;
            const watchRecipeList: typeof _watchRecipeList;
            const createRecipeFolder: typeof _createRecipeFolder;
            const createRecipeFolderEx: typeof _createRecipeFolderEx;
            const deleteRecipeFolder: typeof _deleteRecipeFolder;
            const deleteRecipeFolderEx: typeof _deleteRecipeFolderEx;
            const createRecipe: typeof _createRecipe;
            const createRecipeEx: typeof _createRecipeEx;
            const getRecipe: typeof _getRecipe;
            const getRecipeEx: typeof _getRecipeEx;
            const watchRecipe: typeof _watchRecipe;
            const updateRecipe: typeof _updateRecipe;
            const updateRecipeEx: typeof _updateRecipeEx;
            const readFromTarget: typeof _readFromTarget;
            const readFromTargetEx: typeof _readFromTargetEx;
            const teach: typeof _teach;
            const teachEx: typeof _teachEx;
            const teachAsNewRecipe: typeof _teachAsNewRecipe;
            const teachAsNewRecipeEx: typeof _teachAsNewRecipeEx;
            const activate: typeof _activate;
            const activateEx: typeof _activateEx;
            const getActiveRecipes: typeof _getActiveRecipes;
            const getActiveRecipesEx: typeof _getActiveRecipesEx;
            const watchActiveRecipes: typeof _watchActiveRecipes;
            const renameRecipe: typeof _renameRecipe;
            const renameRecipeEx: typeof _renameRecipeEx;
            const renameRecipeFolder: typeof _renameRecipeFolder;
            const renameRecipeFolderEx: typeof _renameRecipeFolderEx;
            const deleteRecipe: typeof _deleteRecipe;
            const deleteRecipeEx: typeof _deleteRecipeEx;
            const downloadRecipes: typeof _downloadRecipes;
            const downloadRecipesEx: typeof _downloadRecipesEx;
            const downloadRecipeTypes: typeof _downloadRecipeTypes;
            const downloadRecipeTypesEx: typeof _downloadRecipeTypesEx;
            const uploadRecipeFiles: typeof _uploadRecipeFiles;
            const uploadRecipeFilesEx: typeof _uploadRecipeFilesEx;
            const isRecipe: typeof _isRecipe;
            const isRecipeType: typeof _isRecipeType;
            type RecipeType = tRecipeType;
            type FolderRecipeType = tFolderRecipeType;
            type IRecipeListResultObject = tIRecipeListResultObject;
            type Recipe = tRecipe;
            type FolderRecipe = tFolderRecipe;
            type IRecipeTypeListResultObject = tIRecipeTypeListResultObject;
            type IRecipeTypeGetResultObject = tIRecipeTypeGetResultObject;
            type IGetRecipeResultObject = tIGetRecipeResultObject;
            type IReadFromTargetResultObject = tIReadFromTargetResultObject;
            type IGetActiveRecipesResultObject = tIGetActiveRecipesResultObject;
            type IRecipeOptions = tIRecipeOptions;
            type IRecipeListOptions = tIRecipeListOptions;
            type IRecipeDownloadOptions = tIRecipeDownloadOptions;
            type IRecipeWatchOptions = tIRecipeWatchOptions;
            type IWatchResultObject<T = any> = tIWatchResultObject<T>;
            type RecipeDownloadOptions = tRecipeDownloadOptions;
        }
    }
}
export {};
//# sourceMappingURL=Server.RecipeManagement.d.ts.map