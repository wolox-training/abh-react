import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ROUTES from '@constants/routes';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import Logo from '@components/Logo';
import { FORM_NAMES } from '@constants/formNames';
import Input from '@components/Form/Input';
import { required, minLength, email } from '@validation/forms';

import styles from './styles.scss';

function LoginForm({ handleSubmit, onSubmit }) {
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Logo />
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
      <button className={styles.formButton} type="submit">
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
  handleSubmit: func.isRequired
};

export default reduxForm({
  form: FORM_NAMES.LOGIN_FORM
})(LoginForm);
