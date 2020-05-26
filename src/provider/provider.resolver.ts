import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { SupplierType, SupplierInput } from "./provider.type";
import { SupplierService } from "./provider.service";

@Resolver(() => SupplierType)
export class SupplierResolver { 
    constructor(
        private readonly supplierService: SupplierService,
    ) { }

    @Query(() => [SupplierType])
    suppliers() {
        return this.supplierService.getSuppliers();
    }

    @Mutation(() => SupplierType)
    createSupplier(@Args('supplier') supplier: SupplierInput) {
        return this.supplierService.createSupplier(supplier);
    }

}