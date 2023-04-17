import React, { useContext } from "react";
import { Context } from "../../context/langContext";
import "./Contenu.css";
import data from "../../assets/data.js";

export default function Contenu() {
  const { langue } = useContext(Context); //langue prend le meme nom que dans langContext.js
  //console.log(langue);
  return (
    <div className="content">
      <h1 className="title">{data[langue].title}</h1>
      {/*  data.FR.title ou data["FR"].title 
      mais cest preferable dutiliser data["FR"].title car "FR" doit changer
      et pourtant ecrire data.langue.title est impossible langue nest pas un attribut de lobject data*/}
      <p className="content-txt">{data[langue].txt}</p>
    </div>
  );
}
