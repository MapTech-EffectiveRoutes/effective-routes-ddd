import { AppError } from '../application/app.error';
export declare class Envelope {
    readonly result: any;
    readonly errors: AppError[];
    constructor(result: any, errors: AppError[]);
    static ok(result: any): Envelope;
    static error(errors: AppError[]): Envelope;
    static serverError(): Envelope;
    static notFound(): Envelope;
}
