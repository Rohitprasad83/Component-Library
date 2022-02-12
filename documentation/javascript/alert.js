const alert = document.querySelector('.alert');
const closeBtn = document.querySelector('.alert__close');
const resetBtn = document.querySelector('.reset');

    resetBtn.style.display = 'none';


closeBtn.addEventListener('click', () => {
    alert.style.display = 'none';
    resetBtn.style.display = 'block'
})

resetBtn.addEventListener('click', () => {
    alert.style.display = 'flex';
    resetBtn.style.display = 'none';
})