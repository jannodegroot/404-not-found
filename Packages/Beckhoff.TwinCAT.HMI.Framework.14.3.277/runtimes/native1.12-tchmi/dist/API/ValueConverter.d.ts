/**
 * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}.
 * No content check will be done!
 * @param value The value to convert.
 * @template T Type of the resulting object.
 * @preserve (Part of the public API)
 */
export declare function toObject<T extends object | undefined | null>(value: any): T | null;
/**
 * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}.
 * No content check will be done!
 * @param value The value to convert.
 * @param defaultValue The fallback value
 * @template T Type of the resulting object.
 * @preserve (Part of the public API)
 */
export declare function toObject<T extends object | undefined | null>(value: any, defaultValue: T): T;
/**
 * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}. Returns a result object for error detection.
 * No content check will be done!
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @template T Type of the resulting object.
 * @preserve (Part of the public API)
 */
export declare function toObjectEx<T extends object | undefined | null>(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: T | null;
}): IResultObject<T | null>;
/** Returns a string representation of a function. */
export declare function toString(): ReturnType<typeof Object.toString>;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @template T Literal types (aka a specific string) for the resulting string.
 * @preserve (Part of the public API)
 */
export declare function toString<T extends string = string>(value: T): T | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @template T Literal types (aka a specific string) for the resulting string.
 * @preserve (Part of the public API)
 */
export declare function toString<T extends string | null | undefined = string>(value: any | null | undefined): NonNullable<T> | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toString(value: any): string | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
 * @template T Literal types (aka a specific string) for the resulting string.
 * @preserve (Part of the public API)
 */
export declare function toString<T extends string = string>(value: T, defaultValue: string | null): T | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
 * @template T Literal types (aka a specific string) for the resulting string.
 * @preserve (Part of the public API)
 */
