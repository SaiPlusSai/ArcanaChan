import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TiradaService {
  private cartas: any[];

  constructor() {
    const rutaMayores = path.join(process.cwd(), 'src', 'assets', 'arcanos-mayores.json');
    const rutaMenores = path.join(process.cwd(), 'src', 'assets', 'arcanos-menores.json');

    console.log('[TiradaService] mayores:', rutaMayores, 'existe?', fs.existsSync(rutaMayores));
    console.log('[TiradaService] menores:', rutaMenores, 'existe?', fs.existsSync(rutaMenores));

    const mayores = JSON.parse(fs.readFileSync(rutaMayores, 'utf8'));
    const menores = JSON.parse(fs.readFileSync(rutaMenores, 'utf8'));

    this.cartas = [...mayores, ...menores];
  }
  tirarCartasAleatorias(cantidad: number = 3) {
    const mazo = [...this.cartas];
    mazo.sort(() => Math.random() - 0.5);

    return mazo.slice(0, cantidad).map(carta => {
      const reversed = Math.random() < 0.5;

      return {
        nombre: carta.nombre,
        posicion: reversed ? 'reversed' : 'upright',
        significado: reversed ? carta.reversed.significado : carta.upright.significado,
        mensaje: reversed ? carta.reversed.mensaje : carta.upright.mensaje,
      };
    });
  }
}
