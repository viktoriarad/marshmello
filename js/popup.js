const popUp = document.querySelector('.popup')
const closeButton = document.querySelector('.popup span')

closeButton.addEventListener('click', function () {
  popUp.style.display = 'none';
})
