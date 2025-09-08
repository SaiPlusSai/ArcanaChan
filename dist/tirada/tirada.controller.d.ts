import { TiradaService } from './tirada.service';
export declare class TiradaController {
    private readonly tiradaService;
    constructor(tiradaService: TiradaService);
    getRandomTirada(cantidad?: string): {
        nombre: any;
        posicion: string;
        significado: any;
        mensaje: any;
    }[];
}
