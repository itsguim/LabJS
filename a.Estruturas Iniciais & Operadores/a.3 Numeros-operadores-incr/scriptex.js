/* EXERCÍCIO <><> */

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total); //=35

// Crie duas expressões que retornem NaN
var nan1 = '130kg' / 2;
var nan2 = '130kg';
+nan2;
console.log(nan1); //Nan
console.log(+nan2); //Nan

// Somar a string '200' com o número 50 e retornar 250
var idade = '200';
var somaIdade = 50;
console.log(+idade + somaIdade); // = 250

// Incremente o número 5 e retorne o seu valor incrementado
var incrmnt = 5;
console.log(++incrmnt); // =6

// Como dividir o peso por 2?
var numero = '80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '40kg'
console.log(peso);