import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
