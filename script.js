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
document.addEventListener("DOMContentLoaded", function () {
    const catFactElement = document.getElementById("catFact");
    const catUrl = "https://catfact.ninja/fact";

    fetch(catUrl)
        .then(response => response.json())
        .then(data => {
            catFactElement.innerText = data.fact;
        })
        .catch(error => {
            console.error("Error fetching cat fact:", error);
            catFactElement.innerText = "Failed to load cat fact.";
        });
});
document.addEventListener("DOMContentLoaded", function () {

    function initializeCarousel(carousel) {
        const carouselInner = carousel.querySelector('.carousel-inner');
        const carouselItems = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showNextImage() {
            carouselItems[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carouselItems[currentIndex].classList.add('active');
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }


        setInterval(showNextImage, 10000);
    }

    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(initializeCarousel);
});
