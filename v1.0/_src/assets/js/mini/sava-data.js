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
