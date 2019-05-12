/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Component } from 'react';
import { Switch, Route, IndexRouter } from 'react-router-dom';
import HomePage from '../HomePage/index';
import Dashboard from '../Dashboard/Dashboard';
import Overview from '../Dashboard/Overview';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Dashboard}>
            <IndexRouter component={Overview} />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}
