import React from "react";
import ReactDOM from "react-dom/client";

//Third-party modules
import { BrowserRouter, HashRouter } from "react-router-dom";
import "highlight.js/styles/github-dark.css";

//User-modules
import App from "./App";
import "./globals.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
