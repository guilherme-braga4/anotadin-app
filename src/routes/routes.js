import React from "react";
import Home from "../pages/Welcome"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard";
import Error from "../error";
import Rendimentos from "../pages/Rendimentos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes.routes'

const Routering = () => {
  return (
    <Router>
      <Routes>
          <Route path="*" element={<Home/>} /> 
          <Route path="/login" element={<Login/>} />
          <Route path="error" element={<Error />} />
          <Route path="/dashboard" element={
            <ProtectedRoutes>
              <Dashboard/>
            </ProtectedRoutes>
            }
          />
          <Route path="/rendimentos" element={
            <ProtectedRoutes>
              <Rendimentos/>
            </ProtectedRoutes>
            }
          />
      </Routes>
    </Router>
  );
};

export default Routering;
