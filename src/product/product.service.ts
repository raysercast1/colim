import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product, ProductInput } from "./product.entity";
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

    async getProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async createProduct(productInput: ProductInput): Promise<Product> {
        return this.productRepository.create(productInput).save();
    }
}