
// HTMLElement.dataset
/*
""Powerful choice for storing bits of information that maybe aren’t so appropriate for class lists or ids. 
After all, we should aim to keep class and id attributes reserved for styling"" 
*/

/**
 * Element.dataset - Retorna a lista de data attributos em um objeto, com suas chaves e valores do elemento;
 * Element.dataset.dataname - Retorna o value da chave específica passada.
  
  >> data-* = A PARTIR DO ASTERISCO PODE CONTER QUALQUER NOME QUE VC QUISER DAR
    data-name-*-*... = A cada traço a partir do nome, o nome do atributo vai ser transformado em camelCase em JS (data-map-location = mapLocation). O inverso vai funcionar da mesma forma, de camelCase pra traço.

  >> data pode ser setado com setAttribute
  >> Element.dataset.nome = algo : vc pode criar novos datas assim tbm
*/


const dataTeste = document.querySelector('[data-tamanho]')

dataTeste.dataset // {tamanho: 'large', mapLocation: 'Rio de Janeiro'}
dataTeste.dataset.tamanho // 'large'
dataTeste.dataset.mapLocation // 'Rio de janeiro'


const sections = document.querySelectorAll('section')

sections.forEach((section) => {
  section.dataset.random = 'Juice' // => Adicionou data-random="Juice"
  section.classList.add(section.dataset.random) // => adicionou a classe Juice
})