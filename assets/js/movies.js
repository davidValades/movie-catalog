// assets/js/movies.js

const movies = [
  {
    id: 0,
    title: "12 hombres sin piedad",
    year: "1957",
    rating: "Approved",
    duration: "96 min",
    score: "9.0/10",
    genres: ["Crimen", "Drama"],
    image: "../assets/images/12hombresSinPiedad.webp",
    bgImage: "../assets/images/12hombresSinPiedad.webp",
    description:
      "El jurado de un juicio por asesinato debe deliberar sobre la culpabilidad de un joven de 18 años. A medida que la docena de hombres intenta llegar a una decisión unánime, un miembro siembra la duda razonable.",
    curiosities:
      "Casi toda la película se rodó en una sola habitación para crear una sensación de claustrofobia.",
    cast: [
      {
        name: "Henry Fonda",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/6wXWsqSXF3wCsGcwVqiszy6RX9X.jpg",
      },
      {
        name: "Lee J. Cobb",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/yxMxBvM0PZwu7YXQamG0kFwt9DZ.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=TEN-2uTi2c0",
  },
  {
    id: 1,
    title: "Amarga Navidad",
    year: "2026",
    rating: "NR",
    duration: "111 min",
    score: "6.1/10",
    genres: ["Drama", "Amistad", "Familia"],
    image: "../assets/images/amarganavidad.webp",
    bgImage: "../assets/images/amarganavidad.webp",
    description:
      "Elsa es una directora de publicidad cuya madre muere durante un largo puente del mes de diciembre. Encuentra refugio en el trabajo, aunque es más bien una huida hacia adelante. Viaja a Lanzarote para intentar superar el duelo.",
    curiosities:
      "Seleccionada en Sección Oficial del Festival de Cannes (Mayo 2026).",
    cast: [
      {
        name: "Bárbara Lennie",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/pEiyonuiZbpkpfdGf5inWQ8Tr1h.jpg",
      },
      {
        name: "Leonardo Sbaraglia",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/jGYgJqNEWVvp92ZPre1PEKfci5H.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=SNbVMk-nLu4",
  },
  {
    id: 2,
    title: "Avatar",
    year: "2009",
    rating: "PG-13",
    duration: "162 min",
    score: "7.9/10",
    genres: ["Acción", "Aventura", "Fantasía", "Sci-Fi"],
    image: "../assets/images/avatar.webp",
    bgImage: "../assets/images/avatar.webp",
    description:
      "Un marine parapléjico enviado a la luna Pandora en una misión única se debate entre seguir sus órdenes y proteger el mundo al que siente que pertenece.",
    curiosities:
      "El idioma Na'vi fue creado desde cero por un lingüista especialmente para la película.",
    cast: [
      {
        name: "Sam Worthington",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/mflBcox36s9ZPbsZPVOuhf6axaJ.jpg",
      },
      {
        name: "Zoe Saldana",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/iOVbUH20il632nj2v01NCtYYeSg.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=CpXJHWSXJW0",
  },
  {
    id: 3,
    title: "Blade Runner",
    year: "1982",
    rating: "R",
    duration: "117 min",
    score: "8.1/10",
    genres: ["Acción", "Sci-Fi", "Thriller"],
    image: "../assets/images/bladeRunner.jpg",
    bgImage: "../assets/images/bladeRunner.jpg",
    description:
      "Un 'blade runner' debe perseguir y exterminar a cuatro replicantes que robaron una nave en el espacio y han regresado a la Tierra para encontrar a su creador.",
    curiosities:
      "El famoso monólogo 'Lágrimas en la lluvia' fue improvisado en gran parte por Rutger Hauer la noche anterior a la grabación.",
    cast: [
      {
        name: "Harrison Ford",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/pjBMJVPpcZK23Vt1nzr1zEBTWrP.jpg",
      },
      {
        name: "Rutger Hauer",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/xyag0LbjocTwx2Ht7B3RofvCNMT.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=eogpIG53Cis",
  },
  {
    id: 4,
    title: "Cadena Perpetua",
    year: "1994",
    rating: "R",
    duration: "142 min",
    score: "9.3/10",
    genres: ["Drama"],
    image: "../assets/images/cadenaPerpetua.webp",
    bgImage: "../assets/images/cadenaPerpetua.webp",
    description:
      "Dos hombres encarcelados forjan una fuerte amistad a lo largo de los años, encontrando consuelo y redención a través de actos de decencia común.",
    curiosities:
      "Es la película mejor valorada de todos los tiempos en la lista Top 250 de IMDb.",
    cast: [
      {
        name: "Tim Robbins",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/3FfJMIVwXgsIXbAT8ECBSZJAncR.jpg",
      },
      {
        name: "Morgan Freeman",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=gNS84kTqI3M",
  },
  {
    id: 5,
    title: "Cisne Negro",
    year: "2010",
    rating: "R",
    duration: "108 min",
    score: "8.0/10",
    genres: ["Drama", "Thriller"],
    image: "../assets/images/cisneNegro.jpg",
    bgImage: "../assets/images/cisneNegro.jpg",
    description:
      "Una bailarina comprometida se enfrenta a la competencia de una recién llegada y comienza a perder el contacto con la realidad a medida que se acerca el estreno de la obra.",
    curiosities:
      "Natalie Portman entrenó hasta 8 horas diarias durante más de un año para preparar sus escenas de ballet.",
    cast: [
      {
        name: "Natalie Portman",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/edPU5HxncLWa1YkgRPNkSd68ONG.jpg",
      },
      {
        name: "Mila Kunis",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/6Lp9qPkMO740Hcp8NBYZZLWWvJF.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=5jaI1XOB-bs",
  },
  {
    id: 6,
    title: "Braveheart",
    year: "1995",
    rating: "R",
    duration: "178 min",
    score: "8.3/10",
    genres: ["Biografía", "Drama", "Historia"],
    image: "../assets/images/corazonValiente.webp",
    bgImage: "../assets/images/corazonValiente.webp",
    description:
      "El guerrero escocés William Wallace lidera a sus compatriotas en una rebelión para liberar a su tierra natal de la tiranía del rey Eduardo I de Inglaterra.",
    curiosities:
      "Las batallas masivas fueron filmadas usando a miembros de la Reserva del Ejército Irlandés como extras.",
    cast: [
      {
        name: "Mel Gibson",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/jnqHMaOslt8cef2atSmOpGRvNla.jpg",
      },
      {
        name: "Sophie Marceau",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/fnETHvczvqpmG0TxrSxeUUKR8Z.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=OwJGElRruv8",
  },
  {
    id: 7,
    title: "Bram Stoker's Dracula",
    year: "1992",
    rating: "R",
    duration: "130 min",
    score: "7.6/10",
    genres: ["Terror", "Romance", "Fantástico"],
    image: "../assets/images/dracula.jpg",
    bgImage: "../assets/images/dracula.jpg",
    description:
      "En el año 1890, el abogado Jonathan Harker viaja a Transilvania, donde el conde Drácula, fascinado por la novia de Harker, viaja hasta Londres 'cruzando océanos de tiempo' para conocerla.",
    curiosities:
      "Francis Ford Coppola insistió en no usar efectos especiales por ordenador, utilizando trucos de cámara tradicionales.",
    cast: [
      {
        name: "Gary Oldman",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg",
      },
      {
        name: "Winona Ryder",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/dlffgYbqr1BllWacVLhAFw23nLl.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=CjgwUB1CXek",
  },
  {
    id: 8,
    title: "Dune: Parte Dos",
    year: "2024",
    rating: "PG-13",
    duration: "166 min",
    score: "8.6/10",
    genres: ["Acción", "Aventura", "Drama", "Sci-Fi"],
    image: "../assets/images/dune2.jpg",
    bgImage: "../assets/images/dune2.jpg",
    description:
      "Paul Atreides se une a Chani y a los Fremen en su búsqueda de venganza contra los conspiradores que destruyeron a su familia.",
    curiosities:
      "Se construyeron enormes decorados prácticos en el desierto para reducir el uso de pantallas verdes.",
    cast: [
      {
        name: "Timothée Chalamet",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/axENiFIrSz5B7UuWkMT7PDe7CaO.jpg",
      },
      {
        name: "Zendaya",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=Qv7I3wDfFzI",
  },
  {
    id: 9,
    title: "El bueno, el feo y el malo",
    year: "1966",
    rating: "R",
    duration: "161 min",
    score: "8.8/10",
    genres: ["Western"],
    image: "../assets/images/elBuenoElfeoElmalo.webp",
    bgImage: "../assets/images/elBuenoElfeoElmalo.webp",
    description:
      "Durante la Guerra de Secesión, un cazarrecompensas forma una inestable alianza con dos criminales para encontrar una fortuna en oro enterrada.",
    curiosities:
      "La icónica banda sonora de Ennio Morricone fue compuesta antes de que se rodara la película para que el director ajustara el ritmo de las escenas a la música.",
    cast: [
      {
        name: "Clint Eastwood",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/8TwdCfeOZH7ucRlfLZ6wObxa7cO.jpg",
      },
      {
        name: "Eli Wallach",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/egLe8r2PwbTx9ocwS1Zu2vsYC9v.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=exJOy6uTkek",
  },
  {
    id: 10,
    title: "El Caballero Oscuro",
    year: "2008",
    rating: "PG-13",
    duration: "152 min",
    score: "9.0/10",
    genres: ["Acción", "Crimen", "Drama"],
    image: "../assets/images/elCaballeroOscuro.webp",
    bgImage: "../assets/images/elCaballeroOscuro.webp",
    description:
      "Cuando la amenaza conocida como el Joker emerge de su misterioso pasado, causa estragos y caos en la gente de Gotham.",
    curiosities:
      "Heath Ledger se encerró en una habitación de hotel durante semanas para preparar la psicología del Joker.",
    cast: [
      {
        name: "Christian Bale",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/7Pxez9J8fuPd2Mn9kex13YALrCQ.jpg",
      },
      {
        name: "Heath Ledger",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/AdWKVqyWpkYSfKE5Gb2qn8JzHni.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=Qs-NylETt1E",
  },
  {
    id: 11,
    title: "El Padrino",
    year: "1972",
    rating: "R",
    duration: "175 min",
    score: "9.2/10",
    genres: ["Crimen", "Drama"],
    image: "../assets/images/elPadrino.webp",
    bgImage: "../assets/images/elPadrino.webp",
    description:
      "El patriarca envejecido de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su hijo reacio.",
    curiosities:
      "Marlon Brando usó prótesis dentales para dar a Don Corleone el aspecto de un bulldog.",
    cast: [
      {
        name: "Marlon Brando",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/eEHCjqKMWSvQU4bmwhLMsg4RtEr.jpg",
      },
      {
        name: "Al Pacino",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/m8HAAjq1T75JypKk0v1FFQn4ysZ.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=gCVj1LeYnsc",
  },
  {
    id: 12,
    title: "El Padrino Parte II",
    year: "1974",
    rating: "R",
    duration: "202 min",
    score: "9.0/10",
    genres: ["Crimen", "Drama"],
    image: "../assets/images/elPadrino2.webp",
    bgImage: "../assets/images/elPadrino2.webp",
    description:
      "Se narra la historia de los primeros años de Vito Corleone en la ciudad de Nueva York, mientras su hijo, Michael, consolida y expande su control sobre el sindicato del crimen familiar.",
    curiosities:
      "Es la primera secuela en la historia en ganar el Óscar a Mejor Película.",
    cast: [
      {
        name: "Al Pacino",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/m8HAAjq1T75JypKk0v1FFQn4ysZ.jpg",
      },
      {
        name: "Robert De Niro",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=SBRv7-y3gb8",
  },
  {
    id: 13,
    title: "Léon: El Profesional",
    year: "1994",
    rating: "R",
    duration: "110 min",
    score: "8.5/10",
    genres: ["Acción", "Crimen", "Drama"],
    image: "../assets/images/elrpofesional.webp",
    bgImage: "../assets/images/elrpofesional.webp",
    description:
      "Mathilda, una niña de 12 años, es acogida a regañadientes por Léon, un asesino profesional, después de que su familia sea asesinada.",
    curiosities:
      "Fue el debut cinematográfico de Natalie Portman, quien impresionó al director en su audición.",
    cast: [
      {
        name: "Jean Reno",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/mw0EZJYz3kiFq9fNxsML773gotF.jpg",
      },
      {
        name: "Natalie Portman",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/edPU5HxncLWa1YkgRPNkSd68ONG.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=aNQqoExfQsg",
  },
  {
    id: 14,
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    year: "2001",
    rating: "PG-13",
    duration: "178 min",
    score: "8.8/10",
    genres: ["Acción", "Aventura", "Drama"],
    image: "../assets/images/ESDLA1.jpg",
    bgImage: "../assets/images/ESDLA1.jpg",
    description:
      "Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso y peligroso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.",
    curiosities:
      "Las tres películas se filmaron simultáneamente en Nueva Zelanda durante más de un año.",
    cast: [
      {
        name: "Elijah Wood",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/ayARmqAe9Aab1zg6FjJG0u9MEBo.jpg",
      },
      {
        name: "Ian McKellen",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=3GJp6p_mgPo",
  },
  {
    id: 15,
    title: "El Señor de los Anillos: El Retorno del Rey",
    year: "2003",
    rating: "PG-13",
    duration: "201 min",
    score: "9.0/10",
    genres: ["Acción", "Aventura", "Drama"],
    image: "../assets/images/ESDLA3.webp",
    bgImage: "../assets/images/ESDLA3.webp",
    description:
      "Gandalf y Aragorn lideran el Mundo de los Hombres contra el ejército de Sauron para desviar su mirada de Frodo y Sam mientras se acercan al Monte del Destino.",
    curiosities:
      "Ganó los 11 premios Óscar a los que estaba nominada, igualando el récord de Ben-Hur y Titanic.",
    cast: [
      {
        name: "Elijah Wood",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/ayARmqAe9Aab1zg6FjJG0u9MEBo.jpg",
      },
      {
        name: "Viggo Mortensen",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/vH5gVSpHAMhDaFWfh0Q7BG61O1y.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=h-9RYiqyqjk",
  },
  {
    id: 16,
    title: "Flow",
    year: "2024",
    rating: "PG",
    duration: "83 min",
    score: "7.2/10",
    genres: ["Animación", "Aventuras", "Supervivencia"],
    image: "../assets/images/Flow.webp",
    bgImage: "../assets/images/Flow.webp",
    description:
      "Un gato se despierta en un mundo cubierto de agua, donde la raza humana parece haber desaparecido. Busca refugio en un barco con un grupo de otros animales.",
    curiosities:
      "Película de animación europea elogiada por su narrativa visual centrada en el comportamiento animal puro.",
    cast: [
      {
        name: "Gints Zilbalodis",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/fP44KcwJLGK3or7T7bImWBSDKo8.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=l5zSgSuIDU4",
  },
  {
    id: 17,
    title: "Gladiador",
    year: "2000",
    rating: "R",
    duration: "155 min",
    score: "8.5/10",
    genres: ["Acción", "Aventura", "Drama"],
    image: "../assets/images/gladiador.webp",
    bgImage: "../assets/images/gladiador.webp",
    description:
      "Un general romano convertido en esclavo viaja a Roma como gladiador para vengarse del emperador corrupto que asesinó a su familia y lo envió a la esclavitud.",
    curiosities:
      "Oliver Reed falleció durante el rodaje y sus últimas escenas se completaron con dobles y tecnología CGI temprana.",
    cast: [
      {
        name: "Russell Crowe",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/uxiXuVH4vNWrKlJMVVPG1sxAJFe.jpg",
      },
      {
        name: "Joaquin Phoenix",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/u38k3hQBDwNX0VA22aQceDp9Iyv.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=P5ieIbInFpg",
  },
  {
    id: 18,
    title: "Hoppers",
    year: "2026",
    rating: "PG",
    duration: "105 min",
    score: "6.9/10",
    genres: ["Animación", "Comedia", "Ciencia ficción"],
    image: "../assets/images/hopper.webp",
    bgImage: "../assets/images/hopper.webp",
    description:
      "En Hoppers, los científicos descubren la tecnología para instalar la conciencia humana en animales robóticos hiperrealistas, permitiendo a las personas comunicarse con los animales.",
    curiosities:
      "Es uno de los proyectos originales de Pixar de mediados de la década, centrado en la conexión humano-naturaleza.",
    cast: [
      {
        name: "Piper Curda",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/oyitEBcracNWMuF8Frhsqkjgzuc.jpg",
      },
      {
        name: "Bobby Moynihan",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/gOvwNz5joi5yWJ7dAhuF8WA2aas.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=bv0sKzFvpmo",
  },
  {
    id: 19,
    title: "Los Juegos del Hambre",
    year: "2012",
    rating: "PG-13",
    duration: "142 min",
    score: "7.2/10",
    genres: ["Acción", "Aventura", "Sci-Fi"],
    image: "../assets/images/hungergames.jpg",
    bgImage: "../assets/images/hungergames.jpg",
    description:
      "Katniss Everdeen ocupa voluntariamente el lugar de su hermana menor en los Juegos del Hambre: una competencia televisada en la que dos adolescentes de cada uno de los doce Distritos de Panem son elegidos al azar para luchar a muerte.",
    curiosities:
      "Jennifer Lawrence dudó varios días antes de aceptar el papel debido a la magnitud de la franquicia.",
    cast: [
      {
        name: "Jennifer Lawrence",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/mDKMsjOMytyBiy7MHNZTa7gp7wj.jpg",
      },
      {
        name: "Josh Hutcherson",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/f0eosZ1Fx0VBUyspq8K2f8sUSBn.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=_8Ktfs2mBDY",
  },
  {
    id: 20,
    title: "Interstellar",
    year: "2014",
    rating: "PG-13",
    duration: "169 min",
    score: "8.7/10",
    genres: ["Aventura", "Drama", "Sci-Fi"],
    image: "../assets/images/interestellar.jpg",
    bgImage: "../assets/images/interestellar.jpg",
    description:
      "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad.",
    curiosities:
      "El físico teórico Kip Thorne colaboró estrechamente con Christopher Nolan para asegurar la precisión científica de los agujeros negros.",
    cast: [
      {
        name: "Matthew McConaughey",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/lCySuYjhXix3FzQdS4oceDDrXKI.jpg",
      },
      {
        name: "Anne Hathaway",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/s6tflSD20MGz04ZR2R1lZvhmC4Y.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=hhCtMhk8eHo",
  },
  {
    id: 21,
    title: "La Lista de Schindler",
    year: "1993",
    rating: "R",
    duration: "195 min",
    score: "9.0/10",
    genres: ["Biografía", "Drama", "Historia"],
    image: "../assets/images/laListaSchindlers.webp",
    bgImage: "../assets/images/laListaSchindlers.webp",
    description:
      "En la Polonia ocupada por los alemanes durante la Segunda Guerra Mundial, el industrial Oskar Schindler se preocupa gradualmente por su fuerza laboral judía después de presenciar su persecución por parte de los nazis.",
    curiosities:
      "Steven Spielberg rechazó cobrar un sueldo por dirigirla, calificando cualquier dinero como 'dinero manchado de sangre'.",
    cast: [
      {
        name: "Liam Neeson",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/g0iIEyt9ILiKTG0g8K69US5VtLy.jpg",
      },
      {
        name: "Ralph Fiennes",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/pCnVXH1Uo2ODoOit4UXni8OD9VB.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=BmkchuRJ82w",
  },
  {
    id: 22,
    title: "Mad Max: Fury Road",
    year: "2015",
    rating: "R",
    duration: "120 min",
    score: "7.2/10",
    genres: ["Acción", "Ciencia ficción"],
    image: "../assets/images/madmax.webp",
    bgImage: "../assets/images/madmax.webp",
    description:
      "Mad Max se ve arrastrado a formar parte de un grupo que huye a través del desierto en un War Rig conducido por una Emperatriz de élite: Furiosa. Escapan de una Ciudadela tiranizada por Immortan Joe.",
    curiosities:
      "Gran parte de la película está hecha con efectos prácticos reales (coches destrozándose en el desierto) en lugar de CGI.",
    cast: [
      {
        name: "Tom Hardy",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg",
      },
      {
        name: "Charlize Theron",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/gd7ShD0yt4bsR2STeQ19KQ6hvXL.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=GvsFoGIuRX4",
  },
  {
    id: 23,
    title: "The Matrix",
    year: "1999",
    rating: "R",
    duration: "136 min",
    score: "8.7/10",
    genres: ["Acción", "Sci-Fi"],
    image: "../assets/images/matrix.jpg",
    bgImage: "../assets/images/matrix.jpg",
    description:
      "Cuando un hermoso extraño lleva al hacker Neo a un peligroso inframundo, descubre la impactante verdad: la vida que conoce es el complejo engaño de una malvada inteligencia artificial.",
    curiosities:
      "Popularizó el efecto visual 'bullet time', donde la acción parece congelarse o moverse a cámara lenta.",
    cast: [
      {
        name: "Keanu Reeves",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg",
      },
      {
        name: "Carrie-Anne Moss",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/xD4jTA3KmVp5Rq3aHcymL9DUGjD.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=Pl_H2Lmjn6k",
  },
  {
    id: 24,
    title: "Metrópolis",
    year: "1927",
    rating: "Not Rated",
    duration: "153 min",
    score: "8.3/10",
    genres: ["Drama", "Sci-Fi"],
    image: "../assets/images/metropolis.jpg",
    bgImage: "../assets/images/metropolis.jpg",
    description:
      "En una ciudad futurista muy estratificada, el hijo de la mente maestra de la ciudad se enamora de una profeta de la clase trabajadora que predice la llegada de un salvador que mediará en sus diferencias.",
    curiosities:
      "Es una de las películas mudas más caras jamás realizadas y pionera en el cine de ciencia ficción.",
    cast: [
      {
        name: "Brigitte Helm",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/a7mwxoeF34BCxmteoHQSB1ENth0.jpg",
      },
      {
        name: "Alfred Abel",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/dGk5r64zQZVHplTwRDZGpNkoCjc.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=gdtZv3XROnc",
  },
  {
    id: 25,
    title: "Mr. Nobody",
    year: "2009",
    rating: "R",
    duration: "141 min",
    score: "7.7/10",
    genres: ["Drama", "Fantasía", "Romance", "Sci-Fi"],
    image: "../assets/images/mrNobody.webp",
    bgImage: "../assets/images/mrNobody.webp",
    description:
      "Un chico se encuentra en la plataforma de una estación cuando un tren está a punto de salir. ¿Debería ir con su madre o quedarse con su padre? De esta elección surgen infinitas vidas posibles.",
    curiosities:
      "La película tardó casi diez años en realizarse desde su concepción hasta su estreno.",
    cast: [
      {
        name: "Jared Leto",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg",
      },
      {
        name: "Sarah Polley",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/kQEyOfhp72yM4t6uo16ypSXfVX1.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=MqIsJuqWy8w",
  },
  {
    id: 26,
    title: "Proyecto Salvación",
    year: "2026",
    rating: "R",
    duration: "156 min",
    score: "7.4/10",
    genres: ["Sci-Fi", "Thriller", "Aventura"],
    image: "../assets/images/proyectoSalvacion.webp",
    bgImage: "../assets/images/proyectoSalvacion.webp",
    description:
      "El profesor de ciencias Ryland Grace se despierta en una nave espacial a años luz de casa sin recordar quién es ni cómo ha llegado hasta allí para salvar la Tierra.",
    curiosities:
      "Basada en la novela homónima de Andy Weir, autor de 'El Marciano'.",
    cast: [
      {
        name: "Ryan Gosling",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/lyUyVARQKhGxaxy0FbPJCQRpiaW.jpg",
      },
      {
        name: "Sandra Hüller",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/jQfKXVCPTH9KEnzHHU4QemCnlMe.jpg",
      },
    ],
    trailer: "https://youtu.be/jz6JB0LCNRs?si=WRTcHBkbS3HDWSE5",
  },
  {
    id: 27,
    title: "Pulp Fiction",
    year: "1994",
    rating: "R",
    duration: "154 min",
    score: "8.9/10",
    genres: ["Crimen", "Drama"],
    image: "../assets/images/pulpFiction.webp",
    bgImage: "../assets/images/pulpFiction.webp",
    description:
      "Las vidas de dos sicarios de la mafia, un boxeador, la esposa de un gángster y un par de bandidos de restaurantes se entrelazan en cuatro historias de violencia y redención.",
    curiosities:
      "La icónica escena del baile de John Travolta y Uma Thurman está inspirada en la película clásica 8½ de Fellini.",
    cast: [
      {
        name: "John Travolta",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/ap8eEYfBKTLixmVVpRlq4NslDD5.jpg",
      },
      {
        name: "Samuel L. Jackson",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/AiAYAqwpM5xmiFrAIeQvUXDCVvo.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
  },
  {
    id: 28,
    title: "Ramón y Cajal: dibujos en la retina",
    year: "2025",
    rating: "NR",
    duration: "97 min",
    score: "N/A",
    genres: ["Documental"],
    image: "../assets/images/ramonycajal.webp",
    bgImage: "../assets/images/ramonycajal.webp",
    description:
      "Documental sobre el Nobel aragonés que explora desde una mirada presente su fascinación por las imágenes, con un enfoque integrador de sus facetas artístico-científicas.",
    curiosities:
      "El documental responde a la última pregunta de Cajal: ¿cómo se forman las imágenes en el cerebro?",
    cast: [{ name: "Documental", photo: "" }],
    trailer: "https://www.youtube.com/watch?v=NTTA-oYcJ3Q",
  },
  {
    id: 29,
    title: "Shrek",
    year: "2001",
    rating: "PG",
    duration: "90 min",
    score: "7.9/10",
    genres: ["Animación", "Aventura", "Comedia"],
    image: "../assets/images/shrek.webp",
    bgImage: "../assets/images/shrek.webp",
    description:
      "Un ogro cascarrabias, pero de buen corazón, emprende una búsqueda junto a un burro parlanchín para rescatar a una princesa y recuperar su pantano de manos del malvado Lord Farquaad.",
    curiosities:
      "Ganó el primer premio Óscar a la Mejor Película de Animación, categoría introducida ese mismo año.",
    cast: [
      {
        name: "Mike Myers",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/gjfDl52Kk02MPgUYFjs9bOy33OY.jpg",
      },
      {
        name: "Eddie Murphy",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/qgjMfefsKwSYsyCaIX46uyOXIpy.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=B88JfTyJ1Fw",
  },
  {
    id: 30,
    title: "Soul",
    year: "2020",
    rating: "PG",
    duration: "100 min",
    score: "8.0/10",
    genres: ["Animación", "Aventura", "Comedia", "Drama"],
    image: "../assets/images/Soul.webp",
    bgImage: "../assets/images/Soul.webp",
    description:
      "Después de conseguir el trabajo de su vida, un músico de jazz de Nueva York se encuentra repentinamente atrapado en un lugar extraño entre la Tierra y el más allá.",
    curiosities:
      "Es la primera película de Pixar con un protagonista afroamericano.",
    cast: [
      {
        name: "Jamie Foxx",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/25zzvFA6yx2Q9BYnugsbd4JWDfu.jpg",
      },
      {
        name: "Tina Fey",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/yPTAi1iucXf85UpiFPtyiTSM6do.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=1PI7e75f3tQ",
  },
  {
    id: 31,
    title: "The Super Mario Galaxy Movie",
    year: "2026",
    rating: "PG",
    duration: "98 min",
    score: "6.0/10",
    genres: ["Animación", "Fantástico", "Aventuras"],
    image: "../assets/images/supermario.webp",
    bgImage: "../assets/images/supermario.webp",
    description:
      "Secuela de 'Super Mario Bros: La película'. Los hermanos Mario y Luigi y la princesa Peach emprenden una aventura hasta los confines del espacio y a través de la galaxia.",
    curiosities:
      "Introduce por primera vez a los Luma y a la princesa Rosalina en el universo cinematográfico de Illumination.",
    cast: [
      {
        name: "Chris Pratt",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/cRH6HPAQ98PlOwwEvhYO4CM9lwu.jpg",
      },
      {
        name: "Anya Taylor-Joy",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/qYNofOjlRke2MlJVihmJmEdQI4v.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=GuCejewteF8",
  },
  {
    id: 32,
    title: "Como Dios (Bruce Almighty)",
    year: "2003",
    rating: "PG-13",
    duration: "101 min",
    score: "6.8/10",
    genres: ["Comedia", "Fantasía"],
    image: "../assets/images/todoPoderoso.jpg",
    bgImage: "../assets/images/todoPoderoso.jpg",
    description:
      "Un reportero de televisión que se queja de Dios, recibe la oportunidad de asumir Sus poderes durante una semana para ver si puede hacer un mejor trabajo.",
    curiosities:
      "Morgan Freeman fue la única elección del director para interpretar a Dios.",
    cast: [
      {
        name: "Jim Carrey",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/y3U9QfPN6sJaGl6l68xjwWj28ig.jpg",
      },
      {
        name: "Morgan Freeman",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=fe-luzrqWSk",
  },
  {
    id: 33,
    title: "Torrente presidente",
    year: "2026",
    rating: "NR",
    duration: "102 min",
    score: "5.6/10",
    genres: ["Comedia", "Sátira"],
    image: "../assets/images/torrentepresidente.webp",
    bgImage: "../assets/images/torrentepresidente.webp",
    description:
      "José Luis Torrente, siempre convencido de ser un héroe nacional, es persuadido para meterse en política y, con su estilo vulgar, logra convertirse en líder de un partido populista.",
    curiosities:
      "La sexta y presumiblemente última entrega de la famosa saga creada por Santiago Segura.",
    cast: [
      {
        name: "Santiago Segura",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/w5gSHzLWoivAN2g4z2yaxCSFyTY.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=ssV6di8_IWE",
  },
  {
    id: 34,
    title: "Vértigo (De entre los muertos)",
    year: "1958",
    rating: "PG",
    duration: "128 min",
    score: "8.3/10",
    genres: ["Misterio", "Romance", "Thriller"],
    image: "../assets/images/vertigo.jpg",
    bgImage: "../assets/images/vertigo.jpg",
    description:
      "Un ex detective de policía de San Francisco lidia con sus demonios personales y se obsesiona con una mujer hermosamente inquietante a la que le han encargado seguir.",
    curiosities:
      "Alfred Hitchcock inventó el 'efecto vértigo' (dolly zoom) para esta película y así mostrar la acrofobia del protagonista.",
    cast: [
      {
        name: "James Stewart",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/jam9DRhOuKomlr0vUXTamPoxPdk.jpg",
      },
      {
        name: "Kim Novak",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/wQYlkzNBJkvFAY3R0FQZfwLhTDx.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=sSZEpOdNqTw",
  },
  {
    id: 35,
    title: "WALL·E",
    year: "2008",
    rating: "G",
    duration: "98 min",
    score: "8.4/10",
    genres: ["Animación", "Aventura", "Familiar", "Sci-Fi"],
    image: "../assets/images/WALL-E.webp",
    bgImage: "../assets/images/WALL-E.webp",
    description:
      "En un futuro lejano, un pequeño robot recolector de residuos se embarca inadvertidamente en un viaje espacial que finalmente decidirá el destino de la humanidad.",
    curiosities:
      "Para diseñar los sonidos de la película, Pixar contrató a Ben Burtt, el genio que diseñó los sonidos de Star Wars.",
    cast: [
      {
        name: "Ben Burtt (Voz)",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/7asFDWjls2bYQSfXJf5StjXmlhI.jpg",
      },
      {
        name: "Elissa Knight (Voz)",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/exRLyaNaHcgawQA0DoBxo5IvdoI.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
  },
  {
    id: 36,
    title: "Whiplash",
    year: "2014",
    rating: "R",
    duration: "106 min",
    score: "8.5/10",
    genres: ["Drama", "Música"],
    image: "../assets/images/whiplash.webp",
    bgImage: "../assets/images/whiplash.webp",
    description:
      "Un joven y prometedor baterista se inscribe en un conservatorio de música muy competitivo donde sus sueños de grandeza son guiados por un instructor que no se detendrá ante nada para desarrollar el potencial del estudiante.",
    curiosities:
      "El director, Damien Chazelle, escribió la película basándose en sus propias experiencias reales en una banda de jazz.",
    cast: [
      {
        name: "Miles Teller",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/aNXCuzvek1uLhI7TzCFNQ4E1MYJ.jpg",
      },
      {
        name: "J.K. Simmons",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/ScmKoJ9eiSUOthAt1PDNLi8Fkw.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=Q7kZy3T6vRM",
  },
  {
    id: 37,
    title: "Batman Begins",
    year: "2005",
    rating: "PG-13",
    duration: "140 min",
    score: "8.2/10",
    genres: ["Acción", "Thriller", "Fantástico"],
    image: "../assets/images/elCaballeroOscuroBegins.jpg",
    bgImage: "../assets/images/elCaballeroOscuroBegins.jpg",
    description:
      "Bruce Wayne se traslada a Asia, donde es asesorado por su mentor Henri Ducard y Ra's Al Ghul en la liga de las sombras. Al regresar a Gotham, adopta el manto de Batman para liberar a la ciudad de la corrupción.",
    curiosities:
      "Fue el inicio de la aclamada trilogía del Caballero Oscuro dirigida por Christopher Nolan.",
    cast: [
      {
        name: "Christian Bale",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/7Pxez9J8fuPd2Mn9kex13YALrCQ.jpg",
      },
      {
        name: "Liam Neeson",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/g0iIEyt9ILiKTG0g8K69US5VtLy.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=neY2xVmOfUM",
  },
  {
    id: 38,
    title: "El caballero oscuro: La leyenda renace",
    year: "2012",
    rating: "PG-13",
    duration: "164 min",
    score: "8.4/10",
    genres: ["Acción", "Thriller", "Drama"],
    image: "../assets/images/darkKnightRises.jpg",
    bgImage: "../assets/images/darkKnightRises.jpg",
    description:
      "Ocho años después de asumir la culpa por la muerte de Harvey Dent, un nuevo líder terrorista, Bane, abruma a la policía de Gotham, obligando a Batman a regresar de su exilio.",
    curiosities:
      "Tom Hardy ganó 13 kilos de músculo para interpretar al imponente y letal villano Bane.",
    cast: [
      {
        name: "Christian Bale",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/7Pxez9J8fuPd2Mn9kex13YALrCQ.jpg",
      },
      {
        name: "Tom Hardy",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=e0qwi-4iOpE",
  },
  {
    id: 39,
    title: "Dune",
    year: "2021",
    rating: "PG-13",
    duration: "155 min",
    score: "7.2/10",
    genres: ["Ciencia ficción", "Aventuras", "Drama"],
    image: "../assets/images/dune1.jpg",
    bgImage: "../assets/images/dune1.jpg",
    description:
      "En el Año 10191 el desértico planeta Arrakis, feudo de la familia Harkonnen desde hace generaciones, queda en manos de la Casa de los Atreides por orden del emperador. Con ello les cede la explotación de las reservas de especia, pero pronto se verán envueltos en una trama de traiciones y engaños.",
    curiosities:
      "El director Denis Villeneuve esperó años para dirigir esta película, su proyecto de ensueño de la infancia.",
    cast: [
      {
        name: "Timothée Chalamet",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/axENiFIrSz5B7UuWkMT7PDe7CaO.jpg",
      },
      {
        name: "Rebecca Ferguson",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/lJloTOheuQSirSLXNA3JHsrMNfH.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=mSY_NbSmaUI",
  },
  {
    id: 40,
    title: "El Señor de los Anillos: Las dos torres",
    year: "2002",
    rating: "PG-13",
    duration: "179 min",
    score: "8.0/10",
    genres: ["Fantasía", "Aventuras", "Acción"],
    image: "../assets/images/ESDLA2.jpg",
    bgImage: "../assets/images/ESDLA2.jpg",
    description:
      "Tras la disolución de la Compañía del Anillo, Frodo y su fiel amigo Sam se dirigen hacia Mordor para destruir el Anillo Único y acabar con el poder de Sauron, pero les sigue un siniestro personaje llamado Gollum. Mientras, Aragorn, Legolas y Gimli intentan rescatar a los medianos secuestrados.",
    curiosities:
      "Andy Serkis revolucionó el cine con su actuación de Gollum mediante captura de movimiento.",
    cast: [
      {
        name: "Elijah Wood",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/ayARmqAe9Aab1zg6FjJG0u9MEBo.jpg",
      },
      {
        name: "Viggo Mortensen",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/vH5gVSpHAMhDaFWfh0Q7BG61O1y.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=yZLxtW7qq48",
  },
  {
    id: 41,
    title: "Gladiator II",
    year: "2024",
    rating: "R",
    duration: "148 min",
    score: "5.6/10",
    genres: ["Acción", "Drama", "Historia"],
    image: "../assets/images/gladiatorII.jpg",
    bgImage: "../assets/images/gladiatorII.jpg",
    description:
      "Dieciséis años después de la muerte de Marco Aurelio, Roma está gobernada por los despiadados emperadores gemelos Geta y Caracalla. El ejército romano invade y conquista Numidia, esclavizando a Lucio, quien debe luchar en el Coliseo para buscar venganza.",
    curiosities:
      "Ridley Scott volvió a la silla de director más de 20 años después del estreno de la película original.",
    cast: [
      {
        name: "Paul Mescal",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/vrzZ41TGNAFgfmZjC2sOJySzBLd.jpg",
      },
      {
        name: "Pedro Pascal",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/oKcMbVn0NJTNzQt0ClKKvVXkm60.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=HCjuv9STNps",
  },
  {
    id: 42,
    title: "Matrix Reloaded",
    year: "2003",
    rating: "R",
    duration: "138 min",
    score: "6.4/10",
    genres: ["Ciencia ficción", "Acción"],
    image: "../assets/images/matrix2.jpg",
    bgImage: "../assets/images/matrix2.jpg",
    description:
      "Neo, Morpheus, Trinity y el resto de la tripulación continúan en la lucha contra las máquinas que han esclavizado a la raza humana. A medida que aumentan en número, la batalla se acerca a Sion, la última ciudad real en el mundo y centro de la resistencia humana.",
    curiosities:
      "La épica persecución en la autopista tardó casi tres meses en rodarse en una vía construida exclusivamente para la película.",
    cast: [
      {
        name: "Keanu Reeves",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg",
      },
      {
        name: "Carrie-Anne Moss",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/xD4jTA3KmVp5Rq3aHcymL9DUGjD.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=kYzz0FSgpSU",
  },
  {
    id: 43,
    title: "Matrix Revolutions",
    year: "2003",
    rating: "R",
    duration: "130 min",
    score: "6.0/10",
    genres: ["Ciencia ficción", "Acción"],
    image: "../assets/images/matrix3.jpg",
    bgImage: "../assets/images/matrix3.jpg",
    description:
      "Todo lo que tiene un comienzo tiene un final. La guerra estalla en la superficie de la tierra mientras las máquinas invaden Zion. Allí donde Reloaded significaba vida, Revolutions apunta a la muerte.",
    curiosities:
      "Fue la primera película de acción real en estrenarse simultáneamente en las principales ciudades del mundo a la misma hora exacta.",
    cast: [
      {
        name: "Keanu Reeves",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg",
      },
      {
        name: "Carrie-Anne Moss",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/xD4jTA3KmVp5Rq3aHcymL9DUGjD.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=hMbexEPAOQI",
  },
  {
    id: 44,
    title: "Matrix Resurrections",
    year: "2021",
    rating: "R",
    duration: "148 min",
    score: "4.9/10",
    genres: ["Ciencia ficción", "Acción"],
    image: "../assets/images/matrix4.jpg",
    bgImage: "../assets/images/matrix4.jpg",
    description:
      "Neo vive una vida normal y corriente en San Francisco mientras su terapeuta le prescribe pastillas azules. Hasta que Morfeo le ofrece la pastilla roja y vuelve a abrir su mente al mundo de Matrix.",
    curiosities:
      "Es la única entrega de la saga Matrix que ha sido dirigida en solitario por Lana Wachowski, sin la colaboración de su hermana Lilly.",
    cast: [
      {
        name: "Keanu Reeves",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg",
      },
      {
        name: "Carrie-Anne Moss",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/xD4jTA3KmVp5Rq3aHcymL9DUGjD.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=9ix7TUGVYIo",
  },
  {
    id: 45,
    title: "Shrek 2",
    year: "2004",
    rating: "PG",
    duration: "93 min",
    score: "7.0/10",
    genres: ["Animación", "Comedia", "Fantasía"],
    image: "../assets/images/shrek2.jpg",
    bgImage: "../assets/images/shrek2.jpg",
    description:
      "Cuando Shrek y la princesa Fiona regresan de su luna de miel, los padres de ella los invitan a visitar el reino de Muy Muy Lejano. Pero el rey y la maquiavélica Hada Madrina no están nada contentos con su yerno ogro.",
    curiosities:
      "Mantuvo el récord de ser la película de animación más taquillera de todos los tiempos hasta que fue superada por Toy Story 3.",
    cast: [
      {
        name: "Mike Myers",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/gjfDl52Kk02MPgUYFjs9bOy33OY.jpg",
      },
      {
        name: "Eddie Murphy",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/qgjMfefsKwSYsyCaIX46uyOXIpy.jpg",
      },
    ],
    trailer:
      "https://www.youtube.com/watch?v=YqBudyS2NXE&list=PLUuSMpmfbqWwpgZiII7REcpdbtOGw3EPa",
  },
  {
    id: 46,
    title: "Shrek Tercero",
    year: "2007",
    rating: "PG",
    duration: "93 min",
    score: "6.1/10",
    genres: ["Animación", "Comedia", "Fantasía"],
    image: "../assets/images/shrek3.jpg",
    bgImage: "../assets/images/shrek3.jpg",
    description:
      "Tras la repentina enfermedad del Rey Harold, Shrek debe encontrar a un heredero adecuado para el trono de Muy Muy Lejano o tendrá que asumirlo él mismo. Mientras tanto, el resentido Príncipe Encantador organiza un golpe de estado con los villanos de los cuentos.",
    curiosities:
      "Justin Timberlake le dio la voz al joven rey Arturo ('Artie') en la versión original en inglés.",
    cast: [
      {
        name: "Mike Myers",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/gjfDl52Kk02MPgUYFjs9bOy33OY.jpg",
      },
      {
        name: "Eddie Murphy",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/qgjMfefsKwSYsyCaIX46uyOXIpy.jpg",
      },
    ],
    trailer:
      "https://www.youtube.com/watch?v=MuUwZD2cb4A&list=PLglBQN_Qe_0DS2WBoKj5HFllSb6iuG3aC",
  },
  {
    id: 47,
    title: "Shrek, felices para siempre",
    year: "2010",
    rating: "PG",
    duration: "93 min",
    score: "5.9/10",
    genres: ["Animación", "Comedia", "Fantasía"],
    image: "../assets/images/shrek4.jpg",
    bgImage: "../assets/images/shrek4.jpg",
    description:
      "En lugar de asustar a los aldeanos, el ogro Shrek accede a firmar un pacto con el embaucador Rumpelstiltskin. De pronto se encuentra en una versión alternativa de Muy Muy Lejano donde Fiona no lo conoce y Rumpelstiltskin es el rey.",
    curiosities:
      "Fue promocionada originalmente como 'El capítulo final' de la franquicia de Shrek antes de que se anunciara una quinta entrega años más tarde.",
    cast: [
      {
        name: "Mike Myers",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/gjfDl52Kk02MPgUYFjs9bOy33OY.jpg",
      },
      {
        name: "Eddie Murphy",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/qgjMfefsKwSYsyCaIX46uyOXIpy.jpg",
      },
    ],
    trailer: "https://www.youtube.com/watch?v=9Z4OzkEzAno",
  },
  {
    id: 48,
    title: "Shrek 5",
    year: "2027",
    rating: "PG",
    duration: "N/A",
    score: "N/A",
    genres: ["Animación", "Comedia", "Fantasía"],
    image: "../assets/images/shrek5.jpg",
    bgImage: "../assets/images/shrek5.jpg",
    description:
      "Quinta entrega de la saga Shrek. Las nuevas y mágicas aventuras del querido ogro verde en compañía de sus amigos inseparables: Asno, la princesa Fiona y el Gato con Botas.",
    curiosities:
      "Supone el esperado regreso de las voces originales principales tras más de una década de la cuarta entrega.",
    cast: [
      {
        name: "Mike Myers",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/gjfDl52Kk02MPgUYFjs9bOy33OY.jpg",
      },
      {
        name: "Eddie Murphy",
        photo:
          "https://media.themoviedb.org/t/p/w300_and_h450_face/qgjMfefsKwSYsyCaIX46uyOXIpy.jpg",
      },
    ],
    trailer:
      "https://www.youtube.com/watch?v=KbiwL74KyJQ&pp=ygUPdHJhaWxlciBTaHJlayA1",
  },
];

// Comprobación para ver si funciona
console.log("Base de datos de películas cargada:", movies);
