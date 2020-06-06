"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config_1 = __importDefault(require("config"));
const type = config_1.default.get('db.type');
const host = config_1.default.get('db.host');
const port = config_1.default.get('db.port');
const username = config_1.default.get('db.username');
const password = config_1.default.get('db.password');
const database = config_1.default.get('db.database');
const synchronize = config_1.default.get('db.synchronize');
exports.typeOrmConfig = {
    type: type,
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrationsTableName: 'migrations_typeorm',
    migrations: ['dist/migrations/*{.ts,.js}'],
    migrationsRun: true,
    synchronize: synchronize,
};
//# sourceMappingURL=typeorm.config.js.map