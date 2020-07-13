import { Ferias } from "./Ferias";

export class Funcionario {

	constructor(public nome: string,
				public matricula: string,
				public dataNascimento: string,
				public dataContratacao: string,
				public rua?: string,
				public equipeId?: number,
				public ferias?: Ferias[],
				public id?: number) {}

}
