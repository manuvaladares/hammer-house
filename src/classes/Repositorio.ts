import { delay } from "../utils/delay";

export class Repositorio<T> {
    private elementos: T[] = [];

    async adicionar(elemento: T): Promise<void> {
        await delay(1000);
        this.elementos.push(elemento);
    }

    async listarTodas(): Promise<T[]> {
        await delay(1000);
        return this.elementos;
    }
}