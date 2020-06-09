import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PurchaseDetailType, PurchaseDetailInput, UpdatePurchaseDetail } from "./order-detail.type";
import { PurchaseDetailService } from "./order-detail.service";

@Resolver(() => PurchaseDetailType)
export class PurchaseDetailResolver {
    constructor(
        private readonly purchaseDetailService: PurchaseDetailService,
    ) { }

    @Query(() => [PurchaseDetailType])
    purchasesDetails() {
        return this.purchaseDetailService.getPurchaseDetails();
    }

    @Mutation(() => PurchaseDetailType)
    createPurchaseDetail(@Args('purchaseDetail') purchaseDetail: PurchaseDetailInput) {
        return this.purchaseDetailService.createPurchaseDetail(purchaseDetail);
    }

    @Mutation(() => PurchaseDetailType)
    updatePurchaseDetail(@Args('purchaseDetail') purchaseDetail: UpdatePurchaseDetail) {
        return this.purchaseDetailService.updatePurchaseDetail(purchaseDetail);
    }

    @Mutation(() => Boolean)
    deletePurchaseDetail(@Args('purchaseDetailId') purchaseDetailId: number) {
        return this.purchaseDetailService.deletePurchaseDetail(purchaseDetailId);
    }
    
}