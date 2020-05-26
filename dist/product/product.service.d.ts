import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductInput, UpdateProductInput } from './product.type';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    getProducts(): Promise<Product[]>;
    createProduct(productInput: ProductInput): Promise<Product>;
    updateProduct(productInput: UpdateProductInput): Promise<Product | undefined>;
    deleteProduct(productId: string): Promise<boolean>;
}
