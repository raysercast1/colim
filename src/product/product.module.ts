import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductResolver, ProductService],
    exports: [ProductService],
})
export class ProductModule {}
