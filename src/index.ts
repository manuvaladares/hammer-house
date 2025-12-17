import { SistemaLeilao } from "./classes/SistemaLeilao";
import { TipoItem } from "./enums/TipoItem";
import { Carro } from "./interfaces/Item";

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