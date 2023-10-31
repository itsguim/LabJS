// ======= setTimeout(fnHandler, tempo, optArg1, optArg2...) ============

/** TIMEOUT
 * 1. Método nativo do objeto Window: 
 * ---- Window.prototype.setTimeout().
 * 
 * 2. Método ASSÍNCRONO que executa o callback após o tempo
 * --* É importante ter em mente que quando algo é atribuído ao setTimeout, a sua execução vai ser adiada
 * --e somente será executada após a CALL STACK estar vazia (execução em tempo normal), enquanto aguarda
 * --ela será adicionada na TASK QUEUE e só no final será executada
 * 
 * 3. Tempo é contado em milissegundos. 1000ms = 1seg.
*/
/** INTERVAL
 * 1.Irá ativar o callback toda vez que a quantidade de tempo passar.
 * 2. com clearInterval(var), podemos parar um intervalo. 
 -*pra isso é necessário atribuir o setInterval a uma variável.
 */

// 1. Executando com função anônima direto no argumento do handler, ex: 1
const arrayNum = [1, 2, 3, 4, 5, 6]
const body = document.querySelector('body')
function testeTime() {
  setTimeout(() => document.body.innerText += arrayNum, 2000)
}
// testeTime();

// 2. Utilizando callbacks, ex:2
function callbackTeste() {
  console.log('Abobrinhas')
}
setTimeout(callbackTeste, 2000)

// 3. Utilizando loops
/*
  * É importante saber que ao executar loops com timeouts, todas as ações
  --irão ser executadas de uma vez só.
  * É necessário fazer uma diferenciação pra que cada ação do loop seja
  -executado em um tempo diferente
*/

function timedArray() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(arrayNum)
    }, 2000 /* 2000*i */)

    // Aqui tudo será executado de uma vez só após 2000ms, ao invés de 2000s a cada item
    // Uma correção pode ser feita ao add um multiplicador vezes o tempo, como por ex. o próprio i
  }
} timedArray()

// 4. ter cuidado ao utilizar o this
/**
 * Ao utilizar o this, caso você queira referenciar ao objeto ao qual tá sendo passado o callback-
 * -utilizar uma ARROW FUNCTION
 * EX:
*/

const button = document.querySelector('button')
button.addEventListener('click', thisReffered)

function thisReffered() {
  // setTimeout(function () {
  //   this.classList.add('Ativo')
  // }, 1000)
  //1. this vai se referir ao objeto do setTimeout que é Window, 
  //-numa função normal, e vai receber um erro.

  setTimeout(() => {
    this.classList.add('Ativo')
  }, 1000)
  // 2. Ao mudar pra uma arrow function, a arrow function sempre se referencia ao objeto pai do elemento ao qual tá sendo passada. Nesse caso um botão
  // Agora irá ser executado devidamente
}


