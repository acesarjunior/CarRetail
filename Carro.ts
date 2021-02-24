/* Code by: Antonio
   Name: Course Web Development with Typescript and Angular 
   Date: 22.2.2021
   Version: 1.0
*/

import { pessoa } from './Pessoa'  
import { concessionaria } from './Concessionaria'  


export class Carro {
	private modelo: string ;
	private numeroDePortas: number ;
	private velocidade: number ;

	constructor(modelo:string, numeroDePortas:number, velocidade:number ){
		this.modelo=modelo
		this.numeroDePortas=numeroDePortas
		this.velocidade=velocidade
	}

	public acelerar() : void{
		this.velocidade = this.velocidade+10
	}
	public parar() : void {
		this.velocidade = 0
	}
	public velocidadeAtual() : number {
		return this.velocidade
	}
	   //function
	
  	}
/*  	let carrinho
  	carrinho=new Carro(passat,));
	console.log(carrinho)*/

