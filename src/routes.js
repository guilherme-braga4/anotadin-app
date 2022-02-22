import App from "./App";
import Error from "./error";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<App />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Routering;
