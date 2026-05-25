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

  // --- INICIO CÓDIGO ESTRELLAS ---
  const starsContainer = document.querySelector(".stars");
  let scoreNum = parseFloat(movie.score);

  // Si la película no tiene nota (ej. "N/A"), limpiamos las estrellas
  if (isNaN(scoreNum)) {
    starsContainer.innerHTML = "";
    document.getElementById("movie-score").textContent = "N/A";
  } else {
    // Calculamos estrellas completas y el porcentaje de la parcial
    const fullStars = Math.floor(scoreNum);
    const decimalPart = scoreNum - fullStars;
    const percentage = Math.round(decimalPart * 100);

    // Seleccionamos los 'stops' de tu gradiente en el HTML y actualizamos su offset
    const stops = document.querySelectorAll("#halfGradient stop");
    if (stops.length >= 2) {
      stops[0].setAttribute("offset", `${percentage}%`);
      stops[1].setAttribute("offset", `${percentage}%`);
    }

    let starsHTML = "";
    // El path exacto del SVG que usaste en tu HTML
    const svgPath =
      "M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z";

    // Bucle para generar siempre 5 estrellas
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        // Estrella completa dorada
        starsHTML += `<svg class="star star-filled" viewBox="0 0 24 24"><path d="${svgPath}"/></svg>`;
      } else if (i === fullStars + 1 && percentage > 0) {
        // Estrella parcial usando tu gradiente
        starsHTML += `<svg class="star star-half" viewBox="0 0 24 24"><path d="${svgPath}"/></svg>`;
      } else {
        // Estrella vacía
        starsHTML += `<svg class="star star-empty" viewBox="0 0 24 24"><path d="${svgPath}"/></svg>`;
      }
    }

    // Inyectamos el HTML generado y el texto de la nota
    starsContainer.innerHTML = starsHTML;
    document.getElementById("movie-score").textContent = movie.score;
  }
  // --- FIN CÓDIGO ESTRELLAS ---

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
