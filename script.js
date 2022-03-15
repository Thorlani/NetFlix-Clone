const nav = document.getElementById('nav')

window.addEventListener('scroll', () => {
    if (window.scrollY) {
        nav.classList.add('nav__black');
    } else {
        nav.classList.remove('nav__black');
    }
})