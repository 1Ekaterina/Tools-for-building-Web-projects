import { formatError } from "./common.js";

const startButton = document.querySelector("#start").addEventListener("click", startTimer);
const stopButton = document.querySelector("#stop").addEventListener("click", stopTimer);
const audio = new Audio('alarm.mp3')
minutes.value = 0;
seconds.value = 0;
let timerId = null;

function startTimer() {
	if (minutes.value == 0 && seconds.value == 0) {
		taimer_result.innerHTML = formatError("Веедите требуемое время.")
	} else if (timerId == null) {
		taimer_result.innerHTML = "";
		timerId = setInterval(function () {
			if (minutes.value == 0 && seconds.value == 0) {
				audio.play()
				clearInterval(timerId);
				timerId = null;
				minutes.value = "";
				seconds.value = "";
				taimer_result.innerHTML = formatError("Время закончилось!")
			} else if (seconds.value == 0) {
				minutes.value--
				seconds.value = 59;
			} else {
				seconds.value--
			}
		}, 1000);
	}
}

function stopTimer() {
	clearInterval(timerId);
	timerId = null;
}

