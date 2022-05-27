import { AppNotification } from 'src/common/application/app.notification';
import { Repository } from 'typeorm';
import { CompanyTypeORM } from '../../infrastructure/persistence/typeorm/entities/company.typeorm';
import { RegisterCompanyRequest } from '../dtos/request/register-company-request.dto';
export declare class RegisterCompanyValidator {
    private companyRepository;
    constructor(companyRepository: Repository<CompanyTypeORM>);
    validate(registerCompanyRequest: RegisterCompanyRequest): Promise<AppNotification>;
}
