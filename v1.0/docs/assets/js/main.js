'use strict';
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
/* eslint-disable strict */
const uploadImage = document.querySelector("#photo");
const miniAvatar = document.querySelector(".data__form__image-thumbnail");
const profileAvatar = document.querySelector(".visualization__user__img");


const fr = new FileReader();

const getPhotoSaved = () => {
  profileAvatar.style.backgroundImage =` url("objectLocalStor.photo")`;
};

const clearPhoto = () => {
  profileAvatar.style.backgroundImage ='url("./assets/images/blank-profile.png")';
  miniAvatar.style.backgroundImage = 'url("")';
};

const writeImage = () => {
  const savedData = setLocalStorage();
  if (savedData.photo){
    chargeImage();
    console.log('Im comming from localstorage');
  }
  else if (fr.result) {
    miniAvatar.style.backgroundImage = `url('${fr.result}')`;
    profileAvatar.style.backgroundImage = `url('${fr.result}')`;
    readImageValue(fr.result);
    saveLocalStorage();
    console.log('Im comming from user file');

  } else {
    clearPhoto();
  }
};

const getImage = () => {
  const myImg = uploadImage.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myImg);
};

uploadImage.addEventListener("change", getImage);
function removeAtSymbol(string) {
  return string.replace("@", "");
}

const email = document.querySelector(".js-link_email");
const emailPlace = document.querySelector(".js-email");
const getEmail = () => {
  if (email.value) {
    emailPlace.innerHTML =
        '<a href="mailto:' +
        email.value +
        '" target="_blank"><i style="opacity:1" class="icon fa fa-envelope js-envelope"></i></a>';
  } else {
    emailPlace.firstElementChild.style.opacity = 0.5;
  }
};

email.addEventListener("keyup", getEmail);

const phone = document.querySelector(".js-link_phone");
const phonePlace = document.querySelector(".js-phone");
const getPhone = () => {
  if (phone.value) {
    phonePlace.innerHTML =
      '<a href="tel:+34' +
      phone.value +
      '" target="_blank"><i style="opacity:1" class="icon fa fa-mobile-alt js-envelope"></i></a>';
  } else {
    phonePlace.firstElementChild.style.opacity = 0.5;
  }
};
phone.addEventListener("keyup", getPhone);


const linkedin = document.querySelector(".js-link_linkedin");
const linkedinPlace = document.querySelector(".js-linkedin");
const getLinkedin = () => {
  const linkedinOK = removeAtSymbol(linkedin.value);
  if (linkedinOK) {
    linkedinPlace.innerHTML =
      '<a href="https://www.linkedin.com/in/' +
      linkedinOK +
      '/" target="_blank"><i style="opacity:1" class="icon fab fa-linkedin-in"></i></a>';
  } else {
    linkedinPlace.firstElementChild.style.opacity = 0.5;
  }
};
  
linkedin.addEventListener("keyup", getLinkedin);

const github = document.querySelector(".js-link_github");
const githubPlace = document.querySelector(".js-github");
const getGithub = () => {
  const githubOK = removeAtSymbol(github.value);
  if (githubOK) {
    githubPlace.innerHTML =
        '<a href="https://github.com/' +
        githubOK +
        '" target="_blank"><i style="opacity:1" class="icon fab fa-github-alt"></i></a>';
  } else {
    githubPlace.firstElementChild.style.opacity = 0.5;
  }
};
github.addEventListener("keyup", getGithub);


const inputForm = document.querySelectorAll(".data__form-item");

const dataCard = document.querySelectorAll(".js-visualization-data");

inputAddEvent();

const inputText = ["Nombre Apellido", "Front-end developer"];

const clearForm = () => {
  for (let i = 0; i < dataCard.length; i++) {
    inputForm[i].value = "";
    dataCard[i].innerText = inputText[i];
    removeClasses();
    localStorage.removeItem("objectLocalStor");
  }
};

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


const resetPreviewColors = () => removeClasses();

const iconsList = [emailPlace, phonePlace, linkedinPlace, githubPlace];

const resetPreviewIcons = () => {
  for (const item of iconsList) {
    item.firstElementChild.style.opacity = 0.5;
  }
};

const resetPreview = () => {
  resetPreviewColors();
  clearForm();
  resetPreviewIcons();
  clearPhoto();
};

const btnReset = document.querySelector(".js-reset");

