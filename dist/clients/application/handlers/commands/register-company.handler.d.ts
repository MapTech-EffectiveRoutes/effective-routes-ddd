import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { RegisterCompany } from 'src/clients/application/commands/register-company.command';
import { Repository } from 'typeorm';
import { CompanyTypeORM } from '../../../infrastructure/persistence/typeorm/entities/company.typeorm';
export declare class RegisterCompanyHandler implements ICommandHandler<RegisterCompany> {
    private companyRepository;
    private publisher;
    constructor(companyRepository: Repository<CompanyTypeORM>, publisher: EventPublisher);
    execute(command: RegisterCompany): Promise<number>;
}