export declare function toString<T extends string | null | undefined = string>(value: any | null | undefined, defaultValue: string | null): NonNullable<T> | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toString(value: any, defaultValue: string | null): string | null;
/**
 * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toStringEx(value?: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: string | null;
}): IResultObject<string | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toDimensionUnit(value: TcHmi.DimensionUnit | null): TcHmi.DimensionUnit | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toDimensionUnit(value: TcHmi.DimensionUnit | null, defaultValue: TcHmi.DimensionUnit): TcHmi.DimensionUnit;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toDimensionUnitEx(value: TcHmi.DimensionUnit | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.DimensionUnit | null;
}): IResultObject<TcHmi.DimensionUnit | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toAngleUnit(value: TcHmi.AngleUnit | null): TcHmi.AngleUnit | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toAngleUnit(value: TcHmi.AngleUnit | null, defaultValue: TcHmi.AngleUnit): TcHmi.AngleUnit;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toAngleUnitEx(value: TcHmi.AngleUnit | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.AngleUnit | null;
}): IResultObject<TcHmi.AngleUnit | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toBorderStyleValue(value: TcHmi.BorderStyleValue | null): TcHmi.BorderStyleValue | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBorderStyleValue(value: TcHmi.BorderStyleValue | null, defaultValue: TcHmi.BorderStyleValue): TcHmi.BorderStyleValue;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBorderStyleValueEx(value: TcHmi.BorderStyleValue | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.BorderStyleValue | null;
}): IResultObject<TcHmi.BorderStyleValue | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toFontStyle(value: TcHmi.FontStyle | null): TcHmi.FontStyle | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontStyle(value: TcHmi.FontStyle | null, defaultValue: TcHmi.FontStyle): TcHmi.FontStyle;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontStyleEx(value: TcHmi.FontStyle | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.FontStyle | null;
}): IResultObject<TcHmi.FontStyle | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toFontSizeUnit(value: TcHmi.FontSizeUnit | null): TcHmi.FontSizeUnit | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontSizeUnit(value: TcHmi.FontSizeUnit | null, defaultValue: TcHmi.FontSizeUnit): TcHmi.FontSizeUnit;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontSizeUnitEx(value: TcHmi.FontSizeUnit | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.FontSizeUnit | null;
}): IResultObject<TcHmi.FontSizeUnit | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toFontWeight(value: TcHmi.FontWeight | null): TcHmi.FontWeight | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontWeight(value: TcHmi.FontWeight | null, defaultValue: TcHmi.FontWeight): TcHmi.FontWeight;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontWeightEx(value: TcHmi.FontWeight | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.FontWeight | null;
}): IResultObject<TcHmi.FontWeight | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toHorizontalAlignment(value: TcHmi.HorizontalAlignment | null): TcHmi.HorizontalAlignment | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toHorizontalAlignment(value: TcHmi.HorizontalAlignment | null, defaultValue: TcHmi.HorizontalAlignment): TcHmi.HorizontalAlignment;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toHorizontalAlignmentEx(value: TcHmi.HorizontalAlignment | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.HorizontalAlignment | null;
}): IResultObject<TcHmi.HorizontalAlignment | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toScaleModeString(value: TcHmi.ScaleModeString | null): TcHmi.ScaleModeString | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toScaleModeString(value: TcHmi.ScaleModeString | null, defaultValue: TcHmi.ScaleModeString): TcHmi.ScaleModeString;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toScaleModeStringEx(value: TcHmi.ScaleModeString | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.ScaleModeString | null;
}): IResultObject<TcHmi.ScaleModeString | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toSizeMode(value: TcHmi.SizeMode | null): TcHmi.SizeMode | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toSizeMode(value: TcHmi.SizeMode | null, defaultValue: TcHmi.SizeMode): TcHmi.SizeMode;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toSizeModeEx(value: TcHmi.SizeMode | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.SizeMode | null;
}): IResultObject<TcHmi.SizeMode | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toSizeModeWithContent(value: TcHmi.SizeModeWithContent | null): TcHmi.SizeModeWithContent | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toSizeModeWithContent(value: TcHmi.SizeModeWithContent | null, defaultValue: TcHmi.SizeModeWithContent): TcHmi.SizeModeWithContent;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toSizeModeWithContentEx(value: TcHmi.SizeModeWithContent | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.SizeModeWithContent | null;
}): IResultObject<TcHmi.SizeModeWithContent | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toVerticalAlignment(value: TcHmi.VerticalAlignment | null): TcHmi.VerticalAlignment | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toVerticalAlignment(value: TcHmi.VerticalAlignment | null, defaultValue: TcHmi.VerticalAlignment): TcHmi.VerticalAlignment;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toVerticalAlignmentEx(value: TcHmi.VerticalAlignment | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.VerticalAlignment | null;
}): IResultObject<TcHmi.VerticalAlignment | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toVisibility(value: TcHmi.Visibility | null): TcHmi.Visibility | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toVisibility(value: TcHmi.Visibility | null, defaultValue: TcHmi.Visibility): TcHmi.Visibility;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toVisibilityEx(value: TcHmi.Visibility | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.Visibility | null;
}): IResultObject<TcHmi.Visibility | null>;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toToggleState(value: TcHmi.ToggleState | null): TcHmi.ToggleState | null;
/**
 * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toToggleState(value: TcHmi.ToggleState | null, defaultValue: TcHmi.ToggleState): TcHmi.ToggleState;
/**
 * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toToggleStateEx(value: TcHmi.ToggleState | null, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.ToggleState | null;
}): IResultObject<TcHmi.ToggleState | null>;
/**
 * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toFontFamily(value: TcHmi.FontFamily | null | undefined): TcHmi.FontFamily | null;
/**
 * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontFamily(value: TcHmi.FontFamily | null | undefined, defaultValue: TcHmi.FontFamily): TcHmi.FontFamily;
/**
 * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toFontFamilyEx(value: TcHmi.FontFamily | null | undefined, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: TcHmi.FontFamily | null;
}): IResultObject<TcHmi.FontFamily | null>;
/**
 * Converts a value to {number}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toNumber(value: any): number | null;
/**
 * Converts a value to {number}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to number (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toNumber(value: any, defaultValue: number): number;
/**
 * Converts a value to {number}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toNumberEx(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: number | null;
}): IResultObject<number | null>;
/**
 * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toBoolean(value: any): boolean | null;
/**
 * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBoolean(value: any, defaultValue: boolean): boolean;
/**
 * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBooleanEx(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: boolean | null;
}): IResultObject<boolean | null>;
/**
 * Converts a value to {BigInt} and returns the {BigInt} or null if the type of value is not compatible to {BigInt}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toBigInt(value: any): bigint | null;
/**
 * Converts a value to {BigInt} and returns the {BigInt} or null if the type of value is not compatible to {BigInt}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBigInt(value: any, defaultValue: bigint): bigint;
/**
 * Converts a value to {BigInt} and returns the 64 bit {BigInt} or null if the type of value is not compatible to {BigInt}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBigIntEx(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: bigint | null;
}): IResultObject<bigint | null>;
/**
 * Converts a value to 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toBigInt64(value: any): bigint | null;
/**
 * Converts a value to 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBigInt64(value: any, defaultValue: bigint): bigint;
/**
 * Converts a value to 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toBigInt64Ex(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: bigint | null;
}): IResultObject<bigint | null>;
/**
 * Converts a value to unsigned 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
 * @param value The value to convert.
 * @preserve (Part of the public API)
 */
