const hamburger = document.querySelector('.hamburger');
const hamburgerList = document.querySelector('.hamburger__list');
const navbarHeader = document.querySelector('.navbar__header');
const hide = document.querySelector('.hide');
const close = document.querySelector('.close');
hamburgerList.classList.add('hide');
hamburger.addEventListener('click', () => {
    hamburgerList.classList.remove('hide');
    navbarHeader.classList.add('hide');
    hamburger.classList.add('hide');
})

close.addEventListener('click', () => {
    hamburgerList.classList.add('hide');
    navbarHeader.classList.remove('hide');
    hamburger.classList.remove('hide');
});