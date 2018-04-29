import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import injectGlobal from './theme/globalStyle'; // eslint-disable-line

ReactGA.initialize('UA-109877572-1');
ReactGA.pageview(window.location.pathname + window.location.search);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
