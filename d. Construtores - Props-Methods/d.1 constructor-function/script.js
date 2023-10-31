// CONSTRUCTOR FUNCTION --------<><><><><><><><><><>
// Funções Construtoras são responsáveis por construir novos objetos sempre que chamamos a mesma.

// 1.1 -- Objeto Literal --------

const pandawa = {
  agua: 'Onda da Tristeza',
  fogo: 'Absinto',
  ar: 'Dormência',
  terra: 'Zurrapa',
  level: 200,
}

const enufrit = pandawa
enufrit.agua = 'Pá Massacrante' // Ainda se trata do mesmo objeto, enufrit ou pandawa tanto faz pra se referir

/* - FUNÇÕES CONSTRUTORAS UTILIZAM PascalCase (Início com letra maiuscula) */

// 1.2 -- new Keyword --------
// A palavra chave new é responsável por CRIAR um objeto baseado na função que passarmos a frente dela.
/* PS: UMA FUNÇAO CONSTRUTORA POR SI SÓ NÃO É UM OBJETO!!! */

function ConstructorTeste() {
  this.anime = 'Jujutsu'
  this.animal = 'Jibóia'
  this.criouMetodo = function () {
    return 'Metodo apresentado'
  }
}

const novaConstru = new ConstructorTeste() // Criei um novo objeto a partir da função
// Se eu alterar ou criar propriedades, essa vai ser alterada apenas a partir do construtor novo que fiz
novaConstru.animal = 'Sapo Cururu'
novaConstru.anime = 'HxH'

// 1.3 -- Utilizando Parâmetros/Argum. ------------
function Livros(livroDesejado, preçoLivro) {
  this.nome = livroDesejado
  this.preço = preçoLivro
}

const firstBook = new Livros('Pedra Filosofal', 80.50)
const secndBook = new Livros('Taboquinha de Jesus', 40.30)

// 1.4 -- Demonstrações --------------

function FrutaValorMercado(valorInput, nomeFruta) {
  const taxaMercado = 3.4
  const calcValor = (valorInput * taxaMercado) / 1.5

  this.calculo = calcValor
  this.fruta = nomeFruta

  const resultFinal = `A fruta ${this.fruta} custa ${this.calculo} no mercado di fábrica`
  console.log(this, resultFinal)
}

const fruta1 = new FrutaValorMercado(7.80, 'Banana-maçã')
const fruta2 = new FrutaValorMercado(12.3, 'Pamoinha')

/* O interessante aqui é que, 
se puxarmos os valores do objeto, só o que está declarado como propriedade ou método serão mostrados no log
Então podemos fazer toda uma matemática por trás e só será interpretado o que tá declarado, no caso como this.propriedade ou método */

// 1.5 -- Adição de propriedades --------
// Pra criar propriedades e métodos, basta atribui-la numa variavel normalmente:

function Naipes() {
  this.naipe1 = 'Copas'
  this.naipe2 = 'Paus'
  this.naipe3 = 'Espada'
}

const novoNaipe = new Naipes()
novoNaipe.naipe4 = 'Ouro'
novoNaipe.allNaipes = (comida, bebida, valor) => {
  const concat = `Eu comi ${comida}, bebi ${bebida}, e paguei ${valor}`
  console.log(concat)
}
// novoNaipe.naipe4 e novoNaipe.allNaipes()