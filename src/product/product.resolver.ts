import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ProductType, ProductInput } from './product.type';
import { ProductService } from './product.service';
import { UseGuards } from "@nestjs/common";
import { GQLAuthGuard } from "src/auth/GQLAuth.guard";

@Resolver(() => ProductType)
export class ProductResolver {
    constructor(
        private readonly productService: ProductService,
    ) { }


    @Query(() => [ProductType])
    products() {
        return this.productService.getProducts();
    }

    @UseGuards(GQLAuthGuard)
    @Mutation(() => ProductType)
    createProduct(@Args('product') product: ProductInput) {
        return this.productService.createProduct(product);
    }
}