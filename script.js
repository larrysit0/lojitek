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

    const slidesToShow = 3; // Muestra 3 imágenes a la vez
    let slideIndex = 0;

    if (track && slides.length > 0) {
        
        // Función clave para calcular el ancho y mover los slides (CORREGIDA)
        const updateCarousel = () => {
            if (slides.length === 0) return;
            
            // Usamos clientWidth para obtener el ancho visible exacto de un slide
            const slideWidth = slides[0].clientWidth; 
            
            // Aplicamos el ancho total del track
            track.style.width = `${slides.length * slideWidth}px`;
            
            // Movemos el carrusel a la posición actual
            track.style.transform = 'translateX(-' + (slideIndex * slideWidth) + 'px)';
        };
        
        // Llamar al inicio y cuando se redimensiona
        updateCarousel();
        window.addEventListener('resize', updateCarousel);


        // Función para los botones de navegación
        nextButton.addEventListener('click', () => {
            if (slideIndex < slides.length - slidesToShow) {
                slideIndex++;
            } else {
                slideIndex = 0; // Bucle al inicio
            }
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            if (slideIndex > 0) {
                slideIndex--;
            } else {
                slideIndex = slides.length - slidesToShow; // Bucle al final
            }
            updateCarousel();
        });

        // Evento de click para abrir el Modal
        slides.forEach(slide => {
            slide.addEventListener('click', () => {
                modalTitle.textContent = slide.getAttribute('data-title');
                modalInfo.textContent = slide.getAttribute('data-info');
                
                // Simulación de enlace para el tutorial
                modalLink.href = "ENLACE_A_TU_VIDEO_O_PAGINA_DE_" + slide.getAttribute('data-title').replace(/\s/g, '_'); 

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
