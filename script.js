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
