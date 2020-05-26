import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './order.entity';
import { PurchaseService } from './order.service';
import { PurchaseResolver } from './order.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Purchase])],
  providers: [PurchaseService, PurchaseResolver],
  exports: [PurchaseService],
})
export class OrderModule {}
