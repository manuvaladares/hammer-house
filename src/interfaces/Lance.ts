import { ItemLeilao } from "../types/ItemLeilao";

export interface Lance {
    valor: number;
    item: ItemLeilao;
    usuario: string;
    datetime: Date;
}