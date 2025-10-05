document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav a').forEach(link => {
    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);

    // On hover → add glow
    link.addEventListener('mouseenter', () => {
      section.classList.add('glow');
    });

    // On hover out → remove glow
    link.addEventListener('mouseleave', () => {
      section.classList.remove('glow');
    });
  });
});

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


