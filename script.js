// Fonction pour afficher l'image en grand
function enlargeImage(src) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = src;
}

// Fonction pour fermer le modal
function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
}
// Toggle menu pour mobile
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselImages = document.querySelector('.carousel-images');
    slideIndex = index;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    carouselImages.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Auto swipe every 5 seconds
setInterval(nextSlide, 5000);
