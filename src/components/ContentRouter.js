import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from '../containers/Loading';

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
const AsyncTodo = Loadable({
  loader: () => import('../containers/Todo'),
  loading: Loading,
});
const AsyncNotFound = Loadable({
  loader: () => import('../containers/NotFound'),
  loading: Loading,
});

const ContentRouter = () => (
  <Switch>
    <Route exact key="/" path="/" component={AsyncHome} />
    <Route exact key="/home" path="/home" component={AsyncHome} />
    <Route exact key="/about" path="/about" component={AsyncAbout} />
    <Route exact key="/portfolio" path="/portfolio" component={AsyncPortfolio} />
    <Route exact key="/todo" path="/todo" component={AsyncTodo} />
    {/* Unmatched URLs */}
    <Route key="404" component={AsyncNotFound} />
  </Switch>
);

ContentRouter.propTypes = {};

export default ContentRouter;
