import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// import App from './App';
import ComingSoon from './components/containers/ComingSoon';

import './index.css';

render(
  <HashRouter>
    {/* <App /> */}
    <ComingSoon />
  </HashRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
