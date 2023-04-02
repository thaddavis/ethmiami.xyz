import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { App } from "./App";

import LoaderSVG from "./assets/loader.svg";

ReactDOM.render(
  <HashRouter>
    <Suspense
      fallback={
        <img
          src={LoaderSVG}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
          }}
          alt="loader"
        ></img>
      }
    >
      <App />
    </Suspense>
  </HashRouter>,
  document.getElementById("root")
);
