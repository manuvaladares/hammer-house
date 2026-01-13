import { Module } from '@nestjs/common';
import { LeilaoService } from './leilao.service';
import { LeilaoController } from './leilao.controller';

@Module({
  controllers: [LeilaoController],
  providers: [LeilaoService],
})
export class LeilaoModule {}
