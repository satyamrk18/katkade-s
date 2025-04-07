let hamburgerNav = document.getElementById("hamburgerNav");
let hamNav = document.getElementById("hamburger-menu");
function hamMenu() {
  //hamburger menu image cance to cancel image code
  if (hamNav.src.includes("menus.png")) {
    hamNav.src = "./images/cancel.png";
  } else {
    hamNav.src = "./images/menus.png";
  }
  //hamburger menu display on small phone screen code
  if (
    hamburgerNav.style.display == "none" ||
    hamburgerNav.style.display == ""
  ) {
    hamburgerNav.style.display = "block";
  } else {
    hamburgerNav.style.display = "none";
  }
}
// Ensure menu is always visible on larger screens
function checkScreenSize() {
  if (window.innerWidth < 601) {
    hamburgerNav.style.display = "none";
  } else {
    hamburgerNav.style.display = "flex";
  }
}

// Run when browser trigger a resizing a page
checkScreenSize();

// Re-check when window resizes
window.onresize = checkScreenSize; // it is a functions call when broeser triggred as a resizing

//incremetal card
//for Experience
const IncrementNumexperience = document.getElementById(
  "incremetnal-info-experience"
);
let i = 1;
const NumberIncrementexperience = setInterval(() => {
  IncrementNumexperience.innerText = `${i}+`;
  if (i === 10) {
    clearInterval(NumberIncrementexperience);
  }
  i++;
}, 200);
//for Projects
const IncrementNumprojects = document.getElementById(
  "incremetnal-info-projects"
);
let j = 1;
const NumberIncrementprojects = setInterval(() => {
  IncrementNumprojects.innerText = `${j}+`;
  if (j === 10) {
    clearInterval(NumberIncrementprojects);
  }
  j++;
}, 200);
//