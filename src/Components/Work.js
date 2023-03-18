import React from "react";
import styles from "./css_files/work.module.css";
import MenuSideBar from "./MenuSideBar";

function Work() {
  return (
    <div className={styles.container} id="work">
      <div className={styles.div60}></div>
      <div className={styles.div40}>
        <div className={styles.textContainer}>
          <div className={styles.galleryDiv}>
            {/* <div className={styles.menuSibeBar}> */}
            <MenuSideBar />
            {/* <p className={styles.miniText}>Take a look of the Image Gallery anytime</p> */}
            {/* </div> */}
          </div>
          <div className={styles.innerText}>
            <p className={`${styles.textReading} ${styles.initialP}`}>
              Between 1991 and 1993 he worked as a consultant for cultural and
              outreach programs in the Emilia Romagna Region (Bologna, Italy),
              designed and produced an international traveling exhibition on the
              "Visual History of Italian immigration in the world" ("Lo guardo
              altrove"). Since 1992 he has been directing the program of
              International Meetings of Semiotics in which Umberto Eco, Omar
              Calabrese, Paolo Fabbri, Eric Landoswki, Francisco Vicente Gómez,
              Alfredo Cid Jurado, Antonio Pero and Robeto Pellerey have
              participated. He is a member of the Center for Aesthetic Research
              at the Universidad de los Andes and founded it in 1996 (ULA
              2002-2006).
            </p>
            <p className={styles.textReading}>
              Professor with exclusive dedication of the Faculty of Arts of the
              ULA since 1994. He has taught, researched or extended in the
              following universities:
            </p>
            <ul className={styles.ulVertical}>
              <li className={styles.textReading}>
                Central University of Venezuela. (Media School, School of Arts)
              </li>
              <li className={styles.textReading}>
                Simon Bolivar University, Venezuela. (Directorate of Continuing
                Education)
              </li>
              <li className={styles.textReading}>
                José María Vargas University, Venezuela. (Faculty of
                Architecture and Art)
              </li>
              <li className={styles.textReading}>
                Polytechnic University of Barquisimeto, Venezuela (Department of
                Audiovisual Media)
              </li>
              <li className={styles.textReading}>
                University of Buenos Aires, Argentina. (National Institute of
                Arts, IUNA)
              </li>
              <li className={styles.textReading}>
                University of Zulia, Venezuela. (Faculty of Architecture and
                Design)
              </li>
              <li className={styles.textReading}>
                University of Bologna, Italy. (DAMS, Discipline of Art, Music
                and Entertainment)
              </li>
              <li className={styles.textReading}>
                University of Murcia, Spain. (Faculty of Arts and Philosophy)
              </li>
              <li className={styles.textReading}>
                University of Alicante, Spain. (Department of Integrated
                Philosophies)
              </li>
              <li className={styles.textReading}>
                University of Navarra, Spain. (Dept. of Performing Arts)
              </li>
              <li className={styles.textReading}>
                Pontifical University of Sao Paulo, Brazil (Postgraduate in
                Semiotics and Communication)
              </li>
              <li className={styles.textReading}>
                University Institute of Monterrey, Mexico. (Department of
                Semiotics)
              </li>
              <li className={styles.textReading}>
                Among many others you can see in the Dossier.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
