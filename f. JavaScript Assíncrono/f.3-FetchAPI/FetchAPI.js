// ~~ FETCH API ~~

/* 1.0
  *A API Fetch permite fazer requisições HTTP através do método fetch(). 
  Esse método retorna a resolução de uma promise, sendo possível então utilizar o then() para interagir com o que foi retornado, que nesse caso é um objeto do tipo Response. 

  *OBS: O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar, pois se trata de uma requisição online.
*/

const fetchRequest = fetch('./f.3-FetchAPI/dummyFetch.txt')
//Retorna o operação da promise, com o seu promiseResult (objeto response)


//|EX.1: Utilizando o then() e referenciando o retorno da promise.
fetchRequest.then((response) => {
  return response.text()
}).then((responseText) => {
  document.querySelector('.app').innerHTML = responseText
})

//Obs.1 - Ao chamar a operação fetchRequest no console é possível ver que ela gerou um objeto "Response". O objeto response é um objeto com as informações puxadas do item solicitado, nesse caso "dummyFetch.txt"
//Obs.2 - Nesse objeto gerado, podemos utilizar alguns métodos para trabalhar com seu conteúdo, como por exemplo o método text() que transforma o conteúdo em texto.


/**
 * #### 2.0 .json(). - método json() (javascript obj. notation) transforma os dados recebidos em JSON em um novo objeto JavaScript.
 * 
 * #### 2.1 - Esse método não transforma os dados em JSON apesar do nome, mas por ter uma sintaxe similar, transforma o corpo do JSON num Objeto para interação.
 * 
*/

//|EX.2: Fetching um arquivo JSON e utilizando o método para conversão para objeto

const requisition = fetch('https://viacep.com.br/ws/45600195/json/')
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(cep => {
    console.log(cep) // Objeto convertido do JSON
    console.log(`${cep.logradouro}, ${cep.bairro}`)
  });
;


const app2Div = document.querySelector('.app2')
/**
 * #### 3.0 .text() - método utilizado pra transformar diferentes formatos para texto. Pode ser txt, json, html, css, js...
 * 
 * #### 3.1 Ex: podemos transformar o HTML inteiro de um outro arquivo como texto e inserir dentro de um outro documento
*/

const textRequire = fetch('./f.3-FetchAPI/dummy.html')
  .then(htmlFile => {
    return htmlFile.text()
  })
  .then(bodyText => {
    app2Div.innerHTML = bodyText
    const appDivExternal = app2Div.querySelector('#app')
    app2Div.innerHTML = appDivExternal.innerHTML
  });
;

/**
 * #### 4.0 .blob() - Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.
 * 
*/

// -----

/**
 * #### 5.0 .clone() - Quando utilizamos um método no objeto Response, o objeto modifica para um status "BodyUsed : true", e a partir disso não é possível mais interagir utilizar outros métodos no mesmo objeto na mesma operação
 * 
 * #### 5.1 - Com o método clone é possível você clonar o objeto da resposta, e partir disso utilizar para diferentes ações e conversões.
*/

const cloneTest = fetch('https://viacep.com.br/ws/01001000/json/')
  .then(response => {
    const cloneResponse = response.clone(); // Clona primeiro para poder reutilizar
    response.json() // JSON
      .then(json => { // Com diferentes conversões, pode se encadear seus próprios then.
        console.log(json)
      });
    cloneResponse.text() // TEXTO
      .then(text => {
        console.log(text)
      });
  });
;

/** PROPRIEDADES
 * #### 6.0) .HEADERS - É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.
 * 
 * #### 7.0) .STATUS & .OK - Retorna o "STATUS" da requisição, se foi 404, 200, 202 e mais.
 * "OK" retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.
 * 
 * #### 8.0) .URL E .TYPE - 
 * - .URL retorna o url da requisição. 
 * - .TYPE retorna o tipo da reposta.
 * types - basic: feito na mesma origem
 * cors: feito em url body pode estar disponível
 * error: erro de conexão
 * opaque: no-cors, não permite acesso de outros sites
*/




