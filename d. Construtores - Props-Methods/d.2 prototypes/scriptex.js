// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, age) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = age
}

Pessoas.prototype.fullName = function () { // Declarar função explícita, nao anônima, se não dá alguns problemas na hora de ler as propriedades
  return this.nome + ' Andou'
}

const pessoa1 = new Pessoas('Italo', 'Das Dores')
const pessoa2 = new Pessoas('Balalaika', 'Pirralhinho', 34)


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// use .constructor.name pra checar se necessário
li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;

/* notas
  Aqui é importante entender como um elemento herda propriedades e métodos de outros. Tudo depende do protótipo ao qual o elemento está herdando seus métodos e funções

*/