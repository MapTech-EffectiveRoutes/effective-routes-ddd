import { Response } from 'express';
import { Envelope } from './envelope';
import { AppError } from '../application/app.error';
export declare class ApiController {
    static ok(response: Response, result: object): Envelope;
    static created(response: Response, result: object): Envelope;
    static error(response: Response, errors: AppError[]): Envelope;
    static serverError(response: Response, error: any): Envelope;
    static notFound(response: Response): Envelope;
}
