// assets/js/movies.js

const movies = [
  {
    id: 0,
    title: "Proyecto Salvación",
    year: "2026",
    rating: "R",
    duration: "156 min",
    score: "7.4/10",
    genres: ["Sci-Fi", "Thriller", "Aventura"], // Usamos un array interior para múltiples géneros
    image: "/movie-catalog/assets/images/proyectoSalvacion.webp", // Ruta a tu imagen
    bgImage: "/movie-catalog/assets/images/proyectoSalvacion.webp", // Imagen de fondo para detalles
    description:
      "El profesor de ciencias Ryland Grace (Ryan Gosling) se despierta en una nave espacial a años luz de casa sin recordar quién es ni cómo ha llegado hasta allí. A medida que recupera la memoria, empieza a descubrir su misión: resolver el enigma de la misteriosa sustancia que provoca la extinción del sol. Deberá recurrir a sus conocimientos científicos y a sus ideas poco ortodoxas para salvar todo lo que hay en la Tierra de la extinción... pero una amistad inesperada significa que quizá no tenga que hacerlo solo",
    curiosities:
      "El director de la película, Michel Gondry, es conocido por su estilo visual único y ha dirigido otras películas como 'Eternal Sunshine of the Spotless Mind' y 'The Science of Sleep'.",
    cast: [
      {
        name: "Ryan Gosling",
        photo: "https://www.filmaffinity.com/es/name.php?name-id=766040752",
      },
      {
        name: "Sandra Hüller",
        photo: "https://www.filmaffinity.com/es/name.php?name-id=719063480",
      },
    ],
  },
  {
    id: 1,
    title: "El Caballero Oscuro",
    year: "2008",
    rating: "PG-13",
    duration: "2h 32min",
    score: "9.0/10",
    genres: ["Acción", "Crimen", "Drama"],
    image: "/movie-catalog/assets/images/elCaballeroOscuro.webp",
    bgImage: "/movie-catalog/assets/images/elCaballeroOscuro.webp", // Imagen de fondo para detalles
    description:
      "Cuando la amenaza conocida como el Joker emerge de su misterioso pasado, causa estragos y caos en la gente de Gotham.",
    curiosities:
      "Heath Ledger se encerró en una habitación de hotel durante semanas para preparar la psicología del Joker.",
    cast: [
      {
        name: "Christian Bale",
        photo: "https://www.filmaffinity.com/es/name.php?name-id=123456789",
      }, // Puedes rellenar esto luego
      {
        name: "Heath Ledger",
        photo: "https://www.filmaffinity.com/es/name.php?name-id=987654321",
      },
    ],
  },
  // Aquí irías añadiendo el resto de películas separadas por comas...
];

// Comprobación para ver si funciona
console.log("Base de datos de películas cargada:", movies);
