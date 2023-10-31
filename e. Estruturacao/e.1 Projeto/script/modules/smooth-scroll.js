function initSmoothScroll() { // scrollTo() e scrollToView()

  const linksInternos = document.querySelectorAll('.js-nav a[href^="#"]')
  function smoothScrolling(evt) {
    evt.preventDefault()

    const hrefValue = this.getAttribute('href')
    const section = document.querySelector(hrefValue)
    // Forma que tem mais aceptabilidade, funciona com Safari.
    // const getTop = section.offsetTop
    // window.scrollTo({
    //   top: getTop,
    //   behavior: 'smooth'
    // })
    // Forma Simplificada - Porém com menos suporte (Safari ja n pega o objeto de parâmetro)
    section.scrollIntoView({
      block: 'center', /* center, end, start */
      behavior: 'smooth'
    })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', smoothScrolling)
  })
}

export default initSmoothScroll