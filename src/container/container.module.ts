import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Container } from './container.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Container])],
})
export class ContainerModule {}
