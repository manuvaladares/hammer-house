import { delay } from "../utils/delay";

export class Repositorio<T> {
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