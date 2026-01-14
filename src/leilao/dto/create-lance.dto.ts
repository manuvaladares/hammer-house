import { IsString, IsNumber, Min, IsNotEmpty } from 'class-validator';

export class CreateLanceDto {
    @IsString()
    @IsNotEmpty()
    usuario: string;

    @IsNumber()
    @Min(1)
    valor: number;

    @IsNumber()
    leilaoId: number;
}