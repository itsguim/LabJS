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
      1. Qualquer valor que eu inserir dentro do colchete de uma Nodelist
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
