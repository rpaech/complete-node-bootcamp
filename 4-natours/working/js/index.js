import "@babel/polyfill";
import { login, logout } from "./login.js";
import displayMap from "./map.js";

const mapElmt = document.getElementById("map");
const loginFormElmt = document.querySelector(".form");
const logoutBtnElmt = document.querySelector(".nav__el--logout");
const emailElmt = document.getElementById("email");
const passwordElmt = document.getElementById("password");

if (mapElmt) {
  const locations = JSON.parse(mapElmt.dataset.locations);
  displayMap(locations);
}

if (loginFormElmt) {
  loginFormElmt.addEventListener("submit", (event) => {
    event.preventDefault();
    login(emailElmt.value, passwordElmt.value);
  });
}

if (logoutBtnElmt) {
  logoutBtnElmt.addEventListener("click", logout);
}
