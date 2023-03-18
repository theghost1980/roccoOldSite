import React from "react";
import { animateScroll as scroll } from "react-scroll";
import imgPointing from "./media-images/point-up.png";
import styles from "./css_files/divScroll.module.css";

function DivScroll() {
  // console.log("Receiving from parent::::");
  // console.log(props);
  // console.log("value: " + props.isVisible);
  //functions
  function scrollToTop() {
    scroll.scrollToTop();
  }
  // const { isVisible } = props.isVisible;

  return (
    <div className={`${styles.divScroll}`} onClick={scrollToTop}>
      <img
        src={imgPointing}
        className={styles.imgMini}
        title="Scroll to Top"
        alt="Pointing-top-png"
      />
    </div>
  );
}

export default DivScroll;
