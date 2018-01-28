import React, { Component } from 'react';
import Header from './header';
import { Route } from 'react-router-dom';
import Resources from './resources';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path='/resources' component={Resources}/>
      </div>
    );
  }
}