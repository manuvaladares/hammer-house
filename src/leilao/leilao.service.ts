import { Injectable } from '@nestjs/common';
import { CreateLeilaoDto } from './dto/create-leilao.dto';
import { UpdateLeilaoDto } from './dto/update-leilao.dto';
import { Leilao } from './entities/leilao.entity';

interface Lance {
  usuario: string;
  valor: number;
  leilaoId: number;
}

@Injectable()
export class LeilaoService {
  private leiloes: Leilao[] = [];
  private lances: Lance[] = [];

  create(createLeilaoDto: CreateLeilaoDto) {
    const novoLeilao: Leilao = {
      id: this.leiloes.length + 1,
      nome: createLeilaoDto.nome,
      precoInicial: createLeilaoDto.precoInicial,
      usado: createLeilaoDto.usado,
    };

    this.leiloes.push(novoLeilao);
    return novoLeilao;
  }

  findAll() {
    return `This action returns all leilao`;
  }

  darLance(lance: Lance) { 
    const leilaoEncontrado = this.leiloes.find((item) => item.id === lance.leilaoId);

    if (!leilaoEncontrado) {
       return 'Leilão não encontrado.';
    }

    if (lance.valor < leilaoEncontrado.precoInicial) {
        throw new Error(`Lance rejeitado: R$${lance.valor} é menor que o mínimo.`);
    }

    this.lances.push(lance);
    return 'Lance aceito!';
  }

  findOne(id: number) {
    return `This action returns a #${id} leilao`;
  }

  update(id: number, updateLeilaoDto: UpdateLeilaoDto) {
    return `This action updates a #${id} leilao`;
  }

  remove(id: number) {
    return `This action removes a #${id} leilao`;
  }
}
