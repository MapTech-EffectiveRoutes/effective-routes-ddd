import { PersonTypeORM } from '../../infrastructure/persistence/typeorm/entities/person.typeorm';
import { Person } from '../../domain/entities/person.entity';
export declare class PersonMapper {
    static toTypeORM(person: Person): PersonTypeORM;
}
