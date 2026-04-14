// assets/js/detalles-logica.js

let currentIndex = 0; // Empezamos en la posición 0 (Proyecto Salvación)

function loadMovie(index) {
  const movie = movies[index];

  // 1. Inyectamos los textos
  document.getElementById("movie-title").innerHTML =
    `${movie.title} <span class="year-badge" id="movie-year">${movie.year}</span>`;
  document.getElementById("movie-rating").textContent = movie.rating;
  document.getElementById("movie-duration").textContent = movie.duration;
  document.getElementById("movie-score").textContent = movie.score;
  document.getElementById("movie-description").textContent = movie.description;
  document.getElementById("movie-curiosities").textContent = movie.curiosities;
  document.getElementById("movie-poster").style.backgroundImage =
    `url('${movie.image}')`;

  // 2. Cambiamos las imágenes dinámicamente
  document.getElementById("movie-poster").style.backgroundImage =
    `url('${movie.image}')`;
  const container = document.querySelector(".movie-detail-container");
  container.style.setProperty("--dynamic-bg", `url('${movie.image}')`);

  // 3. Inyectamos los géneros
  const genresContainer = document.getElementById("movie-genres");
  genresContainer.innerHTML = "";
  movie.genres.forEach((genre) => {
    const span = document.createElement("span");
    span.className = "genre-tag";
    span.textContent = genre;
    genresContainer.appendChild(span);
  });

  // 4. Inyectamos los actores (Cast)
  const castContainer = document.getElementById("movie-cast");
  castContainer.innerHTML = "";
  movie.cast.forEach((actor) => {
    castContainer.innerHTML += `
      <div class="cast-item">
        <img src="${actor.photo}" class="cast-photo" alt="${actor.name}" />
        <span class="cast-name">${actor.name}</span>
      </div>
    `;
  });
}

// Event Listeners de los botones
document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % movies.length;
  loadMovie(currentIndex);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + movies.length) % movies.length;
  loadMovie(currentIndex);
});

// Arrancamos el motor al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  loadMovie(currentIndex);
});
