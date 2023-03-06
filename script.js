"use strict";

const menuIcon = document.querySelector(".dropdown");
const navLinks = document.querySelector(".header-nav");
navLinks.style.display = "none";
menuIcon.addEventListener("click", () => {
  console.log("clicked");
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
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

let className = "inverted";
let scrollTrigger = 60;

let header = document.querySelector(".header");
let desktopNav = document.getElementsByClassName("desktop-nav-links");
let headerLogo = document.querySelector(".header-logo");
let hamburger = document.querySelector(".menu-icon");
let headerNavText = document.querySelectorAll(".page-links");

document.addEventListener("scroll", function () {
  // Get the scroll position
  let scrollPos = window.pageYOffset;

  if (scrollPos > 100) {
    header.style.backgroundColor = "white";
    header.style.boxShadow = "0px 0px 8px rgba(0, 0, 0, 0.6)";
    for (let i = 0; i < desktopNav.length; i++) {
      desktopNav[i].style.color = "black";
    }
    headerLogo.style.color = "black";
    hamburger.style.backgroundColor = "#ffc700";
    hamburger.style.borderRadius = "5px";
    navLinks.style.backgroundColor = "white";
    for (let i = 0; i < headerNavText.length; i++) {
      headerNavText[i].style.color = "black";
    }
  } else {
    header.style.backgroundColor = "";
    header.style.boxShadow = "none";
    for (let i = 0; i < desktopNav.length; i++) {
      desktopNav[i].style.color = "white";
    }
    headerLogo.style.color = "white";
    hamburger.style.backgroundColor = "#ffc700";
    hamburger.style.borderRadius = "5px";
    hamburger.style.padding = "5px";
    navLinks.style.backgroundColor = "";
    for (let i = 0; i < headerNavText.length; i++) {
      headerNavText[i].style.color = "white";
    }
  }
});

if (window.innerWidth <= 385) {
  const footerTinker = document.querySelector(".footer-tinker");
  const copyright = document.querySelector(".copyright");
  copyright.textContent = " Copyright © 2017 Your Company Design: templatemo";
  footerTinker.appendChild(copyright);
}

//fonction pour l'affichage de la gallerie

// sélection dans le dom de tous les bouttons de la galerie
const showAllButton = document.querySelector("#show-all-button");
const brandingButton = document.querySelector("#branding");
const graphicButton = document.querySelector("#graphic");
const natureButton = document.querySelector("#nature");
const animationButton = document.querySelector("#animation");

// sélection dans le dom de toutes les images de la galerie
const pic1 = document.querySelector("#pic1");
const pic2 = document.querySelector("#pic2");
const pic3 = document.querySelector("#pic3");
const pic4 = document.querySelector("#pic4");
const pic5 = document.querySelector("#pic5");
const pic6 = document.querySelector("#pic6");

showAllButton.addEventListener("click", () => {
  showAllButton.classList.add("yellow-letter");
  brandingButton.classList.remove("yellow-letter");
  graphicButton.classList.remove("yellow-letter");
  pic1.style.display = "block";
  pic2.style.display = "block";
  pic3.style.display = "block";
  pic4.style.display = "block";
  pic5.style.display = "block";
  pic6.style.display = "block";
});

brandingButton.addEventListener("click", () => {
  brandingButton.classList.add("yellow-letter");
  showAllButton.classList.remove("yellow-letter");
  graphicButton.classList.remove("yellow-letter");
  natureButton.classList.remove("yellow-letter");
  animationButton.classList.remove("yellow-letter");
  pic1.style.display = "none";
  pic2.style.display = "none";
  pic3.style.display = "block";
  pic4.style.display = "none";
  pic5.style.display = "block";
  pic6.style.display = "none";
});

graphicButton.addEventListener("click", () => {
  graphicButton.classList.add("yellow-letter");
  showAllButton.classList.remove("yellow-letter");
  brandingButton.classList.remove("yellow-letter");
  natureButton.classList.remove("yellow-letter");
  animationButton.classList.remove("yellow-letter");
  pic1.style.display = "none";
  pic2.style.display = "none";
  pic3.style.display = "none";
  pic4.style.display = "block";
  pic5.style.display = "none";
  pic6.style.display = "block";
});

natureButton.addEventListener("click", () => {
  natureButton.classList.add("yellow-letter");
  showAllButton.classList.remove("yellow-letter");
  brandingButton.classList.remove("yellow-letter");
  graphicButton.classList.remove("yellow-letter");
  animationButton.classList.remove("yellow-letter");
  pic1.style.display = "block";
  pic2.style.display = "none";
  pic3.style.display = "block";
  pic4.style.display = "none";
  pic5.style.display = "none";
  pic6.style.display = "none";
});

animationButton.addEventListener("click", () => {
  animationButton.classList.add("yellow-letter");
  showAllButton.classList.remove("yellow-letter");
  brandingButton.classList.remove("yellow-letter");
  graphicButton.classList.remove("yellow-letter");
  natureButton.classList.remove("yellow-letter");
  pic1.style.display = "none";
  pic2.style.display = "block";
  pic3.style.display = "none";
  pic4.style.display = "none";
  pic5.style.display = "none";
  pic6.style.display = "block";
});
