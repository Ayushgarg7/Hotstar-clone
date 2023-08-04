const carousel = document.querySelector('.carousel-wrapper');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slider').length;

function slideCarousel() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    carousel.style.transform = `translateX(-${currentIndex * 20.38}%)`;
}

setInterval(slideCarousel, 2500);