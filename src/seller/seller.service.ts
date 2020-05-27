import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seller } from './seller.entity';
import { Repository, getConnection } from 'typeorm';
import { SellerInput, UpdateSellerInput } from './seller.type';

@Injectable()
export class SellerService {
    constructor(@InjectRepository(Seller) private readonly sellerRepository: Repository<Seller> ) { }

    async getSellers(): Promise<Seller[]> {
        return this.sellerRepository.find();
    }

    async createSeller(sellerInput: SellerInput): Promise<Seller> {
        return this.sellerRepository.create(sellerInput).save();
    }

    async updateSeller(sellerInput: UpdateSellerInput): Promise<Seller | undefined> {
        const seller = Object.assign(new Seller, sellerInput);

        await getConnection()
            .createQueryBuilder()
            .update(Seller)
            .set(seller)
            .where("id = :id", {id: sellerInput.id})
            .execute();
            
        return this.sellerRepository.findOne(sellerInput.id)
    }

    async deleteSeller(sellerId: string): Promise<boolean> {
        const { affected } = await this.sellerRepository.delete({id: sellerId});
        if( affected && affected > 0 ) return true;
        return false;
    }
}
