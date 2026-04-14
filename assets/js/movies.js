// assets/js/detalles-logica.js

// 1. Variable para saber en qué película estamos (0 es la primera película de nuestro array)
let currentIndex = 0;

// 2. Esta es la función principal que coge los datos de movies.js y los inyecta en el HTML
function loadMovie(index) {
  // Sacamos la película correspondiente del array
  const movie = movies[index];

  // Inyectamos los textos simples buscando el ID correspondiente en el HTML
  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById("movie-year").textContent = movie.year;
  document.getElementById("movie-rating").textContent = movie.rating;
  document.getElementById("movie-duration").textContent = movie.duration;
  document.getElementById("movie-score").textContent = movie.score;
  document.getElementById("movie-description").textContent = movie.description;
  document.getElementById("movie-curiosities").textContent = movie.curiosities;

  // Cambiamos la imagen de la tarjeta pequeña
  document.getElementById("movie-poster").style.backgroundImage =
    `url('${movie.image}')`;

  // 🚀 MAGIA EXTRA: Cambiamos también el fondo gigante de toda la pantalla
  const container = document.querySelector(".movie-detail-container");
  container.style.backgroundImage = `linear-gradient(rgba(30, 27, 38, 0.95), rgba(30, 27, 38, 0.95)), url('${movie.image}')`;

  // --- INYECTAR GÉNEROS DINÁMICAMENTE ---
  const genresContainer = document.getElementById("movie-genres");
  genresContainer.innerHTML = ""; // Limpiamos los géneros de la película anterior

  // Recorremos el array de géneros de esta película y creamos los spans
  movie.genres.forEach((genre) => {
    const span = document.createElement("span");
    span.className = "genre-tag";
    span.textContent = genre;
    genresContainer.appendChild(span);
  });

  // --- INYECTAR ACTORES DINÁMICAMENTE ---
  const castContainer = document.getElementById("movie-cast");
  castContainer.innerHTML = ""; // Limpiamos los actores anteriores

  movie.cast.forEach((actor) => {
    // Usamos Template Literals para inyectar bloques de HTML
    castContainer.innerHTML += `
      <div class="cast-item">
        <img src="${actor.photo}" class="cast-photo" alt="${actor.name}" />
        <span class="cast-name">${actor.name}</span>
      </div>
    `;
  });
}

// 3. Darle vida a los botones de "Siguiente" y "Anterior"
document.getElementById("next-btn").addEventListener("click", () => {
  // Sumamos 1. Si llegamos al final de la lista, volvemos a la posición 0.
  currentIndex = (currentIndex + 1) % movies.length;
  loadMovie(currentIndex); // Cargamos la nueva peli
});

document.getElementById("prev-btn").addEventListener("click", () => {
  // Restamos 1. Si estamos en la posición 0, vamos a la última película.
  currentIndex = (currentIndex - 1 + movies.length) % movies.length;
  loadMovie(currentIndex); // Cargamos la nueva peli
});

// 4. Cuando la página termine de cargar, mostramos la primera película automáticamente
document.addEventListener("DOMContentLoaded", () => {
  loadMovie(currentIndex);
});
