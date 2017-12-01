import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import * as Pages from './components/views';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Pages.HomeView} />
    <Route path='login' component={Pages.LoginView} />
    <Route path='home' component={Page.HomeView} />
  </Route>
);