/* Code by: Antonio
   Name: Course Web Development with Typescript and Angular 
   Date: 22.2.2021
   Version: 1.0
*/

import Carro from './Carro'
import pessoa  from './Pessoa'  

export default class concessionaria{
	private endereco: string ;
	private listaDeCarros : Array<Carro> ;

	constructor(endereco:string , listadeCarros: Array<Carro> ){
		this.endereco=endereco
		this.listaDeCarros=listadeCarros
	}

	public fornecerEndereco(): string{
		return this.endereco
	}
	public mostrarListaDeCarros(): Array<Carro>{
		return this.listaDeCarros
	}
}