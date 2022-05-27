import { Result } from 'typescript-result';
import { AppNotification } from '../../../common/application/app.notification';
export declare class AccountNumber {
    private readonly value;
    private static MAX_LENGTH;
    private constructor();
    static create(value: string): Result<AppNotification, AccountNumber>;
    getValue(): string;
}
