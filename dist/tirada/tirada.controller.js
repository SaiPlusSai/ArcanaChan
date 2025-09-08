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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiradaController = void 0;
const common_1 = require("@nestjs/common");
const tirada_service_1 = require("./tirada.service");
let TiradaController = class TiradaController {
    tiradaService;
    constructor(tiradaService) {
        this.tiradaService = tiradaService;
    }
    getRandomTirada(cantidad) {
        const cantidadCartas = cantidad ? parseInt(cantidad) : 3;
        return this.tiradaService.tirarCartasAleatorias(cantidadCartas);
    }
};
exports.TiradaController = TiradaController;
__decorate([
    (0, common_1.Get)('random'),
    __param(0, (0, common_1.Query)('cantidad')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiradaController.prototype, "getRandomTirada", null);
exports.TiradaController = TiradaController = __decorate([
    (0, common_1.Controller)('tirada'),
    __metadata("design:paramtypes", [tirada_service_1.TiradaService])
], TiradaController);
//# sourceMappingURL=tirada.controller.js.map