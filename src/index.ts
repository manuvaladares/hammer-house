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

interface Lance {
    valor: number;
    item: itemLeilao;
    usuario: string;
    datetime: Date;
}


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class Repositorio<T> {
    private itens: T[] = [];

    async adicionar(item: T): Promise<void> {
        await delay(1000);
        this.itens.push(item);
        console.log("Item salvo no banco de dados");
    }

    async listarTodas(): Promise<T[]> {
        await delay(1000);
        return this.itens;
    }
}