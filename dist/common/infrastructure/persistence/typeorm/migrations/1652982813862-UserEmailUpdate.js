"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmailUpdate1652982813862 = void 0;
const node_sql_reader_1 = require("node-sql-reader");
class UserEmailUpdate1652982813862 {
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
exports.UserEmailUpdate1652982813862 = UserEmailUpdate1652982813862;
//# sourceMappingURL=1652982813862-UserEmailUpdate.js.map