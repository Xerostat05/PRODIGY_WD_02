let startTime, updateTime, elapsedTime = 0;
let running = false;

function startStopwatch() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    updateTime = setInterval(updateDisplay, 1000);
    running = true;
  }
}

function pauseStopwatch() {
  if (running) {
    clearInterval(updateTime);
    elapsedTime = Date.now() - startTime;
    running = false;
  }
}

function resetStopwatch() {
  clearInterval(updateTime);
  startTime = null;
  elapsedTime = 0;
  running = false;
  document.getElementById('display').innerText = "00:00:00";
  document.getElementById('laps').innerHTML = "";
}

function lapTime() {
  if (running) {
    let lapTime = elapsedTime + (Date.now() - startTime);
    let laps = document.getElementById('laps');
    let lapElement = document.createElement('div');
    lapElement.innerText = formatTime(lapTime);
    laps.appendChild(lapElement);
  }
}

function updateDisplay() {
  elapsedTime = Date.now() - startTime;
  document.getElementById('display').innerText = formatTime(elapsedTime);
}

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}
