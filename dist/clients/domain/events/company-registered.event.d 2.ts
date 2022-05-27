import { CustomerRegistered } from './customer-registered.event';
export declare class CompanyRegistered extends CustomerRegistered {
    readonly id: number;
    readonly name: string;
    readonly ruc: string;
    constructor(id: number, name: string, ruc: string);
}
