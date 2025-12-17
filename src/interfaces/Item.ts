import { TipoItem } from "../enums/TipoItem";

export interface Item {
    id: number;
    nome: string;
    precoInicial: number;
    tipo: TipoItem;
}

export interface Carro extends Item {
    ano: number;
    modelo: string;
    automatico?: boolean;
    tipo: TipoItem.Carro;
}

export interface Casa extends Item {
    endereco: string;
    area_m2: number;
    tipo: TipoItem.Casa;
}

export interface ItemDeValor extends Item {
    material: string;
    marca: string;
    tipo: TipoItem.ItemDeValor;
}