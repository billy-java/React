import React from "react";
import "./Navbar.css";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();

  const toggleEinlogen = () => {
    dispatch({
      type: "TOGGLEEIN",
    });
  };

  const toggleAnmelden = () => {
    dispatch({
      type: "TOGGLEAN",
    });
  };

  return (
    <nav className="navbar">
      <button onClick={toggleEinlogen}>Logen</button>
      <button onClick={toggleAnmelden}>Anmelden</button>
    </nav>
  );
}
