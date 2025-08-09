let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = `${h}:${m}:${s}`;
}

function startStop() {
    if (!running) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = "Pause";
        startStopBtn.style.backgroundColor = "orange";
        running = true;
    } else {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
        startStopBtn.style.backgroundColor = "green";
        running = false;
    }
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    running = false;
    updateDisplay();
    startStopBtn.textContent = "Start";
    startStopBtn.style.backgroundColor = "green";
    laps.innerHTML = "";
}

function addLap() {
    if (running) {
        let li = document.createElement("li");
        li.textContent = display.textContent;
        laps.appendChild(li);
    }
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", addLap);

updateDisplay();
