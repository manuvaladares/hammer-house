import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeilaoService } from './leilao.service';
import { CreateLeilaoDto } from './dto/create-leilao.dto';
import { UpdateLeilaoDto } from './dto/update-leilao.dto';
import { CreateLanceDto } from './dto/create-lance.dto';

@Controller('leilao')
export class LeilaoController {
  constructor(private readonly leilaoService: LeilaoService) {}

  @Post()
  create(@Body() createLeilaoDto: CreateLeilaoDto) {
    return this.leilaoService.create(createLeilaoDto);
  }

  @Post('lance') 
  darLance(@Body() createLanceDto: CreateLanceDto) {
    return this.leilaoService.darLance(createLanceDto);
  }

  @Get()
  findAll() {
    return this.leilaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leilaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeilaoDto: UpdateLeilaoDto) {
    return this.leilaoService.update(+id, updateLeilaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leilaoService.remove(+id);
  }
}
