import React, { createContext, useState } from "react";

export const Context = createContext();

const supportingLangs = ["EN", "FR", "ES", "DE"];

let browserLang = navigator.language.slice(0, 2).toUpperCase(); //on a normalement fr-FR  slice(0,2) supprime f,r,- pour conserver F,R

if (supportingLangs.indexOf(browserLang) === -1) {
  //console.log("This Language ist not supported !");
  browserLang = "EN";
}

const ContextProvider = (props) => {
  const [langue, setLang] = useState(browserLang);

  const toggleLang = (changeLange) => {
    setLang(changeLange);
  };

  return (
    <Context.Provider value={{ langue, toggleLang }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
