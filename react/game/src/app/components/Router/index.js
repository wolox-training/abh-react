import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import ROUTES from '@constants/routes';
import Login from '@screens/Login';
import { history } from '@redux/store';
import AuthRoute from '@components/AuthRoute';
import Dashboard from '@screens/Dashboard';

function Router() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <AuthRoute path={ROUTES.LOGIN.path} component={Login} />
        <AuthRoute path={ROUTES.HOME.path} component={Dashboard} isPrivate />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
