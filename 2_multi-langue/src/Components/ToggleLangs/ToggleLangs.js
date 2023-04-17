import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import DeutschFlag from "../../assets/deutsch.svg";
import "./ToggleLangs.css";
import { Context } from "../../context/langContext";

export default function ToggleLangs() {
  const { toggleLang } = useContext(Context);

  //console.log(toggleLang);

  return (
    <div className="container-langs">
      <img
        onClick={(event) => {
          event.preventDefault();
          toggleLang("FR");
        }}
        src={FrenchFlag}
        alt=""
      />
      <img
        onClick={(event) => {
          event.preventDefault();
          toggleLang("DE");
        }}
        src={DeutschFlag}
        alt=""
      />
      <img
        onClick={(event) => {
          event.preventDefault();
          toggleLang("EN");
        }}
        src={EnglishFlag}
        alt=""
      />
      <img
        onClick={(event) => {
          event.preventDefault();
          toggleLang("ES");
        }}
        src={SpanishFlag}
        alt=""
      />
    </div>
  );
}
