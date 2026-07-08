import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./assets/css/reset.css";
import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/layout.css";
import "./assets/css/responsive.css";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}