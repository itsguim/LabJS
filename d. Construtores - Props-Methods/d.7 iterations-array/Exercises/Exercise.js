/* ***** Map, Filter, Reduce exercises ****** */

// EXERCÍCIO 1
// ---- Eleve ao quadrado o valor de cada elemento na array. Presuma que sempre receberá números na array de input.

/* Data */
const numArray = [1, 2, 3, 4, 5];

/* Resolution */
const arrayQuadrado = numArray.map((num) => {
  return num *= num
})


// EXERCÍCIO 2
// ---- Se o input for uma array de números, retorne a soma de todos os números positivos apenas. Caso a array seja vazia/não tiver números positivos, retorne 0

/* Data */
const numArray2 = [1, -4, 12, 0, -3, 29, -150];

/* Resolution */
const sumAllPositives = numArray2.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);

