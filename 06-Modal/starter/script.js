'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//to select mulitple elements with same class name we should use queryselectorall
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal, typeof btnsOpenModal);

//we can also use for of loop for objects
// for (const i of btnsOpenModal) {
//   console.log(i.textContent);
// }

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  //   console.log(`${btnsOpenModal[i].textContent} is clicked`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }

for (const i of btnsOpenModal) {
  i.addEventListener('click', openModal);
}
//closemodal function only will be called when the click event is happened
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (eventKey) {
  if (eventKey.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
