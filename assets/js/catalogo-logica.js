// assets/js/catalogo-logica.js

// 1. Seleccionamos los elementos del HTML
const gridPeliculas = document.getElementById("movies-grid");
const inputBuscador = document.getElementById("search-input");
const listaAutocompletado = document.getElementById("autocomplete-list");
const botonesFiltro = document.querySelectorAll(".filtro-btn");

// 2. LA FUNCIÓN CEREBRO (Soluciona el bug de los filtros cruzados)
function actualizarCatalogo() {
  const textoBuscado = inputBuscador.value.toLowerCase();

  // Buscamos qué botón tiene la clase 'active' en este momento
  const botonActivo = document.querySelector(".filtro-btn.active");
  const generoSeleccionado = botonActivo
    ? botonActivo.getAttribute("data-genero")
    : "Todos";

  // Filtramos la base de datos pasando por ambos embudos a la vez
  const peliculasFiltradas = movies.filter((pelicula) => {
    // Embudo 1: ¿Coincide el texto escrito con el título?
    const coincideTexto = pelicula.title.toLowerCase().includes(textoBuscado);

    // Embudo 2: ¿Coincide el género con el botón pulsado?
    const coincideGenero =
      generoSeleccionado === "Todos" ||
      pelicula.genres.includes(generoSeleccionado);

    // Solo mostramos la película si pasa LOS DOS embudos
    return coincideTexto && coincideGenero;
  });

  renderizarPeliculas(peliculasFiltradas);
}

// 3. PINTAR LAS PELÍCULAS (Con estilo Tarjeta Horizontal / Netflix)
function renderizarPeliculas(lista) {
  gridPeliculas.innerHTML = "";

  if (lista.length === 0) {
    gridPeliculas.innerHTML =
      '<p style="text-align: center; grid-column: 1/-1; opacity: 0.7;">No se encontraron películas con esos criterios.</p>';
    return;
  }

  lista.forEach((pelicula) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "catalog-movie-card";
    tarjeta.onclick = () =>
      (window.location.href = `detalles.html?id=${pelicula.id}`);

    // Si la peli tiene bgImage usa esa, si no usa la image normal
    const imagenHorizontal = pelicula.bgImage
      ? pelicula.bgImage
      : pelicula.image;

    tarjeta.innerHTML = `
      <img src="${imagenHorizontal}" alt="${pelicula.title}" class="catalog-movie-img">
      <div class="catalog-movie-info">
        <div class="info-text">
            <h3 class="card-title">${pelicula.title}</h3>
            <span class="card-year">${pelicula.year}</span>
        </div>
        <span class="card-rating">${pelicula.rating}</span>
      </div>
    `;

    gridPeliculas.appendChild(tarjeta);
  });
}

// 4. ESCUCHAMOS CLICS EN LOS BOTONES
botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesFiltro.forEach((b) => b.classList.remove("active"));
    boton.classList.add("active");

    // Limpiamos el autocompletado visualmente pero no borramos el input
    listaAutocompletado.innerHTML = "";
    actualizarCatalogo(); // Llamamos al cerebro
  });
});

// 5. ESCUCHAMOS EL TECLADO EN EL BUSCADOR
inputBuscador.addEventListener("input", (evento) => {
  actualizarCatalogo(); // Llamamos al cerebro al teclear o al borrar

  // Lógica exclusiva para pintar el menú desplegable visual
  const texto = evento.target.value.toLowerCase();
  listaAutocompletado.innerHTML = "";

  if (texto === "") return; // Si está vacío, no hay desplegable

  // Solo sugerimos títulos (ignorando el filtro de género para el autocompletar)
  const coincidencias = movies.filter((p) =>
    p.title.toLowerCase().includes(texto),
  );

  coincidencias.forEach((peli) => {
    const li = document.createElement("li");
    li.className = "autocomplete-item";
    li.textContent = peli.title;

    // Si hace clic en la sugerencia
    li.addEventListener("click", () => {
      inputBuscador.value = peli.title; // Autocompleta
      listaAutocompletado.innerHTML = ""; // Cierra el menú
      actualizarCatalogo(); // Vuelve a ejecutar el cerebro con el título entero
    });
    listaAutocompletado.appendChild(li);
  });
});

// 6. ARRANQUE INICIAL
document.addEventListener("DOMContentLoaded", actualizarCatalogo);
