export declare class KeyboardManager {
    constructor();
    /**
     * document and eventprovider events will be registered on first need.
     * No need to clear because on focusin we reread config.
     */
    private __eventsRegistered;
    /** Used to be able to close or reconfig the active one */
    private __activeProvider;
    /**
     * The name of the system keyboard provider.
     */
    private __providerName;
    private __autoOpen;
    /**
     * The layout of the system keyboard.
     */
    private __systemKeyboardLayout;
    /**
     * A map of locale codes mapped to a Map of input mode mapped to the keyboard URL
     */
    private __projectKeyboardMapping;
    /** Observe new html text elements */
    refreshConfig(): void;
    /**
     * Closes the system keyboard.
     */
    close(): void;
    /**
     * Get the provider name of the system keyboard.
     */
    getProviderName(): string;
    /**
     * Set the provider name of the system keyboard.
     * @param providerName Name of the system keyboard provider.
     */
    setProviderName(providerName: string): void;
    /**
     * Gets if the system keyboard should open on focus of a textarea or input element.
     */
    getAutoOpen(): boolean;
    /**
     * Sets if the system keyboard should open on focus of a textarea or input element.
     * @param newState new value
     */
    setAutoOpen(newState: boolean): void;
    /**
     * Get the keyboard layout according to the requested input mode and the current localization.
     * @param requestedInputMode
     */
    getLayoutFileFromInputMode(requestedInputMode: string): TcHmi.Keyboard.LayoutResult;
    /**
     * Returns the project keyboard mapping. The project keyboard mapping maps pairs of input mode and keyboard layout urls to locale strings.
     */
    getProjectKeyboardMapping(): TcHmi.Dictionary<TcHmi.Keyboard.InputModeMapping>;
    /**
     * Sets the project keyboard mapping. The project keyboard mapping maps pairs of input mode and keyboard layout urls to locale strings.
     * @param projectKeyboardMapping
     */
    setProjectKeyboardMapping(projectKeyboardMapping: TcHmi.Dictionary<TcHmi.Keyboard.InputModeMapping>): void;
    /**
     * Gets the layout object of the system keyboard container.
     */
    getContainerLayout(): TcHmi.Keyboard.ContainerLayout | null;
    /**
     * Sets the layout object of the system keyboard container.
     * @param newLayout
     */
    setContainerLayout(newLayout: TcHmi.Keyboard.ContainerLayout): void;
}
/** Runtime Manager */
export declare const keyboardManager: KeyboardManager;
//# sourceMappingURL=KeyboardManager.d.ts.map