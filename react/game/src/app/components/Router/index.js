import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, PrivateRoute } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import Game from '@screens/Game';
import Login from '@components/Login';

function Router() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={ROUTES.LOGIN.path} component={Login} />
        <Route path={ROUTES.GAME.path} component={Game} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