btnReset.addEventListener("click", resetPreview);
/* eslint-disable strict */
function sendDataCard() {
  for (let i = 0; i < dataCard.length; i++) {
    if (inputForm[i].value === "") {
      dataCard[i].innerText = inputText[i];
    } else {
      dataCard[i].innerHTML = inputForm[i].value;
    }
  }
}

function inputAddEvent() {
  for (let i = 0; i < dataCard.length; i++) {
    inputForm[i].addEventListener("keyup", sendDataCard);
  }
}

const inputFormRadio = document.querySelectorAll(".js-palett-choose");

let objectLocalStor = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: ""
};


function readInputValue() {
  for (let i = 0; i < inputForm.length; i++) {
    objectLocalStor[inputForm[i].name] = inputForm[i].value;
    if (inputForm[i] === phone) {
      objectLocalStor[inputForm[i].name] = "+34 " + inputForm[i].value;
    } else if (inputForm[i] === github) {
      objectLocalStor[inputForm[i].name] = removeAtSymbol(inputForm[i].value);
    }
  }
}


function readRadioForm(ev) {
  const palletChoose = ev.currentTarget;
  objectLocalStor.palette = parseInt(palletChoose.dataset.value);
}

function readImageValue(src) {
  return (objectLocalStor.photo = src);
}
function createLocalStorage() {
  readInputValue();
  readImageValue(writeImage());
  saveLocalStorage();
}
const form = document.querySelector(".js-data__input");
form.addEventListener("change", createLocalStorage);

function saveLocalStorage() {
  localStorage.removeItem("objectLocalStor");
  localStorage.setItem("objectLocalStor", JSON.stringify(objectLocalStor));
}

function setLocalStorage() {
  let object = localStorage.getItem("objectLocalStor");
  return JSON.parse(object);
}

function autoFillInput() {
  const savedData = setLocalStorage();
  if (savedData) {
    for (let i = 0; i < inputForm.length; i++) {
      let value = savedData[inputForm[i].name];
      inputForm[i].value = value;
      if (inputForm[i].name === "phone") {
        const phone = savedData.phone.replace("+34 ", "");
        inputForm[i].value = phone;
      }
    }
  }
}
function setRadioValue() {
  const savedData = setLocalStorage();
  if (savedData) {
    for (let i = 0; i < palletBtn.length; i++) {
      if (i === savedData.palette) {
        visualization.classList.add(palletBtn[i-1].parentElement.id);
        palletBtn[i - 1].checked = true;
      }
    }
  }
}

function chargeImage() {
  const savedData = setLocalStorage();
  if (savedData.photo) {
    miniAvatar.style.backgroundImage = `url('${savedData.photo}')`;
    profileAvatar.style.backgroundImage = `url('${savedData.photo}')`;
  }
}

function loadLocalStorage() {
  autoFillInput();
  setRadioValue();
  chargeImage();
  getGithub();
  getEmail();
  getLinkedin();
  getPhone();
  sendDataCard();
}
loadLocalStorage();


let buttonShare = document.querySelector(".js-saveLocalStorage");

const responseURL = document.querySelector(".js-response");
const showResultURL = document.querySelector(".share__twitter");
const twitterURL = document.querySelector(".sharetwitter");
const tweet = "https://twitter.com/intent/tweet?text=Esta%20es%20la%20tarjeta%20que%20he%20creado%20con%20Awesome%20Profile%20Cards";

const jsonLocalStor = localStorage.getItem('objectLocalStor');

function showURL(fetchresult) {
  showResultURL.classList.remove("js-hidden");
  if (fetchresult.success) {
    responseURL.innerHTML = "<a href=" + fetchresult.cardURL + " target = 'blank' class='sharetwitter share__twitter__link'>" + fetchresult.cardURL + "</a>";
    twitterURL.href = tweet + fetchresult.cardURL;
  } else {
    responseURL.innerHTML = "ERROR:" + fetchresult.error;
  }
}


function sendRequest(json) {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: json
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showURL(result);
      disableShareButton(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function disableShareButton (fetchresult) {
  if (fetchresult.success) {
    buttonShare.disabled = true;
  }
}

function createCard(ev) {
  ev.preventDefault();
  sendRequest(jsonLocalStor);
}

buttonShare.addEventListener("click", createCard);
//# sourceMappingURL=main.js.map
