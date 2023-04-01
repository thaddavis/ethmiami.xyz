import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { App } from "./App";

ReactDOM.render(
  <HashRouter>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </HashRouter>,
  document.getElementById("root")
);
