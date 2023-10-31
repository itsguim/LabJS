/**
 *1- Quando tiver Object. é pq é do construtor;
 *2- Quando tiver {}. é pq a gnt passa o objeto que quer interagir.
 *3- Todo tipo de dado tem acesso ao construtor Object, portanto suas propr. do protótipo são acessíveis a todos.  
*/

//------ PROPR. QUE DESCENDEM DIRETO DE OBJECT

// OBJETOS Construtor - Métodos e Propr ****
const objTemplate = {
  name: 'Italo',
  surname: 'Araujo'
}

const objTemplateNew = new Object({
  name: 'Italo',
  surname: 'Araújo'
})

// <<<<*****>>>>
// OBJECT.create(obj, defineProperties) <<<<*****>>>>
/*
  Retorna/Cria um novo objeto que terá como PROTÓTIPO o obj passado no primeiro argumento
  -* Basicamente todos as propr/mét. do objeto definido no argumento vão ser adicionadas ao protótipo desse novo objeto criado
*/
const objNome = new Object({
  name: 'Italo',
  surname: 'Araújo',
  showName() {
    return this.name + " " + this.surname
  }

})

const objNomeCreated = Object.create(objNome)
// O objNomeCreated agora tem como protótipo todos os dados de objNome
objNomeCreated.idade = '25 Anos'
// objNomeCreated agora tem a propriedade idade, mas continua tendo tudo do objNome no protótipo,  anteriormente adicionado.


// <<<<*****>>>>
// OBJECT.assign(objALVO, obj1, obj2) <<<<*****>>>>
/*
  Adiciona ao ALVO, as propr. e métodos dos demais objetos.
  O ASSIGN irá mudar o objeto ALVO.
  -* É interessante você pensar em como você pode montar um objeto que vai ser devidamente executado quando inserido em outros objetos.
  -*² Se já existirem PR. e MÉT. com o mesmo nome dentro do objeto, e em mesmo escopo, a propriedade é substituída pela mais recente adicionada
*/

const actionsExe = {
  mudar() {
    return 'mudou'
  },

  retirar() {
    return 'retirou'
  }
}

const propr1 = {
  valor: 'R$ 54',
  item: 'Macacão',

  wholeThing() {
    return `${this.retirar()} o ${this.item} e ${this.mudar()} o valor de ${this.valor}`
  } // Poderia ser coloCado direto em actionExe logo
}

const propr2 = {
  valor: 'R$ 10',

}

Object.assign(propr1, actionsExe) // Propr./Mét. de actionsExe foi adicionado ao propr1.
Object.assign(propr2, actionsExe) // Mesma coisa, propr2 modificado
// ----
console.log(propr1.wholeThing()) // Agora com o método mudar() e retirar() dentro...
// Eu executo o mét. wholeThing() nativo de propr1, e agora ele lê a frase toda completa com o que RETORNA dos métodos que foram adicionados de actionsExe.


// <<<<*****>>>>
// OBJECT.DEFINEPROPERTIES(OBJ, propriedades) <<<<*****>>>>
/*
  Define novas propriedades ou DESCRITORES de propriedade ao objeto, ou modifica uma já existente, retornando o objeto.
  - descritores : configurable, enumerable, value, writable, get e set.
  
  // get() e set() :
    GET - Caso vc aplique o método get() pra sua propriedade, o valor de return desse método SERÁ O VALUE da propriedade.
    
    SET - O método set() é um SETTER. Só quando você ATRIBUIR um valor pra propriedade (obj.propr = valor), esse valor irá passar pelo set() com a fórmula que você definiu.
    ~~ Aqui geralmente você monta uma formula para ser lido pelo get(), q será o valor da propr. ~~
  //
  
  -***VER : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties; ****
*/

Object.defineProperties(propr2, {
  valor: {
    value: 'R$ 20,00 - alterado do padrão',
    configurable: false, // Impede deletar a propr. e mudar seu valor
    writable: false //Se TRUE - Pode ser modificada com um operador de atribuição
  },

  item: {
    set(value) { // Qqr valor atribuído será interpretado pelo parametro da func.
      this._item = value + ' foi setado e lido'
    },

    get() { // com get e set, a propr. n pode ter um value pré definido
      return this._item
    }
  },
})

