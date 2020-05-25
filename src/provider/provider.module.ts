import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './provider.entity';
import { SupplierService } from './provider.service';
import { SupplierResolver } from './provider.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  providers: [SupplierService, SupplierResolver],
  exports: [SupplierService],
})
export class ProviderModule {}
