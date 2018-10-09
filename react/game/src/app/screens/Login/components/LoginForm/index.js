import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';
import Logo from '@components/Logo';

import styles from './styles.scss';

class LoginForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(event);

    // this.props.onSubmit(values);
  };

  render() {
    return (
      <form className={styles.loginForm} onSubmit={this.handleSubmit}>
        <Logo />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit" disabled={this.props.pristine || this.props.submitting}>
          Login
        </button>
        <p className={styles.message}>
          Not registered? <a href="#">Create an account</a>
        </p>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: func.isRequired
};

export default reduxForm({
  form: 'loginForm' // a unique identifier for this form
})(LoginForm);

/* <form className={styles.loginForm} onSubmit={this.handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <Field name="firstName" component="input" type="text" placeholder="First Name" />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field name="lastName" component="input" type="text" placeholder="Last Name" />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email" />
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <Field name="sex" component="input" type="radio" value="male" /> Male
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="female" /> Female
            </label>
          </div>
        </div>
        <div>
          <label>Favorite Color</label>
          <div>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </div>
        </div>
        <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field name="employed" id="employed" component="input" type="checkbox" />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={this.props.pristine || this.props.submitting}
            onClick={this.props.reset}
          >
            Clear Values
          </button>
        </div>
    </form> */
