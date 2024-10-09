window.addEventListener('load', function() {
    if (window.location.hash) {
        // Si hay un hash en la URL, redirigir a la URL base sin el hash
        window.location.href = window.location.origin + window.location.pathname;
    }
});