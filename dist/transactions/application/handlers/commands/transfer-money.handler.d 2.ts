import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { AccountTypeORM } from '../../../../accounts/infrastructure/persistence/typeorm/entities/account.typeorm';
import { TransferMoney } from '../../commands/transfer-money.command';
import { TransactionTypeORM } from '../../../infrastructure/persistence/typeorm/entities/transaction.typeorm';
export declare class TransferMoneyHandler implements ICommandHandler<TransferMoney> {
    private accountRepository;
    private transactionRepository;
    private publisher;
    constructor(accountRepository: Repository<AccountTypeORM>, transactionRepository: Repository<TransactionTypeORM>, publisher: EventPublisher);
    execute(command: TransferMoney): Promise<number>;
}
