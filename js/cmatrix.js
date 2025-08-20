const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Fullscreen canvas
canvas.height = window.innerHeight;
canvas.width = document.querySelector(".cmatrix").offsetWidth;

const letters = "アァイィウエカキクケコサシスセソタチツテナニヌネハヒフヘホマミムメヤユヨラリルレワンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  // Background fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0051ffff"; // green text
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const char = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(char, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// Optional: update canvas on resize
window.addEventListener("resize", () => {
  canvas.width = document.querySelector(".cmatrix").offsetWidth;
  canvas.height = window.innerHeight;
});


function startMatrix(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  // Set canvas size
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const letters = "01";
  const fontSize = 12;
  const columns = canvas.width / fontSize;
  const drops = Array.from({ length: columns }).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0051ffff";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = letters[Math.floor(Math.random() * letters.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 50);
}

document.addEventListener("DOMContentLoaded", () => {
  startMatrix("matrixLeft");
  startMatrix("matrixRight");
});
