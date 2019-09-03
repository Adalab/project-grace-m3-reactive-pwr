
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