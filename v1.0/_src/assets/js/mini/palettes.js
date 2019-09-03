/* eslint-disable no-undef */
/* eslint-disable strict */

const visualization = document.querySelector('.visualization');
const palettBoxes = document.querySelectorAll('.color-pallet');
const palletBtn = document.querySelectorAll('.js-palett-btn');

const removeClasses = () => {
  for (let i = 1; i < visualization.classList.length; i++) {
    visualization.classList.remove(visualization.classList[i]);
  }
};

const addChoosedClass = event => {
  let selectedPalett = event.currentTarget.id;
  visualization.classList.add(selectedPalett);
};

const checkBtn = () => {
  event.currentTarget.firstElementChild.checked = true;
};

const changePalett = event => {
  removeClasses();
  addChoosedClass(event);
  checkBtn();
  readRadioForm(event);
  saveLocalStorage();
};

const handlePalettBtnsClick = () => {
  for (const palett of palettBoxes) {
    palett.addEventListener('click', changePalett);
  }
};

handlePalettBtnsClick(palettBoxes);
