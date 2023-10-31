/**
  Exportado como "default" no módulo, pode receber qualquer nome ao ser importado aqui
*/
import animalTabSwitch from "./modules/tab-navigation.js";

/**
 * Utilizando "as", é possível alterar o nome do que está sendo exportado 
 * Nesse caso, exportado como scrollReveal no arquivo.
*/
import { scrollReveal } from "./modules/scroll-reveal.js";

/* ********
 * "*" Importa tudo exportado do arquivo, para um formato de objeto. Pode nomear o objeto e utilizar as importações como se fossem métodos e propriedades de um objeto
*/
import * as Accordion from "./modules/accordion.js";

//"default" no módulo, pode receber qualquer nome.
import smoothScrolling from "./modules/smooth-scroll.js";

//\\ 
animalTabSwitch();
scrollReveal();
Accordion.initAccordion();
smoothScrolling();
