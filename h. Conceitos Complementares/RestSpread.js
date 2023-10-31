/**
 * 1.0 Parâmetro Padrão (ES6+) - Quando uma função é chamada, nem todos os parâmetros são utilizados devido a falta de argumentos, mas é possível declarar valores padrões para parâmetros caso estes não sejam declarados:
 * 
 * 1.1 Parâmetros predefinidos são ativados caso o parâmetro tenha valor undefined ou nenhum valor.
 * 1.2 Os parâmetros predefinidos são avaliados no momento da chamada da função, então diferente de
 *
*/

// Ex1: (Referente ao tópico 1.2)
const appendValue = function (value, arr = []) {
  arr.push(value)
  return arr
}
console.log(appendValue(1)) // [1]
console.log(appendValue(2)) // [2], não [1,2]

//Ex2 ---
function multiply(val, multiplier = 5) {
  return val * multiplier
}
multiply(5) // 25
multiply(5, 2) // 10


/**
 * ----arguments----
 * 2.0 **arguments** - A keyword arguments é um objeto 'Array-like' criado dentro da função. Esse objeto contém os valores dos argumentos.
 * 
 * 2.1 Diferença se dá em: Sendo *rest* uma array real e *arguments* um objeto Array-like.
*/



/**
 * ----rest parameter---- 
 * 3.0 Parâmetros rest são parâmetros passados na função, quando são declarados utilizando o operator "...", andes de declará-los
 * 
 * 3.1 Todos os argumentos passados durante a ativação ficam dentro do parâmetro rest
 * 3.2 Só é possível ter um único parâmetro rest, e ele deve ser o último
*/

// EX3 - Todos os argumentos passados estarão contidos em no parâmetro "...ganhadores"
function anunciarGanhadores(ticketNumero, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(`${ganhador} ganhou com ticket ${ticketNumero}`)
  });
}
anunciarGanhadores(45, 'Italo', 'José', 'Joaquim')

// --------


/**
 * ----rest operator----
 * 4.0. - Operador spread é sem
 */
