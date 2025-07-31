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