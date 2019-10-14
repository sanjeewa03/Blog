import React, { Component } from 'react';
import Slideshow from "./slideShow";
import slide1 from "./images/1.jpg";
import slide2 from "./images/2.jpg";
import slide3 from "./images/3.jpg";
import slide4 from "./images/4.jpg";
import slide5 from "./images/5.jpg";
import "../css/carousel.css";


//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
  container: "screenW screenH dGray col",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter"
};

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide2, slide3, slide4, slide5];

//===========================================
// APP COMPONENT
//===========================================

export default class Carousel1 extends Component {
  render() {
    return (
        <div className={s.container}>
           
            <div className={s.main}>
                <Slideshow slides={slides} />
            </div>
        </div>
    );
  }
}