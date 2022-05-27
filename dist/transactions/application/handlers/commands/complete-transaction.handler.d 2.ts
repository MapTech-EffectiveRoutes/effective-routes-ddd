import { ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { TransactionTypeORM } from '../../../infrastructure/persistence/typeorm/entities/transaction.typeorm';
import { CompleteTransaction } from '../../commands/complete-transaction.command';
export declare class CompleteTransactionHandler implements ICommandHandler<CompleteTransaction> {
    private transactionRepository;
    constructor(transactionRepository: Repository<TransactionTypeORM>);
    execute(command: CompleteTransaction): Promise<boolean>;
}
