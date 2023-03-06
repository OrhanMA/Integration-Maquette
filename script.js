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
