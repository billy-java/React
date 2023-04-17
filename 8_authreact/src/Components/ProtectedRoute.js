import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to="/" />; //<Einlogen/>
};

export default ProtectedRoute;
