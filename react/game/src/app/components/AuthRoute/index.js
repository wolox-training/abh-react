import React from 'react';
import { func, bool } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import ROUTES from '@constants/routes';
import { service as localStorageService } from '@services/localStorageService';
import { AUTH_SESSION_NAME } from '@constants/localStorage';
import { checkRoute } from '@utils/router';
import E404 from '@screens/Errors/E404';

function AuthRoute({ component: AuthComponent, isPrivate, ...props }) {
  const session = localStorageService.get(AUTH_SESSION_NAME);
  const isLoggedIn = session ? session.token : false;
  const pathname = props.location.pathname;
  if (!isLoggedIn && isPrivate) {
    if (pathname === '/') return <Redirect to={ROUTES.AUTH.LOGIN.path} />;
    const isAuth = checkRoute(ROUTES.AUTH, pathname);
    return isAuth ? <Redirect to={pathname} /> : <Route component={E404} />;
  } else if (isLoggedIn && !isPrivate) {
    const isAuth = checkRoute(ROUTES.AUTH, pathname);
    return isAuth ? <Redirect to={ROUTES.PRIVATE.HOME.path} /> : <Redirect to={pathname} />;
  }
  return <AuthComponent {...props} />;
}

AuthRoute.propTypes = {
  component: func.isRequired,
  isPrivate: bool
};

export default AuthRoute;
