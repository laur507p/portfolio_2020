"use strict";

window.addEventListener("DOMContentLoaded", start);

const burgerIcon = document.querySelector("#burger-icon");
const nav = document.querySelector("#nav");
let burgerOpen = false;

function start() {
  console.log("siden vises");

  burgerIcon.addEventListener("click", clickBurger);
}

function clickBurger() {
  if (burgerOpen === false) {
    burgerOpen = true;
    burgerIcon.classList.add("open");
    nav.classList.remove("hide-burger");
  } else if (burgerOpen === true) {
    burgerOpen = false;
    burgerIcon.classList.remove("open");
    nav.classList.add("hide-burger");
  }
}
