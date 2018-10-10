import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '@constants/routes';
import Game from '@screens/Game';
import Home from '@screens/Home';
import E404 from '@screens/Errors/E404';

function Dashboard() {
  return (
    <Fragment>
      <Switch>
        <Route exact path={routes.HOME.path} component={Home} />
        <Route path={routes.GAME.path} component={Game} />
        <Route component={E404} />
      </Switch>
    </Fragment>
  );
}

export default Dashboard;
