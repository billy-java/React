import React, { useState } from "react";
import "./SubForm.css";

export default function Meinung(props) {
  const [formData, setFormData] = useState({
    prefs: {
      mag: "",
      hate: "",
    },
  });

  const aktionTextArea = (e, liebling) => {
    if (liebling === "mag") {
      setFormData({
        prefs: {
          ...formData.prefs, //copie tout le contenu precedent de prefs
          mag: e.target.value, //remplace uniquement lattribut love du prefs precedent
        },
      });
    } else if (liebling === "hate") {
      setFormData({
        prefs: {
          ...formData.prefs, //copie tout le contenu precedent de prefs
          hate: e.target.value, //remplace uniquement lattribut love du prefs precedent
        },
      });
    }
  };
  const preventFunc = (e) => {
    e.preventDefault();
    props.modifyIndex(6, formData);
  };

  const aktionZurrueck = () => {
    props.modifyIndex(4);
  };

  return (
    <form className="preferences-form" onSubmit={preventFunc}>
      <p>
        Erzähl uns von den Lebensmitteln, die du bevorzugst und die du hasst :
      </p>

      <label htmlFor="lieblings">
        Die Lebensmittel, die du bevorzugst, mit einem Komma getrennt :
      </label>
      <textarea
        onChange={(e) => aktionTextArea(e, "mag")}
        id="lieblings"
        placeholder="Eines oder mehrere, wenn du welche hast"
      ></textarea>

      <label htmlFor="hate">
        Lebensmittel, die du nicht magst, mit einem Komma getrennt :
      </label>
      <textarea
        onChange={(e) => aktionTextArea(e, "hate")}
        id="hate"
        placeholder="Eines oder mehrere, wenn du welche hast"
      ></textarea>

      <div className="container-nav-btns">
        <button type="button" onClick={aktionZurrueck} className="prev">
          ZURÜCK
        </button>
        <button>
          {/* <button onClick={() => props.modifyIndex(6, formData)}> */}
          BESTÄTIGEN
        </button>
      </div>
    </form>
  );
}
