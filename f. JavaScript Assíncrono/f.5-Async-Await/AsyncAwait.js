// "Async/Await" são keywords que são utilizadas pra lidar com operações Promises. 
// A diferença aqui é uma sintaxe mais clean, adotada a partir do ES8, ao invés de ter que se utilizar encadeadores como .then() e .catch() pra lidar com cadeias de promises


/** ASYNC
 * 1.0 "Async" = É uma keyword pra indicar uma função que possui partes assíncronas. A palavra ASYNC antes da função, declara uma função onde a palavra "await" pode ser utilizado dentro do corpo da função.
 * 
 * 1.1 : Funções "async" automaticamente se tornam uma promise, e o valor de retorno se torna undefined.
*/

/** AWAIT
 * 2.0 "Await" = É a keyword utilizada pra identificar operações que resultam em promises dentro de uma função async. 
 * 
 * 2.1 : Await indica que deve se aguardar a OPERACÃO ser RESOLVIDA(aceita ou rejeitada) antes de prosseguir, no corpo da função. Ou seja: 
 * - A promise marcada por esse operador pausa a execução da função async e aguarda pela resolução da operação promise.
 * - Retornando o valor final da promise quando ela é resolvida (O resultado da operação precisa ser o resultado de uma promise)
 * - A função volta a executar "sincronicamente" após isso, até encontrar outro "await" e repetir o processo.
*/


// EX1. - Dentro da função async, o que precisa ser esperado sua resposta deve estar marcado com o "await", caso contrário a função irá seguir executando tudo sem esperar o retorno das promises

let keyId;

async function getLocation(cityName) {
  const locationWeather = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=wAQuzcD9iGMOzCFwpzBgAWY1KmoncGZz&q=${cityName}&language=pt-br`) // Esperou a requisição

  const locationObj = await locationWeather.json() // Aguardou a conversão pra objeto
  keyId = locationObj[0].Key // E só então fez a atribuição na variável. Caso não houvessem os awaits acima, daria erro
}
// --------
async function claimWeather(cityName) {
  await getLocation(cityName) // <====

  const fetchUrl = fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${keyId}?apikey=wAQuzcD9iGMOzCFwpzBgAWY1KmoncGZz&language=pt-br`)
  const weatherData = await (await fetchUrl).json() // Nesse caso, ao invés de passar o await durante o fetch, passei durante a chamada dele aqui. Ou seja um await pra requisição fetch, e depois o await de fora pra conversão do JSON

  document.querySelector('.app2').innerHTML = weatherData.Headline.Text // Só então está completo
}

claimWeather('Itabuna')


/** Try & Catch
 * 3.0 - try/catch - No bloco "try" dentro da função async, é tentado executar todo o bloco de código sem erros.
 * caso queira é possível atribuir o bloco "catch" como numa promise habitual que utiliza thens e catches, pra lidar com possíveis erros.
*/

// EX2. - Bloco de Try e catch pra manipular possíveis erros

async function puxarDados() {
  try {
    const dadosResponse = await fetch('https://api.github.com/users/itsguim').then(data => data.json())
    document.body.innerText = dadosResponse.login;
  }
  catch (erro) {
    console.log(erro);
  }
}
// puxarDados()


