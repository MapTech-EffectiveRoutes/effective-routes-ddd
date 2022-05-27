import { AppNotification } from "src/common/application/app.notification";
import { Result } from "typescript-result";
export declare class Ruc {
    private value;
    private static MAX_LENGTH;
    private constructor();
    static create(ruc: string): Result<AppNotification, Ruc>;
    getValue(): string;
}
