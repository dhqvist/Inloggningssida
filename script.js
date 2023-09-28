// Selecting elements and setting to constants
const formSelect = document.getElementById("form-container");
const divSelect = document.getElementById("form-div-container");
const bodySelect = document.querySelector("body");
const mainHeaderSelect = document.querySelector(".titel-inlogg");
const informContainerSelect = document.getElementById("text-inform-container");
const textHeader = document.querySelector(".text-inform-header");
const informText = document.querySelector(".text-inform-pg");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Setting the username and password
const namn = "Bella";
const lösenord = "qwe123";
// local storage
const theUser = localStorage.getItem("username");
const thePassword = localStorage.getItem("password");
// Button
const btnName = document.getElementById("btn");

//The if statements
if ((theUser, thePassword)) {
  cleanDiv();
  onlineUserStyle();
}
//Button click function with if/else if statements to decide what happens depending on what the user do
btnName.addEventListener("click", function (event) {
  if (
    btnName.innerHTML === "Logga in" &&
    usernameInput.value === namn &&
    passwordInput.value === lösenord
  ) {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);
    cleanDiv();
    onlineUserStyle();
  } else if (btnName.innerHTML === "Logga ut") {
    localStorage.clear();
    location.reload();
  } else if (btnName.innerHTML === "Testa igen") {
    location.reload();
  } else if (usernameInput.value != namn || passwordInput.value != lösenord) {
    event.preventDefault();
    cleanDiv();
    wrongLogInStyle();
  }
});
// functions for styling
function cleanDiv() {
  usernameInput.style.display = "none";
  passwordInput.style.display = "none";
  document.querySelector(".label-username").style.display = "none";
  document.querySelector(".password-label").style.display = "none";
}

function onlineUserStyle() {
  let formWelcomeText = document.createElement("p");
  divSelect.appendChild(formWelcomeText);
  formWelcomeText.id = "welcome-text";
  const welcomeMessage = document.getElementById("welcome-text");

  bodySelect.style.background = "none";
  bodySelect.style.backgroundColor = "rgba(236, 128, 12, 0.5)";

  formSelect.style.marginTop = "15rem";
  formSelect.style.height = "50rem";

  mainHeaderSelect.style.position = "relative";
  mainHeaderSelect.style.top = "-28rem";

  welcomeMessage.style.fontSize = "3.5rem";
  welcomeMessage.style.textAlign = "center";
  welcomeMessage.style.position = "relative";
  welcomeMessage.style.top = "-5rem";
  welcomeMessage.innerHTML = "Välkommen, du är nu inloggad! 🐶";
  welcomeMessage.style.color = "green";
  divSelect.style.borderRadius = "7px";
  divSelect.style.height = "40rem";
  divSelect.style.width = "100%";
  divSelect.style.boxShadow = "  inset 3px 3px 150px rgba(116, 218, 20, 0.9)";
  divSelect.style.background = "  rgba(116, 218, 20, 0.3)";
  divSelect.style.border = "7px solid rgba(116, 218, 20, 0.2) ";

  btnName.style.position = "absolute";
  btnName.style.top = "30rem";
  btnName.innerHTML = "Logga ut";

  informContainerSelect.style.backgroundColor = "rgba(236, 128, 12, 0.3)";
  informContainerSelect.style.boxShadow =
    "  15px 15px 15px rgba(3, 3, 10, 0.5)";
  informContainerSelect.style.height = "16rem";
  informContainerSelect.style.marginBottom = "15rem";

  textHeader.innerHTML = "Inloggad som: <br/><br/>" + namn;
  textHeader.style.fontSize = "3.5rem";
  textHeader.style.color = "black";

  informText.innerHTML = "";
}

function wrongLogInStyle() {
  let formErrorText = document.createElement("p");
  divSelect.appendChild(formErrorText);
  formErrorText.id = "error-text";
  const errorMessage = document.getElementById("error-text");

  errorMessage.style.fontSize = "2.5rem";
  errorMessage.style.textAlign = "center";
  errorMessage.style.position = "relative";
  errorMessage.style.top = "-7rem";
  errorMessage.innerHTML =
    "<u>Error 404</u> <br/><br/>" +
    "Någonting gick fel, testa att logga in igen och skriv noggrant!";
  errorMessage.style.color = "black";
  errorMessage.style.fontWeight = "bold";
  errorMessage.style.letterSpacing = "0.2rem";

  divSelect.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  divSelect.style.boxShadow = " inset 3px 3px 150px rgba(255, 0, 0, 0.9)";
  divSelect.style.border = "5px solid rgba(255, 0, 0, 0.2) ";
  divSelect.style.width = "100%";
  divSelect.style.height = "40rem";
  divSelect.style.borderRadius = "7px";

  btnName.style.position = "absolute";
  btnName.style.top = "27rem";
  btnName.innerHTML = "Testa igen";

  mainHeaderSelect.style.position = "relative";
  mainHeaderSelect.style.top = "-25rem";

  informContainerSelect.style.position = "relative";
}
