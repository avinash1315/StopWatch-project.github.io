// Global variables for fetching elements
const watch_elem = document.querySelector('.time-count');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let counter = 0;
let interval_id = null;

// Event listeners for watch control buttons
start_btn.addEventListener("click", startWatch);
stop_btn.addEventListener("click", stopWatch);
reset_btn.addEventListener("click", resetWatch);

// updating the time on screen
function timer () {
	counter++;

	// Formatting the counter to standard time
	let hrs = Math.floor(counter / 3600);
	let mins = Math.floor((counter - (hrs * 3600)) / 60);
	let secs = counter % 60;

	if (secs < 10) secs = "0" + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	watch_elem.innerText = `${hrs}:${mins}:${secs}`;
}

function startWatch () {
	if (interval_id) {
		return
	}

	interval_id = setInterval(timer, 1000);
}

function stopWatch () {
	clearInterval(interval_id);
	interval_id = null;
}

function resetWatch () {
	stopWatch();
	counter = 0;
	watch_elem.innerText = '00:00:00';
}