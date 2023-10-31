// ---- CONSTRUTORA DE STRINGS
/* 
  new String() é o objeto construtor de strings nativo do JS.
  
  Todos os strings herdam as propriedades e métodos do prototype de String.
  PS: Pela minha percepção, são os metodos e propr. que a gnt pode usar pra tratar as strings.
*/

const comida = 'Lasanha' // Retorna a string
const bebida = new String('Gin Tonica') // Retorna o objeto construtor String


//<><> 1.1 ===== str.length - Total de caracters da string
const testeA = 'Pescotapa';
const testeB = 'Ronaldo';

testeA.length; // Pra uma string, equivale ao numero de caracteres
testeA[0]; // P - Corresponde à posiçao do caractere
testeA[testeA.length - 1] // a


//<><> 1.2 ===== str.charAt(n) - Retorna o caracter na posição de acordo com o valor de n
testeB.charAt(3); // n

//<><> 1.3 ==== str.concat(str, str2, str3...) - Concatena strings bastando passar elas como parâmetro do método concat()
const fullString = testeA.concat(' ', testeB, ' Brilha muito no corinthians')

//<><> 1.4 ==== str.includes(search, position) - Procura pela string exata dentro de outra string. É case sensitive e retorna Boolean.
// Informando um numero no 2º parametro, começa a partir da posição do numero, mas é opcional.
// Vai retornando positivo enquanto a string tiver batendo, de forma sequencial. 
const fruta1 = 'Banana'
const frutas = 'Maçã Banana e Melancia'

frutas.includes(fruta1) // True - string 'Banana' tá presente em frutas
fruta1.includes('banana') // False - case sensitive
frutas.includes('Maçã Banana e Mellancia') // False - Retorna true até 'Maçã Banana e Mel'


//<><> 1.5 ==== str.endsWith(search) / str.startsWith(search) - Retorna se uma string começa ou termina com outra string ao qual você procurar
const bolacha = 'Bolacha'
const biscoito = 'Biscoito'

bolacha.startsWith('Bola') // True
bolacha.endsWith('ha') // True
biscoito.endsWith('Bis') // False


//<><>  1.6 ==== str.slice(start, end) -  Corta a string de acordo com os valores de start e end. Começa do index 0
// O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.
const timeDoCoracao = 'Itabuna Esporte Clube'

const slicedTime = timeDoCoracao.slice(0, 5) // 'Itabu'
timeDoCoracao.slice(0, 10) // 'Itabuna Es'  (Espaço conta como caractere)
timeDoCoracao.slice(-5) // 'Clube' (Retorna a string a partir do fim, pelo número de caracteres informado)
timeDoCoracao.slice(5) // 'na Esporte Clube' (Informando um valor apenas, corta o numero de caracteres iniciais retornando o resto)


//<><> 1.7 ==== str.substring(start, end) - 
/* 
  Tem algumas diferenças do Slice :
  Ex: Não pode ser cortado com valor negativo, a partir do final da string
  Ex2 : Caso valor de end seja > que start, o método inverte a ordem automaticamente - (3, 0) é lido como (0, 3) - Em slice retorna undefined
  Ver - https://bit.ly/3DTWn9z pra ver detalhes.
*/
const jogadorCaro = 'Ronaldinho Gaúcho'

jogadorCaro.substring(5, 0) // 'Ronal' - Lido como (0, 5)


//<><> 1.8 ==== str.indexOf(search) | str.lastIndexOf(search) - Retorna o index da string, assim que achar o primeiro resultado ele já retorna.
// No caso do lastIndexOf ele retorna o último resultado.
const instrumento = 'Guitarra'

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('a'); // 7 - Ultimo index em que 'a' aparece
instrumento.indexOf('ta'); // 3 -> Ele achou o 't' de 'ta' e ja retornou a posiçao 3 de 't'
instrumento.indexOf('itarra') // 2 -> Ele achou o 'i' e ja retornou 2 e ignora o resto


//<><> 1.9 ===== str.padStart(n, str) | str.padEnd(n, str)
/* 
  Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres.
  O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
  Considera realmente o nº de caracteres
*/
const ryu = ['Hadouken', 'Shoryuuken', 'Tatsumaki Senpuukyaku']

ryu.forEach((el) => {
  console.log(el.padStart(15, '.'))
})

ryu[1].padEnd(12, '.') // 'Shoryuuken..'


//<><> 1.10 ====== str.repeat(n) - Repete a string n vezes
const ryuMove = ryu[2].slice(-11) // Senpuukyaku
ryuMove.repeat(3) // SenpuukyakuSenpuukyakuSenpuukyaku


//<><> 1.11 ====== str.replace(regexp|substr, newstr|function)
/*
  É possível utilizar uma regular expression pra o método identificar várias instancias do que vc quer e fazer a substituiçao
  Ou vc pode fazer o replace direto, substituindo o primeiro pedaço de string q ele achar por uma nova string. Vejamos:
*/
let listaItems = 'Ryu Chun-li Blanka Balrog Guile Bison'
let newLista;

listaItems = listaItems.replace(/[ ]+/g, ', ') // 'Ryu, Chun-li, Blanka, Balrog, Guile, Bison'
newLista = listaItems.replace('Ryu', 'Vega') // 'Vega, Chun-li, Blanka, Balrog, Guile, Bison'



//<><> 1.12 ====== str.split(padrao) - Divide a string de acordo com o padrão passado e retorna uma array.
const arrayDaLista = newLista.split(', ')
/*
  Vai criar uma Array dividindo cada item a partir da vírgula + espaço.
  Nos itens da Array não aparece a string padrão que vc usou pra splitar. Virgula + Espaço são descartados
*/
const htmlTextExtract = '<div>Aqui eu sou uma div perambulando</div><div>Sou uma flexbox maneira e legal</div>'
// Tecnicazinha usada segundo André que utilizam pra substituir tags no DOM algumas vezes
const arrayDaHTML = htmlTextExtract.split('div')
const novaArray = arrayDaHTML.join('section')


//<><> 1.13 ====== str.toUpperCase() | str.toLowerCase()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
const inputSexo = 'FEMinINO'
const inputSexo2 = 'Feminino'

function verify() {
  if (inputSexo.toLowerCase() === 'feminino') {
    return 'É sim'
  }
} verify()


//<><> 1.4 ====== str.trim(), str.trimStart(), str.trimEnd() - Remove espaço em branco do início ou final de uma string.
const valor = '  R$ 23.00   '
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

