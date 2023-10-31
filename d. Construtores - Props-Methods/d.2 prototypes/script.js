// PROTÓTIPOS -----------------<><><><><><><><>

// 1.1 Prototypes -----
/* 
  a) A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
  b) Prototype são aplicadas APENAS em função e retornam sempre objetos. 
  c) Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros
  d) A propriedade prototype pode ser usada para adicionar métodos à funções construtoras existentes.
  e) Prototype não é a funçao e si, mas é como se fosse o "objeto esqueleto" criado baseada naquela função
  
  // A finalidade de add ao prototype é justamente a herança; 
  adicionar prop./métodos "no construtor" para que seja herdada por todos os objetos criados a partir desse construtor.
*/

function Fighters(character, assinatura, country) {
  this.lutador = character
  this.signature = assinatura
  this.country = country
  this.desenho = () => {
    return 'Cartoon Network'
  }
}

const fighter2 = new Fighters('Chun-li', 'SpinningBird Kick', 'China')
const fighter3 = new Fighters('Ryu', 'Hadouken', 'Japan')

Fighters.prototype // retorna o Objeto - Pois é uma função
fighter2.prototype // undefined - Pq só pode ser passado em funçao


//----- 1.2 - Adding propriedades e métodos no prototype da funçao

Fighters.prototype.presentesf6 = 'Sim'
Fighters.prototype.rabisco = () => {
  return 'Azul da cor do mar'
}
// Verificando no console, agora foi adicionado a propriedade no objeto prototype

console.log(fighter2) // Ao verificar fighter2, lá consta as propriedades passadas na criação do objeto
// Mas o checar o protótipo em fighter2, já consta a propriedade criada "presentefs6", então:
fighter2.presentesf6 // Pode ser acessada
fighter3.presentesf6 // Pode ser acessada 
fighter2.rabisco() // Pode ser acessada
fighter3.rabisco() // Pode ser acessada


/* tooltip
  Mesmo no novo objeto, a propriedade criada no protótipo agora pode ser lida tbm pelos mesmos
  Isso é a HERANÇA. Os novos Objetos criados apartir do protótipo da função construtora Fighters(), vão herdar as propriedades e métodos.
  Mesmo que tenham sido adicionadas novas propr. após a criação desses novos objetos
*/


// ---- 1.3 CONSTRUTORES Nativos & Herança --------------
// Melhor checar a documentação do curso