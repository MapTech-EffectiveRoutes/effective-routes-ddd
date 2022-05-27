import { RegisterPersonRequest } from '../application/dtos/request/register-person-request.dto';
import { CompanyApplicationService } from '../application/services/company-application.service';
import { QueryBus } from '@nestjs/cqrs';
import { PersonApplicationService } from '../application/services/person-application.service';
import { RegisterCompanyRequest } from '../application/dtos/request/register-company-request.dto';
export declare class ClientsController {
    private readonly personApplicationService;
    private readonly companyApplicationService;
    private readonly queryBus;
    constructor(personApplicationService: PersonApplicationService, companyApplicationService: CompanyApplicationService, queryBus: QueryBus);
    registerPerson(registerPersonRequest: RegisterPersonRequest, response: any): Promise<object>;
    registerCompany(registerCompanyRequest: RegisterCompanyRequest, response: any): Promise<object>;
    getCustomersPerson(response: any): Promise<object>;
    getCustomersCompany(response: any): Promise<object>;
}
