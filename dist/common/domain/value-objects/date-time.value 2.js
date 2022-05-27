"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTime = void 0;
const moment = require("moment-timezone");
class DateTime {
    constructor(datetime) {
        this.datetime = datetime;
    }
    static from(datetime) {
        return new DateTime(datetime);
    }
    static fromString(datetime) {
        const date = moment(datetime, 'YYYY-MM-DD HH:mm:ss').toDate();
        return new DateTime(date);
    }
    static utcNow() {
        moment.tz.setDefault('UTC');
        const datetime = moment.tz().toDate();
        return new DateTime(datetime);
    }
    format(format = 'MM/DD/YYYY') {
        return moment(this.datetime).format();
    }
}
exports.DateTime = DateTime;
//# sourceMappingURL=date-time.value.js.map