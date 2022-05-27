import { GetCustomersPersonQuery } from '../../queries/get-customers-person.query';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetCustomersPersonDto } from '../../dtos/queries/get-customers-person.dto';
export declare class GetCustomersPersonHandler implements IQueryHandler<GetCustomersPersonQuery> {
    constructor();
    execute(query: GetCustomersPersonQuery): Promise<GetCustomersPersonDto[]>;
}
