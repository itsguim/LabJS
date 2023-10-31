//1. Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
const navbar = document.querySelector('.navbar')

navbar.className; // string
navbar.classList; // lista de classes
navbar.classList.add('ativo');

navbar.classList.add('ativo', 'mobile'); // duas classes
navbar.classList.remove('ativo', 'mobile'); // mais de uma pode utilizar

navbar.classList.toggle('ativo');
// adiciona caso não tenha e retorna true/ remove caso tenha e retorna false

navbar.classList.contains('ativo'); // true ou false

navbar.classList.replace('ativo', 'inativo');
// ('classe q vc quer q seja substituida', 'classe final')

// 2. Modalidade LEGACY de add e replace ------------

navbar.className = 'navbar wrapper ativo teste'
navbar.className += ' teste2'

// 3. ATTRIBUTES ------
// Retorna uma array-like com os atributos do elemento.
const animalSection = document.querySelector('#animais')

animalSection.attributes; // retorna todos os atributos
animalSection.attributes[0]; // retorna baseado no index

// 3.1 getAttribute e setAttribute ---
// É muito comum métodos de get e set;
const mapa = document.querySelector('.mapa img')

mapa.getAttribute('src'); // valor do src
mapa.setAttribute('alt', 'Texto Alternativo'); // muda o alt
mapa.hasAttribute('id'); // true / false
mapa.removeAttribute('alt'); // remove o alt

mapa.hasAttributes(); // true / false se tem algum atributo

const imgs = document.querySelectorAll('img')

// Funçaozinha so pra treino
// Array + ForLoop + setAttribute
function imgAttr() {
  const imgsArray = Array.from(imgs);
  imgsArray.forEach((el) => {
    el.setAttribute('alt', 'Texto teste2')
  })
}

imgAttr()

// 4. READ-ONLY vs Writable
// Existem propriedades que nao permitem que sejam alteradas seus valores
// Essas são read-only. EX:
// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

/* el.className <- Writable
el.attributes <- read-only
e etc.*/

// EXERCÍCIO ------------------

// Adicione a classe ativo a todos os itens do menu

const navItem = navbar.querySelectorAll('a')

navItem.forEach((el) => {
  el.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

navItem.forEach((el) => {
  el.classList.remove('ativo')
})

navItem[0].classList.add('ativo')
// Verifique se as imagens possuem o atributo alt
// R - Não passa hasAttribute direto pq são várias imagens selecionadas na constante, entao precisa usar forloop

imgs.forEach((el) => {
  const temAtributo = el.hasAttribute('alt');
  console.log(el, temAtributo)
})

// Modifique o href do link externo no menu

navItem.forEach((el) => {
  el.setAttribute('href', 'https://facebook.com')
})

