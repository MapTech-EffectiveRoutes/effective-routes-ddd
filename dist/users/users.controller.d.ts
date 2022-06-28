import { UsersDto } from './interfaces/users.dto';
export declare class UsersController {
    getUsers(): string;
    create(usersDto: UsersDto): UsersDto;
    findOne(id: string): string;
    update(id: string): string;
    remove(id: string): string;
}
