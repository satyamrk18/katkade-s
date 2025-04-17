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
  const incrementalExperience = document.getElementById(
    "incremetnal-info-experience"
  );
  let i = 1;
  const interval = setInterval(() => {
    incrementalExperience.innerHTML = `${i}+ <span>Year's Experience</span>`;
    if (i === 10) clearInterval(interval);
    i++;
  }, 200);
}

function startProjectCounter() {
  const incrementalProject = document.getElementById(
    "incremetnal-info-projects"
  );
  let i = 1;
  const interval = setInterval(() => {
    incrementalProject.innerHTML = `${i}+ <span>Project's Complete</span>`;
    if (i === 100) clearInterval(interval);
    i++;
  }, 20);
}

function startServiceCounter() {
  const incrementalServices = document.getElementById(
    "incremetnal-info-services"
  );
  let i = 1;
  const interval = setInterval(() => {
    incrementalServices.innerHTML = `${i}+ <span>Services</span>`;
    if (i === 20) clearInterval(interval);
    i++;
  }, 100);
}

// ✅ Intersection Observer to detect when section is visible
const observer = new IntersectionObserver(
  (entries) => {
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
    threshold: 0.7, // 50% of element should be visible
  }
);

// 👇 Observe the counter section
observer.observe(document.getElementById("counter-section"));
//to initialize the the animation
AOS.init();
//scrolling cards horizontally
function scrollCards(direction) {
  const container = document.getElementById("cardContainer");
  const scrollAmount = 380;
  if (direction === "left") {
    container.scrollLeft -= scrollAmount;
  } else {
    container.scrollLeft += scrollAmount;
  }
}
//send email functionality
function sendEmail() {
  let param = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobileNumber: document.getElementById("phone").value,
    description: document.getElementById("description").value,
  };
  emailjs
    .send("service_hne8q1g", "template_ayp2wrh", param)
    .then(function (response) {
      alert("Your email has been sent successfully");
      setTimeout(() => window.location.reload(), 3000);
    });
    .catch(function(error) {
      alert("Failed to send email. Please try again.");
      console.error("Error:", error);
    });
}
