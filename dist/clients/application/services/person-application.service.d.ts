import { CommandBus } from '@nestjs/cqrs';
import { RegisterPersonRequest } from '../dtos/request/register-person-request.dto';
import { RegisterPersonResponse } from '../dtos/response/register-person-response.dto';
import { RegisterPersonValidator } from '../validators/register-person.validator';
import { AppNotification } from 'src/common/application/app.notification';
import { Result } from 'typescript-result';
export declare class PersonApplicationService {
    private commandBus;
    private registerPersonValidator;
    constructor(commandBus: CommandBus, registerPersonValidator: RegisterPersonValidator);
    register(registerPersonRequest: RegisterPersonRequest): Promise<Result<AppNotification, RegisterPersonResponse>>;
}
