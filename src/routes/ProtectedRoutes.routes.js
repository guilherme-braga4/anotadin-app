import React, {useState, useContext} from 'react';
import { AuthContext } from "../contexts/AuthContext"
import Dashboard from "../pages/Dashboard";
import Header from "../components/Header";
import PublicRoutering from "./routes";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function ProtectedRoutes ({children}) {
  const authenticated = localStorage.getItem("@AnotadinApp Auth")
  console.log("authenticated", authenticated)

  //se a condição é verdadeira, irá liberar as rotaas privadas
  return authenticated ? children : <PublicRoutering/>

  // return <Navigate to="/" />
}

export default ProtectedRoutes;
