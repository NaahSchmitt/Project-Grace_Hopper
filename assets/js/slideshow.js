let currentSlide = 0;
const slides = document.querySelectorAll(".slide-image");

function changeSlide(newSlide) {
    currentSlide += newSlide;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    console.log({currentSlide, total: slides.length})
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

// Inicializa o slide
changeSlide(0);

// Função para avançar ou voltar no slide
function nextSlide() {
    changeSlide(1);
}

function prevSlide() {
    changeSlide(-1);
}