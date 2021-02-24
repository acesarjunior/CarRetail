/* Code by: Antonio
   Name: Course Web Development with Typescript and Angular 
   Date: 22.2.2021
   Version: 1.0
*/

import { Carro } from './Carro'
import { concessionaria } from './Concessionaria'  


export class pessoa{
	private nome: string ;
	private carroPreferido: string ;
	private carro : Carro ;

	constructor(nome:string , carroPreferido: string,  carro: Carro ){
		this.nome=nome
		this.carroPreferido=carroPreferido
		this.carro=carro
	}

	public dizerNome(): string{
		return this.nome
	}
	public dizerCarroPreferido(): string{
		return this.carroPreferido
	}
	public comprarCarro(carro: Carro): void{
		this.carro = carro
	}
	public dizerCarroQueTem(): Carro{
		return this.carro
	}
}

/*let pessoaobj
pessoaobj = new pessoa('Antonio','Dodge Ram','Land Rover')
console.log(pessoaobj.dizerCarroPreferido())*/