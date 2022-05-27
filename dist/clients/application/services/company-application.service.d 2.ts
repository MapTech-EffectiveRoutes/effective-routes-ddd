import { CommandBus } from '@nestjs/cqrs';
import { AppNotification } from 'src/common/application/app.notification';
import { Result } from 'typescript-result';
import { RegisterCompanyValidator } from '../validators/register-company.validator';
import { RegisterCompanyRequest } from '../dtos/request/register-company-request.dto';
import { RegisterCompanyResponse } from '../dtos/response/register-company-response.dto';
export declare class CompanyApplicationService {
    private commandBus;
    private registerCompanyValidator;
    constructor(commandBus: CommandBus, registerCompanyValidator: RegisterCompanyValidator);
    register(registerCompanyRequest: RegisterCompanyRequest): Promise<Result<AppNotification, RegisterCompanyResponse>>;
}
