import React from "react";
import { Switch, Route } from "react-router-dom";

import Loadable from "react-loadable";
import MyLoadingComponent from "./Loading";

const AsyncHome = Loadable({
  loader: () => import("./containers/Home"),
  loading: MyLoadingComponent
});
const AsyncAbout = Loadable({
  loader: () => import("./containers/About"),
  loading: MyLoadingComponent
});
const AsyncPortfolio = Loadable({
  loader: () => import("./containers/Portfolio"),
  loading: MyLoadingComponent
});
const AsyncNotFound = Loadable({
  loader: () => import("./containers/NotFound"),
  loading: MyLoadingComponent
});

const Main = () =>
  <Switch>
    <Route exact path="/" component={AsyncHome} />
    <Route exact path="/home" component={AsyncHome} />
    <Route exact path="/about" component={AsyncAbout} />
    <Route exact path="/portfolio" component={AsyncPortfolio} />
    <Route exact path="/projects" component={AsyncPortfolio} />

    {/* Unmatched URLs */}
    <Route component={AsyncNotFound} />
  </Switch>;

export default Main;
