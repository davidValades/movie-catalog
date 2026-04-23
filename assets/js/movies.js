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
    description: "El jurado de un juicio por asesinato debe deliberar sobre la culpabilidad de un joven de 18 años. A medida que la docena de hombres intenta llegar a una decisión unánime, un miembro siembra la duda razonable.",
    curiosities: "Casi toda la película se rodó en una sola habitación para crear una sensación de claustrofobia.",
    cast: [
      { name: "Henry Fonda", photo: "" },
      { name: "Lee J. Cobb", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=TEN-2uTi2c0"
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
    description: "Elsa es una directora de publicidad cuya madre muere durante un largo puente del mes de diciembre. Encuentra refugio en el trabajo, aunque es más bien una huida hacia adelante. Viaja a Lanzarote para intentar superar el duelo.",
    curiosities: "Seleccionada en Sección Oficial del Festival de Cannes (Mayo 2026).",
    cast: [
      { name: "Pendiente", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=SNbVMk-nLu4"
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
    description: "Un marine parapléjico enviado a la luna Pandora en una misión única se debate entre seguir sus órdenes y proteger el mundo al que siente que pertenece.",
    curiosities: "El idioma Na'vi fue creado desde cero por un lingüista especialmente para la película.",
    cast: [
      { name: "Sam Worthington", photo: "" },
      { name: "Zoe Saldana", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=CpXJHWSXJW0"
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
    description: "Un 'blade runner' debe perseguir y exterminar a cuatro replicantes que robaron una nave en el espacio y han regresado a la Tierra para encontrar a su creador.",
    curiosities: "El famoso monólogo 'Lágrimas en la lluvia' fue improvisado en gran parte por Rutger Hauer la noche anterior a la grabación.",
    cast: [
      { name: "Harrison Ford", photo: "" },
      { name: "Rutger Hauer", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=eogpIG53Cis"
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
    description: "Dos hombres encarcelados forjan una fuerte amistad a lo largo de los años, encontrando consuelo y redención a través de actos de decencia común.",
    curiosities: "Es la película mejor valorada de todos los tiempos en la lista Top 250 de IMDb.",
    cast: [
      { name: "Tim Robbins", photo: "" },
      { name: "Morgan Freeman", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=gNS84kTqI3M"
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
    description: "Una bailarina comprometida se enfrenta a la competencia de una recién llegada y comienza a perder el contacto con la realidad a medida que se acerca el estreno de la obra.",
    curiosities: "Natalie Portman entrenó hasta 8 horas diarias durante más de un año para preparar sus escenas de ballet.",
    cast: [
      { name: "Natalie Portman", photo: "" },
      { name: "Mila Kunis", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=5jaI1XOB-bs"
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
    description: "El guerrero escocés William Wallace lidera a sus compatriotas en una rebelión para liberar a su tierra natal de la tiranía del rey Eduardo I de Inglaterra.",
    curiosities: "Las batallas masivas fueron filmadas usando a miembros de la Reserva del Ejército Irlandés como extras.",
    cast: [
      { name: "Mel Gibson", photo: "" },
      { name: "Sophie Marceau", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=OwJGElRruv8"
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
    description: "En el año 1890, el abogado Jonathan Harker viaja a Transilvania, donde el conde Drácula, fascinado por la novia de Harker, viaja hasta Londres 'cruzando océanos de tiempo' para conocerla.",
    curiosities: "Francis Ford Coppola insistió en no usar efectos especiales por ordenador, utilizando trucos de cámara tradicionales.",
    cast: [
      { name: "Gary Oldman", photo: "" },
      { name: "Winona Ryder", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=CjgwUB1CXek"
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
    description: "Paul Atreides se une a Chani y a los Fremen en su búsqueda de venganza contra los conspiradores que destruyeron a su familia.",
    curiosities: "Se construyeron enormes decorados prácticos en el desierto para reducir el uso de pantallas verdes.",
    cast: [
      { name: "Timothée Chalamet", photo: "" },
      { name: "Zendaya", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=Qv7I3wDfFzI"
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
    description: "Durante la Guerra de Secesión, un cazarrecompensas forma una inestable alianza con dos criminales para encontrar una fortuna en oro enterrada.",
    curiosities: "La icónica banda sonora de Ennio Morricone fue compuesta antes de que se rodara la película para que el director ajustara el ritmo de las escenas a la música.",
    cast: [
      { name: "Clint Eastwood", photo: "" },
      { name: "Eli Wallach", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=exJOy6uTkek"
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
    description: "Cuando la amenaza conocida como el Joker emerge de su misterioso pasado, causa estragos y caos en la gente de Gotham.",
    curiosities: "Heath Ledger se encerró en una habitación de hotel durante semanas para preparar la psicología del Joker.",
    cast: [
      { name: "Christian Bale", photo: "https://www.filmaffinity.com/es/name.php?name-id=123456789" },
      { name: "Heath Ledger", photo: "https://www.filmaffinity.com/es/name.php?name-id=987654321" }
    ],
    trailer: "https://www.youtube.com/watch?v=Qs-NylETt1E"
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
    description: "El patriarca envejecido de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su hijo reacio.",
    curiosities: "Marlon Brando usó prótesis dentales para dar a Don Corleone el aspecto de un bulldog.",
    cast: [
      { name: "Marlon Brando", photo: "" },
      { name: "Al Pacino", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=gCVj1LeYnsc"
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
    description: "Se narra la historia de los primeros años de Vito Corleone en la ciudad de Nueva York, mientras su hijo, Michael, consolida y expande su control sobre el sindicato del crimen familiar.",
    curiosities: "Es la primera secuela en la historia en ganar el Óscar a Mejor Película.",
    cast: [
      { name: "Al Pacino", photo: "" },
      { name: "Robert De Niro", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=SBRv7-y3gb8"
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
    description: "Mathilda, una niña de 12 años, es acogida a regañadientes por Léon, un asesino profesional, después de que su familia sea asesinada.",
    curiosities: "Fue el debut cinematográfico de Natalie Portman, quien impresionó al director en su audición.",
    cast: [
      { name: "Jean Reno", photo: "" },
      { name: "Natalie Portman", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=aNQqoExfQsg"
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
    description: "Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso y peligroso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.",
    curiosities: "Las tres películas se filmaron simultáneamente en Nueva Zelanda durante más de un año.",
    cast: [
      { name: "Elijah Wood", photo: "" },
      { name: "Ian McKellen", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=3GJp6p_mgPo"
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
    description: "Gandalf y Aragorn lideran el Mundo de los Hombres contra el ejército de Sauron para desviar su mirada de Frodo y Sam mientras se acercan al Monte del Destino.",
    curiosities: "Ganó los 11 premios Óscar a los que estaba nominada, igualando el récord de Ben-Hur y Titanic.",
    cast: [
      { name: "Elijah Wood", photo: "" },
      { name: "Viggo Mortensen", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=h-9RYiqyqjk"
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
    description: "Un gato se despierta en un mundo cubierto de agua, donde la raza humana parece haber desaparecido. Busca refugio en un barco con un grupo de otros animales.",
    curiosities: "Película de animación europea elogiada por su narrativa visual centrada en el comportamiento animal puro.",
    cast: [
      { name: "Animación", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=l5zSgSuIDU4"
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
    description: "Un general romano convertido en esclavo viaja a Roma como gladiador para vengarse del emperador corrupto que asesinó a su familia y lo envió a la esclavitud.",
    curiosities: "Oliver Reed falleció durante el rodaje y sus últimas escenas se completaron con dobles y tecnología CGI temprana.",
    cast: [
      { name: "Russell Crowe", photo: "" },
      { name: "Joaquin Phoenix", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=P5ieIbInFpg"
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
    description: "En Hoppers, los científicos descubren la tecnología para instalar la conciencia humana en animales robóticos hiperrealistas, permitiendo a las personas comunicarse con los animales.",
    curiosities: "Es uno de los proyectos originales de Pixar de mediados de la década, centrado en la conexión humano-naturaleza.",
    cast: [
      { name: "Animación", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=bv0sKzFvpmo"
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
    description: "Katniss Everdeen ocupa voluntariamente el lugar de su hermana menor en los Juegos del Hambre: una competencia televisada en la que dos adolescentes de cada uno de los doce Distritos de Panem son elegidos al azar para luchar a muerte.",
    curiosities: "Jennifer Lawrence dudó varios días antes de aceptar el papel debido a la magnitud de la franquicia.",
    cast: [
      { name: "Jennifer Lawrence", photo: "" },
      { name: "Josh Hutcherson", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=_8Ktfs2mBDY"
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
    description: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad.",
    curiosities: "El físico teórico Kip Thorne colaboró estrechamente con Christopher Nolan para asegurar la precisión científica de los agujeros negros.",
    cast: [
      { name: "Matthew McConaughey", photo: "" },
      { name: "Anne Hathaway", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=hhCtMhk8eHo"
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
    description: "En la Polonia ocupada por los alemanes durante la Segunda Guerra Mundial, el industrial Oskar Schindler se preocupa gradualmente por su fuerza laboral judía después de presenciar su persecución por parte de los nazis.",
    curiosities: "Steven Spielberg rechazó cobrar un sueldo por dirigirla, calificando cualquier dinero como 'dinero manchado de sangre'.",
    cast: [
      { name: "Liam Neeson", photo: "" },
      { name: "Ralph Fiennes", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=BmkchuRJ82w"
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
    description: "Mad Max se ve arrastrado a formar parte de un grupo que huye a través del desierto en un War Rig conducido por una Emperatriz de élite: Furiosa. Escapan de una Ciudadela tiranizada por Immortan Joe.",
    curiosities: "Gran parte de la película está hecha con efectos prácticos reales (coches destrozándose en el desierto) en lugar de CGI.",
    cast: [
      { name: "Tom Hardy", photo: "" },
      { name: "Charlize Theron", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=GvsFoGIuRX4"
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
    description: "Cuando un hermoso extraño lleva al hacker Neo a un peligroso inframundo, descubre la impactante verdad: la vida que conoce es el complejo engaño de una malvada inteligencia artificial.",
    curiosities: "Popularizó el efecto visual 'bullet time', donde la acción parece congelarse o moverse a cámara lenta.",
    cast: [
      { name: "Keanu Reeves", photo: "" },
      { name: "Carrie-Anne Moss", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=Pl_H2Lmjn6k"
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
    description: "En una ciudad futurista muy estratificada, el hijo de la mente maestra de la ciudad se enamora de una profeta de la clase trabajadora que predice la llegada de un salvador que mediará en sus diferencias.",
    curiosities: "Es una de las películas mudas más caras jamás realizadas y pionera en el cine de ciencia ficción.",
    cast: [
      { name: "Brigitte Helm", photo: "" },
      { name: "Alfred Abel", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=gdtZv3XROnc"
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
    description: "Un chico se encuentra en la plataforma de una estación cuando un tren está a punto de salir. ¿Debería ir con su madre o quedarse con su padre? De esta elección surgen infinitas vidas posibles.",
    curiosities: "La película tardó casi diez años en realizarse desde su concepción hasta su estreno.",
    cast: [
      { name: "Jared Leto", photo: "" },
      { name: "Sarah Polley", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=MqIsJuqWy8w"
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
    description: "El profesor de ciencias Ryland Grace se despierta en una nave espacial a años luz de casa sin recordar quién es ni cómo ha llegado hasta allí para salvar la Tierra.",
    curiosities: "Basada en la novela homónima de Andy Weir, autor de 'El Marciano'.",
    cast: [
      { name: "Ryan Gosling", photo: "https://www.filmaffinity.com/es/name.php?name-id=766040752" },
      { name: "Sandra Hüller", photo: "https://www.filmaffinity.com/es/name.php?name-id=719063480" }
    ],
    trailer: "https://youtu.be/jz6JB0LCNRs?si=WRTcHBkbS3HDWSE5"
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
    description: "Las vidas de dos sicarios de la mafia, un boxeador, la esposa de un gángster y un par de bandidos de restaurantes se entrelazan en cuatro historias de violencia y redención.",
    curiosities: "La icónica escena del baile de John Travolta y Uma Thurman está inspirada en la película clásica 8½ de Fellini.",
    cast: [
      { name: "John Travolta", photo: "" },
      { name: "Samuel L. Jackson", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
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
    description: "Documental sobre el Nobel aragonés que explora desde una mirada presente su fascinación por las imágenes, con un enfoque integrador de sus facetas artístico-científicas.",
    curiosities: "El documental responde a la última pregunta de Cajal: ¿cómo se forman las imágenes en el cerebro?",
    cast: [
      { name: "Documental", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=NTTA-oYcJ3Q"
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
    description: "Un ogro cascarrabias, pero de buen corazón, emprende una búsqueda junto a un burro parlanchín para rescatar a una princesa y recuperar su pantano de manos del malvado Lord Farquaad.",
    curiosities: "Ganó el primer premio Óscar a la Mejor Película de Animación, categoría introducida ese mismo año.",
    cast: [
      { name: "Mike Myers", photo: "" },
      { name: "Eddie Murphy", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=B88JfTyJ1Fw"
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
    description: "Después de conseguir el trabajo de su vida, un músico de jazz de Nueva York se encuentra repentinamente atrapado en un lugar extraño entre la Tierra y el más allá.",
    curiosities: "Es la primera película de Pixar con un protagonista afroamericano.",
    cast: [
      { name: "Jamie Foxx", photo: "" },
      { name: "Tina Fey", photo: "" }
    ],
    trailer: "https://www.youtube.com/watch?v=1PI7e75f3tQ"
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
    description: "Secuela de 'Super Mario Bros: La película'. Los hermanos Mario y Luigi y la princesa Peach emprenden una aventura hasta los confines del espacio y a través de la galaxia.",
    curiosities: "Introduce por primera vez a los Luma y a la princesa Rosalina en el universo cinematográfico de Illumination.",
    cast: [
      { name: "Chris Pratt", photo: "" },
      { name: "Anya Taylor-Joy", photo: "" }
    ],
    trailer: ""
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
    description: "Un reportero de televisión que se queja de Dios, recibe la oportunidad de asumir Sus poderes durante una semana para ver si puede hacer un mejor trabajo.",
    curiosities: "Morgan Freeman fue la única elección del director para interpretar a Dios.",
    cast: [
      { name: "Jim Carrey", photo: "" },
      { name: "Morgan Freeman", photo: "" }
    ],
    trailer: ""
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
    description: "José Luis Torrente, siempre convencido de ser un héroe nacional, es persuadido para meterse en política y, con su estilo vulgar, logra convertirse en líder de un partido populista.",
    curiosities: "La sexta y presumiblemente última entrega de la famosa saga creada por Santiago Segura.",
    cast: [
      { name: "Santiago Segura", photo: "" }
    ],
    trailer: ""
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
    description: "Un ex detective de policía de San Francisco lidia con sus demonios personales y se obsesiona con una mujer hermosamente inquietante a la que le han encargado seguir.",
    curiosities: "Alfred Hitchcock inventó el 'efecto vértigo' (dolly zoom) para esta película y así mostrar la acrofobia del protagonista.",
    cast: [
      { name: "James Stewart", photo: "" },
      { name: "Kim Novak", photo: "" }
    ],
    trailer: ""
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
    description: "En un futuro lejano, un pequeño robot recolector de residuos se embarca inadvertidamente en un viaje espacial que finalmente decidirá el destino de la humanidad.",
    curiosities: "Para diseñar los sonidos de la película, Pixar contrató a Ben Burtt, el genio que diseñó los sonidos de Star Wars.",
    cast: [
      { name: "Ben Burtt (Voz)", photo: "" },
      { name: "Elissa Knight (Voz)", photo: "" }
    ],
    trailer: ""
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
    description: "Un joven y prometedor baterista se inscribe en un conservatorio de música muy competitivo donde sus sueños de grandeza son guiados por un instructor que no se detendrá ante nada para desarrollar el potencial del estudiante.",
    curiosities: "El director, Damien Chazelle, escribió la película basándose en sus propias experiencias reales en una banda de jazz.",
    cast: [
      { name: "Miles Teller", photo: "" },
      { name: "J.K. Simmons", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 37,
    title: "Batman Begins",
    year: "2005",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Acción", "Thriller", "Fantástico"],
    image: "../assets/images/elCaballeroOscuroBegins.jpg",
    bgImage: "../assets/images/elCaballeroOscuroBegins.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Christian Bale", photo: "" },
      { name: "Liam Neeson", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 38,
    title: "El caballero oscuro: La leyenda renace",
    year: "2012",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Acción", "Thriller", "Drama"],
    image: "../assets/images/darkKnightRises.jpg",
    bgImage: "../assets/images/darkKnightRises.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Christian Bale", photo: "" },
      { name: "Tom Hardy", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 39,
    title: "Dune",
    year: "2021",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Ciencia ficción", "Aventuras", "Drama"],
    image: "../assets/images/dune1.jpg",
    bgImage: "../assets/images/dune1.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Timothée Chalamet", photo: "" },
      { name: "Rebecca Ferguson", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 40,
    title: "El Señor de los Anillos: Las dos torres",
    year: "2002",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Fantasía", "Aventuras", "Acción"],
    image: "../assets/images/ESDLA2.jpg",
    bgImage: "../assets/images/ESDLA2.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Elijah Wood", photo: "" },
      { name: "Viggo Mortensen", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 41,
    title: "Gladiator II",
    year: "2024",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Acción", "Drama", "Historia"],
    image: "../assets/images/gladiatorII.jpg",
    bgImage: "../assets/images/gladiatorII.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Paul Mescal", photo: "" },
      { name: "Pedro Pascal", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 42,
    title: "Matrix Reloaded",
    year: "2003",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Ciencia ficción", "Acción"],
    image: "../assets/images/matrix2.jpg",
    bgImage: "../assets/images/matrix2.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Keanu Reeves", photo: "" },
      { name: "Carrie-Anne Moss", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 43,
    title: "Matrix Revolutions",
    year: "2003",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Ciencia ficción", "Acción"],
    image: "../assets/images/matrix3.jpg",
    bgImage: "../assets/images/matrix3.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Keanu Reeves", photo: "" },
      { name: "Carrie-Anne Moss", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 44,
    title: "Matrix Resurrections",
    year: "2021",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Ciencia ficción", "Acción"],
    image: "../assets/images/matrix4.jpg",
    bgImage: "../assets/images/matrix4.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Keanu Reeves", photo: "" },
      { name: "Carrie-Anne Moss", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 45,
    title: "Shrek 2",
    year: "2004",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Animación", "Comedia", "Fantasía"],
    image: "../assets/images/shrek2.jpg",
    bgImage: "../assets/images/shrek2.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Mike Myers", photo: "" },
      { name: "Eddie Murphy", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 46,
    title: "Shrek Tercero",
    year: "2007",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Animación", "Comedia", "Fantasía"],
    image: "../assets/images/shrek3.jpg",
    bgImage: "../assets/images/shrek3.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Mike Myers", photo: "" },
      { name: "Eddie Murphy", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 47,
    title: "Shrek, felices para siempre",
    year: "2010",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Animación", "Comedia", "Fantasía"],
    image: "../assets/images/shrek4.jpg",
    bgImage: "../assets/images/shrek4.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Mike Myers", photo: "" },
      { name: "Eddie Murphy", photo: "" }
    ],
    trailer: ""
  },
  {
    id: 48,
    title: "Shrek 5",
    year: "2026",
    rating: "PENDIENTE",
    duration: "PENDIENTE",
    score: "PENDIENTE",
    genres: ["Animación", "Comedia", "Fantasía"],
    image: "../assets/images/shrek5.jpg",
    bgImage: "../assets/images/shrek5.jpg",
    description: "PENDIENTE",
    curiosities: "PENDIENTE",
    cast: [
      { name: "Mike Myers", photo: "" },
      { name: "Eddie Murphy", photo: "" }
    ],
    trailer: ""
  }
];

// Comprobación para ver si funciona
console.log("Base de datos de películas cargada:", movies);