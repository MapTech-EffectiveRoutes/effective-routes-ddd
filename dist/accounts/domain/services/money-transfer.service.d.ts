import { Account } from '../entities/account.entity';
import { Money } from '../../../common/domain/value-objects/money.value';
export declare class MoneyTransferService {
    transfer(fromAccount: Account, toAccount: Account, amount: Money): void;
}
