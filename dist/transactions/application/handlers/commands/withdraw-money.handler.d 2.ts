import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { AccountTypeORM } from '../../../../accounts/infrastructure/persistence/typeorm/entities/account.typeorm';
import { WithdrawMoney } from '../../commands/withdraw-money.command';
import { TransactionTypeORM } from '../../../infrastructure/persistence/typeorm/entities/transaction.typeorm';
export declare class WithdrawMoneyHandler implements ICommandHandler<WithdrawMoney> {
    private accountRepository;
    private transactionRepository;
    private publisher;
    constructor(accountRepository: Repository<AccountTypeORM>, transactionRepository: Repository<TransactionTypeORM>, publisher: EventPublisher);
    execute(command: WithdrawMoney): Promise<number>;
}
