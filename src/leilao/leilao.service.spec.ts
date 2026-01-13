import { Test, TestingModule } from '@nestjs/testing';
import { LeilaoService } from './leilao.service';

describe('LeilaoService', () => {
  let service: LeilaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeilaoService],
    }).compile();

    service = module.get<LeilaoService>(LeilaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
