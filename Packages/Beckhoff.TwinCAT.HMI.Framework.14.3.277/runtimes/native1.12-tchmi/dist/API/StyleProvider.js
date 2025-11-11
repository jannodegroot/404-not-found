import{styleManager}from"../System/StyleManager.js";
/**
 * Returns the given computed CSS property on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
 * Unset or unknown CSS values will not be set in the result object.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param propertyNameOrPropertyNames The CSS property (string) or properties (string array) to get.
 * @preserve (Part of the public API)
 */export function getComputedElementStyle(element,propertyNameOrPropertyNames){if(!styleManager)throw new Error("Failed to get style. System not ready.");return styleManager.__getElementStyle(element,propertyNameOrPropertyNames,!0)}
/**
 * Returns the given CSS property on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param propertyNameOrPropertyNames The CSS property (string) or properties (string array) to get.
 * @preserve (Part of the public API)
 */export function getSimpleElementStyle(element,propertyNameOrPropertyNames){if(!styleManager)throw new Error("Failed to get style. System not ready.");return styleManager.__getElementStyle(element,propertyNameOrPropertyNames,!1)}
/**
 * Style setter for simple styles in a collection of JQuery elements or single HTML or SVG Elements.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param propertyNameOrPropertyNames The CSS property to process or a dictionary of property value pairs.
 * @param valueOrValues The value for the CSS property or an array of values. Only used if second parameter is no object.
 * @preserve (Part of the public API)
 */export function setSimpleElementStyle(element,propertyNameOrPropertyNames,valueOrValues=null){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.__setSimpleElementStyle(element,propertyNameOrPropertyNames,valueOrValues)}export function processGenericStyle(controlName,selector,propertyName,value=null){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processGenericStyle(controlName,selector,propertyName,value)}
/**
 * Resolves a SolidColor object to a string representation for use as css color property.
 * Has to be called with a valid SolidColor. Use isSolidColor to check
 * @param colorObject The SolidColor to resolve.
 * @preserve (Part of the public API)
 */export function resolveSolidColorAsCssValue(colorObject){return"none"===colorObject.color.toLowerCase()?"transparent":colorObject.color}
/**
 * Resolve a SolidColor object to a RGBAColor object.
 * Has to be called with a valid SolidColor. Use isSolidColor to check
 * @param colorObject The SolidColor to resolve.
 * @preserve (Part of the public API)
 */export function resolveSolidColorAsRGBA(colorObject){const canvas=document.createElement("canvas");canvas.width=canvas.height=1;const ctx=canvas.getContext("2d",{willReadFrequently:!0});ctx.clearRect(0,0,1,1),ctx.fillStyle=resolveSolidColorAsCssValue(colorObject),ctx.fillRect(0,0,1,1);const rgba=ctx.getImageData(0,0,1,1).data;return{r:rgba[0],g:rgba[1],b:rgba[2],a:rgba[3]}}let __normalizedColorMap=new Map;
/**
 * Normalize a SolidColor object
 * Every supported color format will be returned as
 * for example '#ff0000' or with transparency as 'rgba(255, 0, 0, 0.333)'
 * Has to be called with a valid SolidColor. Use isSolidColor to check
 * @param colorObject The SolidColor to normalize.
 * @preserve (Part of the public API)
 */export function normalizeColorAsCssValue(colorObject){const savedColor=__normalizedColorMap.get(colorObject.color);if(savedColor)return savedColor;const ctx=document.createElement("canvas").getContext("2d");ctx.strokeStyle=resolveSolidColorAsCssValue(colorObject);const resolvedColor=ctx.strokeStyle;return __normalizedColorMap.set(colorObject.color,resolvedColor),resolvedColor}
/**
 * Resolves a LinearGradientColor object to a string representation for use in css background-image property.
 * Has to be called with a valid LinearGradientColor. Use isLinearGradientColor to check
 * @param colorObject The LinearGradientColor to resolve.
 * @preserve (Part of the public API)
 */export function resolveLinearGradientColorAsCssValue(colorObject){let angle=colorObject.angle;null==angle&&(angle=0);let backgroundCssString="linear-gradient(";if(backgroundCssString+=angle+"deg",colorObject.stopPoints)for(let i=0,ii=colorObject.stopPoints.length;i<ii;i++){let stopPoint=colorObject.stopPoints[i];void 0!==stopPoint.stop&&null!==stopPoint.stop?backgroundCssString+=","+stopPoint.color+" "+stopPoint.stop:backgroundCssString+=","+stopPoint.color}return backgroundCssString+=")",backgroundCssString}
/**
 * Style Processor for background. This handles spaces and ' or " in URLs, too.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new value for the background.
 * @preserve (Part of the public API)
 */export function processBackground(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processBackground(element,valueNew)}
/**
 * Style Processor for background colors and gradients.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new value for the background.
 * @preserve (Part of the public API)
 */export function processBackgroundColor(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processBackground(element,{color:valueNew})}
/**
 * Style Processor for background images. This handles spaces and ' or " in URLs, too.
 * ValueNew undefined, null or empty string will remove the background image.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The URL of the image.
 * @preserve (Part of the public API)
 */export function processBackgroundImage(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processBackground(element,{image:valueNew??""})}
