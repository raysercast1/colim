import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import config from 'config';

const type: any = config.get('db.type');
const host: string = config.get('db.host');
const port: number = config.get('db.port');
const username: any = config.get('db.username');
const password: any = config.get('db.password');
const database: string = config.get('db.database');
const synchronize: boolean = config.get('db.synchronize');


export const typeOrmConfig: TypeOrmModuleOptions = {

    type: 'postgres',
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: synchronize,
}