import { Controller, Get, Query } from '@nestjs/common';
import { TiradaService } from './tirada.service';

@Controller('tirada')
export class TiradaController {
  constructor(private readonly tiradaService: TiradaService) {}

  @Get('random')
  getRandomTirada(@Query('cantidad') cantidad?: string) {
    const cantidadCartas = cantidad ? parseInt(cantidad) : 3;
    return this.tiradaService.tirarCartasAleatorias(cantidadCartas);
  }
}
