import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './provider.entity';
import { Repository } from 'typeorm';
import { SupplierInput } from './provider.type';

@Injectable()
export class SupplierService {
    constructor(@InjectRepository(Supplier) private readonly supplierRepository: Repository<Supplier>) { }
    
    async getSuppliers(): Promise<Supplier[]> {
        return this.supplierRepository.find();
    }

    async createSupplier(supplierInput: SupplierInput): Promise<Supplier> {
        return this.supplierRepository.create(supplierInput).save();
    }

}
