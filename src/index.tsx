import polyfill from 'dynamic-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

polyfill({
  agentFallback: 'polyfill',
  fills: [
    'Array.from',
    'Array.prototype.every',
    'Array.prototype.forEach',
    'Array.prototype.indexOf',
    'Array.prototype.reduce',
    'Date.now',
    'Object.keys',
  ],
  options: ['gated', 'always'],
  afterFill() {
    import(
      /* webpackChunkName: 'App', webpackPreload: true */ './App/App'
    ).then(App => {
      render(
        <BrowserRouter>
          <Route>
            {(props: RouteComponentProps<any>) => <App.default {...props} />}
          </Route>
        </BrowserRouter>,
        document.getElementById('root') as HTMLElement
      );
    });
  },
});
registerServiceWorker();
