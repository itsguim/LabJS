/**
 * ------ CLASSES -------
 * 
 * 1.0 Classes: Podem ser consideradas 'Syntactical sugar' para funções construtoras de objetos.
 * - 1.1: As classes não introduzem um novo tipo de modelo de herança orientada a objetos ou algo do tipo, apenas são uma maneira mais clean de apresentar essas funções construtoras.
 * - 1.2: O objetivo é ter uma sintaxe mais clara para criação de objetos e lidar com heranças mais facilmente, mas por baixo dos panos continua utilizado o sistema de protótipos de uma função construtora para criar a classe.
 *
*/

// EX1 - A estrutura das classes básica segue esse padrão:
class Paragraphs {
  constructor(color, text) {
    this.pColor = color
    this.pText = text
  }
  create() {
    const pElement = document.createElement('p')
    pElement.innerText = this.pText
    pElement.style.color = this.pColor
    return pElement
  }
  appendTo(target) {
    document.querySelector(target).appendChild(this.create())
  }
}

const greenParagraph = new Paragraphs('green', 'I want to know about classes')
greenParagraph.appendTo('.app2')

/**
 * ---constructor----
 *
 * 2.0: A keyword **CONSTRUCTOR** designa no início da classe o construtor dos Objetos. É sempre necessário se designar um constructor e só pode haver um por classe.
 *  - 2.1: MDN - "O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe. Só pode existir um método especial com o nome "constructor" dentro da classe."
 *  - 2.2: Ao declarar um novo Objeto a partir da Classe, o construtor é quem vai servir de base pra criação desses novos objetos. Todos os Objetos criados a partir dele terão esse padrão de propriedades ou métodos que foram passados nele. As propriedades irão ser associadas aos parâmetros do construtor, que mais tarde terão seus valores atribuídos nas criação de novas instâncias.
*/
let constructor;

// ------

/**
 * -----static----
 * 
 * 3.0. A keyword **static** é utilizada pra criar métodos estáticos dentro da classe.
 *  
 * 3.1. Métodos estáticos não são chamados na instâncias da classe . Não são adicionados no protótipo, em vez disso, eles são adiocionados e chamados na própria classe.
 *    - 3.1.1. Ao se criar um novo objeto (Ex: new ClassName) os métodos estáticos não são herdados, por isso não são nos novos objetos que se deve utilizar estes métodos, apenas na chamada das próprias classes ( Ex: ClassName.staticMethod() )
 *    - 3.1.2. EXEMPLO : Método **[].map()** é um metodo herdado do construtor Array, todas as instâncias de arrays podem utilizá-la, porém o método **Array.from()** ele é um método que só pode ser utilizado direto ao chamar o construtor, sendo assim um método static por assim dizer.
 *  
 * 3.2. *MDN* - "Geralmente, são funções utilitárias, como funções para criar ou clonar objetos, entre outros."
 * - 3.2.1. *chatGPT* - "As propriedades e métodos estáticos são usados quando você precisa compartilhar informações entre as instâncias da classe ou executar alguma lógica que não depende de um objeto específico." 
 * 
*/
let static;

class Button {
  constructor(color, text) {
    this.cor = color
    this.texto = text
  }
  createButton() {
    const btn = document.createElement('button')
    btn.style.color = this.cor
    btn.innerText = this.texto
    return btn
  }
  static redClickMeBtn() {
    return new Button('red', 'Click Me')
  }
}
const redBtn = Button.redClickMeBtn() // Cria uma instância da classe button com parâmetros ja definidos
// console.log(redBtn) - Não herda o parâmetro static
// redBtn.createButton()

// -------

/**
 * ----extends----
 * 
 * 4.0. A keyword **extends** é usada pra "estender" classes pré-existentes, criando subclasses derivadas da classe pai.
 *  
 * 4.1. As propriedades e métodos criados em uma SUBclasse usando "extends" são adicionados apenas à SUBclasse e não afetam a SUPERclasse (classe pai). Somente as instâncias da SUBclasse terão acesso a essas novas propriedades e métodos.
 *  - 4.1.1. As propriedades e métodos da superclasse podem ser acessados a partir de uma instância da SUBclasse usando a palavra-chave "super"
 *  
 * 4.2. Métodos e propriedades da classe pai podem ser sobrescritas nas subclasses, quando se utiliza a mesma nomenclatura.
 * 
 * ----super----
 * 
 *
 * 5.0. A keyword **super** é usada pra referenciar o objeto ou classe pai de uma subclasse 
 *  - Os parâmetros de super podem ter nomes diferentes, mas precisam ser respeitados a ordem da classe pai
 *  - chatGPT: "sempre que criamos uma subclasse com um construtor que adiciona novas propriedades, precisamos chamar o construtor da superclasse usando a palavra-chave "super". Isso é necessário para garantir que as propriedades da superclasse sejam inicializadas corretamente antes de adicionar as novas propriedades na subclasse."
*/

class Register {
  constructor(name, newUser, key) {
    this.name = name
    this.newUser = newUser
    this.id = key
  }
  createProfileArr() {
    return [this.name, this.newUser, this.id]
  }
}

// EX2. Classe Dog, extensão da classe Register. Herda seus métodos e propriedades.
class Dog extends Register {
  constructor(dogName, isNewUser, key, race) {
    super(dogName, isNewUser, key) // super assume a classe pai Register. Pode mudar a nomenclatura nos arg. contanto q respeite a ordem dos param.
    this.race = race
  }

  latir() {
    return `${this.dogName} (${this.race}) está latindo`
  }

  infoList() {
    const list = document.createElement('ul')
    const arrDog = super.createProfileArr().slice(0)
    // Poderia chamar o método com this ao invés de super. Porém **super** fala diretamente com o pai. 
    // Se houvesse outro método de mesmo nome, o **this** chamaria o método da subclasse ao invés do método da classe pai.
    arrDog.push(this.race)

    arrDog.forEach((property) => {
      const newItem = document.createElement('li')
      newItem.innerText = property
      list.appendChild(newItem)
    })
    document.body.appendChild(list)
  }
}

const doguinho = new Dog('Adolfinho', true, 3001, 'Chow Chow')

