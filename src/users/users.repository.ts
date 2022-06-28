import { Users } from './users.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UsersDto } from './interfaces/users.dto';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
  createUser = async (userDto: UsersDto) => {
    return await this.save(userDto);
  };
}