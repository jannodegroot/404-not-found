/**
 * Function Parser Type Guard which checks 'objectType' of Value
 * @param value object to test
 */
export declare function isStaticValue(value: TcHmi.IFunction.Value): value is TcHmi.IFunction.StaticValue;
/**
 * Function Parser  Type Guard which checks 'objectType' of Value
 * @param value object to test
 */
export declare function isSymbol(value: TcHmi.IFunction.Value): value is TcHmi.IFunction.Symbol;
/**
 * Function Parser Type Guard which checks 'objectType' of Value
 * @param value object to test
 */
export declare function isEventDataObject(value: TcHmi.IFunction.Value): value is TcHmi.IFunction.EventDataObject;
/**
 * Function Parser  Type Guard which checks 'objectType' of Value
 * @param value object to test
 */
export declare function isFunctionExpression(value: TcHmi.IFunction.Value): value is TcHmi.IFunction.FunctionExpression;
declare const _isStaticValue: typeof isStaticValue;
declare const _isSymbol: typeof isSymbol;
declare const _isEventDataObject: typeof isEventDataObject;
declare const _isFunctionExpression: typeof isFunctionExpression;
declare global {
    namespace TcHmi.IFunction {
        let isStaticValue: typeof _isStaticValue;
        let isSymbol: typeof _isSymbol;
        let isEventDataObject: typeof _isEventDataObject;
        let isFunctionExpression: typeof _isFunctionExpression;
    }
}
export {};
//# sourceMappingURL=_TypeGuards.IFunction.d.ts.map