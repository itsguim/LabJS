/* A diferença da estrutura do OBJETO, eh que :
1. Ao invés de passar uma STRING ou NUMBER simples após declaração (var, let, const), vc vai abrir uma chave {}
2. Você cria propriedades ou métodos que podem ser acessadas pelo "." após chamar o nome da variável -- EXEMPLO ABAIXO
3. Sempre separar a propriedade ou método com "," umas das outras
*/

const quadrado = {
	lados: 4, // Propriedade
	calculo(lado) { /* Método - Forma mais atual de sintaxe */
		const perimetro = lado * this.lados;
		return perimetro;
	},
	calculo2: function (laterais) { /* Método - Forma menos atual de sintaxe */
		return this.lados * (laterais + 2.5);
	},
};

console.log(quadrado.calculo(20));
console.log(quadrado.calculo2(5));

/* 4. "this" é utilizado pra você poder chamar alguma propriedade dentro do escopo do objeto (Ex no 1º log) */
// Caso não utilize o this, será buscado alguma declaração de mesmo nome fora do escopo do objeto, caso haja (Ex no 2º log) :

var altura = 1.92;
const infoItalo = {
	nome: 'Italo',
	altura: 1.79,
	cor: 'Pardo',
	info() {
		var compiladoInfo = this.nome + this.cor;
		return compiladoInfo;
	},
	infoNoThis() {
		return altura;
	},
};

console.log(infoItalo.info());
console.log(infoItalo.infoNoThis());

//
// EXERCÍCIO -----------
//

//-- Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const meusDados = {
	nome: 'Italo',
	sobrenome: 'Guimaraes',
	idade: 25,
	altura: 1.78,
};

//-- Crie/Adicione um método no objeto anterior, que mostre o seu nome completo
meusDados.nomeCompleto = function () {
	return `${this.nome} ${this.sobrenome}`;
};

//-- Modifique o valor da propriedade preco para 3000
var carro = {
	preco: 1000,
	portas: 4,
	marca: 'Audi',
};

carro.preco = 3500;

//-- Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const labrador = {
	cor: 'Preto',
	idade: 10,
	latir(pessoa) {
		if (pessoa === 'Homem') {
			return 'Late';
		} else {
			return 'Passa batido';
		}
	},
};
