import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { DepositMoney } from '../../commands/deposit-money.command';
import { AccountTypeORM } from '../../../../accounts/infrastructure/persistence/typeorm/entities/account.typeorm';
import { TransactionTypeORM } from '../../../infrastructure/persistence/typeorm/entities/transaction.typeorm';
export declare class DepositMoneyHandler implements ICommandHandler<DepositMoney> {
    private accountRepository;
    private transactionRepository;
    private publisher;
    constructor(accountRepository: Repository<AccountTypeORM>, transactionRepository: Repository<TransactionTypeORM>, publisher: EventPublisher);
    execute(command: DepositMoney): Promise<number>;
}
