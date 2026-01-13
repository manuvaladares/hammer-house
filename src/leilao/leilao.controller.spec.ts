import { Test, TestingModule } from '@nestjs/testing';
import { LeilaoController } from './leilao.controller';
import { LeilaoService } from './leilao.service';

describe('LeilaoController', () => {
  let controller: LeilaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeilaoController],
      providers: [LeilaoService],
    }).compile();

    controller = module.get<LeilaoController>(LeilaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
