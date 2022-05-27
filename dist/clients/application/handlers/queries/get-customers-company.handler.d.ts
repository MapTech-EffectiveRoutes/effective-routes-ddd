import { GetCustomersCompanyQuery } from '../../queries/get-customers-company.query';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetCustomersCompanyDto } from '../../dtos/queries/get-customers-company.dto';
export declare class GetCustomersCompanyHandler implements IQueryHandler<GetCustomersCompanyQuery> {
    constructor();
    execute(query: GetCustomersCompanyQuery): Promise<GetCustomersCompanyDto[]>;
}
