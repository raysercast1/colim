import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from './order.entity';
import { Repository } from 'typeorm';
import { PurchaseInput } from './order.type';

@Injectable()
export class PurchaseService {
    constructor(@InjectRepository(Purchase) private readonly purchaseRepository: Repository<Purchase>) {}

    async getPurchases(): Promise<Purchase[]> {
        return this.purchaseRepository.find();
    }

    async createPurchase(purchaseInput: PurchaseInput): Promise<Purchase> {
        return this.purchaseRepository.create(purchaseInput).save();
    }
}
