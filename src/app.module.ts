import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UserModule,
    AuthModule,
    ProductModule,
  ],
})
export class AppModule {}
