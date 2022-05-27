export declare class AppError {
    readonly message: string;
    readonly cause: Error;
    constructor(message: string, cause: Error);
}
