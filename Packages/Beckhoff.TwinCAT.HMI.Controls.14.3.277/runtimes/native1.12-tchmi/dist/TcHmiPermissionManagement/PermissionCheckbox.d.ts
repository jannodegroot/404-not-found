export declare class PermissionCheckbox extends HTMLElement {
    constructor(para: {
        initValue?: boolean;
        changeCallback?: (...args: any[]) => void;
        unset?: boolean;
        colorCoded?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
    });
    private __loading;
    private __checkboxContainer;
    private __checkbox;
    private __checkmark;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private __changeCallback;
    set changeCallback(fn: ((...args: any[]) => void) | undefined);
    get checked(): boolean;
    set checked(value: boolean);
    loading(): void;
    private __readOnly;
    get readOnly(): boolean;
    set readOnly(value: boolean);
    private __colorCoded;
    get colorCoded(): boolean;
    set colorCoded(value: boolean);
    private __unset;
    set unset(value: boolean);
    private __disabled;
    get disabled(): boolean;
    set disabled(value: boolean);
    get enabled(): boolean;
    set enabled(value: boolean);
}
//# sourceMappingURL=PermissionCheckbox.d.ts.map