const lamp1 = document.getElementById('lampada-01');
const lamp2 = document.getElementById('lampada-02');

// Ligar e desligar clicando
let lamp1Ligada = false;
lamp1.addEventListener('click', () => {
  if (lamp1Ligada) {
    lamp1.src = 'lampada.jpg';
    lamp1Ligada = false;
  } else {
    lamp1.src = 'lampada-on.jpg';
    lamp1Ligada = true;
  }
});

// Ligar quando o mouse passar por cima
let lamp2Ligada = false;
lamp2.addEventListener('mouseout', () => {
  if (!lamp2Ligada) {
    lamp2.src = 'lampada-on.jpg';
    lamp2Ligada = true;
  } else {
    lamp2.src = 'lampada.jpg';
    lamp2Ligada = false;
  }
});