function initAnimalTab() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent .box-animaisinfo')

  if (tabContent.length && tabMenu.length) { // Pra caso mude de pagina, nao executar
    function activeTab(qualquer) {
      tabContent.forEach((el) => {
        if (el.classList.contains('ativo')) {
          el.classList.remove('ativo');
        }
      })

      tabContent[qualquer].classList.add('ativo')
      /* 
      1. Qualquer valor que eu inserir dentro do colchete de uma Nodelist ou Array
      eu vou estar falando com o index.
      2. Portanto, qualquer valor que eu passar como ARGUMENTO da função activeTab()
      eu vou estar informando um valor index também, que será interpretado no parâmetro da nodeList.
      */
    }

    tabMenu.forEach((el, index) => {
      el.addEventListener('click', () => {
        activeTab(index);
      })
    })
    /*
    1. Ao clicar no elemento, o valor do index será passado na função como parâmetro,
    por conta do parâmetro index do forEach. Assim informando o valor do index do item clicado
    pra Função, e pra NodeList que é o que eu quero. Agora temos tudo sincronizado

    PS:Quando for necessário passar um parâmetro no callbackfunction '(el, index) =>'
    É necessário abrir uma função anônima
    e passar a função com parametro dentro 'activeTab(index)' do callback.
    */
    // Checar CSS - seletor criado = .js-tabcontent .box-animaisinfo.ativo
  }

  tabContent[0].classList.add('ativo')
}
initAnimalTab();


// --------- Acordion


function initAccordion() {
  const descriptionSelect = document.querySelectorAll('.js-accordion dt')

  function accordionInsert() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }

  /* Fiz com o forloop normal só pra variar um pouco */
  for (let i = 0; i < descriptionSelect.length; i++) {
    descriptionSelect[i].addEventListener('click', accordionInsert)
  }
}
initAccordion();

// --------- Smooth Scrolling Interno

function initSmoothScroll() { // scrollTo() e scrollToView()

  const linksInternos = document.querySelectorAll('.js-nav a[href^="#"]')
  function smoothScrolling(evt) {
    evt.preventDefault()

    const hrefSelect = this.getAttribute('href') //1. Vai puxar o href, que retorna os valores do ID (#contato, #faq etc)
    const section = document.querySelector(hrefSelect) /*2. Aqui está sendo passado o valor obtido já como um elemento selecionável
    que corresponde aos ID's das seções, retornando assim as próprias seções em si*/

    // Forma que tem mais aceptabilidade, funciona com Safari.
    // const getTop = section.offsetTop
    // window.scrollTo({
    //   top: getTop,
    //   behavior: 'smooth'
    // })

    // Forma Simplificada - Porém com menos suporte (Safari ja n pega o objeto de parâmetro)
    section.scrollIntoView({
      block: 'center', /* center, end, start */
      behavior: 'smooth'
    })
  }

  linksInternos.forEach((el) => {
    el.addEventListener('click', smoothScrolling)
  })
}
initSmoothScroll();

// ---------- Scroll reveal Animation

function initScrollReveal() {
  const sections = document.querySelectorAll('.js-scrollanim')

  function scrollRevealAnim() {

    for (i = 0; i < sections.length; i++) {
      const scrollTrigger = window.innerHeight * 0.75
      const topDistance = sections[i].getBoundingClientRect().top - scrollTrigger

      if (topDistance < 0) {
        sections[i].classList.add('ativo')
      }
    }
  }
  scrollRevealAnim() // Bom ja deixar ativo pra primeira seção ja ficar ativa de cara

  window.addEventListener('scroll', scrollRevealAnim)
} initScrollReveal()

