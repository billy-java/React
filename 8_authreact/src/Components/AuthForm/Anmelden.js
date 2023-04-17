import React, { useContext, useRef, useState } from "react";
import "./AuthForm.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"; //useHistory est remplacer par useNavigate  dans la nouvelle version de react V.6

export default function Anmelden() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { anmelden } = useContext(AuthContext);

  const showModal = useSelector((state) => state); //pour selectionner le state de notre store
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({
      type: "CLOSEMODAL",
    });
  };

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  async function aktionSubmit(e) {
    e.preventDefault();

    if (inputs.current[1].value !== inputs.current[2].value) {
      setError("Die Passwörter sind nicht identisch");
    }

    await anmelden(inputs.current[0].value, inputs.current[1].value);

    navigate.push("/eingelogenHome");
    dispatch({ type: "CLOSEMODAL" });
    inputs.current.forEach((inp) => {
      inp.value = "";
    });
    setError("");
  }

  return (
    <div className={showModal.showAnmelden ? "global-modal" : "hide-modal"}>
      <div onClick={closeModal} className="overlay"></div>
      <div onSubmit={aktionSubmit} className="container-modal">
        <form action="" className="form-auth">
          <h2>ANMELDUNG</h2>
          <label htmlFor="email">Ihre E-Mail Adresse</label>
          <input
            ref={addInputs}
            type="email"
            htmlFor="email"
            required
            placeholder="E-Mail Adresse"
          />
          <label htmlFor="pswAn">Ihre Password</label>
          <input
            ref={addInputs}
            type="password"
            id="pswAn"
            required
            placeholder="Password"
          />
          <label htmlFor="confirmPswAn">Password bestätigen</label>
          <input
            ref={addInputs}
            type="password"
            id="confirmPswAn"
            required
            placeholder="Password"
          />
          {error}
          <button className="btn-sign">Neu Anmeldung</button>
        </form>
        <button onClick={closeModal} className="btn-close">
          X
        </button>
        <p className="bottom-help-text">
          Wollen Sie ein neues Konto erstellen ?
        </p>
      </div>
    </div>
  );
}
