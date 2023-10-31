/*
*1.0: = é o operador de atribuição. Ao declarar uma variável "var" é possível atribuir qualquer tipo de valor ao mesmo:	

*1.1: A operação atribuída à qualquer variável (var any1 = operacao), ou seja, tudo APÓS o sinal de atribuição ("=") é resolvida antes de ser atribuída a varíavel, seja qual for a operação. Qualquer cálculo, retorno, resolução etc será resolvida e só então atribuída à variável.
*/

//2.0: "var" permite alterar e criar uma nova declaraçao de msm nome sem quebrar, além de vazar do escopo local e poder ser acessado por qualquer item em escopos internos
var numItems = 15;
var preço = 65;
var totalValor = numItems * preço;
console.log(totalValor);

var cidade = 'Florianopolis',
	estado = 'Rio de Janeiro',
	pais = 'Intankável';
console.log(cidade, estado, pais);

var corFavorita = 'Azul';
corFavorita = 'Pretinho';
var corFavorita = 'Preto';

console.log(corFavorita); // Preto

//3.0: "let" permite alterar a variavel, mas nao pode declarar uma nova let com o mesmo nome ja usado - Pode reatribuir,  mas não pode declarar 2 vezes
let corSecundaria = 'Amarelo';
corSecundaria = 'Laranja';
console.log(corSecundaria); // Laranjo

//4.0: Ao invés de declarar a palavra "var" a cada nova variável, é possível criar novas variáveis em sequência após uma vírgula
var tibia, dofus, apex, truco, baralho;
