// OPERADORES DE ATRIBUIÇÃO

// 1. São operadores que funcionam como abreviadores de equações.
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// OPERADOR TERNÁRIO
// 1. Recebe esse nome pelo fato de ter 3 parâmetros :
//  1.1 condição ? true : false - EXEMPLO
// 2. Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição

var idade = 19;
var problemaSaude = false;

var deMaior =
	idade >= 18 && problemaSaude ? console.log('Pode beber') : console.log('Não bebe');
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito =
	possuiCarro && possuiCasa ? console.log('Tome Credito') : console.log('Vatimbora');
