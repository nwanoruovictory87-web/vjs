const timerRef = document.querySelector("#timer");
let seconds = 0;
let minites = 0;
let hours = 0;
let stopTime = false;
function stopTimer() {
  stopTime = true;
}
function playTimer() {
  stopTime = false;
}
setInterval(() => {
  if (stopTime) return;
  if (seconds === 60) {
    seconds = 1;
    if (minites === 60) {
      minites = 0;
      if (hours === 24) {
        hours = 0;
      } else {
        hours += 1;
      }
    } else {
      minites += 1;
    }
  } else {
    seconds += 1;
  }
  const time = `${hours >= 10 ? hours : `0${hours}`}:${minites >= 10 ? minites : `0${minites}`}:${seconds >= 10 ? seconds : `0${seconds}`}`;
  timerRef.textContent = time;
}, 1000);
