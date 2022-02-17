const hamburger = document.querySelector('.hamburger');
const hamburgerList = document.querySelector('.hamburger__list');
const navbarHeader = document.querySelector('.navbar__header');
const close = document.querySelector('.close');
hamburgerList.style.display = 'none';
hamburger.addEventListener('click', () => {
    hamburgerList.style.display = 'block';
    navbarHeader.style.display = 'none';
    hamburger.style.display ='none';
})

close.addEventListener('click', () => {
    hamburgerList.style.display = 'none';
    navbarHeader.style.display = 'block';
    hamburger.style.display = 'block';
});