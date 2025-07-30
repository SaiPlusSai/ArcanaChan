import { Test, TestingModule } from '@nestjs/testing';
import { TiradaController } from './tirada.controller';

describe('TiradaController', () => {
  let controller: TiradaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiradaController],
    }).compile();

    controller = module.get<TiradaController>(TiradaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
