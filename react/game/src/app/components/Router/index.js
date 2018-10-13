import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '@constants/routes';
import Login from '@screens/Login';
import { history } from '@redux/store';
import AuthRoute from '@components/AuthRoute';
import Dashboard from '@components/Dashboard';
import E404 from '@screens/Errors/E404';

function Router() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <AuthRoute path={ROUTES.AUTH.LOGIN.path} component={Login} />
        <AuthRoute
          path={ROUTES.AUTH.REGISTER.path}
          component={() => <div>Register</div>} /* TODO: the register component will be added soon */
        />
        <AuthRoute path={ROUTES.PRIVATE.HOME.path} component={Dashboard} isPrivate />
        <Route component={E404} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
