import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Error from "./error";
import Routering from "./routes/routes";

//Caso você importe diretamente os components, ele não irá associar a um PATH, portanto, irá renderizar tudo de uma vez

ReactDOM.render(
  <React.StrictMode>
    <Routering />
  </React.StrictMode>,
  document.getElementById("root")
);
