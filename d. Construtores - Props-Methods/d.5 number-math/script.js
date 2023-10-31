// 1 - Number é a o construtor nativo. Como todo construtor tem seus métodos e propriedades :

Number.isNaN() // Verifica se é NaN e retorna true/false
Number.isInteger() // Verifica se é inteiro

// 1.1 parseFloat() e parseInt()
/*
  Retorna um number a partir de uma string
  A string precisa iniciar com um numero
*/

Number.parseFloat('99.50') // 99.5 - Retorna com decimal
Number.parseInt('99.60') // 96 - Retorna apenas inteiro
Number.parseFloat('150.48 Reais') // 150.48
Number.parseInt('Pix de 30 reais') // NaN

// 1.2 - n.toFixed(decimais)
// Arredonda o número com base no total de casas decimais do argumento. Numero precisa estar numa variável ou entre parenteses

const preco = 2.99;
preco.toFixed(); // 3
const carro = 1000.455;
carro.toFixed(2) // 1000.46

//1.3 n.toString(radix)
// Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.
const teste = 2.99;
teste.toString(10); // '2.99'

//1.4 n.toLocaleString(lang, options);
// Formata o número de acordo com a língua e opções passadas.
const valor = 59.49;
valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // $59.49
valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // R$ 59,49


// 2. Math
// É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns- Ver no MdN.

// 2.1 - Math.abs(), Math.ceil(), Math.floor() e Math.round()
/*
  abs() - retorna o valor absoluto, ou seja, transforma negativo em positivo.
  ceil() arredonda para cima, retornando sempre uma integral.
  floor() - " para baixo.
  round() arredonda para o número integral mais próximo.
*/

// 2.2 - Math.max(), Math.min() e Math.random();
// max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

// 2.3 - Calcular um valor aleatorio de um num maximo e minimo - Fórmula
// Math.floor(Math.random() * (max - min + 1)) + min;
Math.floor(Math.random() * (1050 - 1000 + 1)) + 1000;



