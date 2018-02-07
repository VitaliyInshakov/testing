import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }
  
  render() {
    return (
      <div>{this.props.message}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.message
  }
}

export default connect(mapStateToProps, actions)(Feature);