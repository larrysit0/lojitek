// --- FUNCIONALIDAD EXISTENTE: DONACIONES ---

// 1. Invítame un Café (Yape)
document.getElementById("coffee-cup").addEventListener("click", function() {
    const popup = document.getElementById("coffee-popup");
    popup.classList.toggle("hidden");
});

// 2. Donar con Crypto
document.getElementById("crypto-button").addEventListener("click", function() {
    const cryptoAddresses = document.getElementById("crypto-addresses");
    
    if (cryptoAddresses.style.display === "block") {
        cryptoAddresses.style.display = "none";
        this.textContent = "Donar con Crypto ₿";
    } else {
        cryptoAddresses.style.display = "block";
        this.textContent = "OCULTAR Direcciones";
    }
});


// --- FUNCIONALIDAD NUEVA: CARRUSEL Y MODAL ---

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.project-slide'));
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const slideWidth = slides[0].offsetWidth;

    let slideIndex = 0;
    const slidesToShow = 3; // Cuántas imágenes mostrar a la vez
    
    // Función para mover el carrusel
    const moveSlides = () => {
        track.style.transform = 'translateX(-' + (slideIndex * slideWidth) + 'px)';
    };

    // Click en botón SIGUIENTE
    nextButton.addEventListener('click', () => {
        if (slideIndex < slides.length - slidesToShow) {
            slideIndex++;
        } else {
            // Vuelve al inicio
            slideIndex = 0;
        }
        moveSlides();
    });

    // Click en botón ANTERIOR
    prevButton.addEventListener('click', () => {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            // Va al final
            slideIndex = slides.length - slidesToShow; 
        }
        moveSlides();
    });
    
    // --- Lógica del Modal (Ventana Informativa) ---
    
    const modal = document.getElementById("infoModal");
    const closeBtn = document.querySelector(".close-btn");
    const modalTitle = document.getElementById("modal-title");
    const modalInfo = document.getElementById("modal-info");
    const modalLink = document.getElementById("modal-link");

    // Abrir Modal al hacer click en cualquier slide
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            // Captura la info y el título de los atributos 'data-' en el HTML
            modalTitle.textContent = slide.getAttribute('data-title');
            modalInfo.textContent = slide.getAttribute('data-info');
            
            // Asumiendo que el link del tutorial siempre es a YouTube (ajusta si es necesario)
            modalLink.href = "TU_LINK_YOUTUBE_DEL_TUTORIAL"; 

            modal.style.display = "block";
        });
    });

    // Cerrar Modal con el botón X
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Cerrar Modal al hacer click fuera de la ventana
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
