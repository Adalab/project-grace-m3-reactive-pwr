/* eslint-disable strict */
const btnsCollapse = document.querySelectorAll(".js-btn-collapse");

const makeCollapse = event => {
  event.preventDefault();
  if (
    event.currentTarget && event.currentTarget.parentElement && event.currentTarget.parentElement.parentElement) {
    event.currentTarget.parentElement.parentElement.classList.toggle("hidden");
  }
};

for (let i = 0; i < btnsCollapse.length; i++) {
  btnsCollapse[i].addEventListener("click", makeCollapse);
}