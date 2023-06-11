import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image1 from "../../assets/images/dummy.png";
import image2 from "../../assets/images/dummy2.png";
import image3 from "../../assets/images/dummy3.png";

const properties = {
  duration: 1000,
  autoplay: true,
  transitionDuration: 1000,
  arrows: true,
  infinite: true,
  easing: "ease",
  cssClass: "height: 100%"
};

export default function Slider() {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <img src={image1} style={{width: "100%"} }/>
        <img src={image2} style={{width: "100%"} }/>
        <img src={image3} style={{width: "100%"} }/>
      </Slide>
    </div>
  );
}