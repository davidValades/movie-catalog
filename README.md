# 🎬 Movie Catalog App

![Status](https://img.shields.io/badge/Estado-En_Progreso_🚀-2ea44f?style=for-the-badge)

¡Bienvenido al repositorio de Movie Catalog! Un proyecto colaborativo desarrollado para aprender y dominar la maquetación web (Frontend) y el control de versiones en equipo.

## 🎯 Objetivo del Proyecto

Crear una plataforma web atractiva y funcional que actúe como un catálogo de películas. Los usuarios podrán explorar los estrenos más recientes en un carrusel interactivo, filtrar por categorías (drama, comedia, etc.), y consultar un Top 10 de las películas más valoradas.

## 🛠️ Tecnologías (Tech Stack)

- **Estructura:** HTML5
- **Lógica:** JavaScript
- **Estilos:** CSS3 (Flexbox & Grid)
- **Control de Versiones:** Git & GitHub

## ✨ Características Principales

- 🌗 **Modo Oscuro Persistente:** Alternancia de temas (Light/Dark) gestionada mediante clases CSS y `localStorage` para recordar la preferencia del usuario.
- 🎬 **Animaciones Scroll-Driven:** Carrusel con efecto "cover-flow" 3D utilizando las últimas especificaciones de CSS (`animation-timeline: view`).
- ⚡ **View Transitions API:** Transiciones fluidas y modernas al cambiar el tema de la aplicación, mejorando radicalmente la experiencia de usuario (UX).

## 📂 Arquitectura del Proyecto

Hemos definido una arquitectura modular para evitar conflictos de código entre los desarrolladores:

```text
movie-catalog/
├── index.html              # Landing page principal
├── pages/                  # Vistas secundarias
│   ├── catalogo.html
│   ├── categorias.html
│   ├── top10.html
│   ├── topPremiadas.html
│   └── detalles.html
└── assets/                 # Recursos estáticos
    ├── css/                # Hojas de estilo modulares
    │   └── main.css
    ├── js/                 # Lógica dinámica / localstorage
    │   └── main.js
    └── images/             # Posters e iconos
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
