document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DE TU FUNCIÓN ORIGINAL (CUPÓN DE CAFÉ) ---
    const coffeeCup = document.getElementById("coffee-cup");
    if (coffeeCup) {
        coffeeCup.addEventListener("click", function() {
            const popup = document.getElementById("coffee-popup");
            popup.classList.toggle("hidden");
        });
    }

    // --- LÓGICA DEL CARRUSEL Y MODAL ---

    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.project-slide'));
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const modal = document.getElementById("infoModal");
    const closeBtn = document.querySelector(".close-btn");
    const modalTitle = document.getElementById("modal-title");
    const modalInfo = document.getElementById("modal-info");
    const modalLink = document.getElementById("modal-link");

    if (track && slides.length > 0) {
        const slidesToShow = 3;
        let slideIndex = 0;
        
        // El offsetWidth se calcula al cargar, asegurando la precisión del movimiento
        const slideWidth = slides[0].offsetWidth; 

        const moveSlides = () => {
            track.style.transform = 'translateX(-' + (slideIndex * slideWidth) + 'px)';
        };

        nextButton.addEventListener('click', () => {
            slideIndex = (slideIndex < slides.length - slidesToShow) ? slideIndex + 1 : 0;
            moveSlides();
        });

        prevButton.addEventListener('click', () => {
            slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - slidesToShow;
            moveSlides();
        });

        // Evento de click para abrir el Modal
        slides.forEach(slide => {
            slide.addEventListener('click', () => {
                modalTitle.textContent = slide.getAttribute('data-title');
                modalInfo.textContent = slide.getAttribute('data-info');
                
                // Simulación de enlace para el tutorial
                modalLink.href = "#tutorial-" + slide.getAttribute('data-title').toLowerCase().replace(/\s/g, '-');

                modal.style.display = "block";
            });
        });
    }

    // Cerrar Modal con la 'X' y al hacer click fuera
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
