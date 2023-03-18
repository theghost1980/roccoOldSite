import React, { Component } from "react";
import { Link } from "react-scroll";
import styles from "./css_files/navBar.module.css";
import DivScroll from "./DivScroll";

class NavBar2 extends Component {
  state = { isVisible: false };

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        // console.log("CurrentScrolPos:" + currentScrollPos);
        if (currentScrollPos >= 900) {
          this.setState({ isVisible: true });
        } else {
          this.setState({ isVisible: false });
        }
      };
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <ul className={styles.ulHorizontal}>
          <li>
            <Link
              className={`${styles.textMenu} ${styles.antiAlias}`}
              activeClass="active"
              to="welcome"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              WELCOME
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.textMenu} ${styles.antiAlias}`}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.textMenu} ${styles.antiAlias}`}
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              WORK
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.textMenu} ${styles.antiAlias}`}
              activeClass="active"
              to="books"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {"BOOKS & PAPERS"}
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.textMenu} ${styles.antiAlias}`}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
        {/* div scroll to top */}
        {
          <div
            className={`${styles.divScrollTop} ${
              this.state.isVisible ? styles.show : styles.hide
            }`}
          >
            <DivScroll />
          </div>
        }
      </div>
    );
  }
}

export default NavBar2;
