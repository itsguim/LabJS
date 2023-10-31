/*Quando o usuário clicar nos links internos do site,
adicione a classe ativo ao item clicado e remova dos
demais itens caso eles possuam a mesma. Previna
o comportamento padrão desses links*/
// --------------------
const navLinks = document.querySelectorAll('a[href^="#"]')

function linkAtivo(event) {
  // 1º - DISABLE- Eu quero desabilitar as funções nativas dos links
  event.preventDefault();
  // 2º - CHECAGEM/REMOVE - Eu quero que verifique se há as classes antes de adicionar
  // Pois se adicionar antes, o loop vai tirar a classe do botao que acabei de clicar
  navLinks.forEach((el) => {
    if (el.classList.contains('ativo')) {
      el.classList.remove('ativo');
    }
  })
  // 3º - ADD O EVENTO - Após a verificação, então adiciona no botao que eu cliquei
  event.target.classList.toggle('ativo');

  // 4º - Entendimento - Ao clicar em outros botões, ele vai realizar a CHECAGEM ANTES
  // E retirar a classe caso haja, e só então ele vai adicionar ao botao targetado.
}

navLinks.forEach((el) => {
  el.addEventListener('click', linkAtivo)
})

//  ------------------------------
/*Selecione todos os elementos do site começando a partir do body,
ao clique mostre exatamente quais elementos estão sendo clicados*/

const bodyEl = document.querySelectorAll('body *:not(script)')

function targetado(event) {
  console.log(event.currentTarget)
}

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function remover(event) {
  event.target.remove()
}

bodyEl.forEach((el) => {
  el.addEventListener('click', targetado)
})
//  ----------------------------------
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const bodySelect = document.body

function textChange(event) {
  if (event.key === 't') {
    bodySelect.classList.toggle('font-up')
  }
}

bodySelect.addEventListener('keypress', textChange)