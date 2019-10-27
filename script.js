"use strict";

document.addEventListener("scroll", navColor);
document.addEventListener("scroll", backToTop);
document.querySelector(".read-more").addEventListener("click", showReadMore);

const burgerMenu = document.querySelector("#burger-menu");
const overlay = document.querySelector("#menu");
burgerMenu.addEventListener("click", function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");

  document.querySelector("#menu").addEventListener("click", btnClose);
});

function btnClose() {
  const overlay = document.querySelector("#menu");

  overlay.classList.remove("overlay");
}

function backToTop() {
  const scrollY = window.pageYOffset;
  const btn = document.querySelector(".btn-top");

  scrollY >= 300 ? btn.classList.add("show") : "";
  scrollY < 300 ? btn.classList.remove("show") : "";

  btn.addEventListener("click", btnClicked);
}

function btnClicked() {
  const btnTop = document.querySelector("#splash");
  event.target.preventDefault();
  btnTop.animate({ scrollY: 0 }, "300");
}

function navColor() {
  const scrollY = window.pageYOffset;
  const nav = document.querySelector("#nav-bar");

  scrollY >= 730 ? nav.classList.add("nav-colored") : "";
  scrollY < 730 ? nav.classList.remove("nav-colored") : "";
}

function showReadMore() {
  const showMore = document.querySelector("#more");
  const btn = document.querySelector(".read-more");
  const dots = document.querySelector("#dots");

  if (showMore.classList.contains("hidden")) {
    showMore.classList.remove("hidden");
    btn.textContent = "Hide";
    dots.classList.add("hidden");
  } else {
    showMore.classList.add("hidden");
    btn.textContent = "Read more";
    dots.classList.remove("hidden");
  }
}
