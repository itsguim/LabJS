// MODULE EXPORT/IMPORT

/**
 * 1.0 - No arquivo que você quer colocar como módulo e IMPORTAR os códigos- 
 * no <script>, é necessário colocar o attr "type='module'" - <script type="module" src="main.js"></script>]. 
 * 
 * >O type=module deve ser usado no script a importar outros módulos referenciado no HTML. 
 * Nos scripts que exportam não é necessário declarar esse atributo
 * 
 * >A tag module é específica pra referenciar no HTML. Outros scripts podem ser módulos, porém o módulo-pai será o referenciado no HTML com o atributo
 * "Any <script> tag in HTML wanting to import a module needs have the attribute type="module"."
 * 
 * 
 * ***** OBSERVAÇÕES ----
 *    NON-MODULES Só podem importar se já tiverem sido importados pelo módule previamente. É como se você importasse do módulo-pai
 * 
 * 
 * 
 * 
 * -----------------
 * 
 * 2.0 - Uma forma CLEAN de exportar as funções que você quer, é no final do módulo-
 * você exportar uma chave com todos os componentes a serem exportados-
 * Ex: export default {funçao1, var1, obj1, funçao2...}
 * ----------------
 * 
 * 3. NON-MODULE = SCRIPTS normais, sem serem type="modules", sempre se referenciam ao objeto global Window por padrão-
 * tanto é que se você escrever uma função no escopo global de um script normal, e checar ao que o THIS se refere-
 * você verá que ele se refere ao Window
 * //
 * 3.1 MODULE = SCRIPTS MODULES, fazem uso do "strict mode". Sendo assim, os códigos utilizados nos módulos-
 * não são vazam pro escopo global do objeto Window. Ao checar o this de um MODULE você nota que ele se refere-
 * a um objeto UNDEFINED. Isso abre algumas vantagens, já que ao criar funçoes, variáveis etc no escopo global-
 * , tudo importado no module terá esse comportamento.
 * ----------------
 * 
 * 4. EXPORT DEFAULT = Cada arquivo de módulo pode ter apenas um default.
 * Ao atribuir DEFAULT à uma função por exemplo, você categoriza ela como uma função anônima-
 * e ao fazer isso, no arquivo onde será importado você pode utilizar um nome qualquer.
 * ----------------
 * 
 * 5. O CODIGO TODO É CARREGADO ao importar, porém você só pode invocar no seu arquivo module o que está declaradamente exportado.
 */

// Ex DEFAULT

function giveQuadrado(a, b) {
  return a + b
}

function giveSubtract(a, b) {
  return a - b
}
// export {giveQuadrado} = Você exporta como o nome próprio da função, tendo que utilizá-lo ao importar.
// export default giveQuadrado = giveQuadrado é uma func. anônima. Pode ser importado com qualquer nome agora.
// export {giveQuadrado, giveSubtract} = Exportando os 2 com o nome proprio
// export {giveQuadrado as ..., giveSubtract as ...} = Pode alterar o nome de tudo que tá sendo exportado

// import * as ... from "...module.js"
/**
 * Detalhe que aqui os itens importados vem dentro de um objeto com o nome que foi dado
 * Ex: import * as ModuloTeste <- Objeto
 *
 * E agora você utiliza o objeto para chamar suas funções.
 * Ex: ModuloTeste.giveQuadrado(5, 5)
 * Ex: ModuloTeste.giveSubtract(1,2)
 */

// LEMBRANDO Q SÓ PODE EXISTIR 1 DEFAULT (por arquivo módulo)