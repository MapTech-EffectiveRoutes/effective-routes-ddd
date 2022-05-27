export declare class DateTime {
    private datetime;
    private constructor();
    static from(datetime: Date): DateTime;
    static fromString(datetime: string): DateTime;
    static utcNow(): DateTime;
    format(format?: string): string;
}
