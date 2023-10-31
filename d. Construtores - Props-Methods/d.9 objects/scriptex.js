// Crie uma função que verifique
// corretamente o tipo de dado
const verifyDataType = function (value) {
  return Object.prototype.toString.call(value)
}

console.log(verifyDataType('Blublu'))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
  lados: 4
}

Object.defineProperties(quadrado, {
  lados: {
    writable: false,
    configurable: false
  }
})
quadrado.lados = 'RAsda' // n funciona

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

Object.getOwnPropertyNames(String.prototype)
Object.getOwnPropertyNames(Array.prototype)

// Teste de Loops com Array de Objetos ------------

const userData = [
  {
    prop: 'XX'
  },
  {
    prop2: 1,
    prop3: 2
  },
  {
    propX: 45,
    propY: 55
  },
  {
    propA: 'StringTeste',
    propB: 'TesteString'
  },
  {
    propBoolean: 5 > 2,
    propBoolean2: (35 * 2) === 70
  }
]

const newUserData = userData.map((obj) => {
  const tempObject = Object.values(obj)
  return tempObject
})

const dataFlattened = newUserData.reduce((acc, arrWithValues) => { // Se eu ficar tentando usar MAP, sempre vai mapear uma array pra cada array.
  return acc.concat(arrWithValues)
}, [])
//https://codeburst.io/how-to-reduce-array-to-a-single-type-11cfe2bcae66

const dataFiltered = dataFlattened.filter((arrValue) => typeof arrValue === 'number')




