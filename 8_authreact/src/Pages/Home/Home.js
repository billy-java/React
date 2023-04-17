import React from "react";
import Einlogen from "../../Components/AuthForm/Einlogen";
import Anmelden from "../../Components/AuthForm/Anmelden";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div className="global-container">
      <Navbar />
      <div className="content-container">
        <h1>Willkommen auf der Website.</h1>
        <p>Authentifizieren Sie sich, um auf die Funktionen zuzugreifen.</p>
      </div>
      <Anmelden />
      <Einlogen />
    </div>
  );
}
