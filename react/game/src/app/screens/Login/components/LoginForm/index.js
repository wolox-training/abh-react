import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ROUTES from '@constants/routes';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import Logo from '@components/Logo';

import styles from './styles.scss';

class LoginForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(event);
  };

  render() {
    return (
      <form className={styles.loginForm} onSubmit={this.handleSubmit}>
        <Logo />
        <input className={styles.authFormsInput} type="text" placeholder="username" />
        <input className={styles.authFormsInput} type="password" placeholder="password" />
        <button className={styles.formButton} type="submit">
          Login
        </button>
        <p className={styles.message}>
          Not registered? <Link to={ROUTES.REGISTER.path}>Create an account</Link>
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
