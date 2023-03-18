import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./css_files/swiper-bundle.css";
import "./css_files/styles.css";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar]);

export default (props) => {
  //check actual width
  let _widthImage = "";
  let _width = "";
  let _height = "";
  if (window.innerWidth <= 800) {
    _widthImage = "250px";
    _width = "350px";
    // let _w = Number(window.innerWidth) - 20;
    // _width = _w;
    // _widthImage = _w;
    _height = "405px";
  } else {
    _widthImage = "500px";
    _width = "700px";
    _height = "610px";
  }
  const { _captionAr } = props;
  const _slidesArray = [];
  const _path = process.env.PUBLIC_URL + "/Assets/images-part-1/part";
  for (let i = 0; i < _captionAr.length; i++) {
    _slidesArray.push(
      <SwiperSlide key={i}>
        <img
          src={`${_path}${i}.png`}
          style={{
            height: _widthImage,
            marginTop: "10px",
            borderRadius: "5px",
            // boxShadow: '1px 2px 1px 5px rgb(8, 6, 6)'
            boxShadow: "1px 2px 7px 5px rgb(66, 48, 48)",
          }}
          alt={_captionAr[i].titulo}
        />
        <p className={"titleStrong"}>{_captionAr[i].titulo}</p>
        <p className={"titleLight"}>{_captionAr[i].lugar}</p>
      </SwiperSlide>
    );
  }
  return (
    <React.Fragment>
      <Swiper
        id="main"
        slidesPerView={1}
        // className={styles.swiperContainer}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // for w<=800 width '350px' height '305px'
        style={{
          width: _width,
          height: _height,
          boxShadow: "none",
        }}
      >
        {_slidesArray}
      </Swiper>
    </React.Fragment>
  );
};
