// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursosSelect = document.querySelectorAll('.curso')

const cursosArray = Array.from(cursosSelect) // [section.curso, section.curso, section.curso]

const objCursos = cursosArray.map((el) => {
  const titulo = el.querySelector('h1').innerText,
    descricao = el.querySelector('p').innerText,
    aulas = el.querySelector('.aulas').innerText,
    horas = el.querySelector('.horas').innerText;
  return {
    titulo, /* Praticidade do ES6 pra n repetir nome da variavel, ex: titulo: titulo */
    descricao,
    aulas,
    horas
  }
})

console.log(objCursos)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33],
  filteredNumber = numeros.filter(el => el > 100);
;


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'],
  someInstrumento = instrumentos.some(el => el === 'Baixo');
;


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const precosArray = compras.map((item) => {
  return +item.preco.split('R$ ').join('').replace(',', '.')
})
const totalFinal = precosArray.reduce((acc, item) => {
  return acc + item
})