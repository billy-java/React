import React, { useState } from "react";
import "./SubForm.css";

export default function DietForm(props) {
  const [formData, setFormData] = useState({
    dietForm: "notdiet",
  });

  const preventFunc = (e) => e.preventDefault();

  const aktionRadio = (e) => {
    setFormData({
      dietForm: e.target.value,
    });
  };

  return (
    <form onSubmit={preventFunc} className="diet-form">
      <p>Wie sieht deine Ernährung aus ?</p>

      <label htmlFor="nodiet">Kein Diätplan</label>
      <input
        onChange={aktionRadio}
        type="radio"
        name="diet"
        id="nodiet"
        value="nodiet"
      />

      <label htmlFor="allesfresser">Allesfresser</label>
      <input
        onChange={aktionRadio}
        type="radio"
        name="diet"
        id="allesfresser"
        value="allesfresser"
      />

      <label htmlFor="vegetarier">Vegetarier</label>
      <input
        onChange={aktionRadio}
        type="radio"
        name="diet"
        id="vegetarier"
        value="vegetarier"
      />

      <label htmlFor="vegan">Vegan</label>
      <input
        onChange={aktionRadio}
        type="radio"
        name="diet"
        id="vegan"
        value="vegan"
      />

      <button onClick={() => props.modifyIndex(3, formData)}>BESTÄTIGEN</button>
    </form>
  );
}
