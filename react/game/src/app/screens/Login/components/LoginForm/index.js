import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ROUTES from '@constants/routes';
import { Link } from 'react-router-dom';
import { func, bool, string } from 'prop-types';
import formNames from '@constants/formNames';
import Input from '@components/CustomFormFields/Input';
import Button from '@components/CustomFormFields/Button';
import { required, minLength, email } from '@validation/forms';

import styles from './styles.scss';

function LoginForm({ handleSubmit, pristine, submitting, errorMessage }) {
  const { fields, btnTitles, btnTooltips } = formNames.LOGIN;
  const placeholders = formNames.PLACEHOLDERS;
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <Field
        type="email"
        validate={[required, email]}
        component={Input}
        label={fields.email.label}
        id={fields.email.id}
        name={fields.email.name}
        placeholder={placeholders.EMAIL}
      />
      <Field
        type="password"
        component={Input}
        validate={[required, minLength]}
        label={fields.password.label}
        id={fields.password.id}
        name={fields.password.name}
        placeholder={placeholders.PASSWORD}
      />
      {errorMessage && <div className={styles.errorMessage}>Error: {errorMessage}</div>}
      <Button disabled={pristine || submitting} type="submit" title={btnTooltips.login} visible>
        {btnTitles.login}
      </Button>
      <p className={styles.message}>
        Not registered?{' '}
        <Link to={ROUTES.AUTH.REGISTER.path} title={btnTooltips.register}>
          {btnTitles.register}
        </Link>
      </p>
    </form>
  );
}

LoginForm.propTypes = {
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
  form: formNames.LOGIN.name
})(ConnectedLoginForm);
