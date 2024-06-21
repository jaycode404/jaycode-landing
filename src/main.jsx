import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { GeneralProvider } from "./context/GeneralContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
