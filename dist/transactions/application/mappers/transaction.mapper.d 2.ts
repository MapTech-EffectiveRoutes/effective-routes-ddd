import { Transaction } from '../../domain/entities/transaction.entity';
import { TransactionTypeORM } from '../../infrastructure/persistence/typeorm/entities/transaction.typeorm';
export declare class TransactionMapper {
    static toTypeORM(transaction: Transaction): TransactionTypeORM;
}
