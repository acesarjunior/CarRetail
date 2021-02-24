/* Code by: Antonio
   Name: Course Web Development with Typescript and Angular 
   Date: 22.2.2021
   Version: 1.0
*/

import  pessoa  from './Pessoa'  
import  concessionaria  from './Concessionaria'  

export default class Veiculo {
	public modelo!: string;
	private velocidade: number = 0 ;
    
//	constructor(modelo: string, velocidade:number ){
//		this.modelo = modelo;
//		this.velocidade=velocidade;
//	}


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
