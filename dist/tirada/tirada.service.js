"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiradaService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let TiradaService = class TiradaService {
    cartas;
    constructor() {
        const rutaMayores = path.join(process.cwd(), 'src', 'assets', 'arcanos-mayores.json');
        const rutaMenores = path.join(process.cwd(), 'src', 'assets', 'arcanos-menores.json');
        console.log('[TiradaService] mayores:', rutaMayores, 'existe?', fs.existsSync(rutaMayores));
        console.log('[TiradaService] menores:', rutaMenores, 'existe?', fs.existsSync(rutaMenores));
        const mayores = JSON.parse(fs.readFileSync(rutaMayores, 'utf8'));
        const menores = JSON.parse(fs.readFileSync(rutaMenores, 'utf8'));
        this.cartas = [...mayores, ...menores];
    }
    tirarCartasAleatorias(cantidad = 3) {
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
};
exports.TiradaService = TiradaService;
exports.TiradaService = TiradaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TiradaService);
//# sourceMappingURL=tirada.service.js.map