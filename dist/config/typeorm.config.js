"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: '172.17.0.2',
    port: 5432,
    username: 'colimptexdb',
    password: 'postgres',
    database: 'colimptexdb2',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map