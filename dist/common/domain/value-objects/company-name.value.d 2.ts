import { Result } from 'typescript-result';
import { AppNotification } from '../../application/app.notification';
export declare class CompanyName {
    private readonly value;
    private static MAX_LENGTH;
    private constructor();
    getValue(): string;
    static create(name: string): Result<AppNotification, CompanyName>;
}
