import { IQueryHandler } from '@nestjs/cqrs';
import { GetAccountsQuery } from '../../queries/get-accounts.query';
import { GetAccountsDto } from '../../dtos/queries/get-accounts.dto';
export declare class GetAccountsHandler implements IQueryHandler<GetAccountsQuery> {
    constructor();
    execute(query: GetAccountsQuery): Promise<GetAccountsDto[]>;
}
