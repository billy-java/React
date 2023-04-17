import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom"; //Redirect est remplacer par Navigate
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ element: Component, ...rest }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => {
        return currentUser ? <element /> : <Navigate to="/" />;
      }}
    ></Route>
  );
}
