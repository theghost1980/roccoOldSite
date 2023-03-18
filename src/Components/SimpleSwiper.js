import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "./css_files/simpleSwiper.css";
import styles from "./css_files/simpleSwiper.module.css";
import "swiper/swiper-bundle.css";
// test
import imgTrophy from "./media-images/icons8-trophy-cup-100.png";
// end test

SwiperCore.use([Autoplay]);

function SimpleSwiper(props) {
  let { items, type, width, height, boxShadow, icon, bgColor } = props;
  //'1px 1px 10px 5px rgba(160, 12, 12, 0.562)'
  const _boxShadow = boxShadow ? "1px 1px 7px 2px rgba(0, 0, 0, 0.5)" : "none";
  // console.log(props);
  //check actual width
  // console.log(`WH ${window.innerWidth}`);
  if (window.innerWidth <= 800) {
    height = "120px";
  }
  // definying styles
  const _styles = {
    width: width,
    height: height,
    boxShadow: _boxShadow,
    backgroundColor: bgColor,
  };
  // console.log(_styles);
  const slides = [];
  for (let i = 0; i < items.length; i++) {
    // console.log("Src:" + items[`${i}`].title);
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyle: "none" }}>
        {type !== "justText" ? (
          <img
            // src={`https://picsum.photos/id/${i+1}/500/300/`}
            src={items[`${i}`].title}
            alt={`Slide ${i}`}
          />
        ) : (
          <div className={styles.divContainer}>
            <p className={styles.text}>{items[`${i}`].title}</p>
          </div>
        )}
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      tag="section"
      wrapperTag="ul"
      id="main"
      // navigation
      // pagination
      // spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      style={_styles}
    >
      {/* test */}
      {icon && (
        <div className={styles.trophyDiv}>
          <img
            src={imgTrophy}
            alt={"Trophies by Rocco :D"}
            className={styles.icons}
          />
        </div>
      )}
      {/* end test */}
      {slides}
    </Swiper>
  );
}

export default SimpleSwiper;
