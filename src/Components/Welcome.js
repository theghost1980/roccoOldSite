import React from "react";
import styles from "./css_files/welcome.module.css";
// import imgMain from './media-images/main-cover.png';
// import imgMain from './media-images/main-cover-copy.png';
import SimpleSwiper from "./SimpleSwiper";

function Welcome() {
  //props for swiper
  const items = [
    {
      id: 1,
      title:
        "National Award to Critical Thinking, Caracas Mayor's Office, 2015.",
    },
    {
      id: 2,
      title:
        "National recognition by AVS, Venezuelan Association of Semiotics, 2012.",
    },
    {
      id: 3,
      title:
        "ONCTI-MPP Min. Science and Technology Researcher, Level 3. (2010-2012, 2013-2015).",
    },
    {
      id: 4,
      title:
        "Recognition of research in human and social sciences, Council for Scientific and Technological Development. ULA, Merida, years 1998, 2000, 2002, 2008, 2009, 2010, 2011, 2014 and 2016.",
    },
    {
      id: 5,
      title:
        'National Book Award. Venezuelan National Book Center. CENAL. ("Three looks. Three subjects: Eco-Lotman-Greimas", 2007.)',
    },
    {
      id: 6,
      title:
        "Special prize of non-conventional art: Salon of the small format. Faculty of Arts. ULA(2007).",
    },
    {
      id: 7,
      title:
        "Special prize of Doctorate Thesis and recognition SUMMA CUM LAUDE BY UNANIMITY University of Murcia-Spain. Candidate to special prize of thesis of the Spanish Ministry of Education (2002).",
    },
    {
      id: 8,
      title:
        "Recognition in Festivals of Movement, editions 2007, 2001 and 2014.",
    },
    {
      id: 9,
      title:
        "Scenographic design award: Toledo International Theatre Festival (Spain, 2001).",
    },
    {
      id: 10,
      title: "Recognition-prize for research in human sciences PEI-CDCHT.",
    },
    {
      id: 11,
      title:
        'Recognition for the execution of installation-performances in the second and third art exhibition of the University of Murcia "This is not art...". (2000-2001).',
    },
    {
      id: 12,
      title:
        "Special recognition from the Ministry of Culture of Venezuela (1992).",
    },
    {
      id: 13,
      title:
        "Artistic Direction Award for children's television series: Televisa, Mexico (1987).",
    },
    {
      id: 14,
      title:
        'Recognition from the Museum of Barquisimeto for the exhibition "Diseño a Diario: apuntes e imágenes de lo cotidiano", National Council of Culture (1985).',
    },
    {
      id: 15,
      title:
        'Award for film script "Los Inmigrantes", with Luis Zelcowitz. (TV series for Maraven and Venezolana de Televisión) ANANC, Caracas (1986).',
    },
    {
      id: 16,
      title:
        'Special prize of degree and recognition of the Council of the Faculty: Thesis of degree "Open University System", (LUZ, 1977).',
    },
    {
      id: 17,
      title:
        "Photography Award: Regional Photography Exhibition. House of Culture-Athenaeum of Barquisimeto. (1969).",
    },
    {
      id: 18,
      title:
        "Municipal Prize of Literature: House of Culture and Government of Lara State, (1968).",
    },
  ];
  return (
    <div className={styles.container} id="welcome">
      {/* <div className={styles.rowContainer}> */}
      <div className={styles.divMediumSize}>
        {/* <img src={imgMain} className={styles.imgBig} alt={"Background Div Rocco"}/> */}
      </div>
      <div className={styles.divMediumSize2}>
        <div className={styles.textContainer}>
          <h1
            className={`${styles.giantTitle} ${styles.padding} ${styles.colorAll} ${styles.shadow}`}
          >
            Rocco{<br />}Mangieri
          </h1>
          <a
            className={styles.simpleLink}
            href="https://ula.academia.edu/ROCCOMANGIERI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`${styles.textAttention}`}>
              academia.edu/ROCCOMANGIERI
            </p>
          </a>
          <p
            className={`${styles.colorAll} ${styles.textTitle} ${styles.softShadow}`}
          >
            Architect, professional, teacher, specialist in Semiotics and
            Socio-anthropology.{<br />}With 43 years of experience.
          </p>
          <div className={styles.divContCarousel}>
            <SimpleSwiper
              items={items}
              type={"justText"}
              boxShadow={true}
              width={"100%"}
              height={"150px"}
              icon={true}
            />
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <div className={styles.divBottom}> */}
      {/* This div just add space to bottom + gradient color */}
      {/* </div> */}
    </div>
  );
}

export default Welcome;