propr2.item = 'Boné' // 'Boné foi setado e lido'
propr2.valor = 'ABLUBLUBLUB' // Não alterado por conta das config da propriedade.


// <<<<*****>>>>
// OBJECT.getOwnPropertyNames(obj) || OBJECT.getOwnPropertyDescriptors(obj)  <<<<*****>>>>
/*
  * Obj..PropertyDescripTORS : lista todas as propriedades do objeto, com suas devidas configurações
  * Obj..PropertyDescripTOR(obj, 'propriedade'): lista as configurações da propriedade passada
  * Obj..PropertyNames : lista uma array c/ todas as propriedades diretas do objeto, não retornando as do protótipo. Mostra as não-enumeráveis tbm
*/


// OBJECT.getPrototypeOf(obj) <<<<*****>>>>
/*
 * Obj.getPrototypeOf(..): Retorna o protótipo do objeto
*/

// OBJECT.is(obj1, obj2) <<<<*****>>>>
/*
 * Obj.is(...) : Verifica se os dois objetos são iguais, mas no caso referenciando ao MESMO OBJETO
  - Ex frutas1 = {prop1: 'pêra'} , frutas2 = {prop1: 'pêra'} //=> vai dar FALSE
  - Ex frutas1 = {prop1: 'pêra'}, const frutas2 = frutas1 // => vai dar TRUE
  2Objetos/Arrays diferentes com mesmas propriedades/items, não são a mesma, portanto FALSE
  2Objetos/Arrays são iguais se apenas possuem referências diferentes, mas se tratam da mesma. Portanto TRUE
*/

// OBJECT.keys(obj) || OBJECT.values(obj) || OBJECT.entries(obj) <<<<*****>>>>
/**
 * Obj.keys(obj) : Retorna ARRAY com todas as chaves ("nomes") das propriedades enumeráveis
 * Obj.values(obj): ARRAY com todos os valores do objeto
 * Obj.entries(obj) : Retorna ARRAY com Arrays contendo chave e valores.
*/

// OBJECT.freeze(obj) || OBJECT.seal(obj) || OBJECT.preventExtensions(obj) <<<<*****>>>>
/**
  *Obj.freeze() : CONGELA um objeto, impedindo que ele tenha novas propr. adicionadas, removidas, alteradas e tb seus descritores...
  - propriedades que são NOVOS OBJETOS dentro do obj freezado, ainda podem ser alteradas. Freeze funciona no escopo do objeto, não é deep.
  - RR:Previne tudo

  *Obj.seal() : SELA o objeto, impedindo que sejam adicionada novas propr;. deletadas, e tornam-as não-configuráveis...
  - Porém os VALORES das propr. ainda podem ser alteradas. Qualquer coisa que NÃO FOR MUDAR o valor, NÃO funcionará.
  - RR:Previne adições // Pode alterar apenas

  *Obj.preventExtensions() : PREVINE o objeto de que sejam add novas propr;
  - Porém os VALORES podem ser alterados, e propriedades serem deletadas. Ler sobre extensible/non-extensible
  - RR: Previne adiçoes // Pode alterar e deletar

  // .isFrozen(), .isSealed(), isExtensible() pra verificar.
*/

// ------------ OBJECT.prototype.; propr. do prototype de object. Acessado por qualquer tipo de dado já que todos descendem do proto dele.

// {}.hasOwnProperty('prop') || {}.propertyIsEnumerable('prop')
/**
 * {}.hasOwnProp...(): Verifica se há a propriedade e retorna boolean. Deve ser direta do objeto e não do protótipo
 * {}.propertyIsEnum...(): Verifica se a propr. é enumerável.
*/

// {}.toString()
/**
 * Object.prototype.toString.call() - Método real pra verificar o tipo de dado de um tipo de dado
 */

