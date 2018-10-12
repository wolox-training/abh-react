import React from 'react';
import { func, bool, string } from 'prop-types';
import { Redirect } from 'react-router-dom';
import ROUTES from '@constants/routes';
import { service as localStorageService } from '@services/localStorageService';
import { AUTH_SESSION_NAME } from '@constants/localStorage';

function AuthRoute({ component: AuthComponent, isPrivate, ...props }) {
  const session = localStorageService.get(AUTH_SESSION_NAME);
  const isLoggedIn = session ? !!session.token : false;
  // const isLoggedIn = true;
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
