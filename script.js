
document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav__links--open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      navLinks.classList.remove("nav__links--open");
    }
  });
}


const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((el) => observer.observe(el));


const heroTypeTarget = document.getElementById("hero-typewriter");

const typeText = "Hi, I'm Payal Jain";
let typeIndex = 0;

function typeWriter() {
  if (!heroTypeTarget) return;
  if (typeIndex <= typeText.length) {
    heroTypeTarget.textContent = typeText.slice(0, typeIndex);
    typeIndex++;
    setTimeout(typeWriter, 80); 
  }
}

typeWriter();


const roles = [ "Data Analyst", "AI Developer", "ML Developer",];
const roleElement = document.getElementById("role-rotator");

let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const roleTypingSpeed = 110;  
const roleDeletingSpeed = 60; 
const rolePauseTime = 1200;   

function rotateRole() {
  if (!roleElement) return;

  const currentRole = roles[currentRoleIndex];

  if (!isDeleting) {

    roleElement.textContent = currentRole.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentRole.length) {

      isDeleting = true;
      setTimeout(rotateRole, rolePauseTime);
      return;
    }
  } else {

    roleElement.textContent = currentRole.substring(0, currentCharIndex - 1);
    currentCharIndex--;

    if (currentCharIndex === 0) {

      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }
  }

  setTimeout(rotateRole, isDeleting ? roleDeletingSpeed : roleTypingSpeed);
}

rotateRole();
