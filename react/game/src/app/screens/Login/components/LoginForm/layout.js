import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Input from '@components/CustomFormFields/Input';
import { required, minLength, email } from '@validation/forms';
import formNames from '@constants/formNames';

import LoginActions from './components/LoginActions';
import styles from './styles.scss';

const { fields } = formNames.LOGIN;
const placeholders = formNames.PLACEHOLDERS;
function LoginFormLayout({ handleSubmit, pristine, submitting, errorMessage, loading }) {
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
      <LoginActions
        errorMessage={errorMessage}
        loading={loading}
        pristine={pristine}
        submitting={submitting}
      />
    </form>
  );
}

LoginFormLayout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default reduxForm({
  form: formNames.LOGIN.name
})(LoginFormLayout);
