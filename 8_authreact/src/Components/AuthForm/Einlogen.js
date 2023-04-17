import React /*, { useContext, useState } */ from "react";
import "./AuthForm.css";
import { useDispatch, useSelector } from "react-redux";
/* import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"; */

export default function Einlogen() {
  /* const [error, setError] = useState("");
  const hitory = useNavigate();
  const { einlogen } = useContext(AuthContext); */

  const showModal = useSelector((state) => state); //pour selectionner le state de notre store
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({
      type: "CLOSEMODAL",
    });
  };

  return (
    <div className={showModal.showEinlogen ? "global-modal" : "hide-modal"}>
      <div onClick={closeModal} className="overlay"></div>
      {/* onClick={closeModal} ==> on clique on dehors de la modal ca ferme la modal */}
      <div className="container-modal">
        <form action="" className="form-auth">
          <h2>LOGIN</h2>
          <label htmlFor="email">Ihre Email</label>
          <input
            type="email"
            htmlFor="email"
            required
            placeholder="Ihre E-Mail Adresse"
          />
          <label htmlFor="pswEin">Ihre Password</label>
          <input
            type="password"
            id="pswEin"
            required
            placeholder="Ihre Password"
          />
          <button className="btn-sign">Einlogen</button>
        </form>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        <p className="bottom-help-text">
          Wollen Sie ein neues Konto erstellen ?
        </p>
      </div>
    </div>
  );
}
