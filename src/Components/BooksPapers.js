import React from "react";
import styles from "./css_files/bookspapers.module.css";
import BookTimeLine from "./BookTimeLine";

function BooksPapers() {
  return (
    <div className={styles.container} id="books">
      <div className={styles.div40}></div>
      <div className={styles.div60}>
        <div className={styles.textContainer}>
          <div className={styles.divLeft40}>
            <p className={styles.textReading}>
              During his professional career, Rocco has written many books,
              essays and research papers. In the section bellow, you can access
              the content, where you can download the content directly or open
              an alternate tab to view the document.
            </p>
            <p className={styles.textReading}>
              Next, research essays, monographs and published texts on
              specialised works of knowledge. (The following section is observed
              in a descending way)
            </p>
            <p className={styles.textAttention}>
              Just click on the year to display a tab bellow, with all its
              writtens, then, click on the selected item to see details.
            </p>
          </div>
          <div className={styles.divLeft60}>
            <BookTimeLine />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksPapers;