/**
 * Style processor for SVG fill color.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new fill color.
 * @preserve (Part of the public API)
 * HTMLElement allowed because default jQuery type is HTMLElement
 */export function processFillColor(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processFillColor(element,valueNew)}
/**
 * Style processor for SVG stroke color.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new stroke color.
 * @preserve (Part of the public API)
 * HTMLElement allowed because default jQuery type is HTMLElement
 */export function processStrokeColor(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processStrokeColor(element,valueNew)}
/**
 * Style processor for text color.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new text color.
 * @preserve (Part of the public API)
 */export function processTextColor(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processTextColor(element,valueNew)}
/**
 * Style processor for border color.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new border color.
 * @preserve (Part of the public API)
 */export function processBorderColor(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processBorderColor(element,valueNew)}
/**
 * Style processor for border width.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new border widths.
 * @preserve (Part of the public API)
 */export function processBorderWidth(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processBorderWidth(element,valueNew)}
/**
 * Style processor for border radius.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new border radii.
 * @preserve (Part of the public API)
 */export function processBorderRadius(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processBorderRadius(element,valueNew)}
/**
 * Style processor for border style.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new border styles.
 * @preserve (Part of the public API)
 */export function processBorderStyle(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processBorderStyle(element,valueNew)}
/**
 * Style processor for box shadow.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new border styles.
 * @preserve (Part of the public API)
 */export function processBoxShadow(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processBoxShadow(element,valueNew)}
/**
 * Style processor for font family.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new font family.
 * @preserve (Part of the public API)
 */export function processFontFamily(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processFontFamily(element,valueNew)}
/**
 * Style processor for font size.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new font size.
 * @param unitNew The new font size unit. Defaults to "px".
 * @preserve (Part of the public API)
 */export function processFontSize(element,valueNew,unitNew="px"){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processFontSize(element,valueNew,unitNew)}
/**
 * Style processor for font style.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new font style. Allowed values are "Normal", "Italic" and "Oblique".
 * @preserve (Part of the public API)
 */export function processFontStyle(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processFontStyle(element,valueNew)}
/**
 * Style processor for font weight.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new font weight. Allowed values are "Normal" and "Bold".
 * @preserve (Part of the public API)
 */export function processFontWeight(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processFontWeight(element,valueNew)}
/**
 * Style processor for visibility.
 * Visibility also affects pointer events, i.e. a hidden element will not receive mouse click events.
 * Hidden still uses space in fluid calculations, collapsed is ignored there.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new visibility. Allowed values are "Visible", "Collapsed" and "Hidden". Hidden still uses space in fluid calculations, collapsed is ignored there.
 * @preserve (Part of the public API)
 */export function processVisibility(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processVisibility(element,valueNew)}
/**
 * Style processor for horizontal alignment. This aligns the content of the target element, not the target element itself.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new horizontal alignment. Allowed values are "Left", "Center" and "Right".
 * @preserve (Part of the public API)
 */export function processContentHorizontalAlignment(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processContentHorizontalAlignment(element,valueNew)}
/**
 * Style processor for vertical alignment. This aligns the content of the target element, not the target element itself.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new vertical alignment. Allowed values are "Top", "Center" and "Bottom".
 * @preserve (Part of the public API)
 */export function processContentVerticalAlignment(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processContentVerticalAlignment(element,valueNew)}
/**
 * Style processor for content padding.
 * Note: Percentages always refer to the width of the element, never its height (even for top and bottom).
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new content padding.
 * @preserve (Part of the public API)
 */export function processContentPadding(element,valueNew){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processContentPadding(element,valueNew)}
/**
 * Theme processor for transforms.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @param valueNew The new transform value or an array of transform values.
 * @param order If this parameter is passed, the transforms in valueNew will replace the transform at the specified place, instead of replacing all transforms.
 * @preserve (Part of the public API)
 */export function processTransform(element,valueNew,order){if(!styleManager)throw new Error("Failed to set style. System not ready.");styleManager.processTransform(element,valueNew,order)}
/**
 * Return the width of the given text in px as it would appear on the given element.
 * Make sure the element you operate with is attached to the DOM.
 * The function uses the computed values of the element which only exist when an element is attached to the DOM.
 * This function only works with single line text.
 * @param text The text to measure.
 * @param element The jQuery collection or HTML/SVG element(s) to operate with.
 * @preserve (Part of the public API)
 */export function getTextWidth(text,element){if(!styleManager)throw new Error("Failed to set style. System not ready.");return styleManager.getTextWidth(text,element)}TcHmi.StyleProvider={getComputedElementStyle,getSimpleElementStyle,setSimpleElementStyle,processGenericStyle,resolveSolidColorAsCssValue,resolveSolidColorAsRGBA,normalizeColorAsCssValue,resolveLinearGradientColorAsCssValue,processBackground,processBackgroundColor,processBackgroundImage,processFillColor,processStrokeColor,processTextColor,processBorderColor,processBorderWidth,processBorderRadius,processBorderStyle,processBoxShadow,processFontFamily,processFontSize,processFontStyle,processFontWeight,processVisibility,processContentHorizontalAlignment,processContentVerticalAlignment,processContentPadding,processTransform,getTextWidth};