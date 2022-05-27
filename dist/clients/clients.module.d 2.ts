import { RegisterCompanyHandler } from './application/handlers/commands/register-company.handler';
import { PersonRegisteredHandler } from './application/handlers/events/person-registered.handler';
import { GetCustomersPersonHandler } from './application/handlers/queries/get-customers-person.handler';
import { RegisterPersonHandler } from './application/handlers/commands/register-person.handler';
import { CompanyRegisteredHandler } from './application/handlers/events/company-registered.handler';
import { GetCustomersCompanyHandler } from './application/handlers/queries/get-customers-company.handler';
import { MoneyTransferredHandler } from './application/handlers/events/money-transferred.handler';
export declare const CommandHandlers: (typeof RegisterCompanyHandler | typeof RegisterPersonHandler)[];
export declare const EventHandlers: (typeof PersonRegisteredHandler | typeof CompanyRegisteredHandler | typeof MoneyTransferredHandler)[];
export declare const QueryHandlers: (typeof GetCustomersPersonHandler | typeof GetCustomersCompanyHandler)[];
export declare class ClientsModule {
}
