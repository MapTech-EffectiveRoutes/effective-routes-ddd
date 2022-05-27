import { ClientTypeORM } from './client.typeorm';
import { RucTypeORM } from '../value-objects/ruc.typeorm';
import { CompanyNameTypeORM } from '../value-objects/company-name.typeorm';
export declare class CompanyTypeORM extends ClientTypeORM {
    companyName: CompanyNameTypeORM;
    ruc: RucTypeORM;
}
