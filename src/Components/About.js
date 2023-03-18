import React from "react";
import styles from "./css_files/about.module.css";
import imgAss1 from "./media-images/Associations-logos/AFS-logo-copy.png";
import imgAss2 from "./media-images/Associations-logos/FELS-logo-copy.png";
import imgAss3 from "./media-images/Associations-logos/IASS-AIS-logo-copy.jpg";
import imgAss4 from "./media-images/Associations-logos/AISS-logo-copy.jpg";
import SimpleSwiper from "./SimpleSwiper";

// import imgTest from './media-images/Associations-logos/AFS-logo.png';

//TODO finish it to have it as sample or original design & coding styles.
function About() {
  // items, type , width, height, bowShadow
  const items = [
    {
      id: 1,
      title:
        "1956-1959 - Primary School. Scuola statale Edmondo de Amicis. Bologna-Italy.",
    },
    {
      id: 2,
      title:
        "1967-1970 - Visual arts: design and painting. Experimental Center of Visual Arts, Caracas.",
    },
    {
      id: 3,
      title:
        "1970-1976 - Architect and urban designer. LUZ University. Maracaibo.",
    },
    {
      id: 4,
      title:
        "1974-1978 - Laboratory in contemporary dance (Victor Fuenmayor, Paris); stage with Arrianne Mousckine (Theatre du Soleil); Seminar with Tadeusz Kantor, Caracas: Workshop and seminar in theater(Berliner Ensemble).",
    },
    { id: 5, title: "1980 - Advanced seminar in Graphic Design for TV." },
    {
      id: 6,
      title: "1982 - Seminar in Semiologie du film: analyse des images.",
    },
    { id: 6, title: "1982 - Advanced seminars in Semiotics(prof. U. Eco)." },
    { id: 6, title: "1983 - Postgraduate seminar in Semiotics of film." },
    { id: 6, title: "1986-1987 - Postgraduate program in Social Science." },
    {
      id: 6,
      title: "1990-1993 - Undergraduate program DAMS- Bologna University.",
    },
    { id: 6, title: "1992 - Postgraduate program in Visual Semiotics." },
    {
      id: 6,
      title: "1992 - Stage in Semiotics of film(prof. Francesco Casetti)",
    },
    {
      id: 6,
      title: "1992 - Advanced seminar in Esthetics(prof. J.F.Lyotard).",
    },
    {
      id: 6,
      title:
        "1996 - Stage in Semiotics of taste(Prof. Erik Landowski), Semiotique et identité visuelle,( Prof. J.M.Floch).",
    },
    {
      id: 6,
      title:
        "1998-2001 - Postgraduate program Dottorato in Filología e Semiótica.",
    },
    {
      id: 6,
      title:
        "1992 and 2013 - Seminars and workshops in performing arts and anthropology of theatre.",
    },
  ];
  // const type = 'Images';
  // const width = '360px';
  // const height = '120px';
  //checking the actual windows.width
  let _width = "";
  let _height = "";
  if (window.innerWidth <= 800) {
    _width = "280px";
    _height = "180px";
  } else {
    _width = "410px";
    _height = "140px";
  }
  return (
    <div className={styles.container} id="about">
      {/* About Section */}
      <div className={styles.divContainerDiv45}>
        <div className={`${styles.div45} ${styles.colorDiv2}`}></div>
      </div>
      <div className={`${styles.div55} ${styles.colorDiv1}`}>
        <div className={styles.textContainer}>
          <p className={styles.readingText}>
            Professor and Researcher at the Universidad de los Andes (Merida,
            Venezuela). Born in Ferrara(Emilia-Romagna, Italy). He is trained as
            an architect and semiotician. Currently he directs the Laboratory of
            Semiotics and Socio-anthropology of the Arts. Doctor in social
            sciences of the Central University of Venezuela.
          </p>
          <p className={styles.readingText}>
            Founding member of the Venezuelan Association of Semiotics and
            member of the management staff of the ISA, International Association
            of Visual Semiotics. Member of the FELS, Latin American Federation
            of Semiotics, as well as member of the ISSA, Italian Association of
            Semiotic Studies.
          </p>
          <div className={styles.textLeftCarousel}>
            <div>
              <p className={styles.readingText}>He currently serves as:</p>
              <ul>
                <li className={styles.readingText}>
                  Teaching and research in semiotics, performing arts and media.
                </li>
                <li className={styles.readingText}>
                  Director of Laboratory in semiotics of arts, Faculty of Arts
                  and Design.
                </li>
              </ul>
            </div>
            <div className={styles.carouselContainer}>
              <SimpleSwiper
                items={items}
                type={"justText"}
                boxShadow={true}
                width={_width}
                height={_height}
                icon={false}
                bgColor={"#078933"}
              />
            </div>
          </div>
          <div className={styles.divTextLogos}>
            <div className={styles.logosContainer}>
              <div className={styles.imgContainer}>
                <a
                  href="https://iass-ais.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={imgAss3}
                    className={styles.imgSmall}
                    alt="Internactional Association for Semiotic Studies"
                  />
                </a>
              </div>
              <div className={styles.imgContainer}>
                <a
                  href="http://www.associazionesemiotica.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={imgAss4}
                    className={styles.imgSmall}
                    alt="Italian Semiotic Association"
                  />
                </a>
              </div>
              <div className={styles.imgContainer}>
                <a
                  href="http://afsemio.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={imgAss1}
                    className={styles.imgSmall}
                    alt="French Semiotic Association"
                  />
                </a>
              </div>
              <div className={styles.imgContainer}>
                <a
                  href="https://www.felsemiotica.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={imgAss2}
                    className={styles.imgSmall2}
                    alt="Latin American Semiotic Association"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.timeLineContainer}>
                    <TimeLine2 />
                </div> */}
      </div>
    </div>
  );
}

export default About;
