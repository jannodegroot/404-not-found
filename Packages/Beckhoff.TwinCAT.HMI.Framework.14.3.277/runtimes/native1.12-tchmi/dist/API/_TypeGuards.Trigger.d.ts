/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isCondition(obj: TcHmi.Trigger.Action): obj is TcHmi.Trigger.Condition;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isSwitchCase(obj: TcHmi.Trigger.Action): obj is TcHmi.Trigger.SwitchCase;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isControlApiFunction(obj: TcHmi.Trigger.Action): obj is TcHmi.Trigger.ControlApiFunction;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isWriteToSymbol(obj: TcHmi.Trigger.Action): obj is TcHmi.Trigger.WriteToSymbol;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isComment(obj: TcHmi.Trigger.Action): obj is TcHmi.Trigger.Comment;
/**
 * Check if an object is a Function.
 * @param obj object to test
 */
export declare function isFunction(obj: TcHmi.Trigger.Action): obj is TcHmi.Trigger.TAFunction;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isJavaScript(obj: TcHmi.Trigger.Action): obj is TcHmi.Trigger.JavaScript;
/**
 * Trigger Parser Type Guard which checks 'objectType' of Action
 * @param obj object to test
 */
export declare function isActionTemplate(obj: TcHmi.Trigger.Action): obj is TcHmi.Trigger.ActionTemplate;
/**
 * Check if an object is a FunctionExpression.
 * @param obj object to test
 */
export declare function isFunctionExpression(obj: TcHmi.Trigger.Action): obj is TcHmi.Trigger.FunctionExpression;
/**
 * Check if an object is a ControlAttributeBindingTarget.
 * @param obj object to test
 */
export declare function isControlAttributeBindingTarget(obj: TcHmi.Trigger.BindingTarget): obj is TcHmi.Trigger.ControlAttributeBindingTarget;
declare const _isCondition: typeof isCondition;
declare const _isSwitchCase: typeof isSwitchCase;
declare const _isControlApiFunction: typeof isControlApiFunction;
declare const _isWriteToSymbol: typeof isWriteToSymbol;
declare const _isComment: typeof isComment;
declare const _isFunction: typeof isFunction;
declare const _isJavaScript: typeof isJavaScript;
declare const _isActionTemplate: typeof isActionTemplate;
declare const _isFunctionExpression: typeof isFunctionExpression;
declare const _isControlAttributeBindingTarget: typeof isControlAttributeBindingTarget;
declare global {
    namespace TcHmi.Trigger {
        let isCondition: typeof _isCondition;
        let isSwitchCase: typeof _isSwitchCase;
        let isControlApiFunction: typeof _isControlApiFunction;
        let isWriteToSymbol: typeof _isWriteToSymbol;
        let isComment: typeof _isComment;
        let isFunction: typeof _isFunction;
        let isJavaScript: typeof _isJavaScript;
        let isActionTemplate: typeof _isActionTemplate;
        let isFunctionExpression: typeof _isFunctionExpression;
        let isControlAttributeBindingTarget: typeof _isControlAttributeBindingTarget;
    }
}
export {};
//# sourceMappingURL=_TypeGuards.Trigger.d.ts.map