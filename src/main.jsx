import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { GeneralProvider } from "./context/GeneralContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralProvider>
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </GeneralProvider>
);
