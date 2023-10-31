// EXEMPLO PRÁTICO OBJETOS E DOM
/* PS a) = Dentro da funçao construtora, vc deve referenciar a propriedade/método com this antes.
No objeto LITERAL vc n precisa, basta declarar atribuir um nome*/

/*A UTILIZAÇÃO PRÁTICA das Funções Construtoras é geralmente pra você utilizar a estrutura de uma função, mudando apenas valores que você deseja nas propriedades sem ter que ficar recriando toda vez que for querer fazer algo, mudar alguns valores etc*/

// Exemplo -

function AddClassDom(seletor) {
  this.classeAdd = () => {
    const elemento = document.querySelector(seletor)
    elemento.classList.add('ativar')
  }
}
const ulSelect = new AddClassDom('ul')
// ulSelect.classeAdd() - Ja executa a função de add class no ul
const liSelect = new AddClassDom('li')
// liSelect.classeAdd() - Mesma coisa

// ---------
// TESTE DE ESCOPO NUMA callbackFn --------
const buttonSelect = document.querySelectorAll('button')

function executeFn(evt) {
  const getClass = this.getAttribute('class')
  if (getClass) {
    new AddClassDom('button').classeAdd()
  }
}
buttonSelect.forEach((el) => {
  el.addEventListener('click', executeFn)
})
// Fiz um teste de escopo, e o resultado é que mesmo numa função callback
// Eu posso utilizar as propriedades e métodos da constructorFn

// EXERCÍCIOS -----------------------------------------------

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}
// --
function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
  this.andar = () => {
    return this.nome + ' andou'
  }
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João Bonifácio', '33 anos')
const maria = new Pessoa('Maria das Dores', '25 anos')

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function DomTest(seletor) {
  const elementList = document.querySelectorAll(seletor)

  this.elements = elementList

  this.addClass = (classe) => {
    this.elements.forEach((el) => {
      el.classList.add(classe)
    })
  }
  this.removeClass = (classe) => {
    this.elements.forEach((el) => {
      el.classList.remove(classe)
    })
  }
}

const botaoDom = new DomTest('button').addClass('Bilola')