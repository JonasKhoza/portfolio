import React from "react";
import ReactDOM from "react-dom/client";

//Third-party modules
import { BrowserRouter } from "react-router-dom";

//User-modules
import App from "./App";
import "./globals.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
