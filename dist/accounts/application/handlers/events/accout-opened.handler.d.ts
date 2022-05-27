import { IEventHandler } from '@nestjs/cqrs';
import { AccountOpened } from '../../../domain/events/account-opened.event';
export declare class AccountOpenedHandler implements IEventHandler<AccountOpened> {
    constructor();
    handle(event: AccountOpened): void;
}
