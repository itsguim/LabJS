// 1. Selecionar o Conteúdo

// 2. Fazer um Loop pra adicionar uma funçao callback pra todas as imagens
/* Puxar a index ao clicar no elemento */

// 3. Bolar a função
/* A função consiste em: ao selecionar uma li no tabmenu,
adicionar a função ativo no box-animais referente ao index do LI clicado*/

// VC PRECISA Indicar onde adicionar a classe, neste caso através do index que vai apontar no item individual, pq se nao não da pra add pq se trata de uma nodelist né duh
// Dentro da funçao eu preciso verificar dnv outro aspecto da constante box animais. 
// O for each de fora é pra passar a funçao pra cada elemento, e o de dentro é só pra verificar se tem a classe. 
// BoxAnimal[item] pra verificar, independente do index, só taria verificando 1 vez naquele msm index que eu to clicando pra adicionar kkkk, que nao é o que eu quero.
function initTabSelect() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const boxAnimal = document.querySelectorAll('.js-tabcontent .box-animaisinfo')

  function tabSelect(item) {

    boxAnimal.forEach((el) => {
      if (el.classList.contains('ativo')) {
        el.classList.remove('ativo')
      }
    })

    boxAnimal[item].classList.toggle('ativo')
  }


  tabMenu.forEach((el, index) => {
    el.addEventListener('click', () => {
      tabSelect(index)
    })
  })

  boxAnimal[0].classList.add('ativo')
} initTabSelect();


function initAccordion() {
  const dtSelect = document.querySelectorAll('.js-accordion dt')

  function accordionInsert() {

    // Precisa ser this pra tratar o item individual dentro de uma função callback
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }

  dtSelect.forEach((el) => {
    el.addEventListener('click', accordionInsert)
  })
}
initAccordion();

// Scroll -
// scrollTo() e scrollIntoView()

const linkGet = document.querySelectorAll('.js-nav .nav-link:not(a[href^="https"])')


function smoothScroll(event) {
  event.preventDefault()

  const getAttr = this.getAttribute('href')
  const sectionSelect = document.querySelector(getAttr)

  // window.scrollTo({
  //   top: sectionSelect.offsetTop,
  //   options: 'smooth'
  // })

  sectionSelect.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  })
}

for (i = 0; i < linkGet.length; i++) {
  linkGet[i].addEventListener('click', smoothScroll)
}


