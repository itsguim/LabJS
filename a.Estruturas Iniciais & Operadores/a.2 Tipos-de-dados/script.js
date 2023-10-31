/** DATA TYPES */
var a = 'Stringuelingue' // String
var b = 65 // Number
var c = true // Boolean
var d // Undefined
var f = null // Null
var e = {}; // Object
console.log(typeof a); //"typeof" verifica o tipo de dado.

/* 1.0. Concatenação */
var racao = 'Whiskas';
var animalRaca = 'Gato Persa';
var animalPeso = 75;

var dadosAnimal = racao + animalPeso + animalRaca;
console.log(dadosAnimal); // 'Whiskas 75 Gato Persa'
// Ao somar string com number, o resultado é uma string


/* 2.0. Template String 
	`${}`- Uma template string pode ser utilizada, afim de ter partes da string com valores dinâmicos, apresentados durante sua execução/leitura: 
		EX 1. - Cálculos, retornos a partir de resultados de funções, consumos de API, entre diversos outros.
	// Pra se iniciar uma Template String é necessário abrir a string com ´´ ao invés de '' ou ""
*/

let pesoCalcFinal = function (valor1, valor2) {
	return valor1 * valor2
}

let resultado = `O valor do peso vai ser: ${pesoCalcFinal(2, 5)}.`
console.log(resultado) // 'O valor do peso vai ser: 10.'


/* EXERCICIO <> - Apague o ; nas variáveis e faça sua atribuição */

// Declare uma variável contendo uma string
var animal;
// Declare uma variável contendo um número dentro de uma string
var pesoAnimal;
// Declare uma variável com a sua idade
var idadeAnimal;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Donna',
	sobrenome = 'Amalela';
var nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var aleatoria = "It's Time";

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nomeCompleto);

// Verificar através de uma variável
var verificarNome = typeof nomeCompleto;
console.log(verificarNome);
