"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Envelope = void 0;
const app_error_1 = require("../application/app.error");
class Envelope {
    constructor(result, errors) {
        this.result = result;
        this.errors = errors;
    }
    static ok(result) {
        return new Envelope(result, []);
    }
    static error(errors) {
        if (errors == null)
            errors = [];
        return new Envelope(null, errors);
    }
    static serverError() {
        const errors = [];
        errors.push(new app_error_1.AppError('Internal Server Error', null));
        return new Envelope(null, errors);
    }
    static notFound() {
        const errors = [];
        errors.push(new app_error_1.AppError('Entity Not Found', null));
        return new Envelope(null, errors);
    }
}
exports.Envelope = Envelope;
//# sourceMappingURL=envelope.js.map