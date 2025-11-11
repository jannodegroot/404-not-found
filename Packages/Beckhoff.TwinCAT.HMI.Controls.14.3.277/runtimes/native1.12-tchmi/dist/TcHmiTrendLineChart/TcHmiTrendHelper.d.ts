/**
 * Check if the string is a Datetime
 */
export declare function isDatetime(date: string | null | undefined): date is string;
/**
 * Check if the string is a keyWord (Latest, First)
 */
export declare function isKeyword(keyword: string | null): keyword is string;
/**
 * Check if the string is a timespan
 */
export declare function isTimespan(timespan: string | null | undefined): timespan is string;
/**
 * Convert milliseconds to iso 8601 string
 * @param milliSec Milliseconds
 */
export declare function __milliSecToIso(milliSec: number): string;
/**
 * Convert iso 8601 string to milliseconds
 * @param t Iso 8601 string
 */
export declare function __isoToMilliSec(t: string): number;
//# sourceMappingURL=TcHmiTrendHelper.d.ts.map