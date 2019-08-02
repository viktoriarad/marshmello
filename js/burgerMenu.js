const burgerMenu = document.querySelector('.fa-bars');
const burgerMenuClose = document.querySelector('.fa-times');
const sliderMenu = document.querySelector('.burgerMenu');
const backgroundBlack = document.querySelector('.bg-black');


const showBurgerMenu = () => {
  sliderMenu.classList.add('burgerMenu-active');
  backgroundBlack.classList.add('bg-black-active');

}

const closeBurgerMenu = () => {
  sliderMenu.classList.remove('burgerMenu-active');
  backgroundBlack.classList.remove('bg-black-active');
}

burgerMenu.addEventListener('click', showBurgerMenu);
burgerMenuClose.addEventListener('click', closeBurgerMenu);
