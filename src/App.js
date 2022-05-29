import React, {useState, useContext} from 'react';
import { AuthContext } from "./contexts/AuthContext"
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./index.css";
import PublicRoutering from "./routes/public.routes";
import PrivateRoutering from "./routes/private.routes";

function App() {
  const { auth } = useContext(AuthContext)
  console.log("auth App", auth)

  return (
    <PrivateRoutering/>
  );
}

export default App;
