import React, { Component } from 'react';
import { shape, string, int, func } from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators as loginActions } from '@redux/auth/actions';

import TopbarLayout from './layout';

class Topbar extends Component {
  logout = () => {
    this.props.handleLogout();
  };

  render() {
    return <TopbarLayout logout={this.logout} email={this.props.userInfo.email} />;
  }
}

const mapStateToProps = state => ({
  userInfo: state.auth.userInfo
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(loginActions.handleLogout())
});

Topbar.propTypes = {
  userInfo: shape({ email: string, firstName: string, lastName: string, age: int }).isRequired,
  handleLogout: func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  { pure: false }
)(Topbar);
