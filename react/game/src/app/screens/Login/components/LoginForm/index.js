import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginFormLayout from './layout';

function LoginForm({ errorMessage, loading, onSubmit }) {
  return <LoginFormLayout onSubmit={onSubmit} loading={loading} errorMessage={errorMessage} />;
}

const mapStateToProps = state => ({
  errorMessage: state.auth.authInfoError,
  loading: state.auth.authInfoLoading
});

LoginForm.propTypes = {
  errorMessage: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LoginForm);
