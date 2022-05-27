import { AccountTypeORM } from '../../infrastructure/persistence/typeorm/entities/account.typeorm';
import { Account } from '../../domain/entities/account.entity';
export declare class AccountMapper {
    static toTypeORM(account: Account): AccountTypeORM;
}
