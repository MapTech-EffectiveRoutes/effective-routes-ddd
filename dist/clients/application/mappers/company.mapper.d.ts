import { Company } from '../../domain/entities/company.entity';
import { CompanyTypeORM } from '../../infrastructure/persistence/typeorm/entities/company.typeorm';
export declare class CompanyMapper {
    static toTypeORM(company: Company): CompanyTypeORM;
}
