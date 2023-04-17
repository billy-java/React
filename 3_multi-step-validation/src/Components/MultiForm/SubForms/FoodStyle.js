import React, { useRef, useState } from "react";
import "./SubForm.css";

export default function FoodStyle(props) {
  const [kuechen] = useState([
    "italienisch",
    "japanisch",
    "indisch",
    "thailaendisch",
    "französisch",
    "chinesisch",
  ]);

  const allChekboxes = useRef([]); //useref a une propriete current

  const addCheck = (el) => {
    //el : element quon a envi de rentrer
    if (el && !allChekboxes.current.includes(el)) {
      //si el existe mais nest pas encore present dans le tableau
      allChekboxes.current.push(el); //alors on le rajoute dans  le tableau
    }
  };

  //console.log(allChekboxes);

  const aktionZurueck = () => {
    props.modifyIndex(2);
  };

  const preventFunk = (e) => {
    e.preventDefault();

    const styleData = {
      foodStyle: [],
    };

    allChekboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.foodStyle.push(checkbox.value);
      }
    });

    props.modifyIndex(4, styleData);
  };

  return (
    <form onSubmit={preventFunk} className="checkbox-form">
      <p>Welche sind deine Lieblingsküchen ?</p>
      <span>Mehrfachauswahl.</span>
      {kuechen.map((item) => {
        return (
          <div>
            <label htmlFor={item}>{item}</label>
            <input ref={addCheck} type="checkbox" id={item} value={item} />
          </div>
        );
      })}

      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={aktionZurueck}>
          ZURÜCK
        </button>
        <button>BESTÄTIGEN</button>
      </div>
    </form>
  );
}
