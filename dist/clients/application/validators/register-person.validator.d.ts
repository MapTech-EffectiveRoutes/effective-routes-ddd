import { AppNotification } from 'src/common/application/app.notification';
import { RegisterPersonRequest } from '../dtos/request/register-person-request.dto';
import { Repository } from 'typeorm';
import { PersonTypeORM } from '../../infrastructure/persistence/typeorm/entities/person.typeorm';
export declare class RegisterPersonValidator {
    private personRepository;
    constructor(personRepository: Repository<PersonTypeORM>);
    validate(registerPersonRequest: RegisterPersonRequest): Promise<AppNotification>;
}
