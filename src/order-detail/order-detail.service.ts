import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseDetail } from './order-detail.entity';
import { Repository, getConnection } from 'typeorm';
import { PurchaseDetailInput } from './order-detail.type';
import { UpdatePurchaseInput } from '../order/order.type';

@Injectable()
export class PurchaseDetailService {
    constructor(@InjectRepository(PurchaseDetail) private readonly purchaseDetailRepository: Repository<PurchaseDetail> ) { }

    async getPurchaseDetails(): Promise<PurchaseDetail[]> {
        return await this.purchaseDetailRepository.find();
    }

    async createPurchaseDetail(purchaseDetailInput: PurchaseDetailInput): Promise<PurchaseDetail> {
        return await this.purchaseDetailRepository.create(purchaseDetailInput).save();
    }

    async updatePurchaseDetail(purchaseDetailInput: UpdatePurchaseInput): Promise<PurchaseDetail | undefined> {
        const purchaseDetail = Object.assign(new PurchaseDetail, purchaseDetailInput);

        await getConnection()
            .createQueryBuilder()
            .update(PurchaseDetail)
            .set(purchaseDetail)
            .where("id = :id", { id: purchaseDetailInput.id })
            .execute();

        return this.purchaseDetailRepository.findOne(purchaseDetailInput.id);
    }

    async deletePurchaseDetail(purchaseDetailId: number): Promise<boolean> {
        const { affected } = await this.purchaseDetailRepository.delete({ id: purchaseDetailId })
        if(affected && affected > 0) return true;
        return false;

    }
}
