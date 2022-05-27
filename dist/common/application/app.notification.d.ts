import { AppError } from './app.error';
export declare class AppNotification {
    private errors;
    private cause;
    addError(message: string, cause: Error): void;
    hasErrors(): boolean;
    getErrors(): AppError[];
}
