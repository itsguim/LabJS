//1.0 - Expressão matemática como de costume
var testeExpressao = 35 * (5 + 15) - 20 / 2;

/* 2.0* NaN (Not a Number), pois "Comprei 10" é uma string com escrita */
var divisao = 'Comprei 10' / 2;

/* 3.0 Igual a 50, pois string (excluindo soma, e quando não há caracteres de alfabeto) funciona com number pra fazer operações */
var divisao2 = '100' / 2;

/* 4.0 Incremento de valores */
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6
// Acontece que o ++ incrementa o number, mas o 1º console.log leu a variável antes de incrementar, enquanto o segundo log já consta a adição
// Mesma coisa para o decremento --x
// Nao é necessário criar uma nova var pra incrementar


/* 5.0 - Unário */
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33
// Em string numérica, o unário transforma em number
// O - antes de um número torna ele negativo
// ---------------------------------
