// assets/js/movies.js

const movies = [
  {
    id: 1,
    title: "Pulp Fiction",
    year: "1994",
    rating: "R",
    duration: "2h 34min",
    score: "8.9/10",
    genres: ["Crimen", "Drama"], // Usamos un array interior para múltiples géneros
    image: "../../assets/images/pulpFiction.webp",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    curiosities: "La palabra 'fuck' se usa 265 veces durante la película.",
    cast: [
      { name: "John Travolta", photo: "https://assets.codepen.io/406785/travolta.jpg" },
      { name: "Samuel L. Jackson", photo: "https://assets.codepen.io/406785/jackson.jpeg" }
    ]
  },
  {
    id: 2,
    title: "El Caballero Oscuro",
    year: "2008",
    rating: "PG-13",
    duration: "2h 32min",
    score: "9.0/10",
    genres: ["Acción", "Crimen", "Drama"],
    image: "../../assets/images/elCaballeroOscuro.webp",
    description: "Cuando la amenaza conocida como el Joker emerge de su misterioso pasado, causa estragos y caos en la gente de Gotham.",
    curiosities: "Heath Ledger se encerró en una habitación de hotel durante semanas para preparar la psicología del Joker.",
    cast: [
      { name: "Christian Bale", photo: "ruta_foto_bale.jpg" }, // Puedes rellenar esto luego
      { name: "Heath Ledger", photo: "ruta_foto_ledger.jpg" }
    ]
  }
,

];


console.log("Base de datos de películas cargada:", movies);