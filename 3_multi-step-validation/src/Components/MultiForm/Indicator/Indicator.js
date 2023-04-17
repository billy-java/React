import React, { useState } from "react";
import "./Indicator.css";
import healthy from "./icons/healthy.svg";
import diet from "./icons/diet.svg";
import allergy from "./icons/allergy.svg";
import love from "./icons/love.svg";
import thumb from "./icons/thumb.svg";

export default function Indicator(props) {
  const formIndex = props.formIndex;

  //ou export default function Indicator({formIndex}) { a al place de la ligne 9 et 10

  const [constIndicator] = useState([healthy, love, allergy, diet, thumb]);

  const transparentStab = ["", "25%", "50%", "75%", "100%"];

  return (
    <div className="container-indicator">
      <div className="indicator-lines">
        {transparentStab.map((prozent, index) => {
          if (formIndex === index + 2) {
            return (
              <div className="line upper-line" style={{ width: prozent }}></div>
            );
          }
        })}

        <div className="line under-line"></div>
      </div>

      <div className="container-img">
        {constIndicator.map((item) => {
          return (
            <div className="bloc-img">
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
