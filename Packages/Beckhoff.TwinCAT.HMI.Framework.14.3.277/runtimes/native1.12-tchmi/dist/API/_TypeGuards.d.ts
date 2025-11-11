/**
 * Checks if the parameter is a TcHmi.SolidColor
 * @param colorObject The SolidColor to check.
 */
export declare function isSolidColor(colorObject: TcHmi.Color | null | undefined): colorObject is TcHmi.SolidColor;
/**
 * Checks if the parameter is a TcHmi.LinearGradientColor
 * @param colorObject The SolidColor to check.
 */
export declare function isLinearGradientColor(colorObject: TcHmi.Color | null | undefined): colorObject is TcHmi.LinearGradientColor;
/**
 * Checks if the parameter is a TcHmi.Background
 * @param obj object to test
 * @preserve (Part of the public API)
 */
export declare function isBackground(obj: TcHmi.Background | null | undefined): obj is TcHmi.Background;
/**
 * Checks if the parameter is a TcHmi.checkTransform
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isTranslate(transformObject: TcHmi.Transform | null | undefined): transformObject is TcHmi.Translate;
/**
 * Checks if the parameter is a TcHmi.Rotate
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isRotate(transformObject: TcHmi.Transform | null): transformObject is TcHmi.Rotate;
/**
 * Checks if the parameter is a TcHmi.Scale
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isScale(transformObject: TcHmi.Transform | null): transformObject is TcHmi.Scale;
/**
 * Checks if the parameter is a TcHmi.Skew
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isSkew(transformObject: TcHmi.Transform | null): transformObject is TcHmi.Skew;
/**
 * Checks if the parameter is a TcHmi.Origin
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isOrigin(transformObject: TcHmi.Transform | null): transformObject is TcHmi.Origin;
/**
 * Checks if the parameter is a TcHmi.Perspective
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */
export declare function isPerspective(transformObject: TcHmi.Transform | null): transformObject is TcHmi.Perspective;
/**
 * Check if an object is a Comparison.
 * @param value object to test
 */
export declare function isComparison(value: any): value is TcHmi.Comparison;
/**
 * Check if an object is a Comparison
 * @param value object to test
 */
export declare function isLogicOperator(value: TcHmi.Comparison | TcHmi.LogicOperator | TcHmi.Filter): value is TcHmi.LogicOperator;
declare const _isSolidColor: typeof isSolidColor;
declare const _isLinearGradientColor: typeof isLinearGradientColor;
declare const _isBackground: typeof isBackground;
declare const _isTranslate: typeof isTranslate;
declare const _isRotate: typeof isRotate;
declare const _isScale: typeof isScale;
declare const _isSkew: typeof isSkew;
declare const _isOrigin: typeof isOrigin;
declare const _isPerspective: typeof isPerspective;
declare const _isComparison: typeof isComparison;
declare const _isLogicOperator: typeof isLogicOperator;
declare global {
    namespace TcHmi {
        let isSolidColor: typeof _isSolidColor;
        let isLinearGradientColor: typeof _isLinearGradientColor;
        let isBackground: typeof _isBackground;
        let isTranslate: typeof _isTranslate;
        let isRotate: typeof _isRotate;
        let isScale: typeof _isScale;
        let isSkew: typeof _isSkew;
        let isOrigin: typeof _isOrigin;
        let isPerspective: typeof _isPerspective;
        let isComparison: typeof _isComparison;
        let isLogicOperator: typeof _isLogicOperator;
    }
}
export {};
//# sourceMappingURL=_TypeGuards.d.ts.map