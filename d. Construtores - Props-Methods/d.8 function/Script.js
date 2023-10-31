// FUNCTION PROPRIEDADES E MÉTODOS <><>
// ARRAYS REF.
const beyblades = {
  Tyson: {
    bName: 'Dragoon',
    bColor: 'Blue'
  },

  Max: {
    bName: 'Draziel',
    bColor: 'Purple'
  }
}

// 
function sum(a, b) {
  return a + b
}

// *********************
/*
  Pra encadear métodos e propriedades numa função, vc deve falar com a FUNÇÃO SEM EXECUTÁ-LA, ex:
  - sum(6,5).length: irá retornar um número 11, e vc aí vai poder encadear com mét/propri. de número apenas
  - sum.length: Agora vc tá falando com a função em si, pois não está executando e sim apenas chamando-a
*/


// ARROW FUNCTION 
/*
  1.Caso tenha 1 parâmetro só não precisa estar em parênteses. Funçao sem chave, o que for passado tem retorno direto. 
  EX: map(el => el *= 5) 
  - "el" parâmetro , "el *= 5" é o return implícito.
*/


// *********************

// FUNCTION.LENGHT e FUNCTION.NAME ****** 
/*
  length retorna o total de argumentos da função. name retorna uma string com o nome da função.
*/


// *********************

// FUNCTION.CALL(objectToReferWithThis, arg1, arg2...); *******
/*
  Com call é possível determinar um novo OBJETO THIS de referência a ser utilizado naquela função, vejamos:
*/

function beybladePicker(gradeLevel) {
  return `I've picked ${this.bName}, which is ${this.bColor} and ${gradeLevel}`
  // A função por si só vai retornar a string com os undefined, pq o valor this padrao é o objeto Window da janela nesse caso
  /* !!!Ler sobre a diferença do THIS nos tipos de funções no arquivo "ThisUsage.js"!!! */
}

beybladePicker.call(beyblades.Tyson) // 'I've picked Dragoon, which is Blue and undefined'. 
beybladePicker.call(beyblades.Max) // 'I've picked Draziel, which is Purple and undefined'.
beybladePicker.call(beyblades.Max, 'Grade 3') // 'I've picked Draziel, which is Purple and Grade 3'


// *********************

// FUNCTION.APPLY(THIS, [arg1, arg2,...]);
/*
  Funciona da mesma forma que o CALL, a diferença é que os argumentos da função são passados em forma de array.
*/

const applyXCall = [3, 4, 123, 445, 1223, 342, 211, 241, 412]
//  EX:
Math.max.call(null, 3, 4, 123, 445, 223) // O null ali é pra continuar se referenciando ao Math construtor msm. Retorna 445.
Math.max.apply(null, applyXCall) // Ao inves dos parâmetros separados, aceita array como parâmetros. Retorna max que é 1223.


// *********************

// FUNCTION.BIND(THIS, arg1, arg2...) 
/*
  Também serve pra atribuir um novo objeto assim como CALL e APPLY.
  A diferença aqui é que você somente "binda" e não executa logo quando faz o bind
  -* O truque aqui é que você faz o bind atribuindo a uma variável, e ao puxar ela ja vai ta com aqueles valores de this e argumentos
  guardadas.
  -*² Se toda vez vc tem uma função que tá utilizando bastante, mas geralmente só faz a troca de 1 argumento ou outro, o bind ajuda
*/

const fruta1 = {
  fruta: 'Banana',
  cor: 'Amarela',

  mostrarFruta(carestia, valeOuNao) {
    return `${this.cor} é a cor da fruta ${this.fruta} que é ${carestia}, mas ${valeOuNao}`
  }
}
const fruta2 = {
  fruta: 'Manga',
  cor: 'Alaranjada'
}

/** 
 * Vejamos:
 * 1. a constante valeFruta, é nesse caso a chamada do método mostrarFruta() do objeto fruta1 "bindado" a outro objeto.
 * 
 * 2. Com uso do bind em fruta1.mostrarFruta(), o objeto de referência foi mudado pra fruta2.
 * 3. O método mostrarFruta() de fruta1 agora utiliza as propriedades "fruta" e "cor" do novo objeto referenciado.
 * 4. Por fim, note que com o método bind em mostrarFruta() eu atribuí também ao primeiro parâmetro um valor fixo, que substitui o parâmetro ${carestia}
 * 5. RESULTADO : valefruta = fruta1.mostrarFruta(), com bind em fruta2, utilizando suas propriedades como referência, e já com o valor do seu primeiro parâmetro bindado também, tudo isso atribuído à constante.
*/

// ABAIXO :
const valeFruta = fruta1.mostrarFruta.bind(fruta2, 'bem carinho viu') // Tá bindado que é "bem carinho viu" no param¹, porem sobra um parâm² pra se modificar dinamicamente
valeFruta('não vale') // Alaranjada é a cor da fruta Manga que é bem carinho viu, mas NÃO VALE.
valeFruta('vale a pena') // ..., mas VALE A PENA.


// EX2 - Um médico que só aceita uma determinada altura mas quer que o peso mude sempre
function imc(altura, peso) {
  return peso / (altura * altura);
}
const imc180 = imc.bind(null, 1.80);
imc180(70); // 21.6
imc180(85); // 24.69

// VER - https://imasters.com.br/javascript/descomplicando-call-apply-e-bind-em-javascript#:~:text=O%20Bind%20por%20sua%20vez,valores%20atribuídos%20da%20primeira%20função.
