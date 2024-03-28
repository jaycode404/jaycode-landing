import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // Importa BrowserRouter
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { GeneralProvider } from "./context/GeneralContext";

ReactDOM.render(
  <GeneralProvider>
    <React.StrictMode>
      <Router> {/* Aquí aplicas el Router */}
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  </GeneralProvider>,
  document.getElementById("root")
);
