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

    async darLance(lance: Lance): Promise<void> {
        console.log(`Validando lance de ${lance.usuario}...`);
        await delay(2000);
        if (lance.valor < lance.item.precoInicial) {
            throw new Error("Lance rejeitado: Valor menor que o mínimo.");
        } 
        await this.repoLances.adicionar(lance);
        console.log("Lance aceito.");
    }
}

async function main() {
    const leilao = new SistemaLeilao();

    const mustang: Carro = {
        id: 1,
        nome: "Mustang 1969",
        precoInicial: 50000,
        tipo: TipoItem.Carro,
        ano: 1969,
        modelo: "Mustang 1969",
        automatico: false
    }

    await leilao.cadastraItem(mustang);
}