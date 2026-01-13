import { PartialType } from '@nestjs/mapped-types';
import { CreateLeilaoDto } from './create-leilao.dto';

export class UpdateLeilaoDto extends PartialType(CreateLeilaoDto) {}
