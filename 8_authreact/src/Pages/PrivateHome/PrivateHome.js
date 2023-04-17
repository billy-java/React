import React, { useContext } from "react";
import Einlogen from "../../Components/AuthForm/Einlogen";
import Anmelden from "../../Components/AuthForm/Anmelden";
import Navbar from "../../Components/Navbar/Navbar";
import "../Home/Home.css";
import { AuthContext } from "../../context/AuthContext";

export default function PrivateHome() {
  const { auslogen } = useContext(AuthContext);

  return (
    <div className="global-container">
      <Navbar />
      <Anmelden />
      <Einlogen />
      <div className="content-container">
        <h1>Hier ist Ihre privates Konto.</h1>
        <p>Viel Spaß !</p>
        <button onClick={auslogen}>Auslogen</button>
      </div>
    </div>
  );
}
