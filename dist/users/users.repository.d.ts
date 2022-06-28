import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { UsersDto } from './interfaces/users.dto';
export declare class UsersRepository extends Repository<Users> {
    createUser: (userDto: UsersDto) => Promise<UsersDto & Users>;
}
