import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductInput, UpdateProductInput } from './product.type';
import {getConnection} from "typeorm";

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product> ) { }

    async getProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async createProduct(productInput: ProductInput): Promise<Product> {
        return this.productRepository.create(productInput).save();
    }

    async updateProduct(productInput: UpdateProductInput): Promise<Product | undefined> {
        const product = Object.assign(new Product, productInput)

        await getConnection()
            .createQueryBuilder()
            .update(Product)
            .set(product)
            .where("id = :id", {id: productInput.id})
            .execute();
            
        return this.productRepository.findOne(productInput.id)
        
    }

    async deleteProduct(productId: string): Promise<boolean> {
        const { affected } = await this.productRepository.delete({ id: productId });
        if(affected && affected > 0 ) return true;
        return false;
    }

}
