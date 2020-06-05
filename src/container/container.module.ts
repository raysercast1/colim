import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Container } from './container.entity';
import { ContainerService } from './container.service';
import { ContainerResolver } from './container.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Container])],
    providers: [ContainerService, ContainerResolver],
    exports: [ContainerService],
})
export class ContainerModule {}
