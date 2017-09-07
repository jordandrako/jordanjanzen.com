import React from 'react';
import PropTypes from 'prop-types';
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

const Main = props => (
  <Switch>
    <Route exact key={props.path} path="/" component={AsyncHome} />
    <Route exact key={props.path} path="/home" component={AsyncHome} />
    <Route exact key={props.path} path="/about" component={AsyncAbout} />
    <Route exact key={props.path} path="/portfolio" component={AsyncPortfolio} />
    {/* Unmatched URLs */}
    <Route key={props.path} component={AsyncNotFound} />
  </Switch>
);

Main.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Main;
