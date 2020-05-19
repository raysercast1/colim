import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductInput } from './product.type';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    getProducts(): Promise<Product[]>;
    createProduct(productInput: ProductInput): Promise<Product>;
}
