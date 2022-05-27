"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const envelope_1 = require("./envelope");
class ApiController {
    static ok(response, result) {
        response.status(common_1.HttpStatus.OK);
        return envelope_1.Envelope.ok(result);
    }
    static created(response, result) {
        response.status(common_1.HttpStatus.CREATED);
        return envelope_1.Envelope.ok(result);
    }
    static error(response, errors) {
        response.status(common_1.HttpStatus.BAD_REQUEST);
        return envelope_1.Envelope.error(errors);
    }
    static serverError(response, error) {
        console.log(error);
        response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return envelope_1.Envelope.serverError();
    }
    static notFound(response) {
        response.status(common_1.HttpStatus.NOT_FOUND);
        return envelope_1.Envelope.notFound();
    }
}
exports.ApiController = ApiController;
//# sourceMappingURL=api.controller.js.map