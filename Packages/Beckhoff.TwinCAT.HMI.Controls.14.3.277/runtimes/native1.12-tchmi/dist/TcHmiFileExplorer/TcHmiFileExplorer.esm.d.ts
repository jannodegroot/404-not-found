import { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import { Path } from './Path.js';
import { SortConfigurator } from './SortConfigurator.js';
export declare enum UploadStatus {
    Pending = 0,
    InProgress = 1,
    Error = 2
}
export declare enum SymbolAccess {
    None = 0,
    Read = 1,
    Write = 2,
    ReadWrite = 3
}
declare class TcHmiFileExplorer extends TcHmiControl.Control {
    #private;
    /**
     * Constructor Creates a new control instance.
     * @param element The element that hosts the control.
     * @param pcElement Precompiled element.
     * @param attrs The control attributes.
     */
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    protected __elementTemplateRoot: HTMLElement;
    protected __elementDirectoryTree: HTMLUListElement;
    protected __elementPathBox: HTMLDivElement;
    protected __elementBrowsingBox: HTMLUListElement;
    protected __elementMenuBar: HTMLDivElement;
    protected __buttons: {
        createFolder: TcHmiButton;
        download: TcHmiButton;
        upload: TcHmiButton;
        rename: TcHmiButton;
        copy: TcHmiButton;
        cut: TcHmiButton;
        paste: TcHmiButton;
        delete: TcHmiButton;
    };
    protected __elementSorting: HTMLDivElement;
    protected __inputSearch: TcHmiInput;
    protected __elementClearSearch: HTMLDivElement;
    protected __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    protected __directoryBrowser: TcHmi.Controls.Helpers.DirectoryBrowser<DirectoryNode, DirectoryNode>;
    protected __listBrowsingDisplay: TcHmi.Controls.Helpers.ListBrowsingDisplay;
    protected __directory: DirectoryNode;
    protected __clipboard: {
        action: 'cut' | 'copy';
        items: Path[];
    } | null;
    protected __subscriptionId: number | null;
    protected __symbolAccessSubscriptionId: number | null;
    protected __symbolAccess: {
        Upload: SymbolAccess;
        Rename: SymbolAccess;
        Copy: SymbolAccess;
        Delete: SymbolAccess;
        'TcHmiSrv.Config': SymbolAccess;
    };
    protected __fileUploader: TcHmi.FileUploader | null;
    protected __filesBeingUploaded: Map<string, ServerFile>;
    protected __namePrompt: TcHmi.Controls.Helpers.InputPrompt | null;
    protected __confirmationPrompt: TcHmi.Controls.Helpers.TextAndButtonsPrompt<boolean> | null;
    protected __errorPrompt: TcHmi.Controls.Helpers.TextAndButtonsPrompt<void> | null;
    protected __errorPromptPromise: Promise<void>;
    protected __root: Path<string> | undefined;
    protected __path: Path<string> | undefined;
    protected __serverInterval: number | null | undefined;
    protected __showNavigationPane: boolean | undefined;
    protected __navigationPanePosition: 'Left' | 'Right' | undefined;
    protected __menuBarPosition: 'Top' | 'Bottom' | undefined;
    protected __menuBarHeight: number | undefined;
    protected __storage: TcHmi.LocalStorage<{
        sorting: FileSortingInfo[];
    }, {
        sorting: ReturnType<TcHmiFileExplorer['getSorting']>;
    }> | undefined;
    protected __sortConfigurator: SortConfigurator<FileSortingInfo> | undefined;
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
     * Is called by the system after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called by the system after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    /**
     * Handler for the pathChanged event of the directory browser.
     * @param currentItem The new current item.
     * @param path The new path.
     */
    protected __onPathChanged(currentItem: DirectoryItem | null, path: string[] | null): void;
    /**
     * Handler for the selectionChanged event of the directory browser.
     * @param selectedItems The currently selected items.
     */
    protected __onSelectionChanged(selectedItems: DescendantItem[] | null): void;
    /**
     * Handler for the pressed event of the create folder button.
     */
    protected __onCreateFolderPressed(): void;
    /**
     * Handler for the pressed event of the download button.
     */
    protected __onDownloadPressed(): void;
    /**
     * Handler for the pressed event of the upload button.
     */
    protected __onUploadPressed(): void;
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
     * Expands the given localization key to a full symbol expression.
     * @param key The key to expand.
     */
    protected __expandLocalizationSymbol(key: string): string;
    /**
     * Updates the isEnabled states of the menu bar buttons.
     */
    protected __updateButtonsEnabled(): void;
    /**
     * Forces the buttons operate rights to Deny if the user doesn't have the necessary symbol TcHmi.Access.
     */
    protected __updateButtonAccess(): void;
    /**
     * Creates a new InputPrompt and sets the validationPatterns and localizations.
     */
    protected __createNamePrompt(): TcHmi.Controls.Helpers.InputPrompt;
    /**
     * Prompt the user for a name for the new folder and create this folder on the server.
     */
    protected __createFolder(path: Path): Promise<void>;
    /**
     * Downloads the specified files. Folders are skipped.
     * @param path The path that contains the files to download.
     * @param items The files that should be downloaded.
     */
    protected __downloadFiles(path: Path, items: DirectoryItem[]): void;
    /**
     * Shows a file selection window and uploads the selected files.
     */
    protected __upload(): Promise<void>;
    /**
     * Uploads the given files to the specified path.
     * @param path The path to upload to.
     * @param files The files to upload.
     * @param existingNames The names of already existing files or folders in the target location.
     */
    protected __uploadFiles(path: Path, files: FileList, existingNames: Set<string>): Promise<void>;
    /**
     * Shows an error popup with the specified header and content text.
     * @param headerText The header text.
     * @param contentText The content text.
     */
    protected __showErrorPopup(headerText: TcHmi.Localizable, contentText: TcHmi.Localizable): Promise<void>;
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
     * Renames the given file in the given path.
     * @param path The path where the file to be renamed can be found.
     * @param name The name of the file to rename.
     */
    protected __rename(path: Path, name: string): Promise<void>;
    /**
     * Pastes the items in the clipboard to the given path.
     * @param targetPath The path to paste into.
     * @param existingNames The names of already existing files or folders in the target location.
     */
    protected __paste(targetPath: Path, existingNames: Set<string>): Promise<void>;
    /**
     * Prompt the user to confirm if they really want to delete, then delete the given items from the server.
     * @param path The path where the items to be deleted can be found.
     * @param items The names of the items to delete.
     * @param skipConfirmation If true, the user will not be asked to confirm the deletion.
     */
    protected __delete(path: Path, items: DescendantItem[], skipConfirmation?: boolean): Promise<void>;
    protected __localizeListBrowsingDisplay(): void;
    /**
     * Sets the current value of attribute Root.
     * @param valueNew The new value.
     */
    setRoot(valueNew: string | null): void;
    /**
     * Returns the current value of attribute Root.
     */
    getRoot(): string | undefined;
    /**
     * Processes the current value of attribute Root.
     */
    protected __processRoot(): void;
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
     * Returns the current value of the readonly attribute FullPath.
     */
    getFullPath(): string;
    /**
     * Returns the current value of the readonly attribute SelectedItems.
     */
    getSelectedItems(): string[];
    /**
     * Sets the current value of attribute Sorting.
     * @param valueNew The new value.
     */
    setSorting(valueNew: FileSortingInfo[] | null): void;
    /**
     * The watch callback for the Sorting object resolver
     */
    protected __onResolverForSortingWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<FileSortingInfo[]>): void;
    /**
     * Returns the current value of attribute Sorting.
     */
    getSorting(): FileSortingInfo[] | undefined;
    /**
     * Processes the current value of attribute Sorting.
     */
    protected __processSorting(): void;
    /**
     * Sets the current value of attribute ServerInterval.
     * @param valueNew The new value.
     */
    setServerInterval(valueNew: number | null): void;
    /**
     * Returns the current value of attribute ServerInterval.
     */
    getServerInterval(): number | null | undefined;
    /**
     * Processes the current value of attribute ServerInterval.
     */
    protected __processServerInterval(): void;
    /**
     * Sets the current value of attribute MenuBarPosition.
     * @param valueNew The new value.
     */
    setMenuBarPosition(valueNew: 'Top' | 'Bottom' | null): void;
    /**
     * Returns the current value of attribute MenuBarPosition.
     */
    getMenuBarPosition(): "Top" | "Bottom" | undefined;
    /**
     * Sets the current value of attribute MenuBarHeight.
     * @param valueNew The new value.
     */
    setMenuBarHeight(valueNew: number | null): void;
    /**
     * Returns the current value of attribute MenuBarHeight.
     */
    getMenuBarHeight(): number | undefined;
    /**
     * Returns the current value of attribute MenuBarHeightUnit.
     */
    getMenuBarHeightUnit(): string;
    /**
     * Processes the current value of attributes MenuBarPosition, MenuBarHeight, ShowNavigationPane and NavigationPanePosition.
     */
    protected __processLayout(): void;
    /**
     * Unsubscribes and, if attached, resubscribes to ListFiles with updated writeValue.
     * @param unsubscribeOnly Set to true to only unsubscribe.
     */
    protected __updateSubscription(unsubscribeOnly?: boolean): Promise<void>;
    /**
     * Creates a callback function for the ListFiles response for the given path.
     * @param path The path to list files for.
     */
    protected __getListFilesHandler(path: Path): (data: TcHmi.Server.IResultObject<string, ServerFileList>) => void;
    /**
     * Updates the given path of the directory.
     * @param fileList The current file list for the given path.
     * @param path The path.
     */
    protected __updateDirectory(fileList: ServerFileList, path: Path): void;
    protected __updateSymbolAccessSubscription(unsubscribeOnly?: boolean): void;
    static UploadStatus: typeof UploadStatus;
    static SymbolAccess: typeof SymbolAccess;
}
export interface ServerFile {
    fileFlags: ('Directory' | 'ReadOnly' | 'UserAccessReadOnly' | 'VirtualDirectory')[];
    fileSize?: number;
    link?: string;
    access?: TcHmi.Server.ACCESS;
    /** The md5 hash of the file */
    hash?: string;
    modificationTime?: string;
    uploadStatus?: UploadStatus;
    uploadedSize?: number;
}
export interface ServerFileList {
    [name: string]: ServerFile;
}
export interface DirectoryNode extends ServerFile {
    children?: Map<string, DirectoryNode>;
}
export interface DeleteWriteValue {
    fileName: string;
    domain?: string;
}
export interface CopyRenameWriteValue {
    old: string;
    new: string;
    domain?: string;
    configuration?: string;
}
export type DirectoryItem = TcHmi.Controls.Helpers.DirectoryBrowser.Item<DirectoryNode, DirectoryNode>;
export type FolderLikeItem = TcHmi.Controls.Helpers.DirectoryBrowser.FolderLikeItem<DirectoryNode, DirectoryNode>;
export type DescendantItem = TcHmi.Controls.Helpers.DirectoryBrowser.DescendantItem<DirectoryNode, DirectoryNode>;
export interface FileSortingInfo extends TcHmi.SortingInfo {
    name: 'name' | 'type' | 'fileSize' | 'modificationTime';
}
export { TcHmiFileExplorer as Control };
declare const _TcHmiFileExplorer: typeof TcHmiFileExplorer;
type tTcHmiFileExplorer = TcHmiFileExplorer;
type tUploadStatus = UploadStatus;
type tSymbolAccess = SymbolAccess;
type tServerFile = ServerFile;
type tServerFileList = ServerFileList;
type tDirectoryNode = DirectoryNode;
type tDeleteWriteValue = DeleteWriteValue;
type tCopyRenameWriteValue = CopyRenameWriteValue;
type tDirectoryItem = DirectoryItem;
type tFolderLikeItem = FolderLikeItem;
type tDescendantItem = DescendantItem;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiFileExplorer: typeof _TcHmiFileExplorer;
        type TcHmiFileExplorer = tTcHmiFileExplorer;
        namespace TcHmiFileExplorer {
            type UploadStatus = tUploadStatus;
            type SymbolAccess = tSymbolAccess;
            type ServerFile = tServerFile;
            type ServerFileList = tServerFileList;
            type DirectoryNode = tDirectoryNode;
            type DeleteWriteValue = tDeleteWriteValue;
            type CopyRenameWriteValue = tCopyRenameWriteValue;
            type DirectoryItem = tDirectoryItem;
            type FolderLikeItem = tFolderLikeItem;
            type DescendantItem = tDescendantItem;
        }
    }
}
//# sourceMappingURL=TcHmiFileExplorer.esm.d.ts.map