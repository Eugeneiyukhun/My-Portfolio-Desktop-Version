// Beginning of mobile menu open and close buttons
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
// End of mobile-menu open and closed buttons

// popup window
const workCardElements = document.querySelector('.work-card_elements');
const projectDetailsTechnology = document.querySelector('.project-details_technology');
const closeProject = document.querySelector('.close-project');
const workCardSpecs = document.querySelector('.work-card_specs');
const aside = document.querySelector('aside');
 
const open = () => {
  aside.style.display = 'block';
  };

const close = () => {
  aside.style.display = 'none';
};

const projects = [
  {
    id: 1,
    name: 'Tonic',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2022',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'tonic1.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://eugeneiyukhun.github.io/',
    source: 'https://eugeneiyukhun.github.io/My-Portfolio-Desktop-Version/',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2022',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'multi-post1.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://eugeneiyukhun.github.io/',
    source: 'https://eugeneiyukhun.github.io/My-Portfolio-Desktop-Version/',
  },
  {
    id: 3,
    name: 'Tonic',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2022',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'tonic2.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://eugeneiyukhun.github.io/',
    source: 'https://eugeneiyukhun.github.io/My-Portfolio-Desktop-Version/',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    company: 'Canopy',
    position: 'Back End Dev',
    year: '2022',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'multi-post2.png',
    technologies: ['html', 'css', 'javaScript'],
    liveVersion: 'https://eugeneiyukhun.github.io/',
    source: 'https://eugeneiyukhun.github.io/My-Portfolio-Desktop-Version/',
  },
];
