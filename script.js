"use strict";

const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
  const navLinks = document.querySelector(".header-nav");
  console.log("clicked");
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }
});
