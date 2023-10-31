/* EXERCÍCIO ---------------------------------  */

// Verifique se a sua idade é maior do que a de algum parente
var idadeFilho = 24;
var idadeMae = 56;
var idadeComparativa = idadeFilho > idadeMae; // Irá retornar true ou false

if (idadeComparativa) {
  console.log('Idade MAIOR'); // if idadeFilho > idadeMae, então retorna idade maior
} else {
  console.log('Idade MENOR'); // Qualquer valor diferente disso, então idade é menor
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2; // 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // False
var empregoFuturo; // False
var dinheiroNaConta = 0; // False

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
console.log(brasil >= china);

// O que irá aparecer no console?
if (('Gato' === 'gato') && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); // False
}

// O que irá aparecer no console?
if (('Gato' === 'gato') || 5 > 2) {
  // O operador busca o primeiro resultado verdadeiro, ele acha o 5 > 2 verdadeiro e então mostra o console log
  console.log('Gato' && 'Cão'); // Retornou o ultimo verdadeiro, portanto o log final é Cão
} else {
  console.log('Falso');
}