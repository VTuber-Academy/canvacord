interface GetLinesParams {
    text: string;
    ctx: CanvasRenderingContext2D;
    maxWidth: number;
}

export = Util;
declare class Util {
    /**
     * Validates hex
     * @param {string} hex Hex code to validate
     * @returns {boolean}
     */
    static validateHex(hex: string): boolean;
    /**
     * Converts regular timestamp to discord like time
     * @param {Date|number} time Timestamp to convert
     * @returns {string}
     */
    static discordTime(time?: Date | number): string;
    /**
     * Formats time
     * @param {number} time Time to format
     * @returns {string}
     */
    static formatTime(time: number): string;
    /**
     * Shorten text.
     * @param {string} text Text to shorten
     * @param {number} len Max Length
     * @returns {string}
     */
    static shorten(text: string, len: number): string;
    /**
     * Converts numbers into units like `1K`, `1M`, `1B` etc.
     * @param {number|string} num
     * @returns {string}
     * @returns {string}
     */
    static toAbbrev(num: number | string): string;
    /**
     * Renders text with emoji
     * @param {CanvasRenderingContext2D} ctx CanvasRenderingContext2D
     * @param {string} msg Message
     * @param {number} x X
     * @param {number} y Y
     * @returns {Promise<void>}
     */
    static renderEmoji(ctx: CanvasRenderingContext2D, msg: string, x: number, y: number): Promise<void>;
    /**
     * Returns formatted hex code
     * @param {string} hex Hex code to format
     * @param {string} alt Alt color
     * @returns {string}
     */
    static formatHex(hex: string, alt?: string): string;
    /**
     * Inverts hex color
     * @param {string} hex Hex color code to invert
     * @returns {string}
     */
    static invertColor(hex: string): string;
    /**
     * Returns acronym
     * @param {string} name Name to parse acronym
     * @returns {string}
     */
    static getAcronym(name: string): string;

    
    
    /**
     * Returns array of lines
     * @param {GetLinesParams} params - The object containing the method's parameters
     * @param {string} params.text - Text
     * @param {CanvasRenderingContext2D} params.ctx - CanvasRenderingContext2D
     * @param {number} params.maxWidth - Max width
     * @returns {string[]}
     */
    static getLines({ text, ctx, maxWidth }: GetLinesParams): string[];
}
//# sourceMappingURL=Util.d.ts.map
