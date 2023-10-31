// Exercício ------
// Duplique o menu e adicione ele em copy
const nav = document.querySelector('.navbar'),
  navClone = nav.cloneNode(true),
  copy = document.querySelector('.copyright');
// 

copy.appendChild(navClone)


// Selecione o primeiro DT da dl de Faq
const faqSection = document.querySelector('#faq'),
  faqBox = faqSection.children[1],
  boxDt = faqBox.children[0];
;

// Selecione o DD referente ao primeiro DT
const ddSSelecionado = boxDt.nextElementSibling;


// Substitua o conteúdo html de .faq pelo de .animais
const animalSection = document.querySelector('#animais')

faqSection.appendChild(animalSection); //Primeiro adicionei pra virar um node filho
faqSection.replaceChild(faqBox, animalSection); //Dps fiz o replace

/*O certo seria faqSection.innerHTML = animalSection.innerHTML */