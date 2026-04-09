// 1. Seleccionamos el botón usando su ID
const btnTheme = document.getElementById('theme-toggle');

// 2. La función que cambia la clase y el icono
function switchTheme() {
    // Ponemos o quitamos la clase .light en la etiqueta <html>
    document.documentElement.classList.toggle('light');
    
    // Cambiamos el icono del botón para que tenga sentido visualmente
    if (document.documentElement.classList.contains('light')) {
        btnTheme.textContent = '🌙'; // Si es de día, mostramos la luna
    } else {
        btnTheme.textContent = '☀️'; // Si es de noche, mostramos el sol
    }
}

// 3. Escuchamos el clic en el botón
btnTheme.addEventListener('click', () => {
    // Si el navegador no soporta esta tecnología súper nueva, cambiamos sin animación
    if (!document.startViewTransition) {
        switchTheme();
        return;
    }

    // Si la soporta, ¡que empiece la magia!
    document.startViewTransition(switchTheme);
});