import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { SellerType, SellerInput, UpdateSellerInput } from "./seller.type";
import { SellerService } from './seller.service';

@Resolver(() => SellerType)
export class SellerResolver {
    constructor(
        private readonly sellerService: SellerService,
    ) { }

    @Query(() => [SellerType])
    sellers() {
        return this.sellerService.getSellers();
    }

    @Mutation(() => SellerType)
    createSeller(@Args('seller') seller: SellerInput) {
        return this.sellerService.createSeller(seller);
    }

    @Mutation(() => SellerType)
    updateSeller(@Args('seller') seller: UpdateSellerInput) {
        return this.sellerService.updateSeller(seller);
    }

    @Mutation(() => Boolean)
    deleteSeller(@Args('sellerId') sellerId: number) {
        return this.sellerService.deleteSeller(sellerId);
    }
}