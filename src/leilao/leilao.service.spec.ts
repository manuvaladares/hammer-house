import { Test, TestingModule } from '@nestjs/testing';
import { LeilaoService } from './leilao.service';
import { CreateLeilaoDto } from './dto/create-leilao.dto';

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

  it('deve criar um leilão corretamente', () => {
    const dto: CreateLeilaoDto = {
      nome: 'Violão Gibson',
      precoInicial: 5000,
      usado: true,
    };

    const resultado = service.create(dto);

    expect(resultado).toHaveProperty('id');
    expect(resultado.nome).toBe('Violão Gibson');
    
    const todos = service.findAll();
    expect(todos).toHaveLength(1);
  });

  it('deve aceitar um lance válido', () => {
    const leilao = service.create({
      nome: 'TV Antiga',
      precoInicial: 100,
      usado: true,
    });

    const mensagem = service.darLance({
      usuario: 'Comprador1',
      valor: 200, 
      leilaoId: leilao.id,
    });

    expect(mensagem).toBe('Lance aceito!');
  });

  it('deve rejeitar um lance menor que o preço inicial', () => {
    const leilao = service.create({
      nome: 'TV Antiga',
      precoInicial: 100,
      usado: true,
    });

    expect(() => {
      service.darLance({
        usuario: 'Fulano',
        valor: 50,
        leilaoId: leilao.id,
      });
    }).toThrow('Lance rejeitado: R$50 é menor que o mínimo.');
  });
});