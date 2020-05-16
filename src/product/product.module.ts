import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
import { ProductResolver } from "./product.resolver";
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        UserModule
    ],
    providers: [ProductResolver ,ProductService],
    exports: [ProductService],
})
export class ProductModule {}