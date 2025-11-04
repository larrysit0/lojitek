document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DE DONACIONES (EXISTENTE) ---
    
    // 1. Invítame un Café (Yape)
    document.getElementById("coffee-cup").addEventListener("click", function() {
        const popup = document.getElementById("coffee-popup");
        popup.classList.toggle("hidden");
    });

    // 2. Donar con Crypto
    const cryptoButton = document.getElementById("crypto-button");
    const cryptoAddresses = document.getElementById("crypto-addresses");
    if (cryptoButton) {
        cryptoButton.addEventListener("click", function() {
            if (cryptoAddresses.style.display === "block") {
                cryptoAddresses.style.display = "none";
                this.textContent = "Donar con Crypto ₿";
            } else {
                cryptoAddresses.style.display = "block";
                this.textContent = "OCULTAR Direcciones";
            }
        });
    }

    // --- LÓGICA DEL CARRUSEL Y MODAL (NUEVA) ---

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
        
        // Se calcula el ancho del slide una vez que la página está cargada
        const slideWidth = slides[0].offsetWidth;

        const moveSlides = () => {
            track.style.transform = 'translateX(-' + (slideIndex * slideWidth) + 'px)';
        };

        nextButton.addEventListener('click', () => {
            if (slideIndex < slides.length - slidesToShow) {
                slideIndex++;
            } else {
                slideIndex = 0; // Bucle
            }
            moveSlides();
        });

        prevButton.addEventListener('click', () => {
            if (slideIndex > 0) {
                slideIndex--;
            } else {
                slideIndex = slides.length - slidesToShow; // Bucle
            }
            moveSlides();
        });

        // Evento de click para abrir el Modal
        slides.forEach(slide => {
            slide.addEventListener('click', () => {
                modalTitle.textContent = slide.getAttribute('data-title');
                modalInfo.textContent = slide.getAttribute('data-info');
                
                // Aquí puedes configurar el link específico si lo tienes
                modalLink.href = "TU_LINK_DEL_TUTORIAL_DE_" + slide.getAttribute('data-title').replace(/\s/g, '_'); 

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
