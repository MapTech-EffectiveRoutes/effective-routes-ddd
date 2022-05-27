import { UserId } from '../../../users/domain/value-objects/user-id.value';
import { DateTime } from './date-time.value';
export declare class AuditTrail {
    private readonly createdAt;
    private readonly createdBy;
    private readonly updatedAt;
    private readonly updatedBy;
    private constructor();
    static from(createdAt: DateTime, createdBy: UserId, updatedAt: DateTime, updatedBy: UserId): AuditTrail;
    getCreatedAt(): DateTime;
    getCreatedBy(): UserId;
    getUpdatedAt(): DateTime;
    getUpdatedBy(): UserId;
}
