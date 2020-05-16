import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { Product, ProductInput } from "./product.entity";
import { ProductService } from "./product.service";
import { UseGuards } from "@nestjs/common";
// import { UseGuards } from "@nestjs/common";
// import { GQLAuthGuard } from '../auth/GQLAuth.guard';
// import { UserService } from '../user/user.service';



@Resolver(() => Product)
export class ProductResolver {
    constructor(
        private readonly productService: ProductService,
        // private readonly userService: UserService,
    ) {}

    // @UseGuards(GQLAuthGuard)
    @Query(() => [Product])
    Products() {
        return this.productService.getProducts();
    }

    // @UseGuards(GQLAuthGuard)
    @Mutation(() => Product)
    createProduct(@Args('product') product: ProductInput) {
        return this.productService.createProduct(product);
    }

}