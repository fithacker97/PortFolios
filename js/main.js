// Grab button and dropdown content
const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

// Toggle dropdown on button click
dropbtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

// Close dropdown if clicked outside
window.addEventListener("click", (e) => {
  if (!e.target.matches(".dropbtn")) {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  }
});


const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 200; // controls speed

    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});



const texts = [
  "Backend Developer",
  "Web Developer",
  "Python & Go Developer",
  "Cloud Enthusiast",
  "API Designer",
  "Open Source Contributor",
  "Database Administrator"
];

const element = document.querySelector(".webdev");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = texts[textIndex];
  element.textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 200);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

