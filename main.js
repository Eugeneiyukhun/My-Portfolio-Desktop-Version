const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const menuOption = document.querySelector('.menu-option li a');
const body = document.querySelector('body');
const headline = document.querySelector('.headline.generic-container');
const openBtn = document.querySelector('.header-menu-button');

const openMenu = () => {
  body.classList.add('no-scroll');
  headline.classList.add('blur');
  mobileMenu.style.display = 'block';
  mobileMenu.style.animation = 'fadein 2s';
};

const closeMenu = () => {
  mobileMenu.style.display = 'none';
  body.classList.remove('no-scroll');
  headline.classList.remove('blur');
};

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuOption.addEventListener('click', closeMenu);