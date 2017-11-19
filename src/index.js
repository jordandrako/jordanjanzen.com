import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import injectGlobal from './theme/globalStyle'; // eslint-disable-line

ReactGA.initialize('UA-109877572-1');
ReactGA.pageview(window.location.pathname + window.location.search);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();
