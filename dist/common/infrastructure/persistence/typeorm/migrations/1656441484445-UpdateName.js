"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateName1656441484445 = void 0;
const node_sql_reader_1 = require("node-sql-reader");
class UpdateName1656441484445 {
    async up(queryRunner) {
        const folder = __dirname;
        const path = folder + '/update-name.sql';
        let queries = node_sql_reader_1.SqlReader.readSqlFile(path);
        for (let query of queries) {
            await queryRunner.query(query);
        }
    }
    async down(queryRunner) {
    }
}
exports.UpdateName1656441484445 = UpdateName1656441484445;
//# sourceMappingURL=1656441484445-UpdateName.js.map