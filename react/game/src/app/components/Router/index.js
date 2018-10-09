import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '@constants/routes';
import Game from '@screens/Game';
import Login from '@screens/Login';
import { history } from '@redux/store';
import E404 from '@screens/Errors/E404';

function Router() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={ROUTES.LOGIN.path} component={Login} />
        <Route path={ROUTES.GAME.path} component={Game} />
        <Route component={E404} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
