import { CommandBus, IEventHandler } from '@nestjs/cqrs';
import { AccountTypeORM } from '../../../infrastructure/persistence/typeorm/entities/account.typeorm';
import { Repository } from 'typeorm';
import { MoneyTransferred } from '../../../../transactions/domain/events/money-transferred.event';
export declare class MoneyTransferredHandler implements IEventHandler<MoneyTransferred> {
    private accountRepository;
    private commandBus;
    constructor(accountRepository: Repository<AccountTypeORM>, commandBus: CommandBus);
    handle(event: MoneyTransferred): Promise<void>;
}
