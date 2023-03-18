import React from "react";
import { Link } from "react-scroll";
import styles from "./css_files/footer.module.css";
import icons8 from "./media-images/icons8-icons8-100.png";
import reacIcon from "./media-images/100px-React.svg.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.divBottomFooter}>
        <ul className={styles.ulHorizontal}>
          <li>
            <Link
              className={`${styles.title} ${styles.antiAlias}`}
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Welcome
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.title} ${styles.antiAlias}`}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.title} ${styles.antiAlias}`}
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.title} ${styles.antiAlias}`}
              activeClass="active"
              to="books"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {"Books & Papers"}
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.title} ${styles.antiAlias}`}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.divTopFooter}>
        <div className={styles.content}>
          <p className={styles.text}>
            Disclaimer: The present website was designed using icon from
            icons8.com and presonal images provided by: Rocco Mangieri, Rocco's
            projects books and conferences and some images may belong to
            personal users in pexels.com.
          </p>
          <p className={styles.text}>
            Website designed in ReactjS by{" "}
            <a
              className={styles.links}
              href="https://theghost1980.github.io/google-homepage/"
            >
              @theghost1980 @2020 Copyright
            </a>
            .
          </p>
        </div>
        <div className={styles.divIcons}>
          <a
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons8} className={styles.icons} alt={"Icons 8 Logo"} />
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={reacIcon}
              className={styles.icons2}
              alt={"ReactJs 8 Logo"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
