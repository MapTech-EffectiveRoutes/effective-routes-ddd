import { IQueryHandler } from '@nestjs/cqrs';
import { GetAccountByIdQuery } from '../../queries/get-account-by-id.query';
export declare class GetAccountByIdHandler implements IQueryHandler<GetAccountByIdQuery> {
    constructor();
    execute(query: GetAccountByIdQuery): Promise<{}>;
}
