// 1. Seleccionamos el botón
const btnTheme = document.getElementById("theme-toggle");

// 🧠 NUEVO: Nada más cargar la página, leemos el bloc de notas (localStorage)
const temaGuardado = localStorage.getItem("miTema");

// logica de carrusel
const carousels = document.querySelectorAll(".carousel-wrapper");

carousels.forEach((wrapper) => {
  const track = wrapper.querySelector(".carousel-track");
  const prevBtn = wrapper.querySelector(".prev-btn");
  const nextBtn = wrapper.querySelector(".next-btn");

  // ESCUDO: Si a este carrusel le falta algún botón, no hacemos nada y evitamos errores
  if (!track || !prevBtn || !nextBtn) return;

  const scrollAmount = 290; // Cantidad a desplazar (220px de tarjeta + 70px de gap)

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});

// Si el bloc de notas dice que el tema es 'light', le ponemos la clase al HTML y cambiamos el icono
if (temaGuardado === "light") {
  document.documentElement.classList.add("light");
  if (btnTheme) btnTheme.textContent = "🌙";
} else {
  // Si no dice nada o dice 'dark', nos aseguramos de que el botón sea un sol
  if (btnTheme) btnTheme.textContent = "☀️";
}

// 2. La función que cambia la clase, el icono Y GUARDA en la memoria
function switchTheme() {
  document.documentElement.classList.toggle("light");

  // Preguntamos: ¿Está el modo claro activado ahora mismo?
  const esModoClaro = document.documentElement.classList.contains("light");

  if (esModoClaro) {
    if (btnTheme) btnTheme.textContent = "🌙";
    localStorage.setItem("miTema", "light"); // 💾 Guardamos en la memoria
  } else {
    if (btnTheme) btnTheme.textContent = "☀️";
    localStorage.setItem("miTema", "dark"); // 💾 Guardamos en la memoria
  }
}

// 3. Escuchamos el clic en el botón
if (btnTheme) {
  btnTheme.addEventListener("click", () => {
    if (!document.startViewTransition) {
      switchTheme();
      return;
    }
    document.startViewTransition(switchTheme);
  });
}
