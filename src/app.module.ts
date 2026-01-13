import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeilaoModule } from './leilao/leilao.module';

@Module({
  imports: [LeilaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
