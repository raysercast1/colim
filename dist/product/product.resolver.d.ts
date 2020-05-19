import { ProductInput } from './product.type';
import { ProductService } from './product.service';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    products(): Promise<import("./product.entity").Product[]>;
    createProduct(product: ProductInput): Promise<import("./product.entity").Product>;
}
