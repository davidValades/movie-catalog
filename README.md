# 🎬 Movie Catalog App

¡Bienvenido al repositorio de Movie Catalog! Un proyecto colaborativo desarrollado para aprender y dominar la maquetación web (Frontend) y el control de versiones en equipo.

## 🎯 Objetivo del Proyecto

Crear una plataforma web atractiva y funcional que actúe como un catálogo de películas. Los usuarios podrán explorar los estrenos más recientes en un carrusel interactivo, filtrar por categorías (drama, comedia, etc.), y consultar un Top 10 de las películas más valoradas.

## 🛠️ Tecnologías (Tech Stack)

* **Estructura:** HTML5
* **Estilos:** CSS3 (Flexbox & Grid)
* **Control de Versiones:** Git & GitHub

## 📂 Arquitectura del Proyecto

Hemos definido una arquitectura modular para evitar conflictos de código entre los desarrolladores:

```text
movie-catalog/
├── index.html              # Landing page principal
├── pages/                  # Vistas secundarias
│   ├── catalogo.html
│   ├── categorias.html
│   ├── top10.html
│   └── detalles.html
└── assets/                 # Recursos estáticos
    ├── css/                # Hojas de estilo modulares
    ├── js/                 # Lógica dinámica
    └── images/             # Posters e iconos