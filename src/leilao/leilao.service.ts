import { Injectable } from '@nestjs/common';
import { CreateLeilaoDto } from './dto/create-leilao.dto';
import { UpdateLeilaoDto } from './dto/update-leilao.dto';

@Injectable()
export class LeilaoService {
  create(createLeilaoDto: CreateLeilaoDto) {
    return 'This action adds a new leilao';
  }

  findAll() {
    return `This action returns all leilao`;
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
