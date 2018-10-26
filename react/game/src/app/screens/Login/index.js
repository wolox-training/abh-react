import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators as loginActions } from '@redux/auth/actions';

import LoginLayout from './layout';

class LoginContainer extends Component {
  onSubmit = values => {
    const { email, password } = values;
    this.props.login(email, password);
  };

  render() {
    return <LoginLayout onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = state => ({
  loading: state.auth.authInfoLoading
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginActions.handleLogin(email, password))
});

LoginContainer.propTypes = {
  login: func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
