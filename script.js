"use strict";

var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

// window.onscroll = () => {
//   const nav = document.querySelector("#nav-bar");
//   if (this.scrollX <= 50) nav.className = "";
//   else nav.className = "nav-colored";
// };
