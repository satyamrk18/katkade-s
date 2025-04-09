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
let started = false;

function startExperienceCounter() {
  const el = document.getElementById("incremetnal-info-experience");
  let i = 1;
  const interval = setInterval(() => {
    el.innerHTML = `${i}+ <span>Year's Experience</span>`;
    if (i === 10) clearInterval(interval);
    i++;
  }, 200);
}

function startProjectCounter() {
  const el = document.getElementById("incremetnal-info-projects");
  let i = 1;
  const interval = setInterval(() => {
    el.innerHTML = `${i}+ <span>Project's Complete</span>`;
    if (i === 100) clearInterval(interval);
    i++;
  }, 20);
}

function startServiceCounter() {
  const el = document.getElementById("incremetnal-info-services");
  let i = 1;
  const interval = setInterval(() => {
    el.innerHTML = `${i}+ <span>Services</span>`;
    if (i === 20) clearInterval(interval);
    i++;
  }, 100);
}

// ✅ Intersection Observer to detect when section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        startExperienceCounter();
        startProjectCounter();
        startServiceCounter();
        started = true; // only run once
      }
    });
  },
  {
    threshold:0.7, // 50% of element should be visible
  }
);

// 👇 Observe the counter section
observer.observe(document.getElementById("counter-section"));
//to initialize the the animation 
AOS.init();