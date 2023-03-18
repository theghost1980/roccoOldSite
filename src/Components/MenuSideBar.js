import React, { Component } from "react";
import styles from "./css_files/menuSideBar.module.css";
import SwiperFinal from "./SwiperFinal";

const _captionAr = [
  {
    titulo: "Proyecto Licentiatura en Danza y Artes del Movimiento",
    lugar: "(2006). Universidad de Los Andes.",
  },
  {
    titulo: "Desaparecidos, Curso de Semiótica visual y conferencia",
    lugar: "(la Coruña, España, 2007)",
  },
  { titulo: "Bodies in action", lugar: "IASS Nanjing Congress, 2008." },
  {
    titulo: "Cuerpo, escritura, pintura,",
    lugar:
      "II Jornadas nacionales de Artes Corporales, Ministerio de la Cultura, Caracas, 2008.",
  },
  {
    titulo: "Lector in urbis, lector implicado,",
    lugar:
      "Congreso internacional Facultad de Arquitectura, Universidad Nacional del Litoral Argentina, 2008.",
  },
  {
    titulo: "Libros, objetos, escrituras: el libro de artista,",
    lugar:
      "Seminario Universidad Nacional de Colombia, Unidad de Postgrado, 2009.",
  },
  { titulo: "Retrobus,", lugar: "IAVS congress, Venezia 2010." },
  { titulo: "Gesti, indici, vettori,", lugar: "IAVS congress, Venezia 2010." },
  {
    titulo: "Paisaje cinemática, Simposio nacional de Geografía,",
    lugar: "Escuela de Georgrafía, Mérida, 2010.",
  },
  {
    titulo: "La semiótica del espacio en las novelas de U. Eco,",
    lugar:
      "Roundtable, La Coruña, 2008 y Seminario postgrado, UAM México (2011).",
  },
  {
    titulo:
      "Distorsione: modi di produzione segnica e manipolazione della immagini,",
    lugar: "Seminario Semiótica, Universitá di Genova, 2012.",
  },
  {
    titulo: "Espacio, tiempo y personaje en la escritura fílmica,",
    lugar:
      "Coloquio Acercamientos Artísticos Cine-Literatura, UAEM, Morelos, México, 2011.",
  },
  {
    titulo: "Body art, body signs: the camouflage,",
    lugar: "IASS congress, Nanjing CHina, 2012.",
  },
  { titulo: "Visual dilemmas,", lugar: "IAVS congress, Buenos Aires 2012." },
  {
    titulo: "Corpo, senso, racconti, tracce,",
    lugar: "Seminario all Universitá di Genova, 2012.",
  },
  {
    titulo: "Attraverso lo sguardo dell/'altro,",
    lugar: "Conferenza e seminario a Roma, La Sapienza, 2012.",
  },
  {
    titulo: "Semiotics of posture and gesture in postdramatic performances,",
    lugar:
      "Stage en el departamento de danza, Facultad de Arte. Universidad de Los Andes, 2013.",
  },
  {
    titulo: "Magos y médiums: para una semiótica de la magia,",
    lugar: "Congreso Internacional FELS, México, 2013.",
  },
  {
    titulo: "Cuerpo significante y mediatizaciones,",
    lugar:
      "Jornada Homenaje a Eliseo Verón, Universidad de Rosario, Argentina 2014.",
  },
  {
    titulo: "El movimiento de la multitud,",
    lugar:
      'Simposio "Pensar la ciudad", Centro Rómulo Gallegos, Caracas, 2015.',
  },
  {
    titulo: "Signos elementales: la caja semiótica,",
    lugar: "Curso estable de semiótica de las artes, 2009-2016.",
  },
  {
    titulo: "Coporeidad, acontecimiento y artes vivas,",
    lugar:
      "Seminario y conferencia, Consejo nacional de la cultura, UNEARTE, Caracas 2014.",
  },
  {
    titulo: "Narrar desde todas partes y desde ningún lugar,",
    lugar:
      "Seminario Internacional de Arte y Literatura, UAEM, Cuernavaca-México, 2016.",
  },
  {
    titulo: "Narrativas transmedia: el caso Prison Valley,",
    lugar: "Seminario UBA, Buenos Aires 2014.",
  },
  {
    titulo: "Gainsbourough effekt,",
    lugar: "IAVS congress, Liège, Belgique, 2015.",
  },
  {
    titulo: "Semiotics box (la scatola semiótica)",
    lugar:
      "Esercizi del corso di semiótica delle arti, Facultad de Arte, Mérida 2005-2017, IUNA.",
  },
  {
    titulo: "Semiotics box (la scatola semiótica)",
    lugar:
      "Esercizi del corso di semiótica delle arti, Facultad de Arte, Mérida 2005-2017, IUNA.",
  },
  {
    titulo: "Semiotics box (la scatola semiótica)",
    lugar:
      "Esercizi del corso di semiótica delle arti, Facultad de Arte, Mérida 2005-2017, IUNA.",
  },
  { titulo: "Tokio postures,", lugar: "Universidad de Ocaña, Colombia, 2017." },
  {
    titulo: "Rhythms and synchronicity",
    lugar: "XII International Congress of the IASS, Sofia Bulgaria, 2014.",
  },
  {
    titulo: "Lenguajes Postdramáticos,",
    lugar: "Curso de semiótica, facultad de Artes, 2016.",
  },
];

export class MenuSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  }
  render() {
    return (
      <div className={styles.container}>
        <button
          onClick={this.handleClick}
          className={styles.btnGallery}
          title="Click to Hide/Show Gallery"
        >
          {/* {this.state.isVisible ? 'Hide' : 'Gallery'}  */}
        </button>
        {/* onClick={() => { this.setState({isVisible: false})}}  */}
        <div
          className={`${styles.galleriesContainer} ${
            this.state.isVisible ? styles.fullWidth : styles.noWidth
          }`}
        >
          {this.state.isVisible && <SwiperFinal _captionAr={_captionAr} />}
        </div>
      </div>
    );
  }
}

export default MenuSideBar;
