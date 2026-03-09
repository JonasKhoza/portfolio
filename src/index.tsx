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
const basename = process.env.PUBLIC_URL;

root.render(
  <React.StrictMode>
    <HashRouter basename="/portfolio">
      <App />
    </HashRouter>
  </React.StrictMode>,
);
