"use strict";

document.addEventListener("scroll", navColor);
document.addEventListener("scroll", burgerColor);

const burgerMenu = document.querySelector("#burger-menu");
const overlay = document.querySelector("#menu");
burgerMenu.addEventListener("click", function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

function navColor() {
  const scrollY = window.pageYOffset;
  const nav = document.querySelector("#nav-bar");

  console.log(scrollY);

  scrollY >= 730 ? nav.classList.add("nav-colored") : "";
  scrollY < 730 ? nav.classList.remove("nav-colored") : "";
}

function burgerColor() {
  const scrollY = window.pageYOffset;
  const burger = document.querySelector("#burger-menu>span");

  console.log(scrollY);

  scrollY >= 1047 ? burger.classList.add("burger-background-dark") : "";
  scrollY < 1047 ? burger.classList.remove("burger-background-dark") : "";
}

// window.onscroll = () => {
//   const nav = document.querySelector("#nav-bar");
//   if (this.scrollX <= 50) nav.className = "";
//   else nav.className = "nav-colored";
// };
