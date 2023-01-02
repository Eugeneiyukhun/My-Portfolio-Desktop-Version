const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const menuOption = document.querySelector('.menu-option');
const body = document.querySelector('body');
const headline = document.querySelector('.headline.generic-container')
const openBtn = document.querySelector('.header-menu-button');

const openMenu = () => {
  body.classList.add('no-scroll');
  headline.classList.add('blur');
  mobileMenu.style.display = 'block';
}


openBtn.addEventListener('click', openMenu);