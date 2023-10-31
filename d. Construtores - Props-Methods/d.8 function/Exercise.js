// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const pAllSelec = document.querySelectorAll('p')
const pAllArray = Array.from(pAllSelec)

/*
  EX DO PROFESSOR:
  const totalCaracteres = Array.prototype.reduce.call(pAllSelec, (el) => {
    return acc + el.innerText.lenght
  })
*/

const charCounter = pAllArray.map((el) => {
  return el.innerText.length
})

const totalCharP = charCounter.reduce((acc, actual) => {
  return acc + actual
}, 0)
console.log(totalCharP)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createElements(tag, classe, conteudo) {
  const elementCreated = document.createElement(tag)
  classe ? elementCreated.classList.add(classe) : null /* Ternario */
  conteudo ? elementCreated.innerText = conteudo : null /* Ternario */
  return elementCreated
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Binded = createElements.bind(null, 'h1', '.titulo')
console.log(h1Binded('So to apenas mudando a descrição'))
console.log(h1Binded('Meio que fazendo o q uma constr. function faz'))

// TESTE LABS

this.propTeste = 85 // Propriedade teste = This em escopo global, se referindo ao objeto Window
const SCREAMING_SNAKE = { // OBJ
  propTeste: 45, // Propriedade teste = This em escopo de bloco, se referindo ao objeto SCREAMING_SNAKE
  showProp: function () {
    return this.propTeste
  }
}

/*Diferenças : */
const invocPropTeste = SCREAMING_SNAKE.showProp // console.log(invocPropTeste())
const invocPropTesteExe = SCREAMING_SNAKE.showProp() // console.log(invocPropTesteExe) -- Nao é o indicado ja executar ao atribuir
const invocPropTesteBind = invocPropTeste.bind(SCREAMING_SNAKE) // console.log(invocPropTesteBind())

invocPropTeste(); // Sendo invocado em escopo global, vai se referir ao objeto Window, retornando 85.
invocPropTesteExe; // Retorna 45. Apesar de tbm em escopo global, o método já foi executado durante a atribuição.
//                    E ao já ser executado fica atribuído ao objeto ao qual inserido
invocPropTesteBind(); // Retorna 45, como esperado. Precisa ser executado pq o bind só executa o bind, não a função


//OBS: Executando a função ao somente ao chamar a varíavel, ele se refere ao Window
//PORÉM Quando o método já é executado logo durante a atribuição, ele já fica guardado com o valor do objeto.