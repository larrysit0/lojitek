document.getElementById("coffee-cup").addEventListener("click", function() {
    const popup = document.getElementById("coffee-popup");
    popup.classList.toggle("hidden");
});

// Nueva funcionalidad para el botón de Donar con Crypto
document.getElementById("crypto-button").addEventListener("click", function() {
    const cryptoAddresses = document.getElementById("crypto-addresses");
    
    // Toggle para mostrar/ocultar las direcciones
    if (cryptoAddresses.style.display === "block") {
        cryptoAddresses.style.display = "none";
        this.textContent = "Donar con Crypto ₿";
    } else {
        cryptoAddresses.style.display = "block";
        this.textContent = "OCULTAR Direcciones";
    }
});

// Nota: La funcionalidad completa de la Ruleta requiere un código más extenso
// (dibujar con Canvas o SVG, lógica de giro y detención).
// Si quieres el código de la ruleta, ¡dímelo!
