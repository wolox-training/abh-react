import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ROUTES from '@constants/routes';
import { Link } from 'react-router-dom';
import { func, bool, string } from 'prop-types';
import { FORM_NAMES } from '@constants/formNames';
import Input from '@components/Form/Input';
import { required, minLength, email } from '@validation/forms';

import styles from './styles.scss';

function LoginForm({ handleSubmit, onSubmit, pristine, submitting, errorMessage }) {
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Field
        validate={[required, email]}
        name="email"
        id="login-email"
        type="email"
        placeholder="example@example.com"
        label="Email"
        component={Input}
      />
      <Field
        name="password"
        id="login-password"
        type="password"
        placeholder="*******"
        label="Password"
        validate={[required, minLength]}
        component={Input}
      />
      {errorMessage && <div className={styles.errorMessage}>Error: {errorMessage}</div>}
      <button className={styles.formButton} disabled={pristine || submitting} type="submit">
        Login
      </button>
      <p className={styles.message}>
        Not registered? <Link to={ROUTES.REGISTER.path}>Create an account</Link>
      </p>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: func.isRequired,
  handleSubmit: func.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired,
  errorMessage: string
};

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
});

const ConnectedLoginForm = connect(mapStateToProps)(LoginForm);

export default reduxForm({
  form: FORM_NAMES.LOGIN_FORM
})(ConnectedLoginForm);
