// Basicamente é necessário entender isso sobre JSON:

/**
 * 1. JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. 
 * 2. As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string.
 * 3. Os valores podem ser números, strings, boolean, arrays, objetos e null.
 * 4. Não se deve adicionar vírgula no último elemento do JSON como fazemos em objeto geralmente.
*/

const jsonEx1 = {
  "id": 1,
  "nome": "Carlinho",
  "email": "dummyemail@bol.com.br"
}

/**
 * 5. É comum utilizar array de objetos para guardar os dados armazenados no JSON
*/

const jsonEx2 = [
  {
    "tech": "JavaScript",
    "aula": "JSON",
    "id": 1

  },
  {
    "tech": "CSS",
    "aula": "Animation",
    "id": 2
  },
  {
    "allTechs": ["JavaScript", "CSS"]
  }
]

/**
 * JSON.parse() - irá transformar um texto JSON em um objeto JavaScript. parse() lê em texto JSON pra depois passar pra Objeto
*/

const textoJson = '[{"id":1, "aula":"JavaScript"}, {"id":2, "aula":"JSON"}]'
console.log(JSON.parse(textoJson))

/**
 * JSON.stringify() - irá transformar um Objeto JavaScript em uma string no formato de text JSON.
*/

const enderecoOBJ = {
  cidade: 'Rio de Janeiro',
  rua: 'Ali Perto',
  pais: 'Brasil',
  numero: 50,
}

console.log(JSON.stringify(enderecoOBJ))

// ----------
// Exemplo de uso real, podemos pegar o LocalStorage.
// Guardando uma string como valor de uma propriedade.
// E retornar essa string como um objeto. 

localStorage.setItem("endereco", JSON.stringify(enderecoOBJ)/* Será stored como string já formatada como é lido em JSON, com "" etc. */)
const got = JSON.parse(localStorage.getItem("endereco")/*retorna a string json*/) /* E então  parse lê a string JSON e torna em um objeto JS*/
