import { Test, TestingModule } from '@nestjs/testing';
import { TiradaService } from './tirada.service';

describe('TiradaService', () => {
  let service: TiradaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiradaService],
    }).compile();

    service = module.get<TiradaService>(TiradaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
