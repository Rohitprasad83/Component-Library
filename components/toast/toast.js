const toast = document.querySelector('.toast');
const toastClose = document.querySelector('.toast__close');
const openToast = document.querySelector('.open__toast');

openToast.addEventListener('click', () => {
    toast.classList.remove('hide');
    autoDisappear();
});

toastClose.addEventListener('click', () => {
    toast.classList.add('hide');
});

function autoDisappear() {
  setTimeout(function () {
        toast.classList.add('hide');
  }, 5000)
}