// 1. Escopo evita o conflito entre nomes.
// 2. Variáveis declaradas DENTRO de funções não são acessadas fora das mesmas.

function mostrarCarro() {
	var carro = 'Fusca';
	console.log(carro);
}

mostrarCarro();
// console.log(carro) - Dá erro pq n pode ser acessado fora da funçao

// 3. Declarar variáveis sem a palavra chave var, const ou let,
// cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

function mostrarCarro2() {
	carrinho = 'Camaro';
	console.log(carrinho);
}

mostrarCarro2(); // Camaro
console.log(carrinho); // Camaro

// 4. ESCOPO de Função (PAI)
// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var dofusRaça = 'Sadida';

function dofinho() {
	var dofusPref = `Eu prefiro ${dofusRaça} à Roublard.`;
	console.log(dofusPref);
}

dofinho();

// 5. ESCOPO de BLOCO
/* Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 
a melhor forma de declarmos uma variável é utilizando const e let, 
pois estas respeitam o escopo de bloco */

if (true) {
	var mes = 'Janeiro';
	let ano = '2020';
	console.log(mes);
}
// console.log(mes); VAR - Vazam do escopo de bloco e pode ser lido normalmente
// console.log(ano); LET e CONST - Respeitam o seu escopo

// 6. CHAVES {} criam um escopo de bloco,
// NÃO confundir com a criação de objetos = {}

{
	var i = 'Abstrato';
	const num = 2020;
}

// 7. LET e CONST -

/* CONST -
Mantém o escopo no bloco, impede a redeclaração 
e impede a modificação do valor da variável, evitando bugs no código. */
// Variáveis com valores constantes devem utilizar o const

/* LET -
Mantém o escopo no bloco, impede a redeclaração
mas permite a modificação do valor da variável. */

// EXERCÍCIO -------------------------------------

// Por qual motivo o código abaixo retorna com erros?
{
	var cor = 'preto';
	const marca = 'Fiat';
	let portas = 4;
}
console.log(cor /*marca, portas*/);
// R = declarações "marca" e "portas" não vazam do escopo do bloco
// Se descomentar dá erro.

// Como corrigir o erro abaixo?

const dois = 2;
function somarDois(x) {
	return x + dois;
}
function dividirDois(x) {
	return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));
//R = Só fiz tirar a constante da função e jogar no pai

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
	console.log(numero);
}

const total = 10 * numero;
console.log(total);
//R= Coloquei a var numero como let numero no for loop, pra que fique no escopo
// e não seja criado uma nova var que vaze e interfira nos valores externos
