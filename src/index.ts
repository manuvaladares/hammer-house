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

type ItemLeilao = Casa | Carro | ItemDeValor;

interface Lance {
    valor: number;
    item: ItemLeilao;
    usuario: string;
    datetime: Date;
}


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class Repositorio<T> {
    private elementos: T[] = [];

    async adicionar(elemento: T): Promise<void> {
        await delay(1000);
        this.elementos.push(elemento);
        console.log("Elemento salvo no banco de dados");
    }

    async listarTodas(): Promise<T[]> {
        await delay(1000);
        return this.elementos;
    }
}

class SistemaLeilao {
    private repoItens = new Repositorio<ItemLeilao>();
    private repoLances = new Repositorio<Lance>();

    async cadastraItem(item : ItemLeilao): Promise<void> {
        await this.repoItens.adicionar(item);
        console.log("Item cadastrado no Leilão")
    }
}