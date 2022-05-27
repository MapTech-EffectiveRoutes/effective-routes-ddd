import { ClientTypeORM } from './client.typeorm';
import { DniTypeORM } from '../value-objects/dni.typeorm';
import { PersonNameTypeORM } from '../value-objects/person-name.typeorm';
export declare class PersonTypeORM extends ClientTypeORM {
    name: PersonNameTypeORM;
    dni: DniTypeORM;
}
