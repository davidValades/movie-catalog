# 🍿 MovieApp - Catálogo de Películas Dinámico

![Status](https://img.shields.io/badge/Estado-En_Progreso_🚀-2ea44f?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

Proyecto de desarrollo Frontend centrado en la creación de una interfaz de usuario moderna, interactiva y responsive para un catálogo de películas, simulando plataformas de streaming como Netflix o Prime Video.

![banner](https://i.ibb.co/vvKm6FZx/Captura-de-pantalla-2026-04-25-164552.png)

## ✨ Funcionalidades Principales

- **Motor de Catálogo Dinámico:** Página de exploración (`catalogo.html`) que renderiza tarjetas de películas dinámicamente a partir de una base de datos local (`movies.js`).
- **Búsqueda y Autocompletado:** Buscador en tiempo real que filtra resultados por título y ofrece un menú desplegable de sugerencias.
- **Filtrado por Categorías:** Sistema de botones interactivos para filtrar el catálogo por géneros (Acción, Sci-Fi, Drama, etc.) usando métodos de array en JavaScript.
- **Detalles Dinámicos:** Una única plantilla (`detalles.html`) que se recicla inyectando la información (título, sinopsis, cast, imagen de fondo, tráiler de YouTube) de la película seleccionada.
- **Modo Claro / Oscuro:** Implementación de _Dark Mode_ con guardado de preferencias en el navegador (`localStorage`) para que el tema persista al recargar.
- **Carruseles Interactivos:** Navegación horizontal con flechas laterales, _scroll-snap_ y efectos _Glassmorphism_.

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura accesible y modular.
- **CSS3 Avanzado:** Uso de CSS Grid, Flexbox, variables nativas (`:root`), transiciones y diseño Responsive.
- **JavaScript (Vanilla ES6):** Manipulación del DOM, eventos, `localStorage`, `filter()`, `forEach()` y control de estado de la UI sin frameworks adicionales.
- **Git & GitHub:** Control de versiones y flujos de trabajo con ramas (branches).

## 📁 Estructura del Proyecto

```text
movie-catalog/
├── index.html              # Página principal (Home con carruseles)
├── README.md
├── assets/
│   ├── css/
│   │   ├── main.css            # Estilos globales, Navbar y modo oscuro
│   │   ├── catalogo/style.css  # Layout del grid y barra de búsqueda
│   │   └── tarjetas/style.css  # Estilos de la vista de detalles
│   ├── images/                 # Pósteres y fondos de películas
│   └── js/
│       ├── movies.js           # Base de datos (Array de objetos)
│       ├── main.js             # Lógica global (Tema y Carruseles)
│       ├── catalogo-logica.js  # Motor de búsqueda y filtrado
│       └── detalles-logica.js  # Inyección de datos en la tarjeta
└── pages/
    ├── catalogo.html       # Vista del explorador de películas
    ├── detalles.html       # Plantilla dinámica para cada película
    ├── categorias.html     # (En desarrollo)
    ├── top10.html          # (En desarrollo)
    └── topPremiadas.html   # (En desarrollo)
```

## 📖 Guía Rápida para el Equipo (Comandos Git)

Si tienes dudas sobre cómo aportar tu código, sigue estos pasos:

1. Preparar el terreno (Solo la primera vez)
   Clona el repositorio en tu ordenador:

```Bash
git clone https://github.com/davidValades/movie-catalog.git
cd movie-catalog
```

2. Antes de empezar a programar
   Asegúrate de estar en la rama main y de tener la última versión del código de tus compañeros:

```Bash
git checkout main
git pull
```

3. Crear tu rama de trabajo
   Nunca trabajes en main. Crea una rama con un nombre descriptivo de lo que vas a hacer (usa feature/ para nuevas cosas o fix/ para arreglar errores):

```Bash
git checkout -b feature/nombre-de-tu-tarea
```

4. Guardar tus cambios
   A medida que vayas terminando tu código HTML o CSS, guarda tu progreso:

```Bash
git add .
git commit -m "feat: añade descripción clara de lo que hiciste"
```

5. Subir tu rama a GitHub
   Cuando hayas terminado tu tarea y quieras que el equipo la revise:

```Bash
git push origin feature/nombre-de-tu-tarea
```

6. Pull Request (PR)
   Ve a la página del repositorio en GitHub. Verás un botón verde para crear un Pull Request. Ábrelo, avisa al equipo por vuestro chat para que lo revisen, y una vez aprobado, ¡lo integraremos en main!
