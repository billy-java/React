import React, { useRef, useState } from "react";
import "./SubForm.css";

export default function Allergies(props) {
  const [allergies] = useState([
    "Milch",
    "Blütenstaub",
    "Nüsse",
    "Eier",
    "Meeresfrucht",
  ]);

  const allChekboxes = useRef([]); //useref a une propriete current

  const addCheck = (el) => {
    //el : element quon a envi de rentrer
    if (el && !allChekboxes.current.includes(el)) {
      //si el existe mais nest pas encore present dans le tableau
      allChekboxes.current.push(el); //alors on le rajoute dans  le tableau
    }
  };

  ///console.log(allChekboxes);

  const aktionZurueck = () => {
    props.modifyIndex(3);
  };

  const preventFunk = (e) => {
    e.preventDefault();

    const styleData = {
      allergies: [],
    };

    allChekboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.allergies.push(checkbox.value);
      }
    });

    props.modifyIndex(5, styleData);
  };

  return (
    <form onSubmit={preventFunk} className="checkbox-form">
      <p>Haben Sie zufällig Allergies ?</p>
      <span>Mehrfachauswahl.</span>
      {allergies.map((item) => {
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
