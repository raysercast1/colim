import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProviderModule } from './provider/provider.module';
import { ClientModule } from './client/client.module';
import { OrderModule } from './order/order.module';
import { SellerModule } from './seller/seller.module';
import { ContainerModule } from './container/container.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({req}) => ({req}),
    }),
    ProductModule,
    AuthModule,
    UserModule,
    ProviderModule,
    ClientModule,
    OrderModule,
    SellerModule,
    ContainerModule
  ],
})
export class AppModule {}
