import React, { useState } from "react";
import "./css_files/bookTimeLine.css";
import iconDown from "./media-images/icon-download.png";
// import iconExter from './media-images/icon-externalLink.png';
import imgNot from "./media-images/img_not_available.png";
import imgBtn from "./media-images/icons8-close-window-100.png";
const _pathImg = process.env.PUBLIC_URL + "/Assets/books/imgs/";
const _pathBook = process.env.PUBLIC_URL + "/Assets/books/";

const _arByYear = [];

const _books = [
  //downloadLink serves to donwload or to navigate in a new windows tab.
  //type can be Paper/Book/Essay
  //country must be used as 'Place/Country'
  {
    id: 1,
    year: 2018,
    title: "Embodiment and presence in performing arts: the semiotics turn",
    imgSrc: "",
    downloadLink: "",
    editor: "",
    country: "Italy",
    status: "(in preparazione stampa)",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 2,
    year: 2018,
    title: "New approaches to Kinesics and proxemics in urban environments",
    imgSrc: "book-2.png",
    downloadLink: "2 -KINESICS_AND_PROXEMICS_IN_URBAN_ENVIRONM.pdf",
    editor: "LISA",
    country: "UBA-Buenos Aires",
    status: "",
    onlineView: true,
    type: "",
    desc: "Este trabajo de investigación tiene como foco principal el estudio de la signicación de los ritmos de la vida cotidiana a través de las interacciones y sincronizaciones de los cuerpos en los espacios públicos.",
  },
  {
    id: 3,
    year: 2018,
    title: "Gainsbourogh effect: sobre la fotografía de guerra",
    imgSrc: "book-3.png",
    downloadLink: "3 -Gainsborough EffectDEF(1).pdf",
    editor: "Designis, La crujía",
    country: "México-Buenos Aires",
    status: "",
    onlineView: true,
    type: "",
    desc: "Este cambio en el discurso y de las narrativas de la imagen de guerra venía avanzando progresivamente ya a partir del final de la Guerra Fría y el acontecimiento de la caída del muro de Berlín.",
  },
  {
    id: 4,
    year: 2018,
    title:
      "Samurai dance: the semiotics and aesthetics of action in Japanese videogames",
    imgSrc: "",
    downloadLink: "4 -SEMIOTICS_OF_VIDEOGAMES_THE_SAMURAI_DANC.pdf",
    editor: "Tonodigital",
    country: "Universidad de Murcia, Spain",
    status: "",
    onlineView: true,
    type: "",
    desc: "La teoría semiótica de los mundos posibles narrativos, introducida con intensidad entre los años ochenta y noventa ha mostrado su eficacia a través de sus modelos y nociones teóricas",
  },
  {
    id: 5,
    year: 2018,
    title: "La casa delle otto porte: per una semiotica dell ́avvenimento",
    imgSrc: "book-5.png",
    downloadLink: "5 -LA_CASA_DE_LAS_OCHO_PUERTAS_PARA_UNA_SEM.pdf",
    editor: "Torax",
    country: "Universidad Nacional, Perú",
    status: "",
    onlineView: true,
    type: "",
    desc: "En estos años recientes he vuelto sobre la reflexión de la significación del acontecimiento pero desde una perspectiva muy distinta a la metáfora del accidente y la catástrofe, a la manera, por ejemplo, de Jean Baudrillard o de Paul Virilio.",
  },
  {
    id: 6,
    year: 2018,
    title: "Tokio postures: gestuality, kinesis and style in high-speed city",
    imgSrc: "book-6.png",
    downloadLink: "6 -TOKIO_POSTURES.pdf",
    editor: "DESIGNO 3",
    country: "Faculty of Architecture, Mérida",
    status: "",
    onlineView: true,
    type: "",
    desc: "Este ensayo aborda el tema de la kinésica, la proxémica y las posturas del cuerpo desde una pers- pectiva semiótica, sociológica y etnográfica. Forma parte de los resultados de un proyecto más amplio sobre los ritmos urbanos contemporáneos en el cual participan fotógrafos, diseñadores, cineastas, bailarines y etnógrafos.",
  },
  {
    id: 7,
    year: 2018,
    title: "Proxemics and kinesics in social mass movements",
    imgSrc: "",
    downloadLink: "",
    editor: "LISA 13",
    country: "Universidad de Buenos Aires, UBA",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 8,
    year: 2017,
    title: "Intermedialitá: arti visive e letteratura, Edizione e prólogo",
    imgSrc: "",
    downloadLink: "",
    editor: "Juan Pablos editor",
    country: "UAEM, México.",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 9,
    year: 2017,
    title: "The Lotman model and geopolitics of time-space",
    imgSrc: "",
    downloadLink: "",
    editor: "LISA 12",
    country: "Universidad de Buenos Aires, UBA",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 10,
    year: 2017,
    title:
      "Isole, mappe, labirinti: semiotica dello spazio nei romanzi di Umberto Eco",
    imgSrc: "",
    downloadLink: "",
    editor: "Editrice Meltemi",
    country: "Italia",
    status: "(in preparazione stampa)",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 11,
    year: 2017,
    title: "For a semiotics of the object of art",
    imgSrc: "",
    downloadLink: "",
    editor: "Miguel Urrutia Museum",
    country: "Council of Culture of Bogotá, Colombia",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 12,
    year: 2017,
    title: "Multimediality, art and literature",
    imgSrc: "",
    downloadLink: "",
    editor: "Rocco Mangieri",
    country: "University of Morelos, Mexico",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 13,
    year: 2016,
    title: "Semiótica del transmedia: Prison Valley",
    imgSrc: "",
    downloadLink: "",
    editor: "Atti Convegno Transmedialitá",
    country: "UAEM, Morelos-Mexico",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 14,
    year: 2014,
    title: "Il corpo e il dono, in Episteme 6 edizioni",
    imgSrc: "",
    downloadLink: "14 -EL_CUERPO_EL_ORGANO_Y_EL_DON.doc",
    editor: "Center for Cultural Applied Sciences",
    country: "Seoul University, South Korea",
    status: "",
    onlineView: true,
    type: "",
    desc: "La donación de órganos es un espacio semiótico complejo, polémico y contractual pero sobre todo pasional. Las campañas visuales y de diseño gráfico se insertan en redes de producción de sentido y de resistencias simbólicas.",
  },
  {
    id: 15,
    year: 2014,
    title: "Online Telepolitics: for a semiotics of the media,",
    imgSrc: "",
    downloadLink: "",
    editor: "Monte Avila Editors",
    country: "Ministery of Information, Caracas",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 16,
    year: 2014,
    title: "Imagoletragraphy: elements of visual semiotics,",
    imgSrc: "book-16",
    downloadLink: "16 -IMAGOLETRAGRAFIA_Manual_de_semiotica_gra.pdf",
    editor: "LA, Direction of publications",
    country: "Merida",
    status: "",
    onlineView: true,
    type: "",
    desc: "Através de la palabra-amalgama LETRAimagoGRAFIA vamos a designar en principio algunos conceptos y propuestas teóricas aplicables en el espacio de la teoría y la práctica del diseño gráfico y las artes visuales.",
  },
  {
    id: 17,
    year: 2013,
    title: "Sèmiotique des arts vivants, Congrees des Arts Vivants",
    imgSrc: "",
    downloadLink: "",
    editor: "ULB",
    country: "Accademie Belgique des Arts, Proceeding acts ",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 18,
    year: 2013,
    title: "Semiotics and graphic design in Venezuela",
    imgSrc: "",
    downloadLink: "18 -APUNTES_PARA_UNA_SEMIOTICA_DEL_DISENO_GR.pdf",
    editor: "Designis 21, Ed.La Crujía",
    country: "Buenos Aires",
    status: "",
    onlineView: true,
    type: "",
    desc: "El diseño gráfico implica una semiotica. De hecho nadie podría negar dentro de ciertos límites epistemológicos que hacer una imagen o un producto gráfico implica (incluso fuera de toda mirada semiótica específica) una operación visual...",
  },
  {
    id: 19,
    year: 2013,
    title: "Interdiscipline et arts vivants",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. St. Honoré",
    country: "Master in Arts Vivants-ULB, Paris France",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 20,
    year: 2011,
    title: "Retrobus, metáfore del tatuaggio, in Retorica del visibile 1",
    imgSrc: "",
    downloadLink: "",
    editor: "Aracne editrice",
    country: "Roma",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 21,
    year: 2011,
    title:
      "Pittura e retorica: gesti, indici, vettori, in Retorica del visibile 2",
    imgSrc: "",
    downloadLink: "",
    editor: "Aracne editrice",
    country: "Roma",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 22,
    year: 2011,
    title:
      "A transfiguracoes do corpo presidential a traves do entorno das midias",
    imgSrc: "",
    downloadLink: "",
    editor: "Difusao editores",
    country: "Brazil",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 23,
    year: 2011,
    title: "Dreams, delirium, filming: “Spellbound” by Alfred Hitchcock",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Itaca,",
    country: "México",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 24,
    year: 2010,
    title: "Continuous and discontinuous: for a semiotics of dance",
    imgSrc: "",
    downloadLink: "24 -PARA_UNA_SEMIOTICA_DE_LA_DANZA_entre_lo.pdf",
    editor: "Ed.La Crujía",
    country: "Buenos Aires ",
    status: "",
    onlineView: true,
    type: "",
    desc: "La danza, para constituirse en objeto semiótico, debe ser biplanar(Hjelsmlev 1968). De hecho lo es aún en el caso de los movimientos corpogestuales-rítmicos más sencillos dotados de ciertos niveles de expresión y de comunicación social como las pequeñas “frases” y sintagmas kinésicos que hacemos moviendo el cuerpo ( total o parcialmente)...",
  },
  {
    id: 25,
    year: 2010,
    title: "Bodies in action, theater, dance and multiculturalism",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Actual",
    country: "Mérida",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 26,
    year: 2010,
    title: "Reader in Urbis",
    imgSrc: "book-26.png",
    downloadLink: "26 -LECTOR_IN_URBIS.pdf",
    editor: "Foundation for Urban Culture",
    country: "Caracas",
    status: "",
    onlineView: true,
    type: "",
    desc: "Las ciudades, los espacios considerados como lugares urbanos, pueden ser abordados como un texto o conjunto de textos espacio-temporales dotados de sentido, de efectos de sentido que se expresan a través de las formas de vida urbana,de los “estilos urbanos”...",
  },
  {
    id: 27,
    year: 2009,
    title:
      "Bodies in action: Semiotics of movements, Chinese Semiotics Studies vol.1,",
    imgSrc: "",
    downloadLink: "",
    editor: "Nanjing University Press. Chinese association of semiotics",
    country: "China",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 28,
    year: 2008,
    title:
      'Hermetic Venus: secret codes in "The Birth of Venus" by Sandro Botticelli',
    imgSrc: "",
    downloadLink: "",
    editor: "La Torre del Virrey",
    country: "Madrid",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 29,
    year: 2008,
    title: "Internet users and pornographers: semiotic on the net",
    imgSrc: "",
    downloadLink: "",
    editor: "Proceedings of the VIII International Congress of Semiotics",
    country: "Lyon, France",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 30,
    year: 2008,
    title:
      "Labyrinths, encyclopedias, islands: space and narrativity in the work of Umberto Eco",
    imgSrc: "",
    downloadLink: "",
    editor: "Co-publication ULA- Philosophy Society of Murcia",
    country: "Murcia, Spain",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 31,
    year: 2008,
    title:
      "Labyrinths, Islands, Pendulums: the semiotics of space in Umberto Eco",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. La crujía",
    country: "Buenos Aires, Argentina",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 32,
    year: 2007,
    title: "Smetti di soffrire: raptus e messa in scena, in Mediamerica",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Cartman",
    country: "Torino, Italy",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 33,
    year: 2007,
    title: "El cuerpo del Chè: el gesto que indica",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed.Gedisa",
    country: "Buenos Aires-Barcelona",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 34,
    year: 2006,
    title: "Contact rituals through the kitchen",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Gedisa",
    country: "Buenos Aires-Barcelona",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 35,
    year: 2006,
    title: "Modi di produzione segnica nell ́ “Isola del giorno prima” di U.Eco",
    imgSrc: "",
    downloadLink: "",
    editor: "SIGNA, UNED",
    country: "Madrid",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 36,
    year: 2005,
    title: "Semiosis and pragmatics of color: the banner",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. J.L.Caivano, Ed.UBA",
    country: "Buenos Aires",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 37,
    year: 2004,
    title:
      "IMAGOGRAPHY: Elements of visual semiotics, Documentation and Research Notebooks 14",
    imgSrc: "",
    downloadLink: "",
    editor: "EADG",
    country: "Mérida",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 38,
    year: 2004,
    title: "Towards an Experimental Faculty of Art, in Investigation 9,",
    imgSrc: "",
    downloadLink: "",
    editor: "CDCHT",
    country: "",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 39,
    year: 2004,
    title: "Three ways , three subjects: Eco, Lotman, Greimas",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Frónesis, Editorial Biblioteca Nueva",
    country: "Madrid",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 40,
    year: 2004,
    title: "Dematerialize-repeating-collecting",
    imgSrc: "",
    downloadLink: "",
    editor: "CIE",
    country: "ULA",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 41,
    year: 2004,
    title: "Figures of begging: the immobility (with F.V. Gómez)",
    imgSrc: "",
    downloadLink: "",
    editor: "Spanish Association of Semiotics",
    country: "Univ.de Valencia-Spain",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 42,
    year: 2004,
    title:
      "Unfolded bodies: theory of the interface and virtual realities-VISIO Number 8",
    imgSrc: "",
    downloadLink: "",
    editor: "Edition coordinated by Marie Carani",
    country:
      "Congress of the International Association of Visual Semiotics, Quebec - Canada",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 43,
    year: 2003,
    title: "Nature as an encrypted text",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Gedisa, Edition coordinated by A. Gimate Welsh",
    country: "México-Buenos Aires",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 44,
    year: 2003,
    title: "Weisen des Bettelns, Zeitenschrift für semiotik",
    imgSrc: "",
    downloadLink: "",
    editor: "Roland Posner editor",
    country: "University of Berlin IASS",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 45,
    year: 2001,
    title:
      "Puppets and mannequins: the sacred dimension in the work of Tadeusz Cantor, in The Theater and the Sacred",
    imgSrc: "",
    downloadLink: "",
    editor: "Council of Publications",
    country: "Univ. Murcia, Spain",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 46,
    year: 2001,
    title: "The war in the film and in the human imaginary, Malleus 10",
    imgSrc: "",
    downloadLink: "",
    editor:
      "Univ. Murcia and Sociedad Murciana de filosofía, Reedition in ESTETICA 8",
    country: "Murcia, Spain.",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 47,
    year: 2001,
    title: "L'architettura del buon gusto, in Sociosemiótica del quotidiano",
    imgSrc: "",
    downloadLink: "",
    editor: "E. Landowski, R. Marro editors, Testo & Immagine editrice",
    country: "Torino, Italy",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 48,
    year: 2001,
    title: "The figure of the animal in Rubens",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Visio. Vol 6, number 1",
    country: "IAVS, IASS. Québec, Paris ",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 49,
    year: 2000,
    title: "Brief philosophy of the monster",
    imgSrc: "",
    downloadLink: "",
    editor: "Murcia and Sociedad Murciana de Filosofía",
    country: "Murcia, Spain",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 50,
    year: 2000,
    title:
      "Six isotopies for the next millennium: Black-Hermes, Voice and Writing 10",
    imgSrc: "",
    downloadLink: "",
    editor: "Institute of Literary Research, ULA",
    country: "Merida, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 51,
    year: 2000,
    title: "The city in the film: codes, genres and poetics",
    imgSrc: "",
    downloadLink: "",
    editor: "Solar Ed. New Latin American Film Foundation",
    country: "Merida, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 52,
    year: 2000,
    title: "The borders of text",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. University of Murcia. Council of scientific publications",
    country: "Murcia, Spain",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 53,
    year: 1998,
    title: "Semiotics in Venezuela: perspectives and trends, in SIGNA 7",
    imgSrc: "",
    downloadLink: "",
    editor: "Spanish Association of Semiotics",
    country: "National University-UNED-Madrid, Spain",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 54,
    year: 1998,
    title: "Architecture in the film",
    imgSrc: "",
    downloadLink: "",
    editor: "Solar.ed,",
    country: "Academical Council. Mérida",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 55,
    year: 1998,
    title:
      "Director-editor of the series Notebooks of Research and Documentation",
    imgSrc: "",
    downloadLink: "",
    editor: "School of Visual Arts and Design, Dept. of theory",
    country: "FAAULA-CODEPRE. Merida, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 56,
    year: 1998,
    title: "Arquitetura do bon gusto, in O gusto da gente, o gusto das coisas",
    imgSrc: "",
    downloadLink: "",
    editor: "Landowski-Fiorin ed., PUC-Sao Paulo",
    country: "Brazil",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 57,
    year: 1998,
    title: "From The name of the rose until The pendulum of Foucault",
    imgSrc: "",
    downloadLink: "",
    editor: "Research and documentation notebooks. University of the Andes",
    country: "Merida, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 58,
    year: 1998,
    title: "The architecture of good taste: rhetoric and style",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. EDUC,Testo-Immagine editori",
    country: "Brazil,Italia",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 59,
    year: 1998,
    title: "The cultural object and its senses",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Univ. De Los Andes, Publications Council",
    country: "Merida, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 60,
    year: 1997,
    title: "Lector in urbis. In Architecture, sémiotique et sciences humaines",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Joseph Muntañola UPC",
    country: "Barcelona, Spain",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 61,
    year: 1995,
    title: "Reproductibility and allegorical arts: semiotics of fake",
    imgSrc: "",
    downloadLink: "",
    editor: "CONAC",
    country: "Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 62,
    year: 1994,
    title: "Imaginary cities, real characters, by Umberto Eco",
    imgSrc: "",
    downloadLink: "",
    editor: "Editor and translator",
    country: "",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 63,
    year: 1994,
    title: "Imaginary cities, real characters, by Umberto Eco",
    imgSrc: "",
    downloadLink: "",
    editor: "",
    country: "Caracas",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 64,
    year: 1992,
    title: "Teoria e finzione nei romanzi di Umberto Eco",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Eurocopy",
    country: "Italy",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 65,
    year: 1992,
    title: "Il corpo cieco: semiòtica dello spazio nell'Odissea.",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Eurocopy",
    country: "Italy",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 66,
    year: 1992,
    title: "Per una semiotica degli oggetti.",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Eurocopy",
    country: "Italy",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 67,
    year: 1990,
    title: "Semiotics of space and comedian",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. CONAC",
    country: "Maracaibo, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 68,
    year: 1990,
    title: "Architecture and meaning: the metaphor of language",
    imgSrc: "",
    downloadLink: "",
    editor: "National Council of Culture",
    country: "Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 69,
    year: 1889,
    title: "Rhetoric of the landscape: postcards",
    imgSrc: "",
    downloadLink: "",
    editor: "UCV, editor.",
    country: "Caracas, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 70,
    year: 1889,
    title: "Rhetoric of the landscape: postcards",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed.Imagen",
    country: "Caracas, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 71,
    year: 1889,
    title: "The knowledge of the image",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Central Univ. of Venezuela, Reedition in Ed Pablo Torriente",
    country: "Venezuela, Cuba",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 72,
    year: 1889,
    title:
      "Gestuality and proxemics in ethnic dance: the Tamunangue Caracas-Image",
    imgSrc: "",
    downloadLink: "",
    editor: "National council of culture",
    country: "Spain, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 73,
    year: 1986,
    title: "The dance of shapes: the objects",
    imgSrc: "",
    downloadLink: "",
    editor: "CONAC",
    country:
      "Athenaeum of Caracas. Series 5.1st Symposium of Anthropology and Semiotics of Culture",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 74,
    year: 1984,
    title: "The architecture of film",
    imgSrc: "",
    downloadLink: "",
    editor: "Ed. Polytechnic University",
    country: "Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 75,
    year: 1979,
    title: "Architectural codes in Latin-American city (with Andrés García)",
    imgSrc: "",
    downloadLink: "",
    editor: "National Council of scientific research. CONICIT",
    country: "Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 76,
    year: 1979,
    title: "Semantics of the visual perspective",
    imgSrc: "",
    downloadLink: "",
    editor: "Form and Communication",
    country: "Maracaibo, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
  {
    id: 77,
    year: 1978,
    title: "Code and message in Ftank.LL.Wright",
    imgSrc: "",
    downloadLink: "",
    editor: "University of Zulia. Fac. Architecture",
    country: "Maracaibo, Venezuela",
    status: "",
    onlineView: false,
    type: "",
    desc: "",
  },
];

export default function BookTimeLine() {
  const [clicked, setClicked] = useState(false);
  const [yearSelected, setYearSelected] = useState(0);
  const [idSelected, setIdSelected] = useState(0);
  const [isBookSelected, setIsBookSelected] = useState(false);

  const _arBtns = [];
  const _arJSXBooksByYear = [
    {
      year: 0,
      array: [],
    },
  ];

  // arrange the books by year and put them in an array
  for (let i = 0; i < _books.length; i++) {
    let _filt = _books.filter((book) => book.year === _books[i].year);
    let _array = _filt.map((b) => (
      <div
        key={`${b.id}`}
        className={`${b.onlineView ? "divBook" : "divBook divBookDisabled"}`}
        onClick={() => {
          setIdSelected(b.id);
          setIsBookSelected(true);
        }}
      >
        <p className={"textContent minimunMargPadd"}>Title: {b.title}</p>
        <p className={"textContent minimunMargPadd"}>Place: {b.country}</p>
        {b.status !== "" && b.status !== null && (
          <p className={"textContent minimunMargPadd"}>Status: {b.status}</p>
        )}
      </div>
    ));
    _arJSXBooksByYear.push({ year: _books[i].year, array: _array });
    _arByYear.push(_filt);
    i += _filt.length - 1;
    //set the btn JSX array by years
    _arBtns.push(
      <span key={`${i}`} className={"spanBtn"}>
        <div
          onClick={() => {
            setClicked(true);
            setYearSelected(_filt[0].year);
          }}
          className={"btnRegular"}
        >
          {_filt[0].year}
        </div>
      </span>
    );
  }
  // console.log(_arJSXBooksByYear);
  // _arByYear.filter(_ar => {
  //     _ar.filter(book => {
  //         if (book.year == 2018){
  //             console.log(book);
  //         }
  //     })
  // });

  // const _arDivBooks = [];
  // for(let i=0; i < _ar.length; i++){
  //     let _arItems = _ar[i].map(item =>{
  //         return <p id={item.id} className={"textBooks"}>{item.title}</p>
  //     })
  //     _arDivBooks.push(
  //         <div className={"divBooks"}>
  //             <h4 className={"titlesDiv"}>{_ar[i][0].year} - {_ar[i].length} Written this year</h4>
  //             {_arItems}
  //         </div>
  //     );
  // }
  // console.log(_arTimeLines);

  return (
    <div className={"container"}>
      {/* let us make a div array */}
      {/* {_arDivBooks} */}
      <div className={"yearsDiv"}>
        {/* <span className={"spanBtn"}>
                    <button onClick={() => {
                        setClicked(!clicked);
                        setYearSelected(_arByYear[0][0].year);
                        }}>
                            {_arByYear[0][0].year}
                    </button>
                </span> */}
        {_arBtns}
      </div>
      <div className={`bookDiv ${clicked ? "showBookDiv" : "hideBookDiv"}`}>
        <div
          className={`innerBookDiv ${
            clicked ? "showInnerBookDiv" : "hideInnerBookDiv"
          }`}
        >
          <div className={"divBtnSmall2"}>
            <div
              className={"btnClose2"}
              title="close/cerrar"
              onClick={() => setClicked(false)}
            >
              <img src={imgBtn} className={"btnImage"} alt={"Btn Close"} />
            </div>
          </div>
          <p className={"titleText minimunMargPadd centeredText"}>
            Year: {yearSelected}
          </p>
          {_arJSXBooksByYear
            .filter((ar) => ar.year === yearSelected)
            .map((_array) => _array.array)}
        </div>
      </div>
      {/* /* Div to show selected book info */}
      <div
        className={`bookInfoContainer ${
          isBookSelected ? "showInfoContainer" : "hideInfoContainer"
        }`}
      >
        <div className={`infoBookDiv ${isBookSelected ? "showIB" : "hideIB"}`}>
          {_books
            .filter((book) => book.id === idSelected)
            .map((bookFound) => (
              <div
                key={`bId-${bookFound.id}`}
                className={`bookInfoDiv ${
                  isBookSelected ? "showBI" : "hideBI"
                }`}
              >
                <div key={`btnS-${bookFound.id}`} className={"divBtnSmall"}>
                  {/* <button className={"btnClose"} title="close/cerrar" onClick={() => setIsBookSelected(false)}>X</button> */}
                  <div
                    key={`btnC-${bookFound.id}`}
                    className={"btnClose2"}
                    title="close/cerrar"
                    onClick={() => setIsBookSelected(false)}
                  >
                    <img
                      src={imgBtn}
                      className={"btnImage"}
                      alt={"Btn Close2"}
                    />
                  </div>
                </div>
                <div key={`booktextDiv-${bookFound.id}`} className={"booktext"}>
                  <p className={"titleTextBook"}>
                    <strong>Title:</strong> {bookFound.title}
                  </p>
                  {/* {bookFound.id} */}
                  <p className={"text"}>
                    <strong>Editor(s):</strong> {bookFound.editor}
                  </p>
                  <p className={"text"}>
                    <strong>Place:</strong> {bookFound.country}
                  </p>
                  <p className={"text"}>
                    <strong>Year:</strong> {bookFound.year}
                  </p>
                </div>
                <div
                  key={`bIActions-${bookFound.id}`}
                  className={"bookImageActions"}
                >
                  <div
                    key={`dRc-${bookFound.id}`}
                    className={"divRowContainer"}
                  >
                    <div key={`dIb-${bookFound.id}`} className={"divImgBook"}>
                      {/* {here we check for the image and create a var with public src} */}

                      <img
                        className={"imgBook"}
                        src={
                          bookFound.imgSrc !== ""
                            ? `${_pathImg}${bookFound.imgSrc}`
                            : `${imgNot}`
                        }
                        alt={`${_pathImg}${bookFound.imgSrc}`}
                      />
                    </div>
                    <div
                      key={`descC-${bookFound.id}`}
                      className={"descContainer"}
                    >
                      <p className={"text justify"}>
                        Description: {bookFound.desc}
                      </p>
                    </div>
                  </div>
                  <div
                    key={`dActions-${bookFound.id}`}
                    className={"divActions"}
                  >
                    <a
                      href={`${_pathBook}${bookFound.downloadLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={iconDown}
                        className={"icons"}
                        alt={"Download.png"}
                        title={"Click to download (If available)"}
                      />
                    </a>
                    {/* <a href="https://www.testing.com" target="_blank" rel="noopener noreferrer" >
                                                <img src={iconExter} className={"icons"} alt={"External-Link.png"} title={"Click to open in a new tab (If available)"} />
                                            </a> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* /* end div */}
    </div>
  );
}
