import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./contexts/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


//Caso você importe diretamente os components, ele não irá associar a um PATH, portanto, irá renderizar tudo de uma vez

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
      <ToastContainer/>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
