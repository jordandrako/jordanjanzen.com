import React from "react";
import { IndexRoute, Router, Route, hashHistory } from "react-router";
import App from "./containers/App";
import Home from "./containers/Home";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