export declare function toUnsignedBigInt64(value: any): bigint | null;
/**
 * Converts a value to unsigned 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
 * @param value The value to convert.
 * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toUnsignedBigInt64(value: any, defaultValue: bigint): bigint;
/**
 * Converts a value to unsigned 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}. Returns a result object for error detection.
 * @param value The value to convert.
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toUnsignedBigInt64Ex(value: any, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: bigint | null;
}): IResultObject<bigint | null>;
/**
 * Converts a value to its enum value (reduced allowed value set) and
 * returns the corresponding number (numeric enums) or string (string enums or js objects)
 * or null if the type of value is not compatible to the enum.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * This overload is: string input for Typescript string enum or js object "enum"
 * @param value The value to convert.
 * @param enumType Typescript string enum object or js object "enum"
 * @preserve (Part of the public API)
 */
export declare function toEnum<T extends Record<string, string>>(value: undefined | null | string, enumType: T): keyof T | null;
/**
 * Converts a value to its enum value (reduced allowed value set) and
 * returns the corresponding number (numeric enums) or string (string enums or js objects)
 * or null if the type of value is not compatible to the enum.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * This overload is: number or string input for Typescript number enum
 * @param value The value to convert.
 * @param enumType Typescript number enum object
 * @preserve (Part of the public API)
 */
export declare function toEnum<T extends Record<string, number | string>>(value: undefined | null | number | string, enumType: T): T[keyof T] | null;
/**
 * Converts a value to its enum value (reduced allowed value set) and
 * returns the corresponding number (numeric enums) or string (string enums or js objects)
 * or the given default value if the type of value is not compatible to the enum.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * This overload is: string input for Typescript string enum or js object "enum" with given defaults
 * @param value The value to convert.
 * @param enumType Typescript number enum object
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toEnum<T extends Record<string, string>, D>(value: undefined | null | string, enumType: T, defaultValue: D): keyof T;
/**
 * Converts a value to its enum value (reduced allowed value set) and
 * returns the corresponding number (numeric enums) or string (string enums or js objects)
 * or the given default value if the type of value is not compatible to the enum.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * This overload is: number or string input for Typescript number enum with given defaults
 * @param value The value to convert.
 * @param enumType Typescript number enum object
 * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toEnum<T extends Record<string, number | string>, D>(value: undefined | null | number | string, enumType: T, defaultValue: D): T[keyof T];
/**
 * Converts a value to enum {number} and returns the enum {number} or null if the type of value is not compatible to enum {Object}.
 * Note: This check also compares the value as toLower and toUpper case string to find a match.
 * Returns a result object for error detection.
 * @param value The value to convert.
 * @param enumType Enum value to convert to
 * @param options options. For exmaple the default value
 * @param options.defaultValue The fallback value (null if not given)
 * @preserve (Part of the public API)
 */
export declare function toEnumEx<T extends TcHmi.Dictionary<any> = any>(value: any, enumType: T, options?: {
    /** The fallback value (null if not given) */
    defaultValue?: any | null;
}): IResultObject<keyof T | null>;
/**
 * Converts a value to the best effort value related to schema addressed by its name or null if no schema related type is matching or schema is unknown.
 * @param value The value to convert.
 * @param typeName TcHmi type name
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @preserve (Part of the public API)
 */
