const hamburger = document.querySelector('#hamburger-menu')
const close = document.querySelector('#close')
const open = document.querySelector('#open')

const openMenu = () => {
  hamburger.classList.remove('d-none');
  hamburger.classList.add('d-flex');
};

const closeMenu = () => {
  hamburger.classList.remove('d-flex');
  hamburger.classList.add('d-none');
};

open.addEventListener ('click', () => {
  openMenu();
});

close.addEventListener ('click', () => {
  closeMenu();
});
