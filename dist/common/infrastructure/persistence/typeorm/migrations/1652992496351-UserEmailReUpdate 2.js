"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmailReUpdate1652992496351 = void 0;
const node_sql_reader_1 = require("node-sql-reader");
class UserEmailReUpdate1652992496351 {
    async up(queryRunner) {
        const folder = __dirname;
        const path = folder + '/user-email-update.sql';
        let queries = node_sql_reader_1.SqlReader.readSqlFile(path);
        for (let query of queries) {
            await queryRunner.query(query);
        }
    }
    async down(queryRunner) {
    }
}
exports.UserEmailReUpdate1652992496351 = UserEmailReUpdate1652992496351;
//# sourceMappingURL=1652992496351-UserEmailReUpdate.js.map