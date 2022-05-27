"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterData1652800330962 = void 0;
const node_sql_reader_1 = require("node-sql-reader");
class MasterData1652800330962 {
    async up(queryRunner) {
        const folder = __dirname;
        const path = folder + '/master-data.sql';
        let queries = node_sql_reader_1.SqlReader.readSqlFile(path);
        for (let query of queries) {
            await queryRunner.query(query);
        }
    }
    async down(queryRunner) {
    }
}
exports.MasterData1652800330962 = MasterData1652800330962;
//# sourceMappingURL=1652800330962-MasterData.js.map