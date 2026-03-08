import React from "react";
import ReactDOM from "react-dom/client";

//Third-party modules
import { BrowserRouter } from "react-router-dom";
import "highlight.js/styles/github-dark.css";

//User-modules
import App from "./App";
import "./globals.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const basename = process.env.PUBLIC_URL || "/"; // CRA sets PUBLIC_URL to "/repo-name" on GH Pages build
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
