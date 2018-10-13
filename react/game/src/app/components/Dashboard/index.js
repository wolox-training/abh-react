import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '@constants/routes';
import Game from '@screens/Game';
import Home from '@screens/Home';
import E404 from '@screens/Errors/E404';

function Dashboard() {
  return (
    <Fragment>
      <Switch>
        <Route exact path={ROUTES.PRIVATE.HOME.path} component={Home} />
        <Route path={ROUTES.PRIVATE.GAME.path} component={Game} />
        <Route component={E404} />
      </Switch>
    </Fragment>
  );
}

export default Dashboard;
