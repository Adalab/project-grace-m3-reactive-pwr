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
