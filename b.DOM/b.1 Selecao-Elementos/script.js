//<> 1. Selecionando pelo ID - seleciona e retorna o elemento do DOM
function selecIdAnimal() {
	const testeGetId = document.getElementById('animais');
	return testeGetId;
}

selecIdAnimal();

// -----------------
//<> 2. Selecionando pela CLASSE -
// Selecionam e retornam uma lista de elementos do DOM. A lista
// retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.
const gridSection = document.getElementsByClassName('grid-section');

// No caso de listar mais de uma classe junta, ele vai retornar apenas os elementos que tenham as classes
const contato = document.getElementsByClassName('grid-section teste');

// ----------------
//<> 3. Selecionando pela TAG -
// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Usando INDEX pra selecionar qual a ordem objeto
const indexGet = console.log(gridSection[1]);

// -----------------
//<> 4. Seletor geral QUERY -

// Query = Passa o argumento igual como se especifica uma classe etc no CSS
// getElement = Passa o argumento só com a string com o nome

// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
const boxAnimal = document.querySelector('.boxes-animais');
const contato2 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.slider-gallery li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');

const primeiroUl = document.querySelector('ul');
// Agora a variavel "primeiroUl" tá selecionada como ul
// E agora vc pode usar o 'querySelector' tbm na variável que tá selecionada como algo
const navItem = primeiroUl.querySelector('li');

// ------------------
// <> 5. Seletor GERAL LISTA -
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NODELIST

// Diferente do getElementsByClassName, a lista AQUI É ESTÁTICA.
// Ou seja, se for adicionada mais classes etc a lista nao atualizará.
const gridSection2 = document.querySelectorAll('.grid-section');
const testeLista = document.querySelectorAll('.teste');
const imgSelection = document.querySelectorAll('.slider-gallery img');

/* NODELIST se diferencia de uma HTMLCollection -
a NODELIST além de ser estática em relaçao ao HTML
possui também métodos e propriedades que só podem ser usadas por ela
POR EXEMPLO : forEach() só pode ser usado em NodeLists */

// ------------------
// 6. ARRAY-LIKE
// HTMLCollection e NodeList são array-like, parecem uma array mas não são.
// É possível transformar array-like em uma Array real, utilizando o método Array.from(elemento)

testeLista.forEach(function (element, index, nomeArray) {
	element.classList.add('img-resize');
	console.log(index); // Index dos itens
	console.log(nomeArray); // Mostra a array completa
});

//6.1 Transformando em Array
const arrayTransform = Array.from(gridSection); // Antes uma HTMLCollection agora vira array
// Transformando em array, agora podemos usar metodos de uma array e propriedades nele

arrayTransform.pop();
console.log(arrayTransform);
arrayTransform.push('Teste');
console.log(arrayTransform);

// ---------------- EXERCICIO

// Retorne no console todas as imagens do site
const exercicio = document.getElementsByTagName('img');

// Retorne no console apenas as imagens que começaram com a palavra imagem
const exercicio2 = document.querySelectorAll('[src^="img/imagem"]');

// Selecione todos os links internos (onde o href começa com #)
const exercicio3 = document.querySelectorAll('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao
const exercicio4 = document.querySelector('.box-animaisinfo h2');

// Selecione o último p do site
const exercicio5 = document.querySelectorAll('p');
console.log(exercicio5[exercicio5.length - 1]);

/* LISTA ESTÁTICA = NODEList (querySelectorAll)
LISTA DINÂMICA = HTMLCollection (getelements e querySelector) */
