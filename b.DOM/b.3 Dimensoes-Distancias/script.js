// Propriedades e métodos pra captura de medidas

// 1. Diferença entre client, offset e scroll - medidas
// Client: Inner + Padding | Offset: Inner + Padding + Border | Scroll: Inner + Padding + OverflowedContent
const galeria = document.querySelector('.slider-gallery')
const copy = document.querySelector('.copyright')

galeria.clientHeight; // 1.1 - Altura interna de um elemento em pixels, do topo ao inferior.
// Inclui padding na altura = (height + padding (Tendo scrollbar horizontal, conta tbm))

galeria.offsetHeight; //1.2 Considera bordas - (height + padding + border (e scrollbar caso tenha))

galeria.scrollHeight; //1.3 - Distância considerando os elementos em overflow (parte não visível do elemento, em scroll e etc).
// Medido da mesma forma que clientHeight
// Considera tbm pseudo-elementos ::after ::before etc.

// ------------------------------------------------

// 2. Distância entre ELEMENTO em relação à página 

/* - offsetTop, left, right, bottom vão dar as respectivas medidas 
- assim como clientTop, left... etc
- assim como scrollTop, left... etc*/


// Distância entre o TOPO da BORDA do Elemento e topo da página
galeria.offsetTop;

// Distância entre a BORDA esquerda do elemento
// e o canto esquerdo da página
galeria.offsetLeft;

// 3. -------------------------- getBoundingClientRect()
// Retorna o tamanho de um elemento e sua posição relativa ao viewport.
// Os valores retornados são a distância em PX em relação à borda da janela
// variando de acordo com o viewport

galeria.getBoundingClientRect()
// podendo passar propriedades para checar separadamente as dimensoes
galeria.getBoundingClientRect().height
galeria.getBoundingClientRect().width
galeria.getBoundingClientRect().right
// etc.

// 4. WINDOW Size Checks --------------------
// Checagem das dimensões da JANELA COMPLETA

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if (window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

// 5. matchMedia()

// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) { // matches é uma propriedade utilizada pra condicionar o matchMedia
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

// EXERCÍCIO -------------------------- <><> = Nova Questao

//<><> Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img')

firstImg.offsetTop

//<><> Retorne a soma da largura de todas as imagens
function somaImagens() {
  let soma = 0;
  const imagens = document.querySelectorAll('img')
  imagens.forEach((el, index) => {
    console.log(el.offsetWidth, index)
    soma = soma + el.offsetWidth
    // soma += el.offsetWidth
  })

  console.log(soma)
}

window.onload = function () { //Método pra carregar a funçao ao carregar a pagina
  somaImagens()
}
/* LÓGICA DA SOMA : soma = soma + el.offsetWidth
o forLoop vai executar o calculo 1 vez pra cada item, sendo assim:
7 items = 7 loops

[Loop1 : soma = soma(0) + (el.offsetWidth[index0] = 265)]
[Loop2 : 265 = 265 + (el.offsetWidth[index1] = 265)]
[Loop3 : 530 = 530 + (el.offsetWidth[index2] = 265)]
[Loop4 : 795 = 795 + (el.offsetWidth[index3] = 265)]
[Loop5 : 1060 = 1060 + (el.offsetWidth[index4] = 265)]
[Loop6 : 1325 = 1325 + (el.offsetWidth[index5] = 265)]
[Loop7 : 1590 = 1590 + (el.offsetWidth[index6] = 371)]
let soma (final) = 1961
*/


//<><> Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
function verificar() {
  const links = document.querySelectorAll('a');

  links.forEach((el) => {
    if (el.offsetWidth && el.offsetHeight >= 48) {
      console.log(el, 'Possui boa acessibilidade')
    } else {
      console.log(el, 'FALHA CRÍTICA')
    }
  })
}

verificar()

//<><> Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia('(max-width: 720px)');
const menuGet = document.querySelector('.navbar')

function add() {
  if (browser.matches) {
    menuGet.classList.add('menu-mobile')
    console.log('Adicionou no navbar a classe')
  } else {
    console.log('Nao adicionou nada no nav')
  }
}

add()