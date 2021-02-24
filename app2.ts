/* Code by: Antonio
   Name: Course Web Development with Typescript and Angular 
   Date: 22.2.2021
   Version: 1.0
*/

import Carro, {  qualquer_coisa as x } from './Carro'
import pessoa  from './Pessoa'  
import concessionaria  from './Concessionaria'  

/* Criar Carros */

let carroA
let carroB
let carroC
carroA = new Carro('Dodge Journey',4,0)
carroB = new Carro('Chevette',2,0)
carroC = new Carro('Gurgel',2,0)

/* Criar list de Carros*/
let listaDeCarros: Array<Carro>
listaDeCarros = [carroA, carroB, carroC]

let concessionsariaobj
concessionsariaobj = new concessionaria('Botafogo',listaDeCarros)

/*console.log(concessionsariaobj.mostrarListaDeCarros());*/

/* -- Comprar carro */

let pessoaobj: any;
pessoaobj = new pessoa('Antonio','Chevette','')

concessionsariaobj.mostrarListaDeCarros().map((carro:Carro) => {

		if(carro['modelo'] == pessoaobj.dizerCarroPreferido()){
			//compra o carro
			pessoaobj.comprarCarro(carro)

		}

})

console.log(pessoaobj.dizerCarroQueTem())