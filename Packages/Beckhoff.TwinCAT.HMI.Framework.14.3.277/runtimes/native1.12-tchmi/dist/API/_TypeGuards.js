export function isSolidColor(colorObject){return null!=colorObject&&"string"==typeof colorObject.color}export function isLinearGradientColor(colorObject){if(null==colorObject)return!1;let angle=colorObject.angle;return!(!Array.isArray(colorObject.stopPoints)||"number"!=typeof angle&&("string"!=typeof angle||isNaN(parseFloat(angle))))}
/**
 * Checks if the parameter is a TcHmi.Background
 * @param obj object to test
 * @preserve (Part of the public API)
 */export function isBackground(obj){return null!=obj&&(void 0!==obj.color&&void 0!==obj.image&&void 0!==obj.imageWidth&&void 0!==obj.imageWidthUnit&&void 0!==obj.imageHeight&&void 0!==obj.imageHeightUnit&&void 0!==obj.imageHorizontalAlignment&&void 0!==obj.imageVerticalAlignment&&void 0!==obj.imagePadding)}
/**
 * Checks if the parameter is a TcHmi.checkTransform
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */export function isTranslate(transformObject){return!!transformObject&&"Translate"===transformObject.transformType}
/**
 * Checks if the parameter is a TcHmi.Rotate
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */export function isRotate(transformObject){return!!transformObject&&"Rotate"===transformObject.transformType}
/**
 * Checks if the parameter is a TcHmi.Scale
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */export function isScale(transformObject){return!!transformObject&&"Scale"===transformObject.transformType}
/**
 * Checks if the parameter is a TcHmi.Skew
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */export function isSkew(transformObject){return!!transformObject&&"Skew"===transformObject.transformType}
/**
 * Checks if the parameter is a TcHmi.Origin
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */export function isOrigin(transformObject){return!!transformObject&&"Origin"===transformObject.transformType}
/**
 * Checks if the parameter is a TcHmi.Perspective
 * @param transformObject object to test
 * @preserve (Part of the public API)
 */export function isPerspective(transformObject){return!!transformObject&&"Perspective"===transformObject.transformType}export function isComparison(value){if(!value)return!1;return["==","!=","<",">","<=",">=","contains","contains not","== [ignore case]","!= [ignore case]","contains [ignore case]","contains not [ignore case]"].includes(value.comparator)&&(["string","number","boolean"].includes(typeof value.value)||value.value instanceof Date||null===value.value)}export function isLogicOperator(value){if(!value)return!1;let logic=value.logic;return"AND"===logic||"OR"===logic}TcHmi.isSolidColor=isSolidColor;TcHmi.isLinearGradientColor=isLinearGradientColor;TcHmi.isBackground=isBackground;TcHmi.isTranslate=isTranslate;TcHmi.isRotate=isRotate;TcHmi.isScale=isScale;TcHmi.isSkew=isSkew;TcHmi.isOrigin=isOrigin;TcHmi.isPerspective=isPerspective;TcHmi.isComparison=isComparison;TcHmi.isLogicOperator=isLogicOperator;