import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiradaModule } from './tirada/tirada.module';

@Module({
  imports: [TiradaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
