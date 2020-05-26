import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { SupplierType, SupplierInput, UpdateSupplierInput } from './provider.type';
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

    @Mutation(() => SupplierType)
    updateSupplier(@Args('supplier') supplier: UpdateSupplierInput) {
        return this.supplierService.updateSupplier(supplier);
    }

    @Mutation(() => Boolean)
    deleteSupplier(@Args('supplierId') supplierId: string) {
        return this.supplierService.deleteSupplier(supplierId);
    }

}