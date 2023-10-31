// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    taxa: '1.2',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    taxa: '1.8',
    valor: 'R$ 109',
  },
  {
    descricao: 'Recebimento de Cliente',
    taxa: '1.3',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    taxa: '1.6',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    taxa: '1.1',
    valor: 'R$ 49',
  },
];

// Empty
let somaValorTaxa = ''
let somaValorRecebimento = ''

// Loop pra separar quem começa com Taxa e Recebimento e concatenar as strings de valor
transacoes.forEach((el) => {
  if (el.descricao.startsWith('Taxa')) {
    somaValorTaxa += el.valor
  } else if (el.descricao.startsWith('Recebimento')) {
    somaValorRecebimento += el.valor
  }
})

// Criação das arrays splitado a partir de (R$ )
let taxasArray = somaValorTaxa.split('R$ ')
let recebimentosArray = somaValorRecebimento.split('R$ ')

let valorFinalTaxas = 0
let valorFinalRecebimentos = 0

// Loop pra tratar os valores de string pra number e calcular VF
taxasArray.forEach((el) => {
  let valoresNumber = parseFloat(el)
  if (valoresNumber >= 0) {
    valorFinalTaxas += valoresNumber
  }
})

recebimentosArray.forEach((el) => {
  let valoresTratados = parseFloat(el)
  if (valoresTratados >= 0) {
    valorFinalRecebimentos += valoresTratados
  }
})

// Results
const taxas = `O valor total das taxas é de R$ ${valorFinalTaxas}`
const recebimentos = `O valor total dos recebimentos é de R$ ${valorFinalRecebimentos}`

// Printing Results
const corpo = document.querySelector('body')
const pzada = [document.createElement('p'), document.createElement('p')]
pzada[0].innerText = taxas
pzada[1].innerText = recebimentos

corpo.appendChild(pzada[0])
corpo.appendChild(pzada[1])

// Reverse a string

function reverseStr(str) {
  let finalStr = ''
  const arrStrReversed = Array.from(str).reverse()
  arrStrReversed.forEach(letter => { finalStr += letter })
  return finalStr
}




