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