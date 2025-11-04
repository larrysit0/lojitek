document.addEventListener('DOMContentLoaded', () => {
    // --- FUNCIÓN ORIGINAL: Invítame un Café (Yape) ---
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
        const slidesToShow = 3; // Muestra 3 imágenes a la vez
        let slideIndex = 0;
        
        // Se calcula el ancho del slide una vez que la página está cargada
        const slideWidth = slides[0].offsetWidth; 

        const moveSlides = () => {
            track.style.transform = 'translateX(-' + (slideIndex * slideWidth) + 'px)';
        };
        
        // Función para los botones de navegación
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
                
                // Aquí deberías colocar el enlace real al tutorial o información
                modalLink.href = "ENLACE_A_TU_VIDEO_O_PAGINA_DE_" + slide.getAttribute('data-title').replace(/\s/g, '_'); 

                modal.style.display = "block";
            });
        });
    }

    // Cerrar Modal con la 'X'
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }
    // Cerrar Modal al hacer click fuera
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
