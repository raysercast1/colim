import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PurchaseType, PurchaseInput } from './order.type';
import { PurchaseService } from './order.service';

@Resolver(() => PurchaseType)
export class PurchaseResolver {
    constructor(
        private readonly purchaseService: PurchaseService,
    ) { }

    @Query(() => [PurchaseType])
    purchases() {
        return this.purchaseService.getPurchases();
    }

    @Mutation(() => PurchaseType)
    createPurchase(@Args('purchase') purchase: PurchaseInput) {
        return this.purchaseService.createPurchase(purchase);
    }
}