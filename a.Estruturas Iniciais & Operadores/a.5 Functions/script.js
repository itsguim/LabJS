// Creating a function

/**
 * 1.0 Parâmetros - São os variáveis dinâmicas que servem como "placeholders" quando são passados durante a declaração/criação de uma função. Mais tarde os valores dos parâmetros serão substituídos pelos valores passados como "argumentos"
 * 
 * 2.0 Argumentos - São os valores que vão ser interpretados pelos parâmetros de uma função durante sua chamada/execução.
 * - 2.1 Ao chamar uma função passando argumentos, a leitura da função retorna para sua estrutura de declaração, e então os valores dos argumentos são interpretados/substituídos nos locais onde os valores dos parâmetros estão definidos.
 * 
 * 3.0 Retorno - É possível definir um retorno para a função, de modo que quando a mesma seja "chamada", ela traga algum valor ao qual foi atribuído em seu retorno. Esse retorno pode ser qualquer tipo de valor, até mesmo novas funções.
 * 
*/

// NOMENCLATURA : PARAMETROS (peso, altura) e ARGUMENTOS (valores passados durante a chamada, ex: 79, 1.2)
function imc(peso, altura) {
	const imcCount = peso / altura ** 2;
	return imcCount;
}

console.log(imc(79, 1.2));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
	const valor = lado * 4;
	return valor;
}

console.log(perimetro(40));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
	const nomeFull = `${nome} ${sobrenome}`;
	return nomeFull;
}

console.log(nomeCompleto('Italo', 'Guimaraes'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function () {
	console.log('Italo Araujo');
});

// Exemplo de uso
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
	return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
	return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

// Exercício da udemy
var idade = 90; //Aqui normalmente seria obtido por input

if (idade >= 0 && idade < 15) {
	document.write('Criança');
} else if (idade >= 15 && idade < 30) {
	document.write('Jovem');
} else if (idade >= 30 && idade < 60) {
	document.write('Adulto');
} else {
	document.write('Idoso');
}
