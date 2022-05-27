import { Result } from 'typescript-result';
import { AppNotification } from '../../application/app.notification';
export declare class Address {
    private address;
    private districtId;
    private static ADDRESS_MAX_LENGTH;
    private static DISTRICT_ID_MAX_LENGTH;
    private constructor();
    static create(address: string, districtId: string): Result<AppNotification, Address>;
}
