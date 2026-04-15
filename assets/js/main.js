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
  if (btnTheme)
    btnTheme.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>';
} else {
  // Si no dice nada o dice 'dark', nos aseguramos de que el botón sea un sol
  if (btnTheme)
    btnTheme.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
}

// 2. La función que cambia la clase, el icono Y GUARDA en la memoria
function switchTheme() {
  document.documentElement.classList.toggle("light");

  // Preguntamos: ¿Está el modo claro activado ahora mismo?
  const esModoClaro = document.documentElement.classList.contains("light");

  if (esModoClaro) {
    if (btnTheme)
      btnTheme.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>';
    localStorage.setItem("miTema", "light"); // 💾 Guardamos en la memoria
  } else {
    if (btnTheme)
      btnTheme.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
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
