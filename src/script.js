const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
let index = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % totalImages;
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
});

function updateCarousel() {
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}
