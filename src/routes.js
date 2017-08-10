import React from "react";
import { Route, HashRouter, Link } from "react-router-dom";
import App from "./containers/App";
import Home from "./containers/Home";

export default (
  <HashRouter>
    <Route exact path="/" component={Home} />
  </HashRouter>
);
