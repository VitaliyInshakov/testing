import React, { Component } from 'react';
import Header from './header';
import { Route } from 'react-router-dom';
import Resources from './resources';
import requireAuth from './require_auth';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path='/resources' component={requireAuth(Resources)}/>
      </div>
    );
  }
}