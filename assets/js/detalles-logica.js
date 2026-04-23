// assets/js/detalles-logica.js

// 1. Leemos la URL actual de la página
const parametrosURL = new URLSearchParams(window.location.search);

// 2. Extraemos el valor que va después de "?id="
const idEnURL = parametrosURL.get("id");

// 3. Si hay un ID en la URL, lo usamos. Si no hay nada (entró directo), cargamos el 0 por defecto.
let currentIndex = idEnURL !== null ? parseInt(idEnURL) : 0;

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
  
  const moviePoster = document.getElementById("movie-poster");
  if (moviePoster) {
    moviePoster.style.backgroundImage = `url('${movie.image}')`;
  }
  const container = document.querySelector(".movie-detail-container");
  if (container) {
    container.style.backgroundImage = `
      linear-gradient(to bottom, transparent 0%, var(--dark-color) 100%),
      linear-gradient(to right, var(--dark-color) 0%, var(--bg-overlay) 50%, var(--dark-color) 100%),
      url('${movie.bgImage}')
    `;
  }
  
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

  // 5. Lógica del botón trailer
  const trailerLink = document.getElementById("movie-trailer-link");

  if (movie.trailer) {
    // SI HAY TRÁILER: Lo activamos
    trailerLink.href = movie.trailer; // Le ponemos la URL de YouTube
    trailerLink.setAttribute("target", "_blank"); // Hacemos que abra en pestaña nueva
    trailerLink.classList.remove("disabled"); // Le quitamos el color gris
  } else {
    // SI NO HAY TRÁILER: Lo desactivamos
    trailerLink.removeAttribute("href"); // Quitamos el enlace para que al clicar no recargue la página
    trailerLink.removeAttribute("target");
    trailerLink.classList.add("disabled"); // Le ponemos la clase gris y el cursor prohibido
  }
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
