"use strict";

window.onscroll = () => {
  const nav = document.querySelector("#nav-bar");
  if (this.scrollY <= 50) nav.className = "";
  else nav.className = "nav-colored";
};
