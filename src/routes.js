import React from "react";

import Home from "./pages/Welcome"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";

import Error from "./error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} /> 
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Routering;
