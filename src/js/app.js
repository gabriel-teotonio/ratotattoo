
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    window.scrollY > 10 ? header.classList.add('scrolled') : header.classList.remove('scrolled')
})