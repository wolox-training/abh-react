import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import routes from '@constants/routes';
import { actionCreators as loginActions } from '@redux/auth/actions';
import { getRouteName } from '@utils/router';

import TopbarLayout from './layout';

function Topbar({ currentLocation, logout, email }) {
  return (
    <TopbarLayout routeName={getRouteName(routes.PRIVATE, currentLocation)} logout={logout} email={email} />
  );
}

const mapStateToProps = state => ({
  email: state.auth.authInfo.email
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(loginActions.logout())
});

Topbar.propTypes = {
  email: PropTypes.string,
  logout: PropTypes.func.isRequired,
  currentLocation: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar);
