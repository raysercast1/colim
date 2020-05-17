import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserWithPassword } from './user/user.entity';
import path from 'path';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '172.17.0.2',
    port: 5432,
    username: 'colimptexdb',
    password: 'postgres',
    database: 'colimptexdb2',
    entities: [path.join(__dirname, '/../**/*.entity.{js,ts}')],
    synchronize: true
  }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      context: ({req }) => ({ req })
    }),
    UserModule,
    AuthModule,
    ProductModule,
  ],
})
export class AppModule {}
