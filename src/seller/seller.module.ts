import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './seller.entity';
import { SellerService } from './seller.service';
import { SellerResolver } from './seller.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Seller])],
  providers: [SellerService, SellerResolver],
  exports: [SellerService],
})
export class SellerModule {}
