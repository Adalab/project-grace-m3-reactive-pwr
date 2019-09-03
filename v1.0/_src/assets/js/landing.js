console.log('LANDING');

"use strict";
const homeBtn = document.querySelector(".layout-page__button");
const getBody = document.querySelector(".layout");

function handlerGoHome() {
  const getHome = (window.location.href = "home.html");
  return getHome;
}
function getFocus() {
  homeBtn.focus();
}

getBody.addEventListener("click", getFocus);
homeBtn.addEventListener("click", handlerGoHome);
