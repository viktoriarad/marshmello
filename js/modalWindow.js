const modalWindow = document.querySelector('.modal-window');
const closeBtn = document.querySelector('.modal-window-img span');

const showModal = () => {
  if (window.pageYOffset > 800) {
    modalWindow.classList.add('modal-active');
    document.removeEventListener('scroll', showModal);
  }
}

document.addEventListener('scroll', showModal)

closeBtn.addEventListener('click', function () {
  modalWindow.classList.remove('modal-active');
})
