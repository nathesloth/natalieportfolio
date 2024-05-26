// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>
);
