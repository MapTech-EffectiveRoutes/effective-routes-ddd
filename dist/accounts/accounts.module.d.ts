import { AccountOpenedHandler } from './application/handlers/events/accout-opened.handler';
import { GetAccountByIdHandler } from './application/handlers/queries/get-account-by-id.handler';
import { MoneyDepositedHandler } from './application/handlers/events/money-deposited.handler';
import { OpenAccountHandler } from './application/handlers/commands/open-account.handler';
import { MoneyWithdrawnHandler } from './application/handlers/events/money-withdrawn.handler';
import { MoneyTransferredHandler } from './application/handlers/events/money-transferred.handler';
export declare const CommandHandlers: (typeof OpenAccountHandler)[];
export declare const EventHandlers: (typeof AccountOpenedHandler | typeof MoneyDepositedHandler | typeof MoneyWithdrawnHandler | typeof MoneyTransferredHandler)[];
export declare const QueryHandlers: (typeof GetAccountByIdHandler)[];
export declare class AccountsModule {
}
