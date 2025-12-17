import { Repositorio } from "./Repositorio";
import { ItemLeilao } from "../types/ItemLeilao";
import { Lance } from "../interfaces/Lance";
import { delay } from "../utils/delay";

export class SistemaLeilao {
    private repoItens = new Repositorio<ItemLeilao>();
    private repoLances = new Repositorio<Lance>();

    async cadastraItem(item: ItemLeilao): Promise<void> {
        await this.repoItens.adicionar(item);
        console.log("Item cadastrado no Leilão");
    }

    async darLance(lance: Lance): Promise<void> {
        console.log(`Validando lance de ${lance.usuario}...`);
        await delay(2000);
        
        if (lance.valor < lance.item.precoInicial) {
            throw new Error(`Lance rejeitado: R$${lance.valor} é menor que o mínimo.`);
        }
        
        await this.repoLances.adicionar(lance);
        console.log("Lance aceito!");
    }
}