// **** SYNC/ASYNC

// O processo de execução ocorre em etapas, podendo ocorrer de forma síncrona ou assíncrona:
// Ler sobre Call Stack, Stack Queue**

/* 1. SYNChronous - 
Ocorre de forma ordenada, onde sua execução depende da finalização da anterior  
*/

/* 2. ASYNChronous - 
Move para a próxima task antes da anterior terminar. 
O trabalho será executado no 'fundo' e quando terminado, será colocado na fila (Task Queue). 

  *- o método setTimeOut como já visto é um método que funciona de forma assíncrona
  *- Ex: Ajax, Promises, Fetch, Async, setTimeOut.
*/

console.log('Sync 1')
setTimeout(() => console.log('Async 1')) // Aqui a função anônima vai ser colocada na task queue e não será executada de imediato, mesmo sem um timer definido (0)
console.log('Sync 2')

// Nesse caso, a ordem de exec. será 'Sync1' => 'Sync2' => 'Async1'.

/** ->
 * Algumas vantagens que pude observar de funções assíncronas:
 * 
 * - Processo de carregamento realizado ao fundo facilita o desempenho no carregamento de webpages
 * 
 * - Podemos utilizar um observador pra "observar" a finalização do carregamento de uma operação assíncrona, e assim executá-la
 * 
 * - Não precisamos recarregar a página por completo à cada requisição feita ao servidor.
 */

