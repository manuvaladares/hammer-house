enum TipoItem {Casa, Carro, ItemDeValor};

interface Item{
    id: number;
    nome: string;
    precoInicial: number;
    tipo: TipoItem;
}

interface Carro extends Item {
    ano: number;
    modelo: string;
    automatico?: boolean;
    tipo: TipoItem.Carro;
}

interface Casa extends Item {
    endereco: string;
    area_m2: number;
    tipo: TipoItem.Casa;
}

interface ItemDeValor extends Item {
    material: string;
    marca: string;
    tipo: TipoItem.ItemDeValor;
}

type itemLeilao = Casa | Carro | ItemDeValor;

class Repositorio<T> {
    private itens: T[] = [];

    adicionar(item: T): void {
        this.itens.push(item);
    }

    listarTodas(): T[] {
        return this.itens;
    }
}