import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {

    type: 'postgres',
    host: '172.17.0.2',
    port: 5432,
    username: 'colimptexdb',
    password: 'postgres',
    database: 'colimptexdb2',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}