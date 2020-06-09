import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './provider.entity';
import { Repository, getConnection } from 'typeorm';
import { SupplierInput, UpdateSupplierInput } from './provider.type';

@Injectable()
export class SupplierService {
    constructor(@InjectRepository(Supplier) private readonly supplierRepository: Repository<Supplier>) { }
    
    async getSuppliers(): Promise<Supplier[]> {
        return this.supplierRepository.find();
    }

    async createSupplier(supplierInput: SupplierInput): Promise<Supplier> {
        return this.supplierRepository.create(supplierInput).save();
    }

    async updateSupplier(supplierInput: UpdateSupplierInput): Promise<Supplier | undefined> {
        const supplier = Object.assign(new Supplier, supplierInput)

        await getConnection()
            .createQueryBuilder()
            .update(Supplier)
            .set(supplier)
            .where("id = :id", {id: supplierInput.id})
            .execute();
            
        return this.supplierRepository.findOne(supplierInput.id)
        
    }

    async deleteSupplier(suppliertId: number): Promise<boolean> {
        const { affected } = await this.supplierRepository.delete({ id: suppliertId });
        if(affected && affected > 0 ) return true;
        return false;
    }

}
