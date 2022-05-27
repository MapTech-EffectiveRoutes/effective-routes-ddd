import { AppNotification } from "src/common/application/app.notification";
import { Result } from "typescript-result";
export declare class Password {
    private value;
    private static MAX_LENGTH;
    private constructor();
    static create(value: string): Result<AppNotification, Password>;
}
