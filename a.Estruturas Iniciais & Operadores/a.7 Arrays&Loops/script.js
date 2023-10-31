/* ARRAYS */
/**
 * 1. É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
	2. Diferente do objeto, o ARRAY é aberto com "[]" colchetes -- EXEMPLO ABAIXO
	3. Acesse um elemento da array utilizando [n]
	4. A array utiliza um método de acesso de seus itens chamado de "BRACKET NOTATION". Observe que sempre que for referido
	 a uma array com um valor sendo passado entre colchetes em seguida (ex: array[number]), essa operação estará se comunicando com o item contido naquela posição dentro da Array.
*/

var videogames = ['PS5', 'Switch', '3ds'];
videogames[2]; // 3ds
videogames[1]; // Switch

//1.0 Alguns metodos e propriedades da array

videogames.pop(); // Remove o último item e retorna ele
console.log(videogames);

videogames.push('3DS Again', 'Super Nintendo'); // Adiciona ao final da array
console.log(videogames);

console.log(videogames.length);

//--------------------------

/* LOOPS */
//1. Fazem algo repetidamente até que uma condição seja atingida.
//
//2. O for loop possui 3 partes: início, condição e incremento - ABAIXO
//
/* !IMPORTANTE => Esses números são em referência ao INDEX dos valores da array, em relação à sua ordem/posição. 
No caso 'PS5' é o 0, então começando do 0 ele começa o loop a partir do PS5
Caso colocasse o início como 1, começaria do 'Switch', e por assim vai. - SEGUE ABAIXO
*/

for (let numero = 0; numero < 5; numero++) {
	console.log(numero);
}

var loopTeste = 0; // Outra forma de Loop - WHILE LOOP
while (loopTeste <= 10) {
	console.log(loopTeste);
	loopTeste = loopTeste + 2; // Forma de incrementar o loop
}

//3. Loops em Arrays - Puxando da array videogames
/* 
	BOA PRÁTICA = guardar o lenght do elemento numa variável, ao inves do loop rodar o lenght toda vez
	ex: let allGames = videogames.lenght
*/
for (var item = 0; item < videogames.length; item++) {
	console.log(videogames[item]); // Aqui ao invés de mostrar o valor incrementado, mostra o conteúdo da variável videogame
}

// O loop irá parar caso encontre a palavra BREAK
// i = 0 é o startpoint; i < videogames.lenght é a condição a ser alcançada; i++ forma a ser incrementada
for (var i = 0; i < videogames.length; i++) {
	if (videogames[i] === 'Super Nintendo') {
		break;
	}
	console.log(videogames[i]);
}

// 4. forEach - forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
// 5. forEach tem 3 parametros a se utilizar : .forEach(function('valuequalquer', index, 'arraynomequalquer')) -

videogames.forEach(function (parametroQualquer, index) {
	console.log(parametroQualquer, index);
});
