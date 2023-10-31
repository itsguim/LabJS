// Alguns conceitos sobre Arrow Functions são importantes de exemplificar


// 1. UTILIZANDO THIS : 
/*
 *  Há diferenças importantes no uso de THIS dentro de Function Expressions/Fn. Declarations x Arrow Function
 * 
 * 00. - THIS depende exclusivamente de como/onde será invocado, não depende da função em si, portanto:
 * 001; - "The this keyword’s value has nothing to do with the function itself, how the function is called determines the this value"
 * 
 * 1. Normal Function: É mais indicado se trabalhar com funções normais cujo this serão referenciados de acordo onde ele está sendo invocado
 * em tipos de estruturas como: object methods e funções construtoras
 * 2. Arrow Function : Não possuem um objeto de referência exclusivo, por isso é complicado de se trabalhar com referências dinâmicas. A arrow function precisa ser criada fora do escopo global para que seu this seja diferente
 * 
 * 
 * Na minha análise:
 * --- This só é interessante de se usar junto a arrow functions, se trabalhado num escopo fechado/conhecido. 
 * --- OBS: Se a arrow function for declarada em escopo global, o this SEMPRE vai se referenciar ao objeto global.
 * */


// -------------------------------- PRIMEIRO CASO
function normalFn() {
  console.log(this) // === window, pai padrão.
}

const arrowFn = () => {
  console.log(this) // === window, mesmo sendo ArrowFn. Nesse caso ocorre porque inherita o pai, seja ele qual for. Em escopo global o pai é window. Caso seja declarado fora do escopo global, a referência seria diferente.
}

const OBJETO = {
  // ex 1:
  method() {
    console.log(this, 'LogMethod') // Padrão, (this.method()) === OBJETO
  },

  // ex 2
  normalFn, //normalFn: normalFn - (Shorthand pra atribuit a algo já declarado) -

  arrowFn,
}


normalFn() // Chamado em escopo global, naturalmente se referenciará a window.
OBJETO.normalFn() // Chamado através do objeto, o this vai herdá-lo como objeto agora, e vai se referir a OBJETO

arrowFn()
OBJETO.arrowFn() // Nos 2 casos da arrowFn, a funçao ja foi criada em escopo global inicial, por isso seu THIS sempre vai se referir ao objeto global window, mesmo sendo invocada dentro de um objeto.


//SEGUNDO CASO ---------------------------------

function ArrowVsNormal(dummy) {
  this.showName = dummy

  this.invokeNormal = function () {
    setTimeout(function () {
      console.log(this.showName)
    }, 300)
  };

  this.invokeArrow = function () {
    setTimeout(() => {
      console.log(this.showName)
    }, 350)
  };
}

const testScope = new ArrowVsNormal('Spike Lee')

testScope.invokeNormal(); // undefined
testScope.invokeArrow(); // Spike Lee

/**
 * Nesse caso o seguinte ocorre:
 *
 * this em invokeNormal = o método acima foi invocado no escopo global, por isso, como se trata de uma função normal, onde seu THIS é referenciado dependendo de onde for INVOCADO, o this nesse caso na linha 72 vai se referenciar ao objeto window, pois como foi dito, foi invocado no escopo global.
 *
 * this em invokeArrow = tem o resultado esperado, pois como seu this é fixado no escopo do objeto onde é DECLARADO, nesse caso na linha 73, o this se tratando de uma arrow function não é "redefinido" quando é invocado, continuando no escopo esperado do objeto ao qual foi declarado primeiramente.
 */

// vIDEO GUIDES : https://www.youtube.com/watch?v=VwzIJ-GWzm8 || https://www.youtube.com/watch?v=S5Mn0qQzJ-0