// ** ARRAYS
/* Armazena uma coleção de elementos, podendo ser qualquer elemento . Strings arrays objetos funçoes numbers etc.*/

let instrumentos = ['Guitarra', 'Baixo', 'Violão'];
let precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }], function andar(nome) { console.log(nome) }];

dados[0] // String('Tipo 1')
dados[1] // Retorna a array ['Carro', 'Portas', {cor: 'Azul', preco: 2000}]
dados[1][1] // Agora eu ja falo com o index da array de dentro. Retorna //'Portas'
dados[1][2].cor // propriedade cor do objeto de dentro da array, e assim vai


// -------- 1.2 CONSTR. DE ARRAYS
/* Os valores de ARRAY, diferente de uma NodeList, não são estáticos. Caso alterado ja altera na leitura da array */

// Array Literal
const nomes = ['Isabella', 'Farias', 'Freitas']
const constr = new Array('Corola', 'Fiat', 'KiaMotors')



// -------- 1.3 METODOS E PROPRIEDADES DE ARRAY
//<> 1.3.1 ******** Métodos mais básicos

/* ......     Array.from() 
-  método utilizado para transformar array-like objects, em uma array. */
let botoes = document.querySelectorAll('button')
botoes = Array.from(botoes) // Agora botoes é uma array
console.log(botoes)


/* .......    Array.isArray()
verifica se o valor passado é uma array, e retorna boolean */
Array.isArray(botoes) // true


/*.......    Array.of(), Array(), new Array()
Diferentes métodos de criação de arrays :*/

Array.of(5) // [5] - Cria a array interpretando o numero como um valor da array
Array(5) // [,,,,] - Cria a array interpretando o numero como a quantidade de itens 
Array.of(1, 2, 3, 4) // [1,2,3,4]
Array(1, 2, 3.4) // [1,2,3,4] - No caso de mais valores, ambos tem o msm comportamento


/**************************************************************************** */

//<> 1.3.2 ********** Métodos modificadores (mutator methods)
// Além de retornarem um valor, eles modificam a array original.

/*
.......    [].SORT()
Organiza a pelo unicode. String organiza alfabeticamente, numbers é caractere por caractere, oq nao resulta na ordem crescente verdadeira.
*/

const marcas = ['Fanta', 'Coca', 'Pepsi'];
marcas.sort(); // ['Coca', 'Fanta', 'Pepsi']

const notas = [32, 21, 33, 43, 1, 12, 8];
notas.sort(); // [1, 12, 21, 32, 33, 43, 8]
// --------------------------------

/*
.......    [].UNSHIFT() e [].PUSH()
**UNSHIFT add novos elementos no inicio da array, e PUSH ao final.** 

- Altera a array de origem, não cria uma nova. 
-Ambos retornam o LENGHT
*/

const materiais = ['Areia', 'Cimento', 'Argamassa']
materiais.push('Prego', 'Martelo') // 5 - Retornando o lenght
materiais.unshift('Tabua', 'Serra') // 7 - Retornando o lenght
// Se puxar materiais agr vai ver que ja ta diferente
// materiais = ['Tabua', 'Serra', 'Areia', 'Cimento', 'Argamassa', 'Prego', 'Martelo']


/* 
.......    [].SHIFT() e [].POP() 

SHIFT remove o primeiro elemento da array e retorna. 
POP Remove o ultimo elemento
- Ambos retornam o ELEMENTO RETIRADO

materiais.pop() // Ao puxar a array ja vê-se que foi retirado o ultimo elemento
materiais.shift() // Removeu o primeiro tbm
*/



/*.......    [].REVERSE()  
INVERTE a ordem da array */
materiais.reverse() // Ao checar lá, a ordem já tá invertida


/*
.......    [].SPLICE(indexStart, removerQt., itemAdd1, itemAdd2...) 
>INDEXSTART é a partir de qual index vc vai querer add. REMOVEQT é quantos valores que vc quer que remova pra dar espaço aos novos items, contando a partir do INDEXSTART. Dps só passar os items a serem add.
>ITEMADD - é OPCIONAL. Se não passar nenhum item, ele só remove sem adicionar nada. 
> o SPLICE retorna o numero de itens removidos se vc verificar no console log*/
const times = ['Barcelona', 'Inter', 'New City', 'Dallas', 'Chicago Bulls']
times.splice(2, 0, 'Pain Gaming', 'RENSGA') // ['Barcelona', 'Inter', 'New City', 'Pain Gaming', 'RENSGA', 'Dallas', 'Chicago Bulls']


/*
 ..........    [].COPYWHITHIN(alvo, start, end) -
A partir do alvo, ele irá copiar a array começando do START até o END e vai preencher a mesma com essa cópia

...........   [].FILL() (valor, start, end) -
preenche a array com o valor, do "START" até o "END" em index.
*/
// ----------------------------------




/* 
  1.3.3. Métodos de ACESSO  (Não modificam a original)
*/

/*    [].CONCAT() ---- ex : array1.concat(array2) - Retorna uma nova array com o resultado*/

/*    [].INCLUDES(), [].indexOf(), [],lastIndexOF() - Verificações */

/*    [].JOIN(separador) --- Junta os itens com uma string "separadora" entre os itens  */

/*    [].SLICE(start, end) --- Retornam os elementos de acordo com start e end index
TECNICA COMUM PRA SE CLONAR ARRAYS*/

/* OBS AO RETORNAR DIRETAMENTE A EXECUÇÃO DOS MÉTODOS.
  Lembar que ao retornar a execução dos métodos, eles não vão retornar a array logo de cara
  Ex : const teste = [1,2,3,4]
  return teste.pop() => [4]   - Aqui ele retorna apenas o elemento retirado, e não a array
*/

