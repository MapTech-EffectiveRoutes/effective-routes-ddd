import { CommandBus, IEventHandler } from '@nestjs/cqrs';
import { MoneyDeposited } from '../../../../transactions/domain/events/money-deposited.event';
import { AccountTypeORM } from '../../../infrastructure/persistence/typeorm/entities/account.typeorm';
import { Repository } from 'typeorm';
export declare class MoneyDepositedHandler implements IEventHandler<MoneyDeposited> {
    private accountRepository;
    private commandBus;
    constructor(accountRepository: Repository<AccountTypeORM>, commandBus: CommandBus);
    handle(event: MoneyDeposited): Promise<void>;
}
