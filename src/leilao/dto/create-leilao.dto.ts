import { IsString, IsNumber, Min, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateLeilaoDto {
    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string;

    @IsNumber()
    @Min(1, { message: 'O preço inicial deve ser maior que zero'})
    precoInicial: number;

    @IsBoolean()
    usado: boolean;
}