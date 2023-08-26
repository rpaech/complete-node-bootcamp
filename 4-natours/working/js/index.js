import "@babel/polyfill";
import { login, logout } from "./login.js";
import { updateSettings } from "./updateSettings.js";
import displayMap from "./map.js";

const mapElmt = document.getElementById("map");
const loginFormElmt = document.querySelector(".form--login");
const logoutBtnElmt = document.querySelector(".nav__el--logout");
const userDataFormElmt = document.querySelector(".form-user-data");
const userPasswordFormElmt = document.querySelector(".form-user-password");

if (mapElmt) {
  const locations = JSON.parse(mapElmt.dataset.locations);

  displayMap(locations);
}

if (loginFormElmt)
  loginFormElmt.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    login(email, password);
  });

if (logoutBtnElmt) logoutBtnElmt.addEventListener("click", logout);

if (userDataFormElmt)
  userDataFormElmt.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    updateSettings({ name, email }, "settings");
  });

if (userPasswordFormElmt)
  userPasswordFormElmt.addEventListener("submit", async (event) => {
    event.preventDefault();

    const currentPassword = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;

    await updateSettings(
      { currentPassword, password, passwordConfirm },
      "password",
    );

    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
  });
