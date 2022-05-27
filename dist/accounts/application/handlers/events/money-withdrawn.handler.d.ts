import { CommandBus, IEventHandler } from '@nestjs/cqrs';
import { AccountTypeORM } from '../../../infrastructure/persistence/typeorm/entities/account.typeorm';
import { Repository } from 'typeorm';
import { MoneyWithdrawn } from '../../../../transactions/domain/events/money-withdrawn.event';
export declare class MoneyWithdrawnHandler implements IEventHandler<MoneyWithdrawn> {
    private accountRepository;
    private commandBus;
    constructor(accountRepository: Repository<AccountTypeORM>, commandBus: CommandBus);
    handle(event: MoneyWithdrawn): Promise<void>;
}
