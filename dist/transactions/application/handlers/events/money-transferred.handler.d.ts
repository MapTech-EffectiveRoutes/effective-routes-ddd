import { IEventHandler } from '@nestjs/cqrs';
import { MoneyTransferred } from '../../../../transactions/domain/events/money-transferred.event';
export declare class MoneyTransferredHandler implements IEventHandler<MoneyTransferred> {
    constructor();
    handle(event: MoneyTransferred): Promise<void>;
}
