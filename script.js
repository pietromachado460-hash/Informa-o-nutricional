const chocolateTop = document.querySelector(".chocolate-top");
const chocolatePieces = document.querySelectorAll(".row span");
const caloriesNumber = document.querySelector(".calories-info span");

// brilho automático no topo
function startShine() {
  chocolateTop.classList.add("shine");

  setTimeout(() => {
    chocolateTop.classList.remove("shine");
  }, 1800);
}

startShine();
setInterval(startShine, 4000);

// hover alternando quadradinhos da barra
chocolatePieces.forEach((piece, index) => {
  piece.addEventListener("mouseenter", () => {
    piece.classList.add("hovered");
  });

  piece.addEventListener("mouseleave", () => {
    piece.classList.remove("hovered");
  });

  // entrada com atraso
  setTimeout(() => {
    piece.classList.add("hovered");

    setTimeout(() => {
      piece.classList.remove("hovered");
    }, 250);
  }, index * 120);
});

// contador animado das calorias
const finalValue = 135;
let currentValue = 0;

function animateCalories() {
  const interval = setInterval(() => {
    currentValue += 3;

    if (currentValue >= finalValue) {
      currentValue = finalValue;
      clearInterval(interval);
    }

    caloriesNumber.textContent = currentValue;
  }, 25);
}

window.addEventListener("load", animateCalories);
