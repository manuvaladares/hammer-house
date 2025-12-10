enum TipoItem {Casa, Carro, ItemDeValor};

interface Item{
    id: number;
    nome: string;
    PrecoInicial: number;
    tipo: TipoItem;
};

interface Carro extends Item {
    ano: number;
    modelo: string;
    automatico?: boolean;
};