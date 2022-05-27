export declare class AuditTrailTypeORM {
    createdAt: string;
    createdBy: number;
    updatedAt: string;
    updatedBy: number;
    private constructor();
    static from(createdAt: string, createdBy: number, updatedAt: string, updatedBy: number): AuditTrailTypeORM;
}
