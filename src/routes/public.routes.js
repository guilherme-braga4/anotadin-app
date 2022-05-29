import React from "react";
import Home from "../pages/Welcome"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard";
import Error from "../error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PublicRoutering = () => {
  return (
    <Router>
      <Routes>
          <Route path="*" element={<Home/>} /> 
          <Route path="/login" element={<Login/>} />
          <Route path="error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default PublicRoutering;
