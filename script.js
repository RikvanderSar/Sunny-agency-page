const toggleMenu = document.querySelector('.burger');
const nav = document.querySelector('nav');
const hamburgerLine1 = document.querySelector('.line1');
const hamburgerLine2 = document.querySelector('.line2');
const hamburgerLine3 = document.querySelector('.line3');

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    hamburgerLine1.classList.toggle('hamburger__transform--line1');
    hamburgerLine2.classList.toggle('hamburger__transform--line2');
    hamburgerLine3.classList.toggle('hamburger__transform--line3');
});




