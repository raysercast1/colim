import { Module } from '@nestjs/common';
import { PurchaseDetailService } from './order-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseDetail } from './order-detail.entity';
import { PurchaseDetailResolver } from './order-detail.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([PurchaseDetail])],
  providers: [PurchaseDetailService, PurchaseDetailResolver],
  exports: [PurchaseDetailService]
})
export class OrderDetailModule {}
