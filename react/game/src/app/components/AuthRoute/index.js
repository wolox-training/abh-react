import React from 'react';
import { func, bool, string } from 'prop-types';
import { Redirect } from 'react-router-dom';
import ROUTES from '@constants/routes';

function AuthRoute({ component: AuthComponent, isPrivate, ...props }) {
  const isLoggedIn = false;

  if (!isLoggedIn && isPrivate) {
    return <Redirect to={ROUTES.LOGIN.path} />;
  } else if (isLoggedIn && !isPrivate) {
    return <Redirect to={ROUTES.HOME.path} />;
  }
  return <AuthComponent {...props} />;
}

AuthRoute.propTypes = {
  component: func.isRequired,
  path: string.isRequired,
  isPrivate: bool
};

export default AuthRoute;