export declare function toType(value: any, typeName: string, options?: {
    readonly convertDirection?: ConvertDirection;
}): any | null;
/**
 * Converts a value to the best effort value related to schema addressed by its name or null if no schema related type is matching or schema is unknown. Returns a result object for error detection.
 * @param value The value to convert.
 * @param typeName TcHmi type name
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @preserve (Part of the public API)
 */
export declare function toTypeEx<T>(value: any, typeName: string, options?: {
    readonly convertDirection?: ConvertDirection;
}): IResultObject<T | null>;
/**
 * Converts a value to the best effort value related to schema or null if no schema related type is matching.
 * @param value The value to convert.
 * @param schema json schema as an object
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @param options.resolveFunctionWriteValue A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead.
 * @preserve (Part of the public API)
 */
export declare function toSchemaType(value: any, schema: TcHmi.JsonSchema | null | undefined, options?: {
    /** Direction of conversion. */
    readonly convertDirection?: ConvertDirection;
    /** A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead. */
    readonly resolveFunctionWriteValue?: boolean;
}): any | null;
/**
 * Converts a value to the best effort value related to schema or null if no schema related type is matching. Returns a result object for error detection.
 * @param value The value to convert.
 * @param schema json schema as an object
 * @param options options. For exmaple the conversion direction
 * @param options.convertDirection Direction of conversion.
 * @param options.resolveFunctionWriteValue A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead.
 * @preserve (Part of the public API)
 */
