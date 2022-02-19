const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open__modal');
const closeModal = document.querySelector('.close__modal');

openModal.addEventListener('click', () => {
    modal.classList.remove('hide');
    openModal.classList.add('hide');
    document.body.style.overflow = "hidden"
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hide');
    openModal.classList.remove('hide');
    document.body.style.overflow = "visible";
});

document.addEventListener('mouseup', function(e) {
    if (!modal.contains(e.target)) {
        modal.classList.add('hide');
        openModal.classList.remove('hide');
        document.body.style.overflow = "visible";
        
    }
});