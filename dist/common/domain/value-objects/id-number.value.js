"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdNumber = void 0;
class IdNumber {
    constructor(value) {
        this.value = Number(value);
    }
    static of(value) {
        return new IdNumber(value);
    }
    getValue() {
        return Number(this.value);
    }
}
exports.IdNumber = IdNumber;
//# sourceMappingURL=id-number.value.js.map