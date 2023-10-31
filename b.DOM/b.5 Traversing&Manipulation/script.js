/* DESCOMENTAR NO HTML */


// 0.5 - Algumas propriedades de manipulação do HTML
/*
outerHTML, innerHTML e innerText
Propriedades que retornam uma string contendo o html ou texto.
*/

const mainTitle = document.querySelector('.main-heading')

mainTitle.outerHTML; // todo o html do elemento
mainTitle.innerHTML; // html interno
mainTitle.innerText; // texto, sem tags

// <> É possível atribuir um novo valor para as mesmas
mainTitle.innerText = 'ITALO <br> GUIMARAES'; // a tag vai como texto
mainTitle.innerHTML = 'ITALO <br> GUIMARAES'; // a tag é renderizada (interpretada)

// ----------------------------------------
// 1.0 - TRAVERSING - Navegando pelo DOM
/*
navegar pelo DOM, utilizando suas propriedades e métodos.
*/

const lista = document.querySelector('.slider-gallery');

lista.parentElement; // pai - Item acima hierarquicamente
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // Elemento Anterior Irmão (Em mesmo nível hier. HTML)
lista.nextElementSibling; // Elemento Posterior Irmão (Em mesmo nível hier. HTML)
lista.parentElement.nextElementSibling // Próximo Irmão do item pai, e assim vai...

lista.children; // HTMLCollection com os filhos
lista.children[0]; // Seleção por index padrão
lista.children[--lista.children.length]; // último filho
lista.querySelector('li:last-child'); // último filho

// 1.1 NODE vs ELEMENT
/*
Element's represetam um elemento html, ou seja, uma tag. Node representa um nó,
e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
*/

lista.childNodes; // todos os node child. Node sendo quase todo conteúdo possível
// Não sendo geralmente utilizado quando se quer selecionar tags, etc
lista.firstChild; // primeiro node child
lista.previousSibling; // node anterior irmão
// Sem o 'Element' a navegação vai ocorrer através de nodes geralmente
// !! GERALMENTE estamos atrás de um elemento e não de qualquer node em si.!!

// ----------------------------------------------------------
// 2.0 - MANIPULANDO ELEMENTOS
/*
É possível mover elementos no dom com métodos de Node.
*/
const contato = document.querySelector('#contato'),
  mapa = contato.querySelector('.mapa'),
  contatoHeading = contato.querySelector('.main-heading');
;
/*
AO Selecionar um elemento pai, que contenha nodes, é possível
com esses métodos alterar a posição dentro!
*/

// ***********************
lista.appendChild(mapa)
/** >>>
  *Move um elemento para dentro de um el. de destino qualquer
  *Move um NODE para o final da lista de um NODE-PAI Qualquer
  NODEDestino.appendChild(NodeASerMovido)
*/


/************************/
const cloneAlgo = lista.cloneNode()
//cloneNode(true) clona tudo dentro


// ***********************
contato.insertBefore(lista, contatoHeading);
/* >>>
  Move o elemento pra antes de outro elemento, que esteja contido no el. de destino

  -elementoDestino.insertBefore(elementoASerMovido, elementoDeReferencia)
  -NODE-PAI.method(NODE, CHILD-Do-Pai)
*/
// O elementoDeReferencia deve ser child do node-pai pra onde será movido.


// *********************
lista.removeChild(mapa)
// Remove o um node-child do elemento pai


// *********************
contato.replaceChild(lista /*oldchild*/, contatoHeading /*new child*/);
// Substitui o elemento filho especificado por outro.
/* 
  *Substitui o elemento filho especificado por outro.
  *Ambos tem que ser nodes-filhos do elemento pai 
  - PAI.method(Node-Filho-Old, Node-Filho-New)
*/


// 2.1 - CRIANDO ELEMENTOS ---------------------> createElement()
/*
Criar novos elementos com o método createElement()
*/

const navbar = document.querySelector('.navbar')

const li = document.createElement('li'),
  butao = document.createElement('a');
;

butao.innerText = 'BUTÃO'

li.appendChild(butao);
navbar.appendChild(li);

butao.classList.add('nav-link')
butao.setAttribute('href', 'https://g1.globo.com')

// 2.2 - CLONANDO ELEMENTOS -------------------------
/*
Todo elemento selecionado é único.
Para criarmos um novo elemento baseado no anterior,
é necessário utilizar o método cloneNode()
*/

const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais,
// Os 3 se referem ao msm e único elemento

const cloneTitulo = titulo.cloneNode(true); //true sinaliza para incluir os filhos
contato.appendChild(cloneTitulo);









