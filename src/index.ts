import { SistemaLeilao } from "./classes/SistemaLeilao";
import { TipoItem } from "./enums/TipoItem";
import { Carro } from "./interfaces/Item";
import { Lance } from "./interfaces/Lance";

async function main() {
    const leilao = new SistemaLeilao();

    const itemLeiloado: Carro = {
        id: 1,
        nome: "Mustang 1969",
        precoInicial: 50000,
        tipo: TipoItem.Carro,
        ano: 1969,
        modelo: "Mach 1",
        automatico: false
    };

    if (!itemLeiloado.nome || itemLeiloado.precoInicial <= 0) {
        console.error("Erro: O item possui dados inválidos.");
        return;
    }
    await leilao.cadastraItem(itemLeiloado);

    const lanceBaixo: Lance = {
        valor: 30000,
        item: itemLeiloado,
        usuario: "Usuario_1",
        datetime: new Date()
    };

    const lanceValido1: Lance = {
        valor: 52000,
        item: itemLeiloado,
        usuario: "Usuario_2",
        datetime: new Date()
    };

    const lanceValido2: Lance = {
        valor: 60000,
        item: itemLeiloado,
        usuario: "Usuario_3",
        datetime: new Date()
    };

    console.log("\nIniciando disputa de lances (Paralelo)...\n");

    await Promise.all([
        leilao.darLance(lanceBaixo).catch(err => console.error(err.message)),
        leilao.darLance(lanceValido1).catch(err => console.error(err.message)),
        leilao.darLance(lanceValido2).catch(err => console.error(err.message))
    ]);

    console.log("\nLeilão Finalizado!");
}

main();