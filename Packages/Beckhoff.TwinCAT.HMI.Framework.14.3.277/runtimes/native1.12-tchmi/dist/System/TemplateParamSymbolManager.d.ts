export declare class TemplateParamSymbolManager extends TcHmi.Destroyable {
    constructor();
    add(name: string, type: string, value: any): void;
    remove(name: string): void;
    get(name: string): ITemplateParamSymbolItem | undefined;
    destroy(): void;
    keepAlive(name: string): boolean;
}
export interface ITemplateParamSymbolItem {
    name: string;
    type: string;
    value: any;
    callbacks: any[];
}
/** Runtime Manager */
export declare const templateParamSymbolManager: TemplateParamSymbolManager;
//# sourceMappingURL=TemplateParamSymbolManager.d.ts.map