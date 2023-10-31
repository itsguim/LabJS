// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const btn = document.querySelector('button')
const inp = document.querySelector('input')

btn.addEventListener('click', showAddress)

function showAddress(e) {
  e.preventDefault()
  const CEP = inp.value
  const div = document.createElement('div')
  const requestCEP = fetch(`https://viacep.com.br/ws/${CEP}/json/`)
  requestCEP.then(response => {
    return response.json()
  }).then(cepInfo => {
    div.innerHTML = `Você em ${cepInfo.logradouro}, no bairro ${cepInfo.bairro}.`
  })
  document.body.append(div)
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s


let BRLTAX = 0
const brl = document.createElement('p')


const getBitcoinRate = setInterval(() => {
  const dateNow = new Date()
  const taxas = fetch('https://blockchain.info/ticker')
  taxas.then(r => {
    return r.json()
  }).then(taxaBitcoin => {
    BRLTAX = taxaBitcoin.BRL.buy
    brl.innerHTML = `A cotaçao do bitcoin BRL é ${BRLTAX} às ${dateNow.getHours()}:${dateNow.getMinutes()}`
  })
}, 1000 * 10)

document.body.append(brl)

// clearInterval(getBitcoinRate)

















// --------------

const toBeAppended = document.createElement('p')

const requisition =
  fetch('https://blockchain.info/ticker')
    .then((r) => {
      return r.json()
    })
    .then((r) => {
      console.log(r.BRL.buy)
    })