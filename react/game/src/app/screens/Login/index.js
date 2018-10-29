import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators as loginActions } from '@redux/auth/actions';

import LoginLayout from './layout';

class LoginContainer extends Component {
  onSubmit = values => {
    const { email, password } = values;
    this.props.login(email, password);
  };

  render() {
    const { loading } = this.props;
    return <LoginLayout onSubmit={this.onSubmit} loading={loading} />;
  }
}

const mapStateToProps = state => ({
  loading: state.auth.authInfoLoading
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginActions.login(email, password))
});

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
