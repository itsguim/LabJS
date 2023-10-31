// ~~ PROMISES ~~
/* PROMISES são funções construtoras de uma operação ASSÍNCRONA, com valor não necessariamente conhecido previamente. 
~~Todas as consts declaradas aqui se referem a mesma promise. ~~*/


/**
 * ### 0) A promise existe em três estados:
 * 
 * a) pending -  Estado inicial, nem cumprida nem rejeitada
 * b) fulfilled - Significa que a operação da promise foi concluída com sucesso.
 * c) rejected - Significa que a operação falhou.
 * 
 * #### 0.1 Uma promise é considerada resolvida(settled) se foi cumprida(b) ou rejeitada(c), não sendo mais pendente(a).
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/


/**  
  #### 1. As Promises podem entregar dois resultados, sendo elas uma de conclusão e outra de rejeição. Aqui como onFulfillment e onRejection respectivamente.
  
  #### 1.1 Esses dois valores se caracterizam como os 2 primeiros argumentos de uma Promise.
*/

// EX1: Dado uma condição, a promessa deve ser cumprida ou rejeitada. Dada sua resolução executar o callback com as ações. 

const promessa = new Promise(function (onFulfillment, onRejection) {
  let condicao = true; // qualquer coisa
  if (condicao) {
    onFulfillment('Italo');
  } else {
    onRejection('Operation Failed');
  }
});

//OBS1 - Quando uma das condições são atingidas, a promise se torna resolvida(settled||resolved); Promise {<resolved>: obj}
// OBS2: Quando a promise é resolvida, ela gera um objeto com o status e o resultado que foi recebida


/**
  #### 2. then() - Ao resolver uma promise (fulfill ou reject), a promise ganha acesso ao methodo then. O método then executa um callback onde seu primeiro parâmetro faz referência ao que foi passado na condição de cumprimento. 

  #### 2.1 Essa promise retorna mais uma promise e assim sucessivamente, podendo ser encadeada com sucessivos then() e executando novas funções
  
  #### 2.2 Tendo um valor de retorno, cada novo encadeamento de then, se refere ao retorno do anterior em seu primeiro parâmetro. Ver EX 3:
*/

// EX2: Fn anônima passada como callback, onde seu parâmetro(aqui como resolution) se refere a onFulfillment. 
// Referindo-se ao que foi passado na condição de cumprimento da promise.

const thenExample = promessa.then((resolution) => {
  return resolution // 'Italo'
})


// EX3: Encadeamento de then():
const thenEncadeado = thenExample
  .then((resolution) => {
    console.log(resolution) // 'Italo'
    return `${resolution} estuda promises`
  })
  .then(resolution => {
    console.log(resolution) // 'Italo estuda promises'
    return `${resolution} e Async/Await`
  })
  .then(resolution => `${resolution} no MDN`);
;


/**
 * #### 3. catch() - O seu uso é estruturalmente semelhante ao método then, porém o método catch() se relaciona à promise quando ela é rejeitada.
 * #### * O catch é importante de se utilizar ao estruturar uma promise, para lidar com "erros" e rejeições.
 * #### ** "After a catch the chain is restored". Pode ser encadeada por then() novamente.
 * ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
 * 
*/

// EX4: Podemos passar a função que será executada com a rejeição da promise dentro do próprio then também, ao invés de utilizar o catch(). Ex abaixo:
// thenEncadeado.then((resolution) => ... , (rejection) => ... )


// EX5: Continuando com a promise thenEncadeado e adicionando catch:

const catchAdded = thenEncadeado.catch(rejection => {
  return `Oh, no. ${rejection}`
  // throw 'Oh, no'
}) //.then()... continuaria com o encadeamento


/**
 * #### 4. finally() - Será executada uma função anônima assim que a promise acabar. finally será chamado ao final independente se a promise for fulfilled ou rejected.
 *
 * ** 4.1 O método finally() pode ser útil quando você deseja realizar algum tipo de processamento ou limpeza quando a promise for estabelecida, independentemente de seu resultado (sucesso ou falha).
 *
 * ** 4.2 O resultado da promessa com finally será o ultimo retorno antes dele, enquanto finally apenas executará sua ação de callback final.
 * 
 * https://www.scaler.com/topics/javascript-promise-finally/
*/

//EX6: Adição do finally. (Note que após o catch, ao continuar encadeando, a promise terá o estado de fulfilled.)

const finallyAdded = catchAdded.finally(() => console.log('Cleared all logs after finally'))


/**
 * #### 5. Promise.all() - Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.
 * 
 * #### 6. Promise.race() - Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida. É de fato uma "corrida" entre as promises.
*/

/* EX7 - Promise.all e EX8: Promise.race

------ Dados:
const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});
------

*********** Ex.7
const tudoCarregado = Promise.all([login, dados]);
tudoCarregado.then(respostas => {
  console.log(respostas); // Array com ambas respostas
});

*********** Ex.8
const carregouPrimeiro = Promise.race([login, dados]);
carregouPrimeiro.then(resposta => {
  console.log(resposta); // Login Efetuado
*/

