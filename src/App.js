import React, {useState, useContext} from 'react';
import { AuthContext } from "./contexts/AuthContext"
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./index.css";
import PublicRoutering from "./routes/public.routes";
import PrivateRoutering from "./routes/private.routes";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  const authenticated = localStorage.getItem("@AnotadinApp Auth")

  return (
    authenticated ? <PrivateRoutering/> : <PublicRoutering/>
  );
}

export default App;
