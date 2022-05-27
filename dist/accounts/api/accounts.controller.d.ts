import { OpenAccountRequest } from '../application/dtos/request/open-account-request.dto';
import { AccountsApplicationService } from '../application/services/accounts-application.service';
import { QueryBus } from '@nestjs/cqrs';
export declare class AccountsController {
    private readonly accountsApplicationService;
    private readonly queryBus;
    constructor(accountsApplicationService: AccountsApplicationService, queryBus: QueryBus);
    open(openAccountRequest: OpenAccountRequest, response: any): Promise<object>;
    getAccounts(response: any): Promise<object>;
    getById(accountId: number, response: any): Promise<object>;
}
