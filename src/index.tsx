import * as React from 'react';
import { render } from 'react-dom';
import * as ReactGA from 'react-ga';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';

import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize('UA-109877572-1');
ReactGA.pageview(window.location.pathname + window.location.search);

render(
  <BrowserRouter>
    <Route>{(props: RouteComponentProps<any>) => <App {...props} />}</Route>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
