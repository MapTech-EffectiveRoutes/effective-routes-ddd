import { CommandBus } from '@nestjs/cqrs';
import { OpenAccountResponse } from '../dtos/response/open-account-response.dto';
import { OpenAccountValidator } from '../validators/open-account.validator';
import { AppNotification } from 'src/common/application/app.notification';
import { Result } from 'typescript-result';
import { OpenAccountRequest } from '../dtos/request/open-account-request.dto';
export declare class AccountsApplicationService {
    private commandBus;
    private openAccountValidator;
    constructor(commandBus: CommandBus, openAccountValidator: OpenAccountValidator);
    open(openAccountRequestDto: OpenAccountRequest): Promise<Result<AppNotification, OpenAccountResponse>>;
}
