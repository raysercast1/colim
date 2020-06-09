import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color } from './color.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Color])],
  providers: [ColorService]
})
export class ColorModule {}
