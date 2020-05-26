import { ProductInput, UpdateProductInput } from './product.type';
import { ProductService } from './product.service';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    products(): Promise<import("./product.entity").Product[]>;
    createProduct(product: ProductInput): Promise<import("./product.entity").Product>;
    updateProduct(product: UpdateProductInput): Promise<import("./product.entity").Product>;
    deleteProduct(productId: string): Promise<boolean>;
}
