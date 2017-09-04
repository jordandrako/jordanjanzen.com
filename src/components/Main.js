import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from './Loading';

const AsyncHome = Loadable({
  loader: () => import('../containers/Home'),
  loading: Loading,
});
const AsyncAbout = Loadable({
  loader: () => import('../containers/About'),
  loading: Loading,
});
const AsyncPortfolio = Loadable({
  loader: () => import('../containers/Portfolio'),
  loading: Loading,
});
const AsyncNotFound = Loadable({
  loader: () => import('../containers/NotFound'),
  loading: Loading,
});

const Main = () => (
  <Switch>
    <Route exact path="/" onlyActiveOnIndex component={AsyncHome} />
    <Route exact path="/home" component={AsyncHome} />
    <Route exact path="/about" component={AsyncAbout} />
    <Route exact path="/portfolio" component={AsyncPortfolio} />\
    {/* Unmatched URLs */}
    <Route component={AsyncNotFound} />
  </Switch>
);

export default Main;
