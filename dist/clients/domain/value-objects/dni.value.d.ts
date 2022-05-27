import { AppNotification } from "src/common/application/app.notification";
import { Result } from "typescript-result";
export declare class Dni {
    private readonly value;
    private static MAX_LENGTH;
    private constructor();
    getValue(): string;
    static create(value: string): Result<AppNotification, Dni>;
}
