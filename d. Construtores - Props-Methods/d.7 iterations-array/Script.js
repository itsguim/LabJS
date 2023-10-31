/**
 * OBS: TODOS OS MÉTODOS AQUI VÃO ITERAR SOBRE OS ITENS DA ARRAY, COMO SE FOSSE UM LOOP - A maioria precisa de um RETURN pra funcionar
*/



const teste = [2, 5, 6, 7, 8, 89, 9]


// [].FOREACH() 
const forTeste = teste.forEach((num, index, array) => {
  num = num + 5 // valor alterado apenas na DOM da função
  //teste:  [2, 5, 6, 7, 8, 89, 9] - original ainda se mantém igual

  const testao = document.createElement('p')
  testao.innerText = `Tomarás ${num} doses (FOREACH)`
  document.body.appendChild(testao)

  /* FOREACH - 
  ** Indicado puramente pra vc executar uma determinada funçao sobre todos os itens de uma array/array-like. A array vai permanecer igual e vc só altera a array original utilizando o parâmetro "array".
  ** O método forEach não possui um valor de retorno, por isso geralmente você vai querer utilizá-lo pra executar ações apenas a partir da array, mas que vão gerar efeitos que repercutirão fora dela;
  */
})

// [].MAP() 
const mapTeste = teste.map((el, index) => {
  const testao = document.createElement('p')
  testao.innerText = `Comerás ${el + 2} frutas (MAP)`
  document.body.appendChild(testao)

  return el + ` é valor do index: ${index}`
  /* Pode executar funçoes normal e no final passar um retorno */

  /* MAP - 
  ** Necessário apontar algum RETURN. O intuito é retornar o RESULTADO após a execução da função na array para os itens. Já que ela retorna valores, é ENCADEÁVEL, portanto vc pode continuar interagindo direto com o map da array ex: "teste.MAP().fill().split()..." 
  */
})


// [].REDUCE() 
/*
  array.reduce((acumulador(previousVal), el(currentVal), index, array) => {}, valorInicial)
  
  ACUMULADOR - A cada iteraçao, vai retornar o valor de RETURN do resultado da iteraçao anterior, acumulando e retornando ao final de todas as iteraçoes o valor acumulado. Pode ser setado um valorInicial pra primeira iteraçao. Caso não passe nenhum valorInicial, ele pula a primeira iteraçao e ja seta o valor do primeiro item no primeiro acumulador
*/
const valores = [2, 4, 6, 8, 10, 12]
const reducValores = valores.reduce((acc, el, index) => {
  console.log(acc, `el ${el}`, index)

  return acc + el // Retorno pro acumulador
  // 1ªitera = 0acc, 2el, 0index
  // 2ªitera = (0+2)2acc , 4el, 1index
  // 3ºitera = (2+4)6acc , 6el, 2index
  // 4ºitera = (6+6)12acc , 8el, 3index
  // ...
  // 42;
}, 0)
// ------------ FAZER OUTRO EXEMPLO REDUCE


// [].reduceRight()
/* 
Faz a iteração na ordem inversa do reduce normal. Da direita pra esquerda 
*/


// [].FILTER()
/*
  Retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy,
  de acordo com a condição do que vc quer retornar.
*/
const numerosFiltrada = numeros.filter(el => el < 45) // [0,43,22,2]


// [].SOME()
/*
  - Itera sobre todos os itens da array buscando AO MENOS UM valor TRUTHY. Caso haja, ele retorna true
  PRECISA retornar algo, portanto deve se colocar uma condiçao no return pra ele iterar e buscar
  -* É bom pra vc condicionar ações com if else, caso tenha ou não tenha nenhum truthy.
*/
const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
  return fruta.startsWith('U')
}); // true
/*-- 
  Com callback separado agr (Eh igual fazer direto com func. anonima no parametro) 
  -* Interessante aqui é que ele executa uma função qualquer separada, e utiliza a condição no return pra verificar
*/
function checkIfIsHigher(el) {
  return el > 100
}
const numeros = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(checkIfIsHigher); // true (101)



// [].EVERY()
/*
  Itera sobre todos os elementos pra verificar se TODOS retornam TRUTHY. Caso retorne, retorna true no final. Se houver algum falsy, retorna false.
*/
const maiorQue = numeros.every(num => num > 100) // false (101 é maior)
const frutasTemU = frutas.every(fruta => fruta.startsWith('U')) // False, nem todas começam com U



// [].FIND() E [].FINDINDEX()
/*
  -[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy.
  -[].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.
*/


// [].AT(index)
/*
  Retorna o item da array correspondente ao index passado como argumento.
*/

