'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const message = document.createElement('div');
const logo = document.querySelector('.nav__logo');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const navContainer = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////

// cookie message
/*
message.classList.add('cookie-message');

message.innerHTML = `<p>We use cookies for improved functionality and analytics <button class ='btn btn--close-cookie'>Got it!</button></p>`;

// header.after(message);
// header.append(message);

// Delete Message
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
  // message.parentElement.removeChild(message);
});

// Setting style
message.style.backgroundColor = '#37383d';
message.style.width = '99vw';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';
*/
/////////////////////////////////////////////////////////////////

// setting and updating attributes

logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');
/////////////////////////////////////////////////////////////////

// Implementing smooth scrolling

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });

  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log(`Current Scroll X:${window.scrollX} Y:${window.scrollY}`);
  // console.log(
  //   `Height: ${document.documentElement.clientHeight} Width:${document.documentElement.clientWidth}`
  // );
  //scrolling

  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });
});

// Page Navigation

// document.querySelectorAll('.nav__link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation method

// 1.Add event listener to common parent

document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  // 2.Determine where the event is triggered
  if (
    e.target.classList.contains('nav__link') &&
    !e.target.classList.contains('nav__link--btn')
  ) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component

tabsContainer.addEventListener('click', e => {
  e.preventDefault();
  const clickedTab = e.target.closest('.operations__tab');

  // Gurad Clause
  // Below is to prevent if any clicks happened other than btn
  if (!clickedTab) return;

  // Hide tab/content
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate content & Tab

  clickedTab.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clickedTab.dataset.tab}`)
    .classList.add('operations__content--active');

  // tabsContent.forEach(tc => {
  //   if (
  //     tc.classList.contains(`operations__content--${clickedTab.dataset.tab}`)
  //   ) {
  //     tc.classList.add('operations__content--active');
  //   } else {
  //     tc.classList.remove('operations__content--active');
  //   }
  // });
});

// Menu fadeout

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const clickedLink = e.target;
    const sibiling = clickedLink.closest('.nav').querySelectorAll('.nav__link');
    const logo = clickedLink.closest('.nav').querySelector('img');

    sibiling.forEach(el => {
      if (el !== clickedLink) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

navContainer.addEventListener('mouseover', handleHover.bind(0.5));
navContainer.addEventListener('mouseout', handleHover.bind(1));

// sticky navigation

// const initCords = section1.getBoundingClientRect();

// window.addEventListener('scroll', () => {
//   if (window.scrollY > initCords.top) {
//     navContainer.classList.add('sticky');
//   } else {
//     navContainer.classList.remove('sticky');
//   }
// });

// Intersection API

// const observerCb = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const observerOps = {
//   root: null,
//   threshold: [0, 1, 0.2],
// };

// const observer = new IntersectionObserver(observerCb, observerOps);

// observer.observe(section1);

const navHeight = navContainer.getBoundingClientRect().height;

const stickyNav = function (entries, observer) {
  const [entry] = entries;
  !entry.isIntersecting
    ? navContainer.classList.add('sticky')
    : navContainer.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal Sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadLazyimg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadLazyimg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// slider

const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');

const btnSlideLeft = document.querySelector('.slider__btn--left');
const btnSlideRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
const maxSlide = slides.length - 1;

const createDots = function () {
  slides.forEach((_, index) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class = "dots__dot" data-slide=${index}></button>`
    );
  });
};

const goToSlide = function (slide) {
  slides.forEach((s, index) => {
    s = s.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

const nextSlide = () => {
  currentSlide === maxSlide ? (currentSlide = 0) : currentSlide++;
  goToSlide(currentSlide);
  activeDot(currentSlide);
};

const prevSlide = () => {
  currentSlide === 0 ? (currentSlide = maxSlide) : currentSlide--;
  goToSlide(currentSlide);
  activeDot(currentSlide);
};

const activeDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide='${slide}']`)
    .classList.add('dots__dot--active');
};

const init = function () {
  createDots();
  goToSlide(0);
  activeDot(0);
};

// event handlers

btnSlideRight.addEventListener('click', nextSlide);

btnSlideLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    nextSlide();
  } else if (e.key === 'ArrowLeft') {
    prevSlide();
  }
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
});

// Initialize

init();

//////////Lectures///////////////////

// Selecting the elements

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByClassName('section'));

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

/*
// creating the eletment

// insertAdjacentHTML;

const message = document.createElement('div');
// message.setAttribute('id', 'sample');
// message.setAttribute('class', 'btn section');

message.classList.add('cookie-message');

message.innerHTML = `<p>We use cookies for improved functionality and analytics <button class ='btn btn--close-cookie'>Got it!</button></p>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete Elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});


// styles
console.log(message.style.backgroundColor);

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// setting custom css property

// document.documentElement.style.setProperty('--color-primary', '#ddd');


// standard attributes
console.log(logo.alt);
console.log(logo.src);
console.log(logo.id);
console.log(logo.className);

//non standard attribute

console.log(logo.designer);
console.log(logo.getAttribute('designer'));

// Data attribute
// need to

console.log(logo.dataset.versionNumber);

// class

logo.classList.add('a', 'b', 'c');
logo.classList.remove('a');
logo.classList.toggle('b');
console.log(logo.classList.contains('c'));



// Multiple ways of event listener

// const h1 = document.querySelector('h1');

// const alertH1 = () => {
//   alert('addEventerlistener: Great! You are reading the heading');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = alertH1;

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// we can use event handler in html as attribute for the particular
const randomnInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomnInt(0, 255)}, ${randomnInt(0, 255)}, ${randomnInt(0, 255)})`;

// Event Bubbling and event propagation

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target);
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('links', e.target);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target);
  },
  true
);


// Dom Traversing

const h1 = document.querySelector('h1');

// Going downwards, selecting child elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = '#FFF';
h1.lastElementChild.style.color = 'red';

// Going Upwards
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.backgroundColor = '#fff';

// Going Sideways

console.log(h1.previousElementSibling); //elememnt
console.log(h1.nextElementSibling); //element

console.log(h1.previousSibling); //node
console.log(h1.nextSibling); //node

console.log(h1.parentElement.children);
*/

document.addEventListener('DOMContentLoaded', e => {
  console.log(e);
});

window.addEventListener('load', e => console.log(e));

window.addEventListener('beforeunload', e => {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
