import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import routes from '@constants/routes';
import { actionCreators as loginActions } from '@redux/auth/actions';
import { getRouteName } from '@utils/router';

import TopbarLayout from './layout';

class Topbar extends Component {
  render() {
    return (
      <TopbarLayout
        routeName={getRouteName(routes.PRIVATE, this.props.currentLocation)}
        logout={this.props.handleLogout}
        email={this.props.userInfo.email}
      />
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.auth.userInfo
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(loginActions.handleLogout())
});

Topbar.propTypes = {
  userInfo: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.int
  }).isRequired,
  handleLogout: PropTypes.func.isRequired,
  currentLocation: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  { pure: false }
)(Topbar);