export declare function toSchemaTypeEx(value: any, schema: TcHmi.JsonSchema | null | undefined, options?: {
    /** Direction of conversion. */
    readonly convertDirection?: ConvertDirection;
    /** A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead. */
    readonly resolveFunctionWriteValue?: boolean;
}): IResultObject;
export interface IResultObject<T extends any = any> extends TcHmi.IResultObject {
    value: T | null;
}
export declare enum ConvertDirection {
    Forward = 0,
    Backward = 1
}
declare const _toObject: typeof toObject;
declare const _toObjectEx: typeof toObjectEx;
declare const _toString: typeof toString;
declare const _toStringEx: typeof toStringEx;
declare const _toDimensionUnit: typeof toDimensionUnit;
declare const _toDimensionUnitEx: typeof toDimensionUnitEx;
declare const _toAngleUnit: typeof toAngleUnit;
declare const _toAngleUnitEx: typeof toAngleUnitEx;
declare const _toBorderStyleValue: typeof toBorderStyleValue;
declare const _toBorderStyleValueEx: typeof toBorderStyleValueEx;
declare const _toFontStyle: typeof toFontStyle;
declare const _toFontStyleEx: typeof toFontStyleEx;
declare const _toFontSizeUnit: typeof toFontSizeUnit;
declare const _toFontSizeUnitEx: typeof toFontSizeUnitEx;
declare const _toFontWeight: typeof toFontWeight;
declare const _toFontWeightEx: typeof toFontWeightEx;
declare const _toHorizontalAlignment: typeof toHorizontalAlignment;
declare const _toHorizontalAlignmentEx: typeof toHorizontalAlignmentEx;
declare const _toScaleModeString: typeof toScaleModeString;
declare const _toScaleModeStringEx: typeof toScaleModeStringEx;
declare const _toSizeMode: typeof toSizeMode;
declare const _toSizeModeEx: typeof toSizeModeEx;
declare const _toSizeModeWithContent: typeof toSizeModeWithContent;
declare const _toSizeModeWithContentEx: typeof toSizeModeWithContentEx;
declare const _toVerticalAlignment: typeof toVerticalAlignment;
declare const _toVerticalAlignmentEx: typeof toVerticalAlignmentEx;
declare const _toVisibility: typeof toVisibility;
declare const _toVisibilityEx: typeof toVisibilityEx;
declare const _toToggleState: typeof toToggleState;
declare const _toToggleStateEx: typeof toToggleStateEx;
declare const _toFontFamily: typeof toFontFamily;
declare const _toFontFamilyEx: typeof toFontFamilyEx;
declare const _toNumber: typeof toNumber;
declare const _toNumberEx: typeof toNumberEx;
declare const _toBoolean: typeof toBoolean;
declare const _toBooleanEx: typeof toBooleanEx;
declare const _toBigInt: typeof toBigInt;
declare const _toBigIntEx: typeof toBigIntEx;
declare const _toBigInt64: typeof toBigInt64;
declare const _toBigInt64Ex: typeof toBigInt64Ex;
declare const _toUnsignedBigInt64: typeof toUnsignedBigInt64;
declare const _toUnsignedBigInt64Ex: typeof toUnsignedBigInt64Ex;
declare const _toEnum: typeof toEnum;
declare const _toEnumEx: typeof toEnumEx;
declare const _toType: typeof toType;
declare const _toTypeEx: typeof toTypeEx;
declare const _toSchemaType: typeof toSchemaType;
declare const _toSchemaTypeEx: typeof toSchemaTypeEx;
declare const _ConvertDirection: typeof ConvertDirection;
type tIResultObject<T extends any = any> = IResultObject<T>;
type tConvertDirection = ConvertDirection;
declare global {
    namespace TcHmi {
        /**
         * Allows converting of values from any type to any type if types are compatible.
         * @preserve (Part of the public API)
         */
        namespace ValueConverter {
            const toObject: typeof _toObject;
            const toObjectEx: typeof _toObjectEx;
            const toString: typeof _toString;
            const toStringEx: typeof _toStringEx;
            const toDimensionUnit: typeof _toDimensionUnit;
            const toDimensionUnitEx: typeof _toDimensionUnitEx;
            const toAngleUnit: typeof _toAngleUnit;
            const toAngleUnitEx: typeof _toAngleUnitEx;
            const toBorderStyleValue: typeof _toBorderStyleValue;
            const toBorderStyleValueEx: typeof _toBorderStyleValueEx;
            const toFontStyle: typeof _toFontStyle;
            const toFontStyleEx: typeof _toFontStyleEx;
            const toFontSizeUnit: typeof _toFontSizeUnit;
            const toFontSizeUnitEx: typeof _toFontSizeUnitEx;
            const toFontWeight: typeof _toFontWeight;
            const toFontWeightEx: typeof _toFontWeightEx;
            const toHorizontalAlignment: typeof _toHorizontalAlignment;
            const toHorizontalAlignmentEx: typeof _toHorizontalAlignmentEx;
            const toScaleModeString: typeof _toScaleModeString;
            const toScaleModeStringEx: typeof _toScaleModeStringEx;
            const toSizeMode: typeof _toSizeMode;
            const toSizeModeEx: typeof _toSizeModeEx;
            const toSizeModeWithContent: typeof _toSizeModeWithContent;
            const toSizeModeWithContentEx: typeof _toSizeModeWithContentEx;
            const toVerticalAlignment: typeof _toVerticalAlignment;
            const toVerticalAlignmentEx: typeof _toVerticalAlignmentEx;
            const toVisibility: typeof _toVisibility;
            const toVisibilityEx: typeof _toVisibilityEx;
            const toToggleState: typeof _toToggleState;
            const toToggleStateEx: typeof _toToggleStateEx;
            const toFontFamily: typeof _toFontFamily;
            const toFontFamilyEx: typeof _toFontFamilyEx;
            const toNumber: typeof _toNumber;
            const toNumberEx: typeof _toNumberEx;
            const toBoolean: typeof _toBoolean;
            const toBooleanEx: typeof _toBooleanEx;
            const toBigInt: typeof _toBigInt;
            const toBigIntEx: typeof _toBigIntEx;
            const toBigInt64: typeof _toBigInt64;
            const toBigInt64Ex: typeof _toBigInt64Ex;
            const toUnsignedBigInt64: typeof _toUnsignedBigInt64;
            const toUnsignedBigInt64Ex: typeof _toUnsignedBigInt64Ex;
            const toEnum: typeof _toEnum;
            const toEnumEx: typeof _toEnumEx;
            const toType: typeof _toType;
            const toTypeEx: typeof _toTypeEx;
            const toSchemaType: typeof _toSchemaType;
            const toSchemaTypeEx: typeof _toSchemaTypeEx;
            const ConvertDirection: typeof _ConvertDirection;
            type IResultObject<T extends any = any> = tIResultObject<T>;
            type ConvertDirection = tConvertDirection;
        }
    }
}
export {};
//# sourceMappingURL=ValueConverter.d.ts.map