const imagens = document.querySelectorAll('img');

// 1. forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

/* O VALUE(parametro) da funçao anonima do FOREACH, é um valor ao qual vc vai utilizar para se referir. 
- Encare como se o value fosse uma variável abstrata gerada pelo forEach
- Use esse value para se referir aos itens INDIVIDUAIS do forEach.
- Ex: Array de imagens. Quando passada no forEach, você vai se referir ao item individual a partir de agora. Então você vai estar falando com cada imagem, e não o conjunto delas mais, ao se referir a esse primeiro parâmetro de nome qualquer da função anônima.
*/

const imgsArray = Array.from(imagens);
//1.1 Método básico de passar função anônima
imgsArray.forEach(function (imagem) {
	console.log(imagem); // log de cada imagem individual
});

// -----------
// 2. ARROW FUNCTION
// Sintaxe curta em relação a function expression. Basta OMITIR a palavra-chave function e adicionar a FAT ARROW => após os argumentos.

imagens.forEach((item) => {
	console.log(item);
});

//2.1 É possivel omitir a chave {} em uma função que retorna apenas uma linha

imagens.forEach((item, index) => console.log(item));

// ------------
// EXERCICIO

// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
const paragrafo = document.querySelectorAll('p');

paragrafo.forEach((elemento) => {
	console.log(elemento.innerHTML);
});

// Como corrigir os erros abaixo:
// R - Só ajeitar os parâmetros e colocar dentro dos parenteses
imagens.forEach((item, index) => {
	console.log(item, index);
});

let i = 0;
imagens.forEach(() => {
	console.log(i++);
});

imagens.forEach(() => i++);
console.log(i);
