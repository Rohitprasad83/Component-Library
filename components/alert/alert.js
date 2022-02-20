const alert = document.querySelector('.alert');
const closeBtn = document.querySelector('.alert__close');

closeBtn.addEventListener('click', () => {
  alert.style.display = 'none';
})

//only for alert that we want to disappear after some time
function autoDisappear() {
  setTimeout(function () {
    alert.style.display = 'block';
  }, 5000)
}