"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1652800321507 = void 0;
const node_sql_reader_1 = require("node-sql-reader");
class InitialSchema1652800321507 {
    async up(queryRunner) {
        const folder = __dirname;
        const path = folder + '/initial-schema.sql';
        let queries = node_sql_reader_1.SqlReader.readSqlFile(path);
        for (let query of queries) {
            await queryRunner.query(query);
        }
    }
    async down(queryRunner) {
    }
}
exports.InitialSchema1652800321507 = InitialSchema1652800321507;
//# sourceMappingURL=1652800321507-InitialSchema.js.map