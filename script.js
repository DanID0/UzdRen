function updateClock() {
    const now = new Date();
    const remainingSeconds =
        24 * 60 * 60 - (now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds());

    const hours = Math.floor(remainingSeconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((remainingSeconds % 3600) / 60).toString().padStart(2, "0");
    const seconds = Math.floor(remainingSeconds % 60).toString().padStart(2, "0");

    const timeString = `<div class="Hours">${hours}</div> : 
                        <div class="Minutes">${minutes}</div> : 
                        <div class="Seconds">${seconds}</div>`;

    document.getElementById("clock-timer").innerHTML = timeString;
}

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            updateClock(); 
            setInterval(updateClock, 1000);
        }, { once: true });
    }
});
