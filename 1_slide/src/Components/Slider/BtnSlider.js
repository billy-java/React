import React from "react";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import "./Slider.css";

export default function BtnSlider(props) {
  //{ direction, moveSlide }

  return (
    <button
      onClick={props.moveSlide}
      className={
        props.direction === "next" ? "btn-slide next" : "btn-slide prev"
      }
    >
      <img src={props.direction === "next" ? rightArrow : leftArrow} alt="" />
    </button>
  );
}
