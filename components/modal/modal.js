const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open__modal');
const close = document.querySelector('.close');

openModal.addEventListener('click', () => {
    modal.classList.remove('hide');
});

close.addEventListener('click', () => {
    modal.classList.add('hide');
});

document.addEventListener('mouseup', function(e) {
    if (!modal.contains(e.target)) {
            modal.classList.add('hide');
    }
});