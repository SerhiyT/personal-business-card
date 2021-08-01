import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { I18nextProvider } from 'react-i18next';
import { i18Service } from 'shared/services/localization.service';
import App from './App';

export const history = createBrowserHistory();

ReactDOM.render(
  <I18nextProvider i18n={i18Service.init('en-US')}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </I18nextProvider>,
  document.getElementById('root')
);
