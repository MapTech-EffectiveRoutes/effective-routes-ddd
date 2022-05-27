import { Result } from 'typescript-result';
import { AppNotification } from '../../application/app.notification';
export declare class PersonName {
    private readonly firstName;
    private readonly lastName;
    private static MAX_LENGTH;
    private constructor();
    getFirstName(): string;
    getLastName(): string;
    static create(firstName: string, lastName: string): Result<AppNotification, PersonName>;
}
