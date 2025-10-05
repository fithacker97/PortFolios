document.addEventListener("DOMContentLoaded", () => {
    const typSpans = document.querySelectorAll(".typ");

    typSpans.forEach(typSpan => {
        const text = typSpan.textContent;
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typSpan.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Typing speed
            } else {
                setTimeout(() => {
                    typSpan.textContent = "";
                    i = 0;
                    typeWriter();
                }, 5000); // Wait 5 seconds before repeating
            }
        }

        typSpan.textContent = "";
        typeWriter();
    });
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
