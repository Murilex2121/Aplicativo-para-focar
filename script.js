let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;
let audio = null;

function updateDisplay() {
  const timerEl = document.getElementById('timer');
  timerEl.textContent = \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        alert("Tempo encerrado!");
        isRunning = false;
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  isRunning = false;
  updateDisplay();
}

function playMusic() {
  const musicSelect = document.getElementById('music');
  const choice = musicSelect.value;
  if (audio) audio.pause();

  if (choice) {
    audio = new Audio('assets/' + choice + '.mp3');
    audio.loop = true;
    audio.play();
  }
}

updateDisplay();