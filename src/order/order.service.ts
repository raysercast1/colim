import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from './order.entity';
import { Repository } from 'typeorm';
import { PurchaseInput, UpdatePurchaseInput } from './order.type';
import {getConnection} from "typeorm";

@Injectable()
export class PurchaseService {
    constructor(@InjectRepository(Purchase) private readonly purchaseRepository: Repository<Purchase>) { }

    async getPurchases(): Promise<Purchase[]> {
        return await this.purchaseRepository.find();
    }

    async createPurchase(purchaseInput: PurchaseInput): Promise<Purchase> {
        return await this.purchaseRepository.create(purchaseInput).save();
    }

    async updatePurchase(purchaseInput: UpdatePurchaseInput): Promise<Purchase | undefined> {        
        const purchase = Object.assign(new Purchase, purchaseInput)

        await getConnection()
            .createQueryBuilder()
            .update(Purchase)
            .set(purchase)
            .where("id = :id", {id: purchaseInput.id})
            .execute();
            
        return this.purchaseRepository.findOne(purchaseInput.id)
    }

    async deletePurchase(purchaseId: number): Promise<boolean> {
        const { affected } = await this.purchaseRepository.delete({ id: purchaseId });
        if(affected && affected > 0 ) return true;
        return false;
    }
}
