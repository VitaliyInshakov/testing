import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser({ formProps })
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field
            name="email"
            component="input"
            type="text"
            className="form-control"
          />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field
            name="password"
            component="input"
            type="password"
            className="form-control"
          />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <Field
            name="passwordConfirm"
            component="input"
            type="password"
            className="form-control"
          />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    )
  }
}

function validate(formProps) {
  const errors = {};

  if(!formProps.email) {
    errors.email = 'Please enter an email!';
  }

  if(!formProps.password) {
    errors.password = 'Please enter a password!';
  }

  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation!';
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Password must match!'
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  }
}
const signupForm =  reduxForm({
  form: 'signup',
  validate
})(Signup);

export default connect(mapStateToProps, actions)(signupForm);