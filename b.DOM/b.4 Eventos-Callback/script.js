// 1. Listener de Eventos --------------------
/** 
 * Callback = Uma função passada dentro de um ARGUMENTO(durante sua chamada) de outra função, geralmente sendo responsável por completar uma determinada ação.
 * 
 * No contexto de um listener de eventos, a função de callback será ativada assim que certo evento ocorrer neste elemento. ("click" - quando um click for identificado, "resize" quando a janela for redimensionada, entre outros eventos) 
 *
 * O método addEventListener sempre recebe dois argumentos, o primeiro sendo o tipo de evento como string (ex:'click'), e o segundo sendo a função de callback, que será executada após o evento ser triggerado.
 * 
*/

/* addEventListener('evento', callback) */

// 1.1 - É boa prática separar a função de callback
// do addEventListener, o ideal é não passar como funçao anonima
// E sim uma função declarada fora do listener
const buttonPress = document.querySelector('.nav-link')
const menu = document.querySelector('.menuzinho')

function callbackMenu() {
  const menu = document.querySelector('.menuzinho')
  menu.classList.toggle('menuzinhoshow');
}

// 1.2 Estrutura -
// elemento.addEventListener(event, callback, options)
buttonPress.addEventListener('click', callbackMenu)
/* PS: o CORRETO é passar o callback sem executar diretamente ---
ou seja, evitar : addEventListener(evento, callback())
ou ainda, evitar : addEventListener(evento, function(){})
ou arrow functions tbm : addEventListener(evento, => ())
Isso é uma boa prática pra melhor debugar, mas os casos de cima também funcionam.
*/

// -------------------------------------------------------------)

// 2.0 - Eventos (em callback function)
//-Primeiro parâmetro de um callback function, pode utilizar qualquer NOME
//-Esse primeiro parâmetro(de nome qualquer), tem propriedades e métodos específicos
// !!De acordo com o tipo de EVENTO-LISTENER selecionado.
// O primeiro parâmetro, geralmente denominado como event, sempre vai se referir ao evento e a partir dele extrair algo.

const galeria = document.querySelector('.slider-gallery')

function testeEvento(event) { // O primeiro parâmetro do callback é referente ao evento que ocorreu.

  const evento1 = event.currentTarget, //O node que contem o eventListener.
    evento2 = event.target, //retorna o alvo específico do evento
    evento3 = event.composedPath(),
    evento4 = event.type;
  // Ver na documentação mais propriedades e métodos
  console.log(evento1)
  console.log(evento2)
}

galeria.addEventListener('click', testeEvento)

//<> 2.1 - event.preventDefault() <> ____________________________________________________________
// Previne o comportamento padrão do evento no browser.
// No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  // event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

//<> 2.2 - this <> _____________________________________________________________________________
//  No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

const header = document.querySelector('h2');

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

header.addEventListener('click', callback);

// <> 2.3 - DIFERENTES eventos do listener <> __________________________________________________
// 'click', 'scroll', 'resize', 'keydown', 'keyup', 'mouseenter' e mais. 
// Eventos podem ser adicionados a diferentes elementos, como o window e document também.

// <> 2.4 - evento 'keyboard' por exemplo:
// ~~ UMA Boa forma de fazer coisas como fullscreen, etc ~~
function handleKeyboard(event) {
  if (event.key === 'a')
    document.body.classList.toggle('azul');
  else if (event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);

// <> 2.4 - forEach pra listener de eventos <> __________________________________________________
// O método addEventListener é adicionado à um único elemento, 
// então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((el) => {
  el.addEventListener('click', imgSrc);
});
// __________________________________________________