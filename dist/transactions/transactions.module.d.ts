import { DepositMoneyHandler } from './application/handlers/commands/deposit-money.handler';
import { WithdrawMoneyHandler } from './application/handlers/commands/withdraw-money.handler';
import { TransferMoneyHandler } from './application/handlers/commands/transfer-money.handler';
import { MoneyTransferredHandler } from './application/handlers/events/money-transferred.handler';
import { CompleteTransactionHandler } from './application/handlers/commands/complete-transaction.handler';
export declare const CommandHandlers: (typeof DepositMoneyHandler | typeof WithdrawMoneyHandler | typeof TransferMoneyHandler | typeof CompleteTransactionHandler)[];
export declare const EventHandlers: (typeof MoneyTransferredHandler)[];
export declare const QueryHandlers: any[];
export declare class TransactionsModule {
}
