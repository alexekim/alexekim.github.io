let seconds = 0;
let interval = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  display.textContent =
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0");
}

startBtn.addEventListener("click", () => {
  if (interval) return; // prevent multiple timers

  interval = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateDisplay();
});
