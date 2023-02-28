"use strict";

const menuIcon = document.querySelector(".dropdown");
const navLinks = document.querySelector(".header-nav");
navLinks.style.display = "none";
menuIcon.addEventListener("click", () => {
  const navLinks = document.querySelector(".header-nav");
  console.log("clicked");
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
    navLinks.style.transition = "all 2s ease";
  } else {
    navLinks.style.display = "none";
  }
});

const surprise1 = document.querySelector(".surprise-1");
surprise1.addEventListener("click", () => {
  window.open("https://motherfuckingwebsite.com/", "_blank").focus();
});

const surprise2 = document.querySelector(".surprise-2");
surprise2.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank").focus();
});

const retourTop = document.querySelector(".header-logo");
retourTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
