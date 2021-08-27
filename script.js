const toggleMenu = document.querySelector('.burger');
const nav = document.querySelector('nav');

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
});
