/* EXERCÍCIO ----------------------------------------------- */

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

const brasilCopa = ['1959', '1962', '1970', '1994', '2002'];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

/* PS : "numeroCopa" nada + é do que um value qualquer 
que vou setar p/ poder puxar o resultado do forEach onde eu quiser.
EX : "Eu quero que o forEach, repetindo essa execução 
pra cada valor da array existente, passe o valor aqui 'numeroCopa'"*/
brasilCopa.forEach(function (numeroCopa, index, array) {
  console.log(`O brasil ganhou a copa de ${numeroCopa}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Tangerina
const quitanda = ['Banana', 'Uva', 'Pêra', 'Tangerina', 'Maçã', 'Caju'];

for (var i = 0; i < quitanda.length; i++) {
  console.log(quitanda[i]);
  if (quitanda[i] === 'Tangerina') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = quitanda[quitanda.length - 1];
console.log(ultimaFruta); // 'Caju'

// O LENGTH total é 6, pois tem 6 valores no Array.
/* Mas como a contagem do index começa a partir do 0
O ultimo item vai ser o Index 5. Portanto lengthtotal(6) - 1 = 'Caju' (Index 5) */