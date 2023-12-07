const toggleButton = document.querySelector('[data-collapse-toggle="navbar-solid-bg"]');
const mobileMenu = document.getElementById('navbar-solid-bg');

toggleButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('block');
});


const carousel = document.querySelector('[data-carousel="static"]');
const carouselItems = Array.from(document.querySelectorAll('[data-carousel-item]'));
const prevButton = document.querySelector('[data-carousel-prev]');
const nextButton = document.querySelector('[data-carousel-next]');

let currentIndex = 0;

function showItem(index) {
    carouselItems.forEach((item, i) => {
        if (i === index) {
            item.classList.remove('hidden');
            item.classList.add('block');
        } else {
            item.classList.remove('block');
            item.classList.add('hidden');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
});

// Show the initial item
showItem(currentIndex);