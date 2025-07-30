import { Module } from '@nestjs/common';
import { TiradaController } from './tirada.controller';
import { TiradaService } from './tirada.service';

@Module({
  controllers: [TiradaController],
  providers: [TiradaService]
})
export class TiradaModule {}
