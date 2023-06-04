let countdown;
let secondsLeft = 0;
let timerIsRunning = false;

const timerDisplay = document.querySelector('.timer__display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const preset = document.querySelector('.preset__list');
const presetCreator = document.querySelector('.input__list')

preset.addEventListener('click', presetTime);
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
presetCreator.addEventListener('click', createPreset);

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  
  countdown = setInterval(() => {
    secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function startTimer() {
  if (timerIsRunning) return;
  timer(secondsLeft);
  timerIsRunning = true;
}

function stopTimer() {
  clearInterval(countdown);
  timerIsRunning = false;
}

function resetTimer() {
  clearInterval(countdown);
  secondsLeft = 0;
  displayTimeLeft(secondsLeft);
  timerIsRunning = false;
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function presetTime(event) {
  const buttonValue = event.target.value;
  clearInterval(countdown);
  secondsLeft = buttonValue * 60;
  displayTimeLeft(secondsLeft);
  timerIsRunning = false;
}


function createPreset(event){





}