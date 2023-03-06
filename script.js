"use strict";

const menuIcon = document.querySelector(".dropdown");
const navLinks = document.querySelector(".header-nav");
// navLinks.style.display = "none";
menuIcon.addEventListener("click", () => {
  console.log("clicked");
  if (navLinks.style.opacity == "0") {
    navLinks.style.opacity = "1";
  } else {
    navLinks.style.opacity = "0";
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
  natureButton.classList.remove("yellow-letter");
  animationButton.classList.remove("yellow-letter");
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

// Dom manipulation for quote section

//getting parts of the quote section
const quoteText = document.querySelector(".quote-text");
const quoteAuthorName = document.querySelector(".quote-author");
const jobDescription = document.querySelector(".quote-job");

//getting circles in dom
const circle1 = document.querySelector("#circle1");
const circle2 = document.querySelector("#circle2");
const circle3 = document.querySelector("#circle3");
const circle4 = document.querySelector("#circle4");

circle1.addEventListener("click", () => {
  quoteText.textContent =
    "HTML5 est vraiment le langage de programmation le plus poussé de tous les temps.";
  quoteAuthorName.textContent = "Fou du Markup";
  jobDescription.textContent = "Boilerplate maker";
});

circle2.addEventListener("click", () => {
  quoteText.textContent =
    "CSS est la technologie du futur. Les devs backend au chômage soon!";
  quoteAuthorName.textContent = "Mister CSS";
  jobDescription.textContent = "CSS only developer";
});

circle3.addEventListener("click", () => {
  quoteText.textContent =
    "Les devs front-end ne sont pas des devs bouhhhhhhh. TOO BAD!";
  quoteAuthorName.textContent = "Mister back-end";
  jobDescription.textContent = "Python programmer";
});

circle4.addEventListener("click", () => {
  quoteText.textContent =
    "Je suis un dev fullstack et tous les autres types de devs sont juste trop mauvais!";
  quoteAuthorName.textContent = "Mister Melon";
  jobDescription.textContent = "Fullstack developer";
});

// dom manipulation for blog

//getting the blog article part
const blogImage = document.querySelector(".blog-image");
const articleTitle = document.querySelector(".article-title");
const articleLink = document.querySelector("#article-title-link");
const articleInfos = document.querySelector(".article-infos");
const articleResume = document.querySelector(".article-resume");

// getting the blog buttons

const blogButton1 = document.querySelector(".blog-button-1");
const blogButton2 = document.querySelector(".blog-button-2");
const blogButton3 = document.querySelector(".blog-button-3");
const blogButton4 = document.querySelector(".blog-button-4");

blogButton1.addEventListener("click", () => {
  blogButton1.classList.add("yellow-letter");
  blogButton2.classList.remove("yellow-letter");
  blogButton3.classList.remove("yellow-letter");
  blogButton4.classList.remove("yellow-letter");
  blogImage.src = "assets/starwars.jpeg";
  articleTitle.textContent = "Comment devenir développeur web?";
  articleLink.href =
    "https://www.jesuisundev.com/comment-devenir-developpeur-web/";
  articleInfos.textContent = "Je suis un dev / Emploi / 6 Janvier 2020";
  articleResume.textContent = `Comment devenir développeur web ? C’est la question que je reçois
  dans 80 % des milliers d’e-mails que je reçois. Si c’est une
  question que tu te poses toi aussi, t’es au bon endroit. Oui,
  crois-moi, tu es capable ! Il est temps d’oser et de te lancer.
  Aujourd’hui, je vais t’expliquer comment faire.`;
});

blogButton2.addEventListener("click", () => {
  blogButton2.classList.add("yellow-letter");
  blogButton1.classList.remove("yellow-letter");
  blogButton3.classList.remove("yellow-letter");
  blogButton4.classList.remove("yellow-letter");
  blogImage.src = "assets/robot.jpeg";
  articleTitle.textContent = "Compétences clefs pour développeurs";
  articleLink.href =
    "https://www.jesuisundev.com/competences-clefs-pour-developpeurs/";
  articleInfos.textContent =
    "Je suis un dev / Bonnes pratiques / 21 Octobre 2019";
  articleResume.textContent = `Les compétences clefs pour tous développeurs ne sont pas une liste sans fin de langages et de technologies. Je vois partout ces espèces de check lists interminables à la con. On t’explique que tu es censé tout maîtriser sinon t’es la pire des merdes. C’est faux. Aujourd’hui je vais te parler de ce dont tu as vraiment besoin.`;
});

blogButton3.addEventListener("click", () => {
  blogButton3.classList.add("yellow-letter");
  blogButton1.classList.remove("yellow-letter");
  blogButton2.classList.remove("yellow-letter");
  blogButton4.classList.remove("yellow-letter");
  blogImage.src = "assets/PHPMeme.jpeg";
  articleTitle.textContent = "Pourquoi les développeurs détestent PHP";
  articleLink.href =
    "https://www.jesuisundev.com/pourquoi-les-developpeurs-detestent-php/";
  articleInfos.textContent = "Je suis un dev / PHP / 23 Septembre 2019";
  articleResume.textContent = `Le PHP est le langage le plus utilisé au monde. C’est aussi le plus détesté. Et c’est de la haine pure. Mais pourquoi autant de développeur(euse)s le détestent autant ? Aujourd’hui on va aller jusqu’à l’origine de la haine et on va voir si elle est vraiment fondée..`;
});

blogButton4.addEventListener("click", () => {
  blogButton4.classList.add("yellow-letter");
  blogButton1.classList.remove("yellow-letter");
  blogButton2.classList.remove("yellow-letter");
  blogButton3.classList.remove("yellow-letter");
  blogImage.src = "assets/surprise.jpeg";
  articleTitle.textContent =
    "Ce que personne ne te dira sur le métier de développeur";
  articleLink.href =
    "https://www.jesuisundev.com/ce-que-personne-ne-te-dira-sur-le-metier-de-developpeur/";
  articleInfos.textContent = "Je suis un dev / Emploi / 30 Septembre 2019";
  articleResume.textContent = `Le métier de développeur a beaucoup d’avantages. Mais crois-moi quand je te dis qu’on est loin de la promenade à Walt Disney. Avec le besoin exponentiel de développeur et du coup l’explosion des formations j’entends beaucoup de gens vendre le métier comme un séjour au Club Med. Alors, pourquoi pas mettre une crotte de nez au milieu du visage de cette réputation parfaite ? Aujourd’hui je vais te dire ce qu’on oublie de te préciser sur le métier de développeur. `;
});
